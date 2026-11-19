samples('github:switchangel/pad')
samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

// A double pendulum: two arms of the same length and mass. secondsPerCycle sets how fast it swings.
// pendulum is the speed of the lower arm. It is not random, but it never repeats, and a very small change to the
// start angles gives a very different path.
const pendulum = (() => {
  const g = 9.8, dt = .01, secondsPerCycle = 1
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
  let s = [Math.PI * .9, 0, Math.PI * .6, 0] // start angles of the two arms (0 is straight down). Change them for a new path
  const speeds = [s[3]]
  return signal(t => {
    const i = Math.floor(t * secondsPerCycle / dt)
    while (speeds.length <= i) {
      const k1 = rate(s), k2 = rate(add(s, k1, dt / 2)), k3 = rate(add(s, k2, dt / 2)), k4 = rate(add(s, k3, dt))
      s = s.map((v, j) => v + dt / 6 * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]))
      speeds.push(s[3])
    }
    // Lower arm speed to playback speed: - is backwards. At least .25, or a slice near a turn is too slow to hear
    const v = speeds[i] / 5
    return (v < 0 ? -1 : 1) * Math.min(2, Math.max(.25, Math.abs(v)))
  })
})()

$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .fast(4)
  .speed(pendulum) // after fast, or fast makes the pendulum swing 4 times as fast
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
