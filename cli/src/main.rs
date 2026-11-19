// type til ya die, in the terminal. A typing game where your speed drives the music.
//   type-til-ya-die            play
//   type-til-ya-die --mute     play with no sound
//   type-til-ya-die --render out.wav   write 60 s of the music, from cold to the choir, and show its levels

mod audio;
mod color;
mod fire;
mod game;
mod quotes;
mod screen;
mod train;
mod view;

use crossterm::event::{self, DisableMouseCapture, EnableMouseCapture, Event, KeyCode, KeyEventKind, KeyModifiers, MouseEventKind};
use crossterm::{cursor, execute, terminal};
use game::{Game, Key};
use std::error::Error;
use std::io;
use std::path::PathBuf;
use std::sync::atomic::Ordering::Relaxed;
use std::sync::Arc;
use std::time::{Duration, Instant};

const TICK_S: f64 = 0.1;

fn main() -> Result<(), Box<dyn Error>> {
    let args: Vec<String> = std::env::args().skip(1).collect();
    match args.iter().map(String::as_str).collect::<Vec<_>>()[..] {
        [] => play(false),
        ["--mute"] => play(true),
        ["--render", path] => render(path),
        _ => Err("usage: type-til-ya-die [--mute | --render out.wav]".into()),
    }
}

fn play(muted: bool) -> Result<(), Box<dyn Error>> {
    let quotes = quotes::load()?;
    let best_file = dirs::data_dir().ok_or("no data folder")?.join("type-til-ya-die").join("best-10s");
    let best = std::fs::read_to_string(&best_file).ok().and_then(|s| s.trim().parse().ok()).unwrap_or(0.);
    let params = Arc::new(audio::Params::new());
    let _stream = if muted { None } else { Some(audio::start(params.clone())?) };

    // Put the terminal back on a panic, or the shell is left in raw mode
    let hook = std::panic::take_hook();
    std::panic::set_hook(Box::new(move |info| {
        restore();
        hook(info)
    }));
    terminal::enable_raw_mode()?;
    execute!(io::stdout(), terminal::EnterAlternateScreen, cursor::Hide, EnableMouseCapture)?;
    let result = run(Game::new(quotes, best), &params, muted);
    restore();
    save_best(&best_file, result?.all_best)?;
    Ok(())
}

fn restore() {
    let _ = execute!(io::stdout(), DisableMouseCapture, cursor::Show, terminal::LeaveAlternateScreen);
    let _ = terminal::disable_raw_mode();
}

fn save_best(file: &PathBuf, best: f64) -> io::Result<()> {
    std::fs::create_dir_all(file.parent().unwrap())?;
    std::fs::write(file, format!("{best}\n"))
}

fn run(mut game: Game, params: &audio::Params, muted: bool) -> Result<Game, Box<dyn Error>> {
    let mut fire = fire::Fire::new();
    let mut train = train::Train::new();
    let mut screen = screen::Screen::new();
    let mut show_more = false;
    let start = Instant::now();
    let wall = std::time::SystemTime::now().duration_since(std::time::UNIX_EPOCH)?.as_secs_f64() * 1000.;
    let (mut next_tick, mut next_fire, mut next_train) = (0., 0., 0.);
    let mut size = terminal::size()?;

    loop {
        let now = start.elapsed().as_secs_f64();
        let layout = view::layout(size.0 as usize, size.1 as usize);

        // The timers of the web game: the engine every 100 ms, the fire every 60 ms, the train every 30 ms.
        // After a stall they skip ahead, so they do not run many frames at once.
        if now >= next_tick {
            game.tick(now);
            params.cpm.set(game.cpm as f32);
            params.energy.set(game.energy as f32);
            params.spider.store(game.spider_level, Relaxed);
            params.choir_level.set(if game.choir { game.choir_level as f32 } else { 0. });
            next_tick = (next_tick + TICK_S).max(now);
        }
        if now >= next_fire {
            let heard = if game.choir { game.choir_heard(now) } else { 0. };
            fire.frame(game.energy, game.started_at.is_some(), game.choir, heard);
            next_fire = (next_fire + fire::FIRE_FRAME_S).max(now);
        }
        if now >= next_train {
            let heat = if game.started_at.is_some() { fire.flame } else { 0. };
            train.frame(heat, size.0 as usize);
            next_train = (next_train + train::TRAIN_FRAME_S).max(now);

            let mut grid = screen::Grid::new(size.0 as usize, size.1 as usize);
            match &layout {
                Some(l) => {
                    game.scroll(l.text_w);
                    let frame = view::Frame { game: &game, fire: &fire, train: &train, show_more, muted, now_ms: wall + now * 1000. };
                    view::draw(&mut grid, l, &frame);
                }
                None => {
                    let (w, h) = view::min_size();
                    grid.text(0, 0, &format!("make the terminal at least {w}x{h}"), color::NEG);
                }
            }
            screen.flush(grid)?;
        }

        let wait = next_tick.min(next_fire).min(next_train) - start.elapsed().as_secs_f64();
        if !event::poll(Duration::from_secs_f64(wait.max(0.)))? {
            continue;
        }
        match event::read()? {
            Event::Key(k) if k.kind != KeyEventKind::Release => {
                let ctrl = k.modifiers.contains(KeyModifiers::CONTROL);
                let alt = k.modifiers.contains(KeyModifiers::ALT);
                let key = match k.code {
                    KeyCode::Esc => return Ok(game),
                    KeyCode::Char('c') if ctrl => return Ok(game),
                    KeyCode::Tab => {
                        show_more = !show_more;
                        None
                    }
                    // Ctrl+Backspace, Option+Backspace (Alt) and Ctrl+W clear the word
                    KeyCode::Backspace if ctrl || alt => Some(Key::ClearWord),
                    KeyCode::Char('w' | 'h') if ctrl => Some(if k.code == KeyCode::Char('w') { Key::ClearWord } else { Key::Backspace }),
                    KeyCode::Backspace => Some(Key::Backspace),
                    KeyCode::Char(c) if !ctrl && !alt && (c.is_ascii_graphic() || c == ' ') => Some(Key::Char(c)),
                    _ => None,
                };
                if let Some(key) = key {
                    game.type_key(key, start.elapsed().as_secs_f64());
                    params.typo.store(game.typo, Relaxed);
                    if let Some(l) = &layout {
                        game.scroll(l.text_w);
                    }
                }
            }
            // A click on the fire also shows or hides the average and best
            Event::Mouse(m) if m.kind == MouseEventKind::Down(event::MouseButton::Left) => show_more = !show_more,
            Event::Resize(w, h) => {
                size = (w, h);
                screen.invalidate();
            }
            _ => {}
        }
    }
}

// 60 s of the music with no terminal: cold, then the energy climbs to 1, the spider climbs, and from 35 s
// the choir fades in. A typo at 20 s changes the key for 2 s. Prints the peak and loudness of each 5 s.
fn render(path: &str) -> Result<(), Box<dyn Error>> {
    let sr = 48000;
    let p = Arc::new(audio::Params::new());
    let mut synth = audio::Synth::new(sr as f32, p.clone());
    let mut samples: Vec<f32> = vec![];
    let block = sr / 20;
    for b in 0..60 * 20 {
        let t = b as f32 / 20.;
        let energy = ((t - 5.) / 30.).clamp(0., 1.);
        p.energy.set(energy);
        p.cpm.set((80. + 30. * energy).round() / 4.);
        p.spider.store(if t < 15. { 0 } else if t < 28. { 1 } else { 2 }, Relaxed);
        p.choir_level.set(if t >= 35. { ((t - 35.) / 4.).min(1.) } else { 0. });
        p.typo.store((20. ..22.).contains(&t), Relaxed);
        let mut buf = vec![0.; block * 2];
        synth.render(&mut buf, 2);
        samples.extend(buf);
    }
    for (i, part) in samples.chunks(sr * 2 * 5).enumerate() {
        let peak = part.iter().fold(0f32, |m, x| m.max(x.abs()));
        let rms = (part.iter().map(|x| x * x).sum::<f32>() / part.len() as f32).sqrt();
        println!("{:>2}-{:>2} s  peak {:5.2}  rms {:5.1} dBFS", i * 5, i * 5 + 5, peak, 20. * rms.log10());
    }
    let mut wav = Vec::with_capacity(44 + samples.len() * 2);
    let data = (samples.len() * 2) as u32;
    wav.extend(b"RIFF");
    wav.extend((36 + data).to_le_bytes());
    wav.extend(b"WAVEfmt ");
    wav.extend(16u32.to_le_bytes());
    wav.extend(1u16.to_le_bytes()); // PCM
    wav.extend(2u16.to_le_bytes());
    wav.extend((sr as u32).to_le_bytes());
    wav.extend((sr as u32 * 4).to_le_bytes());
    wav.extend(4u16.to_le_bytes());
    wav.extend(16u16.to_le_bytes());
    wav.extend(b"data");
    wav.extend(data.to_le_bytes());
    for s in samples {
        wav.extend(((s.clamp(-1., 1.) * 32767.) as i16).to_le_bytes());
    }
    std::fs::write(path, wav)?;
    println!("wrote {path}");
    Ok(())
}
