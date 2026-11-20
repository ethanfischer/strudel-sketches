// Helpers for all sketches. The dev page runs this file before each sketch, and <leader>my puts it in front of the
// copied code, so the helpers also work on strudel.cc. Use 'single quotes' here: in Strudel, "double quotes" are
// mini-notation, and the dev page runs this file as plain JavaScript.

declare global {
    interface Pattern {
        /** For each cycle, the pattern changed by one of the functions, at random: pat.oneOf(p => p.fast(2), p => p.rev()) */
        oneOf(...changes: ((p: Pattern) => Pattern)[]): Pattern;
    }
    /**
     * Calls make once for each cycle, with the cycle number, and plays the pattern that it returns for that cycle.
     * So state in make, for example a counter, changes once per cycle.
     */
    var eachCycle: (make: (cycle: number) => Pattern) => Pattern;
}

Pattern.prototype.oneOf = function (...changes: ((p: Pattern) => Pattern)[]) {
    return randcat(...changes.map(change => change(this)));
};

globalThis.eachCycle = make => {
    // Strudel asks a pattern for its notes many times per cycle, and the display also asks for cycles before and
    // after now. So make the cycles in order from 0, once each, and keep them. Before cycle 0 there is nothing.
    const made: Pattern[] = [];
    return signal(t => Math.floor(t)).segment(1).fmap((cycle: number) => {
        if (cycle < 0) return silence;
        while (made.length <= cycle) made.push(make(made.length));
        return made[cycle];
    }).innerJoin();
};
