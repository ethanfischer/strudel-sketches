setcpm(90/4)

declare global {
    interface Pattern {
        second(): Pattern;
    }
}

// Before the $: lines: register makes the method when this line runs
const second = register('second', (p: Pattern) => p
    .lpf(200));

$: first().second()

function first(){
    return note("g a b c").sound("gm_piano");
}

