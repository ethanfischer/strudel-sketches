var counter = 0;

const downShift = (p: Pattern) => p
    .lpf(2000)
    .transpose(-4);

const upShift = (p: Pattern) => p
    .lpf(500)
    .transpose(4);

function stupidMelody(){
    var result;
    if(counter % 2 == 0)
    {
        result = note("[g3 a3 b3 c4] * 2").sound("gm_piano");
    }
    else
    {
        result = note(counter + 20).sound("gm_piano");
    }
    counter++;
    return result;
}


//////////////////////////////////////////////////////////////////////////////////

setcpm(90/4)

$: eachCycle(stupidMelody)//.oneOf(downShift, upShift)

