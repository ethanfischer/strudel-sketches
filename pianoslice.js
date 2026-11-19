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
