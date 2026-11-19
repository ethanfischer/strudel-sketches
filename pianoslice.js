samples('github:switchangel/pad')
samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

_$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  .room(.9).size(.9)
  ._scope()

// The playhead follows a sine: from the start of the sample to the halfway point, then back to the start
const swing = (() => {
  const cycles = 3 // one swing there and back
  const w = 2 * Math.PI / cycles
  return signal(t => {
    const place = .05 * (1 - Math.cos(w * t)) // 0 at the start, .5 at the halfway point
    const back = Math.sin(w * t) < 0 // the playhead moves backwards in the second half of the swing
    // [begin, speed] for scrub. The speed is always 1 or -1, so the pitch does not change.
    // With a negative speed, Strudel reverses the sample, so begin counts from the end
    return back ? [1 - place, -1] : [place, 1]
  })
})()

$: s("nicechord")
  .scrub(swing.segment(64)) // 64 short grains per cycle. They join into one sound
  .clip(2).attack(.03).release(.03) // each grain is 2 steps long and fades in and out, so the grains overlap
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
