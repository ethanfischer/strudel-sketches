setcpm(90/4)

const beat = stack(
    s("bd - [bd bd] -"),
    s("- sd - sd"),
    s("hh*16").gain(.2),
)
const fill = s("[ht ht - mt] [mt - lt lt] [- lt lt -] [lt bd lt -]")
const crash = s("<cr - - ->").mask(signal(t => t >= 4)) // on the bar after each fill, so not on bar 1

$: stack(cat(beat, beat, beat, fill), crash).bank("akailinn")
