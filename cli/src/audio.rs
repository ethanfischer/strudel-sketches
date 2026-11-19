// The music, as a small synth. The parts and patterns copy the active parts of acidpoly.js:
//   kick   s("bd:4!4"), ducks the bass
//   spider note(<low|medium|high>*12), square with FM, vibrato and bitcrush from the energy, reverb
//   bass   note("<0>*12").trans(-24), supersaw through an acid filter envelope
//   pad    n("[0, 4, 9]*2"), the choir chords while you hold your best
// One cycle is 4 beats. The game sets the tempo, the energy, the spider level, the choir and the key
// through Params; the synth reads them at the start of each note.

use std::f32::consts::PI;
use std::sync::atomic::{AtomicBool, AtomicU32, AtomicU8, Ordering::Relaxed};
use std::sync::Arc;

pub struct AtomicF32(AtomicU32);

impl AtomicF32 {
    fn new(v: f32) -> AtomicF32 {
        AtomicF32(AtomicU32::new(v.to_bits()))
    }
    pub fn set(&self, v: f32) {
        self.0.store(v.to_bits(), Relaxed)
    }
    fn get(&self) -> f32 {
        f32::from_bits(self.0.load(Relaxed))
    }
}

pub struct Params {
    pub cpm: AtomicF32,        // cycles per minute
    pub energy: AtomicF32,     // 0..1
    pub choir_level: AtomicF32, // 0..1; 0 = no choir
    pub spider: AtomicU8,      // 0 low, 1 medium, 2 high
    pub typo: AtomicBool,      // the key changes while a typo is not fixed
}

impl Params {
    pub fn new() -> Params {
        Params { cpm: AtomicF32::new(20.), energy: AtomicF32::new(0.), choir_level: AtomicF32::new(0.), spider: AtomicU8::new(0), typo: AtomicBool::new(false) }
    }
}

// MIX, as on the site: setGainCurve squares each postgain, and each part has master 1.4 in it
const MASTER: f32 = 1.4;
const KICK: f32 = 0.8;
const SPIDER: f32 = 0.2;
const BASS: f32 = 0.75;
const PAD: f32 = 0.35;
const OUT: f32 = 0.5; // the browser adds the parts with no limiter; this keeps the sum under the limiter most of the time
const DUCK_ATTACK: f32 = 0.12;

// Scales as semitones; the key is e minor, or c dorian while a typo is not fixed. Degree 0 is in octave 3.
const MINOR: [i32; 7] = [0, 2, 3, 5, 7, 8, 10];
const DORIAN: [i32; 7] = [0, 2, 3, 5, 7, 9, 10];

fn note_freq(degree: i32, typo: bool) -> f32 {
    let (root, scale) = if typo { (48, DORIAN) } else { (52, MINOR) };
    let midi = root + 12 * degree.div_euclid(7) + scale[degree.rem_euclid(7) as usize];
    440. * 2f32.powf((midi as f32 - 69.) / 12.)
}

// The spider melodies; None is a rest
const SPIDER_LOW: [Option<i32>; 6] = [None, Some(7), Some(7), None, Some(7), Some(7)];
const SPIDER_MED: [Option<i32>; 6] = [Some(9), Some(8), Some(7), Some(7), Some(8), Some(9)];
const SPIDER_HIGH: [Option<i32>; 6] = [Some(12), Some(9), Some(8), Some(7), Some(9), Some(11)];

pub struct Synth {
    sr: f32,
    p: Arc<Params>,
    pos: f64, // cycles since the start
    kick: Option<f32>, // seconds since the last kick
    spider: Vec<Spider>,
    bass: Vec<Bass>,
    choir: Vec<Choir>,
    reverb: Reverb,
    limit: f32,
}

impl Synth {
    pub fn new(sr: f32, p: Arc<Params>) -> Synth {
        Synth {
            sr, p, pos: 0., kick: None,
            spider: Vec::with_capacity(16), bass: Vec::with_capacity(16), choir: Vec::with_capacity(32),
            reverb: Reverb::new(sr), limit: 1.,
        }
    }

    // Fills interleaved frames of `channels` channels; the first two get left and right
    pub fn render(&mut self, out: &mut [f32], channels: usize) {
        let cps = self.p.cpm.get() as f64 / 60.;
        for frame in out.chunks_mut(channels) {
            let (l, r) = self.next(cps);
            frame[0] = l;
            if channels > 1 {
                frame[1] = r;
            }
            for x in frame.iter_mut().skip(2) {
                *x = 0.;
            }
        }
    }

    fn next(&mut self, cps: f64) -> (f32, f32) {
        let before = self.pos;
        self.pos += cps / self.sr as f64;
        let after = self.pos;
        let crossed = |n: f64| (after * n).floor() > (before * n).floor();
        let cycle_s = (1. / cps) as f32;
        if crossed(4.) {
            self.kick = Some(0.);
        }
        if crossed(12.) {
            let step = (self.pos * 12.).floor() as i64;
            self.start_step(step, cycle_s / 12.);
        }
        if crossed(2.) {
            let level = self.p.choir_level.get();
            if level > 0. {
                self.start_chord(cycle_s / 2., level);
            }
        }

        let dt = 1. / self.sr;
        let mut l = 0.;
        let mut r = 0.;
        // Kick, and the duck it gives the bass: the bass drops to 0 and comes back over DUCK_ATTACK
        let mut duck = 1.;
        if let Some(t) = self.kick.as_mut() {
            let (s, done) = kick(*t);
            l += s * (KICK * MASTER).powi(2);
            r += s * (KICK * MASTER).powi(2);
            duck = (*t / DUCK_ATTACK).min(1.).powf(0.5);
            *t += dt;
            if done && *t > DUCK_ATTACK {
                self.kick = None;
            }
        }
        // The spider goes to the reverb too (room .7)
        let mut send = 0.;
        for v in &mut self.spider {
            let (sl, sr) = v.next(self.sr);
            let g = (SPIDER * MASTER).powi(2);
            l += sl * g;
            r += sr * g;
            send += (sl + sr) * g * 0.7;
        }
        for v in &mut self.bass {
            let (bl, br) = v.next(self.sr);
            let g = (BASS * MASTER).powi(2) * duck;
            l += bl * g;
            r += br * g;
        }
        for v in &mut self.choir {
            let (cl, cr) = v.next(self.sr);
            let g = (PAD * MASTER).powi(2);
            l += cl * g;
            r += cr * g;
        }
        self.spider.retain(|v| !v.env.done());
        self.bass.retain(|v| !v.env.done());
        self.choir.retain(|v| !v.env.done());
        let (wl, wr) = self.reverb.next(send);
        l = (l + wl) * OUT;
        r = (r + wr) * OUT;

        // A limiter: it turns down at once when a peak is over .9, and back up over about 100 ms
        let peak = l.abs().max(r.abs());
        let want = if peak > 0.9 { 0.9 / peak } else { 1. };
        self.limit = if want < self.limit { want } else { self.limit + (want - self.limit) * (dt / 0.1) };
        (l * self.limit, r * self.limit)
    }

    fn start_step(&mut self, step: i64, step_s: f32) {
        let energy = self.p.energy.get();
        let typo = self.p.typo.load(Relaxed);
        let slot = step.rem_euclid(12);

        // Spider: .sometimesBy(.25) gives a step a short decay; on the first step of the cycle it also
        // plays twice (ply 2) with no sustain, brighter
        let melody = match self.p.spider.load(Relaxed) { 0 => SPIDER_LOW, 1 => SPIDER_MED, _ => SPIDER_HIGH };
        if let Some(degree) = melody[step.rem_euclid(6) as usize] {
            let pos = self.pos as f32;
            let spice = fastrand::f32() < 0.25;
            let ply = spice && slot == 0;
            let n = if ply { 2 } else { 1 };
            for k in 0..n {
                let gate = step_s / n as f32;
                let env = if spice {
                    Adsr::new(0.001, 0.075, if ply { 0. } else { 0.6 }, 0.01, gate)
                } else {
                    Adsr::new(0.001, 0.05, 0.6, 0.01, gate)
                };
                let mut v = Spider {
                    freq: note_freq(degree, typo),
                    // .electric(energy): FM index perlin*energy 0..6, crush perlin.slow(4)*energy 10..4 bits,
                    // vibrato 14 Hz of .25*energy semitones, pan sine.fast(3)
                    fm: perlin(pos) * energy * 6.,
                    bits: 10. - 6. * perlin(pos / 4.) * energy,
                    vib: 0.25 * energy,
                    pan: 0.5 + 0.5 * (2. * PI * 3. * pos).sin(),
                    cutoff: if ply { 2500. } else { 2000. },
                    delay: k as f32 * gate,
                    env, phase: 0., mphase: 0., vphase: 0., filter: Svf::default(),
                };
                v.env.t = -v.delay;
                if self.spider.len() < self.spider.capacity() {
                    self.spider.push(v);
                }
            }
        }

        // Bass: e1 (or c1), supersaw with a random detune; acidenv(energy.range(.05, .2))
        let detune = fastrand::f32();
        let amount = (0.05 + 0.15 * energy) * 12.;
        if self.bass.len() < self.bass.capacity() {
            self.bass.push(Bass::new(note_freq(-14, typo), detune, amount, step_s));
        }
    }

    // A triad on degrees 0, 4 and 9. Each chord lasts two steps (clip 2), with an attack and a release of
    // one step each, so one chord fades in while the one before fades out.
    fn start_chord(&mut self, step_s: f32, level: f32) {
        let typo = self.p.typo.load(Relaxed);
        for degree in [0, 4, 9] {
            if self.choir.len() + 3 > self.choir.capacity() {
                return;
            }
            for detune in [-0.08, 0., 0.08] {
                self.choir.push(Choir {
                    freq: note_freq(degree, typo) * 2f32.powf(detune / 12.),
                    gain: (level * 0.6).powi(2) / 3.,
                    pan: 0.5 + detune * 3.,
                    env: Adsr::new(step_s, 0.001, 1., step_s, 2. * step_s),
                    phase: fastrand::f32(), vphase: fastrand::f32(), filter: Svf::default(),
                });
            }
        }
    }
}

// A synthesized bd:4: a sine that falls from 150 Hz to 48 Hz, with a short click. (sample, finished)
fn kick(t: f32) -> (f32, bool) {
    let f0 = 150.;
    let f1 = 48.;
    let k = 28.;
    // the phase is the integral of f1 + (f0 - f1) e^(-kt)
    let phase = 2. * PI * (f1 * t + (f0 - f1) * (1. - (-k * t).exp()) / k);
    let amp = (-t * 6.5).exp();
    let click = if t < 0.004 { (1. - t / 0.004) * 0.4 } else { 0. };
    (phase.sin() * amp + click, t > 0.6)
}

// Strudel's perlin: smooth noise between random values at each whole cycle
fn perlin(t: f32) -> f32 {
    let hash = |i: f32| { let v = (i * 12.9898).sin() * 43758.547; v - v.floor() };
    let i = t.floor();
    let f = t - i;
    let s = f * f * f * (f * (f * 6. - 15.) + 10.);
    hash(i) + (hash(i + 1.) - hash(i)) * s
}

struct Adsr {
    a: f32,
    d: f32,
    s: f32,
    r: f32,
    gate: f32,
    t: f32,
}

impl Adsr {
    fn new(a: f32, d: f32, s: f32, r: f32, gate: f32) -> Adsr {
        Adsr { a, d, s, r, gate, t: 0. }
    }
    fn held(&self, t: f32) -> f32 {
        if t < 0. { 0. } else if t < self.a { t / self.a } else if t < self.a + self.d { 1. - (1. - self.s) * (t - self.a) / self.d } else { self.s }
    }
    fn next(&mut self, dt: f32) -> f32 {
        let t = self.t;
        self.t += dt;
        if t < self.gate { self.held(t) } else { self.held(self.gate) * (1. - (t - self.gate) / self.r).max(0.) }
    }
    fn done(&self) -> bool {
        self.t > self.gate + self.r
    }
}

// Band-limited (polyBLEP) oscillators. phase and dt in cycles.
fn blep(t: f32, dt: f32) -> f32 {
    if t < dt {
        let t = t / dt;
        t + t - t * t - 1.
    } else if t > 1. - dt {
        let t = (t - 1.) / dt;
        t * t + t + t + 1.
    } else {
        0.
    }
}
fn saw(phase: f32, dt: f32) -> f32 {
    2. * phase - 1. - blep(phase, dt)
}
fn square(phase: f32, dt: f32) -> f32 {
    (if phase < 0.5 { 1. } else { -1. }) + blep(phase, dt) - blep((phase + 0.5).fract(), dt)
}
fn advance(phase: &mut f32, inc: f32) {
    *phase = (*phase + inc).rem_euclid(1.);
}
fn pan(x: f32, p: f32) -> (f32, f32) {
    let a = p.clamp(0., 1.) * PI / 2.;
    (x * a.cos(), x * a.sin())
}

// A 12 dB lowpass (state-variable filter), resonance q as Strudel's lpq (default 1)
#[derive(Default)]
struct Svf {
    ic1: f32,
    ic2: f32,
}

impl Svf {
    fn lowpass(&mut self, x: f32, cutoff: f32, q: f32, sr: f32) -> f32 {
        let g = (PI * cutoff.clamp(10., sr * 0.45) / sr).tan();
        let k = 1. / q;
        let a1 = 1. / (1. + g * (g + k));
        let a2 = g * a1;
        let a3 = g * a2;
        let v3 = x - self.ic2;
        let v1 = a1 * self.ic1 + a2 * v3;
        let v2 = self.ic2 + a2 * self.ic1 + a3 * v3;
        self.ic1 = 2. * v1 - self.ic1;
        self.ic2 = 2. * v2 - self.ic2;
        v2
    }
}

struct Spider {
    freq: f32,
    fm: f32,
    bits: f32,
    vib: f32,
    pan: f32,
    cutoff: f32,
    delay: f32,
    env: Adsr,
    phase: f32,
    mphase: f32,
    vphase: f32,
    filter: Svf,
}

impl Spider {
    fn next(&mut self, sr: f32) -> (f32, f32) {
        let e = self.env.next(1. / sr);
        if self.env.t <= 0. {
            return (0., 0.);
        }
        advance(&mut self.vphase, 14. / sr);
        let f = self.freq * 2f32.powf(self.vib * (2. * PI * self.vphase).sin() / 12.);
        // FM: a sine at the same frequency (fmh 1) moves the frequency by fm * f
        advance(&mut self.mphase, f / sr);
        let inst = (f + self.fm * f * (2. * PI * self.mphase).sin()).abs();
        let dt = inst / sr;
        advance(&mut self.phase, dt);
        let x = square(self.phase, dt.min(0.5));
        let steps = 2f32.powf(self.bits - 1.);
        let x = (x * steps).round() / steps;
        let x = self.filter.lowpass(x, self.cutoff, 1., sr) * e;
        pan(x, self.pan)
    }
}

struct Bass {
    freqs: [f32; 5],
    phases: [f32; 5],
    env: Adsr,
    fenv: Adsr,
    lo: f32,
    hi: f32,
    filter: Svf,
}

impl Bass {
    // acidenv: lpf 200, lpenv amount, lps .4, lpd .12. The cutoff goes from 200 / 2^(amount/2) up to
    // 200 * 2^(amount/2) and back down to the sustain.
    fn new(freq: f32, detune: f32, amount: f32, gate: f32) -> Bass {
        let mut freqs = [0.; 5];
        for (i, f) in freqs.iter_mut().enumerate() {
            *f = freq * 2f32.powf((i as f32 / 4. - 0.5) * detune / 12.);
        }
        let mut phases = [0.; 5];
        for p in &mut phases {
            *p = fastrand::f32();
        }
        Bass {
            freqs, phases,
            env: Adsr::new(0.001, 0.05, 0.6, 0.01, gate),
            fenv: Adsr::new(0.005, 0.12, 0.4, 0.01, gate),
            lo: 200. * 2f32.powf(-amount / 2.),
            hi: 200. * 2f32.powf(amount / 2.),
            filter: Svf::default(),
        }
    }

    fn next(&mut self, sr: f32) -> (f32, f32) {
        let e = self.env.next(1. / sr);
        let fe = self.fenv.next(1. / sr);
        let mut l = 0.;
        let mut r = 0.;
        for i in 0..5 {
            let dt = self.freqs[i] / sr;
            advance(&mut self.phases[i], dt);
            let (a, b) = pan(saw(self.phases[i], dt), 0.5 + (i as f32 / 4. - 0.5) * 0.6);
            l += a;
            r += b;
        }
        let cutoff = self.lo * (self.hi / self.lo).powf(fe);
        // One filter for both sides is enough at this low cutoff: the mono sum goes through it, the side stays out
        let mid = self.filter.lowpass((l + r) * 0.5, cutoff, 1., sr);
        let g = e / 5f32.sqrt();
        (mid * g, mid * g)
    }
}

struct Choir {
    freq: f32,
    gain: f32,
    pan: f32,
    env: Adsr,
    phase: f32,
    vphase: f32,
    filter: Svf,
}

impl Choir {
    fn next(&mut self, sr: f32) -> (f32, f32) {
        let e = self.env.next(1. / sr);
        advance(&mut self.vphase, 5. / sr);
        let f = self.freq * 2f32.powf(0.1 * (2. * PI * self.vphase).sin() / 12.);
        let dt = f / sr;
        advance(&mut self.phase, dt);
        let x = self.filter.lowpass(saw(self.phase, dt), 600., 1., sr) * e * self.gain;
        pan(x, self.pan)
    }
}

// Freeverb: 8 combs and 4 allpasses for each side, rsize about 2
struct Reverb {
    combs: [Vec<(Vec<f32>, usize, f32)>; 2],
    allpasses: [Vec<(Vec<f32>, usize)>; 2],
}

impl Reverb {
    fn new(sr: f32) -> Reverb {
        let scale = sr / 44100.;
        let combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617];
        let allpasses = [556, 441, 341, 225];
        let side = |spread: usize| {
            (
                combs.iter().map(|n| (vec![0.; ((n + spread) as f32 * scale) as usize], 0, 0.)).collect(),
                allpasses.iter().map(|n| (vec![0.; ((n + spread) as f32 * scale) as usize], 0)).collect(),
            )
        };
        let (cl, al) = side(0);
        let (cr, ar) = side(23);
        Reverb { combs: [cl, cr], allpasses: [al, ar] }
    }

    fn next(&mut self, x: f32) -> (f32, f32) {
        let feedback = 0.86;
        let damp = 0.3;
        let input = x * 0.015;
        let mut out = [0.; 2];
        for s in 0..2 {
            let mut sum = 0.;
            for (buf, i, store) in &mut self.combs[s] {
                let y = buf[*i];
                *store = y * (1. - damp) + *store * damp;
                buf[*i] = input + *store * feedback;
                *i = (*i + 1) % buf.len();
                sum += y;
            }
            for (buf, i) in &mut self.allpasses[s] {
                let b = buf[*i];
                buf[*i] = sum + b * 0.5;
                sum = b - sum;
                *i = (*i + 1) % buf.len();
            }
            out[s] = sum * 3.;
        }
        (out[0], out[1])
    }
}

// Plays the synth on the default output device. Keep the stream: the sound stops when it is dropped.
pub fn start(p: Arc<Params>) -> Result<cpal::Stream, String> {
    use cpal::traits::{DeviceTrait, HostTrait, StreamTrait};
    let device = cpal::default_host().default_output_device().ok_or("no audio output device")?;
    let config = device.default_output_config().map_err(|e| e.to_string())?;
    if config.sample_format() != cpal::SampleFormat::F32 {
        return Err(format!("the audio device wants {:?} samples; only f32 is done", config.sample_format()));
    }
    let config = config.config();
    let channels = config.channels as usize;
    let mut synth = Synth::new(config.sample_rate as f32, p);
    let stream = device
        .build_output_stream(config, move |data: &mut [f32], _| synth.render(data, channels), |e| eprintln!("audio: {e}"), None)
        .map_err(|e| e.to_string())?;
    stream.play().map_err(|e| e.to_string())?;
    Ok(stream)
}
