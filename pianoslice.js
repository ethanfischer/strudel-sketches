samples('github:switchangel/pad')
samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

_$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  .room(.9).size(.9)
  ._scope()

//sine
_$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed("1 | -1")
  .fast(2)
  .room(.9).size(.9)
  ._scope()

// The playhead follows a sine: from the start of the sample to the halfway point, then back to the start
const swing = (() => {
  const cycles = 3 // one swing there and back. 3 cycles (8 s) is about normal speed for nicechord.wav
  const cycleSeconds = 60 / (90 / 4) // same as setcpm
  const sampleSeconds = 7.93 // length of nicechord.wav
  const w = 2 * Math.PI / cycles
  return signal(t => {
    const place = .25 * (1 - Math.cos(w * t)) // 0 at the start, .5 at the halfway point
    const speed = .25 * w * Math.sin(w * t) / cycleSeconds * sampleSeconds // how fast the playhead moves: - is backwards
    // [begin, speed] for scrub. With a negative speed, Strudel reverses the sample, so begin counts from the end
    return [speed < 0 ? 1 - place : place, speed]
  })
})()

$: s("nicechord")
  .scrub(swing.segment(128)) // 128 short grains per cycle. They join into one sound
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
