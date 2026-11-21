setcpm(180)

const l = .05;
const beat1 = "<.05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .9 .05 .95>";
$beat: s("nicechord")
    .begin(beat1)
    .end(beat1.add(l))
    .gain(1.25)
    .speed("<1 -1>")
    .orbit(0);

const beatX = "<.05 .05 .05 .05 .05 .05 .05 .05>";
_$beat: s("nicechord")
    .begin(beatX)
    .end(beatX.add(l))
    .gain(1.0)
    .hpf(300)
    .speed("<1>");

// const beat2 = "<.01 .01 .01 .01 .01 .01 .01 .01>";
// _$beat: s("nicechord")
//     .begin(beat2)
//     .end(beat2.add(l))
//     .gain(0.75)
//     .speed("<1>")
//     .orbit(0);

const beat3 = "<.95>";
$beat: s("nicechord")
    .begin(beat3)
    .end(beat3.add(l))
    .gain(0.75)
    .speed("<-1>")
    .orbit(0);

const melody1 = `
                [- 0] [2 -] [3 -] [4 -] 
                [3 -] [2 -] [1 -] [-1 -]
                [- 0] [2 -] [1 -] [-1 -] 
                [0 -] - - -
                `;
const melody = arrange([1, melody1], [1, "-"]);
_$bass: n(melody).scale("Ab:minor").s("sine").slow(32).transpose(-12)


const bassdrum = arrange([4, "-"], [2, "bd - bd -"], [16, "bd bd bd bd"]);
$bassdrum: s(bassdrum)
            .bank("ViscoSpaceDrum")
            .slow(8)
            .early(5)
            .release(.01)
            .decay(.10)
            .gain(1.5)
            .lpf(100)
            .duckorbit(0);
