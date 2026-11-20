setcpm(90/4)

// The counter version. It also plays a crash on bar 1. To play it, comment out the $: line of the cat version and uncomment this one.
// $: eachCycle(getNextMeasure)

var counter = 1;

function getNextMeasure(){
    var result;
    if(counter > 0 && counter % 4 == 0)
    {
        result = stack (
            s("<[ht ht - mt] [mt - lt lt] [- lt lt -] [lt bd lt -]>")
        )
    }
    else if(counter > 0 && counter % 4 == 1){
        result = stack (
            s("<bd - [bd bd] ->"),
            s("<- sd>"),
            s("<cr - - ->"),
            s("<hh*4>").gain(.2)
        )
    }
    else
    {
        result = stack (
            s("<bd - [bd bd] ->"),
            s("<- sd>"),
            s("<hh*4>").gain(.2)
        )
    }
    counter++;
    console.log(counter);
    return result.bank("akailinn").fast(4);
}


//////////////////////////////////////////////////////////////////////////////////

// The cat version
const beat = stack(
    s("bd - [bd bd] -"),
    s("- sd - sd"),
    s("hh*16").gain(.2),
)
const fill = s("[ht ht - mt] [mt - lt lt] [- lt lt -] [lt bd lt -]")
const crash = s("<cr - - ->").mask(signal(t => t >= 4)) // on the bar after each fill, so not on bar 1

$: stack(cat(beat, beat, beat, fill), crash).bank("akailinn")
