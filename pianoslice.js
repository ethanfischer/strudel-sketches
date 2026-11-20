samples('github:switchangel/pad')
samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

_$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  ._scope()

_$: stack(
    //note("<61 58 53 51 - 53 - 56>").gain(1),
    //note("44").gain(.5),
    //note("[47 49 51 54 - -]").gain(.4),
    //note("49").gain(.3),
    //note("51").gain(.2),
    //note("54").gain(.1),
  ).s("sine")
    .fm(1)
    .fmh(3.02)
    .lpf(300)

_$: s("nicechord")
  // | picks one of the four at random, for each group
  .slice(32, "[- 2 2 2 | 3 2 3 2 | 2 2 2 2]*2")
  .fast(4)
  .speed(2)
  .lpf(rand.range(500, 3000)) // a new random cutoff for each note
  .gain(.75)
  .room(.9).size(.9)
  ._scope()


_$: note("a [d a] [d g] | a [d a] [ g d] | c4 [d a] [d g] | d4 [d a] [d4 g] | g [d a] [d g]")
    .gain("1 .5 .5")
    .add(gain(rand.range(0, 0.35)))
    .sustain("3 .75 .75")
    .release("2 .55 .55")
    .sound("buzzer_wrong")
    .fast(4)

_$: s("nicechord")
  // | picks one of the four at random, for each group
  .slice(32, "[3 - 3 2 | - 2  2 - | - 2 2 2]*2")
  .fast(4)
  .speed(1.5)
  .lpf(rand.range(500, 3000)) // a new random cutoff for each note
  .gain(.75)
  .room(.9).size(.9)
  ._scope()

// Rain: a soft hiss, and drops at random times
_$: s("pink")
  .attack(1).release(3).sustain(2) // long fades, so each cycle blends into the next
  .hpf(1000)
  .lpf(sine.range(3500, 6000).slow(16)) // the rain gets a bit harder, then softer
  .gain(.25)
