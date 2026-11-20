setcpm(90/4)

const beat = stack(
    s("bd - [bd bd] -"),
    s("- sd - sd"),
    s("hh*16").gain(.2),
)
const fill = s("[ht ht - mt] [mt - lt lt] [- lt lt -] [lt bd lt -]")

$: cat(stack(beat, s("cr")), beat, beat, fill).bank("akailinn")
