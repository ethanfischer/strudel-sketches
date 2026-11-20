setcpm(90/4)

$: second(first())

function first(){
    return note("g").sound("gm_piano");
}


function second(p: Pattern){
    return p.lpf(201);
}


