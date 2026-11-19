setcpm(90/4)
_$: s("audacity4")
  .n(4)
  .slice(32, "<1 [5 2] 1 - [- 5*2] 1 - - [1 2] - - - - ->")
  .fast(8)
  ._scope()
  _$: s("audacity4")
  .n(4)
  .note("f1")
  .slice(32, "<- - - - - [- 3] [- 3] [- 3] - - ->")
  .fast(8)
  ._scope()
$: s("audacity4")
  .n(4)
  .slice(32, `<
  [1 - 1 -] [1 1 - -] [1 - 1 1] [1 - 1 1]
  [1 - 1 -] [1 - 1 1] [1 - 1 -] [1 1 1 -]
  [1 1 - 1] [1 - - 1] [1 - 1 1] [1 - 1 1]
  >`)
  .sometimes("x => ")
  //.release("<.1 1 1 1>")
  .sustain("<.225*4>")
  .fast(8)
  ._scope()

// ---- Slice experiments. Change _$ to $ to hear one. ----

// 1. Random slices: a new random slice on each eighth note
_$: s("audacity4").n(4)
  .slice(32, irand(32).segment(8))
  ._scope()

// 2. Window walk: play 8 slices in order, move the window each cycle
_$: s("audacity4").n(4)
  .slice(32, run(8).add("<0 8 16 24>"))
  ._scope()

// 3. Splice: like slice, but changes speed so each slice fills its step
_$: s("audacity4").n(4)
  .splice(32, "<1 [5 2] 1 [3 5]>*4")
  ._scope()

// 4. Backwards slices: about 30% play in reverse
_$: s("audacity4").n(4)
  .slice(32, "1 - 1 1 [1 5] - 2 1")
  .sometimesBy(.3, x => x.speed(-1))
  ._scope()

// 5. Stutter and stereo: ply repeats slices, jux reverses the right side
_$: s("audacity4").n(4)
  .slice(32, "<1 5 2 3>*8")
  .ply("<1 2 1 4>")
  .jux(rev)
  ._scope()

// ---- Backwards experiments. Long slices so you hear the swell. ----

// B1. Whole sample in reverse: chop + rev reverses the chunk order,
// speed(-1) reverses each chunk. Together: true reverse.
_$: s("audacity4").n(4)
  .loopAt(4)
  .chop(32)
  .rev()
  .speed(-1)
  .room(.4)
  ._scope()

// B2. Reverse swells: four long slices, each played backwards
// at half speed (one octave down), with a big room
_$: s("audacity4").n(4)
  .slice(4, "<3 1 2 0>")
  .speed(-.5)
  .room(.9).size(.9)
  ._scope()

// B3. Palindrome: each slice plays backwards, then forwards
_$: s("audacity4").n(4)
  .slice(8, "<[3 3] [5 5] [1 1] [6 6]>*2")
  .speed("-1 1")
  ._scope()

// B4. Backwards ratchet: reverse rolls that speed up and pitch up
_$: s("audacity4").n(4)
  .slice(8, "<2 5>")
  .ply("<4 8 16 [8 32]>")
  .speed("-1 -1.5 -2 -3")
  .gain(saw.range(.3, 1).fast(1))
  ._scope()

// B5. Tape stop: speed falls from 1 to -1, so each slice slows,
// stops, then plays backwards
_$: s("audacity4").n(4)
  .slice(4, "<0 2>")
  .chop(64)
  .speed(saw.range(1, -1))
  ._scope()
