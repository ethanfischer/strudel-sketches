// ASCII train through a city at night, in the rain. The city scrolls past at the train's speed, in layers:
// far towers slow, near towers with neon signs at .6, pylons and track at full, street lights faster.
// At speed, the lights blur into streaks. Its heat is the fire's flame, from your first key.

use crate::color::{alpha, hex, mix, ramp, Rgb};
use crate::fire::FIRE_STOPS;
use crate::screen::Grid;

pub const TRAIN_ROWS: usize = 12; // 0-3 sky and smoke, 4-8 train, 9 track, 10-11 ground
const TRAIN_SPEED: f64 = 270.;   // track columns per second at heat 1 (the speed is TRAIN_SPEED * heat^1.4)
pub const TRAIN_FRAME_S: f64 = 0.03;
// A heavy train: the fire sets the speed it goes toward, and the speed changes only this fast
const TRAIN_ACCEL: f64 = 3.75;   // columns/s per second: 0 to full speed in about 72 s
const TRAIN_BRAKE: f64 = 10.5;   // columns/s per second: full speed to a stop in about 26 s
const TRAIN_LOCO: [&str; 5] = [
    r" _______     _        ",
    r"|  ___  |___| |____   ",
    r"| |###| |         |\  ", // ### is the firebox: it glows in the fire's color
    r"|_|___|_|_________|_\_",
    r"  (O)(O)   (o)(o)  o  ", // the wheels: o and O turn into spokes
];
const TRAIN_CAR: [&str; 5] = [
    r"              ",
    r" ____________ ",
    r"|  []  []  []|",
    r"|____________|",
    r"  (o)    (o)  ",
];
const TRAIN_SIGNS: [&str; 12] = ["NOODLES", "HOTEL", "BAR", "24H", "CHROME", "SYNTH", "DATA", "RAMEN", "CLINIC", "OPEN", "ARCADE", "NO SIGNAL"];

// The city colors go from Ember (cold fire) to Furnace (hot fire): the hotter the fire, the redder the city.
// Gruvbox colors; neon[3] and light change at once at TRAIN_ACCENT_AT, because orange to aqua blends to mud.
#[derive(Clone, Copy)]
struct Palette {
    far: Rgb, near: Rgb, rain: Rgb, pylon: Rgb, leg: Rgb,
    neon: [Rgb; 4], light: Rgb, antenna: Rgb,
    track: Rgb, cars: [Rgb; 2], body: Rgb, win: Rgb, wheel: Rgb,
}
const TRAIN_EMBER: Palette = Palette {
    far: [58., 40., 36.], near: [90., 51., 40.], rain: [78., 58., 50.], pylon: [124., 111., 100.], leg: [80., 73., 69.],
    neon: [[251., 73., 52.], [254., 128., 25.], [250., 189., 47.], [214., 93., 14.]], light: [254., 128., 25.], antenna: [251., 73., 52.],
    track: [214., 93., 14.], cars: [[251., 73., 52.], [250., 189., 47.]], body: [189., 174., 147.], win: [250., 189., 47.], wheel: [235., 219., 178.],
};
const TRAIN_FURNACE: Palette = Palette {
    far: [60., 34., 32.], near: [94., 42., 36.], rain: [74., 48., 44.], pylon: [124., 95., 88.], leg: [80., 73., 69.],
    neon: [[251., 73., 52.], [204., 36., 29.], [254., 128., 25.], [142., 192., 124.]], light: [142., 192., 124.], antenna: [251., 73., 52.],
    track: [204., 36., 29.], cars: [[251., 73., 52.], [254., 128., 25.]], body: [201., 185., 154.], win: [254., 128., 25.], wheel: [235., 219., 178.],
};
const TRAIN_ACCENT_AT: f32 = 0.6;

fn palette(heat: f32) -> Palette {
    let k = heat.clamp(0., 1.);
    let (a, b) = (TRAIN_EMBER, TRAIN_FURNACE);
    let m = |x: Rgb, y: Rgb| mix(x, y, k);
    let hot = if heat >= TRAIN_ACCENT_AT { b } else { a };
    Palette {
        far: m(a.far, b.far), near: m(a.near, b.near), rain: m(a.rain, b.rain), pylon: m(a.pylon, b.pylon), leg: m(a.leg, b.leg),
        neon: [m(a.neon[0], b.neon[0]), m(a.neon[1], b.neon[1]), m(a.neon[2], b.neon[2]), hot.neon[3]],
        light: hot.light, antenna: m(a.antenna, b.antenna),
        track: m(a.track, b.track), cars: [m(a.cars[0], b.cars[0]), m(a.cars[1], b.cars[1])],
        body: m(a.body, b.body), win: m(a.win, b.win), wheel: m(a.wheel, b.wheel),
    }
}

struct Puff {
    x: f64,
    y: f64,
    age: f64,
}

pub struct Train {
    x: f64,  // how far the train has gone, in track columns
    v: f64,  // its speed, in columns per second
    t: f64,  // seconds of train frames, for the rain
    puffs: Vec<Puff>,
}

// The locomotive stands at 62% of the width; enough cars follow it to go off the left edge
fn place(cols: usize) -> (i32, i32) {
    let cars = (cols as f64 * 0.62 / 15.).ceil() as i32 + 1;
    let loco_at = (cols as f64 * 0.62).round() as i32;
    (cars, loco_at - cars * 15) // the first car is off the left edge
}

impl Train {
    pub fn new() -> Train {
        Train { x: 0., v: 0., t: 0., puffs: vec![] }
    }

    pub fn frame(&mut self, heat: f64, cols: usize) {
        let dt = TRAIN_FRAME_S;
        let target = TRAIN_SPEED * heat.powf(1.4);
        self.v = if target > self.v { target.min(self.v + TRAIN_ACCEL * dt) } else { target.max(self.v - TRAIN_BRAKE * dt) };
        self.x += self.v * dt;
        self.t += dt;
        // Smoke leaves the stack more often when the fire is hot, and the wind of the train blows it back
        let (cars, start) = place(cols);
        if heat > 0.03 && fastrand::f64() < 0.1 + 0.6 * heat {
            self.puffs.push(Puff { x: (start + cars * 15 + 13) as f64, y: 3., age: 0. });
        }
        for p in &mut self.puffs {
            p.age += dt;
            p.y -= dt * (1. + heat);
            p.x -= dt * (self.v * 0.7 + 1.5);
        }
        self.puffs.retain(|p| p.y > -0.5 && p.x > -2. && p.age < 3.);
    }

    // Draws the band on rows y0..y0+TRAIN_ROWS, across the whole grid. now_ms: for the blinking lights.
    pub fn draw(&self, grid: &mut Grid, y0: i32, heat: f64, now_ms: f64) {
        let cols = grid.w as i32;
        let (cars, start) = place(grid.w);
        let (x, v) = (self.x, self.v);
        let p = palette(heat as f32);
        let rows = TRAIN_ROWS as i32;
        let mut put = |grid: &mut Grid, r: i32, c: i32, s: &str, color: &dyn Fn(char) -> Rgb| {
            for (i, ch) in s.chars().enumerate() {
                let c = c + i as i32;
                if ch != ' ' && r >= 0 && r < rows && c >= 0 && c < cols {
                    grid.put(c, y0 + r, ch, color(ch));
                }
            }
        };
        // The same city every time, from the column in the world
        let rnd = |a: f64, b: f64| { let v = (a * 12.9898 + b * 78.233).sin() * 43758.5453; v - v.floor() };
        let blink = |i: f64, ms: f64| ((now_ms / ms + rnd(i, 99.) * 10.).floor() as i64) % 2 == 0;
        // A light in a fast layer leaves a streak to its right, longer the faster the layer moves
        let streak = |grid: &mut Grid, put: &mut dyn FnMut(&mut Grid, i32, i32, &str, &dyn Fn(char) -> Rgb), r: i32, c: i32, color: Rgb, f: f64| {
            let n = ((v * f / 25.).floor() as i32).min(8);
            for k in 1..=n {
                let a = if (k as f32) < n as f32 / 2. { 0.6 } else { 0.33 };
                put(grid, r, c + k, "-", &|_| alpha(color, a));
            }
        };

        // Towers: one every `stride` columns of the layer, w_min..w_max wide, roof on row top_min..top_max,
        // down to row 8. Lit windows on every other row and column.
        let skyline = |grid: &mut Grid, put: &mut dyn FnMut(&mut Grid, i32, i32, &str, &dyn Fn(char) -> Rgb), f: f64, salt: f64, stride: i64, w_min: i64, w_max: i64, top_min: i64, top_max: i64, wall: Rgb, near: bool| {
            let o = (x * f).floor() as i64;
            for c in 0..cols {
                let wc = c as i64 + o;
                let i = wc.div_euclid(stride);
                let off = wc - i * stride;
                let fi = i as f64;
                let w = w_min + (rnd(fi, salt) * (w_max - w_min + 1) as f64).floor() as i64;
                if off >= w {
                    continue;
                }
                let top = top_min + (rnd(fi, salt + 1.) * (top_max - top_min + 1) as f64).floor() as i64;
                for r in top..=8 {
                    let r32 = r as i32;
                    if near && r32 < rows {
                        grid.erase(c, y0 + r32); // a near tower hides the far ones behind it
                    }
                    if r == top {
                        put(grid, r32, c, "_", &|_| wall);
                    } else if off == 0 || off == w - 1 {
                        put(grid, r32, c, "|", &|_| wall);
                    } else if off % 2 == 1 && (r - top) % 2 == 0 && rnd(wc as f64, (r as f64) + salt) < 0.35 {
                        let color = p.neon[(rnd(wc as f64, r as f64 + salt + 1.) * 4.) as usize];
                        if near {
                            put(grid, r32, c, ":", &|_| color);
                        } else {
                            put(grid, r32, c, ".", &|_| alpha(color, 0.55)); // far: dimmer
                        }
                        streak(grid, put, r32, c, color, f);
                    }
                }
                // An antenna with a red light on some tall towers
                if !near && top <= top_min + 1 && off == w / 2 && rnd(fi, salt + 2.) < 0.5 {
                    put(grid, top as i32 - 1, c, "|", &|_| wall);
                    if blink(fi, 700.) {
                        put(grid, top as i32 - 2, c, "*", &|_| p.antenna);
                    }
                }
                // A neon sign on some near towers, on the row under the roof; some flicker
                if near && rnd(fi, salt + 3.) < 0.6 {
                    let word = TRAIN_SIGNS[(rnd(fi, salt + 4.) * TRAIN_SIGNS.len() as f64) as usize];
                    let len = word.len() as i64;
                    let at = off - (w - len).div_euclid(2);
                    if w >= len + 2 && at >= 0 && at < len && (rnd(fi, salt + 5.) < 0.8 || blink(fi, 160.)) {
                        let color = p.neon[(rnd(fi, salt + 6.) * 4.) as usize];
                        put(grid, top as i32 + 1, c, &word[at as usize..at as usize + 1], &|_| color);
                        streak(grid, put, top as i32 + 1, c, color, f);
                    }
                }
            }
        };
        skyline(grid, &mut put, 0.1, 10., 11, 4, 9, 0, 5, p.far, false);
        skyline(grid, &mut put, 0.6, 20., 19, 9, 15, 3, 5, p.near, true);

        // Rain: some columns of the world have a drop that falls; it moves with the city at track speed
        for c in 0..cols {
            let wc = (c as f64 + x.floor()) as f64;
            if rnd(wc, 7.) > 0.1 {
                continue;
            }
            let r = ((self.t * 14. + rnd(wc, 8.) * 40.).floor() as i64).rem_euclid(30) as i32;
            put(grid, r, c, "/", &|_| p.rain);
        }
        // Pylons that hold the wires over the track
        let po = x.floor() as i64;
        for c in 0..cols {
            if (c as i64 + po).rem_euclid(24) == 0 {
                put(grid, 4, c - 1, "-+-", &|_| p.pylon);
                for r in 5..=8 {
                    put(grid, r, c, "|", &|_| p.pylon);
                }
                if blink((c as i64 + po) as f64, 500.) {
                    put(grid, 4, c, "+", &|_| p.light);
                }
                streak(grid, &mut put, 4, c + 1, p.pylon, 1.);
            }
        }

        for q in &self.puffs {
            let ch = if q.age < 0.4 { "@" } else if q.age < 1. { "O" } else if q.age < 1.8 { "o" } else { "." };
            let color = if q.age < 1. { hex(0xb5b5b5) } else { hex(0x6a6a6a) };
            put(grid, q.y.round() as i32, q.x.round() as i32, ch, &|_| color);
        }

        // The wheels turn with the distance; the firebox glows with the fire
        let spoke = ['|', '/', '-', '\\'][((x / 1.2).floor() as i64).rem_euclid(4) as usize];
        let firebox = ramp(&FIRE_STOPS, heat as f32);
        let paint = |ch: char| if ch == '#' { firebox } else if ch == '[' || ch == ']' { p.win } else { p.body };
        let draw = |grid: &mut Grid, art: &[&str; 5], c: i32| {
            for (i, line) in art.iter().enumerate() {
                if i == 4 {
                    let wheels: String = line.chars().map(|ch| if ch == 'o' || ch == 'O' { spoke } else { ch }).collect();
                    put(grid, 8, c, &wheels, &|_| p.wheel);
                } else {
                    put(grid, 4 + i as i32, c, line, &paint);
                }
            }
        };
        for k in 0..cars {
            draw(grid, &TRAIN_CAR, start + k * 15);
            grid.put(start + k * 15 + 14, y0 + 7, '=', p.body);
        }
        draw(grid, &TRAIN_LOCO, start + cars * 15);

        // The track is up on legs over the street. In the street below, the lights of cars go past faster.
        for c in 0..cols {
            let tc = c as i64 + po;
            put(grid, 9, c, if tc.rem_euclid(4) != 0 { "=" } else { "+" }, &|_| p.track);
            if tc.rem_euclid(12) == 0 {
                put(grid, 10, c, "||", &|_| p.leg);
            }
            let sc = (c as f64 + (x * 1.6).floor()) as f64;
            if rnd(sc, 11.) < 0.05 {
                let color = p.cars[if rnd(sc, 13.) < 0.5 { 0 } else { 1 }];
                put(grid, 11, c, if rnd(sc, 12.) < 0.5 { "-" } else { "=" }, &|_| color);
            }
        }
    }
}
