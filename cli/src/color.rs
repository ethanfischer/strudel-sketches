// Colors as [r, g, b], 0..255. The screen is black, so a color with alpha is the color dimmed toward black.

pub type Rgb = [f32; 3];

pub const ACCENT: Rgb = [0., 255., 214.];
pub const NEG: Rgb = [255., 79., 216.];
pub const BLACK: Rgb = [0., 0., 0.];

pub fn hex(v: u32) -> Rgb {
    [(v >> 16 & 255) as f32, (v >> 8 & 255) as f32, (v & 255) as f32]
}

// Mix two colors by k (0..1)
pub fn mix(a: Rgb, b: Rgb, k: f32) -> Rgb {
    [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k]
}

// Pick from [(at, color)] stops
pub fn ramp(stops: &[(f32, Rgb)], x: f32) -> Rgb {
    for i in 1..stops.len() {
        if x <= stops[i].0 {
            let (x0, a) = stops[i - 1];
            let (x1, b) = stops[i];
            return mix(a, b, (x - x0) / (x1 - x0));
        }
    }
    stops[stops.len() - 1].1
}

// The color at alpha `a` over the black screen
pub fn alpha(c: Rgb, a: f32) -> Rgb {
    mix(BLACK, c, a)
}
