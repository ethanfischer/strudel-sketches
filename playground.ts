_$partials: note("c2 <eb2 <g2 g1>>".fast(2))
.sound("user")
.partials([1, 0, 0.0, 0.3, 0.2, 0, 0.1, 0, 0.2, 0, 0.1, 0.05, 0, 0, 0, .01])
._scope()

const chords = chord("A-7 A-6 A-b6 D-7 G-9@2").slow(4);
$piano: chords.voicing().s("piano")

$bass: chords.rootNotes(2).note().s("gm_acoustic_bass")
