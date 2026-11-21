setcpm(180)

const l = .05;
const beat1 = "<.05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .95>";
const one = s("nicechord")
    .begin(beat1)
    .end(beat1.add(l))
    .gain(1.25)
    .speed("<1 -1>")
    .orbit(0);

const beat2 = "<.95>";
const two = s("nicechord")
    .begin(beat2)
    .end(beat2.add(l))
    .gain(0.75)
    .speed("<-1>")
    .orbit(0);

const beatX = "<.05 .05 .05 .05 .05 .05 .05 .05>";
const x = s("nicechord")
    .begin(beatX)
    .end(beatX.add(l))
    .gain(0.75)
    .hpf(300)
    .speed("<1>");

$beat: arrange([32, one], [33, one], [256, stack(two, x)]);


// The same sections as $beat (4, 2, 16 cycles), so they change at the same time
const bassdrum = arrange([32, "-"], [32, "<bd - - ->"], [256, "<bd ->"]);
$bassdrum: s(bassdrum)
            .bank("ViscoSpaceDrum")
            .late(1)
            .release(.01)
            .decay(.10)
            .gain(1.5)
            .lpf(100)
            .duckorbit(0);
