setcpm(90/4)

declare global {
    interface Pattern {
        downShift(): Pattern;
        upShift(): Pattern;
        oneOf(...changes: ((p: Pattern) => Pattern)[]): Pattern;
    }
}

// Before the $: lines: register makes the method when this line runs
const downShift = register('downShift', (p: Pattern) => p
    .lpf(2000)
    .transpose(-4));

const upShift = register('upShift', (p: Pattern) => p
    .lpf(200)
    .transpose(4));

// pattern.oneOf(a, b, ...): for each cycle, the pattern changed by one of the functions, at random
Pattern.prototype.oneOf = function (...changes: ((p: Pattern) => Pattern)[]) {
    return randcat(...changes.map(change => change(this)))
}

function stupidMelody(){
    return note("g a b c").sound("gm_piano");
}

$: stupidMelody().oneOf(downShift, upShift)


