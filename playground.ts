_$partials: note("c2 <eb2 <g2 g1>>".fast(2))
.sound("user")
.partials([1, 0, 0.0, 0.3, 0.2, 0, 0.1, 0, 0.2, 0, 0.1, 0.05, 0, 0, 0, .01])
._scope()

const chords1 = chord("A-7 A-6 A-b6 D-7 G-9@4").slow(8);
const chords2 = chord("C-7 D7b9 G-11 G-69 C-7 D7b9 G-11@2").slow(8);
const chords = arrange([16, chords1], [8, chords2])

$piano: chords.voicing().s("piano")
$bass: chords.rootNotes(2).s("gm_acoustic_bass")
