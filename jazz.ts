const chords1 = chord("A-7 A-6 A-b6 D-7 G-9@4").slow(8);
const chords2 = chord("C-7 D7b9 G-11 G-69 C-7 D7b9 G-11@2").slow(8);
const chords3 = chord("F^7@2 Bb^7#11@2 B-7b5@2 E7sus@2").slow(8);
const chords = arrange([16, chords1], [8, chords2], [16, chords1], [8, chords3])

$piano: chords
            .struct("x*8")
            .degradeBy(.8)
            .anchor(irand(7).add(64))
            .mode("duck")
            .voicing()
            .gain(rand.early(.37).range(.05, 1)) // not rand: degradeBy keeps only the notes where rand is high
            .s("piano")

$bass: n("0 1 2 3")
    .sometimesBy(.15, x => x.ply(2))
    //.sometimesBy(1, x => x.ply(2).add(n("<[0 2] 0>*4")))
    .set(chords)
    .mode("root:d2")
    .voicing()
    .transpose("[-12 7]*4") // only the eighths have an onset on the "and"
    .gain(1.5)
    .mul(velocity(rand.early(.53).range(.75, 1))) // not rand: sometimesBy uses it to pick the eighths
    .sound("gm_acoustic_bass")

$drums: stack(
  s("rd [rd rd] rd [rd rd]").gain(".8 [1 .55] .8 [1 .55]"),  
  s("~ hh ~ hh").gain(.7),
  s("bd - bd -").gain(.3),                                    
  s("sd*8").degradeBy(.8).gain(".25 .2"),                      // a few ghost notes on the snare
)
.velocity(perlin.fast(3).range(.8, 1))
.nudge(rand.early(.37).range(0, .012))
.bank("YamahaRM50")

all(x => x.swing(4).room(1).roomsize(1))
