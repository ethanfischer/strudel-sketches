samples('github:ethanfischer/strudel-samples')
setcpm(90/4)

$: s("bd bd bd bd")
    .bank("MoogConcertMateMG1")

$: s("- sd - sd")
    .bank("SoundmastersR88")

const phrase1 = note("c2 eb2 [c2 ab1] f1").attack(0).decay(.1).sustain(".05 .05 [0 0] 1").release(.1);
const phrase2 = note("c2 eb2 [c2 ab1] eb1").attack(0).decay(.1).sustain(".05 .05 [0 0] 1").release(.1).transpose(-1);
const phrase3 = note("c1, eb2").attack(0).decay(2).sustain(2).release(1);
                
$: stack(cat(phrase1, "-", phrase2, "-", phrase1, "-", phrase2, "-", phrase3, "-", "-","-"))
    .transpose(12)
    .fast(2)
    .sound("user")
    .partials(new Array(64).fill(0)
    .map((_, idx) => ((-1) ** (idx + 1)) / (idx + 1))
    )
    ._scope()

const hornPhrase = note("[c2 d2] eb2 - -").attack(0).decay("[.25 .25] 1").sustain("[.01 .01] 1").release("[.001 .001] .1");
$: stack(cat("-", "-", "-", "-","-", "-", "-", "-", hornPhrase, "-"))
        .gain(3)
        .fast(2).s("gm_brass_section")
