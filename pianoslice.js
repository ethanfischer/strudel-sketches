setcpm(90/4)
$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
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

_$: s("hammeredpaintcanstretched")
  .slow(2)
  ._scope()


_$: s("hammeredpaintcanstretched")
  .speed(rand.range(.7, 1.2))
  .slow(4)
  .room(.9)
  .size(.9)
  ._scope()

// Rain: a soft hiss, and drops at random times
$: s("pink")
  .attack(1).release(1).sustain(1) // long fades, so each cycle blends into the next
  .hpf(400)
  .lpf(sine.range(1500, 4000).slow(16)) // the rain gets a bit harder, then softer
  .gain(.25)

$: s("white*32")
  .degradeBy(.8) // only 1 in 5 steps gets a drop
  .nudge(rand.range(0, .04)) // so the drops are not on the grid
  .decay(rand.range(.005, .03)).sustain(0)
  .hpf(rand.range(2500, 9000))
  .gain(rand.range(.05, .3))
  .pan(rand)
  .room(.3)
