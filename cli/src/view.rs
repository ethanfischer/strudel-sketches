// One frame of the screen: the train band at the top, the fire, the 3 lines of text over the fire,
// and the WPM halfway between the top of the fire and the text.

use crate::color::{alpha, hex, mix, ramp, Rgb, ACCENT, NEG};
use crate::fire::{Fire, FIRE_HEAD, FIRE_UNDER_TEXT, FIRE_W, KINDLING, ROWS};
use crate::game::{Game, CHOIR_HOLD_S};
use crate::screen::{to8, Grid};
use crate::train::{Train, TRAIN_ROWS};

// The text heats up with the fire (white, gold, orange) and turns blue with the choir. Upcoming text stays darker.
const TEXT_DONE: [(f32, Rgb); 3] = [(0., [255., 255., 255.]), (0.5, [255., 212., 121.]), (1., [255., 140., 40.])];
const TEXT_NEXT: [(f32, Rgb); 3] = [(0., [102., 102., 102.]), (0.5, [135., 100., 70.]), (1., [165., 80., 40.])];
const CHOIR_DONE: Rgb = [130., 205., 255.];
const CHOIR_NEXT: Rgb = [70., 110., 180.];

const TEXT_LINES: usize = 3;
const TEXT_ROWS: usize = 2 * TEXT_LINES - 1;  // a blank row between lines
const TEXT_MAX_W: usize = 56;
// The text box ends FIRE_UNDER_TEXT rows above the kindling
const TEXT_TOP: usize = ROWS - KINDLING.len() - FIRE_UNDER_TEXT - TEXT_ROWS;
const BAND: usize = 1 + TRAIN_ROWS + 1;  // a row over the train and a row under it
pub const MIN_W: usize = FIRE_W + 4;

pub struct Layout {
    pub train: bool,
    pub fire_x: i32,
    pub fire_y: i32,
    pub text_w: usize,
}

// Places the text box at the middle of the room under the train band. Only the spark rows (FIRE_HEAD) may
// go up behind the band. Without room for the band, there is no train. None: the terminal is too small.
pub fn layout(w: usize, h: usize) -> Option<Layout> {
    if w < MIN_W {
        return None;
    }
    let text_w = (w - 4).min(TEXT_MAX_W);
    let fire_x = ((w - FIRE_W) / 2) as i32;
    let bottom = h as i32 - 1; // the help line
    for band in [BAND as i32, 0] {
        let mid = band + (bottom - band) / 2;
        let lo = band - FIRE_HEAD as i32;
        let hi = bottom - ROWS as i32;
        if lo <= hi {
            let fire_y = (mid - (TEXT_TOP + TEXT_ROWS / 2) as i32).clamp(lo, hi);
            return Some(Layout { train: band > 0, fire_x, fire_y, text_w });
        }
    }
    None
}

pub fn min_size() -> (usize, usize) {
    (MIN_W, ROWS - FIRE_HEAD + 1)
}

pub struct Frame<'a> {
    pub game: &'a Game,
    pub fire: &'a Fire,
    pub train: &'a Train,
    pub show_more: bool,
    pub muted: bool,
    pub now_ms: f64,
}

pub fn draw(grid: &mut Grid, l: &Layout, f: &Frame) {
    let g = f.game;
    let lit = g.started_at.is_some();
    let heat = if lit { f.fire.flame } else { 0. };

    let top = if l.train { BAND as i32 } else { 0 };
    let hold = (g.held / CHOIR_HOLD_S) as f32;
    f.fire.draw(grid, l.fire_x, l.fire_y, lit, hold);
    // The spark rows that go up behind the band are cut off
    for y in 0..top.min(grid.h as i32) {
        for x in 0..grid.w as i32 {
            grid.erase(x, y);
        }
    }
    if l.train {
        f.train.draw(grid, 1, heat, f.now_ms);
    }

    // The text box: a dark band dims the fire behind it to 30%. On the text rows there is no fire, because a
    // flame character between two words looks like punctuation.
    let box_x = ((grid.w - l.text_w) / 2) as i32;
    let box_y = l.fire_y + TEXT_TOP as i32;
    for y in box_y..box_y + TEXT_ROWS as i32 {
        for x in box_x - 1..=box_x + l.text_w as i32 {
            if (y - box_y) % 2 == 0 {
                grid.erase(x, y);
            } else if let Some(cell) = grid.cell_mut(x, y) {
                let (r, gg, b) = cell.fg;
                cell.fg = to8(alpha([r as f32, gg as f32, b as f32], 0.3));
            }
        }
    }
    let energy = heat as f32;
    let blue = f.fire.blue as f32;
    let done = mix(ramp(&TEXT_DONE, energy), CHOIR_DONE, blue);
    let next = mix(ramp(&TEXT_NEXT, energy), CHOIR_NEXT, blue);
    draw_text(grid, g, box_x, box_y, l.text_w, done, next);

    // WPM: dull grey, halfway between the top of the fire and the text
    let wpm_y = l.fire_y + TEXT_TOP as i32 / 2;
    if lit {
        center(grid, wpm_y, &format!("{} wpm", g.wpm_shown.round()), hex(0x777777));
    }
    if f.show_more {
        center(grid, wpm_y + 1, &format!("avg {} · best {}", g.avg.round(), g.all_best.round()), hex(0x5f5f5f));
    }

    let help = if f.muted { "tab: stats · esc: quit · muted" } else { "tab: stats · esc: quit" };
    center(grid, grid.h as i32 - 1, help, hex(0x3a3a3a));
}

// Each line is centered. Finished letters are `done`, upcoming `next`, wrong ones pink. The cursor is an
// accent underline under the next letter.
fn draw_text(grid: &mut Grid, g: &Game, x0: i32, y0: i32, width: usize, done: Rgb, next: Rgb) {
    let layout = g.layout(width);
    let mut line_w = [0usize; TEXT_LINES];
    for (i, (line, x)) in layout.iter().enumerate() {
        if *line < TEXT_LINES {
            line_w[*line] = x + g.word_len(i);
        }
    }
    for (i, (line, x)) in layout.iter().enumerate() {
        if *line >= TEXT_LINES {
            break;
        }
        let target: Vec<char> = (g.words[i].clone() + " ").chars().collect();
        let typed: Vec<char> = if i < g.wi { target.clone() } else if i == g.wi { g.typed.chars().collect() } else { vec![] };
        let sx = x0 + (width.saturating_sub(line_w[*line]) / 2 + x) as i32;
        let sy = y0 + 2 * *line as i32;
        let n = target.len().max(typed.len());
        // The cursor is on the next letter, or on the last one when you typed past the end of the word
        let cursor = if i == g.wi { Some(typed.len().min(n - 1)) } else { None };
        for j in 0..n {
            let (mut ch, mut color) = (target.get(j).copied().unwrap_or(' '), next);
            match typed.get(j) {
                Some(got) if Some(got) == target.get(j) => color = done,
                Some(got) => {
                    color = NEG;
                    ch = if *got == ' ' { '_' } else { *got }; // show what you typed; a typed space shows as _
                }
                None => {}
            }
            let x = sx + j as i32;
            if ch == ' ' {
                // The cursor on a space is an accent _
                if cursor == Some(j) {
                    grid.put(x, sy, '_', ACCENT);
                }
                continue;
            }
            grid.put(x, sy, ch, color);
            if cursor == Some(j) {
                if let Some(cell) = grid.cell_mut(x, sy) {
                    cell.underline = Some(to8(ACCENT));
                }
            }
        }
    }
}

fn center(grid: &mut Grid, y: i32, s: &str, color: Rgb) {
    let x = (grid.w as i32 - s.chars().count() as i32) / 2;
    for (i, ch) in s.chars().enumerate() {
        grid.put(x + i as i32, y, ch, color);
    }
}
