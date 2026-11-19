samples('github:switchangel/pad')
samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

// A double pendulum moves the playhead through one part of the sample, like a hand on a record.
// The tip of the lower arm goes left and right; that is the playhead going backwards and forwards.
// It is not random, but it never repeats, and a very small change to the start angles gives a very different path.
const pendulum = (() => {
  const g = 9.8, dt = .005
  const cycleSeconds = 60 / (90 / 4) // same as setcpm, so the pendulum swings in real seconds
  const sampleSeconds = 7.93 // length of nicechord.wav
  const from = 7 / 8, to = 1 // the part of the sample to scrub, the same as slice(8, "7")
  const rate = ([a1, w1, a2, w2]) => {
    const d = a1 - a2, den = 3 - Math.cos(2 * d)
    return [
      w1,
      (-3 * g * Math.sin(a1) - g * Math.sin(a1 - 2 * a2) - 2 * Math.sin(d) * (w2 * w2 + w1 * w1 * Math.cos(d))) / den,
      w2,
      2 * Math.sin(d) * (2 * w1 * w1 + 2 * g * Math.cos(a1) + w2 * w2 * Math.cos(d)) / den,
    ]
  }
  const add = (s, k, h) => s.map((v, i) => v + k[i] * h)
  const states = [[Math.PI * .9, 0, Math.PI * .6, 0]] // start angles of the two arms (0 is straight down). Change them for a new path
  const at = t => {
    const i = Math.floor(t * cycleSeconds / dt)
    while (states.length <= i) {
      const s = states[states.length - 1]
      const k1 = rate(s), k2 = rate(add(s, k1, dt / 2)), k3 = rate(add(s, k2, dt / 2)), k4 = rate(add(s, k3, dt))
      states.push(s.map((v, j) => v + dt / 6 * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j])))
    }
    const [a1, w1, a2, w2] = states[i]
    const place = from + (to - from) * (Math.sin(a1) + Math.sin(a2) + 2) / 4 // tip from left (from) to right (to)
    const speed = (to - from) * (Math.cos(a1) * w1 + Math.cos(a2) * w2) / 4 * sampleSeconds // how fast the tip moves
    // [begin, speed] for scrub. With a negative speed, Strudel reverses the sample, so begin counts from the end
    return [speed < 0 ? 1 - place : place, speed]
  }
  return signal(at)
})()

$: s("nicechord")
  .scrub(pendulum.segment(128)) // 128 short grains per cycle. They join into one sound
  .room(.9).size(.9)
  ._scope()

_$: s("nicechord")
  // | picks one of the four at random, for each group
  .slice(32, "[- 2 2 2 | 3 2 3 2 | 2 2 2 2]*2")
  .fast(4)
  .speed(2)
  .lpf(rand.range(500, 3000)) // a new random cutoff for each note
  .gain(.75)
  .room(.9).size(.9)
  ._scope()

// Rain: a soft hiss, and drops at random times
_$: s("pink")
  .attack(1).release(3).sustain(2) // long fades, so each cycle blends into the next
  .hpf(400)
  .lpf(sine.range(3500, 6000).slow(16)) // the rain gets a bit harder, then softer
  .gain(.25)
