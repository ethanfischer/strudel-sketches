setcpm(90/4)
$: s("audacity4").n(4)
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  .room(.9).size(.9)
  ._scope()

$: s("audacity4").n(4)
  // | picks one of the four at random, for each group
  .slice(32, "[- 2 2 2 | 2 - 2 2 | 2 2 - 2 | 2 2 2 -]*2")
  .fast(4)
  .speed(2)
  .gain(.75)
  .room(.9).size(.9)
  ._scope()

_$: s("audacity4").n(4)
  .slice(32, "<[2 - 2 2]*2 [[- 2 2 2]*2]!2>") // try 12, 13, 14, 15
  .fast(4)
  .room(.9).size(.9)
  ._scope()
