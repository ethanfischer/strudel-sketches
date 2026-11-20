// Strudel names for editor completion and hover docs. Made from @strudel/repl 1.3.0: the names that it defines
// at run time (also setcpm, hush and the others that the REPL adds when it runs code), and its docs. jsconfig.json adds this file to the .js files here. Do not edit by hand.

// An argument with no docs: a pattern function, or any value
type Arg = ((pat: Pattern, ...args: any[]) => any) | string | number | boolean | object | null | undefined

interface Pattern {
  /**
   * Establishes an FX chain. Can be called by chaining .FX(fx1).FX(fx2)..
   * calls and/or in a single .FX(fx1, fx2, ..) call. The fx1, .. are patterns which
   * establish the controls of the given effect. See examples.
   * @example
   * $: s("[sbd <hh [bd | lt | oh]>]*4").dec(.4)
   *   .FX(
   *     phaser(0.5).gain(2),
   *     bpf(800),
   *     distort(1.3),
   *     room(0.2),
   *     delay(0.5).gain(1.25),
   *     distort(0.3),
   *   ).fxr(1.7) // sets release time of effects (like delay)
   * @example
   * $: s("saw").fm(0.5)
   *   .delay(0.3) // outer effects are applied *last*
   *   .FX(coarse(4)) // first coarse
   *   .FX(lpf(500).lpe(4).lpa(1).lpd(2)) // then lpf
   *   .FX(distort(1)) // then distort
   */
  FX(...more: Arg[]): Pattern
  FXr(...more: Arg[]): Pattern
  FXrel(...more: Arg[]): Pattern
  FXrelease(...more: Arg[]): Pattern
  _ad(...more: Arg[]): Pattern
  _add(...more: Arg[]): Pattern
  _adsr(...more: Arg[]): Pattern
  _almostAlways(...more: Arg[]): Pattern
  _almostNever(...more: Arg[]): Pattern
  _always(...more: Arg[]): Pattern
  _and(...more: Arg[]): Pattern
  _apply(...more: Arg[]): Pattern
  _applyN(...more: Arg[]): Pattern
  _ar(...more: Arg[]): Pattern
  _arp(...more: Arg[]): Pattern
  _arpWith(...more: Arg[]): Pattern
  _as(...more: Arg[]): Pattern
  _band(...more: Arg[]): Pattern
  _beat(...more: Arg[]): Pattern
  _bite(...more: Arg[]): Pattern
  _bjork(...more: Arg[]): Pattern
  _blshift(...more: Arg[]): Pattern
  _bor(...more: Arg[]): Pattern
  _brshift(...more: Arg[]): Pattern
  _bxor(...more: Arg[]): Pattern
  _bypass(...more: Arg[]): Pattern
  _chop(...more: Arg[]): Pattern
  _chunk(...more: Arg[]): Pattern
  _chunkBack(...more: Arg[]): Pattern
  _chunkBackInto(...more: Arg[]): Pattern
  _chunkInto(...more: Arg[]): Pattern
  _chunkback(...more: Arg[]): Pattern
  _chunkbackinto(...more: Arg[]): Pattern
  _chunkinto(...more: Arg[]): Pattern
  _compress(...more: Arg[]): Pattern
  _compressSpan(...more: Arg[]): Pattern
  _compressspan(...more: Arg[]): Pattern
  _contract(...more: Arg[]): Pattern
  _control(...more: Arg[]): Pattern
  _cpm(...more: Arg[]): Pattern
  _degradeBy(...more: Arg[]): Pattern
  _degradeByWith(...more: Arg[]): Pattern
  _density(...more: Arg[]): Pattern
  _div(...more: Arg[]): Pattern
  _drop(...more: Arg[]): Pattern
  _ds(...more: Arg[]): Pattern
  _early(...more: Arg[]): Pattern
  _echo(...more: Arg[]): Pattern
  _echoWith(...more: Arg[]): Pattern
  _echowith(...more: Arg[]): Pattern
  _eish(...more: Arg[]): Pattern
  _eq(...more: Arg[]): Pattern
  _eqt(...more: Arg[]): Pattern
  _euclid(...more: Arg[]): Pattern
  _euclidLegato(...more: Arg[]): Pattern
  _euclidLegatoRot(...more: Arg[]): Pattern
  /**
   *
   * @example
   * // A thirteenth-century Persian rhythm called Khafif-e-ramal.
   * note("c3").euclid(2,5)
   * @example
   * // The archetypal pattern of the Cumbia from Colombia, as well as a Calypso rhythm from Trinidad.
   * note("c3").euclid(3,4)
   * @example
   * // Another thirteenth century Persian rhythm by the name of Khafif-e-ramal, as well as a Rumanian folk-dance rhythm.
   * note("c3").euclidRot(3,5,2)
   * @example
   * // A Ruchenitza rhythm used in a Bulgarian folk dance.
   * note("c3").euclid(3,7)
   * @example
   * // The Cuban tresillo pattern.
   * note("c3").euclid(3,8)
   * @example
   * // Another Ruchenitza Bulgarian folk-dance rhythm.
   * note("c3").euclid(4,7)
   * @example
   * // The Aksak rhythm of Turkey.
   * note("c3").euclid(4,9)
   * @example
   * // The metric pattern used by Frank Zappa in his piece titled Outside Now.
   * note("c3").euclid(4,11)
   * @example
   * // Yields the York-Samai pattern, a popular Arab rhythm.
   * note("c3").euclid(5,6)
   * @example
   * // The Nawakhat pattern, another popular Arab rhythm.
   * note("c3").euclid(5,7)
   * @example
   * // The Cuban cinquillo pattern.
   * note("c3").euclid(5,8)
   * @example
   * // A popular Arab rhythm called Agsag-Samai.
   * note("c3").euclid(5,9)
   * @example
   * // The metric pattern used by Moussorgsky in Pictures at an Exhibition.
   * note("c3").euclid(5,11)
   * @example
   * // The Venda clapping pattern of a South African children’s song.
   * note("c3").euclid(5,12)
   * @example
   * // The Bossa-Nova rhythm necklace of Brazil.
   * note("c3").euclid(5,16)
   * @example
   * // A typical rhythm played on the Bendir (frame drum).
   * note("c3").euclid(7,8)
   * @example
   * // A common West African bell pattern.
   * note("c3").euclid(7,12)
   * @example
   * // A Samba rhythm necklace from Brazil.
   * note("c3").euclidRot(7,16,14)
   * @example
   * // A rhythm necklace used in the Central African Republic.
   * note("c3").euclid(9,16)
   * @example
   * // A rhythm necklace of the Aka Pygmies of Central Africa.
   * note("c3").euclidRot(11,24,14)
   * @example
   * // Another rhythm necklace of the Aka Pygmies of the upper Sangha.
   * note("c3").euclidRot(13,24,5)
   */
  _euclidRot(...more: Arg[]): Pattern
  _euclidish(...more: Arg[]): Pattern
  _euclidrot(...more: Arg[]): Pattern
  _every(...more: Arg[]): Pattern
  _expand(...more: Arg[]): Pattern
  _extend(...more: Arg[]): Pattern
  _fast(...more: Arg[]): Pattern
  _fastChunk(...more: Arg[]): Pattern
  _fastGap(...more: Arg[]): Pattern
  _fastchunk(...more: Arg[]): Pattern
  _fastgap(...more: Arg[]): Pattern
  _filter(...more: Arg[]): Pattern
  _filterWhen(...more: Arg[]): Pattern
  _firstOf(...more: Arg[]): Pattern
  _focus(...more: Arg[]): Pattern
  _focusSpan(...more: Arg[]): Pattern
  _focusspan(...more: Arg[]): Pattern
  _func(...more: Arg[]): Pattern
  _grow(...more: Arg[]): Pattern
  _gt(...more: Arg[]): Pattern
  _gte(...more: Arg[]): Pattern
  _hsl(...more: Arg[]): Pattern
  _hsla(...more: Arg[]): Pattern
  _hurry(...more: Arg[]): Pattern
  _inhabit(...more: Arg[]): Pattern
  _inhabitmod(...more: Arg[]): Pattern
  _inside(...more: Arg[]): Pattern
  _iter(...more: Arg[]): Pattern
  _iterBack(...more: Arg[]): Pattern
  _iterback(...more: Arg[]): Pattern
  _jux(...more: Arg[]): Pattern
  _juxBy(...more: Arg[]): Pattern
  _juxby(...more: Arg[]): Pattern
  _keep(...more: Arg[]): Pattern
  _keepif(...more: Arg[]): Pattern
  _lastOf(...more: Arg[]): Pattern
  _late(...more: Arg[]): Pattern
  _linger(...more: Arg[]): Pattern
  _log2(...more: Arg[]): Pattern
  _loopAt(...more: Arg[]): Pattern
  _loopAtCps(...more: Arg[]): Pattern
  _loopat(...more: Arg[]): Pattern
  _loopatcps(...more: Arg[]): Pattern
  _lt(...more: Arg[]): Pattern
  _lte(...more: Arg[]): Pattern
  _mod(...more: Arg[]): Pattern
  _moveXY(...more: Arg[]): Pattern
  _mul(...more: Arg[]): Pattern
  _ne(...more: Arg[]): Pattern
  _net(...more: Arg[]): Pattern
  _never(...more: Arg[]): Pattern
  _off(...more: Arg[]): Pattern
  _often(...more: Arg[]): Pattern
  _opIn(...more: Arg[]): Pattern
  _opMix(...more: Arg[]): Pattern
  _opOut(...more: Arg[]): Pattern
  _opPoly(...more: Arg[]): Pattern
  _opReset(...more: Arg[]): Pattern
  _opRestart(...more: Arg[]): Pattern
  _opSqueeze(...more: Arg[]): Pattern
  _opSqueezeOut(...more: Arg[]): Pattern
  _or(...more: Arg[]): Pattern
  _outside(...more: Arg[]): Pattern
  _pace(...more: Arg[]): Pattern
  _pianoroll(...more: Arg[]): Pattern
  _pick(...more: Arg[]): Pattern
  _pickF(...more: Arg[]): Pattern
  _pickOut(...more: Arg[]): Pattern
  _pickReset(...more: Arg[]): Pattern
  _pickRestart(...more: Arg[]): Pattern
  _pickSqueeze(...more: Arg[]): Pattern
  _pickmod(...more: Arg[]): Pattern
  _pickmodF(...more: Arg[]): Pattern
  _pickmodOut(...more: Arg[]): Pattern
  _pickmodReset(...more: Arg[]): Pattern
  _pickmodRestart(...more: Arg[]): Pattern
  _pickmodSqueeze(...more: Arg[]): Pattern
  _pitchwheel(...more: Arg[]): Pattern
  _ply(...more: Arg[]): Pattern
  _plyForEach(...more: Arg[]): Pattern
  _plyWith(...more: Arg[]): Pattern
  _plyforeach(...more: Arg[]): Pattern
  _plywith(...more: Arg[]): Pattern
  _pow(...more: Arg[]): Pattern
  _pressBy(...more: Arg[]): Pattern
  _punchcard(...more: Arg[]): Pattern
  _range(...more: Arg[]): Pattern
  _range2(...more: Arg[]): Pattern
  _rangex(...more: Arg[]): Pattern
  _rarely(...more: Arg[]): Pattern
  _repeatCycles(...more: Arg[]): Pattern
  _replicate(...more: Arg[]): Pattern
  _rescale(...more: Arg[]): Pattern
  _rib(...more: Arg[]): Pattern
  _ribbon(...more: Arg[]): Pattern
  _rootNotes(...more: Arg[]): Pattern
  _scale(...more: Arg[]): Pattern
  _scaleTrans(...more: Arg[]): Pattern
  _scaleTranspose(...more: Arg[]): Pattern
  _scope(...more: Arg[]): Pattern
  _scramble(...more: Arg[]): Pattern
  _scrub(...more: Arg[]): Pattern
  _seed(...more: Arg[]): Pattern
  _seg(...more: Arg[]): Pattern
  _segment(...more: Arg[]): Pattern
  _set(...more: Arg[]): Pattern
  _shrink(...more: Arg[]): Pattern
  _shuffle(...more: Arg[]): Pattern
  _slice(...more: Arg[]): Pattern
  _slow(...more: Arg[]): Pattern
  _slowChunk(...more: Arg[]): Pattern
  _slowchunk(...more: Arg[]): Pattern
  _someCycles(...more: Arg[]): Pattern
  _someCyclesBy(...more: Arg[]): Pattern
  _sometimes(...more: Arg[]): Pattern
  _sometimesBy(...more: Arg[]): Pattern
  _sparsity(...more: Arg[]): Pattern
  _speak(...more: Arg[]): Pattern
  _spectrum(...more: Arg[]): Pattern
  _spiral(...more: Arg[]): Pattern
  _splice(...more: Arg[]): Pattern
  _strans(...more: Arg[]): Pattern
  _striate(...more: Arg[]): Pattern
  _stut(...more: Arg[]): Pattern
  _stutWith(...more: Arg[]): Pattern
  _stutwith(...more: Arg[]): Pattern
  _sub(...more: Arg[]): Pattern
  _swing(...more: Arg[]): Pattern
  _swingBy(...more: Arg[]): Pattern
  _sysex(...more: Arg[]): Pattern
  _take(...more: Arg[]): Pattern
  _timeline(...more: Arg[]): Pattern
  _trans(...more: Arg[]): Pattern
  _transpose(...more: Arg[]): Pattern
  _undegradeBy(...more: Arg[]): Pattern
  _voicings(...more: Arg[]): Pattern
  _when(...more: Arg[]): Pattern
  _whenKey(...more: Arg[]): Pattern
  _within(...more: Arg[]): Pattern
  _zoom(...more: Arg[]): Pattern
  _zoomArc(...more: Arg[]): Pattern
  _zoomIn(...more: Arg[]): Pattern
  _zoomarc(...more: Arg[]): Pattern
  /**
   * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
   * @param amount {number | Pattern} acceleration.
   * @example
   * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
   */
  accelerate(amount?: any, ...more: Arg[]): Pattern
  activeLabel(...more: Arg[]): Pattern
  ad(...more: Arg[]): Pattern
  /**
   * Assumes a pattern of numbers. Adds the given number to each item in the pattern.
   * @example
   * // Here, the triad 0, 2, 4 is shifted by different amounts
   * n("0 2 4".add("<0 3 4 0>")).scale("C:major")
   * // Without add, the equivalent would be:
   * // n("<[0 2 4] [3 5 7] [4 6 8] [0 2 4]>").scale("C:major")
   * @example
   * // You can also use add with notes:
   * note("c3 e3 g3".add("<0 5 7 0>"))
   * // Behind the scenes, the notes are converted to midi numbers:
   * // note("48 52 55".add("<0 5 7 0>"))
   */
  add(...more: Arg[]): Pattern
  /**
   * ADSR envelope: Combination of Attack, Decay, Sustain, and Release.
   * @param time {number | Pattern} attack time in seconds
   * @param time {number | Pattern} decay time in seconds
   * @param gain {number | Pattern} sustain level (0 to 1)
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("[c3 bb2 f3 eb3]*2").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
   */
  adsr(time?: any, time_?: any, gain?: any, time__?: any, ...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.9, fn)
   * @example
   * s("hh*8").almostAlways(x=>x.speed("0.5"))
   */
  almostAlways(...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.1, fn)
   * @example
   * s("hh*8").almostNever(x=>x.speed("0.5"))
   */
  almostNever(...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(1, fn) (always calls fn)
   * @example
   * s("hh*8").always(x=>x.speed("0.5"))
   */
  always(...more: Arg[]): Pattern
  /**
   * Like gain, but linear.
   * @param amount {number | Pattern} gain.
   * @example
   * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
   */
  amp(amount?: any, ...more: Arg[]): Pattern
  analyze(...more: Arg[]): Pattern
  /**
   * The top note to align the voicing to. Defaults to c5
   * @param anchorNote {string | Pattern} the note to align the voicings to
   * @example
   * anchor("<c4 g4 c5 g5>").chord("C").voicing()
   */
  anchor(anchorNote?: any, ...more: Arg[]): Pattern
  and(...more: Arg[]): Pattern
  angle(...more: Arg[]): Pattern
  animate(...more: Arg[]): Pattern
  /**
   * When this method is called on a pattern of functions, it matches its haps
   * with those in the given pattern of values.  A new pattern is returned, with
   * each matching value applied to the corresponding function.
   * In this _appBoth variant, where timespans of the function and value haps
   * are not the same but do intersect, the resulting hap has a timespan of the
   * intersection. This applies to both the part and the whole timespan.
   * @param pat_val {Pattern}
   */
  appBoth(pat_val?: any, ...more: Arg[]): Pattern
  /**
   * As with appBoth, but the whole timespan is not the intersection,
   * but the timespan from the function of patterns that this method is called
   * on. In practice, this means that the pattern structure, including onsets,
   * are preserved from the pattern of functions (often referred to as the left
   * hand or inner pattern).
   * @param pat_val {Pattern}
   */
  appLeft(pat_val?: any, ...more: Arg[]): Pattern
  /**
   * As with appLeft, but whole timespans are instead taken from the
   * pattern of values, i.e. structure is preserved from the right hand/outer
   * pattern.
   * @param pat_val {Pattern}
   */
  appRight(pat_val?: any, ...more: Arg[]): Pattern
  /**
   * Assumes 'this' is a pattern of functions, and given a function to
   * resolve wholes, applies a given pattern of values to that
   * pattern of functions.
   * @param whole_func {function}
   * @param func {function}
   */
  appWhole(whole_func?: (pat: Pattern, ...args: any[]) => any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Layers the result of the given function(s). Like superimpose, but without the original pattern:
   * Synonyms: apply
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .layer(x=>x.add("0,2"))
   *   .scale('C minor').note()
   */
  apply(...more: Arg[]): Pattern
  applyN(...more: Arg[]): Pattern
  ar(...more: Arg[]): Pattern
  /**
   * Selects indices in in stacked notes.
   * @example
   * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
   * .arp("0 [0,2] 1 [0,2]")
   */
  arp(...more: Arg[]): Pattern
  /**
   * Selects indices in in stacked notes.
   * @example
   * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
   * .arpWith(haps => haps[2])
   */
  arpWith(...more: Arg[]): Pattern
  /**
   * Sets properties in a batch.
   * @param mapping {String | Array} the control names that are set
   * @example
   * "c:.5 a:1 f:.25 e:.8".as("note:clip")
   * @example
   * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
   */
  as(mapping?: any, ...more: Arg[]): Pattern
  asNumber(...more: Arg[]): Pattern
  /**
   * Asymmetrical diode distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  asym(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
   * Synonyms: att
   * @param attack {number | Pattern} time in seconds.
   * @example
   * note("c3 e3 f3 g3").attack("<0 .1 .5>")
   */
  att(attack?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
   * Synonyms: att
   * @param attack {number | Pattern} time in seconds.
   * @example
   * note("c3 e3 f3 g3").attack("<0 .1 .5>")
   */
  attack(attack?: any, ...more: Arg[]): Pattern
  band(...more: Arg[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bandf(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the band-pass q-factor (resonance).
   * Synonyms: bandq
   * @param q {number | Pattern} q factor
   * @example
   * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
   */
  bandq(q?: any, ...more: Arg[]): Pattern
  /**
   * Select the sound bank to use. To be used together with s. The bank name (+ "_") will be prepended to the value of s.
   * @param bank {string | Pattern} the name of the bank
   * @example
   * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
   */
  bank(bank?: any, ...more: Arg[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbexpr
   * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
   * @example
   * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
   */
  bbexpr(byteBeatExpression?: any, ...more: Arg[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbst
   * @param byteBeatStartTime {number | Pattern} in samples (t)
   * @example
   * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
   */
  bbst(byteBeatStartTime?: any, ...more: Arg[]): Pattern
  /**
   * creates a structure pattern from divisions of a cycle
   * especially useful for creating rhythms
   * @example
   * s("bd").beat("0,7,10", 16)
   * @example
   * s("sd").beat("4,12", 16)
   */
  beat(...more: Arg[]): Pattern
  /**
   * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. 0.25 to cut off the first quarter from each sample.
   * @param amount {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
   * s("rave").begin("<0 .25 .5 .75>").fast(2)
   */
  begin(amount?: any, ...more: Arg[]): Pattern
  /**
   * Postgain multiplier prior to sending the signal to the audio bus.
   * Synonyms: bgain
   * @param number {number | Pattern}
   */
  bgain(number?: any, ...more: Arg[]): Pattern
  bind(...more: Arg[]): Pattern
  bindWhole(...more: Arg[]): Pattern
  binshift(...more: Arg[]): Pattern
  /**
   * Splits a pattern into the given number of slices, and plays them according to a pattern of slice numbers.
   * Similar to slice, but slices up patterns rather than sound samples.
   * @param number {number} of slices
   * @param slices {number} to play
   * @example
   * note("0 1 2 3 4 5 6 7".scale('c:mixolydian'))
   * .bite(4, "3 2 1 0")
   * @example
   * sound("bd - bd bd*2, - sd:6 - sd:5 sd:1 - [- sd:2] -, hh [- cp:7]")
   *   .bank("RolandTR909").speed(1.2)
   *   .bite(4, "0 0 [1 2] <3 2> 0 0 [2 1] 3")
   */
  bite(number?: any, slices?: any, ...more: Arg[]): Pattern
  bjork(...more: Arg[]): Pattern
  blshift(...more: Arg[]): Pattern
  /**
   * Modulates with the output from a given bus.
   * Can be called in sequence like pat.bmod(...).bmod(...) to set up multiple modulators
   * Send to an audio bus with otherPat.bus(..).
   * There are two ways to declare which control will be modulated:
   *
   * Explicitly put control in the config (e.g. bmod({ id: 2, c: "lpf" }))
   * If the control parameter is absent, the control immediately before the bmod call will be used
   * (e.g. s("saw").lpf(500).bmod({ id: 2 }) to modulate lpf)
   *
   * Modulators can be referred to by id so that they can be updated later e.g. inside
   * a sometimes. See example below.
   * @param config {Object} Bus modulation configuration.
   * @param config.bus {string | Pattern} Bus to get modulation signal from
   * @param config.control {string | Pattern} Node to modulate. Aliases: c
   * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
   * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
   * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
   * @param config.dc {number | Pattern} DC offset prior to application
   * @param config.fxi {number | Pattern} FX index to target
   * @param id {string | Pattern} ID to use for this modulator
   * @example
   * modulator: s("one").seg(64).gain(slider(0, 0, 1)).bus(1).dry(0)
   * carrier: s("saw").bmod({ b: 1 })
   */
  bmod(config?: any, id?: any, ...more: Arg[]): Pattern
  bor(...more: Arg[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bp(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the bandpass filter envelope.
   * Synonyms: bpa
   * @param attack {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpa("<.5 .25 .1 .01>/4")
   * .bpenv(4)
   */
  bpa(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the bandpass filter envelope.
   * Synonyms: bpa
   * @param attack {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpa("<.5 .25 .1 .01>/4")
   * .bpenv(4)
   */
  bpattack(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the bandpass filter envelope.
   * Synonyms: bpd
   * @param decay {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpd("<.5 .25 .1 0>/4")
   * .bps(0.2)
   * .bpenv(4)
   */
  bpd(decay?: any, ...more: Arg[]): Pattern
  /**
   * DC offset of the LFO for the bandpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  bpdc(dcoffset?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the bandpass filter envelope.
   * Synonyms: bpd
   * @param decay {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpd("<.5 .25 .1 0>/4")
   * .bps(0.2)
   * .bpenv(4)
   */
  bpdecay(decay?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter
   * @param depth {number | Pattern} depth of modulation
   */
  bpdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter, in HZ
   * Synonyms: bpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
   */
  bpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter, in HZ
   * Synonyms: bpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
   */
  bpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  /**
   * Sets the bandpass filter envelope modulation depth.
   * Synonyms: bpe
   * @param modulation {number | Pattern} depth of the bandpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpa(.5)
   * .bpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  bpe(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Sets the bandpass filter envelope modulation depth.
   * Synonyms: bpe
   * @param modulation {number | Pattern} depth of the bandpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpa(.5)
   * .bpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  bpenv(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bpf(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the band-pass q-factor (resonance).
   * Synonyms: bandq
   * @param q {number | Pattern} q factor
   * @example
   * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
   */
  bpq(q?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the bandpass filter envelope.
   * Synonyms: bpr
   * @param release {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .bpf(500)
   * .bpenv(4)
   * .bpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  bpr(release?: any, ...more: Arg[]): Pattern
  /**
   * Rate of the LFO for the bandpass filter
   * @param rate {number | Pattern} rate in hertz
   */
  bprate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the bandpass filter envelope.
   * Synonyms: bpr
   * @param release {number | Pattern} time of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .bpf(500)
   * .bpenv(4)
   * .bpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  bprelease(release?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the bandpass filter envelope.
   * Synonyms: bps
   * @param sustain {number | Pattern} amplitude of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpd(.5)
   * .bps("<0 .25 .5 1>/4")
   * .bpenv(4)
   */
  bps(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Shape of the LFO for the bandpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  bpshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Skew of the LFO for the bandpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  bpskew(skew?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the bandpass filter envelope.
   * Synonyms: bps
   * @param sustain {number | Pattern} amplitude of the bandpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .bpf(500)
   * .bpd(.5)
   * .bps("<0 .25 .5 1>/4")
   * .bpenv(4)
   */
  bpsustain(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the bandpass filter
   * @param rate {number | Pattern} rate in cycles
   */
  bpsync(rate?: any, ...more: Arg[]): Pattern
  /**
   * Returns a new pattern where every other cycle is played once, twice as
   * fast, and offset in time by one quarter of a cycle. Creates a kind of
   * breakbeat feel.
   */
  brak(...more: Arg[]): Pattern
  brshift(...more: Arg[]): Pattern
  /**
   * A bus is a send which can be used for mixing patterns. It combines with..
   * s("bus") to play that bus through another pattern (for, say, applying non-linear
   * effects like distortion to multiple signals)
   * otherPat.bmod(..) (to modulate another pattern with the bus)
   * @param number {number | Pattern}
   */
  bus(number?: any, ...more: Arg[]): Pattern
  /**
   * Postgain multiplier prior to sending the signal to the audio bus.
   * Synonyms: bgain
   * @param number {number | Pattern}
   */
  busgain(number?: any, ...more: Arg[]): Pattern
  bxor(...more: Arg[]): Pattern
  bypass(...more: Arg[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbexpr
   * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
   * @example
   * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
   */
  byteBeatExpression(byteBeatExpression?: any, ...more: Arg[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbst
   * @param byteBeatStartTime {number | Pattern} in samples (t)
   * @example
   * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
   */
  byteBeatStartTime(byteBeatStartTime?: any, ...more: Arg[]): Pattern
  /**
   * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
   * Synonyms: cat
   * @example
   * slowcat("e5", "b4", ["d5", "c5"])
   */
  cat(...more: Arg[]): Pattern
  /**
   * MIDI control number: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control number (0-127)
   */
  ccn(MIDI?: any, ...more: Arg[]): Pattern
  /**
   * MIDI control value: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control value (0-127)
   */
  ccv(MIDI?: any, ...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values set to
   * their mathematical ceiling. E.g. 3.2 replaced with 4, and -4.2
   * replaced with -4.
   * @example
   * note("42 42.1 42.5 43".ceil())
   */
  ceil(...more: Arg[]): Pattern
  /**
   * Allows you to set the output channels on the interface
   * Synonyms: ch
   * @param channels {number | Pattern} pattern the output channels
   * @example
   * note("e a d b g").channels("3:4")
   */
  ch(channels?: any, ...more: Arg[]): Pattern
  /**
   * Choose the channel the pattern is sent to in superdirt
   * @param channel {number | Pattern} channel number
   */
  channel(channel?: any, ...more: Arg[]): Pattern
  /**
   * Allows you to set the output channels on the interface
   * Synonyms: ch
   * @param channels {number | Pattern} pattern the output channels
   * @example
   * note("e a d b g").channels("3:4")
   */
  channels(channels?: any, ...more: Arg[]): Pattern
  /**
   * Distortion via Chebyshev polynomials
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  chebyshev(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  /**
   * Chooses randomly from the given list of elements.
   * @param xs {any} values / patterns to choose from.
   * @example
   * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
   */
  choose(xs?: any, ...more: Arg[]): Pattern
  /**
   * As with choose, but the pattern that this method is called on should be
   * in the range -1 .. 1
   * @param xs {any}
   */
  choose2(xs?: any, ...more: Arg[]): Pattern
  /**
   * Cuts each sample into the given number of parts, allowing you to explore a technique known as 'granular synthesis'.
   * It turns a pattern of samples into a pattern of parts of samples.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes")
   *  .chop(4)
   *  .rev() // reverse order of chops
   *  .loopAt(2) // fit sample into 2 cycles
   */
  chop(...more: Arg[]): Pattern
  /**
   * The chord to voice
   * @param symbols {string | Pattern} chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
   * @example
   * chord("<Am C D F Am E Am E>").voicing()
   */
  chord(symbols?: any, ...more: Arg[]): Pattern
  /**
   * mix control for the chorus effect
   * @param chorus {string | Pattern} mix amount between 0 and 1
   * @example
   * note("d d a# a").s("sawtooth").chorus(.5)
   */
  chorus(chorus?: any, ...more: Arg[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunk(...more: Arg[]): Pattern
  /**
   * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
   * Synonyms: chunkback
   * @example
   * "0 1 2 3".chunkBack(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunkBack(...more: Arg[]): Pattern
  /**
   * Like chunkInto, but moves backwards through the chunks.
   * Synonyms: chunkbackinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkBackInto(...more: Arg[]): Pattern
  /**
   * Like chunk, but the function is applied to a looped subcycle of the source pattern.
   * Synonyms: chunkinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkInto(...more: Arg[]): Pattern
  /**
   * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
   * Synonyms: chunkback
   * @example
   * "0 1 2 3".chunkBack(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunkback(...more: Arg[]): Pattern
  /**
   * Like chunkInto, but moves backwards through the chunks.
   * Synonyms: chunkbackinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkbackinto(...more: Arg[]): Pattern
  /**
   * Like chunk, but the function is applied to a looped subcycle of the source pattern.
   * Synonyms: chunkinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkinto(...more: Arg[]): Pattern
  /**
   * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
   * Synonyms: legato
   * @param factor {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").clip("<.5 1 2>")
   */
  clip(factor?: any, ...more: Arg[]): Pattern
  /**
   * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
   * @param factor {number | Pattern} 1 for original 2 for half, 3 for a third and so on.
   * @example
   * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
   */
  coarse(factor?: any, ...more: Arg[]): Pattern
  collect(...more: Arg[]): Pattern
  /**
   * Sets the color of the hap in visualizations like pianoroll or highlighting.
   * Synonyms: colour
   * @param color {string} Hexadecimal or CSS color name
   */
  color(color?: any, ...more: Arg[]): Pattern
  comb(...more: Arg[]): Pattern
  /**
   * Compress each cycle into the given timespan, leaving a gap
   * @example
   * cat(
   *   s("bd sd").compress(.25,.75),
   *   s("~ bd sd ~")
   * )
   */
  compress(...more: Arg[]): Pattern
  compressSpan(...more: Arg[]): Pattern
  /**
   * Dynamics Compressor. The params are compressor("threshold:ratio:knee:attack:release")
   * More info here
   * @example
   * s("bd sd [~ bd] sd,hh*8")
   * .compressor("-20:20:10:.002:.02")
   */
  compressor(...more: Arg[]): Pattern
  compressorAttack(...more: Arg[]): Pattern
  compressorKnee(...more: Arg[]): Pattern
  compressorRatio(...more: Arg[]): Pattern
  compressorRelease(...more: Arg[]): Pattern
  compressspan(...more: Arg[]): Pattern
  /**
   * Experimental
   * Contracts the step size of the pattern by the given factor. See also expand.
   * @example
   * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
   */
  contract(...more: Arg[]): Pattern
  /**
   * MIDI control: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control number (0-127)
   * @param MIDI {number | Pattern} controller value (0-127)
   */
  control(MIDI?: any, MIDI_?: any, ...more: Arg[]): Pattern
  /**
   * Plays the pattern at the given cycles per minute.
   * @example
   * s("<bd sd>,hh*2").cpm(90) // = 90 bpm
   */
  cpm(...more: Arg[]): Pattern
  cps(...more: Arg[]): Pattern
  /**
   * Bit crusher effect.
   * @param depth {number | Pattern} between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
   * @example
   * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
   */
  crush(depth?: any, ...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the low-pass filter.
   * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
   * Synonyms: cutoff, ctf, lp
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
   */
  ctf(frequency?: any, ...more: Arg[]): Pattern
  ctlNum(...more: Arg[]): Pattern
  ctranspose(...more: Arg[]): Pattern
  /**
   * Cubic polynomial distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  cubic(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  curve(...more: Arg[]): Pattern
  /**
   * In the style of classic drum-machines, cut will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
   * @param group {number | Pattern} cut group number
   * @example
   * s("[oh hh]*4").cut(1)
   */
  cut(group?: any, ...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the low-pass filter.
   * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
   * Synonyms: cutoff, ctf, lp
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
   */
  cutoff(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
   * Note that the decay is only audible if the sustain value is lower than 1.
   * Synonyms: dec
   * @param time {number | Pattern} decay time in seconds
   * @example
   * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
   */
  dec(time?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
   * Note that the decay is only audible if the sustain value is lower than 1.
   * Synonyms: dec
   * @param time {number | Pattern} decay time in seconds
   * @example
   * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
   */
  decay(time?: any, ...more: Arg[]): Pattern
  /**
   * Combines adjacent haps with the same value and whole.  Only
   * intended for use in tests.
   */
  defragmentHaps(...more: Arg[]): Pattern
  /**
   * Randomly removes 50% of events from the pattern. Shorthand for .degradeBy(0.5)
   * @example
   * s("hh*8").degrade()
   * @example
   * s("[hh?]*8")
   */
  degrade(...more: Arg[]): Pattern
  /**
   * Randomly removes events from the pattern by a given amount.
   * 0 = 0% chance of removal
   * 1 = 100% chance of removal
   * @param amount {number} a number between 0 and 1
   * @example
   * s("hh*8").degradeBy(0.2)
   * @example
   * s("[hh?0.2]*8")
   * @example
   * //beat generator
   * s("bd").segment(16).degradeBy(.5).ribbon(16,1)
   */
  degradeBy(amount?: any, ...more: Arg[]): Pattern
  degradeByWith(...more: Arg[]): Pattern
  degree(...more: Arg[]): Pattern
  /**
   * Sets the level of the delay signal.
   * When using mininotation, you can also optionally add the 'delaytime' and 'delayfeedback' parameter,
   * separated by ':'.
   * @param level {number | Pattern} between 0 and 1
   * @example
   * s("bd bd").delay("<0 .25 .5 1>")
   * @example
   * s("bd bd").delay("0.65:0.25:0.9 0.65:0.125:0.7")
   */
  delay(level?: any, ...more: Arg[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  delayfb(feedback?: any, ...more: Arg[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  delayfeedback(feedback?: any, ...more: Arg[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  delayspeed(delayspeed?: any, ...more: Arg[]): Pattern
  /**
   * Sets the time of the delay effect in cycles.
   * Synonyms: delayt, dt
   * @param cycles {number | Pattern} delay length in cycles
   * @example
   * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
   */
  delaysync(cycles?: any, ...more: Arg[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  delayt(delayspeed?: any, ...more: Arg[]): Pattern
  delaytime(...more: Arg[]): Pattern
  deltaSlide(...more: Arg[]): Pattern
  /**
   * Noise crackle density
   * @param density {number | Pattern} between 0 and x
   * @example
   * s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(4))
   */
  density(density?: any, ...more: Arg[]): Pattern
  /**
   * Set detune for stacked voices of supported oscillators
   * Synonyms: det
   * @param amount {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
   */
  det(amount?: any, ...more: Arg[]): Pattern
  /**
   * Set detune for stacked voices of supported oscillators
   * Synonyms: det
   * @param amount {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
   */
  detune(amount?: any, ...more: Arg[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  dfb(feedback?: any, ...more: Arg[]): Pattern
  dict(...more: Arg[]): Pattern
  /**
   * Which dictionary to use for the voicings. This falls back to the default dictionary if not provided
   * @param dictionaryName {string} which dictionary (having been defined with addVoicings) to use
   * @example
   * addVoicings('house', {
   * '': ['7 12 16', '0 7 16', '4 7 12'],
   * 'm': ['0 3 7']
   * })
   * chord("<Am C D F Am E Am E>")
   * .dict('house').anchor(66)
   * .voicing().room(.5)
   */
  dictionary(dictionaryName?: any, ...more: Arg[]): Pattern
  /**
   * Diode-emulating distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  diode(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with 'continuous' haps (those without 'whole'
   * timespans) removed from query results.
   */
  discreteOnly(...more: Arg[]): Pattern
  /**
   * Wave shaping distortion. CAUTION: it can get loud.
   * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
   * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
   * Synonyms: dist
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   * @param type {number | string | Pattern} type of distortion to apply
   * @example
   * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
   * @example
   * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
   * @example
   * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
   */
  dist(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
  /**
   * Wave shaping distortion. CAUTION: it can get loud.
   * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
   * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
   * Synonyms: dist
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   * @param type {number | string | Pattern} type of distortion to apply
   * @example
   * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
   * @example
   * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
   * @example
   * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
   */
  distort(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
  /**
   * Type of waveshaping distortion to apply.
   * Synonyms: disttype
   * @param type {number | string | Pattern} type of distortion to apply
   * @example
   * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
   * @example
   * s("sine").note("F1*2").release(1)
   *   .penv(24).pdecay(0.05)
   *   .distort(rand.range(1, 8))
   *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
   */
  distorttype(type?: any, ...more: Arg[]): Pattern
  /**
   * Postgain for waveshaping distortion.
   * Synonyms: distvol
   * @param volume {number | Pattern} linear postgain of the distortion
   * @example
   * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
   */
  distortvol(volume?: any, ...more: Arg[]): Pattern
  /**
   * Type of waveshaping distortion to apply.
   * Synonyms: disttype
   * @param type {number | string | Pattern} type of distortion to apply
   * @example
   * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
   * @example
   * s("sine").note("F1*2").release(1)
   *   .penv(24).pdecay(0.05)
   *   .distort(rand.range(1, 8))
   *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
   */
  disttype(type?: any, ...more: Arg[]): Pattern
  /**
   * Postgain for waveshaping distortion.
   * Synonyms: distvol
   * @param volume {number | Pattern} linear postgain of the distortion
   * @example
   * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
   */
  distvol(volume?: any, ...more: Arg[]): Pattern
  /**
   * Divides each number by the given factor.
   */
  div(...more: Arg[]): Pattern
  /**
   * DJ filter, below 0.5 is low pass filter, above is high pass filter.
   * @param cutoff {number | Pattern} below 0.5 is low pass filter, above is high pass filter
   * @example
   * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
   */
  djf(cutoff?: any, ...more: Arg[]): Pattern
  dough(...more: Arg[]): Pattern
  draw(...more: Arg[]): Pattern
  /**
   * Intended for a debugging, drawLine renders the pattern as a string, where each character represents the same time span.
   * Should only be used with single characters as values, otherwise the character slots will be messed up.
   * Character legend:
   *
   * "|" cycle separator
   * "-" hold previous value
   * "." silence
   * @param pattern {Pattern} the pattern to use
   * @param chars {number} max number of characters (approximately)
   * @example
   * const line = drawLine("0 [1 2 3]", 10); // |0--123|0--123
   * console.log(line);
   * silence;
   */
  drawLine(pattern?: any, chars?: any, ...more: Arg[]): Pattern
  /**
   * Filter overdrive for supported filter types
   * @param amount {number | Pattern}
   * @example
   * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
   */
  drive(amount?: any, ...more: Arg[]): Pattern
  /**
   * Experimental
   * Drops the given number of steps from a pattern.
   * A positive number will drop steps from the start of a pattern, and a negative number from the end.
   * @example
   * "tha dhi thom nam".drop("1").sound().bank("mridangam")
   * @example
   * "tha dhi thom nam".drop("-1").sound().bank("mridangam")
   * @example
   * "tha dhi thom nam".drop("0 1 2 3").sound().bank("mridangam")
   * @example
   * "tha dhi thom nam".drop("0 -1 -2 -3").sound().bank("mridangam")
   */
  drop(...more: Arg[]): Pattern
  /**
   * Set dryness of reverb. See room and size for more information about reverb.
   * @param dry {number | Pattern} 0 = wet, 1 = dry
   * @example
   * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
   */
  dry(dry?: any, ...more: Arg[]): Pattern
  ds(...more: Arg[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  dt(delayspeed?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of an orbit to create a "sidechain" like effect.
   * Can be applied to multiple orbits with the ':' mininotation, e.g. duckorbit("2:3")
   * Synonyms: duck
   * @param orbit {number | Pattern} target orbit
   * @example
   * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
   * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
   * @example
   * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
   * $: s("hh*16").orbit(3)
   * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
   */
  duck(orbit?: any, ...more: Arg[]): Pattern
  /**
   * The time required for the ducked signal(s) to return to their normal volume.
   * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
   * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
   * Synonyms: duckatt
   * @param time {number | Pattern} The attack time in seconds
   * @example
   * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
   * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
   * @example
   * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
   * lessduck: s("hh*16").orbit(5)
   * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
   */
  duckatt(time?: any, ...more: Arg[]): Pattern
  /**
   * The time required for the ducked signal(s) to return to their normal volume.
   * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
   * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
   * Synonyms: duckatt
   * @param time {number | Pattern} The attack time in seconds
   * @example
   * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
   * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
   * @example
   * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
   * lessduck: s("hh*16").orbit(5)
   * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
   */
  duckattack(time?: any, ...more: Arg[]): Pattern
  /**
   * The amount of ducking applied to target orbit
   * Can vary across orbits with the ':' mininotation, e.g. duckdepth("0.3:0.1").
   * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
   * @param depth {number | Pattern} depth of modulation from 0 to 1
   * @example
   * stack( n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2), s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth("<1 .9 .6 0>"))
   * @example
   * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
   * $: s("hh*16").orbit(3)
   * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth("1:0.5")
   */
  duckdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * The time required for the ducked signal(s) to reach their lowest volume.
   * Can be used to prevent clicking or for creative rhythmic effects.
   * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
   * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
   * Synonyms: duckons
   * @param time {number | Pattern} The onset time in seconds
   * @example
   * // Clicks
   * sound: freq("63.2388").s("sine").orbit(2).gain(4)
   * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
   * @example
   * // No clicks
   * sound: freq("63.2388").s("sine").orbit(2).gain(4)
   * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
   * @example
   * // Rhythmic
   * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
   * hhat: s("hh*16").orbit(7)
   * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
   */
  duckons(time?: any, ...more: Arg[]): Pattern
  /**
   * The time required for the ducked signal(s) to reach their lowest volume.
   * Can be used to prevent clicking or for creative rhythmic effects.
   * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
   * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
   * Synonyms: duckons
   * @param time {number | Pattern} The onset time in seconds
   * @example
   * // Clicks
   * sound: freq("63.2388").s("sine").orbit(2).gain(4)
   * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
   * @example
   * // No clicks
   * sound: freq("63.2388").s("sine").orbit(2).gain(4)
   * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
   * @example
   * // Rhythmic
   * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
   * hhat: s("hh*16").orbit(7)
   * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
   */
  duckonset(time?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of an orbit to create a "sidechain" like effect.
   * Can be applied to multiple orbits with the ':' mininotation, e.g. duckorbit("2:3")
   * Synonyms: duck
   * @param orbit {number | Pattern} target orbit
   * @example
   * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
   * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
   * @example
   * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
   * $: s("hh*16").orbit(3)
   * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
   */
  duckorbit(orbit?: any, ...more: Arg[]): Pattern
  /**
   * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
   * Synonyms: dur
   * @param seconds {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").dur("<.5 1 2>")
   */
  dur(seconds?: any, ...more: Arg[]): Pattern
  /**
   * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
   * Synonyms: dur
   * @param seconds {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").dur("<.5 1 2>")
   */
  duration(seconds?: any, ...more: Arg[]): Pattern
  /**
   * Nudge a pattern to start earlier in time. Equivalent of Tidal's <~ operator
   * @param cycles {number | Pattern} number of cycles to nudge left
   * @example
   * "bd ~".stack("hh ~".early(.1)).s()
   */
  early(cycles?: any, ...more: Arg[]): Pattern
  /**
   * Superimpose and offset multiple times, gradually decreasing the velocity
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param feedback {number} velocity multiplicator for each iteration
   * @example
   * s("bd sd").echo(3, 1/6, .8)
   */
  echo(times?: any, time?: any, feedback?: any, ...more: Arg[]): Pattern
  /**
   * Superimpose and offset multiple times, applying the given function each time.
   * Synonyms: echowith, stutWith, stutwith
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .echoWith(4, 1/8, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  echoWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Superimpose and offset multiple times, applying the given function each time.
   * Synonyms: echowith, stutWith, stutwith
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .echoWith(4, 1/8, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  echowith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * A 'euclid' variant with an additional parameter that morphs the resulting
   * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
   * sound("bd").euclidish(3,8,0) would be the same as
   * sound("bd").euclid(3,8), and sound("bd").euclidish(3,8,1) would be the
   * same as sound("bd bd bd"). sound("bd").euclidish(3,8,0.5) would have a
   * groove somewhere between.
   * Inspired by the work of Malcom Braff.
   * Synonyms: eish
   * @param pulses {number} the number of onsets
   * @param steps {number} the number of steps to fill
   * @param groove {number} exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
   * @example
   * sound("hh").euclidish(7,12,sine.slow(8))
   * .pan(sine.slow(8))
   */
  eish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
  /**
   * The same as .begin, but cuts off the end off each sample.
   * @param length {number | Pattern} 1 = whole sample, .5 = half sample, .25 = quarter sample etc..
   * @example
   * s("bd*2,oh*4").end("<.1 .2 .5 1>").fast(2)
   */
  end(length?: any, ...more: Arg[]): Pattern
  enhance(...more: Arg[]): Pattern
  /**
   * Configures an envelope. Can be called in sequence like pat.env(...).env(...) to set up multiple envelopes
   * There are two ways to declare which control will be modulated:
   *
   * Explicitly put control in the config (e.g. env({ c: "lpf" }))
   * If the control parameter is absent, the control immediately before the env call will be used
   * (e.g. s("saw").lpf(500).env({ a: 1 }) to modulate lpf)
   *
   * Modulators can be referred to by id so that they can be updated later e.g. inside
   * a sometimes. See example below.
   * @param config {Object} Envelope configuration.
   * @param config.control {string | Pattern} Node to modulate. Aliases: c
   * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
   * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
   * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
   * @param config.attack {number | Pattern} Time to reach depth. Aliases: att, a
   * @param config.decay {number | Pattern} Time to reach sustain. Aliases: dec, d
   * @param config.sustain {number | Pattern} Sustain depth. Aliases: sus, s
   * @param config.release {number | Pattern} Time to return to nominal value. Aliases: rel, r
   * @param config.acurve {number | Pattern} Snappiness of attack curve (-1 = relaxed, 1 = snappy). Aliases: ac
   * @param config.dcurve {number | Pattern} Snappiness of decay curve (-1 = relaxed, 1 = snappy). Aliases: dc
   * @param config.rcurve {number | Pattern} Snappiness of release curve (-1 = relaxed, 1 = snappy). Aliases: rc
   * @param config.fxi {number | Pattern} FX index to target
   * @param id {string | Pattern} ID to use for this modulator
   * @example
   * s("saw").note("F1").lpf(500).env({ a: 1 })
   * @example
   * s("saw").env({ d: 1 }).note("F1")
   *   .lpq(4).lpf(50)
   *   .env({ a: 0.1, d: 1, ac: 0.8, dc: 0.3, depth: 50 })
   * @example
   * s("saw").lpf(500).diode(0.3)
   *   .env({ c: "lpf", a: 0.5, d: 0.5 })
   * @example
   * s("pulse").lpf(500).env({ a: 1 })
   *   .env({ c: "s", a: 1 })
   *   .diode(0.3)
   *   .sometimes(x => x.env({ a: "0.5" }, 1)) // envelope #1 (0-indexed)
   * @example
   * s("pulse").lpf(500).env({ a: 1 }, 'lpf_mod')
   *   .env({ c: "s", a: 1 })
   *   .diode(0.3)
   *   .sometimes(x => x.env({ a: "0.5" }, 'lpf_mod'))
   */
  env(config?: any, id?: any, ...more: Arg[]): Pattern
  eq(...more: Arg[]): Pattern
  eqt(...more: Arg[]): Pattern
  /**
   * Changes the structure of the pattern to form an Euclidean rhythm.
   * Euclidean rhythms are rhythms obtained using the greatest common
   * divisor of two numbers.  They were described in 2004 by Godfried
   * Toussaint, a Canadian computer scientist.  Euclidean rhythms are
   * really useful for computer/algorithmic music because they can
   * describe a large number of rhythms with a couple of numbers.
   * @param pulses {number} the number of onsets/beats
   * @param steps {number} the number of steps to fill
   * @example
   * // The Cuban tresillo pattern.
   * note("c3").euclid(3,8)
   */
  euclid(pulses?: any, steps?: any, ...more: Arg[]): Pattern
  /**
   * Similar to euclid, but each pulse is held until the next pulse,
   * so there will be no gaps.
   * @param pulses {number} the number of onsets/beats
   * @param steps {number} the number of steps to fill
   * @param rotation offset in steps
   * @param pat
   * @example
   * note("c3").euclidLegato(3,8)
   */
  euclidLegato(pulses?: any, steps?: any, rotation?: any, pat?: any, ...more: Arg[]): Pattern
  /**
   * Similar to euclid, but each pulse is held until the next pulse,
   * so there will be no gaps, and has an additional parameter for 'rotating'
   * the resulting sequence
   * @param pulses {number} the number of onsets/beats
   * @param steps {number} the number of steps to fill
   * @param rotation {number} offset in steps
   * @example
   * note("c3").euclidLegatoRot(3,5,2)
   */
  euclidLegatoRot(pulses?: any, steps?: any, rotation?: any, ...more: Arg[]): Pattern
  /**
   * Like euclid, but has an additional parameter for 'rotating' the resulting sequence.
   * @param pulses {number} the number of onsets/beats
   * @param steps {number} the number of steps to fill
   * @param rotation {number} offset in steps
   * @example
   * // A Samba rhythm necklace from Brazil
   * note("c3").euclidRot(3,16,14)
   */
  euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: Arg[]): Pattern
  /**
   * A 'euclid' variant with an additional parameter that morphs the resulting
   * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
   * sound("bd").euclidish(3,8,0) would be the same as
   * sound("bd").euclid(3,8), and sound("bd").euclidish(3,8,1) would be the
   * same as sound("bd bd bd"). sound("bd").euclidish(3,8,0.5) would have a
   * groove somewhere between.
   * Inspired by the work of Malcom Braff.
   * Synonyms: eish
   * @param pulses {number} the number of onsets
   * @param steps {number} the number of steps to fill
   * @param groove {number} exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
   * @example
   * sound("hh").euclidish(7,12,sine.slow(8))
   * .pan(sine.slow(8))
   */
  euclidish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
  euclidrot(...more: Arg[]): Pattern
  /**
   * An alias for firstOf
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").every(4, x=>x.rev())
   */
  every(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Experimental
   * Expands the step size of the pattern by the given factor.
   * @example
   * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
   */
  expand(...more: Arg[]): Pattern
  expression(...more: Arg[]): Pattern
  /**
   * Experimental
   * extend is similar to fast in that it increases its density, but it also increases the step count
   * accordingly. So stepcat("a b".extend(2), "c d") would be the same as "a b a b c d", whereas
   * stepcat("a b".fast(2), "c d") would be the same as "[a b] [a b] c d".
   * @example
   * stepcat(
   *   sound("bd bd - cp").extend(2),
   *   sound("bd - sd -")
   * ).pace(8)
   */
  extend(...more: Arg[]): Pattern
  fadeInTime(...more: Arg[]): Pattern
  fadeOutTime(...more: Arg[]): Pattern
  fadeTime(...more: Arg[]): Pattern
  /**
   * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
   * @param center {number | Pattern} 0 to 1
   * @example
   * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
   * .lpenv(8).fanchor("<0 .5 1>")
   */
  fanchor(center?: any, ...more: Arg[]): Pattern
  /**
   * Speed up a pattern by the given factor. Used by "*" in mini notation.
   * Synonyms: density
   * @param factor {number | Pattern} speed up factor
   * @example
   * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
   */
  fast(factor?: any, ...more: Arg[]): Pattern
  /**
   * Like chunk, but the cycles of the source pattern aren't repeated
   * for each set of chunks.
   * Synonyms: fastchunk
   * @example
   * "<0 8> 1 2 3 4 5 6 7"
   * .scale("C2:major").note()
   * .fastChunk(4, x => x.color('red')).slow(2)
   */
  fastChunk(...more: Arg[]): Pattern
  /**
   * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
   * Synonyms: fastgap
   * @example
   * s("bd sd").fastGap(2)
   */
  fastGap(...more: Arg[]): Pattern
  /**
   * Like cat, but the items are crammed into one cycle.
   * Synonyms: sequence, fastcat
   * @example
   * seq("e5", "b4", ["d5", "c5"]).note()
   * // "e5 b4 [d5 c5]".note()
   * @example
   * // As a chained function:
   * s("hh*4").seq(
   *   note("c4(5,8)")
   * )
   */
  fastcat(...more: Arg[]): Pattern
  /**
   * Like chunk, but the cycles of the source pattern aren't repeated
   * for each set of chunks.
   * Synonyms: fastchunk
   * @example
   * "<0 8> 1 2 3 4 5 6 7"
   * .scale("C2:major").note()
   * .fastChunk(4, x => x.color('red')).slow(2)
   */
  fastchunk(...more: Arg[]): Pattern
  /**
   * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
   * Synonyms: fastgap
   * @example
   * s("bd sd").fastGap(2)
   */
  fastgap(...more: Arg[]): Pattern
  fft(...more: Arg[]): Pattern
  fill(...more: Arg[]): Pattern
  /**
   * Filters haps using the given function
   * @param test {function} function to test Hap
   * @example
   * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
   */
  filter(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Returns a new Pattern, which only returns haps that meet the given test.
   * @param hap_test {function} a function which returns false for haps to be removed from the pattern
   * @example
   * s("bd*8").velocity(rand).filterHaps((h) => (h.whole.begin % 1) < h.value.velocity)
   */
  filterHaps(hap_test?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * As with filterHaps, but the function is applied to values
   * inside haps.
   * @param value_test {function}
   * @example
   * const drums = s("bd sd bd sd")
   * kick: drums.filterValues((v) => v.s === 'bd').duck(2)
   * snare: drums.filterValues((v) => v.s === 'sd')
   * bass: s("saw!4").note("G#1").lpf(80).lpenv(4).orbit(2)
   */
  filterValues(value_test?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Filters haps by their begin time
   * @param test {function} function to test Hap.whole.begin
   * @example
   * oneCycle: s("bd*4").filterWhen((t) => t < 1)
   */
  filterWhen(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Queries the pattern for the first cycle, returning Haps. Mainly of use when
   * debugging a pattern.
   * @param with_context {Boolean} set to true, otherwise the context field
will be stripped from the resulting haps.
   */
  firstCycle(with_context?: any, ...more: Arg[]): Pattern
  /**
   * Applies the given function every n cycles, starting from the first cycle.
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").firstOf(4, x=>x.rev())
   */
  firstOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
   * Similar to loopAt.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes/2").fit()
   */
  fit(...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values set to
   * their mathematical floor. E.g. 3.7 replaced with to 3, and -4.2
   * replaced with -5.
   * @example
   * note("42 42.1 42.5 43".floor())
   */
  floor(...more: Arg[]): Pattern
  /**
   * Sets the Frequency Modulation of the synth.
   * Controls the modulation index, which defines the brightness of the sound.
   * A number may be added afterwards to control the modulation index of
   * any of the 8 individual FMs (e.g. fm3). Also, FMs may be routed into
   * each other with matrix commands like fm13, which would send fm1 back into
   * fm3
   * Synonyms: fm
   * @param brightness {number | Pattern} modulation index
   * @example
   * note("c e g b g e")
   * .fm("<0 1 2 8 32>")
   * ._scope()
   * @example
   * s("sine").note("F1").seg(8)
   *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
   *  .fmh(1.06).fmh2(10).fmh3(0.1)
   */
  fm(brightness?: any, ...more: Arg[]): Pattern
  fm00(...more: Arg[]): Pattern
  fm01(...more: Arg[]): Pattern
  fm02(...more: Arg[]): Pattern
  fm03(...more: Arg[]): Pattern
  fm04(...more: Arg[]): Pattern
  fm05(...more: Arg[]): Pattern
  fm06(...more: Arg[]): Pattern
  fm07(...more: Arg[]): Pattern
  fm08(...more: Arg[]): Pattern
  fm1(...more: Arg[]): Pattern
  fm10(...more: Arg[]): Pattern
  fm11(...more: Arg[]): Pattern
  fm12(...more: Arg[]): Pattern
  fm13(...more: Arg[]): Pattern
  fm14(...more: Arg[]): Pattern
  fm15(...more: Arg[]): Pattern
  fm16(...more: Arg[]): Pattern
  fm17(...more: Arg[]): Pattern
  fm18(...more: Arg[]): Pattern
  fm2(...more: Arg[]): Pattern
  fm20(...more: Arg[]): Pattern
  fm21(...more: Arg[]): Pattern
  fm22(...more: Arg[]): Pattern
  fm23(...more: Arg[]): Pattern
  fm24(...more: Arg[]): Pattern
  fm25(...more: Arg[]): Pattern
  fm26(...more: Arg[]): Pattern
  fm27(...more: Arg[]): Pattern
  fm28(...more: Arg[]): Pattern
  fm3(...more: Arg[]): Pattern
  fm30(...more: Arg[]): Pattern
  fm31(...more: Arg[]): Pattern
  fm32(...more: Arg[]): Pattern
  fm33(...more: Arg[]): Pattern
  fm34(...more: Arg[]): Pattern
  fm35(...more: Arg[]): Pattern
  fm36(...more: Arg[]): Pattern
  fm37(...more: Arg[]): Pattern
  fm38(...more: Arg[]): Pattern
  fm4(...more: Arg[]): Pattern
  fm40(...more: Arg[]): Pattern
  fm41(...more: Arg[]): Pattern
  fm42(...more: Arg[]): Pattern
  fm43(...more: Arg[]): Pattern
  fm44(...more: Arg[]): Pattern
  fm45(...more: Arg[]): Pattern
  fm46(...more: Arg[]): Pattern
  fm47(...more: Arg[]): Pattern
  fm48(...more: Arg[]): Pattern
  fm5(...more: Arg[]): Pattern
  fm50(...more: Arg[]): Pattern
  fm51(...more: Arg[]): Pattern
  fm52(...more: Arg[]): Pattern
  fm53(...more: Arg[]): Pattern
  fm54(...more: Arg[]): Pattern
  fm55(...more: Arg[]): Pattern
  fm56(...more: Arg[]): Pattern
  fm57(...more: Arg[]): Pattern
  fm58(...more: Arg[]): Pattern
  fm6(...more: Arg[]): Pattern
  fm60(...more: Arg[]): Pattern
  fm61(...more: Arg[]): Pattern
  fm62(...more: Arg[]): Pattern
  fm63(...more: Arg[]): Pattern
  fm64(...more: Arg[]): Pattern
  fm65(...more: Arg[]): Pattern
  fm66(...more: Arg[]): Pattern
  fm67(...more: Arg[]): Pattern
  fm68(...more: Arg[]): Pattern
  fm7(...more: Arg[]): Pattern
  fm70(...more: Arg[]): Pattern
  fm71(...more: Arg[]): Pattern
  fm72(...more: Arg[]): Pattern
  fm73(...more: Arg[]): Pattern
  fm74(...more: Arg[]): Pattern
  fm75(...more: Arg[]): Pattern
  fm76(...more: Arg[]): Pattern
  fm77(...more: Arg[]): Pattern
  fm78(...more: Arg[]): Pattern
  fm8(...more: Arg[]): Pattern
  fm80(...more: Arg[]): Pattern
  fm81(...more: Arg[]): Pattern
  fm82(...more: Arg[]): Pattern
  fm83(...more: Arg[]): Pattern
  fm84(...more: Arg[]): Pattern
  fm85(...more: Arg[]): Pattern
  fm86(...more: Arg[]): Pattern
  fm87(...more: Arg[]): Pattern
  fm88(...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with the function applied to the value of
   * each hap. It has the alias fmap.
   * Synonyms: fmap
   * @param func {function} to to apply to the value
   * @example
   * "0 1 2".withValue(v => v + 10).log()
   */
  fmap(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Attack time for the FM envelope: time it takes to reach maximum modulation
   * A number may be added afterwards to control the attack of the envelope of
   * any of the 8 individual FMs (e.g. fmatt5)
   * Synonyms: fmatt
   * @param time {number | Pattern} attack time
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmattack("<0 .05 .1 .2>")
   * ._scope()
   */
  fmatt(time?: any, ...more: Arg[]): Pattern
  fmatt1(...more: Arg[]): Pattern
  fmatt2(...more: Arg[]): Pattern
  fmatt3(...more: Arg[]): Pattern
  fmatt4(...more: Arg[]): Pattern
  fmatt5(...more: Arg[]): Pattern
  fmatt6(...more: Arg[]): Pattern
  fmatt7(...more: Arg[]): Pattern
  fmatt8(...more: Arg[]): Pattern
  /**
   * Attack time for the FM envelope: time it takes to reach maximum modulation
   * A number may be added afterwards to control the attack of the envelope of
   * any of the 8 individual FMs (e.g. fmatt5)
   * Synonyms: fmatt
   * @param time {number | Pattern} attack time
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmattack("<0 .05 .1 .2>")
   * ._scope()
   */
  fmattack(time?: any, ...more: Arg[]): Pattern
  fmattack1(...more: Arg[]): Pattern
  fmattack2(...more: Arg[]): Pattern
  fmattack3(...more: Arg[]): Pattern
  fmattack4(...more: Arg[]): Pattern
  fmattack5(...more: Arg[]): Pattern
  fmattack6(...more: Arg[]): Pattern
  fmattack7(...more: Arg[]): Pattern
  fmattack8(...more: Arg[]): Pattern
  /**
   * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
   * A number may be added afterwards to control the decay of the envelope of
   * any of the 8 individual FMs (e.g. fmdec6)
   * Synonyms: fmdec
   * @param time {number | Pattern} decay time
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmdecay("<.01 .05 .1 .2>")
   * .fmsustain(.4)
   * ._scope()
   */
  fmdec(time?: any, ...more: Arg[]): Pattern
  fmdec1(...more: Arg[]): Pattern
  fmdec2(...more: Arg[]): Pattern
  fmdec3(...more: Arg[]): Pattern
  fmdec4(...more: Arg[]): Pattern
  fmdec5(...more: Arg[]): Pattern
  fmdec6(...more: Arg[]): Pattern
  fmdec7(...more: Arg[]): Pattern
  fmdec8(...more: Arg[]): Pattern
  /**
   * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
   * A number may be added afterwards to control the decay of the envelope of
   * any of the 8 individual FMs (e.g. fmdec6)
   * Synonyms: fmdec
   * @param time {number | Pattern} decay time
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmdecay("<.01 .05 .1 .2>")
   * .fmsustain(.4)
   * ._scope()
   */
  fmdecay(time?: any, ...more: Arg[]): Pattern
  fmdecay1(...more: Arg[]): Pattern
  fmdecay2(...more: Arg[]): Pattern
  fmdecay3(...more: Arg[]): Pattern
  fmdecay4(...more: Arg[]): Pattern
  fmdecay5(...more: Arg[]): Pattern
  fmdecay6(...more: Arg[]): Pattern
  fmdecay7(...more: Arg[]): Pattern
  fmdecay8(...more: Arg[]): Pattern
  /**
   * Ramp type of fm envelope. Exp might be a bit broken..
   * A number may be added afterwards to control the envelope of
   * any of the 8 individual FMs (e.g. fmenv4)
   * @param type {number | Pattern} lin | exp
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmdecay(.2)
   * .fmsustain(0)
   * .fmenv("<exp lin>")
   * ._scope()
   */
  fmenv(type?: any, ...more: Arg[]): Pattern
  fmenv1(...more: Arg[]): Pattern
  fmenv2(...more: Arg[]): Pattern
  fmenv3(...more: Arg[]): Pattern
  fmenv4(...more: Arg[]): Pattern
  fmenv5(...more: Arg[]): Pattern
  fmenv6(...more: Arg[]): Pattern
  fmenv7(...more: Arg[]): Pattern
  fmenv8(...more: Arg[]): Pattern
  /**
   * Sets the Frequency Modulation Harmonicity Ratio.
   * Controls the timbre of the sound.
   * Whole numbers and simple ratios sound more natural,
   * while decimal numbers and complex ratios sound metallic.
   * A number may be added afterwards to control the harmonicity of
   * any of the 8 individual FMs (e.g. fmh2)
   * @param harmonicity {number | Pattern}
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmh("<1 2 1.5 1.61>")
   * ._scope()
   */
  fmh(harmonicity?: any, ...more: Arg[]): Pattern
  fmh1(...more: Arg[]): Pattern
  fmh2(...more: Arg[]): Pattern
  fmh3(...more: Arg[]): Pattern
  fmh4(...more: Arg[]): Pattern
  fmh5(...more: Arg[]): Pattern
  fmh6(...more: Arg[]): Pattern
  fmh7(...more: Arg[]): Pattern
  fmh8(...more: Arg[]): Pattern
  /**
   * Sets the Frequency Modulation of the synth.
   * Controls the modulation index, which defines the brightness of the sound.
   * A number may be added afterwards to control the modulation index of
   * any of the 8 individual FMs (e.g. fm3). Also, FMs may be routed into
   * each other with matrix commands like fm13, which would send fm1 back into
   * fm3
   * Synonyms: fm
   * @param brightness {number | Pattern} modulation index
   * @example
   * note("c e g b g e")
   * .fm("<0 1 2 8 32>")
   * ._scope()
   * @example
   * s("sine").note("F1").seg(8)
   *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
   *  .fmh(1.06).fmh2(10).fmh3(0.1)
   */
  fmi(brightness?: any, ...more: Arg[]): Pattern
  fmi00(...more: Arg[]): Pattern
  fmi01(...more: Arg[]): Pattern
  fmi02(...more: Arg[]): Pattern
  fmi03(...more: Arg[]): Pattern
  fmi04(...more: Arg[]): Pattern
  fmi05(...more: Arg[]): Pattern
  fmi06(...more: Arg[]): Pattern
  fmi07(...more: Arg[]): Pattern
  fmi08(...more: Arg[]): Pattern
  fmi1(...more: Arg[]): Pattern
  fmi10(...more: Arg[]): Pattern
  fmi11(...more: Arg[]): Pattern
  fmi12(...more: Arg[]): Pattern
  fmi13(...more: Arg[]): Pattern
  fmi14(...more: Arg[]): Pattern
  fmi15(...more: Arg[]): Pattern
  fmi16(...more: Arg[]): Pattern
  fmi17(...more: Arg[]): Pattern
  fmi18(...more: Arg[]): Pattern
  fmi2(...more: Arg[]): Pattern
  fmi20(...more: Arg[]): Pattern
  fmi21(...more: Arg[]): Pattern
  fmi22(...more: Arg[]): Pattern
  fmi23(...more: Arg[]): Pattern
  fmi24(...more: Arg[]): Pattern
  fmi25(...more: Arg[]): Pattern
  fmi26(...more: Arg[]): Pattern
  fmi27(...more: Arg[]): Pattern
  fmi28(...more: Arg[]): Pattern
  fmi3(...more: Arg[]): Pattern
  fmi30(...more: Arg[]): Pattern
  fmi31(...more: Arg[]): Pattern
  fmi32(...more: Arg[]): Pattern
  fmi33(...more: Arg[]): Pattern
  fmi34(...more: Arg[]): Pattern
  fmi35(...more: Arg[]): Pattern
  fmi36(...more: Arg[]): Pattern
  fmi37(...more: Arg[]): Pattern
  fmi38(...more: Arg[]): Pattern
  fmi4(...more: Arg[]): Pattern
  fmi40(...more: Arg[]): Pattern
  fmi41(...more: Arg[]): Pattern
  fmi42(...more: Arg[]): Pattern
  fmi43(...more: Arg[]): Pattern
  fmi44(...more: Arg[]): Pattern
  fmi45(...more: Arg[]): Pattern
  fmi46(...more: Arg[]): Pattern
  fmi47(...more: Arg[]): Pattern
  fmi48(...more: Arg[]): Pattern
  fmi5(...more: Arg[]): Pattern
  fmi50(...more: Arg[]): Pattern
  fmi51(...more: Arg[]): Pattern
  fmi52(...more: Arg[]): Pattern
  fmi53(...more: Arg[]): Pattern
  fmi54(...more: Arg[]): Pattern
  fmi55(...more: Arg[]): Pattern
  fmi56(...more: Arg[]): Pattern
  fmi57(...more: Arg[]): Pattern
  fmi58(...more: Arg[]): Pattern
  fmi6(...more: Arg[]): Pattern
  fmi60(...more: Arg[]): Pattern
  fmi61(...more: Arg[]): Pattern
  fmi62(...more: Arg[]): Pattern
  fmi63(...more: Arg[]): Pattern
  fmi64(...more: Arg[]): Pattern
  fmi65(...more: Arg[]): Pattern
  fmi66(...more: Arg[]): Pattern
  fmi67(...more: Arg[]): Pattern
  fmi68(...more: Arg[]): Pattern
  fmi7(...more: Arg[]): Pattern
  fmi70(...more: Arg[]): Pattern
  fmi71(...more: Arg[]): Pattern
  fmi72(...more: Arg[]): Pattern
  fmi73(...more: Arg[]): Pattern
  fmi74(...more: Arg[]): Pattern
  fmi75(...more: Arg[]): Pattern
  fmi76(...more: Arg[]): Pattern
  fmi77(...more: Arg[]): Pattern
  fmi78(...more: Arg[]): Pattern
  fmi8(...more: Arg[]): Pattern
  fmi80(...more: Arg[]): Pattern
  fmi81(...more: Arg[]): Pattern
  fmi82(...more: Arg[]): Pattern
  fmi83(...more: Arg[]): Pattern
  fmi84(...more: Arg[]): Pattern
  fmi85(...more: Arg[]): Pattern
  fmi86(...more: Arg[]): Pattern
  fmi87(...more: Arg[]): Pattern
  fmi88(...more: Arg[]): Pattern
  /**
   * Release time for the FM envelope: how much modulation is applied after the note is released
   * A number may be added afterwards to control the release of the envelope of
   * any of the 8 individual FMs (e.g. fmrel8)
   * Synonyms: fmrel
   * @param time {number | Pattern} release time
   */
  fmrel(time?: any, ...more: Arg[]): Pattern
  fmrel1(...more: Arg[]): Pattern
  fmrel2(...more: Arg[]): Pattern
  fmrel3(...more: Arg[]): Pattern
  fmrel4(...more: Arg[]): Pattern
  fmrel5(...more: Arg[]): Pattern
  fmrel6(...more: Arg[]): Pattern
  fmrel7(...more: Arg[]): Pattern
  fmrel8(...more: Arg[]): Pattern
  /**
   * Release time for the FM envelope: how much modulation is applied after the note is released
   * A number may be added afterwards to control the release of the envelope of
   * any of the 8 individual FMs (e.g. fmrel8)
   * Synonyms: fmrel
   * @param time {number | Pattern} release time
   */
  fmrelease(time?: any, ...more: Arg[]): Pattern
  fmrelease1(...more: Arg[]): Pattern
  fmrelease2(...more: Arg[]): Pattern
  fmrelease3(...more: Arg[]): Pattern
  fmrelease4(...more: Arg[]): Pattern
  fmrelease5(...more: Arg[]): Pattern
  fmrelease6(...more: Arg[]): Pattern
  fmrelease7(...more: Arg[]): Pattern
  fmrelease8(...more: Arg[]): Pattern
  /**
   * Sustain level for the FM envelope: how much modulation is applied after the decay phase
   * A number may be added afterwards to control the sustain of the envelope of
   * any of the 8 individual FMs (e.g. fmsus7)
   * Synonyms: fmsus
   * @param level {number | Pattern} sustain level
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmdecay(.1)
   * .fmsustain("<1 .75 .5 0>")
   * ._scope()
   */
  fmsus(level?: any, ...more: Arg[]): Pattern
  fmsus1(...more: Arg[]): Pattern
  fmsus2(...more: Arg[]): Pattern
  fmsus3(...more: Arg[]): Pattern
  fmsus4(...more: Arg[]): Pattern
  fmsus5(...more: Arg[]): Pattern
  fmsus6(...more: Arg[]): Pattern
  fmsus7(...more: Arg[]): Pattern
  fmsus8(...more: Arg[]): Pattern
  /**
   * Sustain level for the FM envelope: how much modulation is applied after the decay phase
   * A number may be added afterwards to control the sustain of the envelope of
   * any of the 8 individual FMs (e.g. fmsus7)
   * Synonyms: fmsus
   * @param level {number | Pattern} sustain level
   * @example
   * note("c e g b g e")
   * .fm(4)
   * .fmdecay(.1)
   * .fmsustain("<1 .75 .5 0>")
   * ._scope()
   */
  fmsustain(level?: any, ...more: Arg[]): Pattern
  fmsustain1(...more: Arg[]): Pattern
  fmsustain2(...more: Arg[]): Pattern
  fmsustain3(...more: Arg[]): Pattern
  fmsustain4(...more: Arg[]): Pattern
  fmsustain5(...more: Arg[]): Pattern
  fmsustain6(...more: Arg[]): Pattern
  fmsustain7(...more: Arg[]): Pattern
  fmsustain8(...more: Arg[]): Pattern
  /**
   * Waveform of the fm modulator
   * A number may be added afterwards to control the waveform
   * any of the 8 individual FMs (e.g. fmwave6)
   * @param wave {number | Pattern} waveform
   * @example
   * n("0 1 2 3".fast(4)).scale("d:minor").s("sine").fmwave("<sine square sawtooth crackle>").fm(4).fmh(2.01)
   * @example
   * n("0 1 2 3".fast(4)).chord("<Dm Am F G>").voicing().s("sawtooth").fmwave("brown").fm(.6)
   */
  fmwave(wave?: any, ...more: Arg[]): Pattern
  fmwave1(...more: Arg[]): Pattern
  fmwave2(...more: Arg[]): Pattern
  fmwave3(...more: Arg[]): Pattern
  fmwave4(...more: Arg[]): Pattern
  fmwave5(...more: Arg[]): Pattern
  fmwave6(...more: Arg[]): Pattern
  fmwave7(...more: Arg[]): Pattern
  fmwave8(...more: Arg[]): Pattern
  /**
   * Similar to compress, but doesn't leave gaps, and the 'focus' can be bigger than a cycle
   * @example
   * s("bd hh sd hh").focus(1/4, 3/4)
   */
  focus(...more: Arg[]): Pattern
  focusSpan(...more: Arg[]): Pattern
  focusspan(...more: Arg[]): Pattern
  /**
   * Wavefolding distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  fold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  frameRate(...more: Arg[]): Pattern
  frames(...more: Arg[]): Pattern
  freeze(...more: Arg[]): Pattern
  /**
   * Set frequency of sound.
   * @param frequency {number | Pattern} in Hz. the audible range is between 20 and 20000 Hz
   * @example
   * freq("220 110 440 110").s("superzow").osc()
   * @example
   * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
   */
  freq(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
   * Returns a new pattern with values scaled to the unipolar range 0 .. 1
   */
  fromBipolar(...more: Arg[]): Pattern
  /**
   * Renders an oscilloscope for the frequency domain of the audio signal.
   * @param color {string} line color as hex or color name. defaults to white.
   * @param scale {number} scales the y-axis. Defaults to 0.25
   * @param pos {number} y-position relative to screen height. 0 = top, 1 = bottom of screen
   * @param lean {number} y-axis alignment where 0 = top and 1 = bottom
   * @param min {number} min value
   * @param max {number} max value
   * @example
   * s("sawtooth").fscope()
   */
  fscope(color?: any, scale?: any, pos?: any, lean?: any, min?: any, max?: any, ...more: Arg[]): Pattern
  fshift(...more: Arg[]): Pattern
  fshiftnote(...more: Arg[]): Pattern
  fshiftphase(...more: Arg[]): Pattern
  /**
   * Sets the filter type. The ladder filter is more aggressive. More types might be added in the future.
   * @param type {number | Pattern} 12db (0), ladder (1), or 24db (2)
   * @example
   * note("{f g g c d a a#}%8").s("sawtooth").lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
   * @example
   * note("c f g g a c d4").fast(2)
   * .sound('sawtooth')
   * .lpf(200).fanchor(0)
   * .lpenv(3).lpq(1)
   * .ftype("<ladder 12db 24db>")
   */
  ftype(type?: any, ...more: Arg[]): Pattern
  func(...more: Arg[]): Pattern
  fxr(...more: Arg[]): Pattern
  /**
   * Controls the gain by an exponential amount.
   * @param amount {number | Pattern} gain.
   * @example
   * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
   */
  gain(amount?: any, ...more: Arg[]): Pattern
  gat(...more: Arg[]): Pattern
  gate(...more: Arg[]): Pattern
  getPainters(...more: Arg[]): Pattern
  /**
   * Experimental
   * Progressively grows the pattern by 'n' steps until the full pattern is played, or if a second value is given (using mininotation list syntax with :),
   * that number of times.
   * A positive number will progressively grow steps from the start of a pattern, and a negative number from the end.
   * @example
   * "tha dhi thom nam".grow("1").sound()
   * .bank("mridangam")
   * @example
   * "tha dhi thom nam".grow("-1").sound()
   * .bank("mridangam")
   * @example
   * "tha dhi thom nam".grow("1 -1").sound().bank("mridangam").pace(4)
   * @example
   * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
   *    .grow("1 -1").pace(8)
   */
  grow(...more: Arg[]): Pattern
  gt(...more: Arg[]): Pattern
  gte(...more: Arg[]): Pattern
  h(...more: Arg[]): Pattern
  /**
   * Hard-clipping distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  hard(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  harmonic(...more: Arg[]): Pattern
  hbrick(...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the high-pass filter.
   * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
   * Synonyms: hp, hcutoff
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
   */
  hcutoff(frequency?: any, ...more: Arg[]): Pattern
  hold(...more: Arg[]): Pattern
  hours(...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the high-pass filter.
   * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
   * Synonyms: hp, hcutoff
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
   */
  hp(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the highpass filter envelope.
   * Synonyms: hpa
   * @param attack {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpa("<.5 .25 .1 .01>/4")
   * .hpenv(4)
   */
  hpa(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the highpass filter envelope.
   * Synonyms: hpa
   * @param attack {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpa("<.5 .25 .1 .01>/4")
   * .hpenv(4)
   */
  hpattack(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the highpass filter envelope.
   * Synonyms: hpd
   * @param decay {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpd("<.5 .25 .1 0>/4")
   * .hps(0.2)
   * .hpenv(4)
   */
  hpd(decay?: any, ...more: Arg[]): Pattern
  /**
   * DC offset of the LFO for the highpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  hpdc(dcoffset?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the highpass filter envelope.
   * Synonyms: hpd
   * @param decay {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpd("<.5 .25 .1 0>/4")
   * .hps(0.2)
   * .hpenv(4)
   */
  hpdecay(decay?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the highpass filter
   * @param depth {number | Pattern} depth of modulation
   */
  hpdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the hipass filter, in hz
   * Synonyms: hpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
   */
  hpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the hipass filter, in hz
   * Synonyms: hpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
   */
  hpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  /**
   * Sets the highpass filter envelope modulation depth.
   * Synonyms: hpe
   * @param modulation {number | Pattern} depth of the highpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpa(.5)
   * .hpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  hpe(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Sets the highpass filter envelope modulation depth.
   * Synonyms: hpe
   * @param modulation {number | Pattern} depth of the highpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpa(.5)
   * .hpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  hpenv(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the high-pass filter.
   * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
   * Synonyms: hp, hcutoff
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
   */
  hpf(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Controls the high-pass q-value.
   * Synonyms: hresonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
   */
  hpq(q?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the highpass filter envelope.
   * Synonyms: hpr
   * @param release {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .hpf(500)
   * .hpenv(4)
   * .hpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  hpr(release?: any, ...more: Arg[]): Pattern
  /**
   * Rate of the LFO for the highpass filter
   * @param rate {number | Pattern} rate in hertz
   */
  hprate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the highpass filter envelope.
   * Synonyms: hpr
   * @param release {number | Pattern} time of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .hpf(500)
   * .hpenv(4)
   * .hpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  hprelease(release?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the highpass filter envelope.
   * Synonyms: hps
   * @param sustain {number | Pattern} amplitude of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpd(.5)
   * .hps("<0 .25 .5 1>/4")
   * .hpenv(4)
   */
  hps(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Shape of the LFO for the highpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  hpshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Skew of the LFO for the highpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  hpskew(skew?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the highpass filter envelope.
   * Synonyms: hps
   * @param sustain {number | Pattern} amplitude of the highpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .hpf(500)
   * .hpd(.5)
   * .hps("<0 .25 .5 1>/4")
   * .hpenv(4)
   */
  hpsustain(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the highpass filter
   * @param rate {number | Pattern} rate in cycles
   */
  hpsync(rate?: any, ...more: Arg[]): Pattern
  /**
   * Controls the high-pass q-value.
   * Synonyms: hresonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
   */
  hresonance(q?: any, ...more: Arg[]): Pattern
  hsl(...more: Arg[]): Pattern
  hsla(...more: Arg[]): Pattern
  /**
   * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
   * @example
   * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
   */
  hurry(...more: Arg[]): Pattern
  /**
   * Silences a pattern.
   * @example
   * stack(
   *   s("bd").hush(),
   *   s("hh*3")
   * )
   */
  hush(...more: Arg[]): Pattern
  imag(...more: Arg[]): Pattern
  /**
   * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
   * Similar to pick, but cycles are squeezed into the target ('inhabited') pattern.
   * Synonyms: pickSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * "<a b [a,b]>".inhabit({a: s("bd(3,8)"),
   *                             b: s("cp sd")
   *                            })
   * @example
   * s("a@2 [a b] a".inhabit({a: "bd(3,8)", b: "sd sd"})).slow(4)
   */
  inhabit(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as inhabit, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * Synonyms: pickmodSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   */
  inhabitmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
  innerBind(...more: Arg[]): Pattern
  innerJoin(...more: Arg[]): Pattern
  /**
   * Carries out an operation 'inside' a cycle.
   * @example
   * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
   * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
   */
  inside(...more: Arg[]): Pattern
  /**
   * Breaks a pattern into pieces according to the structure of a given pattern.
   * True values in the given pattern cause the corresponding subcycle of the
   * source pattern to be looped, and for an (optional) given function to be
   * applied. False values result in the corresponding part of the source pattern
   * to be played unchanged.
   * @example
   * sound("bd sd ht lt").into("1 0", hurry(2))
   */
  into(...more: Arg[]): Pattern
  /**
   * Swaps 1s and 0s in a binary pattern.
   * Synonyms: inv
   * @example
   * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
   */
  inv(...more: Arg[]): Pattern
  /**
   * Swaps 1s and 0s in a binary pattern.
   * Synonyms: inv
   * @example
   * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
   */
  invert(...more: Arg[]): Pattern
  /**
   * Sets the sample to use as an impulse response for the reverb.
   * Synonyms: ir
   * @param sample {string | Pattern} to use as an impulse response
   * @example
   * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
   */
  ir(sample?: any, ...more: Arg[]): Pattern
  /**
   * Sets the beginning of the IR response sample
   * Synonyms: ir
   * @param begin {string | Pattern} between 0 and 1
   * @example
   * samples('github:switchangel/pad')
   * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
   */
  irbegin(begin?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sample to use as an impulse response for the reverb.
   * Synonyms: ir
   * @param sample {string | Pattern} to use as an impulse response
   * @example
   * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
   */
  iresponse(sample?: any, ...more: Arg[]): Pattern
  /**
   * Sets speed of the sample for the impulse response.
   * @param speed {string | Pattern}
   * @example
   * samples('github:switchangel/pad')
   * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
   */
  irspeed(speed?: any, ...more: Arg[]): Pattern
  /**
   * Divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played.
   * @example
   * note("0 1 2 3".scale('A minor')).iter(4)
   */
  iter(...more: Arg[]): Pattern
  /**
   * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
   * Synonyms: iterback
   * @example
   * note("0 1 2 3".scale('A minor')).iterBack(4)
   */
  iterBack(...more: Arg[]): Pattern
  /**
   * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
   * Synonyms: iterback
   * @example
   * note("0 1 2 3".scale('A minor')).iterBack(4)
   */
  iterback(...more: Arg[]): Pattern
  join(...more: Arg[]): Pattern
  /**
   * The jux function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel.
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(rev)
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(press)
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(iter(4))
   */
  jux(...more: Arg[]): Pattern
  /**
   * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
   * Synonyms: juxby
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
   */
  juxBy(...more: Arg[]): Pattern
  /**
   * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
   * Synonyms: juxby
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
   */
  juxby(...more: Arg[]): Pattern
  kcutoff(...more: Arg[]): Pattern
  keep(...more: Arg[]): Pattern
  keepif(...more: Arg[]): Pattern
  /**
   * returns true when a key or array of keys is held
   * Key name reference
   * @example
   * keyDown("Control:j").pick([s("bd(5,8)"), s("cp(3,8)")])
   */
  keyDown(...more: Arg[]): Pattern
  krush(...more: Arg[]): Pattern
  /**
   * Sets the displayed text for an event on the pianoroll
   * @param label {string} text to display
   */
  label(label?: any, ...more: Arg[]): Pattern
  /**
   * Applies the given function every n cycles, starting from the last cycle.
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").lastOf(4, x=>x.rev())
   */
  lastOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Nudge a pattern to start later in time. Equivalent of Tidal's ~> operator
   * @param cycles {number | Pattern} number of cycles to nudge right
   * @example
   * "bd ~".stack("hh ~".late(.1)).s()
   */
  late(cycles?: any, ...more: Arg[]): Pattern
  /**
   * Layers the result of the given function(s). Like superimpose, but without the original pattern:
   * Synonyms: apply
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .layer(x=>x.add("0,2"))
   *   .scale('C minor').note()
   */
  layer(...more: Arg[]): Pattern
  lbrick(...more: Arg[]): Pattern
  /**
   * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
   * Synonyms: legato
   * @param factor {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").clip("<.5 1 2>")
   */
  legato(factor?: any, ...more: Arg[]): Pattern
  /**
   * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
   * @param wet {number | Pattern} between 0 and 1
   * @example
   * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
   */
  leslie(wet?: any, ...more: Arg[]): Pattern
  /**
   * Configures an LFO. Can be called in sequence like pat.lfo(...).lfo(...) to set up multiple LFOs.
   * There are two ways to declare which control will be modulated:
   *
   * Explicitly put control in the config (e.g. lfo({ c: "lpf" }))
   * If the control parameter is absent, the control immediately before the lfo call will be used
   * (e.g. s("saw").lpf(500).lfo() to modulate lpf)
   *
   * Modulators can be referred to by id so that they can be updated later e.g. inside
   * a sometimes. See example below.
   * @param config {Object} LFO configuration.
   * @param config.control {string | Pattern} Node to modulate. Aliases: c
   * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
   * @param config.rate {number | Pattern} Modulation rate. Aliases: r
   * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
   * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
   * @param config.dcoffset {number | Pattern} DC offset / bias for the waveform. Aliases: dc
   * @param config.shape {number | Pattern} Shape index. Aliases: sh
   * @param config.skew {number | Pattern} Skew amount. Aliases: sk
   * @param config.curve {number | Pattern} Exponential curve amount. Aliases: cu
   * @param config.sync {number | Pattern} Tempo-synced modulation rate. Aliases: s
   * @param config.fxi {number | Pattern} FX index to target
   * @param id {string | Pattern} ID to use for this modulator
   * @example
   * s("saw").note("F1").lpf(500).lfo()
   * @example
   * s("saw").lfo().lpf(500).lfo({ s: 0.3 })
   * @example
   * s("saw").lpf(500).diode(0.3)
   *   .lfo({ c: "lpf" })
   * @example
   * s("pulse").lpf(500).lfo()
   *   .lfo({ c: "s" })
   *   .diode(0.3)
   *   .sometimes(x => x.lfo({ s: "8" }, 1)) // lfo #1 (0-indexed)
   * @example
   * s("pulse").lpf(500).lfo({ depth: 4 }, 'lpf_mod')
   *   .lfo({ c: "s" })
   *   .diode(0.3)
   *   .sometimes(x => x.lfo({ s: "8" }, 'lpf_mod'))
   */
  lfo(config?: any, id?: any, ...more: Arg[]): Pattern
  /**
   * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
   * @param fraction {number} fraction to select
   * @example
   * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
   */
  linger(fraction?: any, ...more: Arg[]): Pattern
  /**
   * Specifies whether delaytime is calculated relative to cps.
   * @param enable {number | Pattern} When set to 1, delaytime is a direct multiple of a cycle.
   * @example
   * s("sd").delay().lock(1).osc()
   */
  lock(enable?: any, ...more: Arg[]): Pattern
  /**
   * Writes the content of the current event to the console (visible in the side menu).
   * @example
   * s("bd sd").log()
   */
  log(...more: Arg[]): Pattern
  log2(...more: Arg[]): Pattern
  /**
   * A simplified version of log which writes all "values" (various configurable parameters)
   * within the event to the console (visible in the side menu).
   * @example
   * s("bd sd").gain("0.25 0.5 1").n("2 1 0").logValues()
   */
  logValues(...more: Arg[]): Pattern
  /**
   * Loops the sample.
   * Note that the tempo of the loop is not synced with the cycle tempo.
   * To change the loop region, use loopBegin / loopEnd.
   * @param on {number | Pattern} If 1, the sample is looped
   * @example
   * s("casio").loop(1)
   */
  loop(on?: any, ...more: Arg[]): Pattern
  /**
   * Makes the sample fit the given number of cycles by changing the speed.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes").loopAt(2)
   */
  loopAt(...more: Arg[]): Pattern
  /**
   * Makes the sample fit the given number of cycles and cps value, by
   * changing the speed. Please note that at some point cps will be
   * given by a global clock and this function will be
   * deprecated/removed.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes").loopAtCps(4,1.5).cps(1.5)
   */
  loopAtCps(...more: Arg[]): Pattern
  /**
   * Begin to loop at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and before loopEnd!
   * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
   * Synonyms: loopb
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopBegin("<0 .125 .25>")._scope()
   */
  loopBegin(time?: any, ...more: Arg[]): Pattern
  /**
   * End the looping section at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and after loopBegin!
   * Synonyms: loope
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopEnd("<1 .75 .5 .25>")._scope()
   */
  loopEnd(time?: any, ...more: Arg[]): Pattern
  loopat(...more: Arg[]): Pattern
  loopatcps(...more: Arg[]): Pattern
  /**
   * Begin to loop at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and before loopEnd!
   * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
   * Synonyms: loopb
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopBegin("<0 .125 .25>")._scope()
   */
  loopb(time?: any, ...more: Arg[]): Pattern
  /**
   * End the looping section at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and after loopBegin!
   * Synonyms: loope
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopEnd("<1 .75 .5 .25>")._scope()
   */
  loope(time?: any, ...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the low-pass filter.
   * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
   * Synonyms: cutoff, ctf, lp
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
   */
  lp(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the lowpass filter envelope.
   * Synonyms: lpa
   * @param attack {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpa("<.5 .25 .1 .01>/4")
   * .lpenv(4)
   */
  lpa(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the attack duration for the lowpass filter envelope.
   * Synonyms: lpa
   * @param attack {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpa("<.5 .25 .1 .01>/4")
   * .lpenv(4)
   */
  lpattack(attack?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the lowpass filter envelope.
   * Synonyms: lpd
   * @param decay {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpd("<.5 .25 .1 0>/4")
   * .lpenv(4)
   */
  lpd(decay?: any, ...more: Arg[]): Pattern
  /**
   * DC offset of the LFO for the lowpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  lpdc(dcoffset?: any, ...more: Arg[]): Pattern
  /**
   * Sets the decay duration for the lowpass filter envelope.
   * Synonyms: lpd
   * @param decay {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpd("<.5 .25 .1 0>/4")
   * .lpenv(4)
   */
  lpdecay(decay?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
   */
  lpdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter, in HZ
   * Synonyms: lpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
   */
  lpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter, in HZ
   * Synonyms: lpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
   */
  lpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  /**
   * Sets the lowpass filter envelope modulation depth.
   * Synonyms: lpe
   * @param modulation {number | Pattern} depth of the lowpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpa(.5)
   * .lpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  lpe(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Sets the lowpass filter envelope modulation depth.
   * Synonyms: lpe
   * @param modulation {number | Pattern} depth of the lowpass filter envelope between 0 and n
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpa(.5)
   * .lpenv("<4 2 1 0 -1 -2 -4>/4")
   */
  lpenv(modulation?: any, ...more: Arg[]): Pattern
  /**
   * Applies the cutoff frequency of the low-pass filter.
   * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
   * Synonyms: cutoff, ctf, lp
   * @param frequency {number | Pattern} audible between 0 and 20000
   * @example
   * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
   * @example
   * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
   */
  lpf(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Controls the low-pass q-value.
   * Synonyms: resonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
   */
  lpq(q?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the lowpass filter envelope.
   * Synonyms: lpr
   * @param release {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .lpf(300)
   * .lpenv(4)
   * .lpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  lpr(release?: any, ...more: Arg[]): Pattern
  /**
   * Rate of the LFO for the lowpass filter
   * @param rate {number | Pattern} rate in hertz
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
   */
  lprate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Sets the release time for the lowpass filter envelope.
   * Synonyms: lpr
   * @param release {number | Pattern} time of the filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .clip(.5)
   * .lpf(300)
   * .lpenv(4)
   * .lpr("<.5 .25 .1 0>/4")
   * .release(.5)
   */
  lprelease(release?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the lowpass filter envelope.
   * Synonyms: lps
   * @param sustain {number | Pattern} amplitude of the lowpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpd(.5)
   * .lps("<0 .25 .5 1>/4")
   * .lpenv(4)
   */
  lps(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Shape of the LFO for the lowpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  lpshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Skew of the LFO for the lowpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  lpskew(skew?: any, ...more: Arg[]): Pattern
  /**
   * Sets the sustain amplitude for the lowpass filter envelope.
   * Synonyms: lps
   * @param sustain {number | Pattern} amplitude of the lowpass filter envelope
   * @example
   * note("c2 e2 f2 g2")
   * .sound('sawtooth')
   * .lpf(300)
   * .lpd(.5)
   * .lps("<0 .25 .5 1>/4")
   * .lpenv(4)
   */
  lpsustain(sustain?: any, ...more: Arg[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the lowpass filter
   * @param rate {number | Pattern} rate in cycles
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
   */
  lpsync(rate?: any, ...more: Arg[]): Pattern
  /**
   * Rate of modulation / rotation for leslie effect
   * @param rate {number | Pattern} 6.7 for fast, 0.7 for slow
   * @example
   * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
   */
  lrate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
   * @param meters {number | Pattern} somewhere between 0 and 1
   * @example
   * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
   */
  lsize(meters?: any, ...more: Arg[]): Pattern
  lt(...more: Arg[]): Pattern
  lte(...more: Arg[]): Pattern
  /**
   * Overrides the css of highlighted events. Make sure to use single quotes!
   * @example
   * note("c a f e")
   * .markcss('text-decoration:underline')
   */
  markcss(...more: Arg[]): Pattern
  /**
   * Returns silence when mask is 0 or "~"
   * @example
   * note("c [eb,g] d [eb,g]").mask("<1 [0 1]>")
   */
  mask(...more: Arg[]): Pattern
  maskAll(...more: Arg[]): Pattern
  /**
   * MIDI output: Opens a MIDI output port.
   * @param midiport {string | number} MIDI device name or index defaulting to 0
   * @param options {object} Additional MIDI configuration options
   * @example
   * note("c4").midichan(1).midi('IAC Driver Bus 1')
   * @example
   * note("c4").midichan(1).midi('IAC Driver Bus 1', { controller: true, latency: 50 })
   */
  midi(midiport?: any, options?: any, ...more: Arg[]): Pattern
  /**
   * MIDI pitch bend: Sends a MIDI pitch bend message.
   * @param midibend {number | Pattern} MIDI pitch bend (-1 - 1)
   * @example
   * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
   */
  midibend(midibend?: any, ...more: Arg[]): Pattern
  /**
   * MIDI channel: Sets the MIDI channel for the event.
   * @param channel {number | Pattern} MIDI channel number (0-15)
   * @example
   * note("c4").midichan(1).midi()
   */
  midichan(channel?: any, ...more: Arg[]): Pattern
  /**
   * MIDI command: Sends a MIDI command message.
   * @param command {number | Pattern} MIDI command
   * @example
   * midicmd("clock*48,<start stop>/2").midi()
   */
  midicmd(command?: any, ...more: Arg[]): Pattern
  midimap(...more: Arg[]): Pattern
  /**
   * MIDI port: Sets the MIDI port for the event.
   * @param port {number | Pattern} MIDI port
   * @example
   * note("c a f e").midiport("<0 1 2 3>").midi()
   */
  midiport(port?: any, ...more: Arg[]): Pattern
  /**
   * MIDI key after touch: Sends a MIDI key after touch message.
   * @param miditouch {number | Pattern} MIDI key after touch (0-1)
   * @example
   * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
   */
  miditouch(miditouch?: any, ...more: Arg[]): Pattern
  minutes(...more: Arg[]): Pattern
  mix(...more: Arg[]): Pattern
  mod(...more: Arg[]): Pattern
  /**
   * Remove anchor note from the voicing. Useful for melody harmonization
   * @param modeName {string | Pattern} one of {below | above | duck | root}
   * @example
   * mode("<below above duck root>").chord("C").voicing()
   */
  mode(modeName?: any, ...more: Arg[]): Pattern
  modulate(...more: Arg[]): Pattern
  moveXY(...more: Arg[]): Pattern
  mtranspose(...more: Arg[]): Pattern
  /**
   * Multiplies each number by the given factor.
   * @example
   * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
   */
  mul(...more: Arg[]): Pattern
  /**
   * Selects the given index from the sample map.
   * Numbers too high will wrap around.
   * n can also be used to play midi numbers, but it is recommended to use note instead.
   * @param value {number | Pattern} sample index starting from 0
   * @example
   * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
   */
  n(value?: any, ...more: Arg[]): Pattern
  ne(...more: Arg[]): Pattern
  net(...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(0, fn) (never calls fn)
   * @example
   * s("hh*8").never(x=>x.speed("0.5"))
   */
  never(...more: Arg[]): Pattern
  /**
   * Adds pink noise to the mix
   * @param wet {number | Pattern} wet amount
   * @example
   * sound("<white pink brown>/2")
   */
  noise(wet?: any, ...more: Arg[]): Pattern
  /**
   * Plays the given note name or midi number. A note name consists of
   *
   * a letter (a-g or A-G)
   * optional accidentals (b or #)
   * optional (possibly negative) octave number (0-9). Defaults to 3
   *
   * Examples of valid note names: c, bb, Bb, f#, c3, A4, Eb2, c#5
   * You can also use midi numbers instead of note names, where 69 is mapped to A4 440Hz in 12EDO.
   * @example
   * note("c a f e")
   * @example
   * note("c4 a4 f4 e4")
   * @example
   * note("60 69 65 64")
   * @example
   * note("fbb1 a#0 cbbb-1 e##-2").sound("saw")
   */
  note(...more: Arg[]): Pattern
  /**
   * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
   * @param nrpnn {number | Pattern} MIDI NRPN non-registered parameter number (0-127)
   * @example
   * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
   */
  nrpnn(nrpnn?: any, ...more: Arg[]): Pattern
  /**
   * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
   * @param nrpv {number | Pattern} MIDI NRPN non-registered parameter value (0-127)
   * @example
   * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
   */
  nrpv(nrpv?: any, ...more: Arg[]): Pattern
  nudge(...more: Arg[]): Pattern
  /**
   * An orbit is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
   * Synonyms: o
   * @param number {number | Pattern}
   * @example
   * stack(
   *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
   *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
   * )
   */
  o(number?: any, ...more: Arg[]): Pattern
  /**
   * Sets the default octave of a synth.
   * Synonyms: oct
   * @param octave {number | Pattern} octave number
   * @example
   * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
   */
  oct(octave?: any, ...more: Arg[]): Pattern
  /**
   * Sets the default octave of a synth.
   * Synonyms: oct
   * @param octave {number | Pattern} octave number
   * @example
   * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
   */
  octave(octave?: any, ...more: Arg[]): Pattern
  octaveR(...more: Arg[]): Pattern
  /**
   * How many octaves are voicing steps spread apart, defaults to 1
   * @param count {number | Pattern} the number of octaves
   * @example
   * chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
   */
  octaves(count?: any, ...more: Arg[]): Pattern
  octer(...more: Arg[]): Pattern
  octersub(...more: Arg[]): Pattern
  octersubsub(...more: Arg[]): Pattern
  /**
   * Superimposes the function result on top of the original pattern, delayed by the given time.
   * @param time {Pattern | number} offset time
   * @param func {function} function to apply
   * @example
   * "c3 eb3 g3".off(1/8, x=>x.add(7)).note()
   */
  off(time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Sets how the voicing is offset from the anchored position
   * @param shift {number | Pattern} the amount to shift the voicing up or down
   * @example
   * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
   */
  offset(shift?: any, ...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.75, fn)
   * @example
   * s("hh*8").often(x=>x.speed("0.5"))
   */
  often(...more: Arg[]): Pattern
  onPaint(...more: Arg[]): Pattern
  onTrigger(...more: Arg[]): Pattern
  /**
   * make something happen on event time
   * uses browser timeout which is innacurate for audio tasks
   * @example
   * s("bd!8").onTriggerTime((hap) => {console.log(hap)})
   */
  onTriggerTime(...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with all haps without onsets filtered out. A hap
   * with an onset is one with a whole timespan that begins at the same time
   * as its part timespan.
   */
  onsetsOnly(...more: Arg[]): Pattern
  or(...more: Arg[]): Pattern
  /**
   * An orbit is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
   * Synonyms: o
   * @param number {number | Pattern}
   * @example
   * stack(
   *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
   *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
   * )
   */
  orbit(number?: any, ...more: Arg[]): Pattern
  /**
   * The host to send open sound control messages to. Requires running the OSC bridge.
   * @param oschost {string | Pattern} e.g. 'localhost'
   * @example
   * note("c4").oschost('127.0.0.1').oscport(57120).osc();
   */
  oschost(oschost?: any, ...more: Arg[]): Pattern
  /**
   * The port to send open sound control messages to. Requires running the OSC bridge.
   * @param oscport {number | Pattern} e.g. 57120
   * @example
   * note("c4").oschost('127.0.0.1').oscport(57120).osc();
   */
  oscport(oscport?: any, ...more: Arg[]): Pattern
  /**
   *
   */
  out(...more: Arg[]): Pattern
  outerBind(...more: Arg[]): Pattern
  outerJoin(...more: Arg[]): Pattern
  /**
   * Carries out an operation 'outside' a cycle.
   * @example
   * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
   * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
   */
  outside(...more: Arg[]): Pattern
  overgain(...more: Arg[]): Pattern
  overshape(...more: Arg[]): Pattern
  /**
   * Experimental
   * Speeds a pattern up or down, to fit to the given number of steps per cycle.
   * @example
   * sound("bd sd cp").pace(4)
   * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
   */
  pace(...more: Arg[]): Pattern
  /**
   * Applies rev to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
   * @example
   * note("c d e g").palindrome()
   */
  palindrome(...more: Arg[]): Pattern
  /**
   * Sets position in stereo.
   * @param pan {number | Pattern} between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
   * @example
   * s("[bd hh]*2").pan("<.5 1 .5 0>")
   * @example
   * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
   */
  pan(pan?: any, ...more: Arg[]): Pattern
  /**
   * Sets the range anchor of the envelope:
   *
   * anchor 0: range = [note, note + penv]
   * anchor 1: range = [note - penv, note]
   * If you don't set an anchor, the value will default to the psustain value.
   * @param anchor {number | Pattern} anchor offset
   * @example
   * note("c c4").penv(12).panchor("<0 .5 1 .5>")
   */
  panchor(anchor?: any, ...more: Arg[]): Pattern
  panorient(...more: Arg[]): Pattern
  panspan(...more: Arg[]): Pattern
  pansplay(...more: Arg[]): Pattern
  panwidth(...more: Arg[]): Pattern
  /**
   * Scale the magnitude of the harmonics of one of the core synths ('sine', 'tri', 'saw', ..)
   * Can also be used to create a new synth via s('user').partials(...)
   * @param magnitudes {Array.<number> | Pattern} List of [0, 1] magnitudes for partials. 0th entry is the fundamental harmonic (i.e. DC offset is skipped)
   * @example
   * s("user").seg(16).n(irand(8)).scale("A:major")
   *   .partials([1, 0, 1, 0, 0, 1])
   * @example
   * s("saw").seg(8).n(irand(12)).scale("G#:minor")
   *   .partials(binaryL(irand(256).add("1")))
   */
  partials(magnitudes?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of pitch envelope.
   * Synonyms: patt
   * @param time {number | Pattern} time in seconds
   * @example
   * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
   */
  patt(time?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of pitch envelope.
   * Synonyms: patt
   * @param time {number | Pattern} time in seconds
   * @example
   * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
   */
  pattack(time?: any, ...more: Arg[]): Pattern
  /**
   * Curve of envelope. Defaults to linear. exponential is good for kicks
   * @param type {number | Pattern} 0 = linear, 1 = exponential
   * @example
   * note("g1*4")
   * .s("sine").pdec(.5)
   * .penv(32)
   * .pcurve("<0 1>")
   */
  pcurve(type?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of pitch envelope.
   * Synonyms: pdec
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
   */
  pdec(time?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of pitch envelope.
   * Synonyms: pdec
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
   */
  pdecay(time?: any, ...more: Arg[]): Pattern
  /**
   * Amount of pitch envelope. Negative values will flip the envelope.
   * If you don't set other pitch envelope controls, pattack:.2 will be the default.
   * @param semitones {number | Pattern} change in semitones
   * @example
   * note("c")
   * .penv("<12 7 1 .5 0 -1 -7 -12>")
   */
  penv(semitones?: any, ...more: Arg[]): Pattern
  /**
   * Phaser audio effect that approximates popular guitar pedals.
   * Synonyms: ph
   * @param speed {number | Pattern} speed of modulation
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser("<1 2 4 8>")
   */
  ph(speed?: any, ...more: Arg[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phasdp(depth?: any, ...more: Arg[]): Pattern
  /**
   * Phaser audio effect that approximates popular guitar pedals.
   * Synonyms: ph
   * @param speed {number | Pattern} speed of modulation
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser("<1 2 4 8>")
   */
  phaser(speed?: any, ...more: Arg[]): Pattern
  /**
   * The center frequency of the phaser in HZ. Defaults to 1000
   * Synonyms: phc
   * @param centerfrequency {number | Pattern} in HZ
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasercenter("<800 2000 4000>")
   */
  phasercenter(centerfrequency?: any, ...more: Arg[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phaserdepth(depth?: any, ...more: Arg[]): Pattern
  phaserrate(...more: Arg[]): Pattern
  /**
   * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
   * Synonyms: phs
   * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasersweep("<800 2000 4000>")
   */
  phasersweep(phasersweep?: any, ...more: Arg[]): Pattern
  /**
   * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
   * @param phases {Array.<number> | Pattern} List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
   * @example
   * // Phase cancellation
   * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
   *   .partials(partials([1, 1, 1]))
   *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
   */
  phases(phases?: any, ...more: Arg[]): Pattern
  /**
   * The center frequency of the phaser in HZ. Defaults to 1000
   * Synonyms: phc
   * @param centerfrequency {number | Pattern} in HZ
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasercenter("<800 2000 4000>")
   */
  phc(centerfrequency?: any, ...more: Arg[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phd(depth?: any, ...more: Arg[]): Pattern
  /**
   * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
   * Synonyms: phs
   * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasersweep("<800 2000 4000>")
   */
  phs(phasersweep?: any, ...more: Arg[]): Pattern
  piano(...more: Arg[]): Pattern
  /**
   * Visualises a pattern as a scrolling 'pianoroll', displayed in the background of the editor. To show a pianoroll for all running patterns, use all(pianoroll). To have a pianoroll appear below
   * a pattern instead, prefix with _, e.g.: sound("bd sd")._pianoroll().
   * Synonyms: punchcard
   * @param options {Object} Object containing all the optional following parameters as key value pairs:
   * @param cycles {integer} number of cycles to be displayed at the same time - defaults to 4
   * @param playhead {number} location of the active notes on the time axis - 0 to 1, defaults to 0.5
   * @param vertical {boolean} displays the roll vertically - 0 by default
   * @param labels {boolean} displays labels on individual notes (see the label function) - 0 by default
   * @param flipTime {boolean} reverse the direction of the roll - 0 by default
   * @param flipValues {boolean} reverse the relative location of notes on the value axis - 0 by default
   * @param overscan {number} lookup X cycles outside of the cycles window to display notes in advance - 1 by default
   * @param hideNegative {boolean} hide notes with negative time (before starting playing the pattern) - 0 by default
   * @param smear {boolean} notes leave a solid trace - 0 by default
   * @param fold {boolean} notes takes the full value axis width - 0 by default
   * @param active {string} hexadecimal or CSS color of the active notes - defaults to #FFCA28
   * @param inactive {string} hexadecimal or CSS color of the inactive notes - defaults to #7491D2
   * @param background {string} hexadecimal or CSS color of the background - defaults to transparent
   * @param playheadColor {string} hexadecimal or CSS color of the line representing the play head - defaults to white
   * @param fill {boolean} notes are filled with color (otherwise only the label is displayed) - 0 by default
   * @param fillActive {boolean} active notes are filled with color - 0 by default
   * @param stroke {boolean} notes are shown with colored borders - 0 by default
   * @param strokeActive {boolean} active notes are shown with colored borders - 0 by default
   * @param hideInactive {boolean} only active notes are shown - 0 by default
   * @param colorizeInactive {boolean} use note color for inactive notes - 1 by default
   * @param fontFamily {string} define the font used by notes labels - defaults to 'monospace'
   * @param minMidi {integer} minimum note value to display on the value axis - defaults to 10
   * @param maxMidi {integer} maximum note value to display on the value axis - defaults to 90
   * @param autorange {boolean} automatically calculate the minMidi and maxMidi parameters - 0 by default
   * @example
   * note("c2 a2 eb2")
   * .euclid(5,8)
   * .s('sawtooth')
   * .lpenv(4).lpf(300)
   * .pianoroll({ labels: 1 })
   */
  pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: Arg[]): Pattern
  /**
   * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
   * Similar to inhabit, but maintains the structure of the original patterns.
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * note("<0 1 2!2 3>".pick(["g a", "e f", "f g f g" , "g c d"]))
   * @example
   * sound("<0 1 [2,0]>".pick(["bd sd", "cp cp", "hh hh"]))
   * @example
   * sound("<0!2 [0,1] 1>".pick(["bd(3,8)", "sd sd"]))
   * @example
   * s("<a!2 [a,b] b>".pick({a: "bd(3,8)", b: "sd sd"}))
   */
  pick(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * pickF lets you use a pattern of numbers to pick which function to apply to another pattern.
   * @param pat {Pattern}
   * @param lookup {Pattern} a pattern of indices
   * @param funcs {Array.<function()>} the array of functions from which to pull
   * @example
   * s("bd [rim hh]").pickF("<0 1 2>", [rev,jux(rev),fast(2)])
   * @example
   * note("<c2 d2>(3,8)").s("square")
   *     .pickF("<0 2> 1", [jux(rev),fast(2),x=>x.lpf(800)])
   */
  pickF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
  /**
   * Similar to pick, but it applies an outerJoin instead of an innerJoin.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * Similar to pick, but the choosen pattern is reset when its index is triggered.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * Similar to pick, but the choosen pattern is restarted when its index is triggered.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
   * Similar to pick, but cycles are squeezed into the target ('inhabited') pattern.
   * Synonyms: pickSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * "<a b [a,b]>".inhabit({a: s("bd(3,8)"),
   *                             b: s("cp sd")
   *                            })
   * @example
   * s("a@2 [a b] a".inhabit({a: "bd(3,8)", b: "sd sd"})).slow(4)
   */
  pickSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as pick, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as pickF, but if you pick a number greater than the size of the functions list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param lookup {Pattern} a pattern of indices
   * @param funcs {Array.<function()>} the array of functions from which to pull
   */
  pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
  /**
   * The same as pickOut, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as pickReset, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as pickRestart, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * "<a@2 b@2 c@2 d@2>".pickRestart({
   *         a: n("0 1 2 0"),
   *         b: n("2 3 4 ~"),
   *         c: n("[4 5] [4 3] 2 0"),
   *         d: n("0 -3 0 ~")
   *       }).scale("C:major").s("piano")
   */
  pickmodRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
  /**
   * The same as inhabit, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * Synonyms: pickmodSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pitchJump(...more: Arg[]): Pattern
  pitchJumpTime(...more: Arg[]): Pattern
  /**
   * Renders a pitch circle to visualize frequencies within one octave
   * @param hapcircles {number}
   * @param circle {number}
   * @param edo {number}
   * @param root {string}
   * @param thickness {number}
   * @param hapRadius {number}
   * @param mode {string}
   * @param margin {number}
   * @example
   * n("0 .. 12").scale("C:chromatic")
   * .s("sawtooth")
   * .lpf(500)
   * ._pitchwheel()
   */
  pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: Arg[]): Pattern
  /**
   * The ply function repeats each event the given number of times.
   * @example
   * s("bd ~ sd cp").ply("<1 2 3>")
   */
  ply(...more: Arg[]): Pattern
  /**
   * The plyForEach function repeats each event the given number of times, applying the given function to each event.
   * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
   * Synonyms: plyforeach
   * @param factor {number} how many times to repeat
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .plyForEach(4, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  plyForEach(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
   * Synonyms: plywith
   * @param factor {number} how many times to repeat
   * @param func {function} function to apply, given the pattern
   * @example
   * "<0 [2 4]>"
   * .plyWith(4, (p) => p.add(2))
   * .scale("C:minor").note()
   */
  plyWith(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * The plyForEach function repeats each event the given number of times, applying the given function to each event.
   * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
   * Synonyms: plyforeach
   * @param factor {number} how many times to repeat
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .plyForEach(4, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  plyforeach(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
   * Synonyms: plywith
   * @param factor {number} how many times to repeat
   * @param func {function} function to apply, given the pattern
   * @example
   * "<0 [2 4]>"
   * .plyWith(4, (p) => p.add(2))
   * .scale("C:minor").note()
   */
  plywith(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  poly(...more: Arg[]): Pattern
  polyBind(...more: Arg[]): Pattern
  polyTouch(...more: Arg[]): Pattern
  /**
   * Gain applied after all effects have been processed.
   * @example
   * s("bd sd [~ bd] sd,hh*8")
   * .compressor("-20:20:10:.002:.02").postgain(1.5)
   */
  postgain(...more: Arg[]): Pattern
  pow(...more: Arg[]): Pattern
  /**
   * Release time of pitch envelope
   * Synonyms: prel
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb> ~")
   * .release(.5) // to hear the pitch release
   * .prelease("<0 .1 .25 .5>")
   */
  prel(time?: any, ...more: Arg[]): Pattern
  /**
   * Release time of pitch envelope
   * Synonyms: prel
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb> ~")
   * .release(.5) // to hear the pitch release
   * .prelease("<0 .1 .25 .5>")
   */
  prelease(time?: any, ...more: Arg[]): Pattern
  /**
   * Syncopates a rhythm, by shifting each event halfway into its timespan.
   * @example
   * stack(s("hh*4"),
   *       s("bd mt sd ht").every(4, press)
   *      ).slow(2)
   */
  press(...more: Arg[]): Pattern
  /**
   * Like press, but allows you to specify the amount by which each
   * event is shifted. pressBy(0.5) is the same as press, while
   * pressBy(1/3) shifts each event by a third of its timespan.
   * @example
   * stack(s("hh*4"),
   *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
   *      ).slow(2)
   */
  pressBy(...more: Arg[]): Pattern
  /**
   * MIDI program number: Sends a MIDI program change message.
   * @param program {number | Pattern} MIDI program number (0-127)
   * @example
   * note("c4").progNum(10).midichan(1).midi()
   */
  progNum(program?: any, ...more: Arg[]): Pattern
  psus(...more: Arg[]): Pattern
  /**
   *
   */
  psustain(...more: Arg[]): Pattern
  /**
   * Visualises a pattern as a scrolling 'pianoroll', displayed in the background of the editor. To show a pianoroll for all running patterns, use all(pianoroll). To have a pianoroll appear below
   * a pattern instead, prefix with _, e.g.: sound("bd sd")._pianoroll().
   * Synonyms: punchcard
   * @param options {Object} Object containing all the optional following parameters as key value pairs:
   * @param cycles {integer} number of cycles to be displayed at the same time - defaults to 4
   * @param playhead {number} location of the active notes on the time axis - 0 to 1, defaults to 0.5
   * @param vertical {boolean} displays the roll vertically - 0 by default
   * @param labels {boolean} displays labels on individual notes (see the label function) - 0 by default
   * @param flipTime {boolean} reverse the direction of the roll - 0 by default
   * @param flipValues {boolean} reverse the relative location of notes on the value axis - 0 by default
   * @param overscan {number} lookup X cycles outside of the cycles window to display notes in advance - 1 by default
   * @param hideNegative {boolean} hide notes with negative time (before starting playing the pattern) - 0 by default
   * @param smear {boolean} notes leave a solid trace - 0 by default
   * @param fold {boolean} notes takes the full value axis width - 0 by default
   * @param active {string} hexadecimal or CSS color of the active notes - defaults to #FFCA28
   * @param inactive {string} hexadecimal or CSS color of the inactive notes - defaults to #7491D2
   * @param background {string} hexadecimal or CSS color of the background - defaults to transparent
   * @param playheadColor {string} hexadecimal or CSS color of the line representing the play head - defaults to white
   * @param fill {boolean} notes are filled with color (otherwise only the label is displayed) - 0 by default
   * @param fillActive {boolean} active notes are filled with color - 0 by default
   * @param stroke {boolean} notes are shown with colored borders - 0 by default
   * @param strokeActive {boolean} active notes are shown with colored borders - 0 by default
   * @param hideInactive {boolean} only active notes are shown - 0 by default
   * @param colorizeInactive {boolean} use note color for inactive notes - 1 by default
   * @param fontFamily {string} define the font used by notes labels - defaults to 'monospace'
   * @param minMidi {integer} minimum note value to display on the value axis - defaults to 10
   * @param maxMidi {integer} maximum note value to display on the value axis - defaults to 90
   * @param autorange {boolean} automatically calculate the minMidi and maxMidi parameters - 0 by default
   * @example
   * note("c2 a2 eb2")
   * .euclid(5,8)
   * .s('sawtooth')
   * .lpenv(4).lpf(300)
   * .pianoroll({ labels: 1 })
   */
  punchcard(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: Arg[]): Pattern
  /**
   * Controls the pulsewidth of the pulse oscillator
   * @param pulsewidth {number | Pattern}
   * @example
   * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
   */
  pw(pulsewidth?: any, ...more: Arg[]): Pattern
  /**
   * Controls the lfo rate for the pulsewidth of the pulse oscillator
   * @param rate {number | Pattern}
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
   */
  pwrate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Controls the lfo sweep for the pulsewidth of the pulse oscillator
   * @param sweep {number | Pattern}
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
   */
  pwsweep(sweep?: any, ...more: Arg[]): Pattern
  /**
   * Query haps inside the given time span.
   * @param begin {Fraction | number} from time
   * @param end {Fraction | number} to time
   * @example
   * const pattern = sequence('a', ['b', 'c'])
   * const haps = pattern.queryArc(0, 1)
   * console.log(haps)
   * silence
   */
  queryArc(begin?: any, end?: any, ...more: Arg[]): Pattern
  r(...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1.
   * Returns a new pattern with values scaled to the given min/max range.
   * Most useful in combination with continuous patterns.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine.range(500,4000))
   */
  range(...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
   * Returns a new pattern with values scaled to the given min/max range.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine2.range2(500,4000))
   */
  range2(...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1
   * Returns a new pattern with values scaled to the given min/max range,
   * following an exponential curve.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine.rangex(500,4000))
   */
  rangex(...more: Arg[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.25, fn)
   * @example
   * s("hh*8").rarely(x=>x.speed("0.5"))
   */
  rarely(...more: Arg[]): Pattern
  /**
   * Allows dividing numbers via list notation using ":".
   * Returns a new pattern with just numbers.
   * @example
   * ratio("1, 5:4, 3:2").mul(110)
   * .freq().s("piano")
   */
  ratio(...more: Arg[]): Pattern
  /**
   * Reverb lowpass frequency at -60dB (in hertz).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rdim
   * @param frequency {number} between 0 and 20000hz
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
   */
  rdim(frequency?: any, ...more: Arg[]): Pattern
  real(...more: Arg[]): Pattern
  /**
   * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
   * Synonyms: rel
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
   */
  rel(time?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
   * Synonyms: rel
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
   */
  release(time?: any, ...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with haps containing undefined values removed from
   * query results.
   */
  removeUndefineds(...more: Arg[]): Pattern
  /**
   * Repeats each cycle the given number of times.
   * @example
   * note(irand(12).add(34)).segment(4).repeatCycles(2).s("gm_acoustic_guitar_nylon")
   */
  repeatCycles(...more: Arg[]): Pattern
  /**
   * Experimental
   * replicate is similar to fast in that it increases its density, but it also increases the step count
   * accordingly. So stepcat("a b".replicate(2), "c d") would be the same as "a b a b c d", whereas
   * stepcat("a b".fast(2), "c d") would be the same as "[a b] [a b] c d".
   * TODO: find out how this function differs from extend
   * @example
   * stepcat(
   *   sound("bd bd - cp").replicate(2),
   *   sound("bd - sd -")
   * ).pace(8)
   */
  replicate(...more: Arg[]): Pattern
  rescale(...more: Arg[]): Pattern
  /**
   * Resets the pattern to the start of the cycle for each onset of the reset pattern.
   * @example
   * s("[<bd lt> sd]*2, hh*8").reset("<x@3 x(5,8)>")
   */
  reset(...more: Arg[]): Pattern
  resetAll(...more: Arg[]): Pattern
  resetJoin(...more: Arg[]): Pattern
  /**
   * Controls the low-pass q-value.
   * Synonyms: resonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
   */
  resonance(q?: any, ...more: Arg[]): Pattern
  /**
   * Restarts the pattern for each onset of the restart pattern.
   * While reset will only reset the current cycle, restart will start from cycle 0.
   * @example
   * s("[<bd lt> sd]*2, hh*8").restart("<x@3 x(5,8)>")
   */
  restart(...more: Arg[]): Pattern
  restartAll(...more: Arg[]): Pattern
  restartJoin(...more: Arg[]): Pattern
  /**
   * Reverse all cycles in a pattern. See also revv for reversing a whole pattern.
   * @example
   * note("c d e g").rev()
   */
  rev(...more: Arg[]): Pattern
  /**
   * Reverse a whole pattern. See also rev for reversing each cycle.
   * @example
   * // This is the same as `<[g e] [d c]>`. If `rev()` is used, you get
   * // the same as `<[d c] [g e]>`, where each cycle reverses, but the order of
   * // cycles stays the same.
   * note("<[c d] [e g]>").revv()
   */
  revv(...more: Arg[]): Pattern
  /**
   * Reverb fade time (in seconds).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rfade
   * @param seconds {number} for the reverb to fade
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
   */
  rfade(seconds?: any, ...more: Arg[]): Pattern
  /**
   * Loops the pattern inside an offset for cycles.
   * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
   * Synonyms: rib
   * @param offset {number} start point of loop in cycles
   * @param cycles {number} loop length in cycles
   * @example
   * note("<c d e f>").ribbon(1, 2)
   * @example
   * // Looping a portion of randomness
   * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
   * @example
   * // rhythm generator
   * s("bd!16?").ribbon(29,.5)
   */
  rib(offset?: any, cycles?: any, ...more: Arg[]): Pattern
  /**
   * Loops the pattern inside an offset for cycles.
   * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
   * Synonyms: rib
   * @param offset {number} start point of loop in cycles
   * @param cycles {number} loop length in cycles
   * @example
   * note("<c d e f>").ribbon(1, 2)
   * @example
   * // Looping a portion of randomness
   * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
   * @example
   * // rhythm generator
   * s("bd!16?").ribbon(29,.5)
   */
  ribbon(offset?: any, cycles?: any, ...more: Arg[]): Pattern
  ring(...more: Arg[]): Pattern
  ringdf(...more: Arg[]): Pattern
  ringf(...more: Arg[]): Pattern
  /**
   * Reverb lowpass starting frequency (in hertz).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rlp
   * @param frequency {number} between 0 and 20000hz
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
   */
  rlp(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the level of reverb.
   * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
   * @param level {number | Pattern} between 0 and 1
   * @example
   * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
   * @example
   * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
   */
  room(level?: any, ...more: Arg[]): Pattern
  /**
   * Reverb lowpass frequency at -60dB (in hertz).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rdim
   * @param frequency {number} between 0 and 20000hz
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
   */
  roomdim(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Reverb fade time (in seconds).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rfade
   * @param seconds {number} for the reverb to fade
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
   */
  roomfade(seconds?: any, ...more: Arg[]): Pattern
  /**
   * Reverb lowpass starting frequency (in hertz).
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rlp
   * @param frequency {number} between 0 and 20000hz
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
   * @example
   * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
   */
  roomlp(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the room size of the reverb, see room.
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rsize, sz, size
   * @param size {number | Pattern} between 0 and 10
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(1)
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(4)
   */
  roomsize(size?: any, ...more: Arg[]): Pattern
  /**
   * Maps the chords of the incoming pattern to root notes in the given octave.
   * @param octave {octave} octave to use
   * @example
   * "<C^7 A7 Dm7 G7>".rootNotes(2).note()
   */
  rootNotes(octave?: any, ...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values rounded
   * to the nearest integer.
   * @example
   * n("0.5 1.5 2.5".round()).scale("C:major")
   */
  round(...more: Arg[]): Pattern
  /**
   * Sets the room size of the reverb, see room.
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rsize, sz, size
   * @param size {number | Pattern} between 0 and 10
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(1)
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(4)
   */
  rsize(size?: any, ...more: Arg[]): Pattern
  /**
   * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
   * separated by ':'.
   * Synonyms: sound
   * @param sound {string | Pattern} The sound / pattern of sounds to pick
   * @example
   * s("bd hh")
   * @example
   * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
   */
  s(sound?: any, ...more: Arg[]): Pattern
  s_add(...more: Arg[]): Pattern
  s_contract(...more: Arg[]): Pattern
  s_expand(...more: Arg[]): Pattern
  s_extend(...more: Arg[]): Pattern
  s_sub(...more: Arg[]): Pattern
  s_taper(...more: Arg[]): Pattern
  s_taperlist(...more: Arg[]): Pattern
  s_tour(...more: Arg[]): Pattern
  /**
   * Turns numbers into notes in the scale (zero indexed) or quantizes notes to a scale.
   * When describing notes via numbers, note that negative numbers can be used to wrap backwards
   * in the scale as well as sharps or flats to produce notes outside of the scale.
   * Also sets scale for other scale operations, like {@link Pattern#scaleTranspose}.
   * A scale consists of a root note (e.g. c4, c, f#, bb4) followed by semicolon (':') and then a scale type.
   * The scale name must be written without spaces (because it would be interpreted as a multi-step pattern otherwise).
   * If your scale name includes spaces, replace them with colons.
   * The root note defaults to octave 3, if no octave number is given.
   * @param scale {string} Name of scale
   * @example
   * n("0 2 4 6 4 2").scale("C:major")
   * @example
   * n("[0,7] 4 [2,7] 4")
   * .scale("C:<major minor>/2")
   * .s("piano")
   * @example
   * n(rand.range(0,12).segment(8))
   * .scale("C:ritusen")
   * .s("piano")
   * @example
   * n("<[0,7b] [-4# -4] [-2,7##] 4 [0,7] [-4# -4b] [-2,7###] 4b>*4")
   * .scale("C:<major minor>/2")
   * .s("piano")
   * @example
   * note("C1*16").transpose(irand(36)).scale('Cb2 major').scaleTranspose(3)
   * @example
   * n("[0 0] [1 2] [3 4] [5 6]").scale("C:major:blues")
   */
  scale(scale?: any, ...more: Arg[]): Pattern
  /**
   * Transposes notes inside the scale by the number of steps.
   * Expected to be called on a Pattern which already has a {@link Pattern#scale}
   * Synonyms: scaleTrans, strans
   * @param offset {offset} number of steps inside the scale
   * @example
   * "-8 [2,4,6]"
   * .scale('C4 bebop major')
   * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
   * .note()
   */
  scaleTrans(offset?: any, ...more: Arg[]): Pattern
  /**
   * Transposes notes inside the scale by the number of steps.
   * Expected to be called on a Pattern which already has a {@link Pattern#scale}
   * Synonyms: scaleTrans, strans
   * @param offset {offset} number of steps inside the scale
   * @example
   * "-8 [2,4,6]"
   * .scale('C4 bebop major')
   * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
   * .note()
   */
  scaleTranspose(offset?: any, ...more: Arg[]): Pattern
  /**
   * Renders an oscilloscope for the time domain of the audio signal.
   * Synonyms: tscope
   * @param config {object} optional config with options:
   * @param align {boolean} if 1, the scope will be aligned to the first zero crossing. defaults to 1
   * @param color {string} line color as hex or color name. defaults to white.
   * @param thickness {number} line thickness. defaults to 3
   * @param scale {number} scales the y-axis. Defaults to 0.25
   * @param pos {number} y-position relative to screen height. 0 = top, 1 = bottom of screen
   * @param trigger {number} amplitude value that is used to align the scope. defaults to 0.
   * @example
   * s("sawtooth")._scope()
   */
  scope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: Arg[]): Pattern
  scram(...more: Arg[]): Pattern
  /**
   * Slices a pattern into the given number of parts, then plays those parts at random. Similar to shuffle,
   * but parts might be played more than once, or not at all, per cycle.
   * @example
   * note("c d e f").sound("piano").scramble(4)
   * @example
   * seq("c d e f".scramble(4), "g").note().sound("piano")
   */
  scramble(...more: Arg[]): Pattern
  /**
   * Allows you to scrub an audio file like a tape loop by passing values that represents the position in the audio file
   * in the optional array syntax ex: "0.5:2", the second value controls the speed of playback
   * @example
   * samples('github:switchangel/pad')
   * s("swpad:0").scrub("{0.1!2 .25@3 0.7!2 <0.8:1.5>}%8")
   * @example
   * samples('github:yaxu/clean-breaks/main');
   * s("amen/4").fit().scrub("{0@3 0@2 4@3}%8".div(16))
   */
  scrub(...more: Arg[]): Pattern
  seconds(...more: Arg[]): Pattern
  /**
   * Change the seed for random signals. Normally, random signals depend on time,
   * so two patterns at the same time will have the same random values. Specifying
   * a new seed changes the signal output by rand. This also affects other functions
   * that use randomness, like shuffle and sometimes.
   * @param n {number} A new seed. Can be any number.
   * @example
   * $: s("hh*4").degrade();
   * $: s("bd*4").degrade().seed(1); // Will degrade different events from the hi-hat
   */
  seed(n?: any, ...more: Arg[]): Pattern
  /**
   * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
   * Synonyms: seg
   * @param segments {number} number of segments per cycle
   * @example
   * note(saw.range(40,52).segment(24))
   */
  seg(segments?: any, ...more: Arg[]): Pattern
  /**
   * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
   * Synonyms: seg
   * @param segments {number} number of segments per cycle
   * @example
   * note(saw.range(40,52).segment(24))
   */
  segment(segments?: any, ...more: Arg[]): Pattern
  semitone(...more: Arg[]): Pattern
  /**
   * Like cat, but the items are crammed into one cycle.
   * Synonyms: sequence, fastcat
   * @example
   * seq("e5", "b4", ["d5", "c5"]).note()
   * // "e5 b4 [d5 c5]".note()
   * @example
   * // As a chained function:
   * s("hh*4").seq(
   *   note("c4(5,8)")
   * )
   */
  seq(...more: Arg[]): Pattern
  /**
   * See fastcat
   */
  sequence(...more: Arg[]): Pattern
  set(...more: Arg[]): Pattern
  /**
   * Returns a new pattern with the context field set to every hap set to the given value.
   * @param context {*}
   */
  setContext(context?: any, ...more: Arg[]): Pattern
  setSteps(...more: Arg[]): Pattern
  /**
   * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
   * Please use distort instead, which has a more predictable response curve
   * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
   * @param distortion {number | Pattern} between 0 and 1
   * @example
   * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
   */
  shape(distortion?: any, ...more: Arg[]): Pattern
  /**
   * Experimental
   * Progressively shrinks the pattern by 'n' steps until there's nothing left, or if a second value is given (using mininotation list syntax with :),
   * that number of times.
   * A positive number will progressively drop steps from the start of a pattern, and a negative number from the end.
   * @example
   * "tha dhi thom nam".shrink("1").sound()
   * .bank("mridangam")
   * @example
   * "tha dhi thom nam".shrink("-1").sound()
   * .bank("mridangam")
   * @example
   * "tha dhi thom nam".shrink("1 -1").sound().bank("mridangam").pace(4)
   * @example
   * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
   *    .shrink("1 -1").pace(8)
   */
  shrink(...more: Arg[]): Pattern
  shrinklist(...more: Arg[]): Pattern
  /**
   * Slices a pattern into the given number of parts, then plays those parts in random order.
   * Each part will be played exactly once per cycle.
   * @example
   * note("c d e f").sound("piano").shuffle(4)
   * @example
   * seq("c d e f".shuffle(4), "g").note().sound("piano")
   */
  shuffle(...more: Arg[]): Pattern
  /**
   * Wavefolding distortion composed with sinusoid
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  sinefold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  /**
   * Sets the room size of the reverb, see room.
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rsize, sz, size
   * @param size {number | Pattern} between 0 and 10
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(1)
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(4)
   */
  size(size?: any, ...more: Arg[]): Pattern
  /**
   * Chops samples into the given number of slices, triggering those slices with a given pattern of slice numbers.
   * Instead of a number, it also accepts a list of numbers from 0 to 1 to slice at specific points.
   * @example
   * samples('github:tidalcycles/dirt-samples')
   * s("breaks165").slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, rev)).slow(0.75)
   * @example
   * samples('github:tidalcycles/dirt-samples')
   * s("breaks125").fit().slice([0,.25,.5,.75], "0 1 1 <2 3>")
   */
  slice(...more: Arg[]): Pattern
  slide(...more: Arg[]): Pattern
  /**
   * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
   * Synonyms: sparsity
   * @param factor {number | Pattern} slow down factor
   * @example
   * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
   */
  slow(factor?: any, ...more: Arg[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  slowChunk(...more: Arg[]): Pattern
  /**
   * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
   * Synonyms: cat
   * @example
   * slowcat("e5", "b4", ["d5", "c5"])
   */
  slowcat(...more: Arg[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  slowchunk(...more: Arg[]): Pattern
  smear(...more: Arg[]): Pattern
  /**
   * Soft-clipping distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  soft(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  /**
   * Shorthand for .someCyclesBy(0.5, fn)
   * @example
   * s("bd,hh*8").someCycles(x=>x.speed("0.5"))
   */
  someCycles(...more: Arg[]): Pattern
  /**
   * Randomly applies the given function by the given probability on a cycle by cycle basis.
   * Similar to sometimesBy
   * @param probability {number | Pattern} a number between 0 and 1
   * @param function {function} the transformation to apply
   * @example
   * s("bd,hh*8").someCyclesBy(.3, x=>x.speed("0.5"))
   */
  someCyclesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Applies the given function with a 50% chance
   * @param function {function} the transformation to apply
   * @example
   * s("hh*8").sometimes(x=>x.speed("0.5"))
   */
  sometimes(function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Randomly applies the given function by the given probability.
   * Similar to someCyclesBy
   * @param probability {number | Pattern} a number between 0 and 1
   * @param function {function} the transformation to apply
   * @example
   * s("hh*8").sometimesBy(.4, x=>x.speed("0.5"))
   */
  sometimesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  songPtr(...more: Arg[]): Pattern
  /**
   * Returns a new pattern, which returns haps sorted in temporal order. Mainly
   * of use when comparing two patterns for equality, in tests.
   */
  sortHapsByPart(...more: Arg[]): Pattern
  /**
   * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
   * separated by ':'.
   * Synonyms: sound
   * @param sound {string | Pattern} The sound / pattern of sounds to pick
   * @example
   * s("bd hh")
   * @example
   * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
   */
  sound(sound?: any, ...more: Arg[]): Pattern
  soundfont(...more: Arg[]): Pattern
  /**
   * Define a custom webaudio node to use as a sound source.
   * Synonyms: src
   * @param getSource {function}
   */
  source(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
   * Synonyms: sparsity
   * @param factor {number | Pattern} slow down factor
   * @example
   * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
   */
  sparsity(factor?: any, ...more: Arg[]): Pattern
  speak(...more: Arg[]): Pattern
  /**
   * Renders a spectrum analyzer for the incoming audio signal.
   * @param config {object} optional config with options:
   * @param thickness {integer} line thickness in px (default 3)
   * @param speed {integer} scroll speed (default 1)
   * @param min {integer} min db (default -80)
   * @param max {integer} max db (default 0)
   * @example
   * n("<0 4 <2 3> 1>*3")
   * .off(1/8, add(n(5)))
   * .off(1/5, add(n(7)))
   * .scale("d3:minor:pentatonic")
   * .s('sine')
   * .dec(.3).room(.5)
   * ._spectrum()
   */
  spectrum(config?: any, thickness?: any, speed?: any, min?: any, max?: any, ...more: Arg[]): Pattern
  /**
   * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
   * @param speed {number | Pattern} inf to inf, negative numbers play the sample backwards.
   * @example
   * s("bd*6").speed("1 2 4 1 -2 -4")
   * @example
   * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
   */
  speed(speed?: any, ...more: Arg[]): Pattern
  /**
   * Displays a spiral visual.
   * @param options {Object} Object containing all the optional following parameters as key value pairs:
   * @param stretch {number} controls the rotations per cycle ratio, where 1 = 1 cycle / 360 degrees
   * @param size {number} the diameter of the spiral
   * @param thickness {number} line thickness
   * @param cap {string} style of line ends: butt (default), round, square
   * @param inset {string} number of rotations before spiral starts (default 3)
   * @param playheadColor {string} color of playhead, defaults to white
   * @param playheadLength {number} length of playhead in rotations, defaults to 0.02
   * @param playheadThickness {number} thickness of playheadrotations, defaults to thickness
   * @param padding {number} space around spiral
   * @param steady {number} steadyness of spiral vs playhead. 1 = spiral doesn't move, playhead does.
   * @param activeColor {number} color of active segment. defaults to foreground of theme
   * @param inactiveColor {number} color of inactive segments. defaults to gutterForeground of theme
   * @param colorizeInactive {boolean} wether or not to colorize inactive segments, defaults to 0
   * @param fade {boolean} wether or not past and future should fade out. defaults to 1
   * @param logSpiral {boolean} wether or not the spiral should be logarithmic. defaults to 0
   * @example
   * note("c2 a2 eb2")
   * .euclid(5,8)
   * .s('sawtooth')
   * .lpenv(4).lpf(300)
   * ._spiral({ steady: .96 })
   */
  spiral(options?: any, stretch?: any, size?: any, thickness?: any, cap?: any, inset?: any, playheadColor?: any, playheadLength?: any, playheadThickness?: any, padding?: any, steady?: any, activeColor?: any, inactiveColor?: any, colorizeInactive?: any, fade?: any, logSpiral?: any, ...more: Arg[]): Pattern
  /**
   * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
   * @example
   * samples('github:tidalcycles/dirt-samples')
   * s("breaks165")
   * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
   */
  splice(...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with queries split at cycle boundaries. This makes
   * some calculations easier to express, as all haps are then constrained to
   * happen within a cycle.
   */
  splitQueries(...more: Arg[]): Pattern
  /**
   * Set the stereo pan spread for supported oscillators
   * @param spread {number | Pattern} between 0 and 1
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
   */
  spread(spread?: any, ...more: Arg[]): Pattern
  /**
   * Pick from the list of values (or patterns of values) via the index using the given
   * pattern of integers. The selected pattern will be compressed to fit the duration of the selecting event
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * note(squeeze("<0@2 [1!2] 2>", ["g a", "f g f g" , "g a c d"]))
   */
  squeeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  squeezeBind(...more: Arg[]): Pattern
  squeezeJoin(...more: Arg[]): Pattern
  squeezeout(...more: Arg[]): Pattern
  /**
   * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
   * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
   * @param squiz {number | Pattern} Try passing multiples of 2 to it - 2, 4, 8 etc.
   * @example
   * squiz("2 4/2 6 [8 16]").s("bd").osc()
   */
  squiz(squiz?: any, ...more: Arg[]): Pattern
  /**
   * Define a custom webaudio node to use as a sound source.
   * Synonyms: src
   * @param getSource {function}
   */
  src(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * The given items are played at the same time at the same length.
   * Synonyms: polyrhythm, pr
   * @example
   * stack("g3", "b3", ["e4", "d4"]).note()
   * // "g3,b3,[e4 d4]".note()
   * @example
   * // As a chained function:
   * s("hh*4").stack(
   *   note("c4(5,8)")
   * )
   */
  stack(...more: Arg[]): Pattern
  stepBind(...more: Arg[]): Pattern
  stepJoin(...more: Arg[]): Pattern
  steps(...more: Arg[]): Pattern
  stepsPerOctave(...more: Arg[]): Pattern
  /**
   * Transposes notes inside the scale by the number of steps.
   * Expected to be called on a Pattern which already has a {@link Pattern#scale}
   * Synonyms: scaleTrans, strans
   * @param offset {offset} number of steps inside the scale
   * @example
   * "-8 [2,4,6]"
   * .scale('C4 bebop major')
   * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
   * .note()
   */
  strans(offset?: any, ...more: Arg[]): Pattern
  /**
   * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
   * @param factor {number | Pattern} inf to inf, negative numbers play the sample backwards.
   * @example
   * s("gm_flute").stretch("1 2 .5")
   */
  stretch(factor?: any, ...more: Arg[]): Pattern
  /**
   * Cuts each sample into the given number of parts, triggering progressive portions of each sample at each loop.
   * @example
   * s("numbers:0 numbers:1 numbers:2").striate(6).slow(3)
   */
  striate(...more: Arg[]): Pattern
  /**
   * Returns a new pattern with the context field of every hap set to an empty object.
   */
  stripContext(...more: Arg[]): Pattern
  /**
   * Applies the given structure to the pattern:
   * @example
   * note("c,eb,g")
   *   .struct("x ~ x ~ ~ x ~ x ~ ~ ~ x ~ x ~ ~")
   *   .slow(2)
   */
  struct(...more: Arg[]): Pattern
  structAll(...more: Arg[]): Pattern
  /**
   * Deprecated. Like echo, but the last 2 parameters are flipped.
   * @param times {number} how many times to repeat
   * @param feedback {number} velocity multiplicator for each iteration
   * @param time {number} cycle offset between iterations
   * @example
   * s("bd sd").stut(3, .8, 1/6)
   */
  stut(times?: any, feedback?: any, time?: any, ...more: Arg[]): Pattern
  /**
   * Superimpose and offset multiple times, applying the given function each time.
   * Synonyms: echowith, stutWith, stutwith
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .echoWith(4, 1/8, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  stutWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Superimpose and offset multiple times, applying the given function each time.
   * Synonyms: echowith, stutWith, stutwith
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param func {function} function to apply, given the pattern and the iteration index
   * @example
   * "<0 [2 4]>"
   * .echoWith(4, 1/8, (p,n) => p.add(n*2))
   * .scale("C:minor").note()
   */
  stutwith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Like add, but the given numbers are subtracted.
   * @example
   * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
   * // See add for more information.
   */
  sub(...more: Arg[]): Pattern
  /**
   * Superimposes the result of the given function(s) on top of the original pattern:
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .superimpose(x=>x.add(2))
   *   .scale('C minor').note()
   */
  superimpose(...more: Arg[]): Pattern
  supradough(...more: Arg[]): Pattern
  /**
   * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
   * Synonyms: sus
   * @param gain {number | Pattern} sustain level between 0 and 1
   * @example
   * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
   */
  sus(gain?: any, ...more: Arg[]): Pattern
  /**
   * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
   * Synonyms: sus
   * @param gain {number | Pattern} sustain level between 0 and 1
   * @example
   * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
   */
  sustain(gain?: any, ...more: Arg[]): Pattern
  sustainpedal(...more: Arg[]): Pattern
  /**
   * Shorthand for swingBy with 1/3:
   * @param subdivision {number}
   * @example
   * s("hh*8").swing(4)
   * // s("hh*8").swingBy(1/3, 4)
   */
  swing(subdivision?: any, ...more: Arg[]): Pattern
  /**
   * The function swingBy x n breaks each cycle into n slices, and then delays events in the second half of each slice by the amount x, which is relative to the size of the (half) slice. So if x is 0 it does nothing, 0.5 delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
   * @param subdivision {number}
   * @param offset {number}
   * @example
   * s("hh*8").swingBy(1/3, 4)
   */
  swingBy(subdivision?: any, offset?: any, ...more: Arg[]): Pattern
  /**
   * MIDI sysex: Sends a MIDI sysex message.
   * @param id {number | Pattern} Sysex ID
   * @param data {number | Pattern} Sysex data
   * @example
   * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
   */
  sysex(id?: any, data?: any, ...more: Arg[]): Pattern
  /**
   * MIDI sysex data: Sends a MIDI sysex message.
   * @param data {number | Pattern} Sysex data
   * @example
   * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
   */
  sysexdata(data?: any, ...more: Arg[]): Pattern
  /**
   * MIDI sysex ID: Sends a MIDI sysex identifier message.
   * @param id {number | Pattern} Sysex ID
   * @example
   * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
   */
  sysexid(id?: any, ...more: Arg[]): Pattern
  /**
   * Sets the room size of the reverb, see room.
   * When this property is changed, the reverb will be recaculated, so only change this sparsely..
   * Synonyms: rsize, sz, size
   * @param size {number | Pattern} between 0 and 10
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(1)
   * @example
   * s("bd sd [~ bd] sd").room(.8).rsize(4)
   */
  sz(size?: any, ...more: Arg[]): Pattern
  /**
   * Tags each Hap with an identifier. Good for filtering. The function populates Hap.context.tags (Array).
   * @param tag {string} anything unique
   * @example
   * s("saw!16").note("F1")
   *   .lpf(tri.range(40, 80).slow(4)).lpenv(5).lpq(4).lpd(0.15)
   *   .when(rand.late(0.1).gte(0.5), x => x.transpose("12").tag('altered'))
   *   .when(rand.late(0.2).gte(0.5), x => x.s("square").tag('altered'))
   *   .when("<0 1>", x => x.filter((hap) => hap.hasTag('altered')))
   */
  tag(tag?: any, ...more: Arg[]): Pattern
  /**
   * Experimental
   * Takes the given number of steps from a pattern (dropping the rest).
   * A positive number will take steps from the start of a pattern, and a negative number from the end.
   * @example
   * "bd cp ht mt".take("2").sound()
   * // The same as "bd cp".sound()
   * @example
   * "bd cp ht mt".take("1 2 3").sound()
   * // The same as "bd bd cp bd cp ht".sound()
   * @example
   * "bd cp ht mt".take("-1 -2 -3").sound()
   * // The same as "mt ht mt cp ht mt".sound()
   */
  take(...more: Arg[]): Pattern
  timeline(...more: Arg[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 ..
   *
   * Returns a new pattern with values scaled to the bipolar range -1 .. 1
   */
  toBipolar(...more: Arg[]): Pattern
  /**
   * Experimental
   * Inserts a pattern into a list of patterns. On the first repetition it will be inserted at the end of the list, then moved backwards through the list
   * on successive repetitions. The patterns are added together stepwise, with all repetitions taking place over a single cycle. Using pace to set the
   * number of steps per cycle is therefore usually recommended.
   * @example
   * "[c g]".tour("e f", "e f g", "g f e c").note()
   *    .sound("folkharp")
   *    .pace(8)
   */
  tour(...more: Arg[]): Pattern
  /**
   * Change the pitch of each value by the given amount. Expects numbers or note strings as values.
   * The amount can be given as a number of semitones or as a string in interval short notation.
   * If you don't care about enharmonic correctness, just use numbers. Otherwise, pass the interval of
   * the form: ST where S is the degree number and T the type of interval with
   *
   * M = major
   * m = minor
   * P = perfect
   * A = augmented
   * d = diminished
   *
   * Examples intervals:
   *
   * 1P = unison
   * 3M = major third
   * 3m = minor third
   * 4P = perfect fourth
   * 4A = augmented fourth
   * 5P = perfect fifth
   * 5d = diminished fifth
   * Synonyms: trans
   * @param amount {string | number} Either number of semitones or interval string.
   * @example
   * "c2 c3".fast(2).transpose("<0 -2 5 3>".slow(2)).note()
   * @example
   * "c2 c3".fast(2).transpose("<1P -2M 4P 3m>".slow(2)).note()
   */
  trans(amount?: any, ...more: Arg[]): Pattern
  /**
   * Transient shaper. Gives independent control over the emphasis on transients
   * and sustains
   * @param attack {number | Pattern} Emphasis on transients; between -1 (deaccentuate) and 1 (accentuate)
   * @param sustain {number | Pattern} Emphasis on the sustains; between -1 (deaccentuate) and 1 (accentuate)
   * @example
   * s("bd").transient("<-1 -0.5 0 0.5 1>")
   * @example
   * s("hh*16").bank("tr909").transient("<-1:1 1:-1>")
   */
  transient(attack?: any, sustain?: any, ...more: Arg[]): Pattern
  /**
   * Change the pitch of each value by the given amount. Expects numbers or note strings as values.
   * The amount can be given as a number of semitones or as a string in interval short notation.
   * If you don't care about enharmonic correctness, just use numbers. Otherwise, pass the interval of
   * the form: ST where S is the degree number and T the type of interval with
   *
   * M = major
   * m = minor
   * P = perfect
   * A = augmented
   * d = diminished
   *
   * Examples intervals:
   *
   * 1P = unison
   * 3M = major third
   * 3m = minor third
   * 4P = perfect fourth
   * 4A = augmented fourth
   * 5P = perfect fifth
   * 5d = diminished fifth
   * Synonyms: trans
   * @param amount {string | number} Either number of semitones or interval string.
   * @example
   * "c2 c3".fast(2).transpose("<0 -2 5 3>".slow(2)).note()
   * @example
   * "c2 c3".fast(2).transpose("<1P -2M 4P 3m>".slow(2)).note()
   */
  transpose(amount?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: trem
   * @param speed {number | Pattern} modulation speed in HZ
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
   */
  trem(speed?: any, ...more: Arg[]): Pattern
  /**
   * Depth of amplitude modulation
   * Synonyms: tremdepth
   * @param depth {number | Pattern}
   * @example
   * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
   */
  tremdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: trem
   * @param speed {number | Pattern} modulation speed in HZ
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
   */
  tremolo(speed?: any, ...more: Arg[]): Pattern
  /**
   * Depth of amplitude modulation
   * Synonyms: tremdepth
   * @param depth {number | Pattern}
   * @example
   * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
   */
  tremolodepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Alter the phase of the modulation waveform
   * Synonyms: tremphase
   * @param offset {number | Pattern} the offset in cycles of the modulation
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
   */
  tremolophase(offset?: any, ...more: Arg[]): Pattern
  /**
   * Shape of amplitude modulation
   * Synonyms: tremshape
   * @param shape {number | Pattern} tri | square | sine | saw | ramp
   * @example
   * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
   */
  tremoloshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Alter the shape of the modulation waveform
   * Synonyms: tremskew
   * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
   */
  tremoloskew(amount?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: tremsync
   * @param cycles {number | Pattern} modulation speed in cycles
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
   */
  tremolosync(cycles?: any, ...more: Arg[]): Pattern
  /**
   * Alter the phase of the modulation waveform
   * Synonyms: tremphase
   * @param offset {number | Pattern} the offset in cycles of the modulation
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
   */
  tremphase(offset?: any, ...more: Arg[]): Pattern
  /**
   * Shape of amplitude modulation
   * Synonyms: tremshape
   * @param shape {number | Pattern} tri | square | sine | saw | ramp
   * @example
   * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
   */
  tremshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Alter the shape of the modulation waveform
   * Synonyms: tremskew
   * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
   */
  tremskew(amount?: any, ...more: Arg[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: tremsync
   * @param cycles {number | Pattern} modulation speed in cycles
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
   */
  tremsync(cycles?: any, ...more: Arg[]): Pattern
  triode(...more: Arg[]): Pattern
  /**
   * Renders an oscilloscope for the time domain of the audio signal.
   * Synonyms: tscope
   * @param config {object} optional config with options:
   * @param align {boolean} if 1, the scope will be aligned to the first zero crossing. defaults to 1
   * @param color {string} line color as hex or color name. defaults to white.
   * @param thickness {number} line thickness. defaults to 3
   * @param scale {number} scales the y-axis. Defaults to 0.25
   * @param pos {number} y-position relative to screen height. 0 = top, 1 = bottom of screen
   * @param trigger {number} amplitude value that is used to align the scope. defaults to 0.
   * @example
   * s("sawtooth")._scope()
   */
  tscope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: Arg[]): Pattern
  tsdelay(...more: Arg[]): Pattern
  uid(...more: Arg[]): Pattern
  /**
   * Inverse of degrade: Randomly removes 50% of events from the pattern. Shorthand for .undegradeBy(0.5)
   * Events that would be removed by degrade are let through by undegrade and vice versa (see second example).
   * @example
   * s("hh*8").undegrade()
   * @example
   * s("hh*10").layer(
   *   x => x.degrade().pan(0),
   *   x => x.undegrade().pan(1)
   * )
   */
  undegrade(...more: Arg[]): Pattern
  /**
   * Inverse of degradeBy: Randomly removes events from the pattern by a given amount.
   * 0 = 100% chance of removal
   * 1 = 0% chance of removal
   * Events that would be removed by degradeBy are let through by undegradeBy and vice versa (see second example).
   * @param amount {number} a number between 0 and 1
   * @example
   * s("hh*8").undegradeBy(0.2)
   * @example
   * s("hh*10").layer(
   *   x => x.degradeBy(0.2).pan(0),
   *   x => x.undegradeBy(0.8).pan(1)
   * )
   */
  undegradeBy(amount?: any, ...more: Arg[]): Pattern
  /**
   * Set number of stacked voices for supported oscillators
   * @param numvoices {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
   */
  unison(numvoices?: any, ...more: Arg[]): Pattern
  /**
   * Used in conjunction with speed, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using unit "c" means speed will be interpreted in units of cycles, e.g. speed "1" means samples will be stretched to fill a cycle. Using unit "s" means the playback speed will be adjusted so that the duration is the number of seconds specified by speed.
   * @param unit {number | string | Pattern} see description above
   * @example
   * speed("1 2 .5 3").s("bd").unit("c").osc()
   */
  unit(unit?: any, ...more: Arg[]): Pattern
  unjoin(...more: Arg[]): Pattern
  /**
   * Applies a vibrato to the frequency of the oscillator.
   * Synonyms: vibrato, v
   * @param frequency {number | Pattern} of the vibrato in hertz
   * @example
   * note("a e")
   * .vib("<.5 1 2 4 8 16>")
   * ._scope()
   * @example
   * // change the modulation depth with ":"
   * note("a e")
   * .vib("<.5 1 2 4 8 16>:12")
   * ._scope()
   */
  v(frequency?: any, ...more: Arg[]): Pattern
  val(...more: Arg[]): Pattern
  /**
   * Sets the velocity from 0 to 1. Is multiplied together with gain.
   * Synonyms: vel
   * @example
   * s("hh*8")
   * .gain(".4!2 1 .4!2 1 .4 1")
   * .velocity(".4 1")
   */
  vel(...more: Arg[]): Pattern
  /**
   * Sets the velocity from 0 to 1. Is multiplied together with gain.
   * Synonyms: vel
   * @example
   * s("hh*8")
   * .gain(".4!2 1 .4!2 1 .4 1")
   * .velocity(".4 1")
   */
  velocity(...more: Arg[]): Pattern
  /**
   * Applies a vibrato to the frequency of the oscillator.
   * Synonyms: vibrato, v
   * @param frequency {number | Pattern} of the vibrato in hertz
   * @example
   * note("a e")
   * .vib("<.5 1 2 4 8 16>")
   * ._scope()
   * @example
   * // change the modulation depth with ":"
   * note("a e")
   * .vib("<.5 1 2 4 8 16>:12")
   * ._scope()
   */
  vib(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the vibrato depth in semitones. Only has an effect if vibrato | vib | v is is also set
   * Synonyms: vmod
   * @param depth {number | Pattern} of vibrato (in semitones)
   * @example
   * note("a e").vib(4)
   * .vibmod("<.25 .5 1 2 12>")
   * ._scope()
   * @example
   * // change the vibrato frequency with ":"
   * note("a e")
   * .vibmod("<.25 .5 1 2 12>:8")
   * ._scope()
   */
  vibmod(depth?: any, ...more: Arg[]): Pattern
  /**
   * Applies a vibrato to the frequency of the oscillator.
   * Synonyms: vibrato, v
   * @param frequency {number | Pattern} of the vibrato in hertz
   * @example
   * note("a e")
   * .vib("<.5 1 2 4 8 16>")
   * ._scope()
   * @example
   * // change the modulation depth with ":"
   * note("a e")
   * .vib("<.5 1 2 4 8 16>:12")
   * ._scope()
   */
  vibrato(frequency?: any, ...more: Arg[]): Pattern
  /**
   * Sets the vibrato depth in semitones. Only has an effect if vibrato | vib | v is is also set
   * Synonyms: vmod
   * @param depth {number | Pattern} of vibrato (in semitones)
   * @example
   * note("a e").vib(4)
   * .vibmod("<.25 .5 1 2 12>")
   * ._scope()
   * @example
   * // change the vibrato frequency with ":"
   * note("a e")
   * .vibmod("<.25 .5 1 2 12>:8")
   * ._scope()
   */
  vmod(depth?: any, ...more: Arg[]): Pattern
  voice(...more: Arg[]): Pattern
  /**
   * Turns chord symbols into voicings. You can use the following control params:
   *
   * chord: Note, followed by chord symbol, e.g. C Am G7 Bb^7
   * dict: voicing dictionary to use, falls back to default dictionary
   * anchor: the note that is used to align the chord
   * mode: how the voicing is aligned to the anchor
   *
   * below: top note <= anchor
   * duck: top note <= anchor, anchor excluded
   * above: bottom note >= anchor
   *
   *
   * offset: whole number that shifts the voicing up or down to the next voicing
   * n: if set, the voicing is played like a scale. Overshooting numbers will be octaved
   *
   * All of the above controls are optional, except chord.
   * If you pass a pattern of strings to voicing, they will be interpreted as chords.
   * @example
   * n("0 1 2 3").chord("<C Am F G>").voicing()
   */
  voicing(...more: Arg[]): Pattern
  /**
   * DEPRECATED: still works, but it is recommended you use .voicing instead (without s).
   * Turns chord symbols into voicings, using the smoothest voice leading possible.
   * Uses chord-voicings package.
   * @param dictionary {string} which voicing dictionary to use.
   * @example
   * stack("<C^7 A7 Dm7 G7>".voicings('lefthand'), "<C3 A2 D3 G2>").note()
   */
  voicings(dictionary?: any, ...more: Arg[]): Pattern
  /**
   * Formant filter to make things sound like vowels.
   * @param vowel {string | Pattern} You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
   * @example
   * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
   * .vowel("<a e i <o u>>")
   * @example
   * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
   */
  vowel(vowel?: any, ...more: Arg[]): Pattern
  w(...more: Arg[]): Pattern
  /**
   * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
   * Synonyms: wavetableWarp
   * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
   * @example
   * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("spin")
   */
  warp(amount?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of the wavetable oscillator's warp envelope
   * Synonyms: warpatt
   * @param time {number | Pattern} attack time in seconds
   */
  warpatt(time?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of the wavetable oscillator's warp envelope
   * Synonyms: warpatt
   * @param time {number | Pattern} attack time in seconds
   */
  warpattack(time?: any, ...more: Arg[]): Pattern
  /**
   * DC offset of the LFO for the wavetable oscillator's warp
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  warpdc(dcoffset?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of the wavetable oscillator's warp envelope
   * Synonyms: warpdec
   * @param time {number | Pattern} decay time in seconds
   */
  warpdec(time?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of the wavetable oscillator's warp envelope
   * Synonyms: warpdec
   * @param time {number | Pattern} decay time in seconds
   */
  warpdecay(time?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the wavetable oscillator's warp
   * @param depth {number | Pattern} depth of modulation
   */
  warpdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Amount of envelope applied wavetable oscillator's position envelope
   * @param amount {number | Pattern} between 0 and 1
   */
  warpenv(amount?: any, ...more: Arg[]): Pattern
  /**
   * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
   * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
   * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
   * Synonyms: wavetableWarpMode
   * @param mode {number | string | Pattern} Warp mode
   * @example
   * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
   */
  warpmode(mode?: any, ...more: Arg[]): Pattern
  /**
   * Rate of the LFO for the wavetable oscillator's warp
   * @param rate {number | Pattern} rate in hertz
   */
  warprate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Release time of the wavetable oscillator's warp envelope
   * Synonyms: warprel
   * @param time {number | Pattern} release time in seconds
   */
  warprel(time?: any, ...more: Arg[]): Pattern
  /**
   * Release time of the wavetable oscillator's warp envelope
   * Synonyms: warprel
   * @param time {number | Pattern} release time in seconds
   */
  warprelease(time?: any, ...more: Arg[]): Pattern
  /**
   * Shape of the LFO for the wavetable oscillator's warp
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  warpshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Skew of the LFO for the wavetable oscillator's warp
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  warpskew(skew?: any, ...more: Arg[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's warp envelope
   * Synonyms: warpsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  warpsus(gain?: any, ...more: Arg[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's warp envelope
   * Synonyms: warpsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  warpsustain(gain?: any, ...more: Arg[]): Pattern
  /**
   * cycle synced rate of the LFO for the wavetable warp position
   * @param rate {number | Pattern} rate in cycles
   */
  warpsync(rate?: any, ...more: Arg[]): Pattern
  waveloss(...more: Arg[]): Pattern
  /**
   * Amount of randomness of the initial phase of the wavetable oscillator.
   * Synonyms: wavetablePhaseRand
   * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
   * @example
   * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
   */
  wavetablePhaseRand(amount?: any, ...more: Arg[]): Pattern
  /**
   * Position in the wavetable of the wavetable oscillator
   * Synonyms: wavetablePosition
   * @param position {number | Pattern} Position in the wavetable from 0 to 1
   * @example
   * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
   */
  wavetablePosition(position?: any, ...more: Arg[]): Pattern
  /**
   * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
   * Synonyms: wavetableWarp
   * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
   * @example
   * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("spin")
   */
  wavetableWarp(amount?: any, ...more: Arg[]): Pattern
  /**
   * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
   * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
   * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
   * Synonyms: wavetableWarpMode
   * @param mode {number | string | Pattern} Warp mode
   * @example
   * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
   */
  wavetableWarpMode(mode?: any, ...more: Arg[]): Pattern
  /**
   * Applies the given function whenever the given pattern is in a true state.
   * @param binary_pat {Pattern}
   * @param func {function}
   * @example
   * "c3 eb3 g3".when("<0 1>/2", x=>x.sub("5")).note()
   */
  when(binary_pat?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Do something on a keypress, or array of keypresses
   * Key name reference
   * @example
   * s("bd(5,8)").whenKey("Control:j", x => x.segment(16).color("red")).whenKey("Control:i", x => x.fast(2).color("blue"))
   */
  whenKey(...more: Arg[]): Pattern
  /**
   * Returns a new pattern with the given function applied to the context field of every hap.
   * @param func {function}
   */
  withContext(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * As with withHaps, but applies the function to every hap, rather than every list of haps.
   * @param func {function}
   */
  withHap(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Similar to withQuerySpan, but the function is applied to the timespans
   * of all haps returned by pattern queries (both part timespans, and where
   * present, whole timespans).
   * @param func {function}
   */
  withHapSpan(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * As with withHapSpan, but the function is applied to both the
   * begin and end time of the hap timespans.
   * @param func {function} the function to apply
   */
  withHapTime(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Returns a new pattern with the given function applied to the list of haps returned by every query.
   * @param func {function}
   */
  withHaps(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Returns a new pattern with the given location information added to the
   * context of every hap.
   * @param start {Number} start offset
   * @param end {Number} end offset
   */
  withLoc(start?: any, end?: any, ...more: Arg[]): Pattern
  /**
   * Returns a new pattern, where the given function is applied to the query
   * timespan before passing it to the original pattern.
   * @param func {function} the function to apply
   */
  withQuerySpan(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  withQuerySpanMaybe(...more: Arg[]): Pattern
  /**
   * As with withQuerySpan, but the function is applied to both the
   * begin and end time of the query timespan.
   * @param func {function} the function to apply
   */
  withQueryTime(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  withState(...more: Arg[]): Pattern
  withSteps(...more: Arg[]): Pattern
  /**
   * Returns a new pattern, with the function applied to the value of
   * each hap. It has the alias fmap.
   * Synonyms: fmap
   * @param func {function} to to apply to the value
   * @example
   * "0 1 2".withValue(v => v + 10).log()
   */
  withValue(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  /**
   * Use within to apply a function to only a part of a pattern.
   * @param start {number} start within cycle (0 - 1)
   * @param end {number} end within cycle (0 - 1). Must be > start
   * @param func {function} function to be applied to the sub-pattern
   */
  within(start?: any, end?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  /**
   * Displays a vertical pianoroll with event labels.
   * Supports all the same options as pianoroll.
   */
  wordfall(...more: Arg[]): Pattern
  /**
   * Creates a worklet effect. Typically derived by writing K(...) in the REPL which will parse
   * Kabelsalat code.
   * @param src {string} Source code of the worklet update function
   * @param inputs {number | Pattern} Worklet inputs
   */
  worklet(src?: any, inputs?: any, ...more: Arg[]): Pattern
  /**
   * Position in the wavetable of the wavetable oscillator
   * Synonyms: wavetablePosition
   * @param position {number | Pattern} Position in the wavetable from 0 to 1
   * @example
   * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
   */
  wt(position?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of the wavetable oscillator's position envelope
   * Synonyms: wtatt
   * @param time {number | Pattern} attack time in seconds
   */
  wtatt(time?: any, ...more: Arg[]): Pattern
  /**
   * Attack time of the wavetable oscillator's position envelope
   * Synonyms: wtatt
   * @param time {number | Pattern} attack time in seconds
   */
  wtattack(time?: any, ...more: Arg[]): Pattern
  /**
   * DC offset of the LFO for the wavetable oscillator's position
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  wtdc(dcoffset?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of the wavetable oscillator's position envelope
   * Synonyms: wtdec
   * @param time {number | Pattern} decay time in seconds
   */
  wtdec(time?: any, ...more: Arg[]): Pattern
  /**
   * Decay time of the wavetable oscillator's position envelope
   * Synonyms: wtdec
   * @param time {number | Pattern} decay time in seconds
   */
  wtdecay(time?: any, ...more: Arg[]): Pattern
  /**
   * Depth of the LFO for the wavetable oscillator's position
   * @param depth {number | Pattern} depth of modulation
   */
  wtdepth(depth?: any, ...more: Arg[]): Pattern
  /**
   * Amount of envelope applied wavetable oscillator's position envelope
   * @param amount {number | Pattern} between 0 and 1
   */
  wtenv(amount?: any, ...more: Arg[]): Pattern
  /**
   * Amount of randomness of the initial phase of the wavetable oscillator.
   * Synonyms: wavetablePhaseRand
   * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
   * @example
   * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
   */
  wtphaserand(amount?: any, ...more: Arg[]): Pattern
  /**
   * Rate of the LFO for the wavetable oscillator's position
   * @param rate {number | Pattern} rate in hertz
   */
  wtrate(rate?: any, ...more: Arg[]): Pattern
  /**
   * Release time of the wavetable oscillator's position envelope
   * Synonyms: wtrel
   * @param time {number | Pattern} release time in seconds
   */
  wtrel(time?: any, ...more: Arg[]): Pattern
  /**
   * Release time of the wavetable oscillator's position envelope
   * Synonyms: wtrel
   * @param time {number | Pattern} release time in seconds
   */
  wtrelease(time?: any, ...more: Arg[]): Pattern
  /**
   * Shape of the LFO for the wavetable oscillator's position
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  wtshape(shape?: any, ...more: Arg[]): Pattern
  /**
   * Skew of the LFO for the wavetable oscillator's position
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  wtskew(skew?: any, ...more: Arg[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's position envelope
   * Synonyms: wtsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  wtsus(gain?: any, ...more: Arg[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's position envelope
   * Synonyms: wtsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  wtsustain(gain?: any, ...more: Arg[]): Pattern
  /**
   * cycle synced rate of the LFO for the wavetable oscillator's position
   * @param rate {number | Pattern} rate in cycles
   */
  wtsync(rate?: any, ...more: Arg[]): Pattern
  x(...more: Arg[]): Pattern
  /**
   * Cross-fades between left and right from 0 to 1:
   *
   * 0 = (full left, no right)
   * .5 = (both equal)
   * 1 = (no left, full right)
   * @example
   * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
   */
  xfade(...more: Arg[]): Pattern
  xsdelay(...more: Arg[]): Pattern
  y(...more: Arg[]): Pattern
  zcrush(...more: Arg[]): Pattern
  zdelay(...more: Arg[]): Pattern
  zmod(...more: Arg[]): Pattern
  znoise(...more: Arg[]): Pattern
  /**
   * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
   * @example
   * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
   * // s("hh*3 [sd bd]*2") // equivalent
   */
  zoom(...more: Arg[]): Pattern
  zoomArc(...more: Arg[]): Pattern
  zoomIn(...more: Arg[]): Pattern
  zoomarc(...more: Arg[]): Pattern
  zrand(...more: Arg[]): Pattern
  zzfx(...more: Arg[]): Pattern
}

// In Strudel, "..." is a pattern in mini-notation, so a string has the pattern methods too
interface String {
  FX(...more: Arg[]): Pattern
  FXr(...more: Arg[]): Pattern
  FXrel(...more: Arg[]): Pattern
  FXrelease(...more: Arg[]): Pattern
  _ad(...more: Arg[]): Pattern
  _add(...more: Arg[]): Pattern
  _adsr(...more: Arg[]): Pattern
  _almostAlways(...more: Arg[]): Pattern
  _almostNever(...more: Arg[]): Pattern
  _always(...more: Arg[]): Pattern
  _and(...more: Arg[]): Pattern
  _apply(...more: Arg[]): Pattern
  _applyN(...more: Arg[]): Pattern
  _ar(...more: Arg[]): Pattern
  _arp(...more: Arg[]): Pattern
  _arpWith(...more: Arg[]): Pattern
  _as(...more: Arg[]): Pattern
  _band(...more: Arg[]): Pattern
  _beat(...more: Arg[]): Pattern
  _bite(...more: Arg[]): Pattern
  _bjork(...more: Arg[]): Pattern
  _blshift(...more: Arg[]): Pattern
  _bor(...more: Arg[]): Pattern
  _brshift(...more: Arg[]): Pattern
  _bxor(...more: Arg[]): Pattern
  _bypass(...more: Arg[]): Pattern
  _chop(...more: Arg[]): Pattern
  _chunk(...more: Arg[]): Pattern
  _chunkBack(...more: Arg[]): Pattern
  _chunkBackInto(...more: Arg[]): Pattern
  _chunkInto(...more: Arg[]): Pattern
  _chunkback(...more: Arg[]): Pattern
  _chunkbackinto(...more: Arg[]): Pattern
  _chunkinto(...more: Arg[]): Pattern
  _compress(...more: Arg[]): Pattern
  _compressSpan(...more: Arg[]): Pattern
  _compressspan(...more: Arg[]): Pattern
  _contract(...more: Arg[]): Pattern
  _control(...more: Arg[]): Pattern
  _cpm(...more: Arg[]): Pattern
  _degradeBy(...more: Arg[]): Pattern
  _degradeByWith(...more: Arg[]): Pattern
  _density(...more: Arg[]): Pattern
  _div(...more: Arg[]): Pattern
  _drop(...more: Arg[]): Pattern
  _ds(...more: Arg[]): Pattern
  _early(...more: Arg[]): Pattern
  _echo(...more: Arg[]): Pattern
  _echoWith(...more: Arg[]): Pattern
  _echowith(...more: Arg[]): Pattern
  _eish(...more: Arg[]): Pattern
  _eq(...more: Arg[]): Pattern
  _eqt(...more: Arg[]): Pattern
  _euclid(...more: Arg[]): Pattern
  _euclidLegato(...more: Arg[]): Pattern
  _euclidLegatoRot(...more: Arg[]): Pattern
  _euclidRot(...more: Arg[]): Pattern
  _euclidish(...more: Arg[]): Pattern
  _euclidrot(...more: Arg[]): Pattern
  _every(...more: Arg[]): Pattern
  _expand(...more: Arg[]): Pattern
  _extend(...more: Arg[]): Pattern
  _fast(...more: Arg[]): Pattern
  _fastChunk(...more: Arg[]): Pattern
  _fastGap(...more: Arg[]): Pattern
  _fastchunk(...more: Arg[]): Pattern
  _fastgap(...more: Arg[]): Pattern
  _filter(...more: Arg[]): Pattern
  _filterWhen(...more: Arg[]): Pattern
  _firstOf(...more: Arg[]): Pattern
  _focus(...more: Arg[]): Pattern
  _focusSpan(...more: Arg[]): Pattern
  _focusspan(...more: Arg[]): Pattern
  _func(...more: Arg[]): Pattern
  _grow(...more: Arg[]): Pattern
  _gt(...more: Arg[]): Pattern
  _gte(...more: Arg[]): Pattern
  _hsl(...more: Arg[]): Pattern
  _hsla(...more: Arg[]): Pattern
  _hurry(...more: Arg[]): Pattern
  _inhabit(...more: Arg[]): Pattern
  _inhabitmod(...more: Arg[]): Pattern
  _inside(...more: Arg[]): Pattern
  _iter(...more: Arg[]): Pattern
  _iterBack(...more: Arg[]): Pattern
  _iterback(...more: Arg[]): Pattern
  _jux(...more: Arg[]): Pattern
  _juxBy(...more: Arg[]): Pattern
  _juxby(...more: Arg[]): Pattern
  _keep(...more: Arg[]): Pattern
  _keepif(...more: Arg[]): Pattern
  _lastOf(...more: Arg[]): Pattern
  _late(...more: Arg[]): Pattern
  _linger(...more: Arg[]): Pattern
  _log2(...more: Arg[]): Pattern
  _loopAt(...more: Arg[]): Pattern
  _loopAtCps(...more: Arg[]): Pattern
  _loopat(...more: Arg[]): Pattern
  _loopatcps(...more: Arg[]): Pattern
  _lt(...more: Arg[]): Pattern
  _lte(...more: Arg[]): Pattern
  _mod(...more: Arg[]): Pattern
  _moveXY(...more: Arg[]): Pattern
  _mul(...more: Arg[]): Pattern
  _ne(...more: Arg[]): Pattern
  _net(...more: Arg[]): Pattern
  _never(...more: Arg[]): Pattern
  _off(...more: Arg[]): Pattern
  _often(...more: Arg[]): Pattern
  _opIn(...more: Arg[]): Pattern
  _opMix(...more: Arg[]): Pattern
  _opOut(...more: Arg[]): Pattern
  _opPoly(...more: Arg[]): Pattern
  _opReset(...more: Arg[]): Pattern
  _opRestart(...more: Arg[]): Pattern
  _opSqueeze(...more: Arg[]): Pattern
  _opSqueezeOut(...more: Arg[]): Pattern
  _or(...more: Arg[]): Pattern
  _outside(...more: Arg[]): Pattern
  _pace(...more: Arg[]): Pattern
  _pianoroll(...more: Arg[]): Pattern
  _pick(...more: Arg[]): Pattern
  _pickF(...more: Arg[]): Pattern
  _pickOut(...more: Arg[]): Pattern
  _pickReset(...more: Arg[]): Pattern
  _pickRestart(...more: Arg[]): Pattern
  _pickSqueeze(...more: Arg[]): Pattern
  _pickmod(...more: Arg[]): Pattern
  _pickmodF(...more: Arg[]): Pattern
  _pickmodOut(...more: Arg[]): Pattern
  _pickmodReset(...more: Arg[]): Pattern
  _pickmodRestart(...more: Arg[]): Pattern
  _pickmodSqueeze(...more: Arg[]): Pattern
  _pitchwheel(...more: Arg[]): Pattern
  _ply(...more: Arg[]): Pattern
  _plyForEach(...more: Arg[]): Pattern
  _plyWith(...more: Arg[]): Pattern
  _plyforeach(...more: Arg[]): Pattern
  _plywith(...more: Arg[]): Pattern
  _pow(...more: Arg[]): Pattern
  _pressBy(...more: Arg[]): Pattern
  _punchcard(...more: Arg[]): Pattern
  _range(...more: Arg[]): Pattern
  _range2(...more: Arg[]): Pattern
  _rangex(...more: Arg[]): Pattern
  _rarely(...more: Arg[]): Pattern
  _repeatCycles(...more: Arg[]): Pattern
  _replicate(...more: Arg[]): Pattern
  _rescale(...more: Arg[]): Pattern
  _rib(...more: Arg[]): Pattern
  _ribbon(...more: Arg[]): Pattern
  _rootNotes(...more: Arg[]): Pattern
  _scale(...more: Arg[]): Pattern
  _scaleTrans(...more: Arg[]): Pattern
  _scaleTranspose(...more: Arg[]): Pattern
  _scope(...more: Arg[]): Pattern
  _scramble(...more: Arg[]): Pattern
  _scrub(...more: Arg[]): Pattern
  _seed(...more: Arg[]): Pattern
  _seg(...more: Arg[]): Pattern
  _segment(...more: Arg[]): Pattern
  _set(...more: Arg[]): Pattern
  _shrink(...more: Arg[]): Pattern
  _shuffle(...more: Arg[]): Pattern
  _slice(...more: Arg[]): Pattern
  _slow(...more: Arg[]): Pattern
  _slowChunk(...more: Arg[]): Pattern
  _slowchunk(...more: Arg[]): Pattern
  _someCycles(...more: Arg[]): Pattern
  _someCyclesBy(...more: Arg[]): Pattern
  _sometimes(...more: Arg[]): Pattern
  _sometimesBy(...more: Arg[]): Pattern
  _sparsity(...more: Arg[]): Pattern
  _speak(...more: Arg[]): Pattern
  _spectrum(...more: Arg[]): Pattern
  _spiral(...more: Arg[]): Pattern
  _splice(...more: Arg[]): Pattern
  _strans(...more: Arg[]): Pattern
  _striate(...more: Arg[]): Pattern
  _stut(...more: Arg[]): Pattern
  _stutWith(...more: Arg[]): Pattern
  _stutwith(...more: Arg[]): Pattern
  _sub(...more: Arg[]): Pattern
  _swing(...more: Arg[]): Pattern
  _swingBy(...more: Arg[]): Pattern
  _sysex(...more: Arg[]): Pattern
  _take(...more: Arg[]): Pattern
  _timeline(...more: Arg[]): Pattern
  _trans(...more: Arg[]): Pattern
  _transpose(...more: Arg[]): Pattern
  _undegradeBy(...more: Arg[]): Pattern
  _voicings(...more: Arg[]): Pattern
  _when(...more: Arg[]): Pattern
  _whenKey(...more: Arg[]): Pattern
  _within(...more: Arg[]): Pattern
  _zoom(...more: Arg[]): Pattern
  _zoomArc(...more: Arg[]): Pattern
  _zoomIn(...more: Arg[]): Pattern
  _zoomarc(...more: Arg[]): Pattern
  accelerate(amount?: any, ...more: Arg[]): Pattern
  activeLabel(...more: Arg[]): Pattern
  ad(...more: Arg[]): Pattern
  add(...more: Arg[]): Pattern
  adsr(time?: any, time_?: any, gain?: any, time__?: any, ...more: Arg[]): Pattern
  almostAlways(...more: Arg[]): Pattern
  almostNever(...more: Arg[]): Pattern
  always(...more: Arg[]): Pattern
  amp(amount?: any, ...more: Arg[]): Pattern
  analyze(...more: Arg[]): Pattern
  anchor(anchorNote?: any, ...more: Arg[]): Pattern
  and(...more: Arg[]): Pattern
  angle(...more: Arg[]): Pattern
  animate(...more: Arg[]): Pattern
  appBoth(pat_val?: any, ...more: Arg[]): Pattern
  appLeft(pat_val?: any, ...more: Arg[]): Pattern
  appRight(pat_val?: any, ...more: Arg[]): Pattern
  appWhole(whole_func?: (pat: Pattern, ...args: any[]) => any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  apply(...more: Arg[]): Pattern
  applyN(...more: Arg[]): Pattern
  ar(...more: Arg[]): Pattern
  arp(...more: Arg[]): Pattern
  arpWith(...more: Arg[]): Pattern
  as(mapping?: any, ...more: Arg[]): Pattern
  asNumber(...more: Arg[]): Pattern
  asym(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  att(attack?: any, ...more: Arg[]): Pattern
  attack(attack?: any, ...more: Arg[]): Pattern
  band(...more: Arg[]): Pattern
  bandf(frequency?: any, ...more: Arg[]): Pattern
  bandq(q?: any, ...more: Arg[]): Pattern
  bank(bank?: any, ...more: Arg[]): Pattern
  bbexpr(byteBeatExpression?: any, ...more: Arg[]): Pattern
  bbst(byteBeatStartTime?: any, ...more: Arg[]): Pattern
  beat(...more: Arg[]): Pattern
  begin(amount?: any, ...more: Arg[]): Pattern
  bgain(number?: any, ...more: Arg[]): Pattern
  bind(...more: Arg[]): Pattern
  bindWhole(...more: Arg[]): Pattern
  binshift(...more: Arg[]): Pattern
  bite(number?: any, slices?: any, ...more: Arg[]): Pattern
  bjork(...more: Arg[]): Pattern
  blshift(...more: Arg[]): Pattern
  bmod(config?: any, id?: any, ...more: Arg[]): Pattern
  bor(...more: Arg[]): Pattern
  bp(frequency?: any, ...more: Arg[]): Pattern
  bpa(attack?: any, ...more: Arg[]): Pattern
  bpattack(attack?: any, ...more: Arg[]): Pattern
  bpd(decay?: any, ...more: Arg[]): Pattern
  bpdc(dcoffset?: any, ...more: Arg[]): Pattern
  bpdecay(decay?: any, ...more: Arg[]): Pattern
  bpdepth(depth?: any, ...more: Arg[]): Pattern
  bpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  bpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  bpe(modulation?: any, ...more: Arg[]): Pattern
  bpenv(modulation?: any, ...more: Arg[]): Pattern
  bpf(frequency?: any, ...more: Arg[]): Pattern
  bpq(q?: any, ...more: Arg[]): Pattern
  bpr(release?: any, ...more: Arg[]): Pattern
  bprate(rate?: any, ...more: Arg[]): Pattern
  bprelease(release?: any, ...more: Arg[]): Pattern
  bps(sustain?: any, ...more: Arg[]): Pattern
  bpshape(shape?: any, ...more: Arg[]): Pattern
  bpskew(skew?: any, ...more: Arg[]): Pattern
  bpsustain(sustain?: any, ...more: Arg[]): Pattern
  bpsync(rate?: any, ...more: Arg[]): Pattern
  brak(...more: Arg[]): Pattern
  brshift(...more: Arg[]): Pattern
  bus(number?: any, ...more: Arg[]): Pattern
  busgain(number?: any, ...more: Arg[]): Pattern
  bxor(...more: Arg[]): Pattern
  bypass(...more: Arg[]): Pattern
  byteBeatExpression(byteBeatExpression?: any, ...more: Arg[]): Pattern
  byteBeatStartTime(byteBeatStartTime?: any, ...more: Arg[]): Pattern
  cat(...more: Arg[]): Pattern
  ccn(MIDI?: any, ...more: Arg[]): Pattern
  ccv(MIDI?: any, ...more: Arg[]): Pattern
  ceil(...more: Arg[]): Pattern
  ch(channels?: any, ...more: Arg[]): Pattern
  channel(channel?: any, ...more: Arg[]): Pattern
  channels(channels?: any, ...more: Arg[]): Pattern
  chebyshev(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  choose(xs?: any, ...more: Arg[]): Pattern
  choose2(xs?: any, ...more: Arg[]): Pattern
  chop(...more: Arg[]): Pattern
  chord(symbols?: any, ...more: Arg[]): Pattern
  chorus(chorus?: any, ...more: Arg[]): Pattern
  chunk(...more: Arg[]): Pattern
  chunkBack(...more: Arg[]): Pattern
  chunkBackInto(...more: Arg[]): Pattern
  chunkInto(...more: Arg[]): Pattern
  chunkback(...more: Arg[]): Pattern
  chunkbackinto(...more: Arg[]): Pattern
  chunkinto(...more: Arg[]): Pattern
  clip(factor?: any, ...more: Arg[]): Pattern
  coarse(factor?: any, ...more: Arg[]): Pattern
  collect(...more: Arg[]): Pattern
  color(color?: any, ...more: Arg[]): Pattern
  comb(...more: Arg[]): Pattern
  compress(...more: Arg[]): Pattern
  compressSpan(...more: Arg[]): Pattern
  compressor(...more: Arg[]): Pattern
  compressorAttack(...more: Arg[]): Pattern
  compressorKnee(...more: Arg[]): Pattern
  compressorRatio(...more: Arg[]): Pattern
  compressorRelease(...more: Arg[]): Pattern
  compressspan(...more: Arg[]): Pattern
  contract(...more: Arg[]): Pattern
  control(MIDI?: any, MIDI_?: any, ...more: Arg[]): Pattern
  cpm(...more: Arg[]): Pattern
  cps(...more: Arg[]): Pattern
  crush(depth?: any, ...more: Arg[]): Pattern
  ctf(frequency?: any, ...more: Arg[]): Pattern
  ctlNum(...more: Arg[]): Pattern
  ctranspose(...more: Arg[]): Pattern
  cubic(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  curve(...more: Arg[]): Pattern
  cut(group?: any, ...more: Arg[]): Pattern
  cutoff(frequency?: any, ...more: Arg[]): Pattern
  dec(time?: any, ...more: Arg[]): Pattern
  decay(time?: any, ...more: Arg[]): Pattern
  defragmentHaps(...more: Arg[]): Pattern
  degrade(...more: Arg[]): Pattern
  degradeBy(amount?: any, ...more: Arg[]): Pattern
  degradeByWith(...more: Arg[]): Pattern
  degree(...more: Arg[]): Pattern
  delay(level?: any, ...more: Arg[]): Pattern
  delayfb(feedback?: any, ...more: Arg[]): Pattern
  delayfeedback(feedback?: any, ...more: Arg[]): Pattern
  delayspeed(delayspeed?: any, ...more: Arg[]): Pattern
  delaysync(cycles?: any, ...more: Arg[]): Pattern
  delayt(delayspeed?: any, ...more: Arg[]): Pattern
  delaytime(...more: Arg[]): Pattern
  deltaSlide(...more: Arg[]): Pattern
  density(density?: any, ...more: Arg[]): Pattern
  det(amount?: any, ...more: Arg[]): Pattern
  detune(amount?: any, ...more: Arg[]): Pattern
  dfb(feedback?: any, ...more: Arg[]): Pattern
  dict(...more: Arg[]): Pattern
  dictionary(dictionaryName?: any, ...more: Arg[]): Pattern
  diode(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  discreteOnly(...more: Arg[]): Pattern
  dist(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
  distort(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
  distorttype(type?: any, ...more: Arg[]): Pattern
  distortvol(volume?: any, ...more: Arg[]): Pattern
  disttype(type?: any, ...more: Arg[]): Pattern
  distvol(volume?: any, ...more: Arg[]): Pattern
  div(...more: Arg[]): Pattern
  djf(cutoff?: any, ...more: Arg[]): Pattern
  dough(...more: Arg[]): Pattern
  draw(...more: Arg[]): Pattern
  drawLine(pattern?: any, chars?: any, ...more: Arg[]): Pattern
  drive(amount?: any, ...more: Arg[]): Pattern
  drop(...more: Arg[]): Pattern
  dry(dry?: any, ...more: Arg[]): Pattern
  ds(...more: Arg[]): Pattern
  dt(delayspeed?: any, ...more: Arg[]): Pattern
  duck(orbit?: any, ...more: Arg[]): Pattern
  duckatt(time?: any, ...more: Arg[]): Pattern
  duckattack(time?: any, ...more: Arg[]): Pattern
  duckdepth(depth?: any, ...more: Arg[]): Pattern
  duckons(time?: any, ...more: Arg[]): Pattern
  duckonset(time?: any, ...more: Arg[]): Pattern
  duckorbit(orbit?: any, ...more: Arg[]): Pattern
  dur(seconds?: any, ...more: Arg[]): Pattern
  duration(seconds?: any, ...more: Arg[]): Pattern
  early(cycles?: any, ...more: Arg[]): Pattern
  echo(times?: any, time?: any, feedback?: any, ...more: Arg[]): Pattern
  echoWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  echowith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  eish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
  end(length?: any, ...more: Arg[]): Pattern
  enhance(...more: Arg[]): Pattern
  env(config?: any, id?: any, ...more: Arg[]): Pattern
  eq(...more: Arg[]): Pattern
  eqt(...more: Arg[]): Pattern
  euclid(pulses?: any, steps?: any, ...more: Arg[]): Pattern
  euclidLegato(pulses?: any, steps?: any, rotation?: any, pat?: any, ...more: Arg[]): Pattern
  euclidLegatoRot(pulses?: any, steps?: any, rotation?: any, ...more: Arg[]): Pattern
  euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: Arg[]): Pattern
  euclidish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
  euclidrot(...more: Arg[]): Pattern
  every(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  expand(...more: Arg[]): Pattern
  expression(...more: Arg[]): Pattern
  extend(...more: Arg[]): Pattern
  fadeInTime(...more: Arg[]): Pattern
  fadeOutTime(...more: Arg[]): Pattern
  fadeTime(...more: Arg[]): Pattern
  fanchor(center?: any, ...more: Arg[]): Pattern
  fast(factor?: any, ...more: Arg[]): Pattern
  fastChunk(...more: Arg[]): Pattern
  fastGap(...more: Arg[]): Pattern
  fastcat(...more: Arg[]): Pattern
  fastchunk(...more: Arg[]): Pattern
  fastgap(...more: Arg[]): Pattern
  fft(...more: Arg[]): Pattern
  fill(...more: Arg[]): Pattern
  filter(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  filterHaps(hap_test?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  filterValues(value_test?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  filterWhen(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  firstCycle(with_context?: any, ...more: Arg[]): Pattern
  firstOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  fit(...more: Arg[]): Pattern
  floor(...more: Arg[]): Pattern
  fm(brightness?: any, ...more: Arg[]): Pattern
  fm00(...more: Arg[]): Pattern
  fm01(...more: Arg[]): Pattern
  fm02(...more: Arg[]): Pattern
  fm03(...more: Arg[]): Pattern
  fm04(...more: Arg[]): Pattern
  fm05(...more: Arg[]): Pattern
  fm06(...more: Arg[]): Pattern
  fm07(...more: Arg[]): Pattern
  fm08(...more: Arg[]): Pattern
  fm1(...more: Arg[]): Pattern
  fm10(...more: Arg[]): Pattern
  fm11(...more: Arg[]): Pattern
  fm12(...more: Arg[]): Pattern
  fm13(...more: Arg[]): Pattern
  fm14(...more: Arg[]): Pattern
  fm15(...more: Arg[]): Pattern
  fm16(...more: Arg[]): Pattern
  fm17(...more: Arg[]): Pattern
  fm18(...more: Arg[]): Pattern
  fm2(...more: Arg[]): Pattern
  fm20(...more: Arg[]): Pattern
  fm21(...more: Arg[]): Pattern
  fm22(...more: Arg[]): Pattern
  fm23(...more: Arg[]): Pattern
  fm24(...more: Arg[]): Pattern
  fm25(...more: Arg[]): Pattern
  fm26(...more: Arg[]): Pattern
  fm27(...more: Arg[]): Pattern
  fm28(...more: Arg[]): Pattern
  fm3(...more: Arg[]): Pattern
  fm30(...more: Arg[]): Pattern
  fm31(...more: Arg[]): Pattern
  fm32(...more: Arg[]): Pattern
  fm33(...more: Arg[]): Pattern
  fm34(...more: Arg[]): Pattern
  fm35(...more: Arg[]): Pattern
  fm36(...more: Arg[]): Pattern
  fm37(...more: Arg[]): Pattern
  fm38(...more: Arg[]): Pattern
  fm4(...more: Arg[]): Pattern
  fm40(...more: Arg[]): Pattern
  fm41(...more: Arg[]): Pattern
  fm42(...more: Arg[]): Pattern
  fm43(...more: Arg[]): Pattern
  fm44(...more: Arg[]): Pattern
  fm45(...more: Arg[]): Pattern
  fm46(...more: Arg[]): Pattern
  fm47(...more: Arg[]): Pattern
  fm48(...more: Arg[]): Pattern
  fm5(...more: Arg[]): Pattern
  fm50(...more: Arg[]): Pattern
  fm51(...more: Arg[]): Pattern
  fm52(...more: Arg[]): Pattern
  fm53(...more: Arg[]): Pattern
  fm54(...more: Arg[]): Pattern
  fm55(...more: Arg[]): Pattern
  fm56(...more: Arg[]): Pattern
  fm57(...more: Arg[]): Pattern
  fm58(...more: Arg[]): Pattern
  fm6(...more: Arg[]): Pattern
  fm60(...more: Arg[]): Pattern
  fm61(...more: Arg[]): Pattern
  fm62(...more: Arg[]): Pattern
  fm63(...more: Arg[]): Pattern
  fm64(...more: Arg[]): Pattern
  fm65(...more: Arg[]): Pattern
  fm66(...more: Arg[]): Pattern
  fm67(...more: Arg[]): Pattern
  fm68(...more: Arg[]): Pattern
  fm7(...more: Arg[]): Pattern
  fm70(...more: Arg[]): Pattern
  fm71(...more: Arg[]): Pattern
  fm72(...more: Arg[]): Pattern
  fm73(...more: Arg[]): Pattern
  fm74(...more: Arg[]): Pattern
  fm75(...more: Arg[]): Pattern
  fm76(...more: Arg[]): Pattern
  fm77(...more: Arg[]): Pattern
  fm78(...more: Arg[]): Pattern
  fm8(...more: Arg[]): Pattern
  fm80(...more: Arg[]): Pattern
  fm81(...more: Arg[]): Pattern
  fm82(...more: Arg[]): Pattern
  fm83(...more: Arg[]): Pattern
  fm84(...more: Arg[]): Pattern
  fm85(...more: Arg[]): Pattern
  fm86(...more: Arg[]): Pattern
  fm87(...more: Arg[]): Pattern
  fm88(...more: Arg[]): Pattern
  fmap(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  fmatt(time?: any, ...more: Arg[]): Pattern
  fmatt1(...more: Arg[]): Pattern
  fmatt2(...more: Arg[]): Pattern
  fmatt3(...more: Arg[]): Pattern
  fmatt4(...more: Arg[]): Pattern
  fmatt5(...more: Arg[]): Pattern
  fmatt6(...more: Arg[]): Pattern
  fmatt7(...more: Arg[]): Pattern
  fmatt8(...more: Arg[]): Pattern
  fmattack(time?: any, ...more: Arg[]): Pattern
  fmattack1(...more: Arg[]): Pattern
  fmattack2(...more: Arg[]): Pattern
  fmattack3(...more: Arg[]): Pattern
  fmattack4(...more: Arg[]): Pattern
  fmattack5(...more: Arg[]): Pattern
  fmattack6(...more: Arg[]): Pattern
  fmattack7(...more: Arg[]): Pattern
  fmattack8(...more: Arg[]): Pattern
  fmdec(time?: any, ...more: Arg[]): Pattern
  fmdec1(...more: Arg[]): Pattern
  fmdec2(...more: Arg[]): Pattern
  fmdec3(...more: Arg[]): Pattern
  fmdec4(...more: Arg[]): Pattern
  fmdec5(...more: Arg[]): Pattern
  fmdec6(...more: Arg[]): Pattern
  fmdec7(...more: Arg[]): Pattern
  fmdec8(...more: Arg[]): Pattern
  fmdecay(time?: any, ...more: Arg[]): Pattern
  fmdecay1(...more: Arg[]): Pattern
  fmdecay2(...more: Arg[]): Pattern
  fmdecay3(...more: Arg[]): Pattern
  fmdecay4(...more: Arg[]): Pattern
  fmdecay5(...more: Arg[]): Pattern
  fmdecay6(...more: Arg[]): Pattern
  fmdecay7(...more: Arg[]): Pattern
  fmdecay8(...more: Arg[]): Pattern
  fmenv(type?: any, ...more: Arg[]): Pattern
  fmenv1(...more: Arg[]): Pattern
  fmenv2(...more: Arg[]): Pattern
  fmenv3(...more: Arg[]): Pattern
  fmenv4(...more: Arg[]): Pattern
  fmenv5(...more: Arg[]): Pattern
  fmenv6(...more: Arg[]): Pattern
  fmenv7(...more: Arg[]): Pattern
  fmenv8(...more: Arg[]): Pattern
  fmh(harmonicity?: any, ...more: Arg[]): Pattern
  fmh1(...more: Arg[]): Pattern
  fmh2(...more: Arg[]): Pattern
  fmh3(...more: Arg[]): Pattern
  fmh4(...more: Arg[]): Pattern
  fmh5(...more: Arg[]): Pattern
  fmh6(...more: Arg[]): Pattern
  fmh7(...more: Arg[]): Pattern
  fmh8(...more: Arg[]): Pattern
  fmi(brightness?: any, ...more: Arg[]): Pattern
  fmi00(...more: Arg[]): Pattern
  fmi01(...more: Arg[]): Pattern
  fmi02(...more: Arg[]): Pattern
  fmi03(...more: Arg[]): Pattern
  fmi04(...more: Arg[]): Pattern
  fmi05(...more: Arg[]): Pattern
  fmi06(...more: Arg[]): Pattern
  fmi07(...more: Arg[]): Pattern
  fmi08(...more: Arg[]): Pattern
  fmi1(...more: Arg[]): Pattern
  fmi10(...more: Arg[]): Pattern
  fmi11(...more: Arg[]): Pattern
  fmi12(...more: Arg[]): Pattern
  fmi13(...more: Arg[]): Pattern
  fmi14(...more: Arg[]): Pattern
  fmi15(...more: Arg[]): Pattern
  fmi16(...more: Arg[]): Pattern
  fmi17(...more: Arg[]): Pattern
  fmi18(...more: Arg[]): Pattern
  fmi2(...more: Arg[]): Pattern
  fmi20(...more: Arg[]): Pattern
  fmi21(...more: Arg[]): Pattern
  fmi22(...more: Arg[]): Pattern
  fmi23(...more: Arg[]): Pattern
  fmi24(...more: Arg[]): Pattern
  fmi25(...more: Arg[]): Pattern
  fmi26(...more: Arg[]): Pattern
  fmi27(...more: Arg[]): Pattern
  fmi28(...more: Arg[]): Pattern
  fmi3(...more: Arg[]): Pattern
  fmi30(...more: Arg[]): Pattern
  fmi31(...more: Arg[]): Pattern
  fmi32(...more: Arg[]): Pattern
  fmi33(...more: Arg[]): Pattern
  fmi34(...more: Arg[]): Pattern
  fmi35(...more: Arg[]): Pattern
  fmi36(...more: Arg[]): Pattern
  fmi37(...more: Arg[]): Pattern
  fmi38(...more: Arg[]): Pattern
  fmi4(...more: Arg[]): Pattern
  fmi40(...more: Arg[]): Pattern
  fmi41(...more: Arg[]): Pattern
  fmi42(...more: Arg[]): Pattern
  fmi43(...more: Arg[]): Pattern
  fmi44(...more: Arg[]): Pattern
  fmi45(...more: Arg[]): Pattern
  fmi46(...more: Arg[]): Pattern
  fmi47(...more: Arg[]): Pattern
  fmi48(...more: Arg[]): Pattern
  fmi5(...more: Arg[]): Pattern
  fmi50(...more: Arg[]): Pattern
  fmi51(...more: Arg[]): Pattern
  fmi52(...more: Arg[]): Pattern
  fmi53(...more: Arg[]): Pattern
  fmi54(...more: Arg[]): Pattern
  fmi55(...more: Arg[]): Pattern
  fmi56(...more: Arg[]): Pattern
  fmi57(...more: Arg[]): Pattern
  fmi58(...more: Arg[]): Pattern
  fmi6(...more: Arg[]): Pattern
  fmi60(...more: Arg[]): Pattern
  fmi61(...more: Arg[]): Pattern
  fmi62(...more: Arg[]): Pattern
  fmi63(...more: Arg[]): Pattern
  fmi64(...more: Arg[]): Pattern
  fmi65(...more: Arg[]): Pattern
  fmi66(...more: Arg[]): Pattern
  fmi67(...more: Arg[]): Pattern
  fmi68(...more: Arg[]): Pattern
  fmi7(...more: Arg[]): Pattern
  fmi70(...more: Arg[]): Pattern
  fmi71(...more: Arg[]): Pattern
  fmi72(...more: Arg[]): Pattern
  fmi73(...more: Arg[]): Pattern
  fmi74(...more: Arg[]): Pattern
  fmi75(...more: Arg[]): Pattern
  fmi76(...more: Arg[]): Pattern
  fmi77(...more: Arg[]): Pattern
  fmi78(...more: Arg[]): Pattern
  fmi8(...more: Arg[]): Pattern
  fmi80(...more: Arg[]): Pattern
  fmi81(...more: Arg[]): Pattern
  fmi82(...more: Arg[]): Pattern
  fmi83(...more: Arg[]): Pattern
  fmi84(...more: Arg[]): Pattern
  fmi85(...more: Arg[]): Pattern
  fmi86(...more: Arg[]): Pattern
  fmi87(...more: Arg[]): Pattern
  fmi88(...more: Arg[]): Pattern
  fmrel(time?: any, ...more: Arg[]): Pattern
  fmrel1(...more: Arg[]): Pattern
  fmrel2(...more: Arg[]): Pattern
  fmrel3(...more: Arg[]): Pattern
  fmrel4(...more: Arg[]): Pattern
  fmrel5(...more: Arg[]): Pattern
  fmrel6(...more: Arg[]): Pattern
  fmrel7(...more: Arg[]): Pattern
  fmrel8(...more: Arg[]): Pattern
  fmrelease(time?: any, ...more: Arg[]): Pattern
  fmrelease1(...more: Arg[]): Pattern
  fmrelease2(...more: Arg[]): Pattern
  fmrelease3(...more: Arg[]): Pattern
  fmrelease4(...more: Arg[]): Pattern
  fmrelease5(...more: Arg[]): Pattern
  fmrelease6(...more: Arg[]): Pattern
  fmrelease7(...more: Arg[]): Pattern
  fmrelease8(...more: Arg[]): Pattern
  fmsus(level?: any, ...more: Arg[]): Pattern
  fmsus1(...more: Arg[]): Pattern
  fmsus2(...more: Arg[]): Pattern
  fmsus3(...more: Arg[]): Pattern
  fmsus4(...more: Arg[]): Pattern
  fmsus5(...more: Arg[]): Pattern
  fmsus6(...more: Arg[]): Pattern
  fmsus7(...more: Arg[]): Pattern
  fmsus8(...more: Arg[]): Pattern
  fmsustain(level?: any, ...more: Arg[]): Pattern
  fmsustain1(...more: Arg[]): Pattern
  fmsustain2(...more: Arg[]): Pattern
  fmsustain3(...more: Arg[]): Pattern
  fmsustain4(...more: Arg[]): Pattern
  fmsustain5(...more: Arg[]): Pattern
  fmsustain6(...more: Arg[]): Pattern
  fmsustain7(...more: Arg[]): Pattern
  fmsustain8(...more: Arg[]): Pattern
  fmwave(wave?: any, ...more: Arg[]): Pattern
  fmwave1(...more: Arg[]): Pattern
  fmwave2(...more: Arg[]): Pattern
  fmwave3(...more: Arg[]): Pattern
  fmwave4(...more: Arg[]): Pattern
  fmwave5(...more: Arg[]): Pattern
  fmwave6(...more: Arg[]): Pattern
  fmwave7(...more: Arg[]): Pattern
  fmwave8(...more: Arg[]): Pattern
  focus(...more: Arg[]): Pattern
  focusSpan(...more: Arg[]): Pattern
  focusspan(...more: Arg[]): Pattern
  fold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  frameRate(...more: Arg[]): Pattern
  frames(...more: Arg[]): Pattern
  freeze(...more: Arg[]): Pattern
  freq(frequency?: any, ...more: Arg[]): Pattern
  fromBipolar(...more: Arg[]): Pattern
  fscope(color?: any, scale?: any, pos?: any, lean?: any, min?: any, max?: any, ...more: Arg[]): Pattern
  fshift(...more: Arg[]): Pattern
  fshiftnote(...more: Arg[]): Pattern
  fshiftphase(...more: Arg[]): Pattern
  ftype(type?: any, ...more: Arg[]): Pattern
  func(...more: Arg[]): Pattern
  fxr(...more: Arg[]): Pattern
  gain(amount?: any, ...more: Arg[]): Pattern
  gat(...more: Arg[]): Pattern
  gate(...more: Arg[]): Pattern
  getPainters(...more: Arg[]): Pattern
  grow(...more: Arg[]): Pattern
  gt(...more: Arg[]): Pattern
  gte(...more: Arg[]): Pattern
  h(...more: Arg[]): Pattern
  hard(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  harmonic(...more: Arg[]): Pattern
  hbrick(...more: Arg[]): Pattern
  hcutoff(frequency?: any, ...more: Arg[]): Pattern
  hold(...more: Arg[]): Pattern
  hours(...more: Arg[]): Pattern
  hp(frequency?: any, ...more: Arg[]): Pattern
  hpa(attack?: any, ...more: Arg[]): Pattern
  hpattack(attack?: any, ...more: Arg[]): Pattern
  hpd(decay?: any, ...more: Arg[]): Pattern
  hpdc(dcoffset?: any, ...more: Arg[]): Pattern
  hpdecay(decay?: any, ...more: Arg[]): Pattern
  hpdepth(depth?: any, ...more: Arg[]): Pattern
  hpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  hpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  hpe(modulation?: any, ...more: Arg[]): Pattern
  hpenv(modulation?: any, ...more: Arg[]): Pattern
  hpf(frequency?: any, ...more: Arg[]): Pattern
  hpq(q?: any, ...more: Arg[]): Pattern
  hpr(release?: any, ...more: Arg[]): Pattern
  hprate(rate?: any, ...more: Arg[]): Pattern
  hprelease(release?: any, ...more: Arg[]): Pattern
  hps(sustain?: any, ...more: Arg[]): Pattern
  hpshape(shape?: any, ...more: Arg[]): Pattern
  hpskew(skew?: any, ...more: Arg[]): Pattern
  hpsustain(sustain?: any, ...more: Arg[]): Pattern
  hpsync(rate?: any, ...more: Arg[]): Pattern
  hresonance(q?: any, ...more: Arg[]): Pattern
  hsl(...more: Arg[]): Pattern
  hsla(...more: Arg[]): Pattern
  hurry(...more: Arg[]): Pattern
  hush(...more: Arg[]): Pattern
  imag(...more: Arg[]): Pattern
  inhabit(pat?: any, xs?: any, ...more: Arg[]): Pattern
  inhabitmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
  innerBind(...more: Arg[]): Pattern
  innerJoin(...more: Arg[]): Pattern
  inside(...more: Arg[]): Pattern
  into(...more: Arg[]): Pattern
  inv(...more: Arg[]): Pattern
  invert(...more: Arg[]): Pattern
  ir(sample?: any, ...more: Arg[]): Pattern
  irbegin(begin?: any, ...more: Arg[]): Pattern
  iresponse(sample?: any, ...more: Arg[]): Pattern
  irspeed(speed?: any, ...more: Arg[]): Pattern
  iter(...more: Arg[]): Pattern
  iterBack(...more: Arg[]): Pattern
  iterback(...more: Arg[]): Pattern
  join(...more: Arg[]): Pattern
  jux(...more: Arg[]): Pattern
  juxBy(...more: Arg[]): Pattern
  juxby(...more: Arg[]): Pattern
  kcutoff(...more: Arg[]): Pattern
  keep(...more: Arg[]): Pattern
  keepif(...more: Arg[]): Pattern
  keyDown(...more: Arg[]): Pattern
  krush(...more: Arg[]): Pattern
  label(label?: any, ...more: Arg[]): Pattern
  lastOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  late(cycles?: any, ...more: Arg[]): Pattern
  layer(...more: Arg[]): Pattern
  lbrick(...more: Arg[]): Pattern
  legato(factor?: any, ...more: Arg[]): Pattern
  leslie(wet?: any, ...more: Arg[]): Pattern
  lfo(config?: any, id?: any, ...more: Arg[]): Pattern
  linger(fraction?: any, ...more: Arg[]): Pattern
  lock(enable?: any, ...more: Arg[]): Pattern
  log(...more: Arg[]): Pattern
  log2(...more: Arg[]): Pattern
  logValues(...more: Arg[]): Pattern
  loop(on?: any, ...more: Arg[]): Pattern
  loopAt(...more: Arg[]): Pattern
  loopAtCps(...more: Arg[]): Pattern
  loopBegin(time?: any, ...more: Arg[]): Pattern
  loopEnd(time?: any, ...more: Arg[]): Pattern
  loopat(...more: Arg[]): Pattern
  loopatcps(...more: Arg[]): Pattern
  loopb(time?: any, ...more: Arg[]): Pattern
  loope(time?: any, ...more: Arg[]): Pattern
  lp(frequency?: any, ...more: Arg[]): Pattern
  lpa(attack?: any, ...more: Arg[]): Pattern
  lpattack(attack?: any, ...more: Arg[]): Pattern
  lpd(decay?: any, ...more: Arg[]): Pattern
  lpdc(dcoffset?: any, ...more: Arg[]): Pattern
  lpdecay(decay?: any, ...more: Arg[]): Pattern
  lpdepth(depth?: any, ...more: Arg[]): Pattern
  lpdepthfreq(depth?: any, ...more: Arg[]): Pattern
  lpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
  lpe(modulation?: any, ...more: Arg[]): Pattern
  lpenv(modulation?: any, ...more: Arg[]): Pattern
  lpf(frequency?: any, ...more: Arg[]): Pattern
  lpq(q?: any, ...more: Arg[]): Pattern
  lpr(release?: any, ...more: Arg[]): Pattern
  lprate(rate?: any, ...more: Arg[]): Pattern
  lprelease(release?: any, ...more: Arg[]): Pattern
  lps(sustain?: any, ...more: Arg[]): Pattern
  lpshape(shape?: any, ...more: Arg[]): Pattern
  lpskew(skew?: any, ...more: Arg[]): Pattern
  lpsustain(sustain?: any, ...more: Arg[]): Pattern
  lpsync(rate?: any, ...more: Arg[]): Pattern
  lrate(rate?: any, ...more: Arg[]): Pattern
  lsize(meters?: any, ...more: Arg[]): Pattern
  lt(...more: Arg[]): Pattern
  lte(...more: Arg[]): Pattern
  markcss(...more: Arg[]): Pattern
  mask(...more: Arg[]): Pattern
  maskAll(...more: Arg[]): Pattern
  midi(midiport?: any, options?: any, ...more: Arg[]): Pattern
  midibend(midibend?: any, ...more: Arg[]): Pattern
  midichan(channel?: any, ...more: Arg[]): Pattern
  midicmd(command?: any, ...more: Arg[]): Pattern
  midimap(...more: Arg[]): Pattern
  midiport(port?: any, ...more: Arg[]): Pattern
  miditouch(miditouch?: any, ...more: Arg[]): Pattern
  minutes(...more: Arg[]): Pattern
  mix(...more: Arg[]): Pattern
  mod(...more: Arg[]): Pattern
  mode(modeName?: any, ...more: Arg[]): Pattern
  modulate(...more: Arg[]): Pattern
  moveXY(...more: Arg[]): Pattern
  mtranspose(...more: Arg[]): Pattern
  mul(...more: Arg[]): Pattern
  n(value?: any, ...more: Arg[]): Pattern
  ne(...more: Arg[]): Pattern
  net(...more: Arg[]): Pattern
  never(...more: Arg[]): Pattern
  noise(wet?: any, ...more: Arg[]): Pattern
  note(...more: Arg[]): Pattern
  nrpnn(nrpnn?: any, ...more: Arg[]): Pattern
  nrpv(nrpv?: any, ...more: Arg[]): Pattern
  nudge(...more: Arg[]): Pattern
  o(number?: any, ...more: Arg[]): Pattern
  oct(octave?: any, ...more: Arg[]): Pattern
  octave(octave?: any, ...more: Arg[]): Pattern
  octaveR(...more: Arg[]): Pattern
  octaves(count?: any, ...more: Arg[]): Pattern
  octer(...more: Arg[]): Pattern
  octersub(...more: Arg[]): Pattern
  octersubsub(...more: Arg[]): Pattern
  off(time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  offset(shift?: any, ...more: Arg[]): Pattern
  often(...more: Arg[]): Pattern
  onPaint(...more: Arg[]): Pattern
  onTrigger(...more: Arg[]): Pattern
  onTriggerTime(...more: Arg[]): Pattern
  onsetsOnly(...more: Arg[]): Pattern
  or(...more: Arg[]): Pattern
  orbit(number?: any, ...more: Arg[]): Pattern
  oschost(oschost?: any, ...more: Arg[]): Pattern
  oscport(oscport?: any, ...more: Arg[]): Pattern
  out(...more: Arg[]): Pattern
  outerBind(...more: Arg[]): Pattern
  outerJoin(...more: Arg[]): Pattern
  outside(...more: Arg[]): Pattern
  overgain(...more: Arg[]): Pattern
  overshape(...more: Arg[]): Pattern
  pace(...more: Arg[]): Pattern
  palindrome(...more: Arg[]): Pattern
  pan(pan?: any, ...more: Arg[]): Pattern
  panchor(anchor?: any, ...more: Arg[]): Pattern
  panorient(...more: Arg[]): Pattern
  panspan(...more: Arg[]): Pattern
  pansplay(...more: Arg[]): Pattern
  panwidth(...more: Arg[]): Pattern
  partials(magnitudes?: any, ...more: Arg[]): Pattern
  patt(time?: any, ...more: Arg[]): Pattern
  pattack(time?: any, ...more: Arg[]): Pattern
  pcurve(type?: any, ...more: Arg[]): Pattern
  pdec(time?: any, ...more: Arg[]): Pattern
  pdecay(time?: any, ...more: Arg[]): Pattern
  penv(semitones?: any, ...more: Arg[]): Pattern
  ph(speed?: any, ...more: Arg[]): Pattern
  phasdp(depth?: any, ...more: Arg[]): Pattern
  phaser(speed?: any, ...more: Arg[]): Pattern
  phasercenter(centerfrequency?: any, ...more: Arg[]): Pattern
  phaserdepth(depth?: any, ...more: Arg[]): Pattern
  phaserrate(...more: Arg[]): Pattern
  phasersweep(phasersweep?: any, ...more: Arg[]): Pattern
  phases(phases?: any, ...more: Arg[]): Pattern
  phc(centerfrequency?: any, ...more: Arg[]): Pattern
  phd(depth?: any, ...more: Arg[]): Pattern
  phs(phasersweep?: any, ...more: Arg[]): Pattern
  piano(...more: Arg[]): Pattern
  pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: Arg[]): Pattern
  pick(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
  pickOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
  pickmodOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickmodReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickmodRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pickmodSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  pitchJump(...more: Arg[]): Pattern
  pitchJumpTime(...more: Arg[]): Pattern
  pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: Arg[]): Pattern
  ply(...more: Arg[]): Pattern
  plyForEach(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  plyWith(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  plyforeach(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  plywith(factor?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  poly(...more: Arg[]): Pattern
  polyBind(...more: Arg[]): Pattern
  polyTouch(...more: Arg[]): Pattern
  postgain(...more: Arg[]): Pattern
  pow(...more: Arg[]): Pattern
  prel(time?: any, ...more: Arg[]): Pattern
  prelease(time?: any, ...more: Arg[]): Pattern
  press(...more: Arg[]): Pattern
  pressBy(...more: Arg[]): Pattern
  progNum(program?: any, ...more: Arg[]): Pattern
  psus(...more: Arg[]): Pattern
  psustain(...more: Arg[]): Pattern
  punchcard(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: Arg[]): Pattern
  pw(pulsewidth?: any, ...more: Arg[]): Pattern
  pwrate(rate?: any, ...more: Arg[]): Pattern
  pwsweep(sweep?: any, ...more: Arg[]): Pattern
  queryArc(begin?: any, end?: any, ...more: Arg[]): Pattern
  r(...more: Arg[]): Pattern
  range(...more: Arg[]): Pattern
  range2(...more: Arg[]): Pattern
  rangex(...more: Arg[]): Pattern
  rarely(...more: Arg[]): Pattern
  ratio(...more: Arg[]): Pattern
  rdim(frequency?: any, ...more: Arg[]): Pattern
  real(...more: Arg[]): Pattern
  rel(time?: any, ...more: Arg[]): Pattern
  release(time?: any, ...more: Arg[]): Pattern
  removeUndefineds(...more: Arg[]): Pattern
  repeatCycles(...more: Arg[]): Pattern
  replicate(...more: Arg[]): Pattern
  rescale(...more: Arg[]): Pattern
  reset(...more: Arg[]): Pattern
  resetAll(...more: Arg[]): Pattern
  resetJoin(...more: Arg[]): Pattern
  resonance(q?: any, ...more: Arg[]): Pattern
  restart(...more: Arg[]): Pattern
  restartAll(...more: Arg[]): Pattern
  restartJoin(...more: Arg[]): Pattern
  rev(...more: Arg[]): Pattern
  revv(...more: Arg[]): Pattern
  rfade(seconds?: any, ...more: Arg[]): Pattern
  rib(offset?: any, cycles?: any, ...more: Arg[]): Pattern
  ribbon(offset?: any, cycles?: any, ...more: Arg[]): Pattern
  ring(...more: Arg[]): Pattern
  ringdf(...more: Arg[]): Pattern
  ringf(...more: Arg[]): Pattern
  rlp(frequency?: any, ...more: Arg[]): Pattern
  room(level?: any, ...more: Arg[]): Pattern
  roomdim(frequency?: any, ...more: Arg[]): Pattern
  roomfade(seconds?: any, ...more: Arg[]): Pattern
  roomlp(frequency?: any, ...more: Arg[]): Pattern
  roomsize(size?: any, ...more: Arg[]): Pattern
  rootNotes(octave?: any, ...more: Arg[]): Pattern
  round(...more: Arg[]): Pattern
  rsize(size?: any, ...more: Arg[]): Pattern
  s(sound?: any, ...more: Arg[]): Pattern
  s_add(...more: Arg[]): Pattern
  s_contract(...more: Arg[]): Pattern
  s_expand(...more: Arg[]): Pattern
  s_extend(...more: Arg[]): Pattern
  s_sub(...more: Arg[]): Pattern
  s_taper(...more: Arg[]): Pattern
  s_taperlist(...more: Arg[]): Pattern
  s_tour(...more: Arg[]): Pattern
  scale(scale?: any, ...more: Arg[]): Pattern
  scaleTrans(offset?: any, ...more: Arg[]): Pattern
  scaleTranspose(offset?: any, ...more: Arg[]): Pattern
  scope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: Arg[]): Pattern
  scram(...more: Arg[]): Pattern
  scramble(...more: Arg[]): Pattern
  scrub(...more: Arg[]): Pattern
  seconds(...more: Arg[]): Pattern
  seed(n?: any, ...more: Arg[]): Pattern
  seg(segments?: any, ...more: Arg[]): Pattern
  segment(segments?: any, ...more: Arg[]): Pattern
  semitone(...more: Arg[]): Pattern
  seq(...more: Arg[]): Pattern
  sequence(...more: Arg[]): Pattern
  set(...more: Arg[]): Pattern
  setContext(context?: any, ...more: Arg[]): Pattern
  setSteps(...more: Arg[]): Pattern
  shape(distortion?: any, ...more: Arg[]): Pattern
  shrink(...more: Arg[]): Pattern
  shrinklist(...more: Arg[]): Pattern
  shuffle(...more: Arg[]): Pattern
  sinefold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  size(size?: any, ...more: Arg[]): Pattern
  slice(...more: Arg[]): Pattern
  slide(...more: Arg[]): Pattern
  slow(factor?: any, ...more: Arg[]): Pattern
  slowChunk(...more: Arg[]): Pattern
  slowcat(...more: Arg[]): Pattern
  slowchunk(...more: Arg[]): Pattern
  smear(...more: Arg[]): Pattern
  soft(distortion?: any, volume?: any, ...more: Arg[]): Pattern
  someCycles(...more: Arg[]): Pattern
  someCyclesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  sometimes(function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  sometimesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  songPtr(...more: Arg[]): Pattern
  sortHapsByPart(...more: Arg[]): Pattern
  sound(sound?: any, ...more: Arg[]): Pattern
  soundfont(...more: Arg[]): Pattern
  source(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  sparsity(factor?: any, ...more: Arg[]): Pattern
  speak(...more: Arg[]): Pattern
  spectrum(config?: any, thickness?: any, speed?: any, min?: any, max?: any, ...more: Arg[]): Pattern
  speed(speed?: any, ...more: Arg[]): Pattern
  spiral(options?: any, stretch?: any, size?: any, thickness?: any, cap?: any, inset?: any, playheadColor?: any, playheadLength?: any, playheadThickness?: any, padding?: any, steady?: any, activeColor?: any, inactiveColor?: any, colorizeInactive?: any, fade?: any, logSpiral?: any, ...more: Arg[]): Pattern
  splice(...more: Arg[]): Pattern
  splitQueries(...more: Arg[]): Pattern
  spread(spread?: any, ...more: Arg[]): Pattern
  squeeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
  squeezeBind(...more: Arg[]): Pattern
  squeezeJoin(...more: Arg[]): Pattern
  squeezeout(...more: Arg[]): Pattern
  squiz(squiz?: any, ...more: Arg[]): Pattern
  src(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  stack(...more: Arg[]): Pattern
  stepBind(...more: Arg[]): Pattern
  stepJoin(...more: Arg[]): Pattern
  steps(...more: Arg[]): Pattern
  stepsPerOctave(...more: Arg[]): Pattern
  strans(offset?: any, ...more: Arg[]): Pattern
  stretch(factor?: any, ...more: Arg[]): Pattern
  striate(...more: Arg[]): Pattern
  stripContext(...more: Arg[]): Pattern
  struct(...more: Arg[]): Pattern
  structAll(...more: Arg[]): Pattern
  stut(times?: any, feedback?: any, time?: any, ...more: Arg[]): Pattern
  stutWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  stutwith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  sub(...more: Arg[]): Pattern
  superimpose(...more: Arg[]): Pattern
  supradough(...more: Arg[]): Pattern
  sus(gain?: any, ...more: Arg[]): Pattern
  sustain(gain?: any, ...more: Arg[]): Pattern
  sustainpedal(...more: Arg[]): Pattern
  swing(subdivision?: any, ...more: Arg[]): Pattern
  swingBy(subdivision?: any, offset?: any, ...more: Arg[]): Pattern
  sysex(id?: any, data?: any, ...more: Arg[]): Pattern
  sysexdata(data?: any, ...more: Arg[]): Pattern
  sysexid(id?: any, ...more: Arg[]): Pattern
  sz(size?: any, ...more: Arg[]): Pattern
  tag(tag?: any, ...more: Arg[]): Pattern
  take(...more: Arg[]): Pattern
  timeline(...more: Arg[]): Pattern
  toBipolar(...more: Arg[]): Pattern
  tour(...more: Arg[]): Pattern
  trans(amount?: any, ...more: Arg[]): Pattern
  transient(attack?: any, sustain?: any, ...more: Arg[]): Pattern
  transpose(amount?: any, ...more: Arg[]): Pattern
  trem(speed?: any, ...more: Arg[]): Pattern
  tremdepth(depth?: any, ...more: Arg[]): Pattern
  tremolo(speed?: any, ...more: Arg[]): Pattern
  tremolodepth(depth?: any, ...more: Arg[]): Pattern
  tremolophase(offset?: any, ...more: Arg[]): Pattern
  tremoloshape(shape?: any, ...more: Arg[]): Pattern
  tremoloskew(amount?: any, ...more: Arg[]): Pattern
  tremolosync(cycles?: any, ...more: Arg[]): Pattern
  tremphase(offset?: any, ...more: Arg[]): Pattern
  tremshape(shape?: any, ...more: Arg[]): Pattern
  tremskew(amount?: any, ...more: Arg[]): Pattern
  tremsync(cycles?: any, ...more: Arg[]): Pattern
  triode(...more: Arg[]): Pattern
  tscope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: Arg[]): Pattern
  tsdelay(...more: Arg[]): Pattern
  uid(...more: Arg[]): Pattern
  undegrade(...more: Arg[]): Pattern
  undegradeBy(amount?: any, ...more: Arg[]): Pattern
  unison(numvoices?: any, ...more: Arg[]): Pattern
  unit(unit?: any, ...more: Arg[]): Pattern
  unjoin(...more: Arg[]): Pattern
  v(frequency?: any, ...more: Arg[]): Pattern
  val(...more: Arg[]): Pattern
  vel(...more: Arg[]): Pattern
  velocity(...more: Arg[]): Pattern
  vib(frequency?: any, ...more: Arg[]): Pattern
  vibmod(depth?: any, ...more: Arg[]): Pattern
  vibrato(frequency?: any, ...more: Arg[]): Pattern
  vmod(depth?: any, ...more: Arg[]): Pattern
  voice(...more: Arg[]): Pattern
  voicing(...more: Arg[]): Pattern
  voicings(dictionary?: any, ...more: Arg[]): Pattern
  vowel(vowel?: any, ...more: Arg[]): Pattern
  w(...more: Arg[]): Pattern
  warp(amount?: any, ...more: Arg[]): Pattern
  warpatt(time?: any, ...more: Arg[]): Pattern
  warpattack(time?: any, ...more: Arg[]): Pattern
  warpdc(dcoffset?: any, ...more: Arg[]): Pattern
  warpdec(time?: any, ...more: Arg[]): Pattern
  warpdecay(time?: any, ...more: Arg[]): Pattern
  warpdepth(depth?: any, ...more: Arg[]): Pattern
  warpenv(amount?: any, ...more: Arg[]): Pattern
  warpmode(mode?: any, ...more: Arg[]): Pattern
  warprate(rate?: any, ...more: Arg[]): Pattern
  warprel(time?: any, ...more: Arg[]): Pattern
  warprelease(time?: any, ...more: Arg[]): Pattern
  warpshape(shape?: any, ...more: Arg[]): Pattern
  warpskew(skew?: any, ...more: Arg[]): Pattern
  warpsus(gain?: any, ...more: Arg[]): Pattern
  warpsustain(gain?: any, ...more: Arg[]): Pattern
  warpsync(rate?: any, ...more: Arg[]): Pattern
  waveloss(...more: Arg[]): Pattern
  wavetablePhaseRand(amount?: any, ...more: Arg[]): Pattern
  wavetablePosition(position?: any, ...more: Arg[]): Pattern
  wavetableWarp(amount?: any, ...more: Arg[]): Pattern
  wavetableWarpMode(mode?: any, ...more: Arg[]): Pattern
  when(binary_pat?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  whenKey(...more: Arg[]): Pattern
  withContext(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  withHap(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  withHapSpan(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  withHapTime(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  withHaps(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  withLoc(start?: any, end?: any, ...more: Arg[]): Pattern
  withQuerySpan(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  withQuerySpanMaybe(...more: Arg[]): Pattern
  withQueryTime(func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  withState(...more: Arg[]): Pattern
  withSteps(...more: Arg[]): Pattern
  withValue(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
  within(start?: any, end?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
  wordfall(...more: Arg[]): Pattern
  worklet(src?: any, inputs?: any, ...more: Arg[]): Pattern
  wt(position?: any, ...more: Arg[]): Pattern
  wtatt(time?: any, ...more: Arg[]): Pattern
  wtattack(time?: any, ...more: Arg[]): Pattern
  wtdc(dcoffset?: any, ...more: Arg[]): Pattern
  wtdec(time?: any, ...more: Arg[]): Pattern
  wtdecay(time?: any, ...more: Arg[]): Pattern
  wtdepth(depth?: any, ...more: Arg[]): Pattern
  wtenv(amount?: any, ...more: Arg[]): Pattern
  wtphaserand(amount?: any, ...more: Arg[]): Pattern
  wtrate(rate?: any, ...more: Arg[]): Pattern
  wtrel(time?: any, ...more: Arg[]): Pattern
  wtrelease(time?: any, ...more: Arg[]): Pattern
  wtshape(shape?: any, ...more: Arg[]): Pattern
  wtskew(skew?: any, ...more: Arg[]): Pattern
  wtsus(gain?: any, ...more: Arg[]): Pattern
  wtsustain(gain?: any, ...more: Arg[]): Pattern
  wtsync(rate?: any, ...more: Arg[]): Pattern
  x(...more: Arg[]): Pattern
  xfade(...more: Arg[]): Pattern
  xsdelay(...more: Arg[]): Pattern
  y(...more: Arg[]): Pattern
  zcrush(...more: Arg[]): Pattern
  zdelay(...more: Arg[]): Pattern
  zmod(...more: Arg[]): Pattern
  znoise(...more: Arg[]): Pattern
  zoom(...more: Arg[]): Pattern
  zoomArc(...more: Arg[]): Pattern
  zoomIn(...more: Arg[]): Pattern
  zoomarc(...more: Arg[]): Pattern
  zrand(...more: Arg[]): Pattern
  zzfx(...more: Arg[]): Pattern
}

declare function BlockWidget(...more: Arg[]): Pattern
declare function ClockCollator(...more: Arg[]): Pattern
declare function Cyclist(...more: Arg[]): Pattern
declare const DEFAULT_MAX_POLYPHONY: any
declare function Drawer(...more: Arg[]): Pattern
declare function FXr(...more: Arg[]): Pattern
declare function FXrel(...more: Arg[]): Pattern
declare function FXrelease(...more: Arg[]): Pattern
declare function Fraction(...more: Arg[]): Pattern
declare function Framer(...more: Arg[]): Pattern
declare function H(...more: Arg[]): Pattern
declare function Hap(...more: Arg[]): Pattern
/**
 * Create a pattern. As an end user, you will most likely not create a Pattern directly.
 * @param query {function} The function that maps a State to an array of Hap.
 */
declare function Pattern(query?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
declare function SliderWidget(...more: Arg[]): Pattern
declare const StartRules: any
declare function State(...more: Arg[]): Pattern
declare function StrudelMirror(...more: Arg[]): Pattern
declare function TimeSpan(...more: Arg[]): Pattern
declare const Vim: any
declare const Warpmode: any
declare const WebMidi: any
declare function __chooseWith(...more: Arg[]): Pattern
declare function __pianoroll(...more: Arg[]): Pattern
declare function _brandBy(...more: Arg[]): Pattern
declare function _fitslice(...more: Arg[]): Pattern
declare function _irand(...more: Arg[]): Pattern
declare function _keyDown(...more: Arg[]): Pattern
declare function _match(...more: Arg[]): Pattern
declare function _mod(...more: Arg[]): Pattern
declare function _morph(...more: Arg[]): Pattern
declare function _polymeterListSteps(...more: Arg[]): Pattern
declare function _retime(...more: Arg[]): Pattern
declare function _slices(...more: Arg[]): Pattern
declare const _strudelLoaded: any
/**
 * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
 * @param amount {number | Pattern} acceleration.
 * @example
 * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
 */
declare function accelerate(amount?: any, ...more: Arg[]): Pattern
declare function activateTheme(...more: Arg[]): Pattern
declare function activeLabel(...more: Arg[]): Pattern
declare function ad(...more: Arg[]): Pattern
/**
 * Assumes a pattern of numbers. Adds the given number to each item in the pattern.
 * @example
 * // Here, the triad 0, 2, 4 is shifted by different amounts
 * n("0 2 4".add("<0 3 4 0>")).scale("C:major")
 * // Without add, the equivalent would be:
 * // n("<[0 2 4] [3 5 7] [4 6 8] [0 2 4]>").scale("C:major")
 * @example
 * // You can also use add with notes:
 * note("c3 e3 g3".add("<0 5 7 0>"))
 * // Behind the scenes, the notes are converted to midi numbers:
 * // note("48 52 55".add("<0 5 7 0>"))
 */
declare function add(...more: Arg[]): Pattern
/**
 * Adds a new custom voicing dictionary.
 * @param name {string} identifier for the voicing dictionary
 * @param dictionary {Object} maps chord symbol to possible voicings
 * @param range {Array} min, max note
 * @example
 * addVoicings('cookie', {
 *   7: ['3M 7m 9M 12P 15P', '7m 10M 13M 16M 19P'],
 *   '^7': ['3M 6M 9M 12P 14M', '7M 10M 13M 16M 19P'],
 *   m7: ['8P 11P 14m 17m 19P', '5P 8P 11P 14m 17m'],
 *   m7b5: ['3m 5d 8P 11P 14m', '5d 8P 11P 14m 17m'],
 *   o7: ['3m 6M 9M 11A 15P'],
 *   '7alt': ['3M 7m 10m 13m 15P'],
 *   '7#11': ['7m 10m 13m 15P 17m'],
 * }, ['C3', 'C6'])
 * "<C^7 A7 Dm7 G7>".voicings('cookie').note()
 */
declare function addVoicings(name?: any, dictionary?: any, range?: any, ...more: Arg[]): Pattern
declare const addWidget: any
/**
 * ADSR envelope: Combination of Attack, Decay, Sustain, and Release.
 * @param time {number | Pattern} attack time in seconds
 * @param time {number | Pattern} decay time in seconds
 * @param gain {number | Pattern} sustain level (0 to 1)
 * @param time {number | Pattern} release time in seconds
 * @example
 * note("[c3 bb2 f3 eb3]*2").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
 */
declare function adsr(time?: any, time_?: any, gain?: any, time__?: any, ...more: Arg[]): Pattern
/**
 * Register an alias for a bank of sounds.
 * Optionally accepts a single argument map of bank aliases.
 * Optionally accepts a single argument string of a path to a JSON file containing bank aliases.
 * @param bank {string} The bank to alias
 * @param alias {string} The alias to use for the bank
 */
declare function aliasBank(bank?: any, alias?: any, ...more: Arg[]): any
declare function all(...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(0.9, fn)
 * @example
 * s("hh*8").almostAlways(x=>x.speed("0.5"))
 */
declare function almostAlways(...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(0.1, fn)
 * @example
 * s("hh*8").almostNever(x=>x.speed("0.5"))
 */
declare function almostNever(...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(1, fn) (always calls fn)
 * @example
 * s("hh*8").always(x=>x.speed("0.5"))
 */
declare function always(...more: Arg[]): Pattern
/**
 * Like gain, but linear.
 * @param amount {number | Pattern} gain.
 * @example
 * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
 */
declare function amp(amount?: any, ...more: Arg[]): Pattern
declare const analysers: any
declare const analysersData: any
declare function analyze(...more: Arg[]): Pattern
/**
 * The top note to align the voicing to. Defaults to c5
 * @param anchorNote {string | Pattern} the note to align the voicings to
 * @example
 * anchor("<c4 g4 c5 g5>").chord("C").voicing()
 */
declare function anchor(anchorNote?: any, ...more: Arg[]): Pattern
declare function and(...more: Arg[]): Pattern
declare function angle(...more: Arg[]): Pattern
/**
 * Layers the result of the given function(s). Like superimpose, but without the original pattern:
 * Synonyms: apply
 * @example
 * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
 *   .layer(x=>x.add("0,2"))
 *   .scale('C minor').note()
 */
declare function apply(...more: Arg[]): Pattern
declare function applyFM(...more: Arg[]): Pattern
declare function applyGainCurve(...more: Arg[]): Pattern
declare function applyN(...more: Arg[]): Pattern
declare function applyParameterModulators(...more: Arg[]): Pattern
declare function ar(...more: Arg[]): Pattern
/**
 * Selects indices in in stacked notes.
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arp("0 [0,2] 1 [0,2]")
 */
declare function arp(...more: Arg[]): Pattern
/**
 * Selects indices in in stacked notes.
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arpWith(haps => haps[2])
 */
declare function arpWith(...more: Arg[]): Pattern
/**
 * Allows to arrange multiple patterns together over multiple cycles.
 * Takes a variable number of arrays with two elements specifying the number of cycles and the pattern to use.
 * @example
 * arrange(
 *   [4, "<c a f e>(3,8)"],
 *   [2, "<g a>(5,8)"]
 * ).note()
 */
declare function arrange(...more: Arg[]): Pattern
/**
 * Sets properties in a batch.
 * @param mapping {String | Array} the control names that are set
 * @example
 * "c:.5 a:1 f:.25 e:.8".as("note:clip")
 * @example
 * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
 */
declare function as(mapping?: any, ...more: Arg[]): Pattern
/**
 * Asymmetrical diode distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function asym(distortion?: any, volume?: any, ...more: Arg[]): Pattern
/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 * Synonyms: att
 * @param attack {number | Pattern} time in seconds.
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 */
declare function att(attack?: any, ...more: Arg[]): Pattern
/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 * Synonyms: att
 * @param attack {number | Pattern} time in seconds.
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 */
declare function attack(attack?: any, ...more: Arg[]): Pattern
declare function averageArray(...more: Arg[]): Pattern
declare function backgroundImage(...more: Arg[]): Pattern
declare function band(...more: Arg[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bandf(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the band-pass q-factor (resonance).
 * Synonyms: bandq
 * @param q {number | Pattern} q factor
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 */
declare function bandq(q?: any, ...more: Arg[]): Pattern
/**
 * Select the sound bank to use. To be used together with s. The bank name (+ "_") will be prepended to the value of s.
 * @param bank {string | Pattern} the name of the bank
 * @example
 * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
 */
declare function bank(bank?: any, ...more: Arg[]): Pattern
declare function base64ToUnicode(...more: Arg[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbexpr
 * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 */
declare function bbexpr(byteBeatExpression?: any, ...more: Arg[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbst
 * @param byteBeatStartTime {number | Pattern} in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 */
declare function bbst(byteBeatStartTime?: any, ...more: Arg[]): Pattern
/**
 * creates a structure pattern from divisions of a cycle
 * especially useful for creating rhythms
 * @example
 * s("bd").beat("0,7,10", 16)
 * @example
 * s("sd").beat("4,12", 16)
 */
declare function beat(...more: Arg[]): Pattern
/**
 * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. 0.25 to cut off the first quarter from each sample.
 * @param amount {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
 * s("rave").begin("<0 .25 .5 .75>").fast(2)
 */
declare function begin(amount?: any, ...more: Arg[]): Pattern
/**
 * Generates a continuous pattern of [berlin noise](conceived by Jame Coyne and Jade Rowland as a joke but turned out to be surprisingly cool and useful,
 * like perlin noise but with sawtooth waves), in the range 0..1.
 * @example
 * // ascending arpeggios
 * n("0!16".add(berlin.fast(4).mul(14))).scale("d:minor")
 */
declare const berlin: Pattern
/**
 * Postgain multiplier prior to sending the signal to the audio bus.
 * Synonyms: bgain
 * @param number {number | Pattern}
 */
declare function bgain(number?: any, ...more: Arg[]): Pattern
/**
 * Creates a binary pattern from a number.
 * @param n {number} input number to convert to binary
 * @example
 * "hh".s().struct(binary(5))
 * // "hh".s().struct("1 0 1")
 */
declare function binary(n?: any, ...more: Arg[]): Pattern
/**
 * Creates a binary list pattern from a number.
 * @param n {number} input number to convert to binary
s("saw").seg(8)
.partials(binaryL(irand(4096).add(1)))
 */
declare function binaryL(n?: any, ...more: Arg[]): Pattern
/**
 * Creates a binary pattern from a number, padded to n bits long.
 * @param n {number} input number to convert to binary
 * @param nBits {number} pattern length, defaults to 16
 * @example
 * "hh".s().struct(binaryN(55532, 16))
 * // "hh".s().struct("1 1 0 1 1 0 0 0 1 1 1 0 1 1 0 0")
 */
declare function binaryN(n?: any, nBits?: any, ...more: Arg[]): Pattern
/**
 * Creates a binary list pattern from a number, padded to n bits long.
 * @param n {number} input number to convert to binary
 * @param nBits {number} pattern length, defaults to 16
 */
declare function binaryNL(n?: any, nBits?: any, ...more: Arg[]): Pattern
declare function bind(...more: Arg[]): Pattern
declare function binshift(...more: Arg[]): Pattern
/**
 * Splits a pattern into the given number of slices, and plays them according to a pattern of slice numbers.
 * Similar to slice, but slices up patterns rather than sound samples.
 * @param number {number} of slices
 * @param slices {number} to play
 * @example
 * note("0 1 2 3 4 5 6 7".scale('c:mixolydian'))
 * .bite(4, "3 2 1 0")
 * @example
 * sound("bd - bd bd*2, - sd:6 - sd:5 sd:1 - [- sd:2] -, hh [- cp:7]")
 *   .bank("RolandTR909").speed(1.2)
 *   .bite(4, "0 0 [1 2] <3 2> 0 0 [2 1] 3")
 */
declare function bite(number?: any, slices?: any, ...more: Arg[]): Pattern
declare function bjork(...more: Arg[]): Pattern
declare function bjorklund(...more: Arg[]): Pattern
declare function blshift(...more: Arg[]): Pattern
/**
 * Modulates with the output from a given bus.
 * Can be called in sequence like pat.bmod(...).bmod(...) to set up multiple modulators
 * Send to an audio bus with otherPat.bus(..).
 * There are two ways to declare which control will be modulated:
 *
 * Explicitly put control in the config (e.g. bmod({ id: 2, c: "lpf" }))
 * If the control parameter is absent, the control immediately before the bmod call will be used
 * (e.g. s("saw").lpf(500).bmod({ id: 2 }) to modulate lpf)
 *
 * Modulators can be referred to by id so that they can be updated later e.g. inside
 * a sometimes. See example below.
 * @param config {Object} Bus modulation configuration.
 * @param config.bus {string | Pattern} Bus to get modulation signal from
 * @param config.control {string | Pattern} Node to modulate. Aliases: c
 * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
 * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
 * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
 * @param config.dc {number | Pattern} DC offset prior to application
 * @param config.fxi {number | Pattern} FX index to target
 * @param id {string | Pattern} ID to use for this modulator
 * @example
 * modulator: s("one").seg(64).gain(slider(0, 0, 1)).bus(1).dry(0)
 * carrier: s("saw").bmod({ b: 1 })
 */
declare function bmod(config?: any, id?: any, ...more: Arg[]): Pattern
declare function bor(...more: Arg[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bp(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the bandpass filter envelope.
 * Synonyms: bpa
 * @param attack {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa("<.5 .25 .1 .01>/4")
 * .bpenv(4)
 */
declare function bpa(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the bandpass filter envelope.
 * Synonyms: bpa
 * @param attack {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa("<.5 .25 .1 .01>/4")
 * .bpenv(4)
 */
declare function bpattack(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the bandpass filter envelope.
 * Synonyms: bpd
 * @param decay {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd("<.5 .25 .1 0>/4")
 * .bps(0.2)
 * .bpenv(4)
 */
declare function bpd(decay?: any, ...more: Arg[]): Pattern
/**
 * DC offset of the LFO for the bandpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function bpdc(dcoffset?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the bandpass filter envelope.
 * Synonyms: bpd
 * @param decay {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd("<.5 .25 .1 0>/4")
 * .bps(0.2)
 * .bpenv(4)
 */
declare function bpdecay(decay?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the bandpass filter
 * @param depth {number | Pattern} depth of modulation
 */
declare function bpdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the bandpass filter, in HZ
 * Synonyms: bpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
declare function bpdepthfreq(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the bandpass filter, in HZ
 * Synonyms: bpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
declare function bpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
/**
 * Sets the bandpass filter envelope modulation depth.
 * Synonyms: bpe
 * @param modulation {number | Pattern} depth of the bandpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa(.5)
 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function bpe(modulation?: any, ...more: Arg[]): Pattern
/**
 * Sets the bandpass filter envelope modulation depth.
 * Synonyms: bpe
 * @param modulation {number | Pattern} depth of the bandpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpa(.5)
 * .bpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function bpenv(modulation?: any, ...more: Arg[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bpf(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the band-pass q-factor (resonance).
 * Synonyms: bandq
 * @param q {number | Pattern} q factor
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 */
declare function bpq(q?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the bandpass filter envelope.
 * Synonyms: bpr
 * @param release {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .bpf(500)
 * .bpenv(4)
 * .bpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function bpr(release?: any, ...more: Arg[]): Pattern
/**
 * Rate of the LFO for the bandpass filter
 * @param rate {number | Pattern} rate in hertz
 */
declare function bprate(rate?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the bandpass filter envelope.
 * Synonyms: bpr
 * @param release {number | Pattern} time of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .bpf(500)
 * .bpenv(4)
 * .bpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function bprelease(release?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the bandpass filter envelope.
 * Synonyms: bps
 * @param sustain {number | Pattern} amplitude of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd(.5)
 * .bps("<0 .25 .5 1>/4")
 * .bpenv(4)
 */
declare function bps(sustain?: any, ...more: Arg[]): Pattern
/**
 * Shape of the LFO for the bandpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function bpshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Skew of the LFO for the bandpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function bpskew(skew?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the bandpass filter envelope.
 * Synonyms: bps
 * @param sustain {number | Pattern} amplitude of the bandpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .bpf(500)
 * .bpd(.5)
 * .bps("<0 .25 .5 1>/4")
 * .bpenv(4)
 */
declare function bpsustain(sustain?: any, ...more: Arg[]): Pattern
/**
 * Cycle-synced rate of the LFO for the bandpass filter
 * @param rate {number | Pattern} rate in cycles
 */
declare function bpsync(rate?: any, ...more: Arg[]): Pattern
/**
 * Returns a new pattern where every other cycle is played once, twice as
 * fast, and offset in time by one quarter of a cycle. Creates a kind of
 * breakbeat feel.
 */
declare function brak(...more: Arg[]): Pattern
/**
 * A continuous pattern of 0 or 1 (binary random)
 * @example
 * s("hh*10").pan(brand)
 */
declare const brand: Pattern
/**
 * A continuous pattern of 0 or 1 (binary random), with a probability for the value being 1
 * @param probability {number} a number between 0 and 1
 * @example
 * s("hh*10").pan(brandBy(0.2))
 */
declare function brandBy(probability?: any, ...more: Arg[]): Pattern
declare function brshift(...more: Arg[]): Pattern
/**
 * A bus is a send which can be used for mixing patterns. It combines with..
 * s("bus") to play that bus through another pattern (for, say, applying non-linear
 * effects like distortion to multiple signals)
 * otherPat.bmod(..) (to modulate another pattern with the bus)
 * @param number {number | Pattern}
 */
declare function bus(number?: any, ...more: Arg[]): Pattern
/**
 * Postgain multiplier prior to sending the signal to the audio bus.
 * Synonyms: bgain
 * @param number {number | Pattern}
 */
declare function busgain(number?: any, ...more: Arg[]): Pattern
declare function bxor(...more: Arg[]): Pattern
declare function bypass(...more: Arg[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbexpr
 * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 */
declare function byteBeatExpression(byteBeatExpression?: any, ...more: Arg[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbst
 * @param byteBeatStartTime {number | Pattern} in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 */
declare function byteBeatStartTime(byteBeatStartTime?: any, ...more: Arg[]): Pattern
declare function calculateSteps(...more: Arg[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 * Synonyms: cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 */
declare function cat(...more: Arg[]): Pattern
/**
 * MIDI control number: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control number (0-127)
 */
declare function ccn(MIDI?: any, ...more: Arg[]): Pattern
/**
 * MIDI control value: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control value (0-127)
 */
declare function ccv(MIDI?: any, ...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values set to
 * their mathematical ceiling. E.g. 3.2 replaced with 4, and -4.2
 * replaced with -4.
 * @example
 * note("42 42.1 42.5 43".ceil())
 */
declare function ceil(...more: Arg[]): Pattern
/**
 * Allows you to set the output channels on the interface
 * Synonyms: ch
 * @param channels {number | Pattern} pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 */
declare function ch(channels?: any, ...more: Arg[]): Pattern
/**
 * Choose the channel the pattern is sent to in superdirt
 * @param channel {number | Pattern} channel number
 */
declare function channel(channel?: any, ...more: Arg[]): Pattern
/**
 * Allows you to set the output channels on the interface
 * Synonyms: ch
 * @param channels {number | Pattern} pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 */
declare function channels(channels?: any, ...more: Arg[]): Pattern
/**
 * Distortion via Chebyshev polynomials
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function chebyshev(distortion?: any, volume?: any, ...more: Arg[]): Pattern
/**
 * Chooses randomly from the given list of elements.
 * @param xs {any} values / patterns to choose from.
 * @example
 * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
 */
declare function choose(xs?: any, ...more: Arg[]): Pattern
/**
 * Picks one of the elements at random each cycle.
 * Synonyms: randcat
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
declare function chooseCycles(...more: Arg[]): Pattern
declare function chooseIn(...more: Arg[]): Pattern
/**
 * As with {chooseWith}, but the structure comes from the chosen values, rather
 * than the pattern you're using to choose with.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function chooseInWith(pat?: any, xs?: any, ...more: Arg[]): Pattern
declare function chooseOut(...more: Arg[]): Pattern
/**
 * Choose from the list of values (or patterns of values) using the given
 * pattern of numbers, which should be in the range of 0..1
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * note("c2 g2!2 d2 f1").s(chooseWith(sine.fast(2), ["sawtooth", "triangle", "bd:6"]))
 */
declare function chooseWith(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * Cuts each sample into the given number of parts, allowing you to explore a technique known as 'granular synthesis'.
 * It turns a pattern of samples into a pattern of parts of samples.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes")
 *  .chop(4)
 *  .rev() // reverse order of chops
 *  .loopAt(2) // fit sample into 2 cycles
 */
declare function chop(...more: Arg[]): Pattern
/**
 * The chord to voice
 * @param symbols {string | Pattern} chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
 * @example
 * chord("<Am C D F Am E Am E>").voicing()
 */
declare function chord(symbols?: any, ...more: Arg[]): Pattern
/**
 * mix control for the chorus effect
 * @param chorus {string | Pattern} mix amount between 0 and 1
 * @example
 * note("d d a# a").s("sawtooth").chorus(.5)
 */
declare function chorus(chorus?: any, ...more: Arg[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunk(...more: Arg[]): Pattern
/**
 * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
 * Synonyms: chunkback
 * @example
 * "0 1 2 3".chunkBack(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunkBack(...more: Arg[]): Pattern
/**
 * Like chunkInto, but moves backwards through the chunks.
 * Synonyms: chunkbackinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkBackInto(...more: Arg[]): Pattern
/**
 * Like chunk, but the function is applied to a looped subcycle of the source pattern.
 * Synonyms: chunkinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkInto(...more: Arg[]): Pattern
/**
 * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
 * Synonyms: chunkback
 * @example
 * "0 1 2 3".chunkBack(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunkback(...more: Arg[]): Pattern
/**
 * Like chunkInto, but moves backwards through the chunks.
 * Synonyms: chunkbackinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkbackinto(...more: Arg[]): Pattern
/**
 * Like chunk, but the function is applied to a looped subcycle of the source pattern.
 * Synonyms: chunkinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkinto(...more: Arg[]): Pattern
declare function clamp(...more: Arg[]): Pattern
declare function cleanupDraw(...more: Arg[]): Pattern
declare function cleanupOnEnd(...more: Arg[]): Pattern
declare function cleanupUi(...more: Arg[]): Pattern
declare function clearHydra(...more: Arg[]): Pattern
/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 * Synonyms: legato
 * @param factor {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 */
declare function clip(factor?: any, ...more: Arg[]): Pattern
/**
 * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
 * @param factor {number | Pattern} 1 for original 2 for half, 3 for a third and so on.
 * @example
 * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
 */
declare function coarse(factor?: any, ...more: Arg[]): Pattern
declare function code2hash(...more: Arg[]): Pattern
declare const codemirrorSettings: any
/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * Synonyms: colour
 * @param color {string} Hexadecimal or CSS color name
 */
declare function color(color?: any, ...more: Arg[]): Pattern
declare const colorMap: any
/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * Synonyms: colour
 * @param color {string} Hexadecimal or CSS color name
 */
declare const colour: any
declare function comb(...more: Arg[]): Pattern
declare const compartments: any
declare const complex: any
declare function compose(...more: Arg[]): Pattern
/**
 * Compress each cycle into the given timespan, leaving a gap
 * @example
 * cat(
 *   s("bd sd").compress(.25,.75),
 *   s("~ bd sd ~")
 * )
 */
declare function compress(...more: Arg[]): Pattern
declare function compressSpan(...more: Arg[]): Pattern
/**
 * Dynamics Compressor. The params are compressor("threshold:ratio:knee:attack:release")
 * More info here
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02")
 */
declare function compressor(...more: Arg[]): Pattern
declare function compressorAttack(...more: Arg[]): Pattern
declare function compressorKnee(...more: Arg[]): Pattern
declare function compressorRatio(...more: Arg[]): Pattern
declare function compressorRelease(...more: Arg[]): Pattern
declare function compressspan(...more: Arg[]): Pattern
declare function connectBusModulator(...more: Arg[]): Pattern
declare function connectEnvelope(...more: Arg[]): Pattern
declare function connectLFO(...more: Arg[]): Pattern
declare function connectToDestination(...more: Arg[]): Pattern
declare function constant(...more: Arg[]): Pattern
/**
 * Experimental
 * Contracts the step size of the pattern by the given factor. See also expand.
 * @example
 * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
 */
declare function contract(...more: Arg[]): Pattern
/**
 * MIDI control: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control number (0-127)
 * @param MIDI {number | Pattern} controller value (0-127)
 */
declare function control(MIDI?: any, MIDI_?: any, ...more: Arg[]): Pattern
declare const controls: any
declare function convertColorToNumber(...more: Arg[]): Pattern
declare function convertHexToNumber(...more: Arg[]): Pattern
/**
 * A cosine signal between 0 and 1.
 * @example
 * n(stack(sine,cosine).segment(16).range(0,15))
 * .scale("C:minor")
 */
declare const cosine: Pattern
/**
 * A cosine signal between -1 and 1 (like cosine, but bipolar).
 */
declare const cosine2: Pattern
/**
 * Plays the pattern at the given cycles per minute.
 * @example
 * s("<bd sd>,hh*2").cpm(90) // = 90 bpm
 */
declare function cpm(...more: Arg[]): Pattern
declare function cps(...more: Arg[]): Pattern
declare function createClock(...more: Arg[]): Pattern
declare function createFilter(...more: Arg[]): Pattern
declare function createParam(...more: Arg[]): Pattern
declare function createParams(...more: Arg[]): Pattern
/**
 * Bit crusher effect.
 * @param depth {number | Pattern} between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
 * @example
 * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
 */
declare function crush(depth?: any, ...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the low-pass filter.
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 * Synonyms: cutoff, ctf, lp
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 */
declare function ctf(frequency?: any, ...more: Arg[]): Pattern
declare function ctlNum(...more: Arg[]): Pattern
declare function ctranspose(...more: Arg[]): Pattern
/**
 * Cubic polynomial distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function cubic(distortion?: any, volume?: any, ...more: Arg[]): Pattern
declare function curry(...more: Arg[]): Pattern
declare function curve(...more: Arg[]): Pattern
/**
 * In the style of classic drum-machines, cut will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
 * @param group {number | Pattern} cut group number
 * @example
 * s("[oh hh]*4").cut(1)
 */
declare function cut(group?: any, ...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the low-pass filter.
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 * Synonyms: cutoff, ctf, lp
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 */
declare function cutoff(frequency?: any, ...more: Arg[]): Pattern
declare function cycleToSeconds(...more: Arg[]): Pattern
/**
 * A pattern measuring the duration of events,
 * in cycles per event. cyclesPer doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example cyclesPer.struct("1 1 [1 1] 1") would give the same as "0.25 0.25 [0.125 0.125] 0.25".
 * See also its reciprocal, per, also known as perCycle.
 * @example
 * // Shorter events are lower in pitch
 * sound("saw saw [saw saw] saw")
 *   .note(cyclesPer.range(50, 100))
 * @example
 * sound("bd sd [bd bd] sd*4 [- sd] [bd [bd bd]]")
 *   .note(cyclesPer.add(20))
 */
declare const cyclesPer: Pattern
/**
 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
 * Note that the decay is only audible if the sustain value is lower than 1.
 * Synonyms: dec
 * @param time {number | Pattern} decay time in seconds
 * @example
 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
 */
declare function dec(time?: any, ...more: Arg[]): Pattern
/**
 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
 * Note that the decay is only audible if the sustain value is lower than 1.
 * Synonyms: dec
 * @param time {number | Pattern} decay time in seconds
 * @example
 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
 */
declare function decay(time?: any, ...more: Arg[]): Pattern
declare const defaultSettings: any
/**
 * configures the default midimap, which is used when no "midimap" port is set
 * @example
 * defaultmidimap({ lpf: 74 })
 * $: note("c a f e").midi();
 * $: lpf(sine.slow(4).segment(16)).midi();
 */
declare function defaultmidimap(...more: Arg[]): Pattern
/**
 * Randomly removes 50% of events from the pattern. Shorthand for .degradeBy(0.5)
 * @example
 * s("hh*8").degrade()
 * @example
 * s("[hh?]*8")
 */
declare function degrade(...more: Arg[]): Pattern
/**
 * Randomly removes events from the pattern by a given amount.
 * 0 = 0% chance of removal
 * 1 = 100% chance of removal
 * @param amount {number} a number between 0 and 1
 * @example
 * s("hh*8").degradeBy(0.2)
 * @example
 * s("[hh?0.2]*8")
 * @example
 * //beat generator
 * s("bd").segment(16).degradeBy(.5).ribbon(16,1)
 */
declare function degradeBy(amount?: any, ...more: Arg[]): Pattern
declare function degradeByWith(...more: Arg[]): Pattern
declare function degree(...more: Arg[]): Pattern
/**
 * Sets the level of the delay signal.
 * When using mininotation, you can also optionally add the 'delaytime' and 'delayfeedback' parameter,
 * separated by ':'.
 * @param level {number | Pattern} between 0 and 1
 * @example
 * s("bd bd").delay("<0 .25 .5 1>")
 * @example
 * s("bd bd").delay("0.65:0.25:0.9 0.65:0.125:0.7")
 */
declare function delay(level?: any, ...more: Arg[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function delayfb(feedback?: any, ...more: Arg[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function delayfeedback(feedback?: any, ...more: Arg[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function delayspeed(delayspeed?: any, ...more: Arg[]): Pattern
/**
 * Sets the time of the delay effect in cycles.
 * Synonyms: delayt, dt
 * @param cycles {number | Pattern} delay length in cycles
 * @example
 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
 */
declare function delaysync(cycles?: any, ...more: Arg[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function delayt(delayspeed?: any, ...more: Arg[]): Pattern
declare function delaytime(...more: Arg[]): Pattern
declare function deltaSlide(...more: Arg[]): Pattern
/**
 * Set detune for stacked voices of supported oscillators
 * Synonyms: det
 * @param amount {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 */
declare function det(amount?: any, ...more: Arg[]): Pattern
/**
 * Set detune for stacked voices of supported oscillators
 * Synonyms: det
 * @param amount {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 */
declare function detune(amount?: any, ...more: Arg[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function dfb(feedback?: any, ...more: Arg[]): Pattern
declare function dict(...more: Arg[]): Pattern
/**
 * Which dictionary to use for the voicings. This falls back to the default dictionary if not provided
 * @param dictionaryName {string} which dictionary (having been defined with addVoicings) to use
 * @example
 * addVoicings('house', {
 * '': ['7 12 16', '0 7 16', '4 7 12'],
 * 'm': ['0 3 7']
 * })
 * chord("<Am C D F Am E Am E>")
 * .dict('house').anchor(66)
 * .voicing().room(.5)
 */
declare function dictionary(dictionaryName?: any, ...more: Arg[]): Pattern
/**
 * Diode-emulating distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function diode(distortion?: any, volume?: any, ...more: Arg[]): Pattern
/**
 * Wave shaping distortion. CAUTION: it can get loud.
 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
 * Synonyms: dist
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 * @param type {number | string | Pattern} type of distortion to apply
 * @example
 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
 * @example
 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
 * @example
 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
 */
declare function dist(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
/**
 * Wave shaping distortion. CAUTION: it can get loud.
 * Second option in optional array syntax (ex: ".9:.5") applies a postgain to the output. Third option sets the waveshaping type.
 * Most useful values are usually between 0 and 10 (depending on source gain). If you are feeling adventurous, you can turn it up to 11 and beyond ;)
 * Synonyms: dist
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 * @param type {number | string | Pattern} type of distortion to apply
 * @example
 * s("bd sd [~ bd] sd,hh*8").distort("<0 2 3 10:.5>")
 * @example
 * note("d1!8").s("sine").penv(36).pdecay(.12).decay(.23).distort("8:.4")
 * @example
 * s("bd:4*4").bank("tr808").distort("3:0.5:diode")
 */
declare function distort(distortion?: any, volume?: any, type?: any, ...more: Arg[]): Pattern
declare const distortionAlgorithms: any
/**
 * Type of waveshaping distortion to apply.
 * Synonyms: disttype
 * @param type {number | string | Pattern} type of distortion to apply
 * @example
 * s("bd*4").bank("tr909").distort(2).distorttype("<0 1 2>")
 * @example
 * s("sine").note("F1*2").release(1)
 *   .penv(24).pdecay(0.05)
 *   .distort(rand.range(1, 8))
 *   .distorttype("<fold chebyshev scurve diode asym sinefold>")
 */
declare function distorttype(type?: any, ...more: Arg[]): Pattern
/**
 * Postgain for waveshaping distortion.
 * Synonyms: distvol
 * @param volume {number | Pattern} linear postgain of the distortion
 * @example
 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
 */
declare function distortvol(volume?: any, ...more: Arg[]): Pattern
/**
 * Divides each number by the given factor.
 */
declare function div(...more: Arg[]): Pattern
/**
 * DJ filter, below 0.5 is low pass filter, above is high pass filter.
 * @param cutoff {number | Pattern} below 0.5 is low pass filter, above is high pass filter
 * @example
 * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
 */
declare function djf(cutoff?: any, ...more: Arg[]): Pattern
declare function dough(...more: Arg[]): Pattern
declare function doughTrigger(...more: Arg[]): Pattern
declare function doughsamples(...more: Arg[]): Pattern
declare function drawFrequencyScope(...more: Arg[]): Pattern
/**
 * Intended for a debugging, drawLine renders the pattern as a string, where each character represents the same time span.
 * Should only be used with single characters as values, otherwise the character slots will be messed up.
 * Character legend:
 *
 * "|" cycle separator
 * "-" hold previous value
 * "." silence
 * @param pattern {Pattern} the pattern to use
 * @param chars {number} max number of characters (approximately)
 * @example
 * const line = drawLine("0 [1 2 3]", 10); // |0--123|0--123
 * console.log(line);
 * silence;
 */
declare function drawLine(pattern?: any, chars?: any, ...more: Arg[]): Pattern
declare function drawPianoroll(...more: Arg[]): Pattern
declare function drawTimeScope(...more: Arg[]): Pattern
/**
 * Filter overdrive for supported filter types
 * @param amount {number | Pattern}
 * @example
 * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
 */
declare function drive(amount?: any, ...more: Arg[]): Pattern
/**
 * Experimental
 * Drops the given number of steps from a pattern.
 * A positive number will drop steps from the start of a pattern, and a negative number from the end.
 * @example
 * "tha dhi thom nam".drop("1").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("-1").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("0 1 2 3").sound().bank("mridangam")
 * @example
 * "tha dhi thom nam".drop("0 -1 -2 -3").sound().bank("mridangam")
 */
declare function drop(...more: Arg[]): Pattern
/**
 * Set dryness of reverb. See room and size for more information about reverb.
 * @param dry {number | Pattern} 0 = wet, 1 = dry
 * @example
 * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
 */
declare function dry(dry?: any, ...more: Arg[]): Pattern
declare function drywet(...more: Arg[]): Pattern
declare function ds(...more: Arg[]): Pattern
declare function dspWorklet(...more: Arg[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function dt(delayspeed?: any, ...more: Arg[]): Pattern
/**
 * Modulate the amplitude of an orbit to create a "sidechain" like effect.
 * Can be applied to multiple orbits with the ':' mininotation, e.g. duckorbit("2:3")
 * Synonyms: duck
 * @param orbit {number | Pattern} target orbit
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth(1)
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("hh*16").orbit(3)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth(1)
 */
declare function duck(orbit?: any, ...more: Arg[]): Pattern
/**
 * The time required for the ducked signal(s) to return to their normal volume.
 * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
 * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
 * Synonyms: duckatt
 * @param time {number | Pattern} The attack time in seconds
 * @example
 * sound: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack("<0.2 0 0.4>").duckdepth(1)
 * @example
 * moreduck: n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2)
 * lessduck: s("hh*16").orbit(5)
 * ducker: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:5").duckattack("0.4:0.1")
 */
declare function duckattack(time?: any, ...more: Arg[]): Pattern
/**
 * The amount of ducking applied to target orbit
 * Can vary across orbits with the ':' mininotation, e.g. duckdepth("0.3:0.1").
 * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
 * @param depth {number | Pattern} depth of modulation from 0 to 1
 * @example
 * stack( n(run(8)).scale("c:minor").s("sawtooth").delay(.7).orbit(2), s("bd:4!4").beat("0,4,8,11,14",16).duckorbit(2).duckattack(0.2).duckdepth("<1 .9 .6 0>"))
 * @example
 * $: n(run(16)).scale("c:minor:pentatonic").s("sawtooth").delay(.7).orbit(2)
 * $: s("hh*16").orbit(3)
 * $: s("bd:4!4").beat("0,4,8,11,14",16).duckorbit("2:3").duckattack(0.2).duckdepth("1:0.5")
 */
declare function duckdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * The time required for the ducked signal(s) to reach their lowest volume.
 * Can be used to prevent clicking or for creative rhythmic effects.
 * Can vary across orbits with the ':' mininotation, e.g. duckonset("0:0.003").
 * Note: this requires first applying the effect to multiple orbits with e.g. duckorbit("2:3").
 * Synonyms: duckons
 * @param time {number | Pattern} The onset time in seconds
 * @example
 * // Clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0).postgain(0)
 * @example
 * // No clicks
 * sound: freq("63.2388").s("sine").orbit(2).gain(4)
 * duckerWithoutClick: s("bd*4").duckorbit(2).duckattack(0.3).duckonset(0.01).postgain(0)
 * @example
 * // Rhythmic
 * noise: s("pink").distort("2:1").orbit(4) // used rhythmically with 0.3 onset below
 * hhat: s("hh*16").orbit(7)
 * ducker: s("bd*4").bank("tr909").duckorbit("4:7").duckonset("0.3:0.003").duckattack(0.25)
 */
declare function duckonset(time?: any, ...more: Arg[]): Pattern
/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 * Synonyms: dur
 * @param seconds {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 */
declare function dur(seconds?: any, ...more: Arg[]): Pattern
/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 * Synonyms: dur
 * @param seconds {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 */
declare function duration(seconds?: any, ...more: Arg[]): Pattern
/**
 * Applies a function to each of the running patterns separately. This is intended for future use with upcoming 'stepwise' features. See all for a version that applies the function to all the patterns stacked together into a single pattern.
 * $: sound("bd - cp sd")
 * $: sound("hh*8")
 * each(fast("<2 3>"))
 */
declare function each(...more: Arg[]): Pattern
/**
 * Nudge a pattern to start earlier in time. Equivalent of Tidal's <~ operator
 * @param cycles {number | Pattern} number of cycles to nudge left
 * @example
 * "bd ~".stack("hh ~".early(.1)).s()
 */
declare function early(cycles?: any, ...more: Arg[]): Pattern
/**
 * Superimpose and offset multiple times, gradually decreasing the velocity
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param feedback {number} velocity multiplicator for each iteration
 * @example
 * s("bd sd").echo(3, 1/6, .8)
 */
declare function echo(times?: any, time?: any, feedback?: any, ...more: Arg[]): Pattern
/**
 * Superimpose and offset multiple times, applying the given function each time.
 * Synonyms: echowith, stutWith, stutwith
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param func {function} function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
declare function echoWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Superimpose and offset multiple times, applying the given function each time.
 * Synonyms: echowith, stutWith, stutwith
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param func {function} function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
declare function echowith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
declare function effectSend(...more: Arg[]): Pattern
/**
 * A 'euclid' variant with an additional parameter that morphs the resulting
 * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
 * sound("bd").euclidish(3,8,0) would be the same as
 * sound("bd").euclid(3,8), and sound("bd").euclidish(3,8,1) would be the
 * same as sound("bd bd bd"). sound("bd").euclidish(3,8,0.5) would have a
 * groove somewhere between.
 * Inspired by the work of Malcom Braff.
 * Synonyms: eish
 * @param pulses {number} the number of onsets
 * @param steps {number} the number of steps to fill
 * @param groove {number} exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
 * @example
 * sound("hh").euclidish(7,12,sine.slow(8))
 * .pan(sine.slow(8))
 */
declare function eish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
declare function enableWebMidi(...more: Arg[]): Pattern
/**
 * The same as .begin, but cuts off the end off each sample.
 * @param length {number | Pattern} 1 = whole sample, .5 = half sample, .25 = quarter sample etc..
 * @example
 * s("bd*2,oh*4").end("<.1 .2 .5 1>").fast(2)
 */
declare function end(length?: any, ...more: Arg[]): Pattern
declare function enhance(...more: Arg[]): Pattern
/**
 * Configures an envelope. Can be called in sequence like pat.env(...).env(...) to set up multiple envelopes
 * There are two ways to declare which control will be modulated:
 *
 * Explicitly put control in the config (e.g. env({ c: "lpf" }))
 * If the control parameter is absent, the control immediately before the env call will be used
 * (e.g. s("saw").lpf(500).env({ a: 1 }) to modulate lpf)
 *
 * Modulators can be referred to by id so that they can be updated later e.g. inside
 * a sometimes. See example below.
 * @param config {Object} Envelope configuration.
 * @param config.control {string | Pattern} Node to modulate. Aliases: c
 * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
 * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
 * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
 * @param config.attack {number | Pattern} Time to reach depth. Aliases: att, a
 * @param config.decay {number | Pattern} Time to reach sustain. Aliases: dec, d
 * @param config.sustain {number | Pattern} Sustain depth. Aliases: sus, s
 * @param config.release {number | Pattern} Time to return to nominal value. Aliases: rel, r
 * @param config.acurve {number | Pattern} Snappiness of attack curve (-1 = relaxed, 1 = snappy). Aliases: ac
 * @param config.dcurve {number | Pattern} Snappiness of decay curve (-1 = relaxed, 1 = snappy). Aliases: dc
 * @param config.rcurve {number | Pattern} Snappiness of release curve (-1 = relaxed, 1 = snappy). Aliases: rc
 * @param config.fxi {number | Pattern} FX index to target
 * @param id {string | Pattern} ID to use for this modulator
 * @example
 * s("saw").note("F1").lpf(500).env({ a: 1 })
 * @example
 * s("saw").env({ d: 1 }).note("F1")
 *   .lpq(4).lpf(50)
 *   .env({ a: 0.1, d: 1, ac: 0.8, dc: 0.3, depth: 50 })
 * @example
 * s("saw").lpf(500).diode(0.3)
 *   .env({ c: "lpf", a: 0.5, d: 0.5 })
 * @example
 * s("pulse").lpf(500).env({ a: 1 })
 *   .env({ c: "s", a: 1 })
 *   .diode(0.3)
 *   .sometimes(x => x.env({ a: "0.5" }, 1)) // envelope #1 (0-indexed)
 * @example
 * s("pulse").lpf(500).env({ a: 1 }, 'lpf_mod')
 *   .env({ c: "s", a: 1 })
 *   .diode(0.3)
 *   .sometimes(x => x.env({ a: "0.5" }, 'lpf_mod'))
 */
declare function env(config?: any, id?: any, ...more: Arg[]): Pattern
declare function eq(...more: Arg[]): Pattern
declare function eqt(...more: Arg[]): Pattern
declare function errorLogger(...more: Arg[]): Pattern
/**
 * Changes the structure of the pattern to form an Euclidean rhythm.
 * Euclidean rhythms are rhythms obtained using the greatest common
 * divisor of two numbers.  They were described in 2004 by Godfried
 * Toussaint, a Canadian computer scientist.  Euclidean rhythms are
 * really useful for computer/algorithmic music because they can
 * describe a large number of rhythms with a couple of numbers.
 * @param pulses {number} the number of onsets/beats
 * @param steps {number} the number of steps to fill
 * @example
 * // The Cuban tresillo pattern.
 * note("c3").euclid(3,8)
 */
declare function euclid(pulses?: any, steps?: any, ...more: Arg[]): Pattern
/**
 * Similar to euclid, but each pulse is held until the next pulse,
 * so there will be no gaps.
 * @param pulses {number} the number of onsets/beats
 * @param steps {number} the number of steps to fill
 * @param rotation offset in steps
 * @param pat
 * @example
 * note("c3").euclidLegato(3,8)
 */
declare const euclidLegato: any
/**
 * Similar to euclid, but each pulse is held until the next pulse,
 * so there will be no gaps, and has an additional parameter for 'rotating'
 * the resulting sequence
 * @param pulses {number} the number of onsets/beats
 * @param steps {number} the number of steps to fill
 * @param rotation {number} offset in steps
 * @example
 * note("c3").euclidLegatoRot(3,5,2)
 */
declare const euclidLegatoRot: any
/**
 * Like euclid, but has an additional parameter for 'rotating' the resulting sequence.
 * @param pulses {number} the number of onsets/beats
 * @param steps {number} the number of steps to fill
 * @param rotation {number} offset in steps
 * @example
 * // A Samba rhythm necklace from Brazil
 * note("c3").euclidRot(3,16,14)
 */
declare function euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: Arg[]): Pattern
/**
 * A 'euclid' variant with an additional parameter that morphs the resulting
 * rhythm from 0 (no morphing) to 1 (completely 'even'). For example
 * sound("bd").euclidish(3,8,0) would be the same as
 * sound("bd").euclid(3,8), and sound("bd").euclidish(3,8,1) would be the
 * same as sound("bd bd bd"). sound("bd").euclidish(3,8,0.5) would have a
 * groove somewhere between.
 * Inspired by the work of Malcom Braff.
 * Synonyms: eish
 * @param pulses {number} the number of onsets
 * @param steps {number} the number of steps to fill
 * @param groove {number} exists between the extremes of 0 (straight euclidian) and 1 (straight pulse)
 * @example
 * sound("hh").euclidish(7,12,sine.slow(8))
 * .pan(sine.slow(8))
 */
declare function euclidish(pulses?: any, steps?: any, groove?: any, ...more: Arg[]): Pattern
declare function euclidrot(...more: Arg[]): Pattern
declare function evalScope(...more: Arg[]): any
declare function evaluate(...more: Arg[]): Pattern
/**
 * An alias for firstOf
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").every(4, x=>x.rev())
 */
declare function every(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Experimental
 * Expands the step size of the pattern by the given factor.
 * @example
 * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
 */
declare function expand(...more: Arg[]): Pattern
declare function expression(...more: Arg[]): Pattern
/**
 * Experimental
 * extend is similar to fast in that it increases its density, but it also increases the step count
 * accordingly. So stepcat("a b".extend(2), "c d") would be the same as "a b a b c d", whereas
 * stepcat("a b".fast(2), "c d") would be the same as "[a b] [a b] c d".
 * @example
 * stepcat(
 *   sound("bd bd - cp").extend(2),
 *   sound("bd - sd -")
 * ).pace(8)
 */
declare function extend(...more: Arg[]): Pattern
declare const extensions: any
declare function fadeInTime(...more: Arg[]): Pattern
declare function fadeOutTime(...more: Arg[]): Pattern
declare function fadeTime(...more: Arg[]): Pattern
/**
 * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
 * @param center {number | Pattern} 0 to 1
 * @example
 * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
 * .lpenv(8).fanchor("<0 .5 1>")
 */
declare function fanchor(center?: any, ...more: Arg[]): Pattern
/**
 * Speed up a pattern by the given factor. Used by "*" in mini notation.
 * Synonyms: density
 * @param factor {number | Pattern} speed up factor
 * @example
 * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
 */
declare function fast(factor?: any, ...more: Arg[]): Pattern
/**
 * Like chunk, but the cycles of the source pattern aren't repeated
 * for each set of chunks.
 * Synonyms: fastchunk
 * @example
 * "<0 8> 1 2 3 4 5 6 7"
 * .scale("C2:major").note()
 * .fastChunk(4, x => x.color('red')).slow(2)
 */
declare function fastChunk(...more: Arg[]): Pattern
/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * Synonyms: fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
declare function fastGap(...more: Arg[]): Pattern
/**
 * Like cat, but the items are crammed into one cycle.
 * Synonyms: sequence, fastcat
 * @example
 * seq("e5", "b4", ["d5", "c5"]).note()
 * // "e5 b4 [d5 c5]".note()
 * @example
 * // As a chained function:
 * s("hh*4").seq(
 *   note("c4(5,8)")
 * )
 */
declare function fastcat(...more: Arg[]): Pattern
/**
 * Like chunk, but the cycles of the source pattern aren't repeated
 * for each set of chunks.
 * Synonyms: fastchunk
 * @example
 * "<0 8> 1 2 3 4 5 6 7"
 * .scale("C2:major").note()
 * .fastChunk(4, x => x.color('red')).slow(2)
 */
declare function fastchunk(...more: Arg[]): Pattern
/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * Synonyms: fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
declare function fastgap(...more: Arg[]): Pattern
declare function fft(...more: Arg[]): Pattern
declare function fill(...more: Arg[]): Pattern
/**
 * Filters haps using the given function
 * @param test {function} function to test Hap
 * @example
 * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
 */
declare function filter(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Filters haps by their begin time
 * @param test {function} function to test Hap.whole.begin
 * @example
 * oneCycle: s("bd*4").filterWhen((t) => t < 1)
 */
declare function filterWhen(test?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Applies the given function every n cycles, starting from the first cycle.
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").firstOf(4, x=>x.rev())
 */
declare function firstOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
 * Similar to loopAt.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes/2").fit()
 */
declare function fit(...more: Arg[]): Pattern
declare function flash(...more: Arg[]): Pattern
declare const flashField: any
declare function flatten(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values set to
 * their mathematical floor. E.g. 3.7 replaced with to 3, and -4.2
 * replaced with -5.
 * @example
 * note("42 42.1 42.5 43".floor())
 */
declare function floor(...more: Arg[]): Pattern
/**
 * Sets the Frequency Modulation of the synth.
 * Controls the modulation index, which defines the brightness of the sound.
 * A number may be added afterwards to control the modulation index of
 * any of the 8 individual FMs (e.g. fm3). Also, FMs may be routed into
 * each other with matrix commands like fm13, which would send fm1 back into
 * fm3
 * Synonyms: fm
 * @param brightness {number | Pattern} modulation index
 * @example
 * note("c e g b g e")
 * .fm("<0 1 2 8 32>")
 * ._scope()
 * @example
 * s("sine").note("F1").seg(8)
 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
 *  .fmh(1.06).fmh2(10).fmh3(0.1)
 */
declare function fm(brightness?: any, ...more: Arg[]): Pattern
declare function fm1(...more: Arg[]): Pattern
declare function fm2(...more: Arg[]): Pattern
declare function fm3(...more: Arg[]): Pattern
declare function fm4(...more: Arg[]): Pattern
declare function fm5(...more: Arg[]): Pattern
declare function fm6(...more: Arg[]): Pattern
declare function fm7(...more: Arg[]): Pattern
declare function fm8(...more: Arg[]): Pattern
/**
 * Attack time for the FM envelope: time it takes to reach maximum modulation
 * A number may be added afterwards to control the attack of the envelope of
 * any of the 8 individual FMs (e.g. fmatt5)
 * Synonyms: fmatt
 * @param time {number | Pattern} attack time
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmattack("<0 .05 .1 .2>")
 * ._scope()
 */
declare function fmatt(time?: any, ...more: Arg[]): Pattern
declare function fmatt1(...more: Arg[]): Pattern
declare function fmatt2(...more: Arg[]): Pattern
declare function fmatt3(...more: Arg[]): Pattern
declare function fmatt4(...more: Arg[]): Pattern
declare function fmatt5(...more: Arg[]): Pattern
declare function fmatt6(...more: Arg[]): Pattern
declare function fmatt7(...more: Arg[]): Pattern
declare function fmatt8(...more: Arg[]): Pattern
/**
 * Attack time for the FM envelope: time it takes to reach maximum modulation
 * A number may be added afterwards to control the attack of the envelope of
 * any of the 8 individual FMs (e.g. fmatt5)
 * Synonyms: fmatt
 * @param time {number | Pattern} attack time
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmattack("<0 .05 .1 .2>")
 * ._scope()
 */
declare function fmattack(time?: any, ...more: Arg[]): Pattern
declare function fmattack1(...more: Arg[]): Pattern
declare function fmattack2(...more: Arg[]): Pattern
declare function fmattack3(...more: Arg[]): Pattern
declare function fmattack4(...more: Arg[]): Pattern
declare function fmattack5(...more: Arg[]): Pattern
declare function fmattack6(...more: Arg[]): Pattern
declare function fmattack7(...more: Arg[]): Pattern
declare function fmattack8(...more: Arg[]): Pattern
/**
 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
 * A number may be added afterwards to control the decay of the envelope of
 * any of the 8 individual FMs (e.g. fmdec6)
 * Synonyms: fmdec
 * @param time {number | Pattern} decay time
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay("<.01 .05 .1 .2>")
 * .fmsustain(.4)
 * ._scope()
 */
declare function fmdec(time?: any, ...more: Arg[]): Pattern
declare function fmdec1(...more: Arg[]): Pattern
declare function fmdec2(...more: Arg[]): Pattern
declare function fmdec3(...more: Arg[]): Pattern
declare function fmdec4(...more: Arg[]): Pattern
declare function fmdec5(...more: Arg[]): Pattern
declare function fmdec6(...more: Arg[]): Pattern
declare function fmdec7(...more: Arg[]): Pattern
declare function fmdec8(...more: Arg[]): Pattern
/**
 * Decay time for the FM envelope: seconds until the sustain level is reached after the attack phase.
 * A number may be added afterwards to control the decay of the envelope of
 * any of the 8 individual FMs (e.g. fmdec6)
 * Synonyms: fmdec
 * @param time {number | Pattern} decay time
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay("<.01 .05 .1 .2>")
 * .fmsustain(.4)
 * ._scope()
 */
declare function fmdecay(time?: any, ...more: Arg[]): Pattern
declare function fmdecay1(...more: Arg[]): Pattern
declare function fmdecay2(...more: Arg[]): Pattern
declare function fmdecay3(...more: Arg[]): Pattern
declare function fmdecay4(...more: Arg[]): Pattern
declare function fmdecay5(...more: Arg[]): Pattern
declare function fmdecay6(...more: Arg[]): Pattern
declare function fmdecay7(...more: Arg[]): Pattern
declare function fmdecay8(...more: Arg[]): Pattern
/**
 * Ramp type of fm envelope. Exp might be a bit broken..
 * A number may be added afterwards to control the envelope of
 * any of the 8 individual FMs (e.g. fmenv4)
 * @param type {number | Pattern} lin | exp
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.2)
 * .fmsustain(0)
 * .fmenv("<exp lin>")
 * ._scope()
 */
declare function fmenv(type?: any, ...more: Arg[]): Pattern
declare function fmenv1(...more: Arg[]): Pattern
declare function fmenv2(...more: Arg[]): Pattern
declare function fmenv3(...more: Arg[]): Pattern
declare function fmenv4(...more: Arg[]): Pattern
declare function fmenv5(...more: Arg[]): Pattern
declare function fmenv6(...more: Arg[]): Pattern
declare function fmenv7(...more: Arg[]): Pattern
declare function fmenv8(...more: Arg[]): Pattern
/**
 * Sets the Frequency Modulation Harmonicity Ratio.
 * Controls the timbre of the sound.
 * Whole numbers and simple ratios sound more natural,
 * while decimal numbers and complex ratios sound metallic.
 * A number may be added afterwards to control the harmonicity of
 * any of the 8 individual FMs (e.g. fmh2)
 * @param harmonicity {number | Pattern}
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmh("<1 2 1.5 1.61>")
 * ._scope()
 */
declare function fmh(harmonicity?: any, ...more: Arg[]): Pattern
declare function fmh1(...more: Arg[]): Pattern
declare function fmh2(...more: Arg[]): Pattern
declare function fmh3(...more: Arg[]): Pattern
declare function fmh4(...more: Arg[]): Pattern
declare function fmh5(...more: Arg[]): Pattern
declare function fmh6(...more: Arg[]): Pattern
declare function fmh7(...more: Arg[]): Pattern
declare function fmh8(...more: Arg[]): Pattern
/**
 * Sets the Frequency Modulation of the synth.
 * Controls the modulation index, which defines the brightness of the sound.
 * A number may be added afterwards to control the modulation index of
 * any of the 8 individual FMs (e.g. fm3). Also, FMs may be routed into
 * each other with matrix commands like fm13, which would send fm1 back into
 * fm3
 * Synonyms: fm
 * @param brightness {number | Pattern} modulation index
 * @example
 * note("c e g b g e")
 * .fm("<0 1 2 8 32>")
 * ._scope()
 * @example
 * s("sine").note("F1").seg(8)
 *  .fm(4).fm2(rand.mul(4)).fm3(saw.mul(8).slow(8))
 *  .fmh(1.06).fmh2(10).fmh3(0.1)
 */
declare function fmi(brightness?: any, ...more: Arg[]): Pattern
declare function fmi1(...more: Arg[]): Pattern
declare function fmi2(...more: Arg[]): Pattern
declare function fmi3(...more: Arg[]): Pattern
declare function fmi4(...more: Arg[]): Pattern
declare function fmi5(...more: Arg[]): Pattern
declare function fmi6(...more: Arg[]): Pattern
declare function fmi7(...more: Arg[]): Pattern
declare function fmi8(...more: Arg[]): Pattern
/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. fmrel8)
 * Synonyms: fmrel
 * @param time {number | Pattern} release time
 */
declare function fmrel(time?: any, ...more: Arg[]): Pattern
declare function fmrel1(...more: Arg[]): Pattern
declare function fmrel2(...more: Arg[]): Pattern
declare function fmrel3(...more: Arg[]): Pattern
declare function fmrel4(...more: Arg[]): Pattern
declare function fmrel5(...more: Arg[]): Pattern
declare function fmrel6(...more: Arg[]): Pattern
declare function fmrel7(...more: Arg[]): Pattern
declare function fmrel8(...more: Arg[]): Pattern
/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. fmrel8)
 * Synonyms: fmrel
 * @param time {number | Pattern} release time
 */
declare function fmrelease(time?: any, ...more: Arg[]): Pattern
declare function fmrelease1(...more: Arg[]): Pattern
declare function fmrelease2(...more: Arg[]): Pattern
declare function fmrelease3(...more: Arg[]): Pattern
declare function fmrelease4(...more: Arg[]): Pattern
declare function fmrelease5(...more: Arg[]): Pattern
declare function fmrelease6(...more: Arg[]): Pattern
declare function fmrelease7(...more: Arg[]): Pattern
declare function fmrelease8(...more: Arg[]): Pattern
/**
 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
 * A number may be added afterwards to control the sustain of the envelope of
 * any of the 8 individual FMs (e.g. fmsus7)
 * Synonyms: fmsus
 * @param level {number | Pattern} sustain level
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.1)
 * .fmsustain("<1 .75 .5 0>")
 * ._scope()
 */
declare function fmsus(level?: any, ...more: Arg[]): Pattern
declare function fmsus1(...more: Arg[]): Pattern
declare function fmsus2(...more: Arg[]): Pattern
declare function fmsus3(...more: Arg[]): Pattern
declare function fmsus4(...more: Arg[]): Pattern
declare function fmsus5(...more: Arg[]): Pattern
declare function fmsus6(...more: Arg[]): Pattern
declare function fmsus7(...more: Arg[]): Pattern
declare function fmsus8(...more: Arg[]): Pattern
/**
 * Sustain level for the FM envelope: how much modulation is applied after the decay phase
 * A number may be added afterwards to control the sustain of the envelope of
 * any of the 8 individual FMs (e.g. fmsus7)
 * Synonyms: fmsus
 * @param level {number | Pattern} sustain level
 * @example
 * note("c e g b g e")
 * .fm(4)
 * .fmdecay(.1)
 * .fmsustain("<1 .75 .5 0>")
 * ._scope()
 */
declare function fmsustain(level?: any, ...more: Arg[]): Pattern
declare function fmsustain1(...more: Arg[]): Pattern
declare function fmsustain2(...more: Arg[]): Pattern
declare function fmsustain3(...more: Arg[]): Pattern
declare function fmsustain4(...more: Arg[]): Pattern
declare function fmsustain5(...more: Arg[]): Pattern
declare function fmsustain6(...more: Arg[]): Pattern
declare function fmsustain7(...more: Arg[]): Pattern
declare function fmsustain8(...more: Arg[]): Pattern
/**
 * Waveform of the fm modulator
 * A number may be added afterwards to control the waveform
 * any of the 8 individual FMs (e.g. fmwave6)
 * @param wave {number | Pattern} waveform
 * @example
 * n("0 1 2 3".fast(4)).scale("d:minor").s("sine").fmwave("<sine square sawtooth crackle>").fm(4).fmh(2.01)
 * @example
 * n("0 1 2 3".fast(4)).chord("<Dm Am F G>").voicing().s("sawtooth").fmwave("brown").fm(.6)
 */
declare function fmwave(wave?: any, ...more: Arg[]): Pattern
declare function fmwave1(...more: Arg[]): Pattern
declare function fmwave2(...more: Arg[]): Pattern
declare function fmwave3(...more: Arg[]): Pattern
declare function fmwave4(...more: Arg[]): Pattern
declare function fmwave5(...more: Arg[]): Pattern
declare function fmwave6(...more: Arg[]): Pattern
declare function fmwave7(...more: Arg[]): Pattern
declare function fmwave8(...more: Arg[]): Pattern
declare function focusSpan(...more: Arg[]): Pattern
declare function focusspan(...more: Arg[]): Pattern
/**
 * Wavefolding distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function fold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
declare function fractionalArgs(...more: Arg[]): Pattern
declare function frameRate(...more: Arg[]): Pattern
declare function freeze(...more: Arg[]): Pattern
/**
 * Set frequency of sound.
 * @param frequency {number | Pattern} in Hz. the audible range is between 20 and 20000 Hz
 * @example
 * freq("220 110 440 110").s("superzow").osc()
 * @example
 * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
 */
declare function freq(frequency?: any, ...more: Arg[]): Pattern
declare function freqToMidi(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
 * Returns a new pattern with values scaled to the unipolar range 0 .. 1
 */
declare function fromBipolar(...more: Arg[]): Pattern
declare function fshift(...more: Arg[]): Pattern
declare function fshiftnote(...more: Arg[]): Pattern
declare function fshiftphase(...more: Arg[]): Pattern
/**
 * Sets the filter type. The ladder filter is more aggressive. More types might be added in the future.
 * @param type {number | Pattern} 12db (0), ladder (1), or 24db (2)
 * @example
 * note("{f g g c d a a#}%8").s("sawtooth").lpenv(4).lpf(500).ftype("<0 1 2>").lpq(1)
 * @example
 * note("c f g g a c d4").fast(2)
 * .sound('sawtooth')
 * .lpf(200).fanchor(0)
 * .lpenv(3).lpq(1)
 * .ftype("<ladder 12db 24db>")
 */
declare function ftype(type?: any, ...more: Arg[]): Pattern
declare function func(...more: Arg[]): Pattern
declare function fxr(...more: Arg[]): Pattern
/**
 * Controls the gain by an exponential amount.
 * @param amount {number | Pattern} gain.
 * @example
 * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
 */
declare function gain(amount?: any, ...more: Arg[]): Pattern
declare function gainNode(...more: Arg[]): Pattern
/**
 * Does absolutely nothing, but with a given metrical 'steps'
 * @param steps {number}
 * @example
 * gap(3) // "~@3"
 */
declare function gap(steps?: any, ...more: Arg[]): Pattern
declare function gat(...more: Arg[]): Pattern
declare function gate(...more: Arg[]): Pattern
declare function getADSRValues(...more: Arg[]): Pattern
declare function getAccidentalsOffset(...more: Arg[]): Pattern
declare function getAnalyserById(...more: Arg[]): Pattern
declare function getAnalyzerData(...more: Arg[]): Pattern
declare function getAudioContext(...more: Arg[]): any
declare function getAudioContextCurrentTime(...more: Arg[]): Pattern
declare function getAudioDevices(...more: Arg[]): Pattern
declare function getCachedBuffer(...more: Arg[]): Pattern
declare function getCompressor(...more: Arg[]): Pattern
declare function getComputedPropertyValue(...more: Arg[]): Pattern
declare function getControlName(...more: Arg[]): Pattern
declare function getCps(...more: Arg[]): Pattern
declare function getCurrentKeyboardState(...more: Arg[]): Pattern
declare function getDefaultValue(...more: Arg[]): Pattern
declare function getDistortion(...more: Arg[]): Pattern
declare function getDistortionAlgorithm(...more: Arg[]): Pattern
declare function getDrawContext(...more: Arg[]): Pattern
declare function getDrawOptions(...more: Arg[]): Pattern
declare function getEnvelope(...more: Arg[]): Pattern
declare function getEventOffsetMs(...more: Arg[]): Pattern
declare function getFontBufferSource(...more: Arg[]): Pattern
/**
 *
 */
declare function getFreq(...more: Arg[]): Pattern
declare function getFrequency(...more: Arg[]): Pattern
declare function getFrequencyFromValue(...more: Arg[]): Pattern
declare function getIsStarted(...more: Arg[]): Pattern
declare function getLeafLocation(...more: Arg[]): Pattern
declare function getLeafLocations(...more: Arg[]): Pattern
declare function getLeaves(...more: Arg[]): Pattern
declare function getLfo(...more: Arg[]): Pattern
declare function getLoadedBuffer(...more: Arg[]): Pattern
declare function getOscillator(...more: Arg[]): Pattern
declare function getParamADSR(...more: Arg[]): Pattern
declare function getParamLfo(...more: Arg[]): Pattern
declare function getPattern(...more: Arg[]): Pattern
declare function getPerformanceTimeSeconds(...more: Arg[]): Pattern
declare function getPitchEnvelope(...more: Arg[]): Pattern
declare function getPlayableNoteValue(...more: Arg[]): Pattern
declare function getPunchcardPainter(...more: Arg[]): Pattern
declare function getRandsAtTime(...more: Arg[]): Pattern
declare function getSampleBuffer(...more: Arg[]): Pattern
declare function getSampleBufferSource(...more: Arg[]): Pattern
declare function getSampleInfo(...more: Arg[]): Pattern
declare function getSound(...more: Arg[]): Pattern
declare function getSoundIndex(...more: Arg[]): Pattern
declare function getSuperdoughAudioController(...more: Arg[]): Pattern
declare function getTheme(...more: Arg[]): Pattern
declare function getTime(...more: Arg[]): Pattern
declare function getTrigger(...more: Arg[]): Pattern
declare function getTriggerFunc(...more: Arg[]): Pattern
declare function getVibratoOscillator(...more: Arg[]): Pattern
declare function getWorklet(...more: Arg[]): Pattern
declare function getZZFX(...more: Arg[]): Pattern
/**
 * Experimental
 * Progressively grows the pattern by 'n' steps until the full pattern is played, or if a second value is given (using mininotation list syntax with :),
 * that number of times.
 * A positive number will progressively grow steps from the start of a pattern, and a negative number from the end.
 * @example
 * "tha dhi thom nam".grow("1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".grow("-1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".grow("1 -1").sound().bank("mridangam").pace(4)
 * @example
 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
 *    .grow("1 -1").pace(8)
 */
declare function grow(...more: Arg[]): Pattern
declare function gt(...more: Arg[]): Pattern
declare function gte(...more: Arg[]): Pattern
declare function h(...more: Arg[]): Pattern
/**
 * Hard-clipping distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function hard(distortion?: any, volume?: any, ...more: Arg[]): Pattern
declare function harmonic(...more: Arg[]): Pattern
declare function hash2code(...more: Arg[]): Pattern
declare function hbrick(...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the high-pass filter.
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 * Synonyms: hp, hcutoff
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 */
declare function hcutoff(frequency?: any, ...more: Arg[]): Pattern
declare const highlightExtension: any
declare function highlightMiniLocations(...more: Arg[]): Pattern
declare function hold(...more: Arg[]): Pattern
declare function hours(...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the high-pass filter.
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 * Synonyms: hp, hcutoff
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 */
declare function hp(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the highpass filter envelope.
 * Synonyms: hpa
 * @param attack {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa("<.5 .25 .1 .01>/4")
 * .hpenv(4)
 */
declare function hpa(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the highpass filter envelope.
 * Synonyms: hpa
 * @param attack {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa("<.5 .25 .1 .01>/4")
 * .hpenv(4)
 */
declare function hpattack(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the highpass filter envelope.
 * Synonyms: hpd
 * @param decay {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd("<.5 .25 .1 0>/4")
 * .hps(0.2)
 * .hpenv(4)
 */
declare function hpd(decay?: any, ...more: Arg[]): Pattern
/**
 * DC offset of the LFO for the highpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function hpdc(dcoffset?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the highpass filter envelope.
 * Synonyms: hpd
 * @param decay {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd("<.5 .25 .1 0>/4")
 * .hps(0.2)
 * .hpenv(4)
 */
declare function hpdecay(decay?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the highpass filter
 * @param depth {number | Pattern} depth of modulation
 */
declare function hpdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the hipass filter, in hz
 * Synonyms: hpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
declare function hpdepthfreq(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the hipass filter, in hz
 * Synonyms: hpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
declare function hpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
/**
 * Sets the highpass filter envelope modulation depth.
 * Synonyms: hpe
 * @param modulation {number | Pattern} depth of the highpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa(.5)
 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function hpe(modulation?: any, ...more: Arg[]): Pattern
/**
 * Sets the highpass filter envelope modulation depth.
 * Synonyms: hpe
 * @param modulation {number | Pattern} depth of the highpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpa(.5)
 * .hpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function hpenv(modulation?: any, ...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the high-pass filter.
 * When using mininotation, you can also optionally add the 'hpq' parameter, separated by ':'.
 * Synonyms: hp, hcutoff
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf("<2000 2000:25>")
 */
declare function hpf(frequency?: any, ...more: Arg[]): Pattern
/**
 * Controls the high-pass q-value.
 * Synonyms: hresonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 */
declare function hpq(q?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the highpass filter envelope.
 * Synonyms: hpr
 * @param release {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .hpf(500)
 * .hpenv(4)
 * .hpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function hpr(release?: any, ...more: Arg[]): Pattern
/**
 * Rate of the LFO for the highpass filter
 * @param rate {number | Pattern} rate in hertz
 */
declare function hprate(rate?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the highpass filter envelope.
 * Synonyms: hpr
 * @param release {number | Pattern} time of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .hpf(500)
 * .hpenv(4)
 * .hpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function hprelease(release?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the highpass filter envelope.
 * Synonyms: hps
 * @param sustain {number | Pattern} amplitude of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd(.5)
 * .hps("<0 .25 .5 1>/4")
 * .hpenv(4)
 */
declare function hps(sustain?: any, ...more: Arg[]): Pattern
/**
 * Shape of the LFO for the highpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function hpshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Skew of the LFO for the highpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function hpskew(skew?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the highpass filter envelope.
 * Synonyms: hps
 * @param sustain {number | Pattern} amplitude of the highpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .hpf(500)
 * .hpd(.5)
 * .hps("<0 .25 .5 1>/4")
 * .hpenv(4)
 */
declare function hpsustain(sustain?: any, ...more: Arg[]): Pattern
/**
 * Cycle-synced rate of the LFO for the highpass filter
 * @param rate {number | Pattern} rate in cycles
 */
declare function hpsync(rate?: any, ...more: Arg[]): Pattern
/**
 * Controls the high-pass q-value.
 * Synonyms: hresonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 */
declare function hresonance(q?: any, ...more: Arg[]): Pattern
declare function hsl(...more: Arg[]): Pattern
declare function hsla(...more: Arg[]): Pattern
/**
 * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
 * @example
 * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
 */
declare function hurry(...more: Arg[]): Pattern
/**
 * Silences a pattern.
 * @example
 * stack(
 *   s("bd").hush(),
 *   s("hh*3")
 * )
 */
declare function hush(...more: Arg[]): any
/**
 *
 */
declare function id(...more: Arg[]): Pattern
declare function imag(...more: Arg[]): Pattern
/**
 * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to pick, but cycles are squeezed into the target ('inhabited') pattern.
 * Synonyms: pickSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * "<a b [a,b]>".inhabit({a: s("bd(3,8)"),
 *                             b: s("cp sd")
 *                            })
 * @example
 * s("a@2 [a b] a".inhabit({a: "bd(3,8)", b: "sd sd"})).slow(4)
 */
declare function inhabit(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as inhabit, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * Synonyms: pickmodSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function inhabitmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
declare function initAudio(...more: Arg[]): Pattern
declare function initAudioOnFirstClick(...more: Arg[]): any
declare function initEditor(...more: Arg[]): Pattern
declare function initHydra(...more: Arg[]): Pattern
declare function initTheme(...more: Arg[]): Pattern
declare function injectStyle(...more: Arg[]): Pattern
declare function innerBind(...more: Arg[]): Pattern
/**
 * Carries out an operation 'inside' a cycle.
 * @example
 * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
 * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
 */
declare function inside(...more: Arg[]): Pattern
/**
 * Swaps 1s and 0s in a binary pattern.
 * Synonyms: inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
declare function inv(...more: Arg[]): Pattern
/**
 * Swaps 1s and 0s in a binary pattern.
 * Synonyms: inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
declare function invert(...more: Arg[]): Pattern
/**
 * Sets the sample to use as an impulse response for the reverb.
 * Synonyms: ir
 * @param sample {string | Pattern} to use as an impulse response
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 */
declare function ir(sample?: any, ...more: Arg[]): Pattern
/**
 * A continuous pattern of random integers, between 0 and n-1.
 * @param n {number} max value (exclusive)
 * @example
 * // randomly select scale notes from 0 - 7 (= C to C)
 * n(irand(8)).struct("x x*2 x x*3").scale("C:minor")
 */
declare function irand(n?: any, ...more: Arg[]): Pattern
/**
 * Sets the beginning of the IR response sample
 * Synonyms: ir
 * @param begin {string | Pattern} between 0 and 1
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
 */
declare function irbegin(begin?: any, ...more: Arg[]): Pattern
/**
 * Sets the sample to use as an impulse response for the reverb.
 * Synonyms: ir
 * @param sample {string | Pattern} to use as an impulse response
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 */
declare function iresponse(sample?: any, ...more: Arg[]): Pattern
/**
 * Sets speed of the sample for the impulse response.
 * @param speed {string | Pattern}
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
 */
declare function irspeed(speed?: any, ...more: Arg[]): Pattern
declare function isControlName(...more: Arg[]): Pattern
declare function isFlashEnabled(...more: Arg[]): Pattern
declare function isNote(...more: Arg[]): Pattern
declare function isNoteWithOctave(...more: Arg[]): Pattern
declare function isPattern(...more: Arg[]): Pattern
declare function isPatternHighlightingEnabled(...more: Arg[]): Pattern
/**
 * A sawtooth signal between 1 and 0 (like saw, but flipped).
 * @example
 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
 * .clip(isaw.slow(2))
 * @example
 * n(isaw.range(0,8).segment(8))
 * .scale('C major')
 */
declare const isaw: Pattern
/**
 * A sawtooth signal between 1 and -1 (like saw2, but flipped).
 */
declare const isaw2: Pattern
/**
 * Divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played.
 * @example
 * note("0 1 2 3".scale('A minor')).iter(4)
 */
declare function iter(...more: Arg[]): Pattern
/**
 * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
 * Synonyms: iterback
 * @example
 * note("0 1 2 3".scale('A minor')).iterBack(4)
 */
declare function iterBack(...more: Arg[]): Pattern
/**
 * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
 * Synonyms: iterback
 * @example
 * note("0 1 2 3".scale('A minor')).iterBack(4)
 */
declare function iterback(...more: Arg[]): Pattern
/**
 * An inverted triangle signal between 1 and 0 (like tri, but flipped).
 * @example
 * n(itri.segment(8).range(0,7)).scale("C:minor")
 */
declare const itri: Pattern
/**
 * An inverted triangle signal between -1 and 1 (like itri, but bipolar).
 */
declare const itri2: Pattern
/**
 * The jux function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel.
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(rev)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(press)
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").jux(iter(4))
 */
declare function jux(...more: Arg[]): Pattern
/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * Synonyms: juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
declare function juxBy(...more: Arg[]): Pattern
/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * Synonyms: juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
declare function juxby(...more: Arg[]): Pattern
declare function kcutoff(...more: Arg[]): Pattern
declare function keep(...more: Arg[]): Pattern
declare function keepif(...more: Arg[]): Pattern
declare const keyAlias: any
/**
 * returns true when a key or array of keys is held
 * Key name reference
 * @example
 * keyDown("Control:j").pick([s("bd(5,8)"), s("cp(3,8)")])
 */
declare function keyDown(...more: Arg[]): Pattern
declare function krush(...more: Arg[]): Pattern
/**
 * Sets the displayed text for an event on the pianoroll
 * @param label {string} text to display
 */
declare function label(label?: any, ...more: Arg[]): Pattern
/**
 * Applies the given function every n cycles, starting from the last cycle.
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").lastOf(4, x=>x.rev())
 */
declare function lastOf(n?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Nudge a pattern to start later in time. Equivalent of Tidal's ~> operator
 * @param cycles {number | Pattern} number of cycles to nudge right
 * @example
 * "bd ~".stack("hh ~".late(.1)).s()
 */
declare function late(cycles?: any, ...more: Arg[]): Pattern
declare function lbrick(...more: Arg[]): Pattern
/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 * Synonyms: legato
 * @param factor {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 */
declare function legato(factor?: any, ...more: Arg[]): Pattern
/**
 * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
 * @param wet {number | Pattern} between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
 */
declare function leslie(wet?: any, ...more: Arg[]): Pattern
/**
 * Configures an LFO. Can be called in sequence like pat.lfo(...).lfo(...) to set up multiple LFOs.
 * There are two ways to declare which control will be modulated:
 *
 * Explicitly put control in the config (e.g. lfo({ c: "lpf" }))
 * If the control parameter is absent, the control immediately before the lfo call will be used
 * (e.g. s("saw").lpf(500).lfo() to modulate lpf)
 *
 * Modulators can be referred to by id so that they can be updated later e.g. inside
 * a sometimes. See example below.
 * @param config {Object} LFO configuration.
 * @param config.control {string | Pattern} Node to modulate. Aliases: c
 * @param config.subControl {string | Pattern} Sub-control name to append to the control key. Aliases: sc
 * @param config.rate {number | Pattern} Modulation rate. Aliases: r
 * @param config.depth {number | Pattern} Relative modulation depth. Aliases: dep, dr
 * @param config.depthabs {number | Pattern} Absolute modulation depth. Aliases: da
 * @param config.dcoffset {number | Pattern} DC offset / bias for the waveform. Aliases: dc
 * @param config.shape {number | Pattern} Shape index. Aliases: sh
 * @param config.skew {number | Pattern} Skew amount. Aliases: sk
 * @param config.curve {number | Pattern} Exponential curve amount. Aliases: cu
 * @param config.sync {number | Pattern} Tempo-synced modulation rate. Aliases: s
 * @param config.fxi {number | Pattern} FX index to target
 * @param id {string | Pattern} ID to use for this modulator
 * @example
 * s("saw").note("F1").lpf(500).lfo()
 * @example
 * s("saw").lfo().lpf(500).lfo({ s: 0.3 })
 * @example
 * s("saw").lpf(500).diode(0.3)
 *   .lfo({ c: "lpf" })
 * @example
 * s("pulse").lpf(500).lfo()
 *   .lfo({ c: "s" })
 *   .diode(0.3)
 *   .sometimes(x => x.lfo({ s: "8" }, 1)) // lfo #1 (0-indexed)
 * @example
 * s("pulse").lpf(500).lfo({ depth: 4 }, 'lpf_mod')
 *   .lfo({ c: "s" })
 *   .diode(0.3)
 *   .sometimes(x => x.lfo({ s: "8" }, 'lpf_mod'))
 */
declare function lfo(config?: any, id?: any, ...more: Arg[]): Pattern
/**
 * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
 * @param fraction {number} fraction to select
 * @example
 * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
 */
declare function linger(fraction?: any, ...more: Arg[]): Pattern
declare function listRange(...more: Arg[]): Pattern
declare function load(...more: Arg[]): Pattern
declare function loadBuffer(...more: Arg[]): Pattern
declare function loadSoundfont(...more: Arg[]): Pattern
declare function loadWorklets(...more: Arg[]): Pattern
/**
 * Specifies whether delaytime is calculated relative to cps.
 * @param enable {number | Pattern} When set to 1, delaytime is a direct multiple of a cycle.
 * @example
 * s("sd").delay().lock(1).osc()
 */
declare function lock(enable?: any, ...more: Arg[]): Pattern
declare const logKey: any
declare function logger(...more: Arg[]): Pattern
/**
 * Loops the sample.
 * Note that the tempo of the loop is not synced with the cycle tempo.
 * To change the loop region, use loopBegin / loopEnd.
 * @param on {number | Pattern} If 1, the sample is looped
 * @example
 * s("casio").loop(1)
 */
declare function loop(on?: any, ...more: Arg[]): Pattern
/**
 * Makes the sample fit the given number of cycles by changing the speed.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes").loopAt(2)
 */
declare function loopAt(...more: Arg[]): Pattern
/**
 * Makes the sample fit the given number of cycles and cps value, by
 * changing the speed. Please note that at some point cps will be
 * given by a global clock and this function will be
 * deprecated/removed.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes").loopAtCps(4,1.5).cps(1.5)
 */
declare function loopAtCps(...more: Arg[]): Pattern
/**
 * Begin to loop at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and before loopEnd!
 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
 * Synonyms: loopb
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopBegin("<0 .125 .25>")._scope()
 */
declare function loopBegin(time?: any, ...more: Arg[]): Pattern
/**
 * End the looping section at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and after loopBegin!
 * Synonyms: loope
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
declare function loopEnd(time?: any, ...more: Arg[]): Pattern
declare function loopat(...more: Arg[]): Pattern
declare function loopatcps(...more: Arg[]): Pattern
/**
 * Begin to loop at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and before loopEnd!
 * Note: Samples starting with wt_ will automatically loop! (wt = wavetable)
 * Synonyms: loopb
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopBegin("<0 .125 .25>")._scope()
 */
declare function loopb(time?: any, ...more: Arg[]): Pattern
/**
 * End the looping section at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and after loopBegin!
 * Synonyms: loope
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
declare function loope(time?: any, ...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the low-pass filter.
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 * Synonyms: cutoff, ctf, lp
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 */
declare function lp(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the lowpass filter envelope.
 * Synonyms: lpa
 * @param attack {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa("<.5 .25 .1 .01>/4")
 * .lpenv(4)
 */
declare function lpa(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the attack duration for the lowpass filter envelope.
 * Synonyms: lpa
 * @param attack {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa("<.5 .25 .1 .01>/4")
 * .lpenv(4)
 */
declare function lpattack(attack?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the lowpass filter envelope.
 * Synonyms: lpd
 * @param decay {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd("<.5 .25 .1 0>/4")
 * .lpenv(4)
 */
declare function lpd(decay?: any, ...more: Arg[]): Pattern
/**
 * DC offset of the LFO for the lowpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function lpdc(dcoffset?: any, ...more: Arg[]): Pattern
/**
 * Sets the decay duration for the lowpass filter envelope.
 * Synonyms: lpd
 * @param decay {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd("<.5 .25 .1 0>/4")
 * .lpenv(4)
 */
declare function lpdecay(decay?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the lowpass filter
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
 */
declare function lpdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the lowpass filter, in HZ
 * Synonyms: lpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
declare function lpdepthfreq(depth?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the lowpass filter, in HZ
 * Synonyms: lpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
declare function lpdepthfrequency(depth?: any, ...more: Arg[]): Pattern
/**
 * Sets the lowpass filter envelope modulation depth.
 * Synonyms: lpe
 * @param modulation {number | Pattern} depth of the lowpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa(.5)
 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function lpe(modulation?: any, ...more: Arg[]): Pattern
/**
 * Sets the lowpass filter envelope modulation depth.
 * Synonyms: lpe
 * @param modulation {number | Pattern} depth of the lowpass filter envelope between 0 and n
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpa(.5)
 * .lpenv("<4 2 1 0 -1 -2 -4>/4")
 */
declare function lpenv(modulation?: any, ...more: Arg[]): Pattern
/**
 * Applies the cutoff frequency of the low-pass filter.
 * When using mininotation, you can also optionally add the 'lpq' parameter, separated by ':'.
 * Synonyms: cutoff, ctf, lp
 * @param frequency {number | Pattern} audible between 0 and 20000
 * @example
 * s("bd sd [~ bd] sd,hh*6").lpf("<4000 2000 1000 500 200 100>")
 * @example
 * s("bd*16").lpf("1000:0 1000:10 1000:20 1000:30")
 */
declare function lpf(frequency?: any, ...more: Arg[]): Pattern
/**
 * Controls the low-pass q-value.
 * Synonyms: resonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 */
declare function lpq(q?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the lowpass filter envelope.
 * Synonyms: lpr
 * @param release {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .lpf(300)
 * .lpenv(4)
 * .lpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function lpr(release?: any, ...more: Arg[]): Pattern
/**
 * Rate of the LFO for the lowpass filter
 * @param rate {number | Pattern} rate in hertz
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
 */
declare function lprate(rate?: any, ...more: Arg[]): Pattern
/**
 * Sets the release time for the lowpass filter envelope.
 * Synonyms: lpr
 * @param release {number | Pattern} time of the filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .clip(.5)
 * .lpf(300)
 * .lpenv(4)
 * .lpr("<.5 .25 .1 0>/4")
 * .release(.5)
 */
declare function lprelease(release?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the lowpass filter envelope.
 * Synonyms: lps
 * @param sustain {number | Pattern} amplitude of the lowpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd(.5)
 * .lps("<0 .25 .5 1>/4")
 * .lpenv(4)
 */
declare function lps(sustain?: any, ...more: Arg[]): Pattern
/**
 * Shape of the LFO for the lowpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function lpshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Skew of the LFO for the lowpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function lpskew(skew?: any, ...more: Arg[]): Pattern
/**
 * Sets the sustain amplitude for the lowpass filter envelope.
 * Synonyms: lps
 * @param sustain {number | Pattern} amplitude of the lowpass filter envelope
 * @example
 * note("c2 e2 f2 g2")
 * .sound('sawtooth')
 * .lpf(300)
 * .lpd(.5)
 * .lps("<0 .25 .5 1>/4")
 * .lpenv(4)
 */
declare function lpsustain(sustain?: any, ...more: Arg[]): Pattern
/**
 * Cycle-synced rate of the LFO for the lowpass filter
 * @param rate {number | Pattern} rate in cycles
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
 */
declare function lpsync(rate?: any, ...more: Arg[]): Pattern
/**
 * Rate of modulation / rotation for leslie effect
 * @param rate {number | Pattern} 6.7 for fast, 0.7 for slow
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
 */
declare function lrate(rate?: any, ...more: Arg[]): Pattern
/**
 * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
 * @param meters {number | Pattern} somewhere between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
 */
declare function lsize(meters?: any, ...more: Arg[]): Pattern
declare function lt(...more: Arg[]): Pattern
declare function lte(...more: Arg[]): Pattern
declare function m(...more: Arg[]): Pattern
declare function mapArgs(...more: Arg[]): Pattern
/**
 * Overrides the css of highlighted events. Make sure to use single quotes!
 * @example
 * note("c a f e")
 * .markcss('text-decoration:underline')
 */
declare const markcss: any
/**
 * Returns silence when mask is 0 or "~"
 * @example
 * note("c [eb,g] d [eb,g]").mask("<1 [0 1]>")
 */
declare function mask(...more: Arg[]): Pattern
declare const maxPolyphony: any
/**
 *
 */
declare function midi2note(...more: Arg[]): Pattern
declare function midiToFreq(...more: Arg[]): Pattern
/**
 * MIDI pitch bend: Sends a MIDI pitch bend message.
 * @param midibend {number | Pattern} MIDI pitch bend (-1 - 1)
 * @example
 * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
 */
declare function midibend(midibend?: any, ...more: Arg[]): Pattern
/**
 * MIDI channel: Sets the MIDI channel for the event.
 * @param channel {number | Pattern} MIDI channel number (0-15)
 * @example
 * note("c4").midichan(1).midi()
 */
declare function midichan(channel?: any, ...more: Arg[]): Pattern
/**
 * MIDI command: Sends a MIDI command message.
 * @param command {number | Pattern} MIDI command
 * @example
 * midicmd("clock*48,<start stop>/2").midi()
 */
declare function midicmd(command?: any, ...more: Arg[]): Pattern
declare const midicontrolMap: any
/**
 * MIDI keyboard: Opens a MIDI input port to receive MIDI keyboard messages.
 * The note length is fixed as Superdough is not currently set up for undetermined
 * note durations
 * @param input {string | number} MIDI device name or index defaulting to 0
 * @example
 * const kb = await midikeys('Arturia KeyStep 32')
 * kb().s("tri").lpf(80).lpe(6).lpd(0.1).room(2).delay(0.35)
 * @example
 * const kb = await midikeys('Arturia KeyStep 32')
 * kb("0.5 1")
 *   .s("saw")
 *   .add(note(rand.mul(0.3)))
 *   .lpf(1000).lpe(2).room(0.5)
 */
declare function midikeys(input?: any, ...more: Arg[]): Pattern
declare function midimap(...more: Arg[]): Pattern
/**
 * Adds midimaps to the registry. Inside each midimap, control names (e.g. lpf) are mapped to cc numbers.
 * @example
 * midimaps({ mymap: { lpf: 74 } })
 * $: note("c a f e")
 * .lpf(sine.slow(4))
 * .midimap('mymap')
 * .midi()
 * @example
 * midimaps({ mymap: {
 *   lpf: { ccn: 74, min: 0, max: 20000, exp: 0.5 }
 * }})
 * $: note("c a f e")
 * .lpf(sine.slow(2).range(400,2000))
 * .midimap('mymap')
 * .midi()
 */
declare function midimaps(...more: Arg[]): Pattern
/**
 * MIDI input: Opens a MIDI input port to receive MIDI control change messages.
 * The output is a function that accepts a midi cc value to query as well as (optionally) a midi channel
 * @param input {string | number} MIDI device name or index defaulting to 0
 * @example
 * const cc = await midin('IAC Driver Bus 1')
 * note("c a f e").lpf(cc(0).range(0, 1000)).lpq(cc(1).range(0, 10)).sound("sawtooth")
 * @example
 * const allCC = await midin('IAC Driver Bus 1')
 * const cc = (ccNum) => allCC(ccNum, 2) // just channel 2
 * note("c a f e").s("saw")
 *   .when(cc(0).gt(0), x => x.postgain(0))
 */
declare function midin(input?: any, ...more: Arg[]): any
/**
 * MIDI port: Sets the MIDI port for the event.
 * @param port {number | Pattern} MIDI port
 * @example
 * note("c a f e").midiport("<0 1 2 3>").midi()
 */
declare function midiport(port?: any, ...more: Arg[]): Pattern
declare const midisoundMap: any
/**
 * MIDI key after touch: Sends a MIDI key after touch message.
 * @param miditouch {number | Pattern} MIDI key after touch (0-1)
 * @example
 * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
 */
declare function miditouch(miditouch?: any, ...more: Arg[]): Pattern
declare function mini(...more: Arg[]): Pattern
declare function mini2ast(...more: Arg[]): Pattern
declare function miniAllStrings(...more: Arg[]): Pattern
declare function minify(...more: Arg[]): Pattern
declare function minutes(...more: Arg[]): Pattern
declare function mod(...more: Arg[]): Pattern
/**
 * Remove anchor note from the voicing. Useful for melody harmonization
 * @param modeName {string | Pattern} one of {below | above | duck | root}
 * @example
 * mode("<below above duck root>").chord("C").voicing()
 */
declare function mode(modeName?: any, ...more: Arg[]): Pattern
/**
 * Takes two binary rhythms represented as lists of 1s and 0s, and a number
 * between 0 and 1 that morphs between them. The two lists should contain the same
 * number of true values.
 * @example
 * sound("hh").struct(morph([1,0,1,0,1,0,1,0], // straight rhythm
 *                          [1,1,0,1,0,1,0], // wonky rhythm
 *                          0.25 // creates a slightly wonky rhythm
 *                         )
 *                   )
 * @example
 * sound("hh").struct(morph("1:0:1:0:1:0:1:0", // straight rhythm
 *                          "1:1:0:1:0:1:0", // wonky rhythm
 *                          sine.slow(8) // slowly morph between the rhythms
 *                         )
 *                   )
 */
declare function morph(...more: Arg[]): Pattern
declare const mouseX: Pattern
declare const mouseY: Pattern
/**
 * The mouse's x position value ranges from 0 to 1.
 * @example
 * n(mousex.segment(4).range(0,7)).scale("C:minor")
 */
declare const mousex: Pattern
/**
 * The mouse's y position value ranges from 0 to 1.
 * @example
 * n(mousey.segment(4).range(0,7)).scale("C:minor")
 */
declare const mousey: Pattern
declare function moveXY(...more: Arg[]): Pattern
declare function mtranspose(...more: Arg[]): Pattern
/**
 * Multiplies each number by the given factor.
 * @example
 * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
 */
declare function mul(...more: Arg[]): Pattern
declare const multiChannelOrbits: any
/**
 * Selects the given index from the sample map.
 * Numbers too high will wrap around.
 * n can also be used to play midi numbers, but it is recommended to use note instead.
 * @param value {number | Pattern} sample index starting from 0
 * @example
 * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
 */
declare function n(value?: any, ...more: Arg[]): Pattern
declare function nanFallback(...more: Arg[]): Pattern
declare function ne(...more: Arg[]): Pattern
declare function net(...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(0, fn) (never calls fn)
 * @example
 * s("hh*8").never(x=>x.speed("0.5"))
 */
declare function never(...more: Arg[]): Pattern
/**
 * Adds pink noise to the mix
 * @param wet {number | Pattern} wet amount
 * @example
 * sound("<white pink brown>/2")
 */
declare function noise(wet?: any, ...more: Arg[]): Pattern
declare const noises: any
/**
 * Plays the given note name or midi number. A note name consists of
 *
 * a letter (a-g or A-G)
 * optional accidentals (b or #)
 * optional (possibly negative) octave number (0-9). Defaults to 3
 *
 * Examples of valid note names: c, bb, Bb, f#, c3, A4, Eb2, c#5
 * You can also use midi numbers instead of note names, where 69 is mapped to A4 440Hz in 12EDO.
 * @example
 * note("c a f e")
 * @example
 * note("c4 a4 f4 e4")
 * @example
 * note("60 69 65 64")
 * @example
 * note("fbb1 a#0 cbbb-1 e##-2").sound("saw")
 */
declare function note(...more: Arg[]): Pattern
declare function noteToMidi(...more: Arg[]): Pattern
declare const nothing: Pattern
/**
 * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
 * @param nrpnn {number | Pattern} MIDI NRPN non-registered parameter number (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
declare function nrpnn(nrpnn?: any, ...more: Arg[]): Pattern
/**
 * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
 * @param nrpv {number | Pattern} MIDI NRPN non-registered parameter value (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
declare function nrpv(nrpv?: any, ...more: Arg[]): Pattern
declare function nudge(...more: Arg[]): Pattern
declare function numeralArgs(...more: Arg[]): Pattern
declare function objectMap(...more: Arg[]): Pattern
/**
 * Sets the default octave of a synth.
 * Synonyms: oct
 * @param octave {number | Pattern} octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
declare function oct(octave?: any, ...more: Arg[]): Pattern
/**
 * Sets the default octave of a synth.
 * Synonyms: oct
 * @param octave {number | Pattern} octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
declare function octave(octave?: any, ...more: Arg[]): Pattern
declare function octaveR(...more: Arg[]): Pattern
/**
 * How many octaves are voicing steps spread apart, defaults to 1
 * @param count {number | Pattern} the number of octaves
 * @example
 * chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
 */
declare function octaves(count?: any, ...more: Arg[]): Pattern
declare function octer(...more: Arg[]): Pattern
declare function octersub(...more: Arg[]): Pattern
declare function octersubsub(...more: Arg[]): Pattern
/**
 * Superimposes the function result on top of the original pattern, delayed by the given time.
 * @param time {Pattern | number} offset time
 * @param func {function} function to apply
 * @example
 * "c3 eb3 g3".off(1/8, x=>x.add(7)).note()
 */
declare function off(time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Sets how the voicing is offset from the anchored position
 * @param shift {number | Pattern} the amount to shift the voicing up or down
 * @example
 * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
 */
declare function offset(shift?: any, ...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(0.75, fn)
 * @example
 * s("hh*8").often(x=>x.speed("0.5"))
 */
declare function often(...more: Arg[]): Pattern
declare function onTriggerSample(...more: Arg[]): Pattern
declare function onTriggerSynth(...more: Arg[]): Pattern
declare function onceEnded(...more: Arg[]): Pattern
declare function or(...more: Arg[]): Pattern
/**
 * An orbit is a global parameter context for patterns. Patterns with the same orbit will share the same global effects.
 * Synonyms: o
 * @param number {number | Pattern}
 * @example
 * stack(
 *   s("hh*6").delay(.5).delaytime(.25).orbit(1),
 *   s("~ sd ~ sd").delay(.5).delaytime(.125).orbit(2)
 * )
 */
declare function orbit(number?: any, ...more: Arg[]): Pattern
/**
 * The host to send open sound control messages to. Requires running the OSC bridge.
 * @param oschost {string | Pattern} e.g. 'localhost'
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
declare function oschost(oschost?: any, ...more: Arg[]): Pattern
/**
 * The port to send open sound control messages to. Requires running the OSC bridge.
 * @param oscport {number | Pattern} e.g. 57120
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
declare function oscport(oscport?: any, ...more: Arg[]): Pattern
declare function outerBind(...more: Arg[]): Pattern
/**
 * Carries out an operation 'outside' a cycle.
 * @example
 * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
 * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
 */
declare function outside(...more: Arg[]): Pattern
declare function overgain(...more: Arg[]): Pattern
declare function overshape(...more: Arg[]): Pattern
/**
 * Experimental
 * Speeds a pattern up or down, to fit to the given number of steps per cycle.
 * @example
 * sound("bd sd cp").pace(4)
 * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
 */
declare function pace(...more: Arg[]): Pattern
declare const packageName: any
declare function pairs(...more: Arg[]): Pattern
/**
 * Applies rev to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
 * @example
 * note("c d e g").palindrome()
 */
declare function palindrome(...more: Arg[]): Pattern
/**
 * Sets position in stereo.
 * @param pan {number | Pattern} between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
 * @example
 * s("[bd hh]*2").pan("<.5 1 .5 0>")
 * @example
 * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
 */
declare function pan(pan?: any, ...more: Arg[]): Pattern
/**
 * Sets the range anchor of the envelope:
 *
 * anchor 0: range = [note, note + penv]
 * anchor 1: range = [note - penv, note]
 * If you don't set an anchor, the value will default to the psustain value.
 * @param anchor {number | Pattern} anchor offset
 * @example
 * note("c c4").penv(12).panchor("<0 .5 1 .5>")
 */
declare function panchor(anchor?: any, ...more: Arg[]): Pattern
declare function panorient(...more: Arg[]): Pattern
declare function panspan(...more: Arg[]): Pattern
declare function pansplay(...more: Arg[]): Pattern
declare function panwidth(...more: Arg[]): Pattern
/**
 * Turns a list of patterns into a single pattern which outputs list-values
 */
declare function parray(...more: Arg[]): Pattern
declare function parse(...more: Arg[]): Pattern
declare function parseBooleans(...more: Arg[]): Pattern
declare function parseFractional(...more: Arg[]): Pattern
declare function parseNumeral(...more: Arg[]): Pattern
/**
 * Scale the magnitude of the harmonics of one of the core synths ('sine', 'tri', 'saw', ..)
 * Can also be used to create a new synth via s('user').partials(...)
 * @param magnitudes {Array.<number> | Pattern} List of [0, 1] magnitudes for partials. 0th entry is the fundamental harmonic (i.e. DC offset is skipped)
 * @example
 * s("user").seg(16).n(irand(8)).scale("A:major")
 *   .partials([1, 0, 1, 0, 0, 1])
 * @example
 * s("saw").seg(8).n(irand(12)).scale("G#:minor")
 *   .partials(binaryL(irand(256).add("1")))
 */
declare function partials(magnitudes?: any, ...more: Arg[]): Pattern
/**
 * Attack time of pitch envelope.
 * Synonyms: patt
 * @param time {number | Pattern} time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 */
declare function patt(time?: any, ...more: Arg[]): Pattern
/**
 * Attack time of pitch envelope.
 * Synonyms: patt
 * @param time {number | Pattern} time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 */
declare function pattack(time?: any, ...more: Arg[]): Pattern
declare function patternifyAST(...more: Arg[]): Pattern
/**
 * Curve of envelope. Defaults to linear. exponential is good for kicks
 * @param type {number | Pattern} 0 = linear, 1 = exponential
 * @example
 * note("g1*4")
 * .s("sine").pdec(.5)
 * .penv(32)
 * .pcurve("<0 1>")
 */
declare function pcurve(type?: any, ...more: Arg[]): Pattern
/**
 * Decay time of pitch envelope.
 * Synonyms: pdec
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 */
declare function pdec(time?: any, ...more: Arg[]): Pattern
/**
 * Decay time of pitch envelope.
 * Synonyms: pdec
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 */
declare function pdecay(time?: any, ...more: Arg[]): Pattern
/**
 * Amount of pitch envelope. Negative values will flip the envelope.
 * If you don't set other pitch envelope controls, pattack:.2 will be the default.
 * @param semitones {number | Pattern} change in semitones
 * @example
 * note("c")
 * .penv("<12 7 1 .5 0 -1 -7 -12>")
 */
declare function penv(semitones?: any, ...more: Arg[]): Pattern
/**
 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
 * in events per cycle. per doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example per.struct("1 1 [1 1] 1") would give the same as "4 4 [8 8] 4".
 * See also its reciprocal, cyclesPer.
 * Synonyms: perCycle
 * @example
 * // Shorter events are more distorted
 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
 *  .distort(per.div(2))
 */
declare const per: Pattern
/**
 * A pattern measuring the 'shortness' of events, or in other words, the duration of pattern events,
 * in events per cycle. per doesn't have structure itself, but takes structure, and therefore
 * event durations, from the pattern that it is combined with.
 * For example per.struct("1 1 [1 1] 1") would give the same as "4 4 [8 8] 4".
 * See also its reciprocal, cyclesPer.
 * Synonyms: perCycle
 * @example
 * // Shorter events are more distorted
 * n("0 0*2 0 0*2 0 [0 0 0]@2").sound("bd")
 *  .distort(per.div(2))
 */
declare const perCycle: Pattern
/**
 * Generates a continuous pattern of perlin noise, in the range 0..1.
 * @example
 * // randomly change the cutoff
 * s("bd*4,hh*8").cutoff(perlin.range(500,8000))
 */
declare const perlin: Pattern
/**
 * Like per but measures the shortness of events according to an exponential curve. In
 * particular, where the event duration halves, the
 * returned value increases by one. perx.struct("1 1 [1 [1 1]] 1") would therefore be
 * the same as "3 3 [4 [5 5]] 3".
 */
declare const perx: Pattern
/**
 * Phaser audio effect that approximates popular guitar pedals.
 * Synonyms: ph
 * @param speed {number | Pattern} speed of modulation
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser("<1 2 4 8>")
 */
declare function ph(speed?: any, ...more: Arg[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phasdp(depth?: any, ...more: Arg[]): Pattern
/**
 * Phaser audio effect that approximates popular guitar pedals.
 * Synonyms: ph
 * @param speed {number | Pattern} speed of modulation
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser("<1 2 4 8>")
 */
declare function phaser(speed?: any, ...more: Arg[]): Pattern
/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 * Synonyms: phc
 * @param centerfrequency {number | Pattern} in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 */
declare function phasercenter(centerfrequency?: any, ...more: Arg[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phaserdepth(depth?: any, ...more: Arg[]): Pattern
declare function phaserrate(...more: Arg[]): Pattern
/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 * Synonyms: phs
 * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 */
declare function phasersweep(phasersweep?: any, ...more: Arg[]): Pattern
/**
 * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
 * @param phases {Array.<number> | Pattern} List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
 * @example
 * // Phase cancellation
 * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
 *   .partials(partials([1, 1, 1]))
 *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
 */
declare function phases(phases?: any, ...more: Arg[]): Pattern
/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 * Synonyms: phc
 * @param centerfrequency {number | Pattern} in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 */
declare function phc(centerfrequency?: any, ...more: Arg[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phd(depth?: any, ...more: Arg[]): Pattern
/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 * Synonyms: phs
 * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 */
declare function phs(phasersweep?: any, ...more: Arg[]): Pattern
/**
 * Visualises a pattern as a scrolling 'pianoroll', displayed in the background of the editor. To show a pianoroll for all running patterns, use all(pianoroll). To have a pianoroll appear below
 * a pattern instead, prefix with _, e.g.: sound("bd sd")._pianoroll().
 * Synonyms: punchcard
 * @param options {Object} Object containing all the optional following parameters as key value pairs:
 * @param cycles {integer} number of cycles to be displayed at the same time - defaults to 4
 * @param playhead {number} location of the active notes on the time axis - 0 to 1, defaults to 0.5
 * @param vertical {boolean} displays the roll vertically - 0 by default
 * @param labels {boolean} displays labels on individual notes (see the label function) - 0 by default
 * @param flipTime {boolean} reverse the direction of the roll - 0 by default
 * @param flipValues {boolean} reverse the relative location of notes on the value axis - 0 by default
 * @param overscan {number} lookup X cycles outside of the cycles window to display notes in advance - 1 by default
 * @param hideNegative {boolean} hide notes with negative time (before starting playing the pattern) - 0 by default
 * @param smear {boolean} notes leave a solid trace - 0 by default
 * @param fold {boolean} notes takes the full value axis width - 0 by default
 * @param active {string} hexadecimal or CSS color of the active notes - defaults to #FFCA28
 * @param inactive {string} hexadecimal or CSS color of the inactive notes - defaults to #7491D2
 * @param background {string} hexadecimal or CSS color of the background - defaults to transparent
 * @param playheadColor {string} hexadecimal or CSS color of the line representing the play head - defaults to white
 * @param fill {boolean} notes are filled with color (otherwise only the label is displayed) - 0 by default
 * @param fillActive {boolean} active notes are filled with color - 0 by default
 * @param stroke {boolean} notes are shown with colored borders - 0 by default
 * @param strokeActive {boolean} active notes are shown with colored borders - 0 by default
 * @param hideInactive {boolean} only active notes are shown - 0 by default
 * @param colorizeInactive {boolean} use note color for inactive notes - 1 by default
 * @param fontFamily {string} define the font used by notes labels - defaults to 'monospace'
 * @param minMidi {integer} minimum note value to display on the value axis - defaults to 10
 * @param maxMidi {integer} maximum note value to display on the value axis - defaults to 90
 * @param autorange {boolean} automatically calculate the minMidi and maxMidi parameters - 0 by default
 * @example
 * note("c2 a2 eb2")
 * .euclid(5,8)
 * .s('sawtooth')
 * .lpenv(4).lpf(300)
 * .pianoroll({ labels: 1 })
 */
declare function pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: Arg[]): Pattern
/**
 * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to inhabit, but maintains the structure of the original patterns.
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * note("<0 1 2!2 3>".pick(["g a", "e f", "f g f g" , "g c d"]))
 * @example
 * sound("<0 1 [2,0]>".pick(["bd sd", "cp cp", "hh hh"]))
 * @example
 * sound("<0!2 [0,1] 1>".pick(["bd(3,8)", "sd sd"]))
 * @example
 * s("<a!2 [a,b] b>".pick({a: "bd(3,8)", b: "sd sd"}))
 */
declare function pick(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * pickF lets you use a pattern of numbers to pick which function to apply to another pattern.
 * @param pat {Pattern}
 * @param lookup {Pattern} a pattern of indices
 * @param funcs {Array.<function()>} the array of functions from which to pull
 * @example
 * s("bd [rim hh]").pickF("<0 1 2>", [rev,jux(rev),fast(2)])
 * @example
 * note("<c2 d2>(3,8)").s("square")
 *     .pickF("<0 2> 1", [jux(rev),fast(2),x=>x.lpf(800)])
 */
declare function pickF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
/**
 * Similar to pick, but it applies an outerJoin instead of an innerJoin.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * Similar to pick, but the choosen pattern is reset when its index is triggered.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * Similar to pick, but the choosen pattern is restarted when its index is triggered.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * Picks patterns (or plain values) either from a list (by index) or a lookup table (by name).
 * Similar to pick, but cycles are squeezed into the target ('inhabited') pattern.
 * Synonyms: pickSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * "<a b [a,b]>".inhabit({a: s("bd(3,8)"),
 *                             b: s("cp sd")
 *                            })
 * @example
 * s("a@2 [a b] a".inhabit({a: "bd(3,8)", b: "sd sd"})).slow(4)
 */
declare function pickSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as pick, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmod(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as pickF, but if you pick a number greater than the size of the functions list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param lookup {Pattern} a pattern of indices
 * @param funcs {Array.<function()>} the array of functions from which to pull
 */
declare function pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: Arg[]): Pattern
/**
 * The same as pickOut, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodOut(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as pickReset, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodReset(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as pickRestart, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * "<a@2 b@2 c@2 d@2>".pickRestart({
 *         a: n("0 1 2 0"),
 *         b: n("2 3 4 ~"),
 *         c: n("[4 5] [4 3] 2 0"),
 *         d: n("0 -3 0 ~")
 *       }).scale("C:major").s("piano")
 */
declare function pickmodRestart(pat?: any, xs?: any, ...more: Arg[]): Pattern
/**
 * The same as inhabit, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * Synonyms: pickmodSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodSqueeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
declare function pipe(...more: Arg[]): Pattern
declare function pitchJump(...more: Arg[]): Pattern
declare function pitchJumpTime(...more: Arg[]): Pattern
/**
 * Renders a pitch circle to visualize frequencies within one octave
 * @param hapcircles {number}
 * @param circle {number}
 * @param edo {number}
 * @param root {string}
 * @param thickness {number}
 * @param hapRadius {number}
 * @param mode {string}
 * @param margin {number}
 * @example
 * n("0 .. 12").scale("C:chromatic")
 * .s("sawtooth")
 * .lpf(500)
 * ._pitchwheel()
 */
declare function pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: Arg[]): Pattern
declare function play(...more: Arg[]): Pattern
/**
 * The ply function repeats each event the given number of times.
 * @example
 * s("bd ~ sd cp").ply("<1 2 3>")
 */
declare function ply(...more: Arg[]): Pattern
/**
 * The plyForEach function repeats each event the given number of times, applying the given function to each event.
 * This version of ply uses the iteration index as an argument to the function, similar to echoWith.
 * Synonyms: plyforeach
 * @param factor {number} how many times to repeat
 * @param func {function} function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .plyForEach(4, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
declare const plyForEach: any
/**
 * The plyWith function repeats each event the given number of times, applying the given function to each event.\n
 * Synonyms: plywith
 * @param factor {number} how many times to repeat
 * @param func {function} function to apply, given the pattern
 * @example
 * "<0 [2 4]>"
 * .plyWith(4, (p) => p.add(2))
 * .scale("C:minor").note()
 */
declare const plyWith: any
/**
 * Experimental
 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
 * Synonyms: pm
 * @example
 * // The same as note("{c eb g, c2 g2}%6")
 * polymeter("c eb g", "c2 g2").note()
 */
declare function pm(...more: Arg[]): Pattern
declare function polyBind(...more: Arg[]): Pattern
declare function polyTouch(...more: Arg[]): Pattern
/**
 * Experimental
 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
 * Synonyms: pm
 * @example
 * // The same as note("{c eb g, c2 g2}%6")
 * polymeter("c eb g", "c2 g2").note()
 */
declare function polymeter(...more: Arg[]): Pattern
/**
 * The given items are played at the same time at the same length.
 * Synonyms: polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
declare function polyrhythm(...more: Arg[]): Pattern
/**
 * Gain applied after all effects have been processed.
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02").postgain(1.5)
 */
declare function postgain(...more: Arg[]): Pattern
declare function pow(...more: Arg[]): Pattern
/**
 * The given items are played at the same time at the same length.
 * Synonyms: polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
declare function pr(...more: Arg[]): Pattern
/**
 * Release time of pitch envelope
 * Synonyms: prel
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 */
declare function prel(time?: any, ...more: Arg[]): Pattern
/**
 * Release time of pitch envelope
 * Synonyms: prel
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 */
declare function prelease(time?: any, ...more: Arg[]): Pattern
/**
 * Syncopates a rhythm, by shifting each event halfway into its timespan.
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").every(4, press)
 *      ).slow(2)
 */
declare function press(...more: Arg[]): Pattern
/**
 * Like press, but allows you to specify the amount by which each
 * event is shifted. pressBy(0.5) is the same as press, while
 * pressBy(1/3) shifts each event by a third of its timespan.
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
 *      ).slow(2)
 */
declare function pressBy(...more: Arg[]): Pattern
declare function processSampleMap(...more: Arg[]): Pattern
/**
 * MIDI program number: Sends a MIDI program change message.
 * @param program {number | Pattern} MIDI program number (0-127)
 * @example
 * note("c4").progNum(10).midichan(1).midi()
 */
declare function progNum(program?: any, ...more: Arg[]): Pattern
declare function psus(...more: Arg[]): Pattern
/**
 *
 */
declare function psustain(...more: Arg[]): Pattern
/**
 * A discrete value that repeats once per cycle.
 * @example
 * pure('e4') // "e4"
 */
declare function pure(...more: Arg[]): Pattern
/**
 * Controls the pulsewidth of the pulse oscillator
 * @param pulsewidth {number | Pattern}
 * @example
 * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
 */
declare function pw(pulsewidth?: any, ...more: Arg[]): Pattern
/**
 * Controls the lfo rate for the pulsewidth of the pulse oscillator
 * @param rate {number | Pattern}
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 */
declare function pwrate(rate?: any, ...more: Arg[]): Pattern
/**
 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
 * @param sweep {number | Pattern}
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 */
declare function pwsweep(sweep?: any, ...more: Arg[]): Pattern
declare function r(...more: Arg[]): Pattern
/**
 * A continuous pattern of random numbers, between 0 and 1.
 * @example
 * // randomly change the cutoff
 * s("bd*4,hh*8").cutoff(rand.range(500,8000))
 */
declare const rand: Pattern
/**
 * A continuous pattern of random numbers, between -1 and 1
 */
declare const rand2: Pattern
/**
 * Creates a list of random numbers of the given length
 * @param n {number} Number of random numbers to sample
 * @example
 * s("saw").seg(16).n(irand(12)).scale("F1:minor")
 *   .partials(randL(8))
 */
declare function randL(n?: any, ...more: Arg[]): Pattern
/**
 * Picks one of the elements at random each cycle.
 * Synonyms: randcat
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
declare function randcat(...more: Arg[]): Pattern
declare function randrun(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1.
 * Returns a new pattern with values scaled to the given min/max range.
 * Most useful in combination with continuous patterns.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine.range(500,4000))
 */
declare function range(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
 * Returns a new pattern with values scaled to the given min/max range.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine2.range2(500,4000))
 */
declare function range2(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1
 * Returns a new pattern with values scaled to the given min/max range,
 * following an exponential curve.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine.rangex(500,4000))
 */
declare function rangex(...more: Arg[]): Pattern
/**
 * Shorthand for .sometimesBy(0.25, fn)
 * @example
 * s("hh*8").rarely(x=>x.speed("0.5"))
 */
declare function rarely(...more: Arg[]): Pattern
/**
 * Allows dividing numbers via list notation using ":".
 * Returns a new pattern with just numbers.
 * @example
 * ratio("1, 5:4, 3:2").mul(110)
 * .freq().s("piano")
 */
declare function ratio(...more: Arg[]): Pattern
/**
 * Reverb lowpass frequency at -60dB (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rdim
 * @param frequency {number} between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
 */
declare function rdim(frequency?: any, ...more: Arg[]): Pattern
declare function real(...more: Arg[]): Pattern
/**
 * exposes a custom value at query time. basically allows mutating state without evaluation
 */
declare function ref(...more: Arg[]): Pattern
/**
 * Registers a new pattern method. The method is added to the Pattern class + the standalone function is returned from register.
 * @param name {string | Array.<string>} name of the function, or an array of names to be used as synonyms
 * @param func {function} function with 1 or more params, where last is the current pattern
 * @param patternify {bool} defaults to true; if set to false, you will have more control over the arguments to func as they will be
in their raw form and it will be up to you to patternify them and/or query them for values
 * @example
 * const vlpf = register('vlpf', (freq, pat) => {
 *   return pat.fmap((v) => ({...v, cutoff: freq * (v.velocity ?? 1) }));
 * })
 * s("saw").seg(8).velocity(rand).vlpf(800)
 */
declare function register(name?: any, func?: (pat: Pattern, ...args: any[]) => any, patternify?: any, ...more: Arg[]): Pattern
declare function registerControl(...more: Arg[]): Pattern
declare function registerMultiControl(...more: Arg[]): Pattern
declare function registerSampleSource(...more: Arg[]): Pattern
declare function registerSamplesPrefix(...more: Arg[]): Pattern
declare function registerSound(...more: Arg[]): any
declare function registerSoundfonts(...more: Arg[]): Pattern
declare function registerSynthSounds(...more: Arg[]): any
declare function registerVoicings(...more: Arg[]): Pattern
declare function registerWaveTable(...more: Arg[]): Pattern
declare function registerWidget(...more: Arg[]): Pattern
declare function registerWorklet(...more: Arg[]): Pattern
declare function registerZZFXSounds(...more: Arg[]): any
declare function reify(...more: Arg[]): Pattern
/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 * Synonyms: rel
 * @param time {number | Pattern} release time in seconds
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 */
declare function rel(time?: any, ...more: Arg[]): Pattern
/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 * Synonyms: rel
 * @param time {number | Pattern} release time in seconds
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 */
declare function release(time?: any, ...more: Arg[]): Pattern
declare function releaseAudioNode(...more: Arg[]): Pattern
/**
 * Returns a new pattern, with haps containing undefined values removed from
 * query results.
 */
declare function removeUndefineds(...more: Arg[]): Pattern
declare function renderPatternAudio(...more: Arg[]): Pattern
/**
 * Repeats each cycle the given number of times.
 * @example
 * note(irand(12).add(34)).segment(4).repeatCycles(2).s("gm_acoustic_guitar_nylon")
 */
declare const repeatCycles: any
declare function repl(...more: Arg[]): Pattern
/**
 * Experimental
 * replicate is similar to fast in that it increases its density, but it also increases the step count
 * accordingly. So stepcat("a b".replicate(2), "c d") would be the same as "a b a b c d", whereas
 * stepcat("a b".fast(2), "c d") would be the same as "[a b] [a b] c d".
 * TODO: find out how this function differs from extend
 * @example
 * stepcat(
 *   sound("bd bd - cp").replicate(2),
 *   sound("bd - sd -")
 * ).pace(8)
 */
declare function replicate(...more: Arg[]): Pattern
declare function rescale(...more: Arg[]): Pattern
declare function resetDefaultValues(...more: Arg[]): Pattern
declare function resetDefaults(...more: Arg[]): Pattern
declare function resetGlobalEffects(...more: Arg[]): Pattern
declare function resetLoadedSounds(...more: Arg[]): Pattern
declare function resetSeenKeys(...more: Arg[]): Pattern
declare function resetVoicings(...more: Arg[]): Pattern
declare function reset_state(...more: Arg[]): Pattern
declare function reset_timelines(...more: Arg[]): Pattern
/**
 * Controls the low-pass q-value.
 * Synonyms: resonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 */
declare function resonance(q?: any, ...more: Arg[]): Pattern
/**
 * Reverse all cycles in a pattern. See also revv for reversing a whole pattern.
 * @example
 * note("c d e g").rev()
 */
declare function rev(...more: Arg[]): Pattern
declare function reverseBuffer(...more: Arg[]): Pattern
/**
 * Reverse a whole pattern. See also rev for reversing each cycle.
 * @example
 * // This is the same as `<[g e] [d c]>`. If `rev()` is used, you get
 * // the same as `<[d c] [g e]>`, where each cycle reverses, but the order of
 * // cycles stays the same.
 * note("<[c d] [e g]>").revv()
 */
declare function revv(...more: Arg[]): Pattern
/**
 * Reverb fade time (in seconds).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rfade
 * @param seconds {number} for the reverb to fade
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
 */
declare function rfade(seconds?: any, ...more: Arg[]): Pattern
/**
 * Loops the pattern inside an offset for cycles.
 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
 * Synonyms: rib
 * @param offset {number} start point of loop in cycles
 * @param cycles {number} loop length in cycles
 * @example
 * note("<c d e f>").ribbon(1, 2)
 * @example
 * // Looping a portion of randomness
 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
 * @example
 * // rhythm generator
 * s("bd!16?").ribbon(29,.5)
 */
declare function rib(offset?: any, cycles?: any, ...more: Arg[]): Pattern
/**
 * Loops the pattern inside an offset for cycles.
 * If you think of the entire span of time in cycles as a ribbon, you can cut a single piece and loop it.
 * Synonyms: rib
 * @param offset {number} start point of loop in cycles
 * @param cycles {number} loop length in cycles
 * @example
 * note("<c d e f>").ribbon(1, 2)
 * @example
 * // Looping a portion of randomness
 * n(irand(8).segment(4)).scale("c:pentatonic").ribbon(1337, 2)
 * @example
 * // rhythm generator
 * s("bd!16?").ribbon(29,.5)
 */
declare function ribbon(offset?: any, cycles?: any, ...more: Arg[]): Pattern
declare function ring(...more: Arg[]): Pattern
declare function ringdf(...more: Arg[]): Pattern
declare function ringf(...more: Arg[]): Pattern
/**
 * Reverb lowpass starting frequency (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rlp
 * @param frequency {number} between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
 */
declare function rlp(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the level of reverb.
 * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
 * @param level {number | Pattern} between 0 and 1
 * @example
 * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
 * @example
 * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
 */
declare function room(level?: any, ...more: Arg[]): Pattern
/**
 * Reverb lowpass frequency at -60dB (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rdim
 * @param frequency {number} between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rdim(8000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rdim(400)
 */
declare function roomdim(frequency?: any, ...more: Arg[]): Pattern
/**
 * Reverb fade time (in seconds).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rfade
 * @param seconds {number} for the reverb to fade
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000).rfade(0.5)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000).rfade(4)
 */
declare function roomfade(seconds?: any, ...more: Arg[]): Pattern
/**
 * Reverb lowpass starting frequency (in hertz).
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rlp
 * @param frequency {number} between 0 and 20000hz
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(10000)
 * @example
 * s("bd sd [~ bd] sd").room(0.5).rlp(5000)
 */
declare function roomlp(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the room size of the reverb, see room.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rsize, sz, size
 * @param size {number | Pattern} between 0 and 10
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 */
declare function roomsize(size?: any, ...more: Arg[]): Pattern
/**
 * Maps the chords of the incoming pattern to root notes in the given octave.
 * @param octave {octave} octave to use
 * @example
 * "<C^7 A7 Dm7 G7>".rootNotes(2).note()
 */
declare function rootNotes(octave?: any, ...more: Arg[]): Pattern
declare function rotate(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values rounded
 * to the nearest integer.
 * @example
 * n("0.5 1.5 2.5".round()).scale("C:major")
 */
declare function round(...more: Arg[]): Pattern
/**
 * Sets the room size of the reverb, see room.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rsize, sz, size
 * @param size {number | Pattern} between 0 and 10
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 */
declare function rsize(size?: any, ...more: Arg[]): Pattern
/**
 * A discrete pattern of numbers from 0 to n-1
 * @example
 * n(run(4)).scale("C4:pentatonic")
 * // n("0 1 2 3").scale("C4:pentatonic")
 */
declare function run(...more: Arg[]): Pattern
/**
 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
 * separated by ':'.
 * Synonyms: sound
 * @param sound {string | Pattern} The sound / pattern of sounds to pick
 * @example
 * s("bd hh")
 * @example
 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
 */
declare function s(sound?: any, ...more: Arg[]): Pattern
declare function s_add(...more: Arg[]): Pattern
declare function s_alt(...more: Arg[]): Pattern
declare function s_cat(...more: Arg[]): Pattern
declare function s_contract(...more: Arg[]): Pattern
declare function s_expand(...more: Arg[]): Pattern
declare function s_extend(...more: Arg[]): Pattern
declare function s_polymeter(...more: Arg[]): Pattern
declare function s_sub(...more: Arg[]): Pattern
declare function s_taper(...more: Arg[]): Pattern
declare function s_taperlist(...more: Arg[]): Pattern
declare function s_tour(...more: Arg[]): Pattern
declare function s_zip(...more: Arg[]): Pattern
/**
 * Loads a collection of samples to use with s
 * @example
 * samples('github:tidalcycles/dirt-samples');
 * s("[bd ~]*2, [~ hh]*2, ~ sd")
 * @example
 * samples({
 *  bd: '808bd/BD0000.WAV',
 *  sd: '808sd/SD0010.WAV'
 *  }, 'https://raw.githubusercontent.com/tidalcycles/Dirt-Samples/master/');
 * s("[bd ~]*2, [~ hh]*2, ~ sd")
 */
declare function samples(...more: Arg[]): any
/**
 * A sawtooth signal between 0 and 1.
 * @example
 * note("<c3 [eb3,g3] g2 [g3,bb3]>*8")
 * .clip(saw.slow(2))
 * @example
 * n(saw.range(0,8).segment(8))
 * .scale('C major')
 */
declare const saw: Pattern
/**
 * A sawtooth signal between -1 and 1 (like saw, but bipolar).
 */
declare const saw2: Pattern
/**
 * Turns numbers into notes in the scale (zero indexed) or quantizes notes to a scale.
 * When describing notes via numbers, note that negative numbers can be used to wrap backwards
 * in the scale as well as sharps or flats to produce notes outside of the scale.
 * Also sets scale for other scale operations, like {@link Pattern#scaleTranspose}.
 * A scale consists of a root note (e.g. c4, c, f#, bb4) followed by semicolon (':') and then a scale type.
 * The scale name must be written without spaces (because it would be interpreted as a multi-step pattern otherwise).
 * If your scale name includes spaces, replace them with colons.
 * The root note defaults to octave 3, if no octave number is given.
 * @param scale {string} Name of scale
 * @example
 * n("0 2 4 6 4 2").scale("C:major")
 * @example
 * n("[0,7] 4 [2,7] 4")
 * .scale("C:<major minor>/2")
 * .s("piano")
 * @example
 * n(rand.range(0,12).segment(8))
 * .scale("C:ritusen")
 * .s("piano")
 * @example
 * n("<[0,7b] [-4# -4] [-2,7##] 4 [0,7] [-4# -4b] [-2,7###] 4b>*4")
 * .scale("C:<major minor>/2")
 * .s("piano")
 * @example
 * note("C1*16").transpose(irand(36)).scale('Cb2 major').scaleTranspose(3)
 * @example
 * n("[0 0] [1 2] [3 4] [5 6]").scale("C:major:blues")
 */
declare function scale(scale?: any, ...more: Arg[]): Pattern
/**
 * Transposes notes inside the scale by the number of steps.
 * Expected to be called on a Pattern which already has a {@link Pattern#scale}
 * Synonyms: scaleTrans, strans
 * @param offset {offset} number of steps inside the scale
 * @example
 * "-8 [2,4,6]"
 * .scale('C4 bebop major')
 * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
 * .note()
 */
declare function scaleTrans(offset?: any, ...more: Arg[]): Pattern
/**
 * Transposes notes inside the scale by the number of steps.
 * Expected to be called on a Pattern which already has a {@link Pattern#scale}
 * Synonyms: scaleTrans, strans
 * @param offset {offset} number of steps inside the scale
 * @example
 * "-8 [2,4,6]"
 * .scale('C4 bebop major')
 * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
 * .note()
 */
declare function scaleTranspose(offset?: any, ...more: Arg[]): Pattern
declare function scheduleAtTime(...more: Arg[]): Pattern
declare function scram(...more: Arg[]): Pattern
/**
 * Slices a pattern into the given number of parts, then plays those parts at random. Similar to shuffle,
 * but parts might be played more than once, or not at all, per cycle.
 * @example
 * note("c d e f").sound("piano").scramble(4)
 * @example
 * seq("c d e f".scramble(4), "g").note().sound("piano")
 */
declare function scramble(...more: Arg[]): Pattern
/**
 * Allows you to scrub an audio file like a tape loop by passing values that represents the position in the audio file
 * in the optional array syntax ex: "0.5:2", the second value controls the speed of playback
 * @example
 * samples('github:switchangel/pad')
 * s("swpad:0").scrub("{0.1!2 .25@3 0.7!2 <0.8:1.5>}%8")
 * @example
 * samples('github:yaxu/clean-breaks/main');
 * s("amen/4").fit().scrub("{0@3 0@2 4@3}%8".div(16))
 */
declare function scrub(...more: Arg[]): Pattern
declare function seconds(...more: Arg[]): Pattern
/**
 * Change the seed for random signals. Normally, random signals depend on time,
 * so two patterns at the same time will have the same random values. Specifying
 * a new seed changes the signal output by rand. This also affects other functions
 * that use randomness, like shuffle and sometimes.
 * @param n {number} A new seed. Can be any number.
 * @example
 * $: s("hh*4").degrade();
 * $: s("bd*4").degrade().seed(1); // Will degrade different events from the hi-hat
 */
declare function seed(n?: any, ...more: Arg[]): Pattern
/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * Synonyms: seg
 * @param segments {number} number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
declare function seg(segments?: any, ...more: Arg[]): Pattern
/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * Synonyms: seg
 * @param segments {number} number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
declare function segment(segments?: any, ...more: Arg[]): Pattern
declare function semitone(...more: Arg[]): Pattern
/**
 * Like cat, but the items are crammed into one cycle.
 * Synonyms: sequence, fastcat
 * @example
 * seq("e5", "b4", ["d5", "c5"]).note()
 * // "e5 b4 [d5 c5]".note()
 * @example
 * // As a chained function:
 * s("hh*4").seq(
 *   note("c4(5,8)")
 * )
 */
declare function seq(...more: Arg[]): Pattern
/**
 * Similarly to arrange, allows you to arrange multiple patterns together over multiple cycles.
 * Unlike arrange, you specify a start and stop time for each pattern rather than duration, which
 * means that patterns can overlap.
 * @example
 * seqPLoop([0, 2, "bd(3,8)"],
 *          [1, 3, "cp(3,8)"]
 *         )
 *   .sound()
 */
declare function seqPLoop(...more: Arg[]): Pattern
/**
 * See fastcat
 */
declare function sequence(...more: Arg[]): Pattern
/**
 * Takes a list of patterns, and returns a pattern of lists.
 */
declare function sequenceP(...more: Arg[]): Pattern
declare function set(...more: Arg[]): Pattern
declare function setAudioContext(...more: Arg[]): Pattern
declare function setCpm(...more: Arg[]): any
declare function setCps(...more: Arg[]): any
declare function setCpsFunc(...more: Arg[]): Pattern
declare function setDefault(...more: Arg[]): Pattern
declare function setDefaultAudioContext(...more: Arg[]): Pattern
declare function setDefaultValue(...more: Arg[]): Pattern
declare function setDefaultValues(...more: Arg[]): Pattern
declare function setDefaultVoicings(...more: Arg[]): Pattern
declare const setFlash: any
/**
 * Apply a function to all gains provided in patterns. Can be used to rescale gain to be
 * quadratic, exponential, etc. rather than linear
 * @param function {function} to apply to all gain values
 * @example
 * setGainCurve((x) => x * x) // quadratic gain
 * s("bd*4").gain(0.5) // equivalent to 0.25 gain normally
 */
declare function setGainCurve(function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
declare function setIsStarted(...more: Arg[]): Pattern
declare function setLogger(...more: Arg[]): Pattern
/**
 * Set the max polyphony. If notes are ringing out via release then they will
 * start to die out in first-in-first-out order once the max polyphony has been hit
 * @param Max {number} polyphony. Defaults to 128
 * @example
 * setMaxPolyphony(4)
 * n(irand(24).seg(8)).scale("C#3:minor").room(1).release(4).gain(0.5)
 */
declare function setMaxPolyphony(Max?: any, ...more: Arg[]): Pattern
declare const setMiniLocations: any
declare function setMultiChannelOrbits(...more: Arg[]): Pattern
declare function setPattern(...more: Arg[]): Pattern
declare const setSliderWidgets: any
declare function setSoundfontUrl(...more: Arg[]): Pattern
declare function setStringParser(...more: Arg[]): Pattern
declare function setSuperdoughAudioController(...more: Arg[]): Pattern
declare function setTheme(...more: Arg[]): Pattern
declare function setTime(...more: Arg[]): any
declare function setTriggerFunc(...more: Arg[]): Pattern
declare function setVersionDefaults(...more: Arg[]): Pattern
declare function setVoicingRange(...more: Arg[]): Pattern
declare function setWidget(...more: Arg[]): Pattern
/**
 * Changes the global tempo to the given cycles per minute
 * @param cpm {number} cycles per minute
 * @example
 * setcpm(140/4) // =140 bpm in 4/4
 * $: s("bd*4,[- sd]*2").bank('tr707')
 */
declare function setcpm(cpm?: any, ...more: Arg[]): any
declare function setcps(...more: Arg[]): any
declare const settings: any
/**
 * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
 * Please use distort instead, which has a more predictable response curve
 * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
 * @param distortion {number | Pattern} between 0 and 1
 * @example
 * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
 */
declare function shape(distortion?: any, ...more: Arg[]): Pattern
declare const showMiniLocations: any
/**
 * Experimental
 * Progressively shrinks the pattern by 'n' steps until there's nothing left, or if a second value is given (using mininotation list syntax with :),
 * that number of times.
 * A positive number will progressively drop steps from the start of a pattern, and a negative number from the end.
 * @example
 * "tha dhi thom nam".shrink("1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".shrink("-1").sound()
 * .bank("mridangam")
 * @example
 * "tha dhi thom nam".shrink("1 -1").sound().bank("mridangam").pace(4)
 * @example
 * note("0 1 2 3 4 5 6 7".scale("C:ritusen")).sound("folkharp")
 *    .shrink("1 -1").pace(8)
 */
declare function shrink(...more: Arg[]): Pattern
declare function shrinklist(...more: Arg[]): Pattern
/**
 * Slices a pattern into the given number of parts, then plays those parts in random order.
 * Each part will be played exactly once per cycle.
 * @example
 * note("c d e f").sound("piano").shuffle(4)
 * @example
 * seq("c d e f".shuffle(4), "g").note().sound("piano")
 */
declare function shuffle(...more: Arg[]): Pattern
declare function signal(func: (time: number) => any): Pattern
/**
 * Does absolutely nothing..
 * @example
 * silence // "~"
 */
declare const silence: Pattern
declare const simple: any
/**
 * A sine signal between 0 and 1.
 * @example
 * n(sine.segment(16).range(0,15))
 * .scale("C:minor")
 */
declare const sine: Pattern
/**
 * A sine signal between -1 and 1 (like sine, but bipolar).
 */
declare const sine2: Pattern
/**
 * Wavefolding distortion composed with sinusoid
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function sinefold(distortion?: any, volume?: any, ...more: Arg[]): Pattern
/**
 * Sets the room size of the reverb, see room.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rsize, sz, size
 * @param size {number | Pattern} between 0 and 10
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 */
declare function size(size?: any, ...more: Arg[]): Pattern
/**
 * Chops samples into the given number of slices, triggering those slices with a given pattern of slice numbers.
 * Instead of a number, it also accepts a list of numbers from 0 to 1 to slice at specific points.
 * @example
 * samples('github:tidalcycles/dirt-samples')
 * s("breaks165").slice(8, "0 1 <2 2*2> 3 [4 0] 5 6 7".every(3, rev)).slow(0.75)
 * @example
 * samples('github:tidalcycles/dirt-samples')
 * s("breaks125").fit().slice([0,.25,.5,.75], "0 1 1 <2 3>")
 */
declare function slice(...more: Arg[]): Pattern
declare function slide(...more: Arg[]): Pattern
/**
 * Displays a slider widget to allow the user manipulate a value
 * @param value {number} Initial value
 * @param min {number} Minimum value - optional, defaults to 0
 * @param max {number} Maximum value - optional, defaults to 1
 * @param step {number} Step size - optional
 */
declare function slider(value?: any, min?: any, max?: any, step?: any, ...more: Arg[]): Pattern
declare const sliderPlugin: any
declare const sliderValues: any
declare function sliderWithID(...more: Arg[]): Pattern
/**
 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
 * Synonyms: sparsity
 * @param factor {number | Pattern} slow down factor
 * @example
 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
 */
declare function slow(factor?: any, ...more: Arg[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function slowChunk(...more: Arg[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 * Synonyms: cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 */
declare function slowcat(...more: Arg[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle. Unlike slowcat, this version will skip cycles.
 * @param items {any} The items to concatenate
 */
declare function slowcatPrime(items?: any, ...more: Arg[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function slowchunk(...more: Arg[]): Pattern
declare function smear(...more: Arg[]): Pattern
/**
 * Soft-clipping distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function soft(distortion?: any, volume?: any, ...more: Arg[]): Pattern
declare function sol2note(...more: Arg[]): Pattern
/**
 * Shorthand for .someCyclesBy(0.5, fn)
 * @example
 * s("bd,hh*8").someCycles(x=>x.speed("0.5"))
 */
declare function someCycles(...more: Arg[]): Pattern
/**
 * Randomly applies the given function by the given probability on a cycle by cycle basis.
 * Similar to sometimesBy
 * @param probability {number | Pattern} a number between 0 and 1
 * @param function {function} the transformation to apply
 * @example
 * s("bd,hh*8").someCyclesBy(.3, x=>x.speed("0.5"))
 */
declare function someCyclesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Applies the given function with a 50% chance
 * @param function {function} the transformation to apply
 * @example
 * s("hh*8").sometimes(x=>x.speed("0.5"))
 */
declare function sometimes(function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Randomly applies the given function by the given probability.
 * Similar to someCyclesBy
 * @param probability {number | Pattern} a number between 0 and 1
 * @param function {function} the transformation to apply
 * @example
 * s("hh*8").sometimesBy(.4, x=>x.speed("0.5"))
 */
declare function sometimesBy(probability?: any, function_?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
declare function songPtr(...more: Arg[]): Pattern
/**
 * Select a sound / sample by name. When using mininotation, you can also optionally supply 'n' and 'gain' parameters
 * separated by ':'.
 * Synonyms: sound
 * @param sound {string | Pattern} The sound / pattern of sounds to pick
 * @example
 * s("bd hh")
 * @example
 * s("bd:0 bd:1 bd:0:0.3 bd:1:1.4")
 */
declare function sound(sound?: any, ...more: Arg[]): Pattern
/**
 * Register an alias for a sound.
 * @param original {string} The original sound name
 * @param alias {string} The alias to use for the sound
 */
declare function soundAlias(original?: any, alias?: any, ...more: Arg[]): any
declare const soundMap: any
declare const soundfontList: any
/**
 * Define a custom webaudio node to use as a sound source.
 * Synonyms: src
 * @param getSource {function}
 */
declare function source(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
 * Synonyms: sparsity
 * @param factor {number | Pattern} slow down factor
 * @example
 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
 */
declare function sparsity(factor?: any, ...more: Arg[]): Pattern
declare function speak(...more: Arg[]): Pattern
/**
 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
 * @param speed {number | Pattern} inf to inf, negative numbers play the sample backwards.
 * @example
 * s("bd*6").speed("1 2 4 1 -2 -4")
 * @example
 * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
 */
declare function speed(speed?: any, ...more: Arg[]): Pattern
/**
 * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
 * @example
 * samples('github:tidalcycles/dirt-samples')
 * s("breaks165")
 * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
 */
declare function splice(...more: Arg[]): Pattern
declare function splitAt(...more: Arg[]): Pattern
/**
 * Set the stereo pan spread for supported oscillators
 * @param spread {number | Pattern} between 0 and 1
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
 */
declare function spread(spread?: any, ...more: Arg[]): Pattern
/**
 * A square signal between 0 and 1.
 * @example
 * n(square.segment(4).range(0,7)).scale("C:minor")
 */
declare const square: Pattern
/**
 * A square signal between -1 and 1 (like square, but bipolar).
 */
declare const square2: Pattern
/**
 * Pick from the list of values (or patterns of values) via the index using the given
 * pattern of integers. The selected pattern will be compressed to fit the duration of the selecting event
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * note(squeeze("<0@2 [1!2] 2>", ["g a", "f g f g" , "g a c d"]))
 */
declare function squeeze(pat?: any, xs?: any, ...more: Arg[]): Pattern
declare function squeezeBind(...more: Arg[]): Pattern
/**
 * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
 * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
 * @param squiz {number | Pattern} Try passing multiples of 2 to it - 2, 4, 8 etc.
 * @example
 * squiz("2 4/2 6 [8 16]").s("bd").osc()
 */
declare function squiz(squiz?: any, ...more: Arg[]): Pattern
/**
 * Define a custom webaudio node to use as a sound source.
 * Synonyms: src
 * @param getSource {function}
 */
declare function src(getSource?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * The given items are played at the same time at the same length.
 * Synonyms: polyrhythm, pr
 * @example
 * stack("g3", "b3", ["e4", "d4"]).note()
 * // "g3,b3,[e4 d4]".note()
 * @example
 * // As a chained function:
 * s("hh*4").stack(
 *   note("c4(5,8)")
 * )
 */
declare function stack(...more: Arg[]): Pattern
declare function stackBy(...more: Arg[]): Pattern
declare function stackCentre(...more: Arg[]): Pattern
declare function stackLeft(...more: Arg[]): Pattern
declare function stackRight(...more: Arg[]): Pattern
declare function startPresetNote(...more: Arg[]): Pattern
declare function steady(...more: Arg[]): Pattern
declare function stepBind(...more: Arg[]): Pattern
/**
 * Experimental
 * Concatenates patterns stepwise, according to an inferred 'steps per cycle'.
 * Similar to stepcat, but if an argument is a list, the whole pattern will alternate between the elements in the list.
 * @example
 * stepalt(["bd cp", "mt"], "bd").sound()
 * // The same as "bd cp bd mt bd".sound()
 */
declare function stepalt(...more: Arg[]): Pattern
/**
 * 'Concatenates' patterns like fastcat, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias timecat.
 * Synonyms: timeCat, timecat
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
declare function stepcat(...more: Arg[]): Pattern
declare function steps(...more: Arg[]): Pattern
declare function stepsPerOctave(...more: Arg[]): Pattern
/**
 * Transposes notes inside the scale by the number of steps.
 * Expected to be called on a Pattern which already has a {@link Pattern#scale}
 * Synonyms: scaleTrans, strans
 * @param offset {offset} number of steps inside the scale
 * @example
 * "-8 [2,4,6]"
 * .scale('C4 bebop major')
 * .scaleTranspose("<0 -1 -2 -3 -4 -5 -6 -4>")
 * .note()
 */
declare function strans(offset?: any, ...more: Arg[]): Pattern
/**
 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
 * @param factor {number | Pattern} inf to inf, negative numbers play the sample backwards.
 * @example
 * s("gm_flute").stretch("1 2 .5")
 */
declare function stretch(factor?: any, ...more: Arg[]): Pattern
/**
 * Cuts each sample into the given number of parts, triggering progressive portions of each sample at each loop.
 * @example
 * s("numbers:0 numbers:1 numbers:2").striate(6).slow(3)
 */
declare function striate(...more: Arg[]): Pattern
declare function stringifyValues(...more: Arg[]): Pattern
/**
 * Applies the given structure to the pattern:
 * @example
 * note("c,eb,g")
 *   .struct("x ~ x ~ ~ x ~ x ~ ~ ~ x ~ x ~ ~")
 *   .slow(2)
 */
declare function struct(...more: Arg[]): Pattern
declare const strudel: any
declare const strudelScope: any
/**
 * Deprecated. Like echo, but the last 2 parameters are flipped.
 * @param times {number} how many times to repeat
 * @param feedback {number} velocity multiplicator for each iteration
 * @param time {number} cycle offset between iterations
 * @example
 * s("bd sd").stut(3, .8, 1/6)
 */
declare function stut(times?: any, feedback?: any, time?: any, ...more: Arg[]): Pattern
/**
 * Superimpose and offset multiple times, applying the given function each time.
 * Synonyms: echowith, stutWith, stutwith
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param func {function} function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
declare function stutWith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Superimpose and offset multiple times, applying the given function each time.
 * Synonyms: echowith, stutWith, stutwith
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param func {function} function to apply, given the pattern and the iteration index
 * @example
 * "<0 [2 4]>"
 * .echoWith(4, 1/8, (p,n) => p.add(n*2))
 * .scale("C:minor").note()
 */
declare function stutwith(times?: any, time?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Like add, but the given numbers are subtracted.
 * @example
 * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
 * // See add for more information.
 */
declare function sub(...more: Arg[]): Pattern
declare function superdough(...more: Arg[]): Pattern
declare function superdoughTrigger(...more: Arg[]): Pattern
/**
 * Superimposes the result of the given function(s) on top of the original pattern:
 * @example
 * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
 *   .superimpose(x=>x.add(2))
 *   .scale('C minor').note()
 */
declare function superimpose(...more: Arg[]): Pattern
/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 * Synonyms: sus
 * @param gain {number | Pattern} sustain level between 0 and 1
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 */
declare function sus(gain?: any, ...more: Arg[]): Pattern
/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 * Synonyms: sus
 * @param gain {number | Pattern} sustain level between 0 and 1
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 */
declare function sustain(gain?: any, ...more: Arg[]): Pattern
declare function sustainpedal(...more: Arg[]): Pattern
/**
 * Shorthand for swingBy with 1/3:
 * @param subdivision {number}
 * @example
 * s("hh*8").swing(4)
 * // s("hh*8").swingBy(1/3, 4)
 */
declare function swing(subdivision?: any, ...more: Arg[]): Pattern
/**
 * The function swingBy x n breaks each cycle into n slices, and then delays events in the second half of each slice by the amount x, which is relative to the size of the (half) slice. So if x is 0 it does nothing, 0.5 delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
 * @param subdivision {number}
 * @param offset {number}
 * @example
 * s("hh*8").swingBy(1/3, 4)
 */
declare function swingBy(subdivision?: any, offset?: any, ...more: Arg[]): Pattern
/**
 * MIDI sysex: Sends a MIDI sysex message.
 * @param id {number | Pattern} Sysex ID
 * @param data {number | Pattern} Sysex data
 * @example
 * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
 */
declare function sysex(id?: any, data?: any, ...more: Arg[]): Pattern
/**
 * MIDI sysex data: Sends a MIDI sysex message.
 * @param data {number | Pattern} Sysex data
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
declare function sysexdata(data?: any, ...more: Arg[]): Pattern
/**
 * MIDI sysex ID: Sends a MIDI sysex identifier message.
 * @param id {number | Pattern} Sysex ID
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
declare function sysexid(id?: any, ...more: Arg[]): Pattern
/**
 * Sets the room size of the reverb, see room.
 * When this property is changed, the reverb will be recaculated, so only change this sparsely..
 * Synonyms: rsize, sz, size
 * @param size {number | Pattern} between 0 and 10
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(1)
 * @example
 * s("bd sd [~ bd] sd").room(.8).rsize(4)
 */
declare function sz(size?: any, ...more: Arg[]): Pattern
/**
 * Loads a collection of wavetables to use with s
 */
declare function tables(...more: Arg[]): Pattern
/**
 * Experimental
 * Takes the given number of steps from a pattern (dropping the rest).
 * A positive number will take steps from the start of a pattern, and a negative number from the end.
 * @example
 * "bd cp ht mt".take("2").sound()
 * // The same as "bd cp".sound()
 * @example
 * "bd cp ht mt".take("1 2 3").sound()
 * // The same as "bd bd cp bd cp ht".sound()
 * @example
 * "bd cp ht mt".take("-1 -2 -3").sound()
 * // The same as "mt ht mt cp ht mt".sound()
 */
declare function take(...more: Arg[]): Pattern
declare function theme(...more: Arg[]): Pattern
declare function themeColors(...more: Arg[]): Pattern
declare const themes: any
/**
 * A signal representing the cycle time.
 */
declare const time: Pattern
/**
 * 'Concatenates' patterns like fastcat, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias timecat.
 * Synonyms: timeCat, timecat
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
declare function timeCat(...more: Arg[]): Pattern
/**
 * 'Concatenates' patterns like fastcat, but proportional to a number of steps per cycle.
 * The steps can either be inferred from the pattern, or provided as a [length, pattern] pair.
 * Has the alias timecat.
 * Synonyms: timeCat, timecat
 * @example
 * stepcat([3,"e3"],[1, "g3"]).note()
 * // the same as "e3@3 g3".note()
 * @example
 * stepcat("bd sd cp","hh hh").sound()
 * // the same as "bd sd cp hh hh".sound()
 */
declare function timecat(...more: Arg[]): Pattern
declare function timeline(...more: Arg[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 ..
 *
 * Returns a new pattern with values scaled to the bipolar range -1 .. 1
 */
declare function toBipolar(...more: Arg[]): Pattern
declare function toggleBlockComment(...more: Arg[]): Pattern
declare function toggleBlockCommentByLine(...more: Arg[]): Pattern
declare function toggleComment(...more: Arg[]): Pattern
declare function toggleLineComment(...more: Arg[]): Pattern
declare function tokenizeNote(...more: Arg[]): Pattern
/**
 * Experimental
 * Inserts a pattern into a list of patterns. On the first repetition it will be inserted at the end of the list, then moved backwards through the list
 * on successive repetitions. The patterns are added together stepwise, with all repetitions taking place over a single cycle. Using pace to set the
 * number of steps per cycle is therefore usually recommended.
 * @example
 * "[c g]".tour("e f", "e f g", "g f e c").note()
 *    .sound("folkharp")
 *    .pace(8)
 */
declare function tour(...more: Arg[]): Pattern
/**
 * Change the pitch of each value by the given amount. Expects numbers or note strings as values.
 * The amount can be given as a number of semitones or as a string in interval short notation.
 * If you don't care about enharmonic correctness, just use numbers. Otherwise, pass the interval of
 * the form: ST where S is the degree number and T the type of interval with
 *
 * M = major
 * m = minor
 * P = perfect
 * A = augmented
 * d = diminished
 *
 * Examples intervals:
 *
 * 1P = unison
 * 3M = major third
 * 3m = minor third
 * 4P = perfect fourth
 * 4A = augmented fourth
 * 5P = perfect fifth
 * 5d = diminished fifth
 * Synonyms: trans
 * @param amount {string | number} Either number of semitones or interval string.
 * @example
 * "c2 c3".fast(2).transpose("<0 -2 5 3>".slow(2)).note()
 * @example
 * "c2 c3".fast(2).transpose("<1P -2M 4P 3m>".slow(2)).note()
 */
declare function trans(amount?: any, ...more: Arg[]): Pattern
/**
 * Transient shaper. Gives independent control over the emphasis on transients
 * and sustains
 * @param attack {number | Pattern} Emphasis on transients; between -1 (deaccentuate) and 1 (accentuate)
 * @param sustain {number | Pattern} Emphasis on the sustains; between -1 (deaccentuate) and 1 (accentuate)
 * @example
 * s("bd").transient("<-1 -0.5 0 0.5 1>")
 * @example
 * s("hh*16").bank("tr909").transient("<-1:1 1:-1>")
 */
declare function transient(attack?: any, sustain?: any, ...more: Arg[]): Pattern
/**
 * Change the pitch of each value by the given amount. Expects numbers or note strings as values.
 * The amount can be given as a number of semitones or as a string in interval short notation.
 * If you don't care about enharmonic correctness, just use numbers. Otherwise, pass the interval of
 * the form: ST where S is the degree number and T the type of interval with
 *
 * M = major
 * m = minor
 * P = perfect
 * A = augmented
 * d = diminished
 *
 * Examples intervals:
 *
 * 1P = unison
 * 3M = major third
 * 3m = minor third
 * 4P = perfect fourth
 * 4A = augmented fourth
 * 5P = perfect fifth
 * 5d = diminished fifth
 * Synonyms: trans
 * @param amount {string | number} Either number of semitones or interval string.
 * @example
 * "c2 c3".fast(2).transpose("<0 -2 5 3>".slow(2)).note()
 * @example
 * "c2 c3".fast(2).transpose("<1P -2M 4P 3m>".slow(2)).note()
 */
declare function transpose(amount?: any, ...more: Arg[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: trem
 * @param speed {number | Pattern} modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 */
declare function trem(speed?: any, ...more: Arg[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: trem
 * @param speed {number | Pattern} modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 */
declare function tremolo(speed?: any, ...more: Arg[]): Pattern
/**
 * Depth of amplitude modulation
 * Synonyms: tremdepth
 * @param depth {number | Pattern}
 * @example
 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
 */
declare function tremolodepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Alter the phase of the modulation waveform
 * Synonyms: tremphase
 * @param offset {number | Pattern} the offset in cycles of the modulation
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
 */
declare function tremolophase(offset?: any, ...more: Arg[]): Pattern
/**
 * Shape of amplitude modulation
 * Synonyms: tremshape
 * @param shape {number | Pattern} tri | square | sine | saw | ramp
 * @example
 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
 */
declare function tremoloshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Alter the shape of the modulation waveform
 * Synonyms: tremskew
 * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
 */
declare function tremoloskew(amount?: any, ...more: Arg[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: tremsync
 * @param cycles {number | Pattern} modulation speed in cycles
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
 */
declare function tremolosync(cycles?: any, ...more: Arg[]): Pattern
/**
 * A triangle signal between 0 and 1.
 * @example
 * n(tri.segment(8).range(0,7)).scale("C:minor")
 */
declare const tri: Pattern
/**
 * A triangle signal between -1 and 1 (like tri, but bipolar).
 */
declare const tri2: Pattern
declare function triode(...more: Arg[]): Pattern
declare function tsdelay(...more: Arg[]): Pattern
declare function uid(...more: Arg[]): Pattern
/**
 * Inverse of degrade: Randomly removes 50% of events from the pattern. Shorthand for .undegradeBy(0.5)
 * Events that would be removed by degrade are let through by undegrade and vice versa (see second example).
 * @example
 * s("hh*8").undegrade()
 * @example
 * s("hh*10").layer(
 *   x => x.degrade().pan(0),
 *   x => x.undegrade().pan(1)
 * )
 */
declare function undegrade(...more: Arg[]): Pattern
/**
 * Inverse of degradeBy: Randomly removes events from the pattern by a given amount.
 * 0 = 100% chance of removal
 * 1 = 0% chance of removal
 * Events that would be removed by degradeBy are let through by undegradeBy and vice versa (see second example).
 * @param amount {number} a number between 0 and 1
 * @example
 * s("hh*8").undegradeBy(0.2)
 * @example
 * s("hh*10").layer(
 *   x => x.degradeBy(0.2).pan(0),
 *   x => x.undegradeBy(0.8).pan(1)
 * )
 */
declare function undegradeBy(amount?: any, ...more: Arg[]): Pattern
declare function unicodeToBase64(...more: Arg[]): Pattern
declare function uniq(...more: Arg[]): Pattern
declare function uniqsort(...more: Arg[]): Pattern
declare function uniqsortr(...more: Arg[]): Pattern
/**
 * Set number of stacked voices for supported oscillators
 * @param numvoices {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
 */
declare function unison(numvoices?: any, ...more: Arg[]): Pattern
/**
 * Used in conjunction with speed, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using unit "c" means speed will be interpreted in units of cycles, e.g. speed "1" means samples will be stretched to fill a cycle. Using unit "s" means the playback speed will be adjusted so that the duration is the number of seconds specified by speed.
 * @param unit {number | string | Pattern} see description above
 * @example
 * speed("1 2 .5 3").s("bd").unit("c").osc()
 */
declare function unit(unit?: any, ...more: Arg[]): Pattern
declare function updateMiniLocations(...more: Arg[]): Pattern
declare function updateSliderWidgets(...more: Arg[]): Pattern
declare function updateWidgets(...more: Arg[]): Pattern
/**
 * Sets which random number generator to use. Historically Strudel would
 * use useRNG('legacy'), which remains the default. To use a new more statistically
 * precise RNG, try useRNG('precise').
 * @param mod {string} Mode. One of 'legacy', 'precise'
 * @example
 * useRNG('legacy')
 * // Repeats every 300 cycles
 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(88, 32)
 * $: n(irand(50)).seg(16).scale("C:minor").ribbon(388, 32)
 */
declare function useRNG(mod?: any, ...more: Arg[]): any
/**
 * Applies a vibrato to the frequency of the oscillator.
 * Synonyms: vibrato, v
 * @param frequency {number | Pattern} of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
declare function v(frequency?: any, ...more: Arg[]): Pattern
declare function val(...more: Arg[]): Pattern
declare function valueToMidi(...more: Arg[]): Pattern
/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 * Synonyms: vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
declare function vel(...more: Arg[]): Pattern
/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 * Synonyms: vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
declare function velocity(...more: Arg[]): Pattern
/**
 * Applies a vibrato to the frequency of the oscillator.
 * Synonyms: vibrato, v
 * @param frequency {number | Pattern} of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
declare function vib(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the vibrato depth in semitones. Only has an effect if vibrato | vib | v is is also set
 * Synonyms: vmod
 * @param depth {number | Pattern} of vibrato (in semitones)
 * @example
 * note("a e").vib(4)
 * .vibmod("<.25 .5 1 2 12>")
 * ._scope()
 * @example
 * // change the vibrato frequency with ":"
 * note("a e")
 * .vibmod("<.25 .5 1 2 12>:8")
 * ._scope()
 */
declare function vibmod(depth?: any, ...more: Arg[]): Pattern
/**
 * Applies a vibrato to the frequency of the oscillator.
 * Synonyms: vibrato, v
 * @param frequency {number | Pattern} of the vibrato in hertz
 * @example
 * note("a e")
 * .vib("<.5 1 2 4 8 16>")
 * ._scope()
 * @example
 * // change the modulation depth with ":"
 * note("a e")
 * .vib("<.5 1 2 4 8 16>:12")
 * ._scope()
 */
declare function vibrato(frequency?: any, ...more: Arg[]): Pattern
/**
 * Sets the vibrato depth in semitones. Only has an effect if vibrato | vib | v is is also set
 * Synonyms: vmod
 * @param depth {number | Pattern} of vibrato (in semitones)
 * @example
 * note("a e").vib(4)
 * .vibmod("<.25 .5 1 2 12>")
 * ._scope()
 * @example
 * // change the vibrato frequency with ":"
 * note("a e")
 * .vibmod("<.25 .5 1 2 12>:8")
 * ._scope()
 */
declare function vmod(depth?: any, ...more: Arg[]): Pattern
declare function voice(...more: Arg[]): Pattern
/**
 * Turns chord symbols into voicings. You can use the following control params:
 *
 * chord: Note, followed by chord symbol, e.g. C Am G7 Bb^7
 * dict: voicing dictionary to use, falls back to default dictionary
 * anchor: the note that is used to align the chord
 * mode: how the voicing is aligned to the anchor
 *
 * below: top note <= anchor
 * duck: top note <= anchor, anchor excluded
 * above: bottom note >= anchor
 *
 *
 * offset: whole number that shifts the voicing up or down to the next voicing
 * n: if set, the voicing is played like a scale. Overshooting numbers will be octaved
 *
 * All of the above controls are optional, except chord.
 * If you pass a pattern of strings to voicing, they will be interpreted as chords.
 * @example
 * n("0 1 2 3").chord("<C Am F G>").voicing()
 */
declare function voicing(...more: Arg[]): Pattern
declare function voicingAlias(...more: Arg[]): Pattern
declare const voicingRegistry: any
/**
 * DEPRECATED: still works, but it is recommended you use .voicing instead (without s).
 * Turns chord symbols into voicings, using the smoothest voice leading possible.
 * Uses chord-voicings package.
 * @param dictionary {string} which voicing dictionary to use.
 * @example
 * stack("<C^7 A7 Dm7 G7>".voicings('lefthand'), "<C3 A2 D3 G2>").note()
 */
declare function voicings(dictionary?: any, ...more: Arg[]): Pattern
/**
 * Formant filter to make things sound like vowels.
 * @param vowel {string | Pattern} You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
 * @example
 * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
 * .vowel("<a e i <o u>>")
 * @example
 * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
 */
declare function vowel(vowel?: any, ...more: Arg[]): Pattern
declare function w(...more: Arg[]): Pattern
/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 * Synonyms: wavetableWarp
 * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
declare function warp(amount?: any, ...more: Arg[]): Pattern
/**
 * Attack time of the wavetable oscillator's warp envelope
 * Synonyms: warpatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function warpatt(time?: any, ...more: Arg[]): Pattern
/**
 * Attack time of the wavetable oscillator's warp envelope
 * Synonyms: warpatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function warpattack(time?: any, ...more: Arg[]): Pattern
/**
 * DC offset of the LFO for the wavetable oscillator's warp
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function warpdc(dcoffset?: any, ...more: Arg[]): Pattern
/**
 * Decay time of the wavetable oscillator's warp envelope
 * Synonyms: warpdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function warpdec(time?: any, ...more: Arg[]): Pattern
/**
 * Decay time of the wavetable oscillator's warp envelope
 * Synonyms: warpdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function warpdecay(time?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the wavetable oscillator's warp
 * @param depth {number | Pattern} depth of modulation
 */
declare function warpdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Amount of envelope applied wavetable oscillator's position envelope
 * @param amount {number | Pattern} between 0 and 1
 */
declare function warpenv(amount?: any, ...more: Arg[]): Pattern
/**
 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
 * Synonyms: wavetableWarpMode
 * @param mode {number | string | Pattern} Warp mode
 * @example
 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
 */
declare function warpmode(mode?: any, ...more: Arg[]): Pattern
/**
 * Rate of the LFO for the wavetable oscillator's warp
 * @param rate {number | Pattern} rate in hertz
 */
declare function warprate(rate?: any, ...more: Arg[]): Pattern
/**
 * Release time of the wavetable oscillator's warp envelope
 * Synonyms: warprel
 * @param time {number | Pattern} release time in seconds
 */
declare function warprel(time?: any, ...more: Arg[]): Pattern
/**
 * Release time of the wavetable oscillator's warp envelope
 * Synonyms: warprel
 * @param time {number | Pattern} release time in seconds
 */
declare function warprelease(time?: any, ...more: Arg[]): Pattern
/**
 * Shape of the LFO for the wavetable oscillator's warp
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function warpshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Skew of the LFO for the wavetable oscillator's warp
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function warpskew(skew?: any, ...more: Arg[]): Pattern
/**
 * Sustain time of the wavetable oscillator's warp envelope
 * Synonyms: warpsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function warpsus(gain?: any, ...more: Arg[]): Pattern
/**
 * Sustain time of the wavetable oscillator's warp envelope
 * Synonyms: warpsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function warpsustain(gain?: any, ...more: Arg[]): Pattern
/**
 * cycle synced rate of the LFO for the wavetable warp position
 * @param rate {number | Pattern} rate in cycles
 */
declare function warpsync(rate?: any, ...more: Arg[]): Pattern
declare function waveformN(...more: Arg[]): Pattern
declare function waveloss(...more: Arg[]): Pattern
/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 * Synonyms: wavetablePhaseRand
 * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 */
declare function wavetablePhaseRand(amount?: any, ...more: Arg[]): Pattern
/**
 * Position in the wavetable of the wavetable oscillator
 * Synonyms: wavetablePosition
 * @param position {number | Pattern} Position in the wavetable from 0 to 1
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
declare function wavetablePosition(position?: any, ...more: Arg[]): Pattern
/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 * Synonyms: wavetableWarp
 * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
declare function wavetableWarp(amount?: any, ...more: Arg[]): Pattern
/**
 * Type of warp (alteration of the waveform) to apply to the wavetable oscillator.
 * The current options are: none, asym, bendp, bendm, bendmp, sync, quant, fold, pwm, orbit,
 * spin, chaos, primes, binary, brownian, reciprocal, wormhole, logistic, sigmoid, fractal, flip
 * Synonyms: wavetableWarpMode
 * @param mode {number | string | Pattern} Warp mode
 * @example
 * s("morgana").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("<asym bendp spin logistic sync wormhole brownian>*2")
 */
declare function wavetableWarpMode(mode?: any, ...more: Arg[]): Pattern
/**
 * Chooses randomly from the given list of elements by giving a probability to each element
 * @param pairs {any} arrays of value and weight
 * @example
 * note("c2 g2!2 d2 f1").s(wchoose(["sine",10], ["triangle",1], ["bd:6",1]))
 */
declare function wchoose(pairs?: any, ...more: Arg[]): Pattern
/**
 * Picks one of the elements at random each cycle by giving a probability to each element
 * Synonyms: wrandcat
 * @example
 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
 * @example
 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
 * @example
 * // The probability can itself be a pattern
 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
 */
declare function wchooseCycles(...more: Arg[]): Pattern
declare function webAudioTimeout(...more: Arg[]): Pattern
declare function webaudioOutput(...more: Arg[]): Pattern
declare function webaudioRepl(...more: Arg[]): Pattern
/**
 * Applies the given function whenever the given pattern is in a true state.
 * @param binary_pat {Pattern}
 * @param func {function}
 * @example
 * "c3 eb3 g3".when("<0 1>/2", x=>x.sub("5")).note()
 */
declare function when(binary_pat?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Do something on a keypress, or array of keypresses
 * Key name reference
 * @example
 * s("bd(5,8)").whenKey("Control:j", x => x.segment(16).color("red")).whenKey("Control:i", x => x.fast(2).color("blue"))
 */
declare function whenKey(...more: Arg[]): Pattern
declare const widgetPlugin: any
/**
 * Modify a pattern by applying a function to the randomSeed control if present
 * @param func {function} Function from seed (or undefined) to seed (or undefined)
 * @param pat {Pattern} Pattern to update
 */
declare function withSeed(func?: (pat: Pattern, ...args: any[]) => any, pat?: any, ...more: Arg[]): Pattern
/**
 * Returns a new pattern, with the function applied to the value of
 * each hap. It has the alias fmap.
 * Synonyms: fmap
 * @param func {function} to to apply to the value
 * @example
 * "0 1 2".withValue(v => v + 10).log()
 */
declare function withValue(func?: (value: any, ...args: any[]) => any, ...more: any[]): Pattern
/**
 * Use within to apply a function to only a part of a pattern.
 * @param start {number} start within cycle (0 - 1)
 * @param end {number} end within cycle (0 - 1). Must be > start
 * @param func {function} function to be applied to the sub-pattern
 */
declare function within(start?: any, end?: any, func?: (pat: Pattern, ...args: any[]) => any, ...more: Arg[]): Pattern
/**
 * Creates a worklet effect. Typically derived by writing K(...) in the REPL which will parse
 * Kabelsalat code.
 * @param src {string} Source code of the worklet update function
 * @param inputs {number | Pattern} Worklet inputs
 */
declare function worklet(src?: any, inputs?: any, ...more: Arg[]): Pattern
/**
 * Picks one of the elements at random each cycle by giving a probability to each element
 * Synonyms: wrandcat
 * @example
 * wchooseCycles(["bd",10], ["hh",1], ["sd",1]).s().fast(8)
 * @example
 * wchooseCycles(["c c c",5], ["a a a",3], ["f f f",1]).fast(4).note()
 * @example
 * // The probability can itself be a pattern
 * wchooseCycles(["bd(3,8)","<5 0>"], ["hh hh hh",3]).fast(4).s()
 */
declare function wrandcat(...more: Arg[]): Pattern
/**
 * Position in the wavetable of the wavetable oscillator
 * Synonyms: wavetablePosition
 * @param position {number | Pattern} Position in the wavetable from 0 to 1
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
declare function wt(position?: any, ...more: Arg[]): Pattern
/**
 * Attack time of the wavetable oscillator's position envelope
 * Synonyms: wtatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function wtatt(time?: any, ...more: Arg[]): Pattern
/**
 * Attack time of the wavetable oscillator's position envelope
 * Synonyms: wtatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function wtattack(time?: any, ...more: Arg[]): Pattern
/**
 * DC offset of the LFO for the wavetable oscillator's position
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function wtdc(dcoffset?: any, ...more: Arg[]): Pattern
/**
 * Decay time of the wavetable oscillator's position envelope
 * Synonyms: wtdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function wtdec(time?: any, ...more: Arg[]): Pattern
/**
 * Decay time of the wavetable oscillator's position envelope
 * Synonyms: wtdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function wtdecay(time?: any, ...more: Arg[]): Pattern
/**
 * Depth of the LFO for the wavetable oscillator's position
 * @param depth {number | Pattern} depth of modulation
 */
declare function wtdepth(depth?: any, ...more: Arg[]): Pattern
/**
 * Amount of envelope applied wavetable oscillator's position envelope
 * @param amount {number | Pattern} between 0 and 1
 */
declare function wtenv(amount?: any, ...more: Arg[]): Pattern
/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 * Synonyms: wavetablePhaseRand
 * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 */
declare function wtphaserand(amount?: any, ...more: Arg[]): Pattern
/**
 * Rate of the LFO for the wavetable oscillator's position
 * @param rate {number | Pattern} rate in hertz
 */
declare function wtrate(rate?: any, ...more: Arg[]): Pattern
/**
 * Release time of the wavetable oscillator's position envelope
 * Synonyms: wtrel
 * @param time {number | Pattern} release time in seconds
 */
declare function wtrel(time?: any, ...more: Arg[]): Pattern
/**
 * Release time of the wavetable oscillator's position envelope
 * Synonyms: wtrel
 * @param time {number | Pattern} release time in seconds
 */
declare function wtrelease(time?: any, ...more: Arg[]): Pattern
/**
 * Shape of the LFO for the wavetable oscillator's position
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function wtshape(shape?: any, ...more: Arg[]): Pattern
/**
 * Skew of the LFO for the wavetable oscillator's position
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function wtskew(skew?: any, ...more: Arg[]): Pattern
/**
 * Sustain time of the wavetable oscillator's position envelope
 * Synonyms: wtsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function wtsus(gain?: any, ...more: Arg[]): Pattern
/**
 * Sustain time of the wavetable oscillator's position envelope
 * Synonyms: wtsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function wtsustain(gain?: any, ...more: Arg[]): Pattern
/**
 * cycle synced rate of the LFO for the wavetable oscillator's position
 * @param rate {number | Pattern} rate in cycles
 */
declare function wtsync(rate?: any, ...more: Arg[]): Pattern
declare function x(...more: Arg[]): Pattern
/**
 * Cross-fades between left and right from 0 to 1:
 *
 * 0 = (full left, no right)
 * .5 = (both equal)
 * 1 = (no left, full right)
 * @example
 * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
 */
declare function xfade(...more: Arg[]): Pattern
declare function xsdelay(...more: Arg[]): Pattern
declare function y(...more: Arg[]): Pattern
declare function zcrush(...more: Arg[]): Pattern
declare function zdelay(...more: Arg[]): Pattern
/**
 * Experimental
 * 'zips' together the steps of the provided patterns. This can create a long repetition, taking place over a single, dense cycle.
 * Using pace to set the number of steps per cycle is therefore usually recommended.
 * @example
 * zip("e f", "e f g", "g [f e] a f4 c").note()
 *    .sound("folkharp")
 *    .pace(8)
 */
declare function zip(...more: Arg[]): Pattern
declare function zipWith(...more: Arg[]): Pattern
declare function zmod(...more: Arg[]): Pattern
declare function znoise(...more: Arg[]): Pattern
/**
 * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
 * @example
 * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
 * // s("hh*3 [sd bd]*2") // equivalent
 */
declare function zoom(...more: Arg[]): Pattern
declare function zoomArc(...more: Arg[]): Pattern
declare function zoomIn(...more: Arg[]): Pattern
declare function zoomarc(...more: Arg[]): Pattern
declare function zrand(...more: Arg[]): Pattern
declare function zzfx(...more: Arg[]): Pattern
