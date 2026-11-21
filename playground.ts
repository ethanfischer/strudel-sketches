samples('github:switchangel/pad')
setcpm(90)

_$: s("nicechord")
  .slice(8, "7") // try 12, 13, 14, 15
  .speed(-1)
  .fast(4)
  ._scope()


const f = "1 - 4 - 2 - 6 -";
//const r = "16 - 10 - 14  - 12 -"
const r = "15 15" 
_$: s("nicechord")
  .slice(16, r) // try 12, 13, 14, 15
  .speed(-1 -.0125)
  .fast(2)
  ._scope()

const l = .3;
const back = s("nicechord")
    .speed(-1)
    .begin(1-l)
    .end(1);


const back2 = s("nicechord")
    .speed(-1)
    .begin(1-l)
    .end(1);

const fwd = s("nicechord")
    .speed(1)
    .begin(.05)
    .end(l);


const fwd2 = s("nicechord")
    .speed(1)
    .begin(.10)
    .end(l+.10);

_$: cat(back, back2);

const starts = "<.05 .90 .10 .95 .05 .90 .05 .92 .05 .90 .05 .89>";
$: s("nicechord")
    .begin(starts)
    .end(starts.add(l))
    .speed("<1 -1>");
