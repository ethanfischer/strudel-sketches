setcpm(180)

const l = .05;
const beat1 = `<
                  .9 .05 .9 .05 
                  .9 .05 .9 .05 
                  .9 .05 .9 .05 
                  .9 .05 .95 .05>`;
 const one = s("nicechord")
     .begin(beat1)
     .end(beat1.add(l))
     .gain(1.25)
     .speed("<-1 1>")
     .orbit(0);

 const beat2a = "<.95>";
 const two_a = s("nicechord")
     .begin(beat2a)
     .end(beat2a.add(l))
     .gain(0.35)
     .speed("<-1>")
     .orbit(0);

 const beat2b = "<.05 .05 .05 .05 .05 .05 .05 .05>";
 const two_b = s("nicechord")
     .begin(beat2b)
     .end(beat2b.add(l))
     .gain(0.75)
     .hpf(300)
     .speed("<1>");


const l3 = .3;
const beat3 = `< .05 >`;
const three = s("nicechord5")
    .begin(beat3)
    .end(beat3.add(l3))
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
            [2, three],
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


const lb = .2;
const beat1b = `<
                .2 .6 .2 .6
                .2 .6 .2 .6
                .2 .6 .2 .6
                .2 .6 .2 .40
                >`;
const oneB = s("nicechord2")
    .begin(beat1b)
    .end(beat1b.add(lb))
    .gain(1.25)
    .speed("<1 -1>")
    .orbit(0);



_$beat: arrange([32, three]);
