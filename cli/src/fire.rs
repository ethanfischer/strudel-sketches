// ASCII fire. A heat grid: each row takes the heat of the row below it, moves ±1 column, and cools.
// Energy makes the base hotter and the cooling slower, so the flame grows. The choir turns it blue.

use crate::color::{mix, ramp, Rgb};
use crate::screen::Grid;

pub const FIRE_W: usize = 40;      // the flame grid, in characters
pub const FIRE_H: usize = 18;
const FIRE_C: i32 = 20;            // center column (the | of the kindling)
const FIRE_HALF: i32 = 9;          // half width of the base
pub const FIRE_HEAD: usize = 4;    // rows above the flame where only sparks go
pub const FIRE_UNDER_TEXT: usize = 3; // rows of flame between the kindling and the text, which lies over the fire
pub const FIRE_FRAME_S: f64 = 0.06;
// The fire follows the energy, but climbs slowly: FIRE_RISE_S from cold to roaring. It dies down faster.
const FIRE_RISE_S: f64 = 20.;
const FIRE_FALL_S: f64 = 4.;
const FIRE_RAMP: &[u8] = b" .:-=+*#%@"; // cool → hot
// Sticks that lean together over two logs. The | is at column FIRE_C.
pub const KINDLING: [&str; 4] = [
    r"               \\  \|/  //",
    r"              \\\\ \|/ ////",
    r"             ((==\\=|=//==))",
    r"            (____)(___)(____)",
];
pub const ROWS: usize = FIRE_HEAD + FIRE_H + KINDLING.len();

pub const FIRE_STOPS: [(f32, Rgb); 6] = [(0., [60., 6., 0.]), (0.2, [130., 20., 0.]), (0.35, [200., 45., 0.]), (0.5, [255., 110., 10.]), (0.7, [255., 212., 121.]), (0.9, [255., 246., 220.])];
const CHOIR_STOPS: [(f32, Rgb); 6] = [(0., [0., 10., 70.]), (0.2, [0., 35., 150.]), (0.35, [20., 80., 230.]), (0.5, [40., 145., 255.]), (0.7, [120., 210., 255.]), (0.9, [225., 245., 255.])];
const FIRE_CORE: Rgb = [175., 225., 255.];  // the core moves toward this while you hold your best
const FIRE_EMBER: Rgb = [255., 35., 25.];   // sparks and logs while the choir plays

struct Spark {
    x: i32,
    y: i32,
    life: i32,
}

pub struct Fire {
    heat: Vec<f32>,    // 0..1 per cell, row by row from the top
    sparks: Vec<Spark>,
    pub flame: f64,    // 0..1, the energy the fire shows
    pub blue: f64,     // 0 = normal fire, 1 = choir fire
}

impl Fire {
    pub fn new() -> Fire {
        Fire { heat: vec![0.; FIRE_W * FIRE_H], sparks: vec![], flame: 0., blue: 0. }
    }

    // target: the game energy. lit: the kindling catches on your first key. heard: how loud the choir is.
    pub fn frame(&mut self, target: f64, lit: bool, choir: bool, heard: f64) {
        let dt = FIRE_FRAME_S;
        self.flame = if target > self.flame { target.min(self.flame + dt / FIRE_RISE_S) } else { target.max(self.flame - dt / FIRE_FALL_S) };
        let energy = self.flame as f32;
        // Turns blue as loud as the choir is, and back to normal in about half a second
        self.blue = if choir { heard } else { self.blue * 0.75 };
        let cooling = 0.44 - 0.32 * energy;
        let heat = &mut self.heat;
        let w = FIRE_W;

        for x in 0..w {
            let d = (x as i32 - FIRE_C).abs() as f32 / FIRE_HALF as f32;
            let shape = if d >= 1. { 0. } else { 1. - d * d }; // hotter in the middle, so the flame tapers
            heat[(FIRE_H - 1) * w + x] = if !lit || shape == 0. {
                0.
            } else if energy < 0.03 {
                if fastrand::f32() < 0.3 * shape { 0.22 + 0.1 * fastrand::f32() } else { 0.04 } // embers
            } else {
                shape * if fastrand::f32() < 0.5 + 0.5 * energy { 0.6 + 0.4 * energy } else { 0.3 }
            };
        }
        for y in 0..FIRE_H - 1 {
            for x in 0..w {
                let from = (x as i32 + fastrand::i32(-1..=1)).clamp(0, w as i32 - 1) as usize;
                let below = heat[(y + 1) * w + from];
                heat[y * w + x] = (below - cooling * fastrand::f32()).max(0.);
            }
        }

        // Sparks rise from the top of the flame while the choir plays
        if choir {
            let top = self.flame_top() as i32;
            for _ in 0..2 {
                if fastrand::f32() < 0.7 {
                    self.sparks.push(Spark {
                        x: FIRE_C + ((fastrand::f32() * 2. - 1.) * FIRE_HALF as f32 * 0.7).round() as i32,
                        y: top + fastrand::i32(0..3),
                        life: fastrand::i32(6..13),
                    });
                }
            }
        }
        self.sparks.retain_mut(|p| {
            p.y -= 1;
            p.x += fastrand::i32(-1..=1);
            p.life -= 1;
            p.life > 0 && p.y >= -(FIRE_HEAD as i32) && p.x >= 0 && p.x < w as i32
        });
    }

    // Highest row near the center with a hot cell
    fn flame_top(&self) -> usize {
        for y in 0..FIRE_H {
            for x in FIRE_C - FIRE_HALF..=FIRE_C + FIRE_HALF {
                if self.heat[y * FIRE_W + x as usize] > 0.35 {
                    return y;
                }
            }
        }
        FIRE_H - 1
    }

    // Draws the head rows, the flame and the kindling, with the top left at (x0, y0).
    // hold (0..1) moves the core toward white-blue.
    pub fn draw(&self, grid: &mut Grid, x0: i32, y0: i32, lit: bool, hold: f32) {
        let blue = self.blue as f32;
        for y in 0..FIRE_H {
            for x in 0..FIRE_W {
                let h = self.heat[y * FIRE_W + x];
                let i = ((h * FIRE_RAMP.len() as f32) as usize).min(FIRE_RAMP.len() - 1);
                if i > 0 {
                    let mut c = ramp(&FIRE_STOPS, h);
                    if h > 0.6 {
                        c = mix(c, FIRE_CORE, hold * ((h - 0.6) / 0.3).min(1.));
                    }
                    let c = mix(c, ramp(&CHOIR_STOPS, h), blue);
                    grid.put(x0 + x as i32, y0 + (FIRE_HEAD + y) as i32, FIRE_RAMP[i] as char, c);
                }
            }
        }
        for p in &self.sparks {
            grid.put(x0 + p.x, y0 + FIRE_HEAD as i32 + p.y, if p.life > 4 { '*' } else { '\'' }, FIRE_EMBER);
        }

        // The logs glow a little in embers and more as the flame grows. With the choir they glow bright red.
        let glow = if lit { (self.flame as f32 * 1.4).clamp(0.15, 1.) } else { 0. };
        for (k, line) in KINDLING.iter().enumerate() {
            let top = k < 2;
            let wood = if top { [138., 90., 50.] } else { [110., 68., 36.] };
            let g = glow * if top { 0.35 } else { 0.55 } * (0.85 + 0.15 * fastrand::f32());
            let color = mix(mix(wood, [230., 90., 20.], g), FIRE_EMBER, blue * if top { 0.6 } else { 0.9 });
            grid.text(x0, y0 + (FIRE_HEAD + FIRE_H + k) as i32, line, color);
        }
    }
}
