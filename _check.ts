const crush = 18;

const chords1 = chord("A-7 A-6 A-b6 D-7 G-9@4").slow(8);
const chords2 = chord("C-7 D7b9 G-11 G-69 C-7 D7b9 G-11@2").slow(8);
const chords = arrange([16, chords1], [8, chords2])

$piano: chords
            .struct("x*8")
            .degradeBy(.8)
            .anchor(irand(7).add(64))
            .mode("duck")
            .voicing()
            .crush(crush + 4)
            .gain(rand.range(.1, 1))
            .s("piano")

$bass: n("0 1 2 3")
    .set(chords)
    .mode("root:d2")
    .voicing()
    .gain(1.5)
    .sound("tri")

$drums: stack(
  s("rd [rd rd] rd [rd rd]").gain(".8 [1 .55] .8 [1 .55]"),  
  s("~ hh ~ hh").gain(.7),
  s("bd - bd -").gain(.3),                                     
  s("sd*8").degradeBy(.8).gain(".25 .2"),                      // a few ghost notes on the snare
)
.velocity(perlin.fast(3).range(.8, 1))
.nudge(rand.early(.37).range(0, .012))
.crush(crush + 3)
.bank("YamahaRM50")

// A new line from perlin noise, on random eighths and sixteenths. ribbon loops one piece of it, so each motif plays
// 2 times (4 cycles after the slow), and then a new one. Change 13 for other motifs.
$flute: n(perlin.range(0, 7).floor())
            .struct("x*8")
            .sometimesBy(.25, x => x.ply(2))
            .degradeBy(.4)
            .ribbon(irand(1000).segment(1).slow(2), 1)
            .slow(2)
            .set(chords)
            .voicing()
            .attack(0)
            .release(.25)
            .lpf(700)
            .gain(.25)
            .adsr("0:.5:.7:.5")
            .sound("sine")

all(x => x.swing(4).room(1).roomsize(1))
