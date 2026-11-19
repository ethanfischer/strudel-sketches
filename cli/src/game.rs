// The game engine, ported from acidpoly.js: quotes in; WPM, typos and choir out.
// Times are in seconds since the game started.

use crate::quotes::Quote;
use std::collections::VecDeque;

pub const FULL_WPM: f64 = 100.;  // WPM for energy 1 and MAX_BPM
const MIN_BPM: f64 = 80.;        // tempo at 0 WPM
const MAX_BPM: f64 = 110.;       // tempo at FULL_WPM
const SPIDER_MED: f64 = 78.;     // in the first window only: WPM where the spider goes from low to medium

const WPM_WINDOW_S: f64 = 10.;   // rolling WPM window: stats, choir and tempo
const ENERGY_WINDOW_S: f64 = 3.; // shorter window for energy, so it follows your speed fast
pub const CHOIR_HOLD_S: f64 = 15.; // hold your best this long to bring in the choir
const CHOIR_BAND: f64 = 0.8;     // "your best" = 80% or more of best
const SPIDER_MED_BAND: f64 = 0.6;
const SPIDER_HIGH_HOLD_S: f64 = 8.;
const SPIDER_STEP_DOWN_S: f64 = 4.;
const CHOIR_GRACE_S: f64 = 1.5;  // a dip below the band shorter than this pauses the hold, not resets it
const CHOIR_FADE_IN_S: f64 = 4.;
const BEST_FADE: f64 = 1.;       // WPM per second that best falls while you type below it
const LOOKAHEAD_WORDS: usize = 50;
const IDLE_S: f64 = 2.;          // a pause longer than this does not count for your average
const WPM_RISE: f64 = 8.;        // the WPM over the fire moves toward your WPM this fast (WPM per second)…
const WPM_FALL: f64 = 5.;        // …and falls this fast, so it has momentum, as the train has

pub enum Key {
    Char(char),
    Backspace,
    ClearWord,
}

struct Chord {
    at: f64,
    gain: f64,
    step: f64,
}

pub struct Game {
    quotes: Vec<Quote>,
    pub words: Vec<String>,
    pub wi: usize,          // the active word
    pub typed: String,      // what you typed of it
    pub typo: bool,         // a wrong letter is not fixed yet
    // Word counts since the start. The scroll removes words from the start of `words`, so wi cannot be used.
    total: usize,
    done: usize,
    passages: VecDeque<(usize, String)>, // (endAt, source) for each quote in the text that is not finished
    pub last_source: String,
    hits: VecDeque<f64>,    // times of correct keystrokes, for rolling WPM
    pub started_at: Option<f64>,
    correct: i64,
    active_s: f64,          // seconds of typing, without pauses, for the average
    pub wpm_shown: f64,
    pub wpm: f64,
    energy_wpm: f64,
    best: f64,
    pub all_best: f64,      // all-time best, kept in a file
    pub avg: f64,
    pub energy: f64,        // 0..1, eases toward energy_wpm / FULL_WPM
    pub spider_level: u8,   // 0 low, 1 medium, 2 high
    spider_down_since: Option<f64>,
    pub held: f64,          // seconds held in the band
    out_since: Option<f64>,
    pub choir: bool,
    pub choir_level: f64,   // 0..1, fades in when the choir starts
    choir_chords: Vec<Chord>, // the choir chords as we expect them
    next_chord: Option<f64>,
    last_tick: f64,
    pub bpm: f64,
    pub cpm: f64,
}

impl Game {
    pub fn new(quotes: Vec<Quote>, all_best: f64) -> Game {
        let mut g = Game {
            quotes,
            words: vec![], wi: 0, typed: String::new(), typo: false,
            total: 0, done: 0, passages: VecDeque::new(), last_source: String::new(),
            hits: VecDeque::new(), started_at: None, correct: 0, active_s: 0.,
            wpm_shown: 0., wpm: 0., energy_wpm: 0., best: 0., all_best, avg: 0., energy: 0.,
            spider_level: 0, spider_down_since: None,
            held: 0., out_since: None, choir: false, choir_level: 0., choir_chords: vec![], next_chord: None,
            last_tick: 0., bpm: MIN_BPM, cpm: MIN_BPM.round() / 4.,
        };
        g.refill();
        g
    }

    pub fn type_key(&mut self, key: Key, now: f64) {
        let target = self.words[self.wi].clone() + " "; // the space that ends a word is part of it
        match key {
            Key::ClearWord => {
                let ok = self.typed.bytes().zip(target.bytes()).take_while(|(a, b)| a == b).count();
                for _ in 0..ok {
                    self.hits.pop_back();
                }
                self.correct -= ok as i64;
                self.typed.clear();
            }
            Key::Backspace => {
                if !self.typed.is_empty() && target.starts_with(&self.typed) {
                    self.hits.pop_back(); // the removed letter was correct
                    self.correct -= 1;
                }
                self.typed.pop();
            }
            Key::Char(c) => {
                if self.typed.len() >= target.len() + 10 {
                    return;
                }
                self.started_at.get_or_insert(now);
                self.typed.push(c);
                if target.starts_with(&self.typed) {
                    self.hits.push_back(now);
                    self.correct += 1;
                }
                if self.typed == target {
                    self.wi += 1;
                    self.done += 1;
                    self.typed.clear();
                    if self.passages.front().is_some_and(|p| p.0 == self.done) {
                        self.last_source = self.passages.pop_front().unwrap().1;
                    }
                    self.refill();
                }
            }
        }
        self.typo = !(self.words[self.wi].clone() + " ").starts_with(&self.typed);
        if self.typo {
            // a typo stops the choir now, not at the next tick
            self.held = 0.;
            self.choir = false;
        }
    }

    // Every 100 ms
    pub fn tick(&mut self, now: f64) {
        let window = WPM_WINDOW_S.max(ENERGY_WINDOW_S);
        while self.hits.front().is_some_and(|t| now - t > window) {
            self.hits.pop_front();
        }
        // Rolling WPM: correct characters / 5 over the whole window, so it ramps up from 0
        let wpm_over = |s: f64| self.hits.iter().filter(|t| now - **t <= s).count() as f64 / 5. / (s / 60.);
        self.wpm = wpm_over(WPM_WINDOW_S);
        self.energy_wpm = wpm_over(ENERGY_WINDOW_S);

        // Choir: hold near your best for CHOIR_HOLD_S. Wait one full window first,
        // so the ramp-up at the start does not count.
        let dt = now - self.last_tick;
        self.last_tick = now;
        let warm = self.started_at.is_some_and(|s| now - s >= WPM_WINDOW_S);
        if warm {
            self.best = self.wpm.max(self.best - BEST_FADE * dt);
        }
        let in_band = warm && self.wpm > 0. && self.wpm >= self.best * CHOIR_BAND;
        if in_band {
            self.held = (self.held + dt).min(CHOIR_HOLD_S);
            self.out_since = None;
        } else if now - *self.out_since.get_or_insert(now) > CHOIR_GRACE_S {
            self.held = 0.;
        }
        if self.typo {
            self.held = 0.; // the hold starts again only after you fix the typo
        }
        self.choir = self.held >= CHOIR_HOLD_S;
        self.choir_level = if self.choir { (self.choir_level + dt / CHOIR_FADE_IN_S).min(1.) } else { 0. };
        // The fire follows the choir chords (choir_heard): the first half a step after the choir starts, then one each step
        if self.choir {
            let step = self.choir_step();
            let next = self.next_chord.get_or_insert(now + step / 2.);
            while *next <= now {
                self.choir_chords.push(Chord { at: *next, gain: self.choir_level, step });
                *next += step;
            }
        } else {
            self.next_chord = None;
            self.choir_chords.clear();
        }

        let target = (self.energy_wpm / FULL_WPM).clamp(0., 1.);
        self.energy += (target - self.energy) * 0.2;
        let pace = (self.wpm / FULL_WPM).clamp(0., 1.);
        // Tempo glides toward the target
        self.bpm += (MIN_BPM + (MAX_BPM - MIN_BPM) * pace - self.bpm) * 0.1;
        self.cpm = self.bpm.round() / 4.;

        // Spider melody follows your best and the choir hold. It climbs at once, but cools down
        // one level at a time, after the target has been lower for SPIDER_STEP_DOWN_S.
        let spider_target = if !warm {
            (self.wpm >= SPIDER_MED) as u8
        } else if self.choir || self.held >= SPIDER_HIGH_HOLD_S {
            2
        } else {
            (self.wpm > 0. && self.wpm >= self.best * SPIDER_MED_BAND) as u8
        };
        if spider_target >= self.spider_level {
            self.spider_level = spider_target;
            self.spider_down_since = None;
        } else if now - *self.spider_down_since.get_or_insert(now) >= SPIDER_STEP_DOWN_S {
            self.spider_level -= 1;
            self.spider_down_since = Some(now);
        }

        self.refill();

        // Your WPM, with momentum; your average (typing time only) and your all-time best
        self.wpm_shown = if self.wpm > self.wpm_shown {
            self.wpm.min(self.wpm_shown + WPM_RISE * dt)
        } else {
            self.wpm.max(self.wpm_shown - WPM_FALL * dt)
        };
        if self.hits.back().is_some_and(|t| now - t < IDLE_S) {
            self.active_s += dt;
        }
        self.all_best = self.all_best.max(self.wpm);
        self.avg = if self.active_s > 0. { self.correct as f64 / 5. / (self.active_s / 60.) } else { 0. };
    }

    // Seconds in half a cycle: a new choir chord each step
    pub fn choir_step(&self) -> f64 {
        30. / self.cpm
    }

    // How loud the choir is now, 0..1, with the envelope of the PAD: each chord fades in over one step,
    // holds until two steps, then fades out over one step. Two chords at full gain are full.
    pub fn choir_heard(&mut self, now: f64) -> f64 {
        self.choir_chords.retain(|c| now - c.at < 3. * c.step);
        let sum: f64 = self.choir_chords.iter().map(|c| {
            let age = (now - c.at) / c.step;
            c.gain * if age < 0. { 0. } else if age < 1. { age } else if age < 2. { 1. } else { 3. - age }
        }).sum();
        (sum / 2.).min(1.)
    }

    // Append random quotes while the text is running low
    fn refill(&mut self) {
        while self.words.len() - self.wi < LOOKAHEAD_WORDS {
            let q = &self.quotes[fastrand::usize(..self.quotes.len())];
            self.words.extend(q.words.iter().cloned());
            self.total += q.words.len();
            self.passages.push_back((self.total, q.source.clone()));
        }
    }

    // The width on screen of word i: the typed text can be longer than the word
    pub fn word_len(&self, i: usize) -> usize {
        let n = self.words[i].len() + 1;
        if i == self.wi { n.max(self.typed.len()) } else { n }
    }

    // The line of each word, for lines `width` wide. Words wrap as in the browser: a word that does not fit goes
    // to the next line.
    pub fn layout(&self, width: usize) -> Vec<(usize, usize)> {
        let (mut line, mut x) = (0, 0);
        let mut out = vec![];
        for i in 0..self.words.len().min(self.wi + 60) {
            let n = self.word_len(i);
            if x > 0 && x + n > width {
                line += 1;
                x = 0;
            }
            out.push((line, x));
            x += n;
        }
        out
    }

    // Scroll like Monkeytype: when the active word reaches line 3, drop line 1
    pub fn scroll(&mut self, width: usize) {
        loop {
            let layout = self.layout(width);
            if layout[self.wi].0 < 2 {
                return;
            }
            let n = layout.iter().filter(|(line, _)| *line == 0).count();
            self.words.drain(..n);
            self.wi -= n;
        }
    }
}
