setcpm(90/4)

declare global {
    interface Pattern {
        downShift(): Pattern;
        upShift(): Pattern;
    }
}

// Before the $: lines: register makes the method when this line runs
const downShift = register('downShift', (p: Pattern) => p
    .lpf(2000)
    .transpose(-4));

const upShift = register('upShift', (p: Pattern) => p
    .lpf(200)
    .transpose(4));

function stupidMelody(){
    return note("g a b c").sound("gm_piano");
}

$: randcat(stupidMelody().downShift(), stupidMelody().upShift())


