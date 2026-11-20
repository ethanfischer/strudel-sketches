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

$flute: n("1 [- 1] [4 1] 3 [- 1] [3 1] 2 -")
            .slow(2)
            .set(chords)
            //.scale("pentatonic")
            .voicing()
            .attack(0)
            .release(.25)
            .sound("gm_flute")

all(x => x.swing(4)).room(6).roomsize(17)
