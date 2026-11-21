setcpm(180)

const length = .05;
const beat1 = "<<.9!7 .95> .04>"
const one = s("nicechord")
     .begin(beat1)
     .end(beat1.add(length))
     .gain(1.25)
     .speed("<-1 1>")
     .orbit(0);

const beat2a = "<.95>";
const two_a = s("nicechord")
     .begin(beat2a)
     .end(beat2a.add(length))
     .gain(0.45)
     .speed("<-1>")
     .orbit(0);

const beat2b = "<.05>";
const two_b = s("nicechord")
     .begin(beat2b)
     .end(beat2b.add(length))
     .gain(1)
     .hpf(300)
     .orbit(0)
     .speed("<1>");

const length3 = .3;
const beat3 = `< .05 >`;
const three = s("nicechord5")
    .begin(beat3)
    .end(beat3.add(length3))
    .gain(1.25)
    .speed("<1>")
    .orbit(0);

$beat: arrange(
            [32, one],
            [32, one],
            [14, stack(two_a, two_b)],
            [2, three],
            [8, stack(two_a, two_b)],
            [2, three],
            [14, stack(two_a, two_b)],
            [4, three],
            [128, stack(two_a, two_b)],
);

const bassdrum = arrange([32, "-"], [32, "<bd - - ->"], [256, "<bd ->"]);
$bassdrum: s(bassdrum)
         .bank("ViscoSpaceDrum")
         .release(.01)
         .decay(.10)
         .gain(1.5)
         .lpf(100)
         .duckorbit(0);
