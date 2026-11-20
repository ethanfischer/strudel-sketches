_$partials: note("c2 <eb2 <g2 g1>>".fast(2))
.sound("user")
.partials([1, 0, 0.0, 0.3, 0.2, 0, 0.1, 0, 0.2, 0, 0.1, 0.05, 0, 0, 0, .01])
._scope()

const chords1 = chord("A-7 A-6 A-b6 D-7 G-9@4").slow(8);
const chords2 = chord("C-7 D7b9 G-11 G-69 C-7 D7b9 G-11@2").slow(8);
const chords = arrange([16, chords1], [8, chords2])

$piano: chords.voicing().s("piano")

$bass: n("0 1 2 3")
    .set(chords)
    .mode("root:d2")
    .voicing()
    .fm(1)
    .fmh(1)
    .lpf(1000)
    .sound("square")

$drums: stack(
  s("rd [rd rd] rd [rd rd]"),
  s("~ hh ~ hh"),
  s("bd - bd -").gain(.4),
)
.bank("YamahaRM50")

const flMel = "2 [- 2] [3 2] 0 [- 1] [2 1]  0 -";
const flMel2 = "[0 1] [- 1] [- 2] [- 2] [- 5] - 6@2";
const flMel3 = "- -  [3 2] [1 2 ] [3 4] - 3@2";
const flMel4 = "- - - - [[7 8] 7] - 3@2";
// A new line from perlin noise, with a random rhythm. ribbon loops one piece of it, so each motif plays 2 times
// (4 cycles after the slow), and then a new one. Change 13 for other motifs.
$flute: n(perlin.range(0, 7).floor())
            .struct("x [~ x] [x x] x [~ x] [x|~] x ~")
            .ribbon("<0 0 13 13>", 1)
            .slow(2)
            .set(chords)
            //.scale("pentatonic")
            .voicing()
            .attack(0)
            .release(.25)
            .sound("sine")

all(x => x.swing(4).room(1).roomsize(1))
