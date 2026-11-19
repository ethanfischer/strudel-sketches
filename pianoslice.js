setcpm(90/4)
$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  .room(.9).size(.9)
  ._scope()

$: s("nicechord")
  // | picks one of the four at random, for each group
  .slice(32, "[- 2 2 2 | 3 2 3 2 | 2 2 2 2]*2")
  .fast(4)
  .speed(2)
  .lpf(rand.range(500, 3000)) // a new random cutoff for each note
  .gain(.75)
  .room(.9).size(.9)
  ._scope()

_$: s("nicechord")
  .slice(32, "<[2 - 2 2]*2 [[- 2 2 2]*2]!2>") // try 12, 13, 14, 15
  .fast(4)
  .room(.9).size(.9)
  ._scope()
