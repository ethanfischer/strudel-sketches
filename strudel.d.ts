// Strudel names for editor completion and hover docs. Made from @strudel/repl 1.3.0: the names that it defines
// at run time (also setcpm, hush and the others that the REPL adds when it runs code), and its docs. jsconfig.json adds this file to the .js files here. Do not edit by hand.

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
  FX(...args: any[]): Pattern
  FXr(...args: any[]): Pattern
  FXrel(...args: any[]): Pattern
  FXrelease(...args: any[]): Pattern
  _ad(...args: any[]): Pattern
  _add(...args: any[]): Pattern
  _adsr(...args: any[]): Pattern
  _almostAlways(...args: any[]): Pattern
  _almostNever(...args: any[]): Pattern
  _always(...args: any[]): Pattern
  _and(...args: any[]): Pattern
  _apply(...args: any[]): Pattern
  _applyN(...args: any[]): Pattern
  _ar(...args: any[]): Pattern
  _arp(...args: any[]): Pattern
  _arpWith(...args: any[]): Pattern
  _as(...args: any[]): Pattern
  _band(...args: any[]): Pattern
  _beat(...args: any[]): Pattern
  _bite(...args: any[]): Pattern
  _bjork(...args: any[]): Pattern
  _blshift(...args: any[]): Pattern
  _bor(...args: any[]): Pattern
  _brshift(...args: any[]): Pattern
  _bxor(...args: any[]): Pattern
  _bypass(...args: any[]): Pattern
  _chop(...args: any[]): Pattern
  _chunk(...args: any[]): Pattern
  _chunkBack(...args: any[]): Pattern
  _chunkBackInto(...args: any[]): Pattern
  _chunkInto(...args: any[]): Pattern
  _chunkback(...args: any[]): Pattern
  _chunkbackinto(...args: any[]): Pattern
  _chunkinto(...args: any[]): Pattern
  _compress(...args: any[]): Pattern
  _compressSpan(...args: any[]): Pattern
  _compressspan(...args: any[]): Pattern
  _contract(...args: any[]): Pattern
  _control(...args: any[]): Pattern
  _cpm(...args: any[]): Pattern
  _degradeBy(...args: any[]): Pattern
  _degradeByWith(...args: any[]): Pattern
  _density(...args: any[]): Pattern
  _div(...args: any[]): Pattern
  _drop(...args: any[]): Pattern
  _ds(...args: any[]): Pattern
  _early(...args: any[]): Pattern
  _echo(...args: any[]): Pattern
  _echoWith(...args: any[]): Pattern
  _echowith(...args: any[]): Pattern
  _eish(...args: any[]): Pattern
  _eq(...args: any[]): Pattern
  _eqt(...args: any[]): Pattern
  _euclid(...args: any[]): Pattern
  _euclidLegato(...args: any[]): Pattern
  _euclidLegatoRot(...args: any[]): Pattern
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
  _euclidRot(...args: any[]): Pattern
  _euclidish(...args: any[]): Pattern
  _euclidrot(...args: any[]): Pattern
  _every(...args: any[]): Pattern
  _expand(...args: any[]): Pattern
  _extend(...args: any[]): Pattern
  _fast(...args: any[]): Pattern
  _fastChunk(...args: any[]): Pattern
  _fastGap(...args: any[]): Pattern
  _fastchunk(...args: any[]): Pattern
  _fastgap(...args: any[]): Pattern
  _filter(...args: any[]): Pattern
  _filterWhen(...args: any[]): Pattern
  _firstOf(...args: any[]): Pattern
  _focus(...args: any[]): Pattern
  _focusSpan(...args: any[]): Pattern
  _focusspan(...args: any[]): Pattern
  _func(...args: any[]): Pattern
  _grow(...args: any[]): Pattern
  _gt(...args: any[]): Pattern
  _gte(...args: any[]): Pattern
  _hsl(...args: any[]): Pattern
  _hsla(...args: any[]): Pattern
  _hurry(...args: any[]): Pattern
  _inhabit(...args: any[]): Pattern
  _inhabitmod(...args: any[]): Pattern
  _inside(...args: any[]): Pattern
  _iter(...args: any[]): Pattern
  _iterBack(...args: any[]): Pattern
  _iterback(...args: any[]): Pattern
  _jux(...args: any[]): Pattern
  _juxBy(...args: any[]): Pattern
  _juxby(...args: any[]): Pattern
  _keep(...args: any[]): Pattern
  _keepif(...args: any[]): Pattern
  _lastOf(...args: any[]): Pattern
  _late(...args: any[]): Pattern
  _linger(...args: any[]): Pattern
  _log2(...args: any[]): Pattern
  _loopAt(...args: any[]): Pattern
  _loopAtCps(...args: any[]): Pattern
  _loopat(...args: any[]): Pattern
  _loopatcps(...args: any[]): Pattern
  _lt(...args: any[]): Pattern
  _lte(...args: any[]): Pattern
  _mod(...args: any[]): Pattern
  _moveXY(...args: any[]): Pattern
  _mul(...args: any[]): Pattern
  _ne(...args: any[]): Pattern
  _net(...args: any[]): Pattern
  _never(...args: any[]): Pattern
  _off(...args: any[]): Pattern
  _often(...args: any[]): Pattern
  _opIn(...args: any[]): Pattern
  _opMix(...args: any[]): Pattern
  _opOut(...args: any[]): Pattern
  _opPoly(...args: any[]): Pattern
  _opReset(...args: any[]): Pattern
  _opRestart(...args: any[]): Pattern
  _opSqueeze(...args: any[]): Pattern
  _opSqueezeOut(...args: any[]): Pattern
  _or(...args: any[]): Pattern
  _outside(...args: any[]): Pattern
  _pace(...args: any[]): Pattern
  _pianoroll(...args: any[]): Pattern
  _pick(...args: any[]): Pattern
  _pickF(...args: any[]): Pattern
  _pickOut(...args: any[]): Pattern
  _pickReset(...args: any[]): Pattern
  _pickRestart(...args: any[]): Pattern
  _pickSqueeze(...args: any[]): Pattern
  _pickmod(...args: any[]): Pattern
  _pickmodF(...args: any[]): Pattern
  _pickmodOut(...args: any[]): Pattern
  _pickmodReset(...args: any[]): Pattern
  _pickmodRestart(...args: any[]): Pattern
  _pickmodSqueeze(...args: any[]): Pattern
  _pitchwheel(...args: any[]): Pattern
  _ply(...args: any[]): Pattern
  _plyForEach(...args: any[]): Pattern
  _plyWith(...args: any[]): Pattern
  _plyforeach(...args: any[]): Pattern
  _plywith(...args: any[]): Pattern
  _pow(...args: any[]): Pattern
  _pressBy(...args: any[]): Pattern
  _punchcard(...args: any[]): Pattern
  _range(...args: any[]): Pattern
  _range2(...args: any[]): Pattern
  _rangex(...args: any[]): Pattern
  _rarely(...args: any[]): Pattern
  _repeatCycles(...args: any[]): Pattern
  _replicate(...args: any[]): Pattern
  _rescale(...args: any[]): Pattern
  _rib(...args: any[]): Pattern
  _ribbon(...args: any[]): Pattern
  _rootNotes(...args: any[]): Pattern
  _scale(...args: any[]): Pattern
  _scaleTrans(...args: any[]): Pattern
  _scaleTranspose(...args: any[]): Pattern
  _scope(...args: any[]): Pattern
  _scramble(...args: any[]): Pattern
  _scrub(...args: any[]): Pattern
  _seed(...args: any[]): Pattern
  _seg(...args: any[]): Pattern
  _segment(...args: any[]): Pattern
  _set(...args: any[]): Pattern
  _shrink(...args: any[]): Pattern
  _shuffle(...args: any[]): Pattern
  _slice(...args: any[]): Pattern
  _slow(...args: any[]): Pattern
  _slowChunk(...args: any[]): Pattern
  _slowchunk(...args: any[]): Pattern
  _someCycles(...args: any[]): Pattern
  _someCyclesBy(...args: any[]): Pattern
  _sometimes(...args: any[]): Pattern
  _sometimesBy(...args: any[]): Pattern
  _sparsity(...args: any[]): Pattern
  _speak(...args: any[]): Pattern
  _spectrum(...args: any[]): Pattern
  _spiral(...args: any[]): Pattern
  _splice(...args: any[]): Pattern
  _strans(...args: any[]): Pattern
  _striate(...args: any[]): Pattern
  _stut(...args: any[]): Pattern
  _stutWith(...args: any[]): Pattern
  _stutwith(...args: any[]): Pattern
  _sub(...args: any[]): Pattern
  _swing(...args: any[]): Pattern
  _swingBy(...args: any[]): Pattern
  _sysex(...args: any[]): Pattern
  _take(...args: any[]): Pattern
  _timeline(...args: any[]): Pattern
  _trans(...args: any[]): Pattern
  _transpose(...args: any[]): Pattern
  _undegradeBy(...args: any[]): Pattern
  _voicings(...args: any[]): Pattern
  _when(...args: any[]): Pattern
  _whenKey(...args: any[]): Pattern
  _within(...args: any[]): Pattern
  _zoom(...args: any[]): Pattern
  _zoomArc(...args: any[]): Pattern
  _zoomIn(...args: any[]): Pattern
  _zoomarc(...args: any[]): Pattern
  /**
   * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
   * @param amount {number | Pattern} acceleration.
   * @example
   * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
   */
  accelerate(amount?: any, ...more: any[]): Pattern
  activeLabel(...args: any[]): Pattern
  ad(...args: any[]): Pattern
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
  add(...args: any[]): Pattern
  /**
   * ADSR envelope: Combination of Attack, Decay, Sustain, and Release.
   * @param time {number | Pattern} attack time in seconds
   * @param time {number | Pattern} decay time in seconds
   * @param gain {number | Pattern} sustain level (0 to 1)
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("[c3 bb2 f3 eb3]*2").sound("sawtooth").lpf(600).adsr(".1:.1:.5:.2")
   */
  adsr(time?: any, time?: any, gain?: any, time?: any, ...more: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.9, fn)
   * @example
   * s("hh*8").almostAlways(x=>x.speed("0.5"))
   */
  almostAlways(...args: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.1, fn)
   * @example
   * s("hh*8").almostNever(x=>x.speed("0.5"))
   */
  almostNever(...args: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(1, fn) (always calls fn)
   * @example
   * s("hh*8").always(x=>x.speed("0.5"))
   */
  always(...args: any[]): Pattern
  /**
   * Like gain, but linear.
   * @param amount {number | Pattern} gain.
   * @example
   * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
   */
  amp(amount?: any, ...more: any[]): Pattern
  analyze(...args: any[]): Pattern
  /**
   * The top note to align the voicing to. Defaults to c5
   * @param anchorNote {string | Pattern} the note to align the voicings to
   * @example
   * anchor("<c4 g4 c5 g5>").chord("C").voicing()
   */
  anchor(anchorNote?: any, ...more: any[]): Pattern
  and(...args: any[]): Pattern
  angle(...args: any[]): Pattern
  animate(...args: any[]): Pattern
  /**
   * When this method is called on a pattern of functions, it matches its haps
   * with those in the given pattern of values.  A new pattern is returned, with
   * each matching value applied to the corresponding function.
   * In this _appBoth variant, where timespans of the function and value haps
   * are not the same but do intersect, the resulting hap has a timespan of the
   * intersection. This applies to both the part and the whole timespan.
   * @param pat_val {Pattern}
   */
  appBoth(pat_val?: any, ...more: any[]): Pattern
  /**
   * As with appBoth, but the whole timespan is not the intersection,
   * but the timespan from the function of patterns that this method is called
   * on. In practice, this means that the pattern structure, including onsets,
   * are preserved from the pattern of functions (often referred to as the left
   * hand or inner pattern).
   * @param pat_val {Pattern}
   */
  appLeft(pat_val?: any, ...more: any[]): Pattern
  /**
   * As with appLeft, but whole timespans are instead taken from the
   * pattern of values, i.e. structure is preserved from the right hand/outer
   * pattern.
   * @param pat_val {Pattern}
   */
  appRight(pat_val?: any, ...more: any[]): Pattern
  /**
   * Assumes 'this' is a pattern of functions, and given a function to
   * resolve wholes, applies a given pattern of values to that
   * pattern of functions.
   * @param whole_func {function}
   * @param func {function}
   */
  appWhole(whole_func?: any, func?: any, ...more: any[]): Pattern
  /**
   * Layers the result of the given function(s). Like superimpose, but without the original pattern:
   * Synonyms: apply
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .layer(x=>x.add("0,2"))
   *   .scale('C minor').note()
   */
  apply(...args: any[]): Pattern
  applyN(...args: any[]): Pattern
  ar(...args: any[]): Pattern
  /**
   * Selects indices in in stacked notes.
   * @example
   * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
   * .arp("0 [0,2] 1 [0,2]")
   */
  arp(...args: any[]): Pattern
  /**
   * Selects indices in in stacked notes.
   * @example
   * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
   * .arpWith(haps => haps[2])
   */
  arpWith(...args: any[]): Pattern
  /**
   * Sets properties in a batch.
   * @param mapping {String | Array} the control names that are set
   * @example
   * "c:.5 a:1 f:.25 e:.8".as("note:clip")
   * @example
   * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
   */
  as(mapping?: any, ...more: any[]): Pattern
  asNumber(...args: any[]): Pattern
  /**
   * Asymmetrical diode distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  asym(distortion?: any, volume?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
   * Synonyms: att
   * @param attack {number | Pattern} time in seconds.
   * @example
   * note("c3 e3 f3 g3").attack("<0 .1 .5>")
   */
  att(attack?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
   * Synonyms: att
   * @param attack {number | Pattern} time in seconds.
   * @example
   * note("c3 e3 f3 g3").attack("<0 .1 .5>")
   */
  attack(attack?: any, ...more: any[]): Pattern
  band(...args: any[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bandf(frequency?: any, ...more: any[]): Pattern
  /**
   * Sets the band-pass q-factor (resonance).
   * Synonyms: bandq
   * @param q {number | Pattern} q factor
   * @example
   * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
   */
  bandq(q?: any, ...more: any[]): Pattern
  /**
   * Select the sound bank to use. To be used together with s. The bank name (+ "_") will be prepended to the value of s.
   * @param bank {string | Pattern} the name of the bank
   * @example
   * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
   */
  bank(bank?: any, ...more: any[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbexpr
   * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
   * @example
   * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
   */
  bbexpr(byteBeatExpression?: any, ...more: any[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbst
   * @param byteBeatStartTime {number | Pattern} in samples (t)
   * @example
   * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
   */
  bbst(byteBeatStartTime?: any, ...more: any[]): Pattern
  /**
   * creates a structure pattern from divisions of a cycle
   * especially useful for creating rhythms
   * @example
   * s("bd").beat("0,7,10", 16)
   * @example
   * s("sd").beat("4,12", 16)
   */
  beat(...args: any[]): Pattern
  /**
   * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. 0.25 to cut off the first quarter from each sample.
   * @param amount {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
   * s("rave").begin("<0 .25 .5 .75>").fast(2)
   */
  begin(amount?: any, ...more: any[]): Pattern
  /**
   * Postgain multiplier prior to sending the signal to the audio bus.
   * Synonyms: bgain
   * @param number {number | Pattern}
   */
  bgain(number?: any, ...more: any[]): Pattern
  bind(...args: any[]): Pattern
  bindWhole(...args: any[]): Pattern
  binshift(...args: any[]): Pattern
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
  bite(number?: any, slices?: any, ...more: any[]): Pattern
  bjork(...args: any[]): Pattern
  blshift(...args: any[]): Pattern
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
  bmod(config?: any, id?: any, ...more: any[]): Pattern
  bor(...args: any[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bp(frequency?: any, ...more: any[]): Pattern
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
  bpa(attack?: any, ...more: any[]): Pattern
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
  bpattack(attack?: any, ...more: any[]): Pattern
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
  bpd(decay?: any, ...more: any[]): Pattern
  /**
   * DC offset of the LFO for the bandpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  bpdc(dcoffset?: any, ...more: any[]): Pattern
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
  bpdecay(decay?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter
   * @param depth {number | Pattern} depth of modulation
   */
  bpdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter, in HZ
   * Synonyms: bpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
   */
  bpdepthfreq(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the bandpass filter, in HZ
   * Synonyms: bpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
   */
  bpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
  bpe(modulation?: any, ...more: any[]): Pattern
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
  bpenv(modulation?: any, ...more: any[]): Pattern
  /**
   * Sets the center frequency of the band-pass filter. When using mininotation, you
   * can also optionally supply the 'bpq' parameter separated by ':'.
   * Synonyms: bandf, bp
   * @param frequency {number | Pattern} center frequency
   * @example
   * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
   */
  bpf(frequency?: any, ...more: any[]): Pattern
  /**
   * Sets the band-pass q-factor (resonance).
   * Synonyms: bandq
   * @param q {number | Pattern} q factor
   * @example
   * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
   */
  bpq(q?: any, ...more: any[]): Pattern
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
  bpr(release?: any, ...more: any[]): Pattern
  /**
   * Rate of the LFO for the bandpass filter
   * @param rate {number | Pattern} rate in hertz
   */
  bprate(rate?: any, ...more: any[]): Pattern
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
  bprelease(release?: any, ...more: any[]): Pattern
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
  bps(sustain?: any, ...more: any[]): Pattern
  /**
   * Shape of the LFO for the bandpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  bpshape(shape?: any, ...more: any[]): Pattern
  /**
   * Skew of the LFO for the bandpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  bpskew(skew?: any, ...more: any[]): Pattern
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
  bpsustain(sustain?: any, ...more: any[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the bandpass filter
   * @param rate {number | Pattern} rate in cycles
   */
  bpsync(rate?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern where every other cycle is played once, twice as
   * fast, and offset in time by one quarter of a cycle. Creates a kind of
   * breakbeat feel.
   */
  brak(...args: any[]): Pattern
  brshift(...args: any[]): Pattern
  /**
   * A bus is a send which can be used for mixing patterns. It combines with..
   * s("bus") to play that bus through another pattern (for, say, applying non-linear
   * effects like distortion to multiple signals)
   * otherPat.bmod(..) (to modulate another pattern with the bus)
   * @param number {number | Pattern}
   */
  bus(number?: any, ...more: any[]): Pattern
  /**
   * Postgain multiplier prior to sending the signal to the audio bus.
   * Synonyms: bgain
   * @param number {number | Pattern}
   */
  busgain(number?: any, ...more: any[]): Pattern
  bxor(...args: any[]): Pattern
  bypass(...args: any[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbexpr
   * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
   * @example
   * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
   */
  byteBeatExpression(byteBeatExpression?: any, ...more: any[]): Pattern
  /**
   * Create byte beats with custom expressions
   * Synonyms: bbst
   * @param byteBeatStartTime {number | Pattern} in samples (t)
   * @example
   * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
   */
  byteBeatStartTime(byteBeatStartTime?: any, ...more: any[]): Pattern
  /**
   * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
   * Synonyms: cat
   * @example
   * slowcat("e5", "b4", ["d5", "c5"])
   */
  cat(...args: any[]): Pattern
  /**
   * MIDI control number: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control number (0-127)
   */
  ccn(MIDI?: any, ...more: any[]): Pattern
  /**
   * MIDI control value: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control value (0-127)
   */
  ccv(MIDI?: any, ...more: any[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values set to
   * their mathematical ceiling. E.g. 3.2 replaced with 4, and -4.2
   * replaced with -4.
   * @example
   * note("42 42.1 42.5 43".ceil())
   */
  ceil(...args: any[]): Pattern
  /**
   * Allows you to set the output channels on the interface
   * Synonyms: ch
   * @param channels {number | Pattern} pattern the output channels
   * @example
   * note("e a d b g").channels("3:4")
   */
  ch(channels?: any, ...more: any[]): Pattern
  /**
   * Choose the channel the pattern is sent to in superdirt
   * @param channel {number | Pattern} channel number
   */
  channel(channel?: any, ...more: any[]): Pattern
  /**
   * Allows you to set the output channels on the interface
   * Synonyms: ch
   * @param channels {number | Pattern} pattern the output channels
   * @example
   * note("e a d b g").channels("3:4")
   */
  channels(channels?: any, ...more: any[]): Pattern
  /**
   * Distortion via Chebyshev polynomials
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  chebyshev(distortion?: any, volume?: any, ...more: any[]): Pattern
  /**
   * Chooses randomly from the given list of elements.
   * @param xs {any} values / patterns to choose from.
   * @example
   * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
   */
  choose(xs?: any, ...more: any[]): Pattern
  /**
   * As with choose, but the pattern that this method is called on should be
   * in the range -1 .. 1
   * @param xs {any}
   */
  choose2(xs?: any, ...more: any[]): Pattern
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
  chop(...args: any[]): Pattern
  /**
   * The chord to voice
   * @param symbols {string | Pattern} chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
   * @example
   * chord("<Am C D F Am E Am E>").voicing()
   */
  chord(symbols?: any, ...more: any[]): Pattern
  /**
   * mix control for the chorus effect
   * @param chorus {string | Pattern} mix amount between 0 and 1
   * @example
   * note("d d a# a").s("sawtooth").chorus(.5)
   */
  chorus(chorus?: any, ...more: any[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunk(...args: any[]): Pattern
  /**
   * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
   * Synonyms: chunkback
   * @example
   * "0 1 2 3".chunkBack(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunkBack(...args: any[]): Pattern
  /**
   * Like chunkInto, but moves backwards through the chunks.
   * Synonyms: chunkbackinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkBackInto(...args: any[]): Pattern
  /**
   * Like chunk, but the function is applied to a looped subcycle of the source pattern.
   * Synonyms: chunkinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkInto(...args: any[]): Pattern
  /**
   * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
   * Synonyms: chunkback
   * @example
   * "0 1 2 3".chunkBack(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  chunkback(...args: any[]): Pattern
  /**
   * Like chunkInto, but moves backwards through the chunks.
   * Synonyms: chunkbackinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkbackinto(...args: any[]): Pattern
  /**
   * Like chunk, but the function is applied to a looped subcycle of the source pattern.
   * Synonyms: chunkinto
   * @example
   * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
   *   .bank("tr909")
   */
  chunkinto(...args: any[]): Pattern
  /**
   * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
   * Synonyms: legato
   * @param factor {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").clip("<.5 1 2>")
   */
  clip(factor?: any, ...more: any[]): Pattern
  /**
   * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
   * @param factor {number | Pattern} 1 for original 2 for half, 3 for a third and so on.
   * @example
   * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
   */
  coarse(factor?: any, ...more: any[]): Pattern
  collect(...args: any[]): Pattern
  /**
   * Sets the color of the hap in visualizations like pianoroll or highlighting.
   * Synonyms: colour
   * @param color {string} Hexadecimal or CSS color name
   */
  color(color?: any, ...more: any[]): Pattern
  comb(...args: any[]): Pattern
  /**
   * Compress each cycle into the given timespan, leaving a gap
   * @example
   * cat(
   *   s("bd sd").compress(.25,.75),
   *   s("~ bd sd ~")
   * )
   */
  compress(...args: any[]): Pattern
  compressSpan(...args: any[]): Pattern
  /**
   * Dynamics Compressor. The params are compressor("threshold:ratio:knee:attack:release")
   * More info here
   * @example
   * s("bd sd [~ bd] sd,hh*8")
   * .compressor("-20:20:10:.002:.02")
   */
  compressor(...args: any[]): Pattern
  compressorAttack(...args: any[]): Pattern
  compressorKnee(...args: any[]): Pattern
  compressorRatio(...args: any[]): Pattern
  compressorRelease(...args: any[]): Pattern
  compressspan(...args: any[]): Pattern
  /**
   * Experimental
   * Contracts the step size of the pattern by the given factor. See also expand.
   * @example
   * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
   */
  contract(...args: any[]): Pattern
  /**
   * MIDI control: Sends a MIDI control change message.
   * @param MIDI {number | Pattern} control number (0-127)
   * @param MIDI {number | Pattern} controller value (0-127)
   */
  control(MIDI?: any, MIDI?: any, ...more: any[]): Pattern
  /**
   * Plays the pattern at the given cycles per minute.
   * @example
   * s("<bd sd>,hh*2").cpm(90) // = 90 bpm
   */
  cpm(...args: any[]): Pattern
  cps(...args: any[]): Pattern
  /**
   * Bit crusher effect.
   * @param depth {number | Pattern} between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
   * @example
   * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
   */
  crush(depth?: any, ...more: any[]): Pattern
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
  ctf(frequency?: any, ...more: any[]): Pattern
  ctlNum(...args: any[]): Pattern
  ctranspose(...args: any[]): Pattern
  /**
   * Cubic polynomial distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  cubic(distortion?: any, volume?: any, ...more: any[]): Pattern
  curve(...args: any[]): Pattern
  /**
   * In the style of classic drum-machines, cut will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
   * @param group {number | Pattern} cut group number
   * @example
   * s("[oh hh]*4").cut(1)
   */
  cut(group?: any, ...more: any[]): Pattern
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
  cutoff(frequency?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
   * Note that the decay is only audible if the sustain value is lower than 1.
   * Synonyms: dec
   * @param time {number | Pattern} decay time in seconds
   * @example
   * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
   */
  dec(time?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
   * Note that the decay is only audible if the sustain value is lower than 1.
   * Synonyms: dec
   * @param time {number | Pattern} decay time in seconds
   * @example
   * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
   */
  decay(time?: any, ...more: any[]): Pattern
  /**
   * Combines adjacent haps with the same value and whole.  Only
   * intended for use in tests.
   */
  defragmentHaps(...args: any[]): Pattern
  /**
   * Randomly removes 50% of events from the pattern. Shorthand for .degradeBy(0.5)
   * @example
   * s("hh*8").degrade()
   * @example
   * s("[hh?]*8")
   */
  degrade(...args: any[]): Pattern
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
  degradeBy(amount?: any, ...more: any[]): Pattern
  degradeByWith(...args: any[]): Pattern
  degree(...args: any[]): Pattern
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
  delay(level?: any, ...more: any[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  delayfb(feedback?: any, ...more: any[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  delayfeedback(feedback?: any, ...more: any[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  delayspeed(delayspeed?: any, ...more: any[]): Pattern
  /**
   * Sets the time of the delay effect in cycles.
   * Synonyms: delayt, dt
   * @param cycles {number | Pattern} delay length in cycles
   * @example
   * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
   */
  delaysync(cycles?: any, ...more: any[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  delayt(delayspeed?: any, ...more: any[]): Pattern
  delaytime(...args: any[]): Pattern
  deltaSlide(...args: any[]): Pattern
  /**
   * Noise crackle density
   * @param density {number | Pattern} between 0 and x
   * @example
   * s("crackle*4").density("<0.01 0.04 0.2 0.5>".slow(4))
   */
  density(density?: any, ...more: any[]): Pattern
  /**
   * Set detune for stacked voices of supported oscillators
   * Synonyms: det
   * @param amount {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
   */
  det(amount?: any, ...more: any[]): Pattern
  /**
   * Set detune for stacked voices of supported oscillators
   * Synonyms: det
   * @param amount {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
   */
  detune(amount?: any, ...more: any[]): Pattern
  /**
   * Sets the level of the signal that is fed back into the delay.
   * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
   * Synonyms: delayfb, dfb
   * @param feedback {number | Pattern} between 0 and 1
   * @example
   * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
   */
  dfb(feedback?: any, ...more: any[]): Pattern
  dict(...args: any[]): Pattern
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
  dictionary(dictionaryName?: any, ...more: any[]): Pattern
  /**
   * Diode-emulating distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  diode(distortion?: any, volume?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern, with 'continuous' haps (those without 'whole'
   * timespans) removed from query results.
   */
  discreteOnly(...args: any[]): Pattern
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
  dist(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
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
  distort(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
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
  distorttype(type?: any, ...more: any[]): Pattern
  /**
   * Postgain for waveshaping distortion.
   * Synonyms: distvol
   * @param volume {number | Pattern} linear postgain of the distortion
   * @example
   * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
   */
  distortvol(volume?: any, ...more: any[]): Pattern
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
  disttype(type?: any, ...more: any[]): Pattern
  /**
   * Postgain for waveshaping distortion.
   * Synonyms: distvol
   * @param volume {number | Pattern} linear postgain of the distortion
   * @example
   * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
   */
  distvol(volume?: any, ...more: any[]): Pattern
  /**
   * Divides each number by the given factor.
   */
  div(...args: any[]): Pattern
  /**
   * DJ filter, below 0.5 is low pass filter, above is high pass filter.
   * @param cutoff {number | Pattern} below 0.5 is low pass filter, above is high pass filter
   * @example
   * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
   */
  djf(cutoff?: any, ...more: any[]): Pattern
  dough(...args: any[]): Pattern
  draw(...args: any[]): Pattern
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
  drawLine(pattern?: any, chars?: any, ...more: any[]): Pattern
  /**
   * Filter overdrive for supported filter types
   * @param amount {number | Pattern}
   * @example
   * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
   */
  drive(amount?: any, ...more: any[]): Pattern
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
  drop(...args: any[]): Pattern
  /**
   * Set dryness of reverb. See room and size for more information about reverb.
   * @param dry {number | Pattern} 0 = wet, 1 = dry
   * @example
   * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
   */
  dry(dry?: any, ...more: any[]): Pattern
  ds(...args: any[]): Pattern
  /**
   * Sets the time of the delay effect.
   * Synonyms: delayt, dt
   * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
   * @example
   * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
   */
  dt(delayspeed?: any, ...more: any[]): Pattern
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
  duck(orbit?: any, ...more: any[]): Pattern
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
  duckatt(time?: any, ...more: any[]): Pattern
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
  duckattack(time?: any, ...more: any[]): Pattern
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
  duckdepth(depth?: any, ...more: any[]): Pattern
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
  duckons(time?: any, ...more: any[]): Pattern
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
  duckonset(time?: any, ...more: any[]): Pattern
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
  duckorbit(orbit?: any, ...more: any[]): Pattern
  /**
   * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
   * Synonyms: dur
   * @param seconds {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").dur("<.5 1 2>")
   */
  dur(seconds?: any, ...more: any[]): Pattern
  /**
   * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
   * Synonyms: dur
   * @param seconds {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").dur("<.5 1 2>")
   */
  duration(seconds?: any, ...more: any[]): Pattern
  /**
   * Nudge a pattern to start earlier in time. Equivalent of Tidal's <~ operator
   * @param cycles {number | Pattern} number of cycles to nudge left
   * @example
   * "bd ~".stack("hh ~".early(.1)).s()
   */
  early(cycles?: any, ...more: any[]): Pattern
  /**
   * Superimpose and offset multiple times, gradually decreasing the velocity
   * @param times {number} how many times to repeat
   * @param time {number} cycle offset between iterations
   * @param feedback {number} velocity multiplicator for each iteration
   * @example
   * s("bd sd").echo(3, 1/6, .8)
   */
  echo(times?: any, time?: any, feedback?: any, ...more: any[]): Pattern
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
  echoWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
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
  echowith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
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
  eish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
  /**
   * The same as .begin, but cuts off the end off each sample.
   * @param length {number | Pattern} 1 = whole sample, .5 = half sample, .25 = quarter sample etc..
   * @example
   * s("bd*2,oh*4").end("<.1 .2 .5 1>").fast(2)
   */
  end(length?: any, ...more: any[]): Pattern
  enhance(...args: any[]): Pattern
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
  env(config?: any, id?: any, ...more: any[]): Pattern
  eq(...args: any[]): Pattern
  eqt(...args: any[]): Pattern
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
  euclid(pulses?: any, steps?: any, ...more: any[]): Pattern
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
  euclidLegato(pulses?: any, steps?: any, rotation?: any, pat?: any, ...more: any[]): Pattern
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
  euclidLegatoRot(pulses?: any, steps?: any, rotation?: any, ...more: any[]): Pattern
  /**
   * Like euclid, but has an additional parameter for 'rotating' the resulting sequence.
   * @param pulses {number} the number of onsets/beats
   * @param steps {number} the number of steps to fill
   * @param rotation {number} offset in steps
   * @example
   * // A Samba rhythm necklace from Brazil
   * note("c3").euclidRot(3,16,14)
   */
  euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: any[]): Pattern
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
  euclidish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
  euclidrot(...args: any[]): Pattern
  /**
   * An alias for firstOf
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").every(4, x=>x.rev())
   */
  every(n?: any, func?: any, ...more: any[]): Pattern
  /**
   * Experimental
   * Expands the step size of the pattern by the given factor.
   * @example
   * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
   */
  expand(...args: any[]): Pattern
  expression(...args: any[]): Pattern
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
  extend(...args: any[]): Pattern
  fadeInTime(...args: any[]): Pattern
  fadeOutTime(...args: any[]): Pattern
  fadeTime(...args: any[]): Pattern
  /**
   * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
   * @param center {number | Pattern} 0 to 1
   * @example
   * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
   * .lpenv(8).fanchor("<0 .5 1>")
   */
  fanchor(center?: any, ...more: any[]): Pattern
  /**
   * Speed up a pattern by the given factor. Used by "*" in mini notation.
   * Synonyms: density
   * @param factor {number | Pattern} speed up factor
   * @example
   * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
   */
  fast(factor?: any, ...more: any[]): Pattern
  /**
   * Like chunk, but the cycles of the source pattern aren't repeated
   * for each set of chunks.
   * Synonyms: fastchunk
   * @example
   * "<0 8> 1 2 3 4 5 6 7"
   * .scale("C2:major").note()
   * .fastChunk(4, x => x.color('red')).slow(2)
   */
  fastChunk(...args: any[]): Pattern
  /**
   * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
   * Synonyms: fastgap
   * @example
   * s("bd sd").fastGap(2)
   */
  fastGap(...args: any[]): Pattern
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
  fastcat(...args: any[]): Pattern
  /**
   * Like chunk, but the cycles of the source pattern aren't repeated
   * for each set of chunks.
   * Synonyms: fastchunk
   * @example
   * "<0 8> 1 2 3 4 5 6 7"
   * .scale("C2:major").note()
   * .fastChunk(4, x => x.color('red')).slow(2)
   */
  fastchunk(...args: any[]): Pattern
  /**
   * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
   * Synonyms: fastgap
   * @example
   * s("bd sd").fastGap(2)
   */
  fastgap(...args: any[]): Pattern
  fft(...args: any[]): Pattern
  fill(...args: any[]): Pattern
  /**
   * Filters haps using the given function
   * @param test {function} function to test Hap
   * @example
   * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
   */
  filter(test?: any, ...more: any[]): Pattern
  /**
   * Returns a new Pattern, which only returns haps that meet the given test.
   * @param hap_test {function} a function which returns false for haps to be removed from the pattern
   * @example
   * s("bd*8").velocity(rand).filterHaps((h) => (h.whole.begin % 1) < h.value.velocity)
   */
  filterHaps(hap_test?: any, ...more: any[]): Pattern
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
  filterValues(value_test?: any, ...more: any[]): Pattern
  /**
   * Filters haps by their begin time
   * @param test {function} function to test Hap.whole.begin
   * @example
   * oneCycle: s("bd*4").filterWhen((t) => t < 1)
   */
  filterWhen(test?: any, ...more: any[]): Pattern
  /**
   * Queries the pattern for the first cycle, returning Haps. Mainly of use when
   * debugging a pattern.
   * @param with_context {Boolean} set to true, otherwise the context field
will be stripped from the resulting haps.
   */
  firstCycle(with_context?: any, ...more: any[]): Pattern
  /**
   * Applies the given function every n cycles, starting from the first cycle.
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").firstOf(4, x=>x.rev())
   */
  firstOf(n?: any, func?: any, ...more: any[]): Pattern
  /**
   * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
   * Similar to loopAt.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes/2").fit()
   */
  fit(...args: any[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values set to
   * their mathematical floor. E.g. 3.7 replaced with to 3, and -4.2
   * replaced with -5.
   * @example
   * note("42 42.1 42.5 43".floor())
   */
  floor(...args: any[]): Pattern
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
  fm(brightness?: any, ...more: any[]): Pattern
  fm00(...args: any[]): Pattern
  fm01(...args: any[]): Pattern
  fm02(...args: any[]): Pattern
  fm03(...args: any[]): Pattern
  fm04(...args: any[]): Pattern
  fm05(...args: any[]): Pattern
  fm06(...args: any[]): Pattern
  fm07(...args: any[]): Pattern
  fm08(...args: any[]): Pattern
  fm1(...args: any[]): Pattern
  fm10(...args: any[]): Pattern
  fm11(...args: any[]): Pattern
  fm12(...args: any[]): Pattern
  fm13(...args: any[]): Pattern
  fm14(...args: any[]): Pattern
  fm15(...args: any[]): Pattern
  fm16(...args: any[]): Pattern
  fm17(...args: any[]): Pattern
  fm18(...args: any[]): Pattern
  fm2(...args: any[]): Pattern
  fm20(...args: any[]): Pattern
  fm21(...args: any[]): Pattern
  fm22(...args: any[]): Pattern
  fm23(...args: any[]): Pattern
  fm24(...args: any[]): Pattern
  fm25(...args: any[]): Pattern
  fm26(...args: any[]): Pattern
  fm27(...args: any[]): Pattern
  fm28(...args: any[]): Pattern
  fm3(...args: any[]): Pattern
  fm30(...args: any[]): Pattern
  fm31(...args: any[]): Pattern
  fm32(...args: any[]): Pattern
  fm33(...args: any[]): Pattern
  fm34(...args: any[]): Pattern
  fm35(...args: any[]): Pattern
  fm36(...args: any[]): Pattern
  fm37(...args: any[]): Pattern
  fm38(...args: any[]): Pattern
  fm4(...args: any[]): Pattern
  fm40(...args: any[]): Pattern
  fm41(...args: any[]): Pattern
  fm42(...args: any[]): Pattern
  fm43(...args: any[]): Pattern
  fm44(...args: any[]): Pattern
  fm45(...args: any[]): Pattern
  fm46(...args: any[]): Pattern
  fm47(...args: any[]): Pattern
  fm48(...args: any[]): Pattern
  fm5(...args: any[]): Pattern
  fm50(...args: any[]): Pattern
  fm51(...args: any[]): Pattern
  fm52(...args: any[]): Pattern
  fm53(...args: any[]): Pattern
  fm54(...args: any[]): Pattern
  fm55(...args: any[]): Pattern
  fm56(...args: any[]): Pattern
  fm57(...args: any[]): Pattern
  fm58(...args: any[]): Pattern
  fm6(...args: any[]): Pattern
  fm60(...args: any[]): Pattern
  fm61(...args: any[]): Pattern
  fm62(...args: any[]): Pattern
  fm63(...args: any[]): Pattern
  fm64(...args: any[]): Pattern
  fm65(...args: any[]): Pattern
  fm66(...args: any[]): Pattern
  fm67(...args: any[]): Pattern
  fm68(...args: any[]): Pattern
  fm7(...args: any[]): Pattern
  fm70(...args: any[]): Pattern
  fm71(...args: any[]): Pattern
  fm72(...args: any[]): Pattern
  fm73(...args: any[]): Pattern
  fm74(...args: any[]): Pattern
  fm75(...args: any[]): Pattern
  fm76(...args: any[]): Pattern
  fm77(...args: any[]): Pattern
  fm78(...args: any[]): Pattern
  fm8(...args: any[]): Pattern
  fm80(...args: any[]): Pattern
  fm81(...args: any[]): Pattern
  fm82(...args: any[]): Pattern
  fm83(...args: any[]): Pattern
  fm84(...args: any[]): Pattern
  fm85(...args: any[]): Pattern
  fm86(...args: any[]): Pattern
  fm87(...args: any[]): Pattern
  fm88(...args: any[]): Pattern
  /**
   * Returns a new pattern, with the function applied to the value of
   * each hap. It has the alias fmap.
   * Synonyms: fmap
   * @param func {function} to to apply to the value
   * @example
   * "0 1 2".withValue(v => v + 10).log()
   */
  fmap(func?: any, ...more: any[]): Pattern
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
  fmatt(time?: any, ...more: any[]): Pattern
  fmatt1(...args: any[]): Pattern
  fmatt2(...args: any[]): Pattern
  fmatt3(...args: any[]): Pattern
  fmatt4(...args: any[]): Pattern
  fmatt5(...args: any[]): Pattern
  fmatt6(...args: any[]): Pattern
  fmatt7(...args: any[]): Pattern
  fmatt8(...args: any[]): Pattern
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
  fmattack(time?: any, ...more: any[]): Pattern
  fmattack1(...args: any[]): Pattern
  fmattack2(...args: any[]): Pattern
  fmattack3(...args: any[]): Pattern
  fmattack4(...args: any[]): Pattern
  fmattack5(...args: any[]): Pattern
  fmattack6(...args: any[]): Pattern
  fmattack7(...args: any[]): Pattern
  fmattack8(...args: any[]): Pattern
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
  fmdec(time?: any, ...more: any[]): Pattern
  fmdec1(...args: any[]): Pattern
  fmdec2(...args: any[]): Pattern
  fmdec3(...args: any[]): Pattern
  fmdec4(...args: any[]): Pattern
  fmdec5(...args: any[]): Pattern
  fmdec6(...args: any[]): Pattern
  fmdec7(...args: any[]): Pattern
  fmdec8(...args: any[]): Pattern
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
  fmdecay(time?: any, ...more: any[]): Pattern
  fmdecay1(...args: any[]): Pattern
  fmdecay2(...args: any[]): Pattern
  fmdecay3(...args: any[]): Pattern
  fmdecay4(...args: any[]): Pattern
  fmdecay5(...args: any[]): Pattern
  fmdecay6(...args: any[]): Pattern
  fmdecay7(...args: any[]): Pattern
  fmdecay8(...args: any[]): Pattern
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
  fmenv(type?: any, ...more: any[]): Pattern
  fmenv1(...args: any[]): Pattern
  fmenv2(...args: any[]): Pattern
  fmenv3(...args: any[]): Pattern
  fmenv4(...args: any[]): Pattern
  fmenv5(...args: any[]): Pattern
  fmenv6(...args: any[]): Pattern
  fmenv7(...args: any[]): Pattern
  fmenv8(...args: any[]): Pattern
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
  fmh(harmonicity?: any, ...more: any[]): Pattern
  fmh1(...args: any[]): Pattern
  fmh2(...args: any[]): Pattern
  fmh3(...args: any[]): Pattern
  fmh4(...args: any[]): Pattern
  fmh5(...args: any[]): Pattern
  fmh6(...args: any[]): Pattern
  fmh7(...args: any[]): Pattern
  fmh8(...args: any[]): Pattern
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
  fmi(brightness?: any, ...more: any[]): Pattern
  fmi00(...args: any[]): Pattern
  fmi01(...args: any[]): Pattern
  fmi02(...args: any[]): Pattern
  fmi03(...args: any[]): Pattern
  fmi04(...args: any[]): Pattern
  fmi05(...args: any[]): Pattern
  fmi06(...args: any[]): Pattern
  fmi07(...args: any[]): Pattern
  fmi08(...args: any[]): Pattern
  fmi1(...args: any[]): Pattern
  fmi10(...args: any[]): Pattern
  fmi11(...args: any[]): Pattern
  fmi12(...args: any[]): Pattern
  fmi13(...args: any[]): Pattern
  fmi14(...args: any[]): Pattern
  fmi15(...args: any[]): Pattern
  fmi16(...args: any[]): Pattern
  fmi17(...args: any[]): Pattern
  fmi18(...args: any[]): Pattern
  fmi2(...args: any[]): Pattern
  fmi20(...args: any[]): Pattern
  fmi21(...args: any[]): Pattern
  fmi22(...args: any[]): Pattern
  fmi23(...args: any[]): Pattern
  fmi24(...args: any[]): Pattern
  fmi25(...args: any[]): Pattern
  fmi26(...args: any[]): Pattern
  fmi27(...args: any[]): Pattern
  fmi28(...args: any[]): Pattern
  fmi3(...args: any[]): Pattern
  fmi30(...args: any[]): Pattern
  fmi31(...args: any[]): Pattern
  fmi32(...args: any[]): Pattern
  fmi33(...args: any[]): Pattern
  fmi34(...args: any[]): Pattern
  fmi35(...args: any[]): Pattern
  fmi36(...args: any[]): Pattern
  fmi37(...args: any[]): Pattern
  fmi38(...args: any[]): Pattern
  fmi4(...args: any[]): Pattern
  fmi40(...args: any[]): Pattern
  fmi41(...args: any[]): Pattern
  fmi42(...args: any[]): Pattern
  fmi43(...args: any[]): Pattern
  fmi44(...args: any[]): Pattern
  fmi45(...args: any[]): Pattern
  fmi46(...args: any[]): Pattern
  fmi47(...args: any[]): Pattern
  fmi48(...args: any[]): Pattern
  fmi5(...args: any[]): Pattern
  fmi50(...args: any[]): Pattern
  fmi51(...args: any[]): Pattern
  fmi52(...args: any[]): Pattern
  fmi53(...args: any[]): Pattern
  fmi54(...args: any[]): Pattern
  fmi55(...args: any[]): Pattern
  fmi56(...args: any[]): Pattern
  fmi57(...args: any[]): Pattern
  fmi58(...args: any[]): Pattern
  fmi6(...args: any[]): Pattern
  fmi60(...args: any[]): Pattern
  fmi61(...args: any[]): Pattern
  fmi62(...args: any[]): Pattern
  fmi63(...args: any[]): Pattern
  fmi64(...args: any[]): Pattern
  fmi65(...args: any[]): Pattern
  fmi66(...args: any[]): Pattern
  fmi67(...args: any[]): Pattern
  fmi68(...args: any[]): Pattern
  fmi7(...args: any[]): Pattern
  fmi70(...args: any[]): Pattern
  fmi71(...args: any[]): Pattern
  fmi72(...args: any[]): Pattern
  fmi73(...args: any[]): Pattern
  fmi74(...args: any[]): Pattern
  fmi75(...args: any[]): Pattern
  fmi76(...args: any[]): Pattern
  fmi77(...args: any[]): Pattern
  fmi78(...args: any[]): Pattern
  fmi8(...args: any[]): Pattern
  fmi80(...args: any[]): Pattern
  fmi81(...args: any[]): Pattern
  fmi82(...args: any[]): Pattern
  fmi83(...args: any[]): Pattern
  fmi84(...args: any[]): Pattern
  fmi85(...args: any[]): Pattern
  fmi86(...args: any[]): Pattern
  fmi87(...args: any[]): Pattern
  fmi88(...args: any[]): Pattern
  /**
   * Release time for the FM envelope: how much modulation is applied after the note is released
   * A number may be added afterwards to control the release of the envelope of
   * any of the 8 individual FMs (e.g. fmrel8)
   * Synonyms: fmrel
   * @param time {number | Pattern} release time
   */
  fmrel(time?: any, ...more: any[]): Pattern
  fmrel1(...args: any[]): Pattern
  fmrel2(...args: any[]): Pattern
  fmrel3(...args: any[]): Pattern
  fmrel4(...args: any[]): Pattern
  fmrel5(...args: any[]): Pattern
  fmrel6(...args: any[]): Pattern
  fmrel7(...args: any[]): Pattern
  fmrel8(...args: any[]): Pattern
  /**
   * Release time for the FM envelope: how much modulation is applied after the note is released
   * A number may be added afterwards to control the release of the envelope of
   * any of the 8 individual FMs (e.g. fmrel8)
   * Synonyms: fmrel
   * @param time {number | Pattern} release time
   */
  fmrelease(time?: any, ...more: any[]): Pattern
  fmrelease1(...args: any[]): Pattern
  fmrelease2(...args: any[]): Pattern
  fmrelease3(...args: any[]): Pattern
  fmrelease4(...args: any[]): Pattern
  fmrelease5(...args: any[]): Pattern
  fmrelease6(...args: any[]): Pattern
  fmrelease7(...args: any[]): Pattern
  fmrelease8(...args: any[]): Pattern
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
  fmsus(level?: any, ...more: any[]): Pattern
  fmsus1(...args: any[]): Pattern
  fmsus2(...args: any[]): Pattern
  fmsus3(...args: any[]): Pattern
  fmsus4(...args: any[]): Pattern
  fmsus5(...args: any[]): Pattern
  fmsus6(...args: any[]): Pattern
  fmsus7(...args: any[]): Pattern
  fmsus8(...args: any[]): Pattern
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
  fmsustain(level?: any, ...more: any[]): Pattern
  fmsustain1(...args: any[]): Pattern
  fmsustain2(...args: any[]): Pattern
  fmsustain3(...args: any[]): Pattern
  fmsustain4(...args: any[]): Pattern
  fmsustain5(...args: any[]): Pattern
  fmsustain6(...args: any[]): Pattern
  fmsustain7(...args: any[]): Pattern
  fmsustain8(...args: any[]): Pattern
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
  fmwave(wave?: any, ...more: any[]): Pattern
  fmwave1(...args: any[]): Pattern
  fmwave2(...args: any[]): Pattern
  fmwave3(...args: any[]): Pattern
  fmwave4(...args: any[]): Pattern
  fmwave5(...args: any[]): Pattern
  fmwave6(...args: any[]): Pattern
  fmwave7(...args: any[]): Pattern
  fmwave8(...args: any[]): Pattern
  /**
   * Similar to compress, but doesn't leave gaps, and the 'focus' can be bigger than a cycle
   * @example
   * s("bd hh sd hh").focus(1/4, 3/4)
   */
  focus(...args: any[]): Pattern
  focusSpan(...args: any[]): Pattern
  focusspan(...args: any[]): Pattern
  /**
   * Wavefolding distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  fold(distortion?: any, volume?: any, ...more: any[]): Pattern
  frameRate(...args: any[]): Pattern
  frames(...args: any[]): Pattern
  freeze(...args: any[]): Pattern
  /**
   * Set frequency of sound.
   * @param frequency {number | Pattern} in Hz. the audible range is between 20 and 20000 Hz
   * @example
   * freq("220 110 440 110").s("superzow").osc()
   * @example
   * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
   */
  freq(frequency?: any, ...more: any[]): Pattern
  /**
   * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
   * Returns a new pattern with values scaled to the unipolar range 0 .. 1
   */
  fromBipolar(...args: any[]): Pattern
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
  fscope(color?: any, scale?: any, pos?: any, lean?: any, min?: any, max?: any, ...more: any[]): Pattern
  fshift(...args: any[]): Pattern
  fshiftnote(...args: any[]): Pattern
  fshiftphase(...args: any[]): Pattern
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
  ftype(type?: any, ...more: any[]): Pattern
  func(...args: any[]): Pattern
  fxr(...args: any[]): Pattern
  /**
   * Controls the gain by an exponential amount.
   * @param amount {number | Pattern} gain.
   * @example
   * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
   */
  gain(amount?: any, ...more: any[]): Pattern
  gat(...args: any[]): Pattern
  gate(...args: any[]): Pattern
  getPainters(...args: any[]): Pattern
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
  grow(...args: any[]): Pattern
  gt(...args: any[]): Pattern
  gte(...args: any[]): Pattern
  h(...args: any[]): Pattern
  /**
   * Hard-clipping distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  hard(distortion?: any, volume?: any, ...more: any[]): Pattern
  harmonic(...args: any[]): Pattern
  hbrick(...args: any[]): Pattern
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
  hcutoff(frequency?: any, ...more: any[]): Pattern
  hold(...args: any[]): Pattern
  hours(...args: any[]): Pattern
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
  hp(frequency?: any, ...more: any[]): Pattern
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
  hpa(attack?: any, ...more: any[]): Pattern
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
  hpattack(attack?: any, ...more: any[]): Pattern
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
  hpd(decay?: any, ...more: any[]): Pattern
  /**
   * DC offset of the LFO for the highpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  hpdc(dcoffset?: any, ...more: any[]): Pattern
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
  hpdecay(decay?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the highpass filter
   * @param depth {number | Pattern} depth of modulation
   */
  hpdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the hipass filter, in hz
   * Synonyms: hpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
   */
  hpdepthfreq(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the hipass filter, in hz
   * Synonyms: hpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
   */
  hpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
  hpe(modulation?: any, ...more: any[]): Pattern
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
  hpenv(modulation?: any, ...more: any[]): Pattern
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
  hpf(frequency?: any, ...more: any[]): Pattern
  /**
   * Controls the high-pass q-value.
   * Synonyms: hresonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
   */
  hpq(q?: any, ...more: any[]): Pattern
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
  hpr(release?: any, ...more: any[]): Pattern
  /**
   * Rate of the LFO for the highpass filter
   * @param rate {number | Pattern} rate in hertz
   */
  hprate(rate?: any, ...more: any[]): Pattern
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
  hprelease(release?: any, ...more: any[]): Pattern
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
  hps(sustain?: any, ...more: any[]): Pattern
  /**
   * Shape of the LFO for the highpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  hpshape(shape?: any, ...more: any[]): Pattern
  /**
   * Skew of the LFO for the highpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  hpskew(skew?: any, ...more: any[]): Pattern
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
  hpsustain(sustain?: any, ...more: any[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the highpass filter
   * @param rate {number | Pattern} rate in cycles
   */
  hpsync(rate?: any, ...more: any[]): Pattern
  /**
   * Controls the high-pass q-value.
   * Synonyms: hresonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
   */
  hresonance(q?: any, ...more: any[]): Pattern
  hsl(...args: any[]): Pattern
  hsla(...args: any[]): Pattern
  /**
   * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
   * @example
   * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
   */
  hurry(...args: any[]): Pattern
  /**
   * Silences a pattern.
   * @example
   * stack(
   *   s("bd").hush(),
   *   s("hh*3")
   * )
   */
  hush(...args: any[]): Pattern
  imag(...args: any[]): Pattern
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
  inhabit(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * The same as inhabit, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * Synonyms: pickmodSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   */
  inhabitmod(pat?: any, xs?: any, ...more: any[]): Pattern
  innerBind(...args: any[]): Pattern
  innerJoin(...args: any[]): Pattern
  /**
   * Carries out an operation 'inside' a cycle.
   * @example
   * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
   * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
   */
  inside(...args: any[]): Pattern
  /**
   * Breaks a pattern into pieces according to the structure of a given pattern.
   * True values in the given pattern cause the corresponding subcycle of the
   * source pattern to be looped, and for an (optional) given function to be
   * applied. False values result in the corresponding part of the source pattern
   * to be played unchanged.
   * @example
   * sound("bd sd ht lt").into("1 0", hurry(2))
   */
  into(...args: any[]): Pattern
  /**
   * Swaps 1s and 0s in a binary pattern.
   * Synonyms: inv
   * @example
   * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
   */
  inv(...args: any[]): Pattern
  /**
   * Swaps 1s and 0s in a binary pattern.
   * Synonyms: inv
   * @example
   * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
   */
  invert(...args: any[]): Pattern
  /**
   * Sets the sample to use as an impulse response for the reverb.
   * Synonyms: ir
   * @param sample {string | Pattern} to use as an impulse response
   * @example
   * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
   */
  ir(sample?: any, ...more: any[]): Pattern
  /**
   * Sets the beginning of the IR response sample
   * Synonyms: ir
   * @param begin {string | Pattern} between 0 and 1
   * @example
   * samples('github:switchangel/pad')
   * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
   */
  irbegin(begin?: any, ...more: any[]): Pattern
  /**
   * Sets the sample to use as an impulse response for the reverb.
   * Synonyms: ir
   * @param sample {string | Pattern} to use as an impulse response
   * @example
   * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
   */
  iresponse(sample?: any, ...more: any[]): Pattern
  /**
   * Sets speed of the sample for the impulse response.
   * @param speed {string | Pattern}
   * @example
   * samples('github:switchangel/pad')
   * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
   */
  irspeed(speed?: any, ...more: any[]): Pattern
  /**
   * Divides a pattern into a given number of subdivisions, plays the subdivisions in order, but increments the starting subdivision each cycle. The pattern wraps to the first subdivision after the last subdivision is played.
   * @example
   * note("0 1 2 3".scale('A minor')).iter(4)
   */
  iter(...args: any[]): Pattern
  /**
   * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
   * Synonyms: iterback
   * @example
   * note("0 1 2 3".scale('A minor')).iterBack(4)
   */
  iterBack(...args: any[]): Pattern
  /**
   * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
   * Synonyms: iterback
   * @example
   * note("0 1 2 3".scale('A minor')).iterBack(4)
   */
  iterback(...args: any[]): Pattern
  join(...args: any[]): Pattern
  /**
   * The jux function creates strange stereo effects, by applying a function to a pattern, but only in the right-hand channel.
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(rev)
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(press)
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").jux(iter(4))
   */
  jux(...args: any[]): Pattern
  /**
   * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
   * Synonyms: juxby
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
   */
  juxBy(...args: any[]): Pattern
  /**
   * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
   * Synonyms: juxby
   * @example
   * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
   */
  juxby(...args: any[]): Pattern
  kcutoff(...args: any[]): Pattern
  keep(...args: any[]): Pattern
  keepif(...args: any[]): Pattern
  /**
   * returns true when a key or array of keys is held
   * Key name reference
   * @example
   * keyDown("Control:j").pick([s("bd(5,8)"), s("cp(3,8)")])
   */
  keyDown(...args: any[]): Pattern
  krush(...args: any[]): Pattern
  /**
   * Sets the displayed text for an event on the pianoroll
   * @param label {string} text to display
   */
  label(label?: any, ...more: any[]): Pattern
  /**
   * Applies the given function every n cycles, starting from the last cycle.
   * @param n {number} how many cycles
   * @param func {function} function to apply
   * @example
   * note("c3 d3 e3 g3").lastOf(4, x=>x.rev())
   */
  lastOf(n?: any, func?: any, ...more: any[]): Pattern
  /**
   * Nudge a pattern to start later in time. Equivalent of Tidal's ~> operator
   * @param cycles {number | Pattern} number of cycles to nudge right
   * @example
   * "bd ~".stack("hh ~".late(.1)).s()
   */
  late(cycles?: any, ...more: any[]): Pattern
  /**
   * Layers the result of the given function(s). Like superimpose, but without the original pattern:
   * Synonyms: apply
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .layer(x=>x.add("0,2"))
   *   .scale('C minor').note()
   */
  layer(...args: any[]): Pattern
  lbrick(...args: any[]): Pattern
  /**
   * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
   * Synonyms: legato
   * @param factor {number | Pattern} = 0
   * @example
   * note("c a f e").s("piano").clip("<.5 1 2>")
   */
  legato(factor?: any, ...more: any[]): Pattern
  /**
   * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
   * @param wet {number | Pattern} between 0 and 1
   * @example
   * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
   */
  leslie(wet?: any, ...more: any[]): Pattern
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
  lfo(config?: any, id?: any, ...more: any[]): Pattern
  /**
   * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
   * @param fraction {number} fraction to select
   * @example
   * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
   */
  linger(fraction?: any, ...more: any[]): Pattern
  /**
   * Specifies whether delaytime is calculated relative to cps.
   * @param enable {number | Pattern} When set to 1, delaytime is a direct multiple of a cycle.
   * @example
   * s("sd").delay().lock(1).osc()
   */
  lock(enable?: any, ...more: any[]): Pattern
  /**
   * Writes the content of the current event to the console (visible in the side menu).
   * @example
   * s("bd sd").log()
   */
  log(...args: any[]): Pattern
  log2(...args: any[]): Pattern
  /**
   * A simplified version of log which writes all "values" (various configurable parameters)
   * within the event to the console (visible in the side menu).
   * @example
   * s("bd sd").gain("0.25 0.5 1").n("2 1 0").logValues()
   */
  logValues(...args: any[]): Pattern
  /**
   * Loops the sample.
   * Note that the tempo of the loop is not synced with the cycle tempo.
   * To change the loop region, use loopBegin / loopEnd.
   * @param on {number | Pattern} If 1, the sample is looped
   * @example
   * s("casio").loop(1)
   */
  loop(on?: any, ...more: any[]): Pattern
  /**
   * Makes the sample fit the given number of cycles by changing the speed.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes").loopAt(2)
   */
  loopAt(...args: any[]): Pattern
  /**
   * Makes the sample fit the given number of cycles and cps value, by
   * changing the speed. Please note that at some point cps will be
   * given by a global clock and this function will be
   * deprecated/removed.
   * @example
   * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
   * s("rhodes").loopAtCps(4,1.5).cps(1.5)
   */
  loopAtCps(...args: any[]): Pattern
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
  loopBegin(time?: any, ...more: any[]): Pattern
  /**
   * End the looping section at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and after loopBegin!
   * Synonyms: loope
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopEnd("<1 .75 .5 .25>")._scope()
   */
  loopEnd(time?: any, ...more: any[]): Pattern
  loopat(...args: any[]): Pattern
  loopatcps(...args: any[]): Pattern
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
  loopb(time?: any, ...more: any[]): Pattern
  /**
   * End the looping section at a specific point in the sample (inbetween begin and end).
   * Note that the loop point must be inbetween begin and end, and after loopBegin!
   * Synonyms: loope
   * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
   * @example
   * s("space").loop(1)
   * .loopEnd("<1 .75 .5 .25>")._scope()
   */
  loope(time?: any, ...more: any[]): Pattern
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
  lp(frequency?: any, ...more: any[]): Pattern
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
  lpa(attack?: any, ...more: any[]): Pattern
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
  lpattack(attack?: any, ...more: any[]): Pattern
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
  lpd(decay?: any, ...more: any[]): Pattern
  /**
   * DC offset of the LFO for the lowpass filter
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  lpdc(dcoffset?: any, ...more: any[]): Pattern
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
  lpdecay(decay?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
   */
  lpdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter, in HZ
   * Synonyms: lpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
   */
  lpdepthfreq(depth?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the lowpass filter, in HZ
   * Synonyms: lpdepthfreq
   * @param depth {number | Pattern} depth of modulation
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
   */
  lpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
  lpe(modulation?: any, ...more: any[]): Pattern
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
  lpenv(modulation?: any, ...more: any[]): Pattern
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
  lpf(frequency?: any, ...more: any[]): Pattern
  /**
   * Controls the low-pass q-value.
   * Synonyms: resonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
   */
  lpq(q?: any, ...more: any[]): Pattern
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
  lpr(release?: any, ...more: any[]): Pattern
  /**
   * Rate of the LFO for the lowpass filter
   * @param rate {number | Pattern} rate in hertz
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
   */
  lprate(rate?: any, ...more: any[]): Pattern
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
  lprelease(release?: any, ...more: any[]): Pattern
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
  lps(sustain?: any, ...more: any[]): Pattern
  /**
   * Shape of the LFO for the lowpass filter
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  lpshape(shape?: any, ...more: any[]): Pattern
  /**
   * Skew of the LFO for the lowpass filter
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  lpskew(skew?: any, ...more: any[]): Pattern
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
  lpsustain(sustain?: any, ...more: any[]): Pattern
  /**
   * Cycle-synced rate of the LFO for the lowpass filter
   * @param rate {number | Pattern} rate in cycles
   * @example
   * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
   */
  lpsync(rate?: any, ...more: any[]): Pattern
  /**
   * Rate of modulation / rotation for leslie effect
   * @param rate {number | Pattern} 6.7 for fast, 0.7 for slow
   * @example
   * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
   */
  lrate(rate?: any, ...more: any[]): Pattern
  /**
   * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
   * @param meters {number | Pattern} somewhere between 0 and 1
   * @example
   * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
   */
  lsize(meters?: any, ...more: any[]): Pattern
  lt(...args: any[]): Pattern
  lte(...args: any[]): Pattern
  /**
   * Overrides the css of highlighted events. Make sure to use single quotes!
   * @example
   * note("c a f e")
   * .markcss('text-decoration:underline')
   */
  markcss(...args: any[]): Pattern
  /**
   * Returns silence when mask is 0 or "~"
   * @example
   * note("c [eb,g] d [eb,g]").mask("<1 [0 1]>")
   */
  mask(...args: any[]): Pattern
  maskAll(...args: any[]): Pattern
  /**
   * MIDI output: Opens a MIDI output port.
   * @param midiport {string | number} MIDI device name or index defaulting to 0
   * @param options {object} Additional MIDI configuration options
   * @example
   * note("c4").midichan(1).midi('IAC Driver Bus 1')
   * @example
   * note("c4").midichan(1).midi('IAC Driver Bus 1', { controller: true, latency: 50 })
   */
  midi(midiport?: any, options?: any, ...more: any[]): Pattern
  /**
   * MIDI pitch bend: Sends a MIDI pitch bend message.
   * @param midibend {number | Pattern} MIDI pitch bend (-1 - 1)
   * @example
   * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
   */
  midibend(midibend?: any, ...more: any[]): Pattern
  /**
   * MIDI channel: Sets the MIDI channel for the event.
   * @param channel {number | Pattern} MIDI channel number (0-15)
   * @example
   * note("c4").midichan(1).midi()
   */
  midichan(channel?: any, ...more: any[]): Pattern
  /**
   * MIDI command: Sends a MIDI command message.
   * @param command {number | Pattern} MIDI command
   * @example
   * midicmd("clock*48,<start stop>/2").midi()
   */
  midicmd(command?: any, ...more: any[]): Pattern
  midimap(...args: any[]): Pattern
  /**
   * MIDI port: Sets the MIDI port for the event.
   * @param port {number | Pattern} MIDI port
   * @example
   * note("c a f e").midiport("<0 1 2 3>").midi()
   */
  midiport(port?: any, ...more: any[]): Pattern
  /**
   * MIDI key after touch: Sends a MIDI key after touch message.
   * @param miditouch {number | Pattern} MIDI key after touch (0-1)
   * @example
   * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
   */
  miditouch(miditouch?: any, ...more: any[]): Pattern
  minutes(...args: any[]): Pattern
  mix(...args: any[]): Pattern
  mod(...args: any[]): Pattern
  /**
   * Remove anchor note from the voicing. Useful for melody harmonization
   * @param modeName {string | Pattern} one of {below | above | duck | root}
   * @example
   * mode("<below above duck root>").chord("C").voicing()
   */
  mode(modeName?: any, ...more: any[]): Pattern
  modulate(...args: any[]): Pattern
  moveXY(...args: any[]): Pattern
  mtranspose(...args: any[]): Pattern
  /**
   * Multiplies each number by the given factor.
   * @example
   * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
   */
  mul(...args: any[]): Pattern
  /**
   * Selects the given index from the sample map.
   * Numbers too high will wrap around.
   * n can also be used to play midi numbers, but it is recommended to use note instead.
   * @param value {number | Pattern} sample index starting from 0
   * @example
   * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
   */
  n(value?: any, ...more: any[]): Pattern
  ne(...args: any[]): Pattern
  net(...args: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(0, fn) (never calls fn)
   * @example
   * s("hh*8").never(x=>x.speed("0.5"))
   */
  never(...args: any[]): Pattern
  /**
   * Adds pink noise to the mix
   * @param wet {number | Pattern} wet amount
   * @example
   * sound("<white pink brown>/2")
   */
  noise(wet?: any, ...more: any[]): Pattern
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
  note(...args: any[]): Pattern
  /**
   * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
   * @param nrpnn {number | Pattern} MIDI NRPN non-registered parameter number (0-127)
   * @example
   * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
   */
  nrpnn(nrpnn?: any, ...more: any[]): Pattern
  /**
   * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
   * @param nrpv {number | Pattern} MIDI NRPN non-registered parameter value (0-127)
   * @example
   * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
   */
  nrpv(nrpv?: any, ...more: any[]): Pattern
  nudge(...args: any[]): Pattern
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
  o(number?: any, ...more: any[]): Pattern
  /**
   * Sets the default octave of a synth.
   * Synonyms: oct
   * @param octave {number | Pattern} octave number
   * @example
   * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
   */
  oct(octave?: any, ...more: any[]): Pattern
  /**
   * Sets the default octave of a synth.
   * Synonyms: oct
   * @param octave {number | Pattern} octave number
   * @example
   * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
   */
  octave(octave?: any, ...more: any[]): Pattern
  octaveR(...args: any[]): Pattern
  /**
   * How many octaves are voicing steps spread apart, defaults to 1
   * @param count {number | Pattern} the number of octaves
   * @example
   * chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
   */
  octaves(count?: any, ...more: any[]): Pattern
  octer(...args: any[]): Pattern
  octersub(...args: any[]): Pattern
  octersubsub(...args: any[]): Pattern
  /**
   * Superimposes the function result on top of the original pattern, delayed by the given time.
   * @param time {Pattern | number} offset time
   * @param func {function} function to apply
   * @example
   * "c3 eb3 g3".off(1/8, x=>x.add(7)).note()
   */
  off(time?: any, func?: any, ...more: any[]): Pattern
  /**
   * Sets how the voicing is offset from the anchored position
   * @param shift {number | Pattern} the amount to shift the voicing up or down
   * @example
   * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
   */
  offset(shift?: any, ...more: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.75, fn)
   * @example
   * s("hh*8").often(x=>x.speed("0.5"))
   */
  often(...args: any[]): Pattern
  onPaint(...args: any[]): Pattern
  onTrigger(...args: any[]): Pattern
  /**
   * make something happen on event time
   * uses browser timeout which is innacurate for audio tasks
   * @example
   * s("bd!8").onTriggerTime((hap) => {console.log(hap)})
   */
  onTriggerTime(...args: any[]): Pattern
  /**
   * Returns a new pattern, with all haps without onsets filtered out. A hap
   * with an onset is one with a whole timespan that begins at the same time
   * as its part timespan.
   */
  onsetsOnly(...args: any[]): Pattern
  or(...args: any[]): Pattern
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
  orbit(number?: any, ...more: any[]): Pattern
  /**
   * The host to send open sound control messages to. Requires running the OSC bridge.
   * @param oschost {string | Pattern} e.g. 'localhost'
   * @example
   * note("c4").oschost('127.0.0.1').oscport(57120).osc();
   */
  oschost(oschost?: any, ...more: any[]): Pattern
  /**
   * The port to send open sound control messages to. Requires running the OSC bridge.
   * @param oscport {number | Pattern} e.g. 57120
   * @example
   * note("c4").oschost('127.0.0.1').oscport(57120).osc();
   */
  oscport(oscport?: any, ...more: any[]): Pattern
  /**
   *
   */
  out(...args: any[]): Pattern
  outerBind(...args: any[]): Pattern
  outerJoin(...args: any[]): Pattern
  /**
   * Carries out an operation 'outside' a cycle.
   * @example
   * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
   * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
   */
  outside(...args: any[]): Pattern
  overgain(...args: any[]): Pattern
  overshape(...args: any[]): Pattern
  /**
   * Experimental
   * Speeds a pattern up or down, to fit to the given number of steps per cycle.
   * @example
   * sound("bd sd cp").pace(4)
   * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
   */
  pace(...args: any[]): Pattern
  /**
   * Applies rev to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
   * @example
   * note("c d e g").palindrome()
   */
  palindrome(...args: any[]): Pattern
  /**
   * Sets position in stereo.
   * @param pan {number | Pattern} between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
   * @example
   * s("[bd hh]*2").pan("<.5 1 .5 0>")
   * @example
   * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
   */
  pan(pan?: any, ...more: any[]): Pattern
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
  panchor(anchor?: any, ...more: any[]): Pattern
  panorient(...args: any[]): Pattern
  panspan(...args: any[]): Pattern
  pansplay(...args: any[]): Pattern
  panwidth(...args: any[]): Pattern
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
  partials(magnitudes?: any, ...more: any[]): Pattern
  /**
   * Attack time of pitch envelope.
   * Synonyms: patt
   * @param time {number | Pattern} time in seconds
   * @example
   * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
   */
  patt(time?: any, ...more: any[]): Pattern
  /**
   * Attack time of pitch envelope.
   * Synonyms: patt
   * @param time {number | Pattern} time in seconds
   * @example
   * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
   */
  pattack(time?: any, ...more: any[]): Pattern
  /**
   * Curve of envelope. Defaults to linear. exponential is good for kicks
   * @param type {number | Pattern} 0 = linear, 1 = exponential
   * @example
   * note("g1*4")
   * .s("sine").pdec(.5)
   * .penv(32)
   * .pcurve("<0 1>")
   */
  pcurve(type?: any, ...more: any[]): Pattern
  /**
   * Decay time of pitch envelope.
   * Synonyms: pdec
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
   */
  pdec(time?: any, ...more: any[]): Pattern
  /**
   * Decay time of pitch envelope.
   * Synonyms: pdec
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
   */
  pdecay(time?: any, ...more: any[]): Pattern
  /**
   * Amount of pitch envelope. Negative values will flip the envelope.
   * If you don't set other pitch envelope controls, pattack:.2 will be the default.
   * @param semitones {number | Pattern} change in semitones
   * @example
   * note("c")
   * .penv("<12 7 1 .5 0 -1 -7 -12>")
   */
  penv(semitones?: any, ...more: any[]): Pattern
  /**
   * Phaser audio effect that approximates popular guitar pedals.
   * Synonyms: ph
   * @param speed {number | Pattern} speed of modulation
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser("<1 2 4 8>")
   */
  ph(speed?: any, ...more: any[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phasdp(depth?: any, ...more: any[]): Pattern
  /**
   * Phaser audio effect that approximates popular guitar pedals.
   * Synonyms: ph
   * @param speed {number | Pattern} speed of modulation
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser("<1 2 4 8>")
   */
  phaser(speed?: any, ...more: any[]): Pattern
  /**
   * The center frequency of the phaser in HZ. Defaults to 1000
   * Synonyms: phc
   * @param centerfrequency {number | Pattern} in HZ
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasercenter("<800 2000 4000>")
   */
  phasercenter(centerfrequency?: any, ...more: any[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phaserdepth(depth?: any, ...more: any[]): Pattern
  phaserrate(...args: any[]): Pattern
  /**
   * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
   * Synonyms: phs
   * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasersweep("<800 2000 4000>")
   */
  phasersweep(phasersweep?: any, ...more: any[]): Pattern
  /**
   * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
   * @param phases {Array.<number> | Pattern} List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
   * @example
   * // Phase cancellation
   * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
   *   .partials(partials([1, 1, 1]))
   *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
   */
  phases(phases?: any, ...more: any[]): Pattern
  /**
   * The center frequency of the phaser in HZ. Defaults to 1000
   * Synonyms: phc
   * @param centerfrequency {number | Pattern} in HZ
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasercenter("<800 2000 4000>")
   */
  phc(centerfrequency?: any, ...more: any[]): Pattern
  /**
   * The amount the signal is affected by the phaser effect. Defaults to 0.75
   * Synonyms: phd, phasdp
   * @param depth {number | Pattern} number between 0 and 1
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phaserdepth("<0 .5 .75 1>")
   */
  phd(depth?: any, ...more: any[]): Pattern
  /**
   * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
   * Synonyms: phs
   * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
   * @example
   * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
   * .phaser(2).phasersweep("<800 2000 4000>")
   */
  phs(phasersweep?: any, ...more: any[]): Pattern
  piano(...args: any[]): Pattern
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
  pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: any[]): Pattern
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
  pick(pat?: any, xs?: any, ...more: any[]): Pattern
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
  pickF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
  /**
   * Similar to pick, but it applies an outerJoin instead of an innerJoin.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickOut(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * Similar to pick, but the choosen pattern is reset when its index is triggered.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickReset(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * Similar to pick, but the choosen pattern is restarted when its index is triggered.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickRestart(pat?: any, xs?: any, ...more: any[]): Pattern
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
  pickSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * The same as pick, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmod(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * The same as pickF, but if you pick a number greater than the size of the functions list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param lookup {Pattern} a pattern of indices
   * @param funcs {Array.<function()>} the array of functions from which to pull
   */
  pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
  /**
   * The same as pickOut, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodOut(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * The same as pickReset, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodReset(pat?: any, xs?: any, ...more: any[]): Pattern
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
  pickmodRestart(pat?: any, xs?: any, ...more: any[]): Pattern
  /**
   * The same as inhabit, but if you pick a number greater than the size of the list,
   * it wraps around, rather than sticking at the maximum value.
   * For example, if you pick the fifth pattern of a list of three, you'll get the
   * second one.
   * Synonyms: pickmodSqueeze
   * @param pat {Pattern}
   * @param xs {*}
   */
  pickmodSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
  pitchJump(...args: any[]): Pattern
  pitchJumpTime(...args: any[]): Pattern
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
  pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: any[]): Pattern
  /**
   * The ply function repeats each event the given number of times.
   * @example
   * s("bd ~ sd cp").ply("<1 2 3>")
   */
  ply(...args: any[]): Pattern
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
  plyForEach(factor?: any, func?: any, ...more: any[]): Pattern
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
  plyWith(factor?: any, func?: any, ...more: any[]): Pattern
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
  plyforeach(factor?: any, func?: any, ...more: any[]): Pattern
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
  plywith(factor?: any, func?: any, ...more: any[]): Pattern
  poly(...args: any[]): Pattern
  polyBind(...args: any[]): Pattern
  polyTouch(...args: any[]): Pattern
  /**
   * Gain applied after all effects have been processed.
   * @example
   * s("bd sd [~ bd] sd,hh*8")
   * .compressor("-20:20:10:.002:.02").postgain(1.5)
   */
  postgain(...args: any[]): Pattern
  pow(...args: any[]): Pattern
  /**
   * Release time of pitch envelope
   * Synonyms: prel
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb> ~")
   * .release(.5) // to hear the pitch release
   * .prelease("<0 .1 .25 .5>")
   */
  prel(time?: any, ...more: any[]): Pattern
  /**
   * Release time of pitch envelope
   * Synonyms: prel
   * @param time {number | Pattern} time in seconds
   * @example
   * note("<c eb g bb> ~")
   * .release(.5) // to hear the pitch release
   * .prelease("<0 .1 .25 .5>")
   */
  prelease(time?: any, ...more: any[]): Pattern
  /**
   * Syncopates a rhythm, by shifting each event halfway into its timespan.
   * @example
   * stack(s("hh*4"),
   *       s("bd mt sd ht").every(4, press)
   *      ).slow(2)
   */
  press(...args: any[]): Pattern
  /**
   * Like press, but allows you to specify the amount by which each
   * event is shifted. pressBy(0.5) is the same as press, while
   * pressBy(1/3) shifts each event by a third of its timespan.
   * @example
   * stack(s("hh*4"),
   *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
   *      ).slow(2)
   */
  pressBy(...args: any[]): Pattern
  /**
   * MIDI program number: Sends a MIDI program change message.
   * @param program {number | Pattern} MIDI program number (0-127)
   * @example
   * note("c4").progNum(10).midichan(1).midi()
   */
  progNum(program?: any, ...more: any[]): Pattern
  psus(...args: any[]): Pattern
  /**
   *
   */
  psustain(...args: any[]): Pattern
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
  punchcard(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: any[]): Pattern
  /**
   * Controls the pulsewidth of the pulse oscillator
   * @param pulsewidth {number | Pattern}
   * @example
   * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
   */
  pw(pulsewidth?: any, ...more: any[]): Pattern
  /**
   * Controls the lfo rate for the pulsewidth of the pulse oscillator
   * @param rate {number | Pattern}
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
   */
  pwrate(rate?: any, ...more: any[]): Pattern
  /**
   * Controls the lfo sweep for the pulsewidth of the pulse oscillator
   * @param sweep {number | Pattern}
   * @example
   * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
   */
  pwsweep(sweep?: any, ...more: any[]): Pattern
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
  queryArc(begin?: any, end?: any, ...more: any[]): Pattern
  r(...args: any[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1.
   * Returns a new pattern with values scaled to the given min/max range.
   * Most useful in combination with continuous patterns.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine.range(500,4000))
   */
  range(...args: any[]): Pattern
  /**
   * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
   * Returns a new pattern with values scaled to the given min/max range.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine2.range2(500,4000))
   */
  range2(...args: any[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1
   * Returns a new pattern with values scaled to the given min/max range,
   * following an exponential curve.
   * @example
   * s("[bd sd]*2,hh*8")
   * .cutoff(sine.rangex(500,4000))
   */
  rangex(...args: any[]): Pattern
  /**
   * Shorthand for .sometimesBy(0.25, fn)
   * @example
   * s("hh*8").rarely(x=>x.speed("0.5"))
   */
  rarely(...args: any[]): Pattern
  /**
   * Allows dividing numbers via list notation using ":".
   * Returns a new pattern with just numbers.
   * @example
   * ratio("1, 5:4, 3:2").mul(110)
   * .freq().s("piano")
   */
  ratio(...args: any[]): Pattern
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
  rdim(frequency?: any, ...more: any[]): Pattern
  real(...args: any[]): Pattern
  /**
   * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
   * Synonyms: rel
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
   */
  rel(time?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
   * Synonyms: rel
   * @param time {number | Pattern} release time in seconds
   * @example
   * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
   */
  release(time?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern, with haps containing undefined values removed from
   * query results.
   */
  removeUndefineds(...args: any[]): Pattern
  /**
   * Repeats each cycle the given number of times.
   * @example
   * note(irand(12).add(34)).segment(4).repeatCycles(2).s("gm_acoustic_guitar_nylon")
   */
  repeatCycles(...args: any[]): Pattern
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
  replicate(...args: any[]): Pattern
  rescale(...args: any[]): Pattern
  /**
   * Resets the pattern to the start of the cycle for each onset of the reset pattern.
   * @example
   * s("[<bd lt> sd]*2, hh*8").reset("<x@3 x(5,8)>")
   */
  reset(...args: any[]): Pattern
  resetAll(...args: any[]): Pattern
  resetJoin(...args: any[]): Pattern
  /**
   * Controls the low-pass q-value.
   * Synonyms: resonance
   * @param q {number | Pattern} resonance factor between 0 and 50
   * @example
   * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
   */
  resonance(q?: any, ...more: any[]): Pattern
  /**
   * Restarts the pattern for each onset of the restart pattern.
   * While reset will only reset the current cycle, restart will start from cycle 0.
   * @example
   * s("[<bd lt> sd]*2, hh*8").restart("<x@3 x(5,8)>")
   */
  restart(...args: any[]): Pattern
  restartAll(...args: any[]): Pattern
  restartJoin(...args: any[]): Pattern
  /**
   * Reverse all cycles in a pattern. See also revv for reversing a whole pattern.
   * @example
   * note("c d e g").rev()
   */
  rev(...args: any[]): Pattern
  /**
   * Reverse a whole pattern. See also rev for reversing each cycle.
   * @example
   * // This is the same as `<[g e] [d c]>`. If `rev()` is used, you get
   * // the same as `<[d c] [g e]>`, where each cycle reverses, but the order of
   * // cycles stays the same.
   * note("<[c d] [e g]>").revv()
   */
  revv(...args: any[]): Pattern
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
  rfade(seconds?: any, ...more: any[]): Pattern
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
  rib(offset?: any, cycles?: any, ...more: any[]): Pattern
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
  ribbon(offset?: any, cycles?: any, ...more: any[]): Pattern
  ring(...args: any[]): Pattern
  ringdf(...args: any[]): Pattern
  ringf(...args: any[]): Pattern
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
  rlp(frequency?: any, ...more: any[]): Pattern
  /**
   * Sets the level of reverb.
   * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
   * @param level {number | Pattern} between 0 and 1
   * @example
   * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
   * @example
   * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
   */
  room(level?: any, ...more: any[]): Pattern
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
  roomdim(frequency?: any, ...more: any[]): Pattern
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
  roomfade(seconds?: any, ...more: any[]): Pattern
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
  roomlp(frequency?: any, ...more: any[]): Pattern
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
  roomsize(size?: any, ...more: any[]): Pattern
  /**
   * Maps the chords of the incoming pattern to root notes in the given octave.
   * @param octave {octave} octave to use
   * @example
   * "<C^7 A7 Dm7 G7>".rootNotes(2).note()
   */
  rootNotes(octave?: any, ...more: any[]): Pattern
  /**
   * Assumes a numerical pattern. Returns a new pattern with all values rounded
   * to the nearest integer.
   * @example
   * n("0.5 1.5 2.5".round()).scale("C:major")
   */
  round(...args: any[]): Pattern
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
  rsize(size?: any, ...more: any[]): Pattern
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
  s(sound?: any, ...more: any[]): Pattern
  s_add(...args: any[]): Pattern
  s_contract(...args: any[]): Pattern
  s_expand(...args: any[]): Pattern
  s_extend(...args: any[]): Pattern
  s_sub(...args: any[]): Pattern
  s_taper(...args: any[]): Pattern
  s_taperlist(...args: any[]): Pattern
  s_tour(...args: any[]): Pattern
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
  scale(scale?: any, ...more: any[]): Pattern
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
  scaleTrans(offset?: any, ...more: any[]): Pattern
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
  scaleTranspose(offset?: any, ...more: any[]): Pattern
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
  scope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: any[]): Pattern
  scram(...args: any[]): Pattern
  /**
   * Slices a pattern into the given number of parts, then plays those parts at random. Similar to shuffle,
   * but parts might be played more than once, or not at all, per cycle.
   * @example
   * note("c d e f").sound("piano").scramble(4)
   * @example
   * seq("c d e f".scramble(4), "g").note().sound("piano")
   */
  scramble(...args: any[]): Pattern
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
  scrub(...args: any[]): Pattern
  seconds(...args: any[]): Pattern
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
  seed(n?: any, ...more: any[]): Pattern
  /**
   * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
   * Synonyms: seg
   * @param segments {number} number of segments per cycle
   * @example
   * note(saw.range(40,52).segment(24))
   */
  seg(segments?: any, ...more: any[]): Pattern
  /**
   * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
   * Synonyms: seg
   * @param segments {number} number of segments per cycle
   * @example
   * note(saw.range(40,52).segment(24))
   */
  segment(segments?: any, ...more: any[]): Pattern
  semitone(...args: any[]): Pattern
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
  seq(...args: any[]): Pattern
  /**
   * See fastcat
   */
  sequence(...args: any[]): Pattern
  set(...args: any[]): Pattern
  /**
   * Returns a new pattern with the context field set to every hap set to the given value.
   * @param context {*}
   */
  setContext(context?: any, ...more: any[]): Pattern
  setSteps(...args: any[]): Pattern
  /**
   * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
   * Please use distort instead, which has a more predictable response curve
   * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
   * @param distortion {number | Pattern} between 0 and 1
   * @example
   * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
   */
  shape(distortion?: any, ...more: any[]): Pattern
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
  shrink(...args: any[]): Pattern
  shrinklist(...args: any[]): Pattern
  /**
   * Slices a pattern into the given number of parts, then plays those parts in random order.
   * Each part will be played exactly once per cycle.
   * @example
   * note("c d e f").sound("piano").shuffle(4)
   * @example
   * seq("c d e f".shuffle(4), "g").note().sound("piano")
   */
  shuffle(...args: any[]): Pattern
  /**
   * Wavefolding distortion composed with sinusoid
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  sinefold(distortion?: any, volume?: any, ...more: any[]): Pattern
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
  size(size?: any, ...more: any[]): Pattern
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
  slice(...args: any[]): Pattern
  slide(...args: any[]): Pattern
  /**
   * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
   * Synonyms: sparsity
   * @param factor {number | Pattern} slow down factor
   * @example
   * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
   */
  slow(factor?: any, ...more: any[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  slowChunk(...args: any[]): Pattern
  /**
   * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
   * Synonyms: cat
   * @example
   * slowcat("e5", "b4", ["d5", "c5"])
   */
  slowcat(...args: any[]): Pattern
  /**
   * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
   * Synonyms: slowChunk, slowchunk
   * @example
   * "0 1 2 3".chunk(4, x=>x.add(7))
   * .scale("A:minor").note()
   */
  slowchunk(...args: any[]): Pattern
  smear(...args: any[]): Pattern
  /**
   * Soft-clipping distortion
   * @param distortion {number | Pattern} amount of distortion to apply
   * @param volume {number | Pattern} linear postgain of the distortion
   */
  soft(distortion?: any, volume?: any, ...more: any[]): Pattern
  /**
   * Shorthand for .someCyclesBy(0.5, fn)
   * @example
   * s("bd,hh*8").someCycles(x=>x.speed("0.5"))
   */
  someCycles(...args: any[]): Pattern
  /**
   * Randomly applies the given function by the given probability on a cycle by cycle basis.
   * Similar to sometimesBy
   * @param probability {number | Pattern} a number between 0 and 1
   * @param function {function} the transformation to apply
   * @example
   * s("bd,hh*8").someCyclesBy(.3, x=>x.speed("0.5"))
   */
  someCyclesBy(probability?: any, ...more: any[]): Pattern
  /**
   * Applies the given function with a 50% chance
   * @param function {function} the transformation to apply
   * @example
   * s("hh*8").sometimes(x=>x.speed("0.5"))
   */
  sometimes(...args: any[]): Pattern
  /**
   * Randomly applies the given function by the given probability.
   * Similar to someCyclesBy
   * @param probability {number | Pattern} a number between 0 and 1
   * @param function {function} the transformation to apply
   * @example
   * s("hh*8").sometimesBy(.4, x=>x.speed("0.5"))
   */
  sometimesBy(probability?: any, ...more: any[]): Pattern
  songPtr(...args: any[]): Pattern
  /**
   * Returns a new pattern, which returns haps sorted in temporal order. Mainly
   * of use when comparing two patterns for equality, in tests.
   */
  sortHapsByPart(...args: any[]): Pattern
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
  sound(sound?: any, ...more: any[]): Pattern
  soundfont(...args: any[]): Pattern
  /**
   * Define a custom webaudio node to use as a sound source.
   * Synonyms: src
   * @param getSource {function}
   */
  source(getSource?: any, ...more: any[]): Pattern
  /**
   * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
   * Synonyms: sparsity
   * @param factor {number | Pattern} slow down factor
   * @example
   * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
   */
  sparsity(factor?: any, ...more: any[]): Pattern
  speak(...args: any[]): Pattern
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
  spectrum(config?: any, thickness?: any, speed?: any, min?: any, max?: any, ...more: any[]): Pattern
  /**
   * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
   * @param speed {number | Pattern} inf to inf, negative numbers play the sample backwards.
   * @example
   * s("bd*6").speed("1 2 4 1 -2 -4")
   * @example
   * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
   */
  speed(speed?: any, ...more: any[]): Pattern
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
  spiral(options?: any, stretch?: any, size?: any, thickness?: any, cap?: any, inset?: any, playheadColor?: any, playheadLength?: any, playheadThickness?: any, padding?: any, steady?: any, activeColor?: any, inactiveColor?: any, colorizeInactive?: any, fade?: any, logSpiral?: any, ...more: any[]): Pattern
  /**
   * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
   * @example
   * samples('github:tidalcycles/dirt-samples')
   * s("breaks165")
   * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
   */
  splice(...args: any[]): Pattern
  /**
   * Returns a new pattern, with queries split at cycle boundaries. This makes
   * some calculations easier to express, as all haps are then constrained to
   * happen within a cycle.
   */
  splitQueries(...args: any[]): Pattern
  /**
   * Set the stereo pan spread for supported oscillators
   * @param spread {number | Pattern} between 0 and 1
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
   */
  spread(spread?: any, ...more: any[]): Pattern
  /**
   * Pick from the list of values (or patterns of values) via the index using the given
   * pattern of integers. The selected pattern will be compressed to fit the duration of the selecting event
   * @param pat {Pattern}
   * @param xs {*}
   * @example
   * note(squeeze("<0@2 [1!2] 2>", ["g a", "f g f g" , "g a c d"]))
   */
  squeeze(pat?: any, xs?: any, ...more: any[]): Pattern
  squeezeBind(...args: any[]): Pattern
  squeezeJoin(...args: any[]): Pattern
  squeezeout(...args: any[]): Pattern
  /**
   * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
   * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
   * @param squiz {number | Pattern} Try passing multiples of 2 to it - 2, 4, 8 etc.
   * @example
   * squiz("2 4/2 6 [8 16]").s("bd").osc()
   */
  squiz(squiz?: any, ...more: any[]): Pattern
  /**
   * Define a custom webaudio node to use as a sound source.
   * Synonyms: src
   * @param getSource {function}
   */
  src(getSource?: any, ...more: any[]): Pattern
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
  stack(...args: any[]): Pattern
  stepBind(...args: any[]): Pattern
  stepJoin(...args: any[]): Pattern
  steps(...args: any[]): Pattern
  stepsPerOctave(...args: any[]): Pattern
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
  strans(offset?: any, ...more: any[]): Pattern
  /**
   * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
   * @param factor {number | Pattern} inf to inf, negative numbers play the sample backwards.
   * @example
   * s("gm_flute").stretch("1 2 .5")
   */
  stretch(factor?: any, ...more: any[]): Pattern
  /**
   * Cuts each sample into the given number of parts, triggering progressive portions of each sample at each loop.
   * @example
   * s("numbers:0 numbers:1 numbers:2").striate(6).slow(3)
   */
  striate(...args: any[]): Pattern
  /**
   * Returns a new pattern with the context field of every hap set to an empty object.
   */
  stripContext(...args: any[]): Pattern
  /**
   * Applies the given structure to the pattern:
   * @example
   * note("c,eb,g")
   *   .struct("x ~ x ~ ~ x ~ x ~ ~ ~ x ~ x ~ ~")
   *   .slow(2)
   */
  struct(...args: any[]): Pattern
  structAll(...args: any[]): Pattern
  /**
   * Deprecated. Like echo, but the last 2 parameters are flipped.
   * @param times {number} how many times to repeat
   * @param feedback {number} velocity multiplicator for each iteration
   * @param time {number} cycle offset between iterations
   * @example
   * s("bd sd").stut(3, .8, 1/6)
   */
  stut(times?: any, feedback?: any, time?: any, ...more: any[]): Pattern
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
  stutWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
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
  stutwith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
  /**
   * Like add, but the given numbers are subtracted.
   * @example
   * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
   * // See add for more information.
   */
  sub(...args: any[]): Pattern
  /**
   * Superimposes the result of the given function(s) on top of the original pattern:
   * @example
   * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
   *   .superimpose(x=>x.add(2))
   *   .scale('C minor').note()
   */
  superimpose(...args: any[]): Pattern
  supradough(...args: any[]): Pattern
  /**
   * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
   * Synonyms: sus
   * @param gain {number | Pattern} sustain level between 0 and 1
   * @example
   * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
   */
  sus(gain?: any, ...more: any[]): Pattern
  /**
   * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
   * Synonyms: sus
   * @param gain {number | Pattern} sustain level between 0 and 1
   * @example
   * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
   */
  sustain(gain?: any, ...more: any[]): Pattern
  sustainpedal(...args: any[]): Pattern
  /**
   * Shorthand for swingBy with 1/3:
   * @param subdivision {number}
   * @example
   * s("hh*8").swing(4)
   * // s("hh*8").swingBy(1/3, 4)
   */
  swing(subdivision?: any, ...more: any[]): Pattern
  /**
   * The function swingBy x n breaks each cycle into n slices, and then delays events in the second half of each slice by the amount x, which is relative to the size of the (half) slice. So if x is 0 it does nothing, 0.5 delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
   * @param subdivision {number}
   * @param offset {number}
   * @example
   * s("hh*8").swingBy(1/3, 4)
   */
  swingBy(subdivision?: any, offset?: any, ...more: any[]): Pattern
  /**
   * MIDI sysex: Sends a MIDI sysex message.
   * @param id {number | Pattern} Sysex ID
   * @param data {number | Pattern} Sysex data
   * @example
   * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
   */
  sysex(id?: any, data?: any, ...more: any[]): Pattern
  /**
   * MIDI sysex data: Sends a MIDI sysex message.
   * @param data {number | Pattern} Sysex data
   * @example
   * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
   */
  sysexdata(data?: any, ...more: any[]): Pattern
  /**
   * MIDI sysex ID: Sends a MIDI sysex identifier message.
   * @param id {number | Pattern} Sysex ID
   * @example
   * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
   */
  sysexid(id?: any, ...more: any[]): Pattern
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
  sz(size?: any, ...more: any[]): Pattern
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
  tag(tag?: any, ...more: any[]): Pattern
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
  take(...args: any[]): Pattern
  timeline(...args: any[]): Pattern
  /**
   * Assumes a numerical pattern, containing unipolar values in the range 0 ..
   *
   * Returns a new pattern with values scaled to the bipolar range -1 .. 1
   */
  toBipolar(...args: any[]): Pattern
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
  tour(...args: any[]): Pattern
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
  trans(amount?: any, ...more: any[]): Pattern
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
  transient(attack?: any, sustain?: any, ...more: any[]): Pattern
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
  transpose(amount?: any, ...more: any[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: trem
   * @param speed {number | Pattern} modulation speed in HZ
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
   */
  trem(speed?: any, ...more: any[]): Pattern
  /**
   * Depth of amplitude modulation
   * Synonyms: tremdepth
   * @param depth {number | Pattern}
   * @example
   * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
   */
  tremdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: trem
   * @param speed {number | Pattern} modulation speed in HZ
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
   */
  tremolo(speed?: any, ...more: any[]): Pattern
  /**
   * Depth of amplitude modulation
   * Synonyms: tremdepth
   * @param depth {number | Pattern}
   * @example
   * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
   */
  tremolodepth(depth?: any, ...more: any[]): Pattern
  /**
   * Alter the phase of the modulation waveform
   * Synonyms: tremphase
   * @param offset {number | Pattern} the offset in cycles of the modulation
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
   */
  tremolophase(offset?: any, ...more: any[]): Pattern
  /**
   * Shape of amplitude modulation
   * Synonyms: tremshape
   * @param shape {number | Pattern} tri | square | sine | saw | ramp
   * @example
   * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
   */
  tremoloshape(shape?: any, ...more: any[]): Pattern
  /**
   * Alter the shape of the modulation waveform
   * Synonyms: tremskew
   * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
   */
  tremoloskew(amount?: any, ...more: any[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: tremsync
   * @param cycles {number | Pattern} modulation speed in cycles
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
   */
  tremolosync(cycles?: any, ...more: any[]): Pattern
  /**
   * Alter the phase of the modulation waveform
   * Synonyms: tremphase
   * @param offset {number | Pattern} the offset in cycles of the modulation
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
   */
  tremphase(offset?: any, ...more: any[]): Pattern
  /**
   * Shape of amplitude modulation
   * Synonyms: tremshape
   * @param shape {number | Pattern} tri | square | sine | saw | ramp
   * @example
   * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
   */
  tremshape(shape?: any, ...more: any[]): Pattern
  /**
   * Alter the shape of the modulation waveform
   * Synonyms: tremskew
   * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
   * @example
   * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
   */
  tremskew(amount?: any, ...more: any[]): Pattern
  /**
   * Modulate the amplitude of a sound with a continuous waveform
   * Synonyms: tremsync
   * @param cycles {number | Pattern} modulation speed in cycles
   * @example
   * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
   */
  tremsync(cycles?: any, ...more: any[]): Pattern
  triode(...args: any[]): Pattern
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
  tscope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: any[]): Pattern
  tsdelay(...args: any[]): Pattern
  uid(...args: any[]): Pattern
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
  undegrade(...args: any[]): Pattern
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
  undegradeBy(amount?: any, ...more: any[]): Pattern
  /**
   * Set number of stacked voices for supported oscillators
   * @param numvoices {number | Pattern}
   * @example
   * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
   */
  unison(numvoices?: any, ...more: any[]): Pattern
  /**
   * Used in conjunction with speed, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using unit "c" means speed will be interpreted in units of cycles, e.g. speed "1" means samples will be stretched to fill a cycle. Using unit "s" means the playback speed will be adjusted so that the duration is the number of seconds specified by speed.
   * @param unit {number | string | Pattern} see description above
   * @example
   * speed("1 2 .5 3").s("bd").unit("c").osc()
   */
  unit(unit?: any, ...more: any[]): Pattern
  unjoin(...args: any[]): Pattern
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
  v(frequency?: any, ...more: any[]): Pattern
  val(...args: any[]): Pattern
  /**
   * Sets the velocity from 0 to 1. Is multiplied together with gain.
   * Synonyms: vel
   * @example
   * s("hh*8")
   * .gain(".4!2 1 .4!2 1 .4 1")
   * .velocity(".4 1")
   */
  vel(...args: any[]): Pattern
  /**
   * Sets the velocity from 0 to 1. Is multiplied together with gain.
   * Synonyms: vel
   * @example
   * s("hh*8")
   * .gain(".4!2 1 .4!2 1 .4 1")
   * .velocity(".4 1")
   */
  velocity(...args: any[]): Pattern
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
  vib(frequency?: any, ...more: any[]): Pattern
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
  vibmod(depth?: any, ...more: any[]): Pattern
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
  vibrato(frequency?: any, ...more: any[]): Pattern
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
  vmod(depth?: any, ...more: any[]): Pattern
  voice(...args: any[]): Pattern
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
  voicing(...args: any[]): Pattern
  /**
   * DEPRECATED: still works, but it is recommended you use .voicing instead (without s).
   * Turns chord symbols into voicings, using the smoothest voice leading possible.
   * Uses chord-voicings package.
   * @param dictionary {string} which voicing dictionary to use.
   * @example
   * stack("<C^7 A7 Dm7 G7>".voicings('lefthand'), "<C3 A2 D3 G2>").note()
   */
  voicings(dictionary?: any, ...more: any[]): Pattern
  /**
   * Formant filter to make things sound like vowels.
   * @param vowel {string | Pattern} You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
   * @example
   * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
   * .vowel("<a e i <o u>>")
   * @example
   * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
   */
  vowel(vowel?: any, ...more: any[]): Pattern
  w(...args: any[]): Pattern
  /**
   * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
   * Synonyms: wavetableWarp
   * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
   * @example
   * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("spin")
   */
  warp(amount?: any, ...more: any[]): Pattern
  /**
   * Attack time of the wavetable oscillator's warp envelope
   * Synonyms: warpatt
   * @param time {number | Pattern} attack time in seconds
   */
  warpatt(time?: any, ...more: any[]): Pattern
  /**
   * Attack time of the wavetable oscillator's warp envelope
   * Synonyms: warpatt
   * @param time {number | Pattern} attack time in seconds
   */
  warpattack(time?: any, ...more: any[]): Pattern
  /**
   * DC offset of the LFO for the wavetable oscillator's warp
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  warpdc(dcoffset?: any, ...more: any[]): Pattern
  /**
   * Decay time of the wavetable oscillator's warp envelope
   * Synonyms: warpdec
   * @param time {number | Pattern} decay time in seconds
   */
  warpdec(time?: any, ...more: any[]): Pattern
  /**
   * Decay time of the wavetable oscillator's warp envelope
   * Synonyms: warpdec
   * @param time {number | Pattern} decay time in seconds
   */
  warpdecay(time?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the wavetable oscillator's warp
   * @param depth {number | Pattern} depth of modulation
   */
  warpdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Amount of envelope applied wavetable oscillator's position envelope
   * @param amount {number | Pattern} between 0 and 1
   */
  warpenv(amount?: any, ...more: any[]): Pattern
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
  warpmode(mode?: any, ...more: any[]): Pattern
  /**
   * Rate of the LFO for the wavetable oscillator's warp
   * @param rate {number | Pattern} rate in hertz
   */
  warprate(rate?: any, ...more: any[]): Pattern
  /**
   * Release time of the wavetable oscillator's warp envelope
   * Synonyms: warprel
   * @param time {number | Pattern} release time in seconds
   */
  warprel(time?: any, ...more: any[]): Pattern
  /**
   * Release time of the wavetable oscillator's warp envelope
   * Synonyms: warprel
   * @param time {number | Pattern} release time in seconds
   */
  warprelease(time?: any, ...more: any[]): Pattern
  /**
   * Shape of the LFO for the wavetable oscillator's warp
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  warpshape(shape?: any, ...more: any[]): Pattern
  /**
   * Skew of the LFO for the wavetable oscillator's warp
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  warpskew(skew?: any, ...more: any[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's warp envelope
   * Synonyms: warpsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  warpsus(gain?: any, ...more: any[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's warp envelope
   * Synonyms: warpsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  warpsustain(gain?: any, ...more: any[]): Pattern
  /**
   * cycle synced rate of the LFO for the wavetable warp position
   * @param rate {number | Pattern} rate in cycles
   */
  warpsync(rate?: any, ...more: any[]): Pattern
  waveloss(...args: any[]): Pattern
  /**
   * Amount of randomness of the initial phase of the wavetable oscillator.
   * Synonyms: wavetablePhaseRand
   * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
   * @example
   * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
   */
  wavetablePhaseRand(amount?: any, ...more: any[]): Pattern
  /**
   * Position in the wavetable of the wavetable oscillator
   * Synonyms: wavetablePosition
   * @param position {number | Pattern} Position in the wavetable from 0 to 1
   * @example
   * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
   */
  wavetablePosition(position?: any, ...more: any[]): Pattern
  /**
   * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
   * Synonyms: wavetableWarp
   * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
   * @example
   * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
   *   .warpmode("spin")
   */
  wavetableWarp(amount?: any, ...more: any[]): Pattern
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
  wavetableWarpMode(mode?: any, ...more: any[]): Pattern
  /**
   * Applies the given function whenever the given pattern is in a true state.
   * @param binary_pat {Pattern}
   * @param func {function}
   * @example
   * "c3 eb3 g3".when("<0 1>/2", x=>x.sub("5")).note()
   */
  when(binary_pat?: any, func?: any, ...more: any[]): Pattern
  /**
   * Do something on a keypress, or array of keypresses
   * Key name reference
   * @example
   * s("bd(5,8)").whenKey("Control:j", x => x.segment(16).color("red")).whenKey("Control:i", x => x.fast(2).color("blue"))
   */
  whenKey(...args: any[]): Pattern
  /**
   * Returns a new pattern with the given function applied to the context field of every hap.
   * @param func {function}
   */
  withContext(func?: any, ...more: any[]): Pattern
  /**
   * As with withHaps, but applies the function to every hap, rather than every list of haps.
   * @param func {function}
   */
  withHap(func?: any, ...more: any[]): Pattern
  /**
   * Similar to withQuerySpan, but the function is applied to the timespans
   * of all haps returned by pattern queries (both part timespans, and where
   * present, whole timespans).
   * @param func {function}
   */
  withHapSpan(func?: any, ...more: any[]): Pattern
  /**
   * As with withHapSpan, but the function is applied to both the
   * begin and end time of the hap timespans.
   * @param func {function} the function to apply
   */
  withHapTime(func?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern with the given function applied to the list of haps returned by every query.
   * @param func {function}
   */
  withHaps(func?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern with the given location information added to the
   * context of every hap.
   * @param start {Number} start offset
   * @param end {Number} end offset
   */
  withLoc(start?: any, end?: any, ...more: any[]): Pattern
  /**
   * Returns a new pattern, where the given function is applied to the query
   * timespan before passing it to the original pattern.
   * @param func {function} the function to apply
   */
  withQuerySpan(func?: any, ...more: any[]): Pattern
  withQuerySpanMaybe(...args: any[]): Pattern
  /**
   * As with withQuerySpan, but the function is applied to both the
   * begin and end time of the query timespan.
   * @param func {function} the function to apply
   */
  withQueryTime(func?: any, ...more: any[]): Pattern
  withState(...args: any[]): Pattern
  withSteps(...args: any[]): Pattern
  /**
   * Returns a new pattern, with the function applied to the value of
   * each hap. It has the alias fmap.
   * Synonyms: fmap
   * @param func {function} to to apply to the value
   * @example
   * "0 1 2".withValue(v => v + 10).log()
   */
  withValue(func?: any, ...more: any[]): Pattern
  /**
   * Use within to apply a function to only a part of a pattern.
   * @param start {number} start within cycle (0 - 1)
   * @param end {number} end within cycle (0 - 1). Must be > start
   * @param func {function} function to be applied to the sub-pattern
   */
  within(start?: any, end?: any, func?: any, ...more: any[]): Pattern
  /**
   * Displays a vertical pianoroll with event labels.
   * Supports all the same options as pianoroll.
   */
  wordfall(...args: any[]): Pattern
  /**
   * Creates a worklet effect. Typically derived by writing K(...) in the REPL which will parse
   * Kabelsalat code.
   * @param src {string} Source code of the worklet update function
   * @param inputs {number | Pattern} Worklet inputs
   */
  worklet(src?: any, inputs?: any, ...more: any[]): Pattern
  /**
   * Position in the wavetable of the wavetable oscillator
   * Synonyms: wavetablePosition
   * @param position {number | Pattern} Position in the wavetable from 0 to 1
   * @example
   * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
   */
  wt(position?: any, ...more: any[]): Pattern
  /**
   * Attack time of the wavetable oscillator's position envelope
   * Synonyms: wtatt
   * @param time {number | Pattern} attack time in seconds
   */
  wtatt(time?: any, ...more: any[]): Pattern
  /**
   * Attack time of the wavetable oscillator's position envelope
   * Synonyms: wtatt
   * @param time {number | Pattern} attack time in seconds
   */
  wtattack(time?: any, ...more: any[]): Pattern
  /**
   * DC offset of the LFO for the wavetable oscillator's position
   * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
   */
  wtdc(dcoffset?: any, ...more: any[]): Pattern
  /**
   * Decay time of the wavetable oscillator's position envelope
   * Synonyms: wtdec
   * @param time {number | Pattern} decay time in seconds
   */
  wtdec(time?: any, ...more: any[]): Pattern
  /**
   * Decay time of the wavetable oscillator's position envelope
   * Synonyms: wtdec
   * @param time {number | Pattern} decay time in seconds
   */
  wtdecay(time?: any, ...more: any[]): Pattern
  /**
   * Depth of the LFO for the wavetable oscillator's position
   * @param depth {number | Pattern} depth of modulation
   */
  wtdepth(depth?: any, ...more: any[]): Pattern
  /**
   * Amount of envelope applied wavetable oscillator's position envelope
   * @param amount {number | Pattern} between 0 and 1
   */
  wtenv(amount?: any, ...more: any[]): Pattern
  /**
   * Amount of randomness of the initial phase of the wavetable oscillator.
   * Synonyms: wavetablePhaseRand
   * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
   * @example
   * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
   */
  wtphaserand(amount?: any, ...more: any[]): Pattern
  /**
   * Rate of the LFO for the wavetable oscillator's position
   * @param rate {number | Pattern} rate in hertz
   */
  wtrate(rate?: any, ...more: any[]): Pattern
  /**
   * Release time of the wavetable oscillator's position envelope
   * Synonyms: wtrel
   * @param time {number | Pattern} release time in seconds
   */
  wtrel(time?: any, ...more: any[]): Pattern
  /**
   * Release time of the wavetable oscillator's position envelope
   * Synonyms: wtrel
   * @param time {number | Pattern} release time in seconds
   */
  wtrelease(time?: any, ...more: any[]): Pattern
  /**
   * Shape of the LFO for the wavetable oscillator's position
   * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
   */
  wtshape(shape?: any, ...more: any[]): Pattern
  /**
   * Skew of the LFO for the wavetable oscillator's position
   * @param skew {number | Pattern} How much to bend the LFO shape
   */
  wtskew(skew?: any, ...more: any[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's position envelope
   * Synonyms: wtsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  wtsus(gain?: any, ...more: any[]): Pattern
  /**
   * Sustain time of the wavetable oscillator's position envelope
   * Synonyms: wtsus
   * @param gain {number | Pattern} sustain level (0 to 1)
   */
  wtsustain(gain?: any, ...more: any[]): Pattern
  /**
   * cycle synced rate of the LFO for the wavetable oscillator's position
   * @param rate {number | Pattern} rate in cycles
   */
  wtsync(rate?: any, ...more: any[]): Pattern
  x(...args: any[]): Pattern
  /**
   * Cross-fades between left and right from 0 to 1:
   *
   * 0 = (full left, no right)
   * .5 = (both equal)
   * 1 = (no left, full right)
   * @example
   * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
   */
  xfade(...args: any[]): Pattern
  xsdelay(...args: any[]): Pattern
  y(...args: any[]): Pattern
  zcrush(...args: any[]): Pattern
  zdelay(...args: any[]): Pattern
  zmod(...args: any[]): Pattern
  znoise(...args: any[]): Pattern
  /**
   * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
   * @example
   * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
   * // s("hh*3 [sd bd]*2") // equivalent
   */
  zoom(...args: any[]): Pattern
  zoomArc(...args: any[]): Pattern
  zoomIn(...args: any[]): Pattern
  zoomarc(...args: any[]): Pattern
  zrand(...args: any[]): Pattern
  zzfx(...args: any[]): Pattern
}

// In Strudel, "..." is a pattern in mini-notation, so a string has the pattern methods too
interface String {
  FX(...args: any[]): Pattern
  FXr(...args: any[]): Pattern
  FXrel(...args: any[]): Pattern
  FXrelease(...args: any[]): Pattern
  _ad(...args: any[]): Pattern
  _add(...args: any[]): Pattern
  _adsr(...args: any[]): Pattern
  _almostAlways(...args: any[]): Pattern
  _almostNever(...args: any[]): Pattern
  _always(...args: any[]): Pattern
  _and(...args: any[]): Pattern
  _apply(...args: any[]): Pattern
  _applyN(...args: any[]): Pattern
  _ar(...args: any[]): Pattern
  _arp(...args: any[]): Pattern
  _arpWith(...args: any[]): Pattern
  _as(...args: any[]): Pattern
  _band(...args: any[]): Pattern
  _beat(...args: any[]): Pattern
  _bite(...args: any[]): Pattern
  _bjork(...args: any[]): Pattern
  _blshift(...args: any[]): Pattern
  _bor(...args: any[]): Pattern
  _brshift(...args: any[]): Pattern
  _bxor(...args: any[]): Pattern
  _bypass(...args: any[]): Pattern
  _chop(...args: any[]): Pattern
  _chunk(...args: any[]): Pattern
  _chunkBack(...args: any[]): Pattern
  _chunkBackInto(...args: any[]): Pattern
  _chunkInto(...args: any[]): Pattern
  _chunkback(...args: any[]): Pattern
  _chunkbackinto(...args: any[]): Pattern
  _chunkinto(...args: any[]): Pattern
  _compress(...args: any[]): Pattern
  _compressSpan(...args: any[]): Pattern
  _compressspan(...args: any[]): Pattern
  _contract(...args: any[]): Pattern
  _control(...args: any[]): Pattern
  _cpm(...args: any[]): Pattern
  _degradeBy(...args: any[]): Pattern
  _degradeByWith(...args: any[]): Pattern
  _density(...args: any[]): Pattern
  _div(...args: any[]): Pattern
  _drop(...args: any[]): Pattern
  _ds(...args: any[]): Pattern
  _early(...args: any[]): Pattern
  _echo(...args: any[]): Pattern
  _echoWith(...args: any[]): Pattern
  _echowith(...args: any[]): Pattern
  _eish(...args: any[]): Pattern
  _eq(...args: any[]): Pattern
  _eqt(...args: any[]): Pattern
  _euclid(...args: any[]): Pattern
  _euclidLegato(...args: any[]): Pattern
  _euclidLegatoRot(...args: any[]): Pattern
  _euclidRot(...args: any[]): Pattern
  _euclidish(...args: any[]): Pattern
  _euclidrot(...args: any[]): Pattern
  _every(...args: any[]): Pattern
  _expand(...args: any[]): Pattern
  _extend(...args: any[]): Pattern
  _fast(...args: any[]): Pattern
  _fastChunk(...args: any[]): Pattern
  _fastGap(...args: any[]): Pattern
  _fastchunk(...args: any[]): Pattern
  _fastgap(...args: any[]): Pattern
  _filter(...args: any[]): Pattern
  _filterWhen(...args: any[]): Pattern
  _firstOf(...args: any[]): Pattern
  _focus(...args: any[]): Pattern
  _focusSpan(...args: any[]): Pattern
  _focusspan(...args: any[]): Pattern
  _func(...args: any[]): Pattern
  _grow(...args: any[]): Pattern
  _gt(...args: any[]): Pattern
  _gte(...args: any[]): Pattern
  _hsl(...args: any[]): Pattern
  _hsla(...args: any[]): Pattern
  _hurry(...args: any[]): Pattern
  _inhabit(...args: any[]): Pattern
  _inhabitmod(...args: any[]): Pattern
  _inside(...args: any[]): Pattern
  _iter(...args: any[]): Pattern
  _iterBack(...args: any[]): Pattern
  _iterback(...args: any[]): Pattern
  _jux(...args: any[]): Pattern
  _juxBy(...args: any[]): Pattern
  _juxby(...args: any[]): Pattern
  _keep(...args: any[]): Pattern
  _keepif(...args: any[]): Pattern
  _lastOf(...args: any[]): Pattern
  _late(...args: any[]): Pattern
  _linger(...args: any[]): Pattern
  _log2(...args: any[]): Pattern
  _loopAt(...args: any[]): Pattern
  _loopAtCps(...args: any[]): Pattern
  _loopat(...args: any[]): Pattern
  _loopatcps(...args: any[]): Pattern
  _lt(...args: any[]): Pattern
  _lte(...args: any[]): Pattern
  _mod(...args: any[]): Pattern
  _moveXY(...args: any[]): Pattern
  _mul(...args: any[]): Pattern
  _ne(...args: any[]): Pattern
  _net(...args: any[]): Pattern
  _never(...args: any[]): Pattern
  _off(...args: any[]): Pattern
  _often(...args: any[]): Pattern
  _opIn(...args: any[]): Pattern
  _opMix(...args: any[]): Pattern
  _opOut(...args: any[]): Pattern
  _opPoly(...args: any[]): Pattern
  _opReset(...args: any[]): Pattern
  _opRestart(...args: any[]): Pattern
  _opSqueeze(...args: any[]): Pattern
  _opSqueezeOut(...args: any[]): Pattern
  _or(...args: any[]): Pattern
  _outside(...args: any[]): Pattern
  _pace(...args: any[]): Pattern
  _pianoroll(...args: any[]): Pattern
  _pick(...args: any[]): Pattern
  _pickF(...args: any[]): Pattern
  _pickOut(...args: any[]): Pattern
  _pickReset(...args: any[]): Pattern
  _pickRestart(...args: any[]): Pattern
  _pickSqueeze(...args: any[]): Pattern
  _pickmod(...args: any[]): Pattern
  _pickmodF(...args: any[]): Pattern
  _pickmodOut(...args: any[]): Pattern
  _pickmodReset(...args: any[]): Pattern
  _pickmodRestart(...args: any[]): Pattern
  _pickmodSqueeze(...args: any[]): Pattern
  _pitchwheel(...args: any[]): Pattern
  _ply(...args: any[]): Pattern
  _plyForEach(...args: any[]): Pattern
  _plyWith(...args: any[]): Pattern
  _plyforeach(...args: any[]): Pattern
  _plywith(...args: any[]): Pattern
  _pow(...args: any[]): Pattern
  _pressBy(...args: any[]): Pattern
  _punchcard(...args: any[]): Pattern
  _range(...args: any[]): Pattern
  _range2(...args: any[]): Pattern
  _rangex(...args: any[]): Pattern
  _rarely(...args: any[]): Pattern
  _repeatCycles(...args: any[]): Pattern
  _replicate(...args: any[]): Pattern
  _rescale(...args: any[]): Pattern
  _rib(...args: any[]): Pattern
  _ribbon(...args: any[]): Pattern
  _rootNotes(...args: any[]): Pattern
  _scale(...args: any[]): Pattern
  _scaleTrans(...args: any[]): Pattern
  _scaleTranspose(...args: any[]): Pattern
  _scope(...args: any[]): Pattern
  _scramble(...args: any[]): Pattern
  _scrub(...args: any[]): Pattern
  _seed(...args: any[]): Pattern
  _seg(...args: any[]): Pattern
  _segment(...args: any[]): Pattern
  _set(...args: any[]): Pattern
  _shrink(...args: any[]): Pattern
  _shuffle(...args: any[]): Pattern
  _slice(...args: any[]): Pattern
  _slow(...args: any[]): Pattern
  _slowChunk(...args: any[]): Pattern
  _slowchunk(...args: any[]): Pattern
  _someCycles(...args: any[]): Pattern
  _someCyclesBy(...args: any[]): Pattern
  _sometimes(...args: any[]): Pattern
  _sometimesBy(...args: any[]): Pattern
  _sparsity(...args: any[]): Pattern
  _speak(...args: any[]): Pattern
  _spectrum(...args: any[]): Pattern
  _spiral(...args: any[]): Pattern
  _splice(...args: any[]): Pattern
  _strans(...args: any[]): Pattern
  _striate(...args: any[]): Pattern
  _stut(...args: any[]): Pattern
  _stutWith(...args: any[]): Pattern
  _stutwith(...args: any[]): Pattern
  _sub(...args: any[]): Pattern
  _swing(...args: any[]): Pattern
  _swingBy(...args: any[]): Pattern
  _sysex(...args: any[]): Pattern
  _take(...args: any[]): Pattern
  _timeline(...args: any[]): Pattern
  _trans(...args: any[]): Pattern
  _transpose(...args: any[]): Pattern
  _undegradeBy(...args: any[]): Pattern
  _voicings(...args: any[]): Pattern
  _when(...args: any[]): Pattern
  _whenKey(...args: any[]): Pattern
  _within(...args: any[]): Pattern
  _zoom(...args: any[]): Pattern
  _zoomArc(...args: any[]): Pattern
  _zoomIn(...args: any[]): Pattern
  _zoomarc(...args: any[]): Pattern
  accelerate(amount?: any, ...more: any[]): Pattern
  activeLabel(...args: any[]): Pattern
  ad(...args: any[]): Pattern
  add(...args: any[]): Pattern
  adsr(time?: any, time?: any, gain?: any, time?: any, ...more: any[]): Pattern
  almostAlways(...args: any[]): Pattern
  almostNever(...args: any[]): Pattern
  always(...args: any[]): Pattern
  amp(amount?: any, ...more: any[]): Pattern
  analyze(...args: any[]): Pattern
  anchor(anchorNote?: any, ...more: any[]): Pattern
  and(...args: any[]): Pattern
  angle(...args: any[]): Pattern
  animate(...args: any[]): Pattern
  appBoth(pat_val?: any, ...more: any[]): Pattern
  appLeft(pat_val?: any, ...more: any[]): Pattern
  appRight(pat_val?: any, ...more: any[]): Pattern
  appWhole(whole_func?: any, func?: any, ...more: any[]): Pattern
  apply(...args: any[]): Pattern
  applyN(...args: any[]): Pattern
  ar(...args: any[]): Pattern
  arp(...args: any[]): Pattern
  arpWith(...args: any[]): Pattern
  as(mapping?: any, ...more: any[]): Pattern
  asNumber(...args: any[]): Pattern
  asym(distortion?: any, volume?: any, ...more: any[]): Pattern
  att(attack?: any, ...more: any[]): Pattern
  attack(attack?: any, ...more: any[]): Pattern
  band(...args: any[]): Pattern
  bandf(frequency?: any, ...more: any[]): Pattern
  bandq(q?: any, ...more: any[]): Pattern
  bank(bank?: any, ...more: any[]): Pattern
  bbexpr(byteBeatExpression?: any, ...more: any[]): Pattern
  bbst(byteBeatStartTime?: any, ...more: any[]): Pattern
  beat(...args: any[]): Pattern
  begin(amount?: any, ...more: any[]): Pattern
  bgain(number?: any, ...more: any[]): Pattern
  bind(...args: any[]): Pattern
  bindWhole(...args: any[]): Pattern
  binshift(...args: any[]): Pattern
  bite(number?: any, slices?: any, ...more: any[]): Pattern
  bjork(...args: any[]): Pattern
  blshift(...args: any[]): Pattern
  bmod(config?: any, id?: any, ...more: any[]): Pattern
  bor(...args: any[]): Pattern
  bp(frequency?: any, ...more: any[]): Pattern
  bpa(attack?: any, ...more: any[]): Pattern
  bpattack(attack?: any, ...more: any[]): Pattern
  bpd(decay?: any, ...more: any[]): Pattern
  bpdc(dcoffset?: any, ...more: any[]): Pattern
  bpdecay(decay?: any, ...more: any[]): Pattern
  bpdepth(depth?: any, ...more: any[]): Pattern
  bpdepthfreq(depth?: any, ...more: any[]): Pattern
  bpdepthfrequency(depth?: any, ...more: any[]): Pattern
  bpe(modulation?: any, ...more: any[]): Pattern
  bpenv(modulation?: any, ...more: any[]): Pattern
  bpf(frequency?: any, ...more: any[]): Pattern
  bpq(q?: any, ...more: any[]): Pattern
  bpr(release?: any, ...more: any[]): Pattern
  bprate(rate?: any, ...more: any[]): Pattern
  bprelease(release?: any, ...more: any[]): Pattern
  bps(sustain?: any, ...more: any[]): Pattern
  bpshape(shape?: any, ...more: any[]): Pattern
  bpskew(skew?: any, ...more: any[]): Pattern
  bpsustain(sustain?: any, ...more: any[]): Pattern
  bpsync(rate?: any, ...more: any[]): Pattern
  brak(...args: any[]): Pattern
  brshift(...args: any[]): Pattern
  bus(number?: any, ...more: any[]): Pattern
  busgain(number?: any, ...more: any[]): Pattern
  bxor(...args: any[]): Pattern
  bypass(...args: any[]): Pattern
  byteBeatExpression(byteBeatExpression?: any, ...more: any[]): Pattern
  byteBeatStartTime(byteBeatStartTime?: any, ...more: any[]): Pattern
  cat(...args: any[]): Pattern
  ccn(MIDI?: any, ...more: any[]): Pattern
  ccv(MIDI?: any, ...more: any[]): Pattern
  ceil(...args: any[]): Pattern
  ch(channels?: any, ...more: any[]): Pattern
  channel(channel?: any, ...more: any[]): Pattern
  channels(channels?: any, ...more: any[]): Pattern
  chebyshev(distortion?: any, volume?: any, ...more: any[]): Pattern
  choose(xs?: any, ...more: any[]): Pattern
  choose2(xs?: any, ...more: any[]): Pattern
  chop(...args: any[]): Pattern
  chord(symbols?: any, ...more: any[]): Pattern
  chorus(chorus?: any, ...more: any[]): Pattern
  chunk(...args: any[]): Pattern
  chunkBack(...args: any[]): Pattern
  chunkBackInto(...args: any[]): Pattern
  chunkInto(...args: any[]): Pattern
  chunkback(...args: any[]): Pattern
  chunkbackinto(...args: any[]): Pattern
  chunkinto(...args: any[]): Pattern
  clip(factor?: any, ...more: any[]): Pattern
  coarse(factor?: any, ...more: any[]): Pattern
  collect(...args: any[]): Pattern
  color(color?: any, ...more: any[]): Pattern
  comb(...args: any[]): Pattern
  compress(...args: any[]): Pattern
  compressSpan(...args: any[]): Pattern
  compressor(...args: any[]): Pattern
  compressorAttack(...args: any[]): Pattern
  compressorKnee(...args: any[]): Pattern
  compressorRatio(...args: any[]): Pattern
  compressorRelease(...args: any[]): Pattern
  compressspan(...args: any[]): Pattern
  contract(...args: any[]): Pattern
  control(MIDI?: any, MIDI?: any, ...more: any[]): Pattern
  cpm(...args: any[]): Pattern
  cps(...args: any[]): Pattern
  crush(depth?: any, ...more: any[]): Pattern
  ctf(frequency?: any, ...more: any[]): Pattern
  ctlNum(...args: any[]): Pattern
  ctranspose(...args: any[]): Pattern
  cubic(distortion?: any, volume?: any, ...more: any[]): Pattern
  curve(...args: any[]): Pattern
  cut(group?: any, ...more: any[]): Pattern
  cutoff(frequency?: any, ...more: any[]): Pattern
  dec(time?: any, ...more: any[]): Pattern
  decay(time?: any, ...more: any[]): Pattern
  defragmentHaps(...args: any[]): Pattern
  degrade(...args: any[]): Pattern
  degradeBy(amount?: any, ...more: any[]): Pattern
  degradeByWith(...args: any[]): Pattern
  degree(...args: any[]): Pattern
  delay(level?: any, ...more: any[]): Pattern
  delayfb(feedback?: any, ...more: any[]): Pattern
  delayfeedback(feedback?: any, ...more: any[]): Pattern
  delayspeed(delayspeed?: any, ...more: any[]): Pattern
  delaysync(cycles?: any, ...more: any[]): Pattern
  delayt(delayspeed?: any, ...more: any[]): Pattern
  delaytime(...args: any[]): Pattern
  deltaSlide(...args: any[]): Pattern
  density(density?: any, ...more: any[]): Pattern
  det(amount?: any, ...more: any[]): Pattern
  detune(amount?: any, ...more: any[]): Pattern
  dfb(feedback?: any, ...more: any[]): Pattern
  dict(...args: any[]): Pattern
  dictionary(dictionaryName?: any, ...more: any[]): Pattern
  diode(distortion?: any, volume?: any, ...more: any[]): Pattern
  discreteOnly(...args: any[]): Pattern
  dist(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
  distort(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
  distorttype(type?: any, ...more: any[]): Pattern
  distortvol(volume?: any, ...more: any[]): Pattern
  disttype(type?: any, ...more: any[]): Pattern
  distvol(volume?: any, ...more: any[]): Pattern
  div(...args: any[]): Pattern
  djf(cutoff?: any, ...more: any[]): Pattern
  dough(...args: any[]): Pattern
  draw(...args: any[]): Pattern
  drawLine(pattern?: any, chars?: any, ...more: any[]): Pattern
  drive(amount?: any, ...more: any[]): Pattern
  drop(...args: any[]): Pattern
  dry(dry?: any, ...more: any[]): Pattern
  ds(...args: any[]): Pattern
  dt(delayspeed?: any, ...more: any[]): Pattern
  duck(orbit?: any, ...more: any[]): Pattern
  duckatt(time?: any, ...more: any[]): Pattern
  duckattack(time?: any, ...more: any[]): Pattern
  duckdepth(depth?: any, ...more: any[]): Pattern
  duckons(time?: any, ...more: any[]): Pattern
  duckonset(time?: any, ...more: any[]): Pattern
  duckorbit(orbit?: any, ...more: any[]): Pattern
  dur(seconds?: any, ...more: any[]): Pattern
  duration(seconds?: any, ...more: any[]): Pattern
  early(cycles?: any, ...more: any[]): Pattern
  echo(times?: any, time?: any, feedback?: any, ...more: any[]): Pattern
  echoWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
  echowith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
  eish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
  end(length?: any, ...more: any[]): Pattern
  enhance(...args: any[]): Pattern
  env(config?: any, id?: any, ...more: any[]): Pattern
  eq(...args: any[]): Pattern
  eqt(...args: any[]): Pattern
  euclid(pulses?: any, steps?: any, ...more: any[]): Pattern
  euclidLegato(pulses?: any, steps?: any, rotation?: any, pat?: any, ...more: any[]): Pattern
  euclidLegatoRot(pulses?: any, steps?: any, rotation?: any, ...more: any[]): Pattern
  euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: any[]): Pattern
  euclidish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
  euclidrot(...args: any[]): Pattern
  every(n?: any, func?: any, ...more: any[]): Pattern
  expand(...args: any[]): Pattern
  expression(...args: any[]): Pattern
  extend(...args: any[]): Pattern
  fadeInTime(...args: any[]): Pattern
  fadeOutTime(...args: any[]): Pattern
  fadeTime(...args: any[]): Pattern
  fanchor(center?: any, ...more: any[]): Pattern
  fast(factor?: any, ...more: any[]): Pattern
  fastChunk(...args: any[]): Pattern
  fastGap(...args: any[]): Pattern
  fastcat(...args: any[]): Pattern
  fastchunk(...args: any[]): Pattern
  fastgap(...args: any[]): Pattern
  fft(...args: any[]): Pattern
  fill(...args: any[]): Pattern
  filter(test?: any, ...more: any[]): Pattern
  filterHaps(hap_test?: any, ...more: any[]): Pattern
  filterValues(value_test?: any, ...more: any[]): Pattern
  filterWhen(test?: any, ...more: any[]): Pattern
  firstCycle(with_context?: any, ...more: any[]): Pattern
  firstOf(n?: any, func?: any, ...more: any[]): Pattern
  fit(...args: any[]): Pattern
  floor(...args: any[]): Pattern
  fm(brightness?: any, ...more: any[]): Pattern
  fm00(...args: any[]): Pattern
  fm01(...args: any[]): Pattern
  fm02(...args: any[]): Pattern
  fm03(...args: any[]): Pattern
  fm04(...args: any[]): Pattern
  fm05(...args: any[]): Pattern
  fm06(...args: any[]): Pattern
  fm07(...args: any[]): Pattern
  fm08(...args: any[]): Pattern
  fm1(...args: any[]): Pattern
  fm10(...args: any[]): Pattern
  fm11(...args: any[]): Pattern
  fm12(...args: any[]): Pattern
  fm13(...args: any[]): Pattern
  fm14(...args: any[]): Pattern
  fm15(...args: any[]): Pattern
  fm16(...args: any[]): Pattern
  fm17(...args: any[]): Pattern
  fm18(...args: any[]): Pattern
  fm2(...args: any[]): Pattern
  fm20(...args: any[]): Pattern
  fm21(...args: any[]): Pattern
  fm22(...args: any[]): Pattern
  fm23(...args: any[]): Pattern
  fm24(...args: any[]): Pattern
  fm25(...args: any[]): Pattern
  fm26(...args: any[]): Pattern
  fm27(...args: any[]): Pattern
  fm28(...args: any[]): Pattern
  fm3(...args: any[]): Pattern
  fm30(...args: any[]): Pattern
  fm31(...args: any[]): Pattern
  fm32(...args: any[]): Pattern
  fm33(...args: any[]): Pattern
  fm34(...args: any[]): Pattern
  fm35(...args: any[]): Pattern
  fm36(...args: any[]): Pattern
  fm37(...args: any[]): Pattern
  fm38(...args: any[]): Pattern
  fm4(...args: any[]): Pattern
  fm40(...args: any[]): Pattern
  fm41(...args: any[]): Pattern
  fm42(...args: any[]): Pattern
  fm43(...args: any[]): Pattern
  fm44(...args: any[]): Pattern
  fm45(...args: any[]): Pattern
  fm46(...args: any[]): Pattern
  fm47(...args: any[]): Pattern
  fm48(...args: any[]): Pattern
  fm5(...args: any[]): Pattern
  fm50(...args: any[]): Pattern
  fm51(...args: any[]): Pattern
  fm52(...args: any[]): Pattern
  fm53(...args: any[]): Pattern
  fm54(...args: any[]): Pattern
  fm55(...args: any[]): Pattern
  fm56(...args: any[]): Pattern
  fm57(...args: any[]): Pattern
  fm58(...args: any[]): Pattern
  fm6(...args: any[]): Pattern
  fm60(...args: any[]): Pattern
  fm61(...args: any[]): Pattern
  fm62(...args: any[]): Pattern
  fm63(...args: any[]): Pattern
  fm64(...args: any[]): Pattern
  fm65(...args: any[]): Pattern
  fm66(...args: any[]): Pattern
  fm67(...args: any[]): Pattern
  fm68(...args: any[]): Pattern
  fm7(...args: any[]): Pattern
  fm70(...args: any[]): Pattern
  fm71(...args: any[]): Pattern
  fm72(...args: any[]): Pattern
  fm73(...args: any[]): Pattern
  fm74(...args: any[]): Pattern
  fm75(...args: any[]): Pattern
  fm76(...args: any[]): Pattern
  fm77(...args: any[]): Pattern
  fm78(...args: any[]): Pattern
  fm8(...args: any[]): Pattern
  fm80(...args: any[]): Pattern
  fm81(...args: any[]): Pattern
  fm82(...args: any[]): Pattern
  fm83(...args: any[]): Pattern
  fm84(...args: any[]): Pattern
  fm85(...args: any[]): Pattern
  fm86(...args: any[]): Pattern
  fm87(...args: any[]): Pattern
  fm88(...args: any[]): Pattern
  fmap(func?: any, ...more: any[]): Pattern
  fmatt(time?: any, ...more: any[]): Pattern
  fmatt1(...args: any[]): Pattern
  fmatt2(...args: any[]): Pattern
  fmatt3(...args: any[]): Pattern
  fmatt4(...args: any[]): Pattern
  fmatt5(...args: any[]): Pattern
  fmatt6(...args: any[]): Pattern
  fmatt7(...args: any[]): Pattern
  fmatt8(...args: any[]): Pattern
  fmattack(time?: any, ...more: any[]): Pattern
  fmattack1(...args: any[]): Pattern
  fmattack2(...args: any[]): Pattern
  fmattack3(...args: any[]): Pattern
  fmattack4(...args: any[]): Pattern
  fmattack5(...args: any[]): Pattern
  fmattack6(...args: any[]): Pattern
  fmattack7(...args: any[]): Pattern
  fmattack8(...args: any[]): Pattern
  fmdec(time?: any, ...more: any[]): Pattern
  fmdec1(...args: any[]): Pattern
  fmdec2(...args: any[]): Pattern
  fmdec3(...args: any[]): Pattern
  fmdec4(...args: any[]): Pattern
  fmdec5(...args: any[]): Pattern
  fmdec6(...args: any[]): Pattern
  fmdec7(...args: any[]): Pattern
  fmdec8(...args: any[]): Pattern
  fmdecay(time?: any, ...more: any[]): Pattern
  fmdecay1(...args: any[]): Pattern
  fmdecay2(...args: any[]): Pattern
  fmdecay3(...args: any[]): Pattern
  fmdecay4(...args: any[]): Pattern
  fmdecay5(...args: any[]): Pattern
  fmdecay6(...args: any[]): Pattern
  fmdecay7(...args: any[]): Pattern
  fmdecay8(...args: any[]): Pattern
  fmenv(type?: any, ...more: any[]): Pattern
  fmenv1(...args: any[]): Pattern
  fmenv2(...args: any[]): Pattern
  fmenv3(...args: any[]): Pattern
  fmenv4(...args: any[]): Pattern
  fmenv5(...args: any[]): Pattern
  fmenv6(...args: any[]): Pattern
  fmenv7(...args: any[]): Pattern
  fmenv8(...args: any[]): Pattern
  fmh(harmonicity?: any, ...more: any[]): Pattern
  fmh1(...args: any[]): Pattern
  fmh2(...args: any[]): Pattern
  fmh3(...args: any[]): Pattern
  fmh4(...args: any[]): Pattern
  fmh5(...args: any[]): Pattern
  fmh6(...args: any[]): Pattern
  fmh7(...args: any[]): Pattern
  fmh8(...args: any[]): Pattern
  fmi(brightness?: any, ...more: any[]): Pattern
  fmi00(...args: any[]): Pattern
  fmi01(...args: any[]): Pattern
  fmi02(...args: any[]): Pattern
  fmi03(...args: any[]): Pattern
  fmi04(...args: any[]): Pattern
  fmi05(...args: any[]): Pattern
  fmi06(...args: any[]): Pattern
  fmi07(...args: any[]): Pattern
  fmi08(...args: any[]): Pattern
  fmi1(...args: any[]): Pattern
  fmi10(...args: any[]): Pattern
  fmi11(...args: any[]): Pattern
  fmi12(...args: any[]): Pattern
  fmi13(...args: any[]): Pattern
  fmi14(...args: any[]): Pattern
  fmi15(...args: any[]): Pattern
  fmi16(...args: any[]): Pattern
  fmi17(...args: any[]): Pattern
  fmi18(...args: any[]): Pattern
  fmi2(...args: any[]): Pattern
  fmi20(...args: any[]): Pattern
  fmi21(...args: any[]): Pattern
  fmi22(...args: any[]): Pattern
  fmi23(...args: any[]): Pattern
  fmi24(...args: any[]): Pattern
  fmi25(...args: any[]): Pattern
  fmi26(...args: any[]): Pattern
  fmi27(...args: any[]): Pattern
  fmi28(...args: any[]): Pattern
  fmi3(...args: any[]): Pattern
  fmi30(...args: any[]): Pattern
  fmi31(...args: any[]): Pattern
  fmi32(...args: any[]): Pattern
  fmi33(...args: any[]): Pattern
  fmi34(...args: any[]): Pattern
  fmi35(...args: any[]): Pattern
  fmi36(...args: any[]): Pattern
  fmi37(...args: any[]): Pattern
  fmi38(...args: any[]): Pattern
  fmi4(...args: any[]): Pattern
  fmi40(...args: any[]): Pattern
  fmi41(...args: any[]): Pattern
  fmi42(...args: any[]): Pattern
  fmi43(...args: any[]): Pattern
  fmi44(...args: any[]): Pattern
  fmi45(...args: any[]): Pattern
  fmi46(...args: any[]): Pattern
  fmi47(...args: any[]): Pattern
  fmi48(...args: any[]): Pattern
  fmi5(...args: any[]): Pattern
  fmi50(...args: any[]): Pattern
  fmi51(...args: any[]): Pattern
  fmi52(...args: any[]): Pattern
  fmi53(...args: any[]): Pattern
  fmi54(...args: any[]): Pattern
  fmi55(...args: any[]): Pattern
  fmi56(...args: any[]): Pattern
  fmi57(...args: any[]): Pattern
  fmi58(...args: any[]): Pattern
  fmi6(...args: any[]): Pattern
  fmi60(...args: any[]): Pattern
  fmi61(...args: any[]): Pattern
  fmi62(...args: any[]): Pattern
  fmi63(...args: any[]): Pattern
  fmi64(...args: any[]): Pattern
  fmi65(...args: any[]): Pattern
  fmi66(...args: any[]): Pattern
  fmi67(...args: any[]): Pattern
  fmi68(...args: any[]): Pattern
  fmi7(...args: any[]): Pattern
  fmi70(...args: any[]): Pattern
  fmi71(...args: any[]): Pattern
  fmi72(...args: any[]): Pattern
  fmi73(...args: any[]): Pattern
  fmi74(...args: any[]): Pattern
  fmi75(...args: any[]): Pattern
  fmi76(...args: any[]): Pattern
  fmi77(...args: any[]): Pattern
  fmi78(...args: any[]): Pattern
  fmi8(...args: any[]): Pattern
  fmi80(...args: any[]): Pattern
  fmi81(...args: any[]): Pattern
  fmi82(...args: any[]): Pattern
  fmi83(...args: any[]): Pattern
  fmi84(...args: any[]): Pattern
  fmi85(...args: any[]): Pattern
  fmi86(...args: any[]): Pattern
  fmi87(...args: any[]): Pattern
  fmi88(...args: any[]): Pattern
  fmrel(time?: any, ...more: any[]): Pattern
  fmrel1(...args: any[]): Pattern
  fmrel2(...args: any[]): Pattern
  fmrel3(...args: any[]): Pattern
  fmrel4(...args: any[]): Pattern
  fmrel5(...args: any[]): Pattern
  fmrel6(...args: any[]): Pattern
  fmrel7(...args: any[]): Pattern
  fmrel8(...args: any[]): Pattern
  fmrelease(time?: any, ...more: any[]): Pattern
  fmrelease1(...args: any[]): Pattern
  fmrelease2(...args: any[]): Pattern
  fmrelease3(...args: any[]): Pattern
  fmrelease4(...args: any[]): Pattern
  fmrelease5(...args: any[]): Pattern
  fmrelease6(...args: any[]): Pattern
  fmrelease7(...args: any[]): Pattern
  fmrelease8(...args: any[]): Pattern
  fmsus(level?: any, ...more: any[]): Pattern
  fmsus1(...args: any[]): Pattern
  fmsus2(...args: any[]): Pattern
  fmsus3(...args: any[]): Pattern
  fmsus4(...args: any[]): Pattern
  fmsus5(...args: any[]): Pattern
  fmsus6(...args: any[]): Pattern
  fmsus7(...args: any[]): Pattern
  fmsus8(...args: any[]): Pattern
  fmsustain(level?: any, ...more: any[]): Pattern
  fmsustain1(...args: any[]): Pattern
  fmsustain2(...args: any[]): Pattern
  fmsustain3(...args: any[]): Pattern
  fmsustain4(...args: any[]): Pattern
  fmsustain5(...args: any[]): Pattern
  fmsustain6(...args: any[]): Pattern
  fmsustain7(...args: any[]): Pattern
  fmsustain8(...args: any[]): Pattern
  fmwave(wave?: any, ...more: any[]): Pattern
  fmwave1(...args: any[]): Pattern
  fmwave2(...args: any[]): Pattern
  fmwave3(...args: any[]): Pattern
  fmwave4(...args: any[]): Pattern
  fmwave5(...args: any[]): Pattern
  fmwave6(...args: any[]): Pattern
  fmwave7(...args: any[]): Pattern
  fmwave8(...args: any[]): Pattern
  focus(...args: any[]): Pattern
  focusSpan(...args: any[]): Pattern
  focusspan(...args: any[]): Pattern
  fold(distortion?: any, volume?: any, ...more: any[]): Pattern
  frameRate(...args: any[]): Pattern
  frames(...args: any[]): Pattern
  freeze(...args: any[]): Pattern
  freq(frequency?: any, ...more: any[]): Pattern
  fromBipolar(...args: any[]): Pattern
  fscope(color?: any, scale?: any, pos?: any, lean?: any, min?: any, max?: any, ...more: any[]): Pattern
  fshift(...args: any[]): Pattern
  fshiftnote(...args: any[]): Pattern
  fshiftphase(...args: any[]): Pattern
  ftype(type?: any, ...more: any[]): Pattern
  func(...args: any[]): Pattern
  fxr(...args: any[]): Pattern
  gain(amount?: any, ...more: any[]): Pattern
  gat(...args: any[]): Pattern
  gate(...args: any[]): Pattern
  getPainters(...args: any[]): Pattern
  grow(...args: any[]): Pattern
  gt(...args: any[]): Pattern
  gte(...args: any[]): Pattern
  h(...args: any[]): Pattern
  hard(distortion?: any, volume?: any, ...more: any[]): Pattern
  harmonic(...args: any[]): Pattern
  hbrick(...args: any[]): Pattern
  hcutoff(frequency?: any, ...more: any[]): Pattern
  hold(...args: any[]): Pattern
  hours(...args: any[]): Pattern
  hp(frequency?: any, ...more: any[]): Pattern
  hpa(attack?: any, ...more: any[]): Pattern
  hpattack(attack?: any, ...more: any[]): Pattern
  hpd(decay?: any, ...more: any[]): Pattern
  hpdc(dcoffset?: any, ...more: any[]): Pattern
  hpdecay(decay?: any, ...more: any[]): Pattern
  hpdepth(depth?: any, ...more: any[]): Pattern
  hpdepthfreq(depth?: any, ...more: any[]): Pattern
  hpdepthfrequency(depth?: any, ...more: any[]): Pattern
  hpe(modulation?: any, ...more: any[]): Pattern
  hpenv(modulation?: any, ...more: any[]): Pattern
  hpf(frequency?: any, ...more: any[]): Pattern
  hpq(q?: any, ...more: any[]): Pattern
  hpr(release?: any, ...more: any[]): Pattern
  hprate(rate?: any, ...more: any[]): Pattern
  hprelease(release?: any, ...more: any[]): Pattern
  hps(sustain?: any, ...more: any[]): Pattern
  hpshape(shape?: any, ...more: any[]): Pattern
  hpskew(skew?: any, ...more: any[]): Pattern
  hpsustain(sustain?: any, ...more: any[]): Pattern
  hpsync(rate?: any, ...more: any[]): Pattern
  hresonance(q?: any, ...more: any[]): Pattern
  hsl(...args: any[]): Pattern
  hsla(...args: any[]): Pattern
  hurry(...args: any[]): Pattern
  hush(...args: any[]): Pattern
  imag(...args: any[]): Pattern
  inhabit(pat?: any, xs?: any, ...more: any[]): Pattern
  inhabitmod(pat?: any, xs?: any, ...more: any[]): Pattern
  innerBind(...args: any[]): Pattern
  innerJoin(...args: any[]): Pattern
  inside(...args: any[]): Pattern
  into(...args: any[]): Pattern
  inv(...args: any[]): Pattern
  invert(...args: any[]): Pattern
  ir(sample?: any, ...more: any[]): Pattern
  irbegin(begin?: any, ...more: any[]): Pattern
  iresponse(sample?: any, ...more: any[]): Pattern
  irspeed(speed?: any, ...more: any[]): Pattern
  iter(...args: any[]): Pattern
  iterBack(...args: any[]): Pattern
  iterback(...args: any[]): Pattern
  join(...args: any[]): Pattern
  jux(...args: any[]): Pattern
  juxBy(...args: any[]): Pattern
  juxby(...args: any[]): Pattern
  kcutoff(...args: any[]): Pattern
  keep(...args: any[]): Pattern
  keepif(...args: any[]): Pattern
  keyDown(...args: any[]): Pattern
  krush(...args: any[]): Pattern
  label(label?: any, ...more: any[]): Pattern
  lastOf(n?: any, func?: any, ...more: any[]): Pattern
  late(cycles?: any, ...more: any[]): Pattern
  layer(...args: any[]): Pattern
  lbrick(...args: any[]): Pattern
  legato(factor?: any, ...more: any[]): Pattern
  leslie(wet?: any, ...more: any[]): Pattern
  lfo(config?: any, id?: any, ...more: any[]): Pattern
  linger(fraction?: any, ...more: any[]): Pattern
  lock(enable?: any, ...more: any[]): Pattern
  log(...args: any[]): Pattern
  log2(...args: any[]): Pattern
  logValues(...args: any[]): Pattern
  loop(on?: any, ...more: any[]): Pattern
  loopAt(...args: any[]): Pattern
  loopAtCps(...args: any[]): Pattern
  loopBegin(time?: any, ...more: any[]): Pattern
  loopEnd(time?: any, ...more: any[]): Pattern
  loopat(...args: any[]): Pattern
  loopatcps(...args: any[]): Pattern
  loopb(time?: any, ...more: any[]): Pattern
  loope(time?: any, ...more: any[]): Pattern
  lp(frequency?: any, ...more: any[]): Pattern
  lpa(attack?: any, ...more: any[]): Pattern
  lpattack(attack?: any, ...more: any[]): Pattern
  lpd(decay?: any, ...more: any[]): Pattern
  lpdc(dcoffset?: any, ...more: any[]): Pattern
  lpdecay(decay?: any, ...more: any[]): Pattern
  lpdepth(depth?: any, ...more: any[]): Pattern
  lpdepthfreq(depth?: any, ...more: any[]): Pattern
  lpdepthfrequency(depth?: any, ...more: any[]): Pattern
  lpe(modulation?: any, ...more: any[]): Pattern
  lpenv(modulation?: any, ...more: any[]): Pattern
  lpf(frequency?: any, ...more: any[]): Pattern
  lpq(q?: any, ...more: any[]): Pattern
  lpr(release?: any, ...more: any[]): Pattern
  lprate(rate?: any, ...more: any[]): Pattern
  lprelease(release?: any, ...more: any[]): Pattern
  lps(sustain?: any, ...more: any[]): Pattern
  lpshape(shape?: any, ...more: any[]): Pattern
  lpskew(skew?: any, ...more: any[]): Pattern
  lpsustain(sustain?: any, ...more: any[]): Pattern
  lpsync(rate?: any, ...more: any[]): Pattern
  lrate(rate?: any, ...more: any[]): Pattern
  lsize(meters?: any, ...more: any[]): Pattern
  lt(...args: any[]): Pattern
  lte(...args: any[]): Pattern
  markcss(...args: any[]): Pattern
  mask(...args: any[]): Pattern
  maskAll(...args: any[]): Pattern
  midi(midiport?: any, options?: any, ...more: any[]): Pattern
  midibend(midibend?: any, ...more: any[]): Pattern
  midichan(channel?: any, ...more: any[]): Pattern
  midicmd(command?: any, ...more: any[]): Pattern
  midimap(...args: any[]): Pattern
  midiport(port?: any, ...more: any[]): Pattern
  miditouch(miditouch?: any, ...more: any[]): Pattern
  minutes(...args: any[]): Pattern
  mix(...args: any[]): Pattern
  mod(...args: any[]): Pattern
  mode(modeName?: any, ...more: any[]): Pattern
  modulate(...args: any[]): Pattern
  moveXY(...args: any[]): Pattern
  mtranspose(...args: any[]): Pattern
  mul(...args: any[]): Pattern
  n(value?: any, ...more: any[]): Pattern
  ne(...args: any[]): Pattern
  net(...args: any[]): Pattern
  never(...args: any[]): Pattern
  noise(wet?: any, ...more: any[]): Pattern
  note(...args: any[]): Pattern
  nrpnn(nrpnn?: any, ...more: any[]): Pattern
  nrpv(nrpv?: any, ...more: any[]): Pattern
  nudge(...args: any[]): Pattern
  o(number?: any, ...more: any[]): Pattern
  oct(octave?: any, ...more: any[]): Pattern
  octave(octave?: any, ...more: any[]): Pattern
  octaveR(...args: any[]): Pattern
  octaves(count?: any, ...more: any[]): Pattern
  octer(...args: any[]): Pattern
  octersub(...args: any[]): Pattern
  octersubsub(...args: any[]): Pattern
  off(time?: any, func?: any, ...more: any[]): Pattern
  offset(shift?: any, ...more: any[]): Pattern
  often(...args: any[]): Pattern
  onPaint(...args: any[]): Pattern
  onTrigger(...args: any[]): Pattern
  onTriggerTime(...args: any[]): Pattern
  onsetsOnly(...args: any[]): Pattern
  or(...args: any[]): Pattern
  orbit(number?: any, ...more: any[]): Pattern
  oschost(oschost?: any, ...more: any[]): Pattern
  oscport(oscport?: any, ...more: any[]): Pattern
  out(...args: any[]): Pattern
  outerBind(...args: any[]): Pattern
  outerJoin(...args: any[]): Pattern
  outside(...args: any[]): Pattern
  overgain(...args: any[]): Pattern
  overshape(...args: any[]): Pattern
  pace(...args: any[]): Pattern
  palindrome(...args: any[]): Pattern
  pan(pan?: any, ...more: any[]): Pattern
  panchor(anchor?: any, ...more: any[]): Pattern
  panorient(...args: any[]): Pattern
  panspan(...args: any[]): Pattern
  pansplay(...args: any[]): Pattern
  panwidth(...args: any[]): Pattern
  partials(magnitudes?: any, ...more: any[]): Pattern
  patt(time?: any, ...more: any[]): Pattern
  pattack(time?: any, ...more: any[]): Pattern
  pcurve(type?: any, ...more: any[]): Pattern
  pdec(time?: any, ...more: any[]): Pattern
  pdecay(time?: any, ...more: any[]): Pattern
  penv(semitones?: any, ...more: any[]): Pattern
  ph(speed?: any, ...more: any[]): Pattern
  phasdp(depth?: any, ...more: any[]): Pattern
  phaser(speed?: any, ...more: any[]): Pattern
  phasercenter(centerfrequency?: any, ...more: any[]): Pattern
  phaserdepth(depth?: any, ...more: any[]): Pattern
  phaserrate(...args: any[]): Pattern
  phasersweep(phasersweep?: any, ...more: any[]): Pattern
  phases(phases?: any, ...more: any[]): Pattern
  phc(centerfrequency?: any, ...more: any[]): Pattern
  phd(depth?: any, ...more: any[]): Pattern
  phs(phasersweep?: any, ...more: any[]): Pattern
  piano(...args: any[]): Pattern
  pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: any[]): Pattern
  pick(pat?: any, xs?: any, ...more: any[]): Pattern
  pickF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
  pickOut(pat?: any, xs?: any, ...more: any[]): Pattern
  pickReset(pat?: any, xs?: any, ...more: any[]): Pattern
  pickRestart(pat?: any, xs?: any, ...more: any[]): Pattern
  pickSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
  pickmod(pat?: any, xs?: any, ...more: any[]): Pattern
  pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
  pickmodOut(pat?: any, xs?: any, ...more: any[]): Pattern
  pickmodReset(pat?: any, xs?: any, ...more: any[]): Pattern
  pickmodRestart(pat?: any, xs?: any, ...more: any[]): Pattern
  pickmodSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
  pitchJump(...args: any[]): Pattern
  pitchJumpTime(...args: any[]): Pattern
  pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: any[]): Pattern
  ply(...args: any[]): Pattern
  plyForEach(factor?: any, func?: any, ...more: any[]): Pattern
  plyWith(factor?: any, func?: any, ...more: any[]): Pattern
  plyforeach(factor?: any, func?: any, ...more: any[]): Pattern
  plywith(factor?: any, func?: any, ...more: any[]): Pattern
  poly(...args: any[]): Pattern
  polyBind(...args: any[]): Pattern
  polyTouch(...args: any[]): Pattern
  postgain(...args: any[]): Pattern
  pow(...args: any[]): Pattern
  prel(time?: any, ...more: any[]): Pattern
  prelease(time?: any, ...more: any[]): Pattern
  press(...args: any[]): Pattern
  pressBy(...args: any[]): Pattern
  progNum(program?: any, ...more: any[]): Pattern
  psus(...args: any[]): Pattern
  psustain(...args: any[]): Pattern
  punchcard(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: any[]): Pattern
  pw(pulsewidth?: any, ...more: any[]): Pattern
  pwrate(rate?: any, ...more: any[]): Pattern
  pwsweep(sweep?: any, ...more: any[]): Pattern
  queryArc(begin?: any, end?: any, ...more: any[]): Pattern
  r(...args: any[]): Pattern
  range(...args: any[]): Pattern
  range2(...args: any[]): Pattern
  rangex(...args: any[]): Pattern
  rarely(...args: any[]): Pattern
  ratio(...args: any[]): Pattern
  rdim(frequency?: any, ...more: any[]): Pattern
  real(...args: any[]): Pattern
  rel(time?: any, ...more: any[]): Pattern
  release(time?: any, ...more: any[]): Pattern
  removeUndefineds(...args: any[]): Pattern
  repeatCycles(...args: any[]): Pattern
  replicate(...args: any[]): Pattern
  rescale(...args: any[]): Pattern
  reset(...args: any[]): Pattern
  resetAll(...args: any[]): Pattern
  resetJoin(...args: any[]): Pattern
  resonance(q?: any, ...more: any[]): Pattern
  restart(...args: any[]): Pattern
  restartAll(...args: any[]): Pattern
  restartJoin(...args: any[]): Pattern
  rev(...args: any[]): Pattern
  revv(...args: any[]): Pattern
  rfade(seconds?: any, ...more: any[]): Pattern
  rib(offset?: any, cycles?: any, ...more: any[]): Pattern
  ribbon(offset?: any, cycles?: any, ...more: any[]): Pattern
  ring(...args: any[]): Pattern
  ringdf(...args: any[]): Pattern
  ringf(...args: any[]): Pattern
  rlp(frequency?: any, ...more: any[]): Pattern
  room(level?: any, ...more: any[]): Pattern
  roomdim(frequency?: any, ...more: any[]): Pattern
  roomfade(seconds?: any, ...more: any[]): Pattern
  roomlp(frequency?: any, ...more: any[]): Pattern
  roomsize(size?: any, ...more: any[]): Pattern
  rootNotes(octave?: any, ...more: any[]): Pattern
  round(...args: any[]): Pattern
  rsize(size?: any, ...more: any[]): Pattern
  s(sound?: any, ...more: any[]): Pattern
  s_add(...args: any[]): Pattern
  s_contract(...args: any[]): Pattern
  s_expand(...args: any[]): Pattern
  s_extend(...args: any[]): Pattern
  s_sub(...args: any[]): Pattern
  s_taper(...args: any[]): Pattern
  s_taperlist(...args: any[]): Pattern
  s_tour(...args: any[]): Pattern
  scale(scale?: any, ...more: any[]): Pattern
  scaleTrans(offset?: any, ...more: any[]): Pattern
  scaleTranspose(offset?: any, ...more: any[]): Pattern
  scope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: any[]): Pattern
  scram(...args: any[]): Pattern
  scramble(...args: any[]): Pattern
  scrub(...args: any[]): Pattern
  seconds(...args: any[]): Pattern
  seed(n?: any, ...more: any[]): Pattern
  seg(segments?: any, ...more: any[]): Pattern
  segment(segments?: any, ...more: any[]): Pattern
  semitone(...args: any[]): Pattern
  seq(...args: any[]): Pattern
  sequence(...args: any[]): Pattern
  set(...args: any[]): Pattern
  setContext(context?: any, ...more: any[]): Pattern
  setSteps(...args: any[]): Pattern
  shape(distortion?: any, ...more: any[]): Pattern
  shrink(...args: any[]): Pattern
  shrinklist(...args: any[]): Pattern
  shuffle(...args: any[]): Pattern
  sinefold(distortion?: any, volume?: any, ...more: any[]): Pattern
  size(size?: any, ...more: any[]): Pattern
  slice(...args: any[]): Pattern
  slide(...args: any[]): Pattern
  slow(factor?: any, ...more: any[]): Pattern
  slowChunk(...args: any[]): Pattern
  slowcat(...args: any[]): Pattern
  slowchunk(...args: any[]): Pattern
  smear(...args: any[]): Pattern
  soft(distortion?: any, volume?: any, ...more: any[]): Pattern
  someCycles(...args: any[]): Pattern
  someCyclesBy(probability?: any, ...more: any[]): Pattern
  sometimes(...args: any[]): Pattern
  sometimesBy(probability?: any, ...more: any[]): Pattern
  songPtr(...args: any[]): Pattern
  sortHapsByPart(...args: any[]): Pattern
  sound(sound?: any, ...more: any[]): Pattern
  soundfont(...args: any[]): Pattern
  source(getSource?: any, ...more: any[]): Pattern
  sparsity(factor?: any, ...more: any[]): Pattern
  speak(...args: any[]): Pattern
  spectrum(config?: any, thickness?: any, speed?: any, min?: any, max?: any, ...more: any[]): Pattern
  speed(speed?: any, ...more: any[]): Pattern
  spiral(options?: any, stretch?: any, size?: any, thickness?: any, cap?: any, inset?: any, playheadColor?: any, playheadLength?: any, playheadThickness?: any, padding?: any, steady?: any, activeColor?: any, inactiveColor?: any, colorizeInactive?: any, fade?: any, logSpiral?: any, ...more: any[]): Pattern
  splice(...args: any[]): Pattern
  splitQueries(...args: any[]): Pattern
  spread(spread?: any, ...more: any[]): Pattern
  squeeze(pat?: any, xs?: any, ...more: any[]): Pattern
  squeezeBind(...args: any[]): Pattern
  squeezeJoin(...args: any[]): Pattern
  squeezeout(...args: any[]): Pattern
  squiz(squiz?: any, ...more: any[]): Pattern
  src(getSource?: any, ...more: any[]): Pattern
  stack(...args: any[]): Pattern
  stepBind(...args: any[]): Pattern
  stepJoin(...args: any[]): Pattern
  steps(...args: any[]): Pattern
  stepsPerOctave(...args: any[]): Pattern
  strans(offset?: any, ...more: any[]): Pattern
  stretch(factor?: any, ...more: any[]): Pattern
  striate(...args: any[]): Pattern
  stripContext(...args: any[]): Pattern
  struct(...args: any[]): Pattern
  structAll(...args: any[]): Pattern
  stut(times?: any, feedback?: any, time?: any, ...more: any[]): Pattern
  stutWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
  stutwith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
  sub(...args: any[]): Pattern
  superimpose(...args: any[]): Pattern
  supradough(...args: any[]): Pattern
  sus(gain?: any, ...more: any[]): Pattern
  sustain(gain?: any, ...more: any[]): Pattern
  sustainpedal(...args: any[]): Pattern
  swing(subdivision?: any, ...more: any[]): Pattern
  swingBy(subdivision?: any, offset?: any, ...more: any[]): Pattern
  sysex(id?: any, data?: any, ...more: any[]): Pattern
  sysexdata(data?: any, ...more: any[]): Pattern
  sysexid(id?: any, ...more: any[]): Pattern
  sz(size?: any, ...more: any[]): Pattern
  tag(tag?: any, ...more: any[]): Pattern
  take(...args: any[]): Pattern
  timeline(...args: any[]): Pattern
  toBipolar(...args: any[]): Pattern
  tour(...args: any[]): Pattern
  trans(amount?: any, ...more: any[]): Pattern
  transient(attack?: any, sustain?: any, ...more: any[]): Pattern
  transpose(amount?: any, ...more: any[]): Pattern
  trem(speed?: any, ...more: any[]): Pattern
  tremdepth(depth?: any, ...more: any[]): Pattern
  tremolo(speed?: any, ...more: any[]): Pattern
  tremolodepth(depth?: any, ...more: any[]): Pattern
  tremolophase(offset?: any, ...more: any[]): Pattern
  tremoloshape(shape?: any, ...more: any[]): Pattern
  tremoloskew(amount?: any, ...more: any[]): Pattern
  tremolosync(cycles?: any, ...more: any[]): Pattern
  tremphase(offset?: any, ...more: any[]): Pattern
  tremshape(shape?: any, ...more: any[]): Pattern
  tremskew(amount?: any, ...more: any[]): Pattern
  tremsync(cycles?: any, ...more: any[]): Pattern
  triode(...args: any[]): Pattern
  tscope(config?: any, align?: any, color?: any, thickness?: any, scale?: any, pos?: any, trigger?: any, ...more: any[]): Pattern
  tsdelay(...args: any[]): Pattern
  uid(...args: any[]): Pattern
  undegrade(...args: any[]): Pattern
  undegradeBy(amount?: any, ...more: any[]): Pattern
  unison(numvoices?: any, ...more: any[]): Pattern
  unit(unit?: any, ...more: any[]): Pattern
  unjoin(...args: any[]): Pattern
  v(frequency?: any, ...more: any[]): Pattern
  val(...args: any[]): Pattern
  vel(...args: any[]): Pattern
  velocity(...args: any[]): Pattern
  vib(frequency?: any, ...more: any[]): Pattern
  vibmod(depth?: any, ...more: any[]): Pattern
  vibrato(frequency?: any, ...more: any[]): Pattern
  vmod(depth?: any, ...more: any[]): Pattern
  voice(...args: any[]): Pattern
  voicing(...args: any[]): Pattern
  voicings(dictionary?: any, ...more: any[]): Pattern
  vowel(vowel?: any, ...more: any[]): Pattern
  w(...args: any[]): Pattern
  warp(amount?: any, ...more: any[]): Pattern
  warpatt(time?: any, ...more: any[]): Pattern
  warpattack(time?: any, ...more: any[]): Pattern
  warpdc(dcoffset?: any, ...more: any[]): Pattern
  warpdec(time?: any, ...more: any[]): Pattern
  warpdecay(time?: any, ...more: any[]): Pattern
  warpdepth(depth?: any, ...more: any[]): Pattern
  warpenv(amount?: any, ...more: any[]): Pattern
  warpmode(mode?: any, ...more: any[]): Pattern
  warprate(rate?: any, ...more: any[]): Pattern
  warprel(time?: any, ...more: any[]): Pattern
  warprelease(time?: any, ...more: any[]): Pattern
  warpshape(shape?: any, ...more: any[]): Pattern
  warpskew(skew?: any, ...more: any[]): Pattern
  warpsus(gain?: any, ...more: any[]): Pattern
  warpsustain(gain?: any, ...more: any[]): Pattern
  warpsync(rate?: any, ...more: any[]): Pattern
  waveloss(...args: any[]): Pattern
  wavetablePhaseRand(amount?: any, ...more: any[]): Pattern
  wavetablePosition(position?: any, ...more: any[]): Pattern
  wavetableWarp(amount?: any, ...more: any[]): Pattern
  wavetableWarpMode(mode?: any, ...more: any[]): Pattern
  when(binary_pat?: any, func?: any, ...more: any[]): Pattern
  whenKey(...args: any[]): Pattern
  withContext(func?: any, ...more: any[]): Pattern
  withHap(func?: any, ...more: any[]): Pattern
  withHapSpan(func?: any, ...more: any[]): Pattern
  withHapTime(func?: any, ...more: any[]): Pattern
  withHaps(func?: any, ...more: any[]): Pattern
  withLoc(start?: any, end?: any, ...more: any[]): Pattern
  withQuerySpan(func?: any, ...more: any[]): Pattern
  withQuerySpanMaybe(...args: any[]): Pattern
  withQueryTime(func?: any, ...more: any[]): Pattern
  withState(...args: any[]): Pattern
  withSteps(...args: any[]): Pattern
  withValue(func?: any, ...more: any[]): Pattern
  within(start?: any, end?: any, func?: any, ...more: any[]): Pattern
  wordfall(...args: any[]): Pattern
  worklet(src?: any, inputs?: any, ...more: any[]): Pattern
  wt(position?: any, ...more: any[]): Pattern
  wtatt(time?: any, ...more: any[]): Pattern
  wtattack(time?: any, ...more: any[]): Pattern
  wtdc(dcoffset?: any, ...more: any[]): Pattern
  wtdec(time?: any, ...more: any[]): Pattern
  wtdecay(time?: any, ...more: any[]): Pattern
  wtdepth(depth?: any, ...more: any[]): Pattern
  wtenv(amount?: any, ...more: any[]): Pattern
  wtphaserand(amount?: any, ...more: any[]): Pattern
  wtrate(rate?: any, ...more: any[]): Pattern
  wtrel(time?: any, ...more: any[]): Pattern
  wtrelease(time?: any, ...more: any[]): Pattern
  wtshape(shape?: any, ...more: any[]): Pattern
  wtskew(skew?: any, ...more: any[]): Pattern
  wtsus(gain?: any, ...more: any[]): Pattern
  wtsustain(gain?: any, ...more: any[]): Pattern
  wtsync(rate?: any, ...more: any[]): Pattern
  x(...args: any[]): Pattern
  xfade(...args: any[]): Pattern
  xsdelay(...args: any[]): Pattern
  y(...args: any[]): Pattern
  zcrush(...args: any[]): Pattern
  zdelay(...args: any[]): Pattern
  zmod(...args: any[]): Pattern
  znoise(...args: any[]): Pattern
  zoom(...args: any[]): Pattern
  zoomArc(...args: any[]): Pattern
  zoomIn(...args: any[]): Pattern
  zoomarc(...args: any[]): Pattern
  zrand(...args: any[]): Pattern
  zzfx(...args: any[]): Pattern
}

declare function AbsoluteOrientationSensor(...args: any[]): Pattern
declare function Accelerometer(...args: any[]): Pattern
declare function AudioDecoder(...args: any[]): Pattern
declare function AudioEncoder(...args: any[]): Pattern
declare function AudioPlaybackStats(...args: any[]): Pattern
declare function AudioWorklet(...args: any[]): Pattern
declare function AuthenticatorAssertionResponse(...args: any[]): Pattern
declare function AuthenticatorAttestationResponse(...args: any[]): Pattern
declare function AuthenticatorResponse(...args: any[]): Pattern
declare function BarcodeDetector(...args: any[]): Pattern
declare function BatteryManager(...args: any[]): Pattern
declare function BlockWidget(...args: any[]): Pattern
declare function Bluetooth(...args: any[]): Pattern
declare function BluetoothCharacteristicProperties(...args: any[]): Pattern
declare function BluetoothDevice(...args: any[]): Pattern
declare function BluetoothRemoteGATTCharacteristic(...args: any[]): Pattern
declare function BluetoothRemoteGATTDescriptor(...args: any[]): Pattern
declare function BluetoothRemoteGATTServer(...args: any[]): Pattern
declare function BluetoothRemoteGATTService(...args: any[]): Pattern
declare function Cache(...args: any[]): Pattern
declare function CacheStorage(...args: any[]): Pattern
declare function CaptureController(...args: any[]): Pattern
declare function Clipboard(...args: any[]): Pattern
declare function ClipboardChangeEvent(...args: any[]): Pattern
declare function ClipboardItem(...args: any[]): Pattern
declare function ClockCollator(...args: any[]): Pattern
declare function CookieChangeEvent(...args: any[]): Pattern
declare function CookieStore(...args: any[]): Pattern
declare function CookieStoreManager(...args: any[]): Pattern
declare function CreateMonitor(...args: any[]): Pattern
declare function Credential(...args: any[]): Pattern
declare function CredentialsContainer(...args: any[]): Pattern
declare function CryptoKey(...args: any[]): Pattern
declare function Cyclist(...args: any[]): Pattern
declare const DEFAULT_MAX_POLYPHONY: any
declare function DeviceMotionEvent(...args: any[]): Pattern
declare function DeviceMotionEventAcceleration(...args: any[]): Pattern
declare function DeviceMotionEventRotationRate(...args: any[]): Pattern
declare function DeviceOrientationEvent(...args: any[]): Pattern
declare function DevicePosture(...args: any[]): Pattern
declare function DigitalCredential(...args: any[]): Pattern
declare function DocumentPictureInPicture(...args: any[]): Pattern
declare function Drawer(...args: any[]): Pattern
declare function EyeDropper(...args: any[]): Pattern
declare function FXr(...args: any[]): Pattern
declare function FXrel(...args: any[]): Pattern
declare function FXrelease(...args: any[]): Pattern
declare function FederatedCredential(...args: any[]): Pattern
declare function FetchLaterResult(...args: any[]): Pattern
declare function FileSystemDirectoryHandle(...args: any[]): Pattern
declare function FileSystemFileHandle(...args: any[]): Pattern
declare function FileSystemHandle(...args: any[]): Pattern
declare function FileSystemObserver(...args: any[]): Pattern
declare function FileSystemWritableFileStream(...args: any[]): Pattern
declare function FontData(...args: any[]): Pattern
declare function Fraction(...args: any[]): Pattern
declare function Framer(...args: any[]): Pattern
declare function GPU(...args: any[]): Pattern
declare function GPUAdapter(...args: any[]): Pattern
declare function GPUAdapterInfo(...args: any[]): Pattern
declare function GPUBindGroup(...args: any[]): Pattern
declare function GPUBindGroupLayout(...args: any[]): Pattern
declare function GPUBuffer(...args: any[]): Pattern
declare const GPUBufferUsage: any
declare function GPUCanvasContext(...args: any[]): Pattern
declare const GPUColorWrite: any
declare function GPUCommandBuffer(...args: any[]): Pattern
declare function GPUCommandEncoder(...args: any[]): Pattern
declare function GPUCompilationInfo(...args: any[]): Pattern
declare function GPUCompilationMessage(...args: any[]): Pattern
declare function GPUComputePassEncoder(...args: any[]): Pattern
declare function GPUComputePipeline(...args: any[]): Pattern
declare function GPUDevice(...args: any[]): Pattern
declare function GPUDeviceLostInfo(...args: any[]): Pattern
declare function GPUError(...args: any[]): Pattern
declare function GPUExternalTexture(...args: any[]): Pattern
declare function GPUInternalError(...args: any[]): Pattern
declare const GPUMapMode: any
declare function GPUOutOfMemoryError(...args: any[]): Pattern
declare function GPUPipelineError(...args: any[]): Pattern
declare function GPUPipelineLayout(...args: any[]): Pattern
declare function GPUQuerySet(...args: any[]): Pattern
declare function GPUQueue(...args: any[]): Pattern
declare function GPURenderBundle(...args: any[]): Pattern
declare function GPURenderBundleEncoder(...args: any[]): Pattern
declare function GPURenderPassEncoder(...args: any[]): Pattern
declare function GPURenderPipeline(...args: any[]): Pattern
declare function GPUSampler(...args: any[]): Pattern
declare function GPUShaderModule(...args: any[]): Pattern
declare const GPUShaderStage: any
declare function GPUSupportedFeatures(...args: any[]): Pattern
declare function GPUSupportedLimits(...args: any[]): Pattern
declare function GPUTexture(...args: any[]): Pattern
declare const GPUTextureUsage: any
declare function GPUTextureView(...args: any[]): Pattern
declare function GPUUncapturedErrorEvent(...args: any[]): Pattern
declare function GPUValidationError(...args: any[]): Pattern
declare function GravitySensor(...args: any[]): Pattern
declare function Gyroscope(...args: any[]): Pattern
declare function H(...args: any[]): Pattern
declare function HID(...args: any[]): Pattern
declare function HIDConnectionEvent(...args: any[]): Pattern
declare function HIDDevice(...args: any[]): Pattern
declare function HIDInputReportEvent(...args: any[]): Pattern
declare function Hap(...args: any[]): Pattern
declare function IdentityCredential(...args: any[]): Pattern
declare function IdentityCredentialError(...args: any[]): Pattern
declare function IdentityProvider(...args: any[]): Pattern
declare function IdleDetector(...args: any[]): Pattern
declare function ImageCapture(...args: any[]): Pattern
declare function ImageDecoder(...args: any[]): Pattern
declare function ImageTrack(...args: any[]): Pattern
declare function ImageTrackList(...args: any[]): Pattern
declare function Keyboard(...args: any[]): Pattern
declare function KeyboardLayoutMap(...args: any[]): Pattern
declare function LanguageDetector(...args: any[]): Pattern
declare function LanguageModel(...args: any[]): Pattern
declare function LinearAccelerationSensor(...args: any[]): Pattern
declare function Lock(...args: any[]): Pattern
declare function LockManager(...args: any[]): Pattern
declare function MIDIAccess(...args: any[]): Pattern
declare function MIDIConnectionEvent(...args: any[]): Pattern
declare function MIDIInput(...args: any[]): Pattern
declare function MIDIInputMap(...args: any[]): Pattern
declare function MIDIMessageEvent(...args: any[]): Pattern
declare function MIDIOutput(...args: any[]): Pattern
declare function MIDIOutputMap(...args: any[]): Pattern
declare function MIDIPort(...args: any[]): Pattern
declare function MediaDeviceInfo(...args: any[]): Pattern
declare function MediaDevices(...args: any[]): Pattern
declare function MediaKeyMessageEvent(...args: any[]): Pattern
declare function MediaKeySession(...args: any[]): Pattern
declare function MediaKeyStatusMap(...args: any[]): Pattern
declare function MediaKeySystemAccess(...args: any[]): Pattern
declare function MediaKeys(...args: any[]): Pattern
declare function NavigationPreloadManager(...args: any[]): Pattern
declare function NavigatorLogin(...args: any[]): Pattern
declare function NavigatorManagedData(...args: any[]): Pattern
declare function OTPCredential(...args: any[]): Pattern
declare function OrientationSensor(...args: any[]): Pattern
declare function PasswordCredential(...args: any[]): Pattern
/**
 * Create a pattern. As an end user, you will most likely not create a Pattern directly.
 * @param query {function} The function that maps a State to an array of Hap.
 */
declare function Pattern(query?: any, ...more: any[]): Pattern
declare function PaymentAddress(...args: any[]): Pattern
declare function PaymentManager(...args: any[]): Pattern
declare function PaymentMethodChangeEvent(...args: any[]): Pattern
declare function PaymentRequest(...args: any[]): Pattern
declare function PaymentRequestUpdateEvent(...args: any[]): Pattern
declare function PaymentResponse(...args: any[]): Pattern
declare function Presentation(...args: any[]): Pattern
declare function PresentationAvailability(...args: any[]): Pattern
declare function PresentationConnection(...args: any[]): Pattern
declare function PresentationConnectionAvailableEvent(...args: any[]): Pattern
declare function PresentationConnectionCloseEvent(...args: any[]): Pattern
declare function PresentationConnectionList(...args: any[]): Pattern
declare function PresentationReceiver(...args: any[]): Pattern
declare function PresentationRequest(...args: any[]): Pattern
declare function PressureObserver(...args: any[]): Pattern
declare function PressureRecord(...args: any[]): Pattern
declare function ProtectedAudience(...args: any[]): Pattern
declare function PublicKeyCredential(...args: any[]): Pattern
declare function RelativeOrientationSensor(...args: any[]): Pattern
declare function ScreenDetailed(...args: any[]): Pattern
declare function ScreenDetails(...args: any[]): Pattern
declare function Sensor(...args: any[]): Pattern
declare function SensorErrorEvent(...args: any[]): Pattern
declare function Serial(...args: any[]): Pattern
declare function SerialPort(...args: any[]): Pattern
declare function ServiceWorker(...args: any[]): Pattern
declare function ServiceWorkerContainer(...args: any[]): Pattern
declare function ServiceWorkerRegistration(...args: any[]): Pattern
declare function SliderWidget(...args: any[]): Pattern
declare function SpeechRecognitionPhrase(...args: any[]): Pattern
declare const StartRules: any
declare function State(...args: any[]): Pattern
declare function StorageBucket(...args: any[]): Pattern
declare function StorageBucketManager(...args: any[]): Pattern
declare function StorageManager(...args: any[]): Pattern
declare function StrudelMirror(...args: any[]): Pattern
declare function SubtleCrypto(...args: any[]): Pattern
declare function Summarizer(...args: any[]): Pattern
declare function TimeSpan(...args: any[]): Pattern
declare function Translator(...args: any[]): Pattern
declare function USB(...args: any[]): Pattern
declare function USBAlternateInterface(...args: any[]): Pattern
declare function USBConfiguration(...args: any[]): Pattern
declare function USBConnectionEvent(...args: any[]): Pattern
declare function USBDevice(...args: any[]): Pattern
declare function USBEndpoint(...args: any[]): Pattern
declare function USBInTransferResult(...args: any[]): Pattern
declare function USBInterface(...args: any[]): Pattern
declare function USBIsochronousInTransferPacket(...args: any[]): Pattern
declare function USBIsochronousInTransferResult(...args: any[]): Pattern
declare function USBIsochronousOutTransferPacket(...args: any[]): Pattern
declare function USBIsochronousOutTransferResult(...args: any[]): Pattern
declare function USBOutTransferResult(...args: any[]): Pattern
declare function VideoDecoder(...args: any[]): Pattern
declare function VideoEncoder(...args: any[]): Pattern
declare const Vim: any
declare function VirtualKeyboard(...args: any[]): Pattern
declare function WGSLLanguageFeatures(...args: any[]): Pattern
declare function WakeLock(...args: any[]): Pattern
declare function WakeLockSentinel(...args: any[]): Pattern
declare const Warpmode: any
declare const WebMidi: any
declare function WebTransport(...args: any[]): Pattern
declare function WebTransportBidirectionalStream(...args: any[]): Pattern
declare function WebTransportDatagramDuplexStream(...args: any[]): Pattern
declare function WebTransportError(...args: any[]): Pattern
declare function Worklet(...args: any[]): Pattern
declare function XRAnchor(...args: any[]): Pattern
declare function XRAnchorSet(...args: any[]): Pattern
declare function XRBoundedReferenceSpace(...args: any[]): Pattern
declare function XRCPUDepthInformation(...args: any[]): Pattern
declare function XRCamera(...args: any[]): Pattern
declare function XRCompositionLayer(...args: any[]): Pattern
declare function XRCubeLayer(...args: any[]): Pattern
declare function XRCylinderLayer(...args: any[]): Pattern
declare function XRDOMOverlayState(...args: any[]): Pattern
declare function XRDepthInformation(...args: any[]): Pattern
declare function XREquirectLayer(...args: any[]): Pattern
declare function XRFrame(...args: any[]): Pattern
declare function XRHand(...args: any[]): Pattern
declare function XRHitTestResult(...args: any[]): Pattern
declare function XRHitTestSource(...args: any[]): Pattern
declare function XRInputSource(...args: any[]): Pattern
declare function XRInputSourceArray(...args: any[]): Pattern
declare function XRInputSourceEvent(...args: any[]): Pattern
declare function XRInputSourcesChangeEvent(...args: any[]): Pattern
declare function XRJointPose(...args: any[]): Pattern
declare function XRJointSpace(...args: any[]): Pattern
declare function XRLayer(...args: any[]): Pattern
declare function XRLayerEvent(...args: any[]): Pattern
declare function XRLightEstimate(...args: any[]): Pattern
declare function XRLightProbe(...args: any[]): Pattern
declare function XRPlane(...args: any[]): Pattern
declare function XRPlaneSet(...args: any[]): Pattern
declare function XRPose(...args: any[]): Pattern
declare function XRProjectionLayer(...args: any[]): Pattern
declare function XRQuadLayer(...args: any[]): Pattern
declare function XRRay(...args: any[]): Pattern
declare function XRReferenceSpace(...args: any[]): Pattern
declare function XRReferenceSpaceEvent(...args: any[]): Pattern
declare function XRRenderState(...args: any[]): Pattern
declare function XRRigidTransform(...args: any[]): Pattern
declare function XRSession(...args: any[]): Pattern
declare function XRSessionEvent(...args: any[]): Pattern
declare function XRSpace(...args: any[]): Pattern
declare function XRSubImage(...args: any[]): Pattern
declare function XRSystem(...args: any[]): Pattern
declare function XRTransientInputHitTestResult(...args: any[]): Pattern
declare function XRTransientInputHitTestSource(...args: any[]): Pattern
declare function XRView(...args: any[]): Pattern
declare function XRViewerPose(...args: any[]): Pattern
declare function XRViewport(...args: any[]): Pattern
declare function XRVisibilityMaskChangeEvent(...args: any[]): Pattern
declare function XRWebGLBinding(...args: any[]): Pattern
declare function XRWebGLDepthInformation(...args: any[]): Pattern
declare function XRWebGLLayer(...args: any[]): Pattern
declare function XRWebGLSubImage(...args: any[]): Pattern
declare function __chooseWith(...args: any[]): Pattern
declare function __pianoroll(...args: any[]): Pattern
declare function _brandBy(...args: any[]): Pattern
declare function _fitslice(...args: any[]): Pattern
declare function _irand(...args: any[]): Pattern
declare function _keyDown(...args: any[]): Pattern
declare function _match(...args: any[]): Pattern
declare function _mod(...args: any[]): Pattern
declare function _morph(...args: any[]): Pattern
declare function _polymeterListSteps(...args: any[]): Pattern
declare function _retime(...args: any[]): Pattern
declare function _slices(...args: any[]): Pattern
declare const _strudelLoaded: any
/**
 * A pattern of numbers that speed up (or slow down) samples while they play. Currently only supported by osc / superdirt.
 * @param amount {number | Pattern} acceleration.
 * @example
 * s("sax").accelerate("<0 1 2 4 8 16>").slow(2).osc()
 */
declare function accelerate(amount?: any, ...more: any[]): Pattern
declare function activateTheme(...args: any[]): Pattern
declare function activeLabel(...args: any[]): Pattern
declare function ad(...args: any[]): Pattern
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
declare function add(...args: any[]): Pattern
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
declare function addVoicings(name?: any, dictionary?: any, range?: any, ...more: any[]): Pattern
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
declare function adsr(time?: any, time?: any, gain?: any, time?: any, ...more: any[]): Pattern
/**
 * Register an alias for a bank of sounds.
 * Optionally accepts a single argument map of bank aliases.
 * Optionally accepts a single argument string of a path to a JSON file containing bank aliases.
 * @param bank {string} The bank to alias
 * @param alias {string} The alias to use for the bank
 */
declare function aliasBank(bank?: any, alias?: any, ...more: any[]): any
declare function all(...args: any[]): Pattern
/**
 * Shorthand for .sometimesBy(0.9, fn)
 * @example
 * s("hh*8").almostAlways(x=>x.speed("0.5"))
 */
declare function almostAlways(...args: any[]): Pattern
/**
 * Shorthand for .sometimesBy(0.1, fn)
 * @example
 * s("hh*8").almostNever(x=>x.speed("0.5"))
 */
declare function almostNever(...args: any[]): Pattern
/**
 * Shorthand for .sometimesBy(1, fn) (always calls fn)
 * @example
 * s("hh*8").always(x=>x.speed("0.5"))
 */
declare function always(...args: any[]): Pattern
/**
 * Like gain, but linear.
 * @param amount {number | Pattern} gain.
 * @example
 * s("bd*8").amp(".1*2 .5 .1*2 .5 .1 .5").osc()
 */
declare function amp(amount?: any, ...more: any[]): Pattern
declare const analysers: any
declare const analysersData: any
declare function analyze(...args: any[]): Pattern
/**
 * The top note to align the voicing to. Defaults to c5
 * @param anchorNote {string | Pattern} the note to align the voicings to
 * @example
 * anchor("<c4 g4 c5 g5>").chord("C").voicing()
 */
declare function anchor(anchorNote?: any, ...more: any[]): Pattern
declare function and(...args: any[]): Pattern
declare function angle(...args: any[]): Pattern
/**
 * Layers the result of the given function(s). Like superimpose, but without the original pattern:
 * Synonyms: apply
 * @example
 * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
 *   .layer(x=>x.add("0,2"))
 *   .scale('C minor').note()
 */
declare function apply(...args: any[]): Pattern
declare function applyFM(...args: any[]): Pattern
declare function applyGainCurve(...args: any[]): Pattern
declare function applyN(...args: any[]): Pattern
declare function applyParameterModulators(...args: any[]): Pattern
declare function ar(...args: any[]): Pattern
/**
 * Selects indices in in stacked notes.
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arp("0 [0,2] 1 [0,2]")
 */
declare function arp(...args: any[]): Pattern
/**
 * Selects indices in in stacked notes.
 * @example
 * note("<[c,eb,g]!2 [c,f,ab] [d,f,ab]>")
 * .arpWith(haps => haps[2])
 */
declare function arpWith(...args: any[]): Pattern
/**
 * Allows to arrange multiple patterns together over multiple cycles.
 * Takes a variable number of arrays with two elements specifying the number of cycles and the pattern to use.
 * @example
 * arrange(
 *   [4, "<c a f e>(3,8)"],
 *   [2, "<g a>(5,8)"]
 * ).note()
 */
declare function arrange(...args: any[]): Pattern
/**
 * Sets properties in a batch.
 * @param mapping {String | Array} the control names that are set
 * @example
 * "c:.5 a:1 f:.25 e:.8".as("note:clip")
 * @example
 * "{0@2 0.25 0 0.5 .3 .5}%8".as("begin").s("sax_vib").clip(1)
 */
declare function as(mapping?: any, ...more: any[]): Pattern
/**
 * Asymmetrical diode distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function asym(distortion?: any, volume?: any, ...more: any[]): Pattern
/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 * Synonyms: att
 * @param attack {number | Pattern} time in seconds.
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 */
declare function att(attack?: any, ...more: any[]): Pattern
/**
 * Amplitude envelope attack time: Specifies how long it takes for the sound to reach its peak value, relative to the onset.
 * Synonyms: att
 * @param attack {number | Pattern} time in seconds.
 * @example
 * note("c3 e3 f3 g3").attack("<0 .1 .5>")
 */
declare function attack(attack?: any, ...more: any[]): Pattern
declare function averageArray(...args: any[]): Pattern
declare function backgroundImage(...args: any[]): Pattern
declare function band(...args: any[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bandf(frequency?: any, ...more: any[]): Pattern
/**
 * Sets the band-pass q-factor (resonance).
 * Synonyms: bandq
 * @param q {number | Pattern} q factor
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 */
declare function bandq(q?: any, ...more: any[]): Pattern
/**
 * Select the sound bank to use. To be used together with s. The bank name (+ "_") will be prepended to the value of s.
 * @param bank {string | Pattern} the name of the bank
 * @example
 * s("bd sd [~ bd] sd").bank('RolandTR909') // = s("RolandTR909_bd RolandTR909_sd")
 */
declare function bank(bank?: any, ...more: any[]): Pattern
declare function base64ToUnicode(...args: any[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbexpr
 * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 */
declare function bbexpr(byteBeatExpression?: any, ...more: any[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbst
 * @param byteBeatStartTime {number | Pattern} in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 */
declare function bbst(byteBeatStartTime?: any, ...more: any[]): Pattern
/**
 * creates a structure pattern from divisions of a cycle
 * especially useful for creating rhythms
 * @example
 * s("bd").beat("0,7,10", 16)
 * @example
 * s("sd").beat("4,12", 16)
 */
declare function beat(...args: any[]): Pattern
/**
 * A pattern of numbers from 0 to 1. Skips the beginning of each sample, e.g. 0.25 to cut off the first quarter from each sample.
 * @param amount {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * samples({ rave: 'rave/AREUREADY.wav' }, 'github:tidalcycles/dirt-samples')
 * s("rave").begin("<0 .25 .5 .75>").fast(2)
 */
declare function begin(amount?: any, ...more: any[]): Pattern
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
declare function bgain(number?: any, ...more: any[]): Pattern
/**
 * Creates a binary pattern from a number.
 * @param n {number} input number to convert to binary
 * @example
 * "hh".s().struct(binary(5))
 * // "hh".s().struct("1 0 1")
 */
declare function binary(n?: any, ...more: any[]): Pattern
/**
 * Creates a binary list pattern from a number.
 * @param n {number} input number to convert to binary
s("saw").seg(8)
.partials(binaryL(irand(4096).add(1)))
 */
declare function binaryL(n?: any, ...more: any[]): Pattern
/**
 * Creates a binary pattern from a number, padded to n bits long.
 * @param n {number} input number to convert to binary
 * @param nBits {number} pattern length, defaults to 16
 * @example
 * "hh".s().struct(binaryN(55532, 16))
 * // "hh".s().struct("1 1 0 1 1 0 0 0 1 1 1 0 1 1 0 0")
 */
declare function binaryN(n?: any, nBits?: any, ...more: any[]): Pattern
/**
 * Creates a binary list pattern from a number, padded to n bits long.
 * @param n {number} input number to convert to binary
 * @param nBits {number} pattern length, defaults to 16
 */
declare function binaryNL(n?: any, nBits?: any, ...more: any[]): Pattern
declare function bind(...args: any[]): Pattern
declare function binshift(...args: any[]): Pattern
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
declare function bite(number?: any, slices?: any, ...more: any[]): Pattern
declare function bjork(...args: any[]): Pattern
declare function bjorklund(...args: any[]): Pattern
declare function blshift(...args: any[]): Pattern
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
declare function bmod(config?: any, id?: any, ...more: any[]): Pattern
declare function bor(...args: any[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bp(frequency?: any, ...more: any[]): Pattern
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
declare function bpa(attack?: any, ...more: any[]): Pattern
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
declare function bpattack(attack?: any, ...more: any[]): Pattern
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
declare function bpd(decay?: any, ...more: any[]): Pattern
/**
 * DC offset of the LFO for the bandpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function bpdc(dcoffset?: any, ...more: any[]): Pattern
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
declare function bpdecay(decay?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the bandpass filter
 * @param depth {number | Pattern} depth of modulation
 */
declare function bpdepth(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the bandpass filter, in HZ
 * Synonyms: bpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
declare function bpdepthfreq(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the bandpass filter, in HZ
 * Synonyms: bpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).bpdepthfrequency("<200 500 100 0>")
 */
declare function bpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
declare function bpe(modulation?: any, ...more: any[]): Pattern
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
declare function bpenv(modulation?: any, ...more: any[]): Pattern
/**
 * Sets the center frequency of the band-pass filter. When using mininotation, you
 * can also optionally supply the 'bpq' parameter separated by ':'.
 * Synonyms: bandf, bp
 * @param frequency {number | Pattern} center frequency
 * @example
 * s("bd sd [~ bd] sd,hh*6").bpf("<1000 2000 4000 8000>")
 */
declare function bpf(frequency?: any, ...more: any[]): Pattern
/**
 * Sets the band-pass q-factor (resonance).
 * Synonyms: bandq
 * @param q {number | Pattern} q factor
 * @example
 * s("bd sd [~ bd] sd").bpf(500).bpq("<0 1 2 3>")
 */
declare function bpq(q?: any, ...more: any[]): Pattern
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
declare function bpr(release?: any, ...more: any[]): Pattern
/**
 * Rate of the LFO for the bandpass filter
 * @param rate {number | Pattern} rate in hertz
 */
declare function bprate(rate?: any, ...more: any[]): Pattern
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
declare function bprelease(release?: any, ...more: any[]): Pattern
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
declare function bps(sustain?: any, ...more: any[]): Pattern
/**
 * Shape of the LFO for the bandpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function bpshape(shape?: any, ...more: any[]): Pattern
/**
 * Skew of the LFO for the bandpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function bpskew(skew?: any, ...more: any[]): Pattern
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
declare function bpsustain(sustain?: any, ...more: any[]): Pattern
/**
 * Cycle-synced rate of the LFO for the bandpass filter
 * @param rate {number | Pattern} rate in cycles
 */
declare function bpsync(rate?: any, ...more: any[]): Pattern
/**
 * Returns a new pattern where every other cycle is played once, twice as
 * fast, and offset in time by one quarter of a cycle. Creates a kind of
 * breakbeat feel.
 */
declare function brak(...args: any[]): Pattern
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
declare function brandBy(probability?: any, ...more: any[]): Pattern
declare function brshift(...args: any[]): Pattern
/**
 * A bus is a send which can be used for mixing patterns. It combines with..
 * s("bus") to play that bus through another pattern (for, say, applying non-linear
 * effects like distortion to multiple signals)
 * otherPat.bmod(..) (to modulate another pattern with the bus)
 * @param number {number | Pattern}
 */
declare function bus(number?: any, ...more: any[]): Pattern
/**
 * Postgain multiplier prior to sending the signal to the audio bus.
 * Synonyms: bgain
 * @param number {number | Pattern}
 */
declare function busgain(number?: any, ...more: any[]): Pattern
declare function bxor(...args: any[]): Pattern
declare function bypass(...args: any[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbexpr
 * @param byteBeatExpression {number | Pattern} bitwise expression for creating bytebeat
 * @example
 * s("bytebeat").bbexpr('t*(t>>15^t>>66)')
 */
declare function byteBeatExpression(byteBeatExpression?: any, ...more: any[]): Pattern
/**
 * Create byte beats with custom expressions
 * Synonyms: bbst
 * @param byteBeatStartTime {number | Pattern} in samples (t)
 * @example
 * note("c3!8".add("{0 0 12 0 7 5 3}%8")).s("bytebeat:5").bbst("<3 1>".mul(10000))._scope()
 */
declare function byteBeatStartTime(byteBeatStartTime?: any, ...more: any[]): Pattern
declare const caches: any
declare function calculateSteps(...args: any[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 * Synonyms: cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 */
declare function cat(...args: any[]): Pattern
/**
 * MIDI control number: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control number (0-127)
 */
declare function ccn(MIDI?: any, ...more: any[]): Pattern
/**
 * MIDI control value: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control value (0-127)
 */
declare function ccv(MIDI?: any, ...more: any[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values set to
 * their mathematical ceiling. E.g. 3.2 replaced with 4, and -4.2
 * replaced with -4.
 * @example
 * note("42 42.1 42.5 43".ceil())
 */
declare function ceil(...args: any[]): Pattern
/**
 * Allows you to set the output channels on the interface
 * Synonyms: ch
 * @param channels {number | Pattern} pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 */
declare function ch(channels?: any, ...more: any[]): Pattern
/**
 * Choose the channel the pattern is sent to in superdirt
 * @param channel {number | Pattern} channel number
 */
declare function channel(channel?: any, ...more: any[]): Pattern
/**
 * Allows you to set the output channels on the interface
 * Synonyms: ch
 * @param channels {number | Pattern} pattern the output channels
 * @example
 * note("e a d b g").channels("3:4")
 */
declare function channels(channels?: any, ...more: any[]): Pattern
/**
 * Distortion via Chebyshev polynomials
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function chebyshev(distortion?: any, volume?: any, ...more: any[]): Pattern
/**
 * Chooses randomly from the given list of elements.
 * @param xs {any} values / patterns to choose from.
 * @example
 * note("c2 g2!2 d2 f1").s(choose("sine", "triangle", "bd:6"))
 */
declare function choose(xs?: any, ...more: any[]): Pattern
/**
 * Picks one of the elements at random each cycle.
 * Synonyms: randcat
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
declare function chooseCycles(...args: any[]): Pattern
declare function chooseIn(...args: any[]): Pattern
/**
 * As with {chooseWith}, but the structure comes from the chosen values, rather
 * than the pattern you're using to choose with.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function chooseInWith(pat?: any, xs?: any, ...more: any[]): Pattern
declare function chooseOut(...args: any[]): Pattern
/**
 * Choose from the list of values (or patterns of values) using the given
 * pattern of numbers, which should be in the range of 0..1
 * @param pat {Pattern}
 * @param xs {*}
 * @example
 * note("c2 g2!2 d2 f1").s(chooseWith(sine.fast(2), ["sawtooth", "triangle", "bd:6"]))
 */
declare function chooseWith(pat?: any, xs?: any, ...more: any[]): Pattern
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
declare function chop(...args: any[]): Pattern
/**
 * The chord to voice
 * @param symbols {string | Pattern} chord symbols to voice e.g., C, Eb, Fm7, G7. The symbols can be defined via addVoicings
 * @example
 * chord("<Am C D F Am E Am E>").voicing()
 */
declare function chord(symbols?: any, ...more: any[]): Pattern
/**
 * mix control for the chorus effect
 * @param chorus {string | Pattern} mix amount between 0 and 1
 * @example
 * note("d d a# a").s("sawtooth").chorus(.5)
 */
declare function chorus(chorus?: any, ...more: any[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunk(...args: any[]): Pattern
/**
 * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
 * Synonyms: chunkback
 * @example
 * "0 1 2 3".chunkBack(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunkBack(...args: any[]): Pattern
/**
 * Like chunkInto, but moves backwards through the chunks.
 * Synonyms: chunkbackinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkBackInto(...args: any[]): Pattern
/**
 * Like chunk, but the function is applied to a looped subcycle of the source pattern.
 * Synonyms: chunkinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkInto(...args: any[]): Pattern
/**
 * Like chunk, but cycles through the parts in reverse order. Known as chunk' in tidalcycles
 * Synonyms: chunkback
 * @example
 * "0 1 2 3".chunkBack(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function chunkback(...args: any[]): Pattern
/**
 * Like chunkInto, but moves backwards through the chunks.
 * Synonyms: chunkbackinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkbackinto(...args: any[]): Pattern
/**
 * Like chunk, but the function is applied to a looped subcycle of the source pattern.
 * Synonyms: chunkinto
 * @example
 * sound("bd sd ht lt bd - cp lt").chunkInto(4, hurry(2))
 *   .bank("tr909")
 */
declare function chunkinto(...args: any[]): Pattern
declare function clamp(...args: any[]): Pattern
declare function cleanupDraw(...args: any[]): Pattern
declare function cleanupOnEnd(...args: any[]): Pattern
declare function cleanupUi(...args: any[]): Pattern
declare function clearHydra(...args: any[]): Pattern
/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 * Synonyms: legato
 * @param factor {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 */
declare function clip(factor?: any, ...more: any[]): Pattern
/**
 * Fake-resampling for lowering the sample rate. Caution: This effect seems to only work in chromium based browsers
 * @param factor {number | Pattern} 1 for original 2 for half, 3 for a third and so on.
 * @example
 * s("bd sd [~ bd] sd,hh*8").coarse("<1 4 8 16 32>")
 */
declare function coarse(factor?: any, ...more: any[]): Pattern
declare function code2hash(...args: any[]): Pattern
declare const codemirrorSettings: any
/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * Synonyms: colour
 * @param color {string} Hexadecimal or CSS color name
 */
declare function color(color?: any, ...more: any[]): Pattern
declare const colorMap: any
/**
 * Sets the color of the hap in visualizations like pianoroll or highlighting.
 * Synonyms: colour
 * @param color {string} Hexadecimal or CSS color name
 */
declare const colour: any
declare function comb(...args: any[]): Pattern
declare const compartments: any
declare const complex: any
declare function compose(...args: any[]): Pattern
/**
 * Compress each cycle into the given timespan, leaving a gap
 * @example
 * cat(
 *   s("bd sd").compress(.25,.75),
 *   s("~ bd sd ~")
 * )
 */
declare function compress(...args: any[]): Pattern
declare function compressSpan(...args: any[]): Pattern
/**
 * Dynamics Compressor. The params are compressor("threshold:ratio:knee:attack:release")
 * More info here
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02")
 */
declare function compressor(...args: any[]): Pattern
declare function compressorAttack(...args: any[]): Pattern
declare function compressorKnee(...args: any[]): Pattern
declare function compressorRatio(...args: any[]): Pattern
declare function compressorRelease(...args: any[]): Pattern
declare function compressspan(...args: any[]): Pattern
declare function connectBusModulator(...args: any[]): Pattern
declare function connectEnvelope(...args: any[]): Pattern
declare function connectLFO(...args: any[]): Pattern
declare function connectToDestination(...args: any[]): Pattern
declare function constant(...args: any[]): Pattern
/**
 * Experimental
 * Contracts the step size of the pattern by the given factor. See also expand.
 * @example
 * sound("tha dhi thom nam").bank("mridangam").contract("3 2 1 1 2 3").pace(8)
 */
declare function contract(...args: any[]): Pattern
/**
 * MIDI control: Sends a MIDI control change message.
 * @param MIDI {number | Pattern} control number (0-127)
 * @param MIDI {number | Pattern} controller value (0-127)
 */
declare function control(MIDI?: any, MIDI?: any, ...more: any[]): Pattern
declare const controls: any
declare function convertColorToNumber(...args: any[]): Pattern
declare function convertHexToNumber(...args: any[]): Pattern
declare const cookieStore: any
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
declare function cpm(...args: any[]): Pattern
declare function cps(...args: any[]): Pattern
declare function createClock(...args: any[]): Pattern
declare function createFilter(...args: any[]): Pattern
declare function createParam(...args: any[]): Pattern
declare function createParams(...args: any[]): Pattern
/**
 * Bit crusher effect.
 * @param depth {number | Pattern} between 1 (for drastic reduction in bit-depth) to 16 (for barely no reduction).
 * @example
 * s("<bd sd>,hh*3").fast(2).crush("<16 8 7 6 5 4 3 2>")
 */
declare function crush(depth?: any, ...more: any[]): Pattern
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
declare function ctf(frequency?: any, ...more: any[]): Pattern
declare function ctlNum(...args: any[]): Pattern
declare function ctranspose(...args: any[]): Pattern
/**
 * Cubic polynomial distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function cubic(distortion?: any, volume?: any, ...more: any[]): Pattern
declare function curry(...args: any[]): Pattern
declare function curve(...args: any[]): Pattern
/**
 * In the style of classic drum-machines, cut will stop a playing sample as soon as another samples with in same cutgroup is to be played. An example would be an open hi-hat followed by a closed one, essentially muting the open.
 * @param group {number | Pattern} cut group number
 * @example
 * s("[oh hh]*4").cut(1)
 */
declare function cut(group?: any, ...more: any[]): Pattern
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
declare function cutoff(frequency?: any, ...more: any[]): Pattern
declare function cycleToSeconds(...args: any[]): Pattern
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
declare function dec(time?: any, ...more: any[]): Pattern
/**
 * Amplitude envelope decay time: the time it takes after the attack time to reach the sustain level.
 * Note that the decay is only audible if the sustain value is lower than 1.
 * Synonyms: dec
 * @param time {number | Pattern} decay time in seconds
 * @example
 * note("c3 e3 f3 g3").decay("<.1 .2 .3 .4>").sustain(0)
 */
declare function decay(time?: any, ...more: any[]): Pattern
declare const defaultSettings: any
/**
 * configures the default midimap, which is used when no "midimap" port is set
 * @example
 * defaultmidimap({ lpf: 74 })
 * $: note("c a f e").midi();
 * $: lpf(sine.slow(4).segment(16)).midi();
 */
declare function defaultmidimap(...args: any[]): Pattern
/**
 * Randomly removes 50% of events from the pattern. Shorthand for .degradeBy(0.5)
 * @example
 * s("hh*8").degrade()
 * @example
 * s("[hh?]*8")
 */
declare function degrade(...args: any[]): Pattern
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
declare function degradeBy(amount?: any, ...more: any[]): Pattern
declare function degradeByWith(...args: any[]): Pattern
declare function degree(...args: any[]): Pattern
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
declare function delay(level?: any, ...more: any[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function delayfb(feedback?: any, ...more: any[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function delayfeedback(feedback?: any, ...more: any[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function delayspeed(delayspeed?: any, ...more: any[]): Pattern
/**
 * Sets the time of the delay effect in cycles.
 * Synonyms: delayt, dt
 * @param cycles {number | Pattern} delay length in cycles
 * @example
 * s("bd bd").delay(.25).delaysync("<1 2 3 5>".div(8))
 */
declare function delaysync(cycles?: any, ...more: any[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function delayt(delayspeed?: any, ...more: any[]): Pattern
declare function delaytime(...args: any[]): Pattern
declare function deltaSlide(...args: any[]): Pattern
/**
 * Set detune for stacked voices of supported oscillators
 * Synonyms: det
 * @param amount {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 */
declare function det(amount?: any, ...more: any[]): Pattern
/**
 * Set detune for stacked voices of supported oscillators
 * Synonyms: det
 * @param amount {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").detune("<.1 .2 .5 24.1>")
 */
declare function detune(amount?: any, ...more: any[]): Pattern
/**
 * Sets the level of the signal that is fed back into the delay.
 * Caution: Values >= 1 will result in a signal that gets louder and louder! Don't do it
 * Synonyms: delayfb, dfb
 * @param feedback {number | Pattern} between 0 and 1
 * @example
 * s("bd").delay(.25).delayfeedback("<.25 .5 .75 1>")
 */
declare function dfb(feedback?: any, ...more: any[]): Pattern
declare function dict(...args: any[]): Pattern
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
declare function dictionary(dictionaryName?: any, ...more: any[]): Pattern
/**
 * Diode-emulating distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function diode(distortion?: any, volume?: any, ...more: any[]): Pattern
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
declare function dist(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
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
declare function distort(distortion?: any, volume?: any, type?: any, ...more: any[]): Pattern
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
declare function distorttype(type?: any, ...more: any[]): Pattern
/**
 * Postgain for waveshaping distortion.
 * Synonyms: distvol
 * @param volume {number | Pattern} linear postgain of the distortion
 * @example
 * s("bd*4").bank("tr909").distort(2).distortvol(0.8)
 */
declare function distortvol(volume?: any, ...more: any[]): Pattern
/**
 * Divides each number by the given factor.
 */
declare function div(...args: any[]): Pattern
/**
 * DJ filter, below 0.5 is low pass filter, above is high pass filter.
 * @param cutoff {number | Pattern} below 0.5 is low pass filter, above is high pass filter
 * @example
 * n(irand(16).seg(8)).scale("d:phrygian").s("supersaw").djf("<.5 .3 .2 .75>")
 */
declare function djf(cutoff?: any, ...more: any[]): Pattern
declare const documentPictureInPicture: any
declare function dough(...args: any[]): Pattern
declare function doughTrigger(...args: any[]): Pattern
declare function doughsamples(...args: any[]): Pattern
declare function drawFrequencyScope(...args: any[]): Pattern
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
declare function drawLine(pattern?: any, chars?: any, ...more: any[]): Pattern
declare function drawPianoroll(...args: any[]): Pattern
declare function drawTimeScope(...args: any[]): Pattern
/**
 * Filter overdrive for supported filter types
 * @param amount {number | Pattern}
 * @example
 * note("{f g g c d a a#}%16".sub(17)).s("supersaw").lpenv(8).lpf(150).lpq(.8).ftype('ladder').drive("<.5 4>")
 */
declare function drive(amount?: any, ...more: any[]): Pattern
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
declare function drop(...args: any[]): Pattern
/**
 * Set dryness of reverb. See room and size for more information about reverb.
 * @param dry {number | Pattern} 0 = wet, 1 = dry
 * @example
 * n("[0,3,7](3,8)").s("superpiano").room(.7).dry("<0 .5 .75 1>").osc()
 */
declare function dry(dry?: any, ...more: any[]): Pattern
declare function drywet(...args: any[]): Pattern
declare function ds(...args: any[]): Pattern
declare function dspWorklet(...args: any[]): Pattern
/**
 * Sets the time of the delay effect.
 * Synonyms: delayt, dt
 * @param delayspeed {number | Pattern} controls the pitch of the delay feedback
 * @example
 * note("d d a# a".fast(2)).s("sawtooth").delay(.8).delaytime(1/2).delayspeed("<2 .5 -1 -2>")
 */
declare function dt(delayspeed?: any, ...more: any[]): Pattern
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
declare function duck(orbit?: any, ...more: any[]): Pattern
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
declare function duckattack(time?: any, ...more: any[]): Pattern
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
declare function duckdepth(depth?: any, ...more: any[]): Pattern
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
declare function duckonset(time?: any, ...more: any[]): Pattern
/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 * Synonyms: dur
 * @param seconds {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 */
declare function dur(seconds?: any, ...more: any[]): Pattern
/**
 * Sets the duration of the event in cycles. Similar to clip / legato, it also cuts samples off at the end if they exceed the duration.
 * Synonyms: dur
 * @param seconds {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").dur("<.5 1 2>")
 */
declare function duration(seconds?: any, ...more: any[]): Pattern
/**
 * Applies a function to each of the running patterns separately. This is intended for future use with upcoming 'stepwise' features. See all for a version that applies the function to all the patterns stacked together into a single pattern.
 * $: sound("bd - cp sd")
 * $: sound("hh*8")
 * each(fast("<2 3>"))
 */
declare function each(...args: any[]): Pattern
/**
 * Nudge a pattern to start earlier in time. Equivalent of Tidal's <~ operator
 * @param cycles {number | Pattern} number of cycles to nudge left
 * @example
 * "bd ~".stack("hh ~".early(.1)).s()
 */
declare function early(cycles?: any, ...more: any[]): Pattern
/**
 * Superimpose and offset multiple times, gradually decreasing the velocity
 * @param times {number} how many times to repeat
 * @param time {number} cycle offset between iterations
 * @param feedback {number} velocity multiplicator for each iteration
 * @example
 * s("bd sd").echo(3, 1/6, .8)
 */
declare function echo(times?: any, time?: any, feedback?: any, ...more: any[]): Pattern
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
declare function echoWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
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
declare function echowith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
declare function effectSend(...args: any[]): Pattern
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
declare function eish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
declare function enableWebMidi(...args: any[]): Pattern
/**
 * The same as .begin, but cuts off the end off each sample.
 * @param length {number | Pattern} 1 = whole sample, .5 = half sample, .25 = quarter sample etc..
 * @example
 * s("bd*2,oh*4").end("<.1 .2 .5 1>").fast(2)
 */
declare function end(length?: any, ...more: any[]): Pattern
declare function enhance(...args: any[]): Pattern
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
declare function env(config?: any, id?: any, ...more: any[]): Pattern
declare function eq(...args: any[]): Pattern
declare function eqt(...args: any[]): Pattern
declare function errorLogger(...args: any[]): Pattern
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
declare function euclid(pulses?: any, steps?: any, ...more: any[]): Pattern
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
declare function euclidRot(pulses?: any, steps?: any, rotation?: any, ...more: any[]): Pattern
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
declare function euclidish(pulses?: any, steps?: any, groove?: any, ...more: any[]): Pattern
declare function euclidrot(...args: any[]): Pattern
declare function evalScope(...args: any[]): any
declare function evaluate(...args: any[]): Pattern
/**
 * An alias for firstOf
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").every(4, x=>x.rev())
 */
declare function every(n?: any, func?: any, ...more: any[]): Pattern
/**
 * Experimental
 * Expands the step size of the pattern by the given factor.
 * @example
 * sound("tha dhi thom nam").bank("mridangam").expand("3 2 1 1 2 3").pace(8)
 */
declare function expand(...args: any[]): Pattern
declare function expression(...args: any[]): Pattern
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
declare function extend(...args: any[]): Pattern
declare const extensions: any
declare function fadeInTime(...args: any[]): Pattern
declare function fadeOutTime(...args: any[]): Pattern
declare function fadeTime(...args: any[]): Pattern
/**
 * controls the center of the filter envelope. 0 is unipolar positive, .5 is bipolar, 1 is unipolar negative
 * @param center {number | Pattern} 0 to 1
 * @example
 * note("{f g g c d a a#}%8").s("sawtooth").lpf("{1000}%2")
 * .lpenv(8).fanchor("<0 .5 1>")
 */
declare function fanchor(center?: any, ...more: any[]): Pattern
/**
 * Speed up a pattern by the given factor. Used by "*" in mini notation.
 * Synonyms: density
 * @param factor {number | Pattern} speed up factor
 * @example
 * s("bd hh sd hh").fast(2) // s("[bd hh sd hh]*2")
 */
declare function fast(factor?: any, ...more: any[]): Pattern
/**
 * Like chunk, but the cycles of the source pattern aren't repeated
 * for each set of chunks.
 * Synonyms: fastchunk
 * @example
 * "<0 8> 1 2 3 4 5 6 7"
 * .scale("C2:major").note()
 * .fastChunk(4, x => x.color('red')).slow(2)
 */
declare function fastChunk(...args: any[]): Pattern
/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * Synonyms: fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
declare function fastGap(...args: any[]): Pattern
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
declare function fastcat(...args: any[]): Pattern
/**
 * Like chunk, but the cycles of the source pattern aren't repeated
 * for each set of chunks.
 * Synonyms: fastchunk
 * @example
 * "<0 8> 1 2 3 4 5 6 7"
 * .scale("C2:major").note()
 * .fastChunk(4, x => x.color('red')).slow(2)
 */
declare function fastchunk(...args: any[]): Pattern
/**
 * speeds up a pattern like fast, but rather than it playing multiple times as fast would it instead leaves a gap in the remaining space of the cycle. For example, the following will play the sound pattern "bd sn" only once but compressed into the first half of the cycle, i.e. twice as fast.
 * Synonyms: fastgap
 * @example
 * s("bd sd").fastGap(2)
 */
declare function fastgap(...args: any[]): Pattern
declare function fetchLater(...args: any[]): Pattern
declare function fft(...args: any[]): Pattern
declare function fill(...args: any[]): Pattern
/**
 * Filters haps using the given function
 * @param test {function} function to test Hap
 * @example
 * s("hh!7 oh").filter(hap => hap.value.s === 'hh')
 */
declare function filter(test?: any, ...more: any[]): Pattern
/**
 * Filters haps by their begin time
 * @param test {function} function to test Hap.whole.begin
 * @example
 * oneCycle: s("bd*4").filterWhen((t) => t < 1)
 */
declare function filterWhen(test?: any, ...more: any[]): Pattern
/**
 * Applies the given function every n cycles, starting from the first cycle.
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").firstOf(4, x=>x.rev())
 */
declare function firstOf(n?: any, func?: any, ...more: any[]): Pattern
/**
 * Makes the sample fit its event duration. Good for rhythmical loops like drum breaks.
 * Similar to loopAt.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes/2").fit()
 */
declare function fit(...args: any[]): Pattern
declare function flash(...args: any[]): Pattern
declare const flashField: any
declare function flatten(...args: any[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values set to
 * their mathematical floor. E.g. 3.7 replaced with to 3, and -4.2
 * replaced with -5.
 * @example
 * note("42 42.1 42.5 43".floor())
 */
declare function floor(...args: any[]): Pattern
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
declare function fm(brightness?: any, ...more: any[]): Pattern
declare function fm1(...args: any[]): Pattern
declare function fm2(...args: any[]): Pattern
declare function fm3(...args: any[]): Pattern
declare function fm4(...args: any[]): Pattern
declare function fm5(...args: any[]): Pattern
declare function fm6(...args: any[]): Pattern
declare function fm7(...args: any[]): Pattern
declare function fm8(...args: any[]): Pattern
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
declare function fmatt(time?: any, ...more: any[]): Pattern
declare function fmatt1(...args: any[]): Pattern
declare function fmatt2(...args: any[]): Pattern
declare function fmatt3(...args: any[]): Pattern
declare function fmatt4(...args: any[]): Pattern
declare function fmatt5(...args: any[]): Pattern
declare function fmatt6(...args: any[]): Pattern
declare function fmatt7(...args: any[]): Pattern
declare function fmatt8(...args: any[]): Pattern
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
declare function fmattack(time?: any, ...more: any[]): Pattern
declare function fmattack1(...args: any[]): Pattern
declare function fmattack2(...args: any[]): Pattern
declare function fmattack3(...args: any[]): Pattern
declare function fmattack4(...args: any[]): Pattern
declare function fmattack5(...args: any[]): Pattern
declare function fmattack6(...args: any[]): Pattern
declare function fmattack7(...args: any[]): Pattern
declare function fmattack8(...args: any[]): Pattern
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
declare function fmdec(time?: any, ...more: any[]): Pattern
declare function fmdec1(...args: any[]): Pattern
declare function fmdec2(...args: any[]): Pattern
declare function fmdec3(...args: any[]): Pattern
declare function fmdec4(...args: any[]): Pattern
declare function fmdec5(...args: any[]): Pattern
declare function fmdec6(...args: any[]): Pattern
declare function fmdec7(...args: any[]): Pattern
declare function fmdec8(...args: any[]): Pattern
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
declare function fmdecay(time?: any, ...more: any[]): Pattern
declare function fmdecay1(...args: any[]): Pattern
declare function fmdecay2(...args: any[]): Pattern
declare function fmdecay3(...args: any[]): Pattern
declare function fmdecay4(...args: any[]): Pattern
declare function fmdecay5(...args: any[]): Pattern
declare function fmdecay6(...args: any[]): Pattern
declare function fmdecay7(...args: any[]): Pattern
declare function fmdecay8(...args: any[]): Pattern
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
declare function fmenv(type?: any, ...more: any[]): Pattern
declare function fmenv1(...args: any[]): Pattern
declare function fmenv2(...args: any[]): Pattern
declare function fmenv3(...args: any[]): Pattern
declare function fmenv4(...args: any[]): Pattern
declare function fmenv5(...args: any[]): Pattern
declare function fmenv6(...args: any[]): Pattern
declare function fmenv7(...args: any[]): Pattern
declare function fmenv8(...args: any[]): Pattern
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
declare function fmh(harmonicity?: any, ...more: any[]): Pattern
declare function fmh1(...args: any[]): Pattern
declare function fmh2(...args: any[]): Pattern
declare function fmh3(...args: any[]): Pattern
declare function fmh4(...args: any[]): Pattern
declare function fmh5(...args: any[]): Pattern
declare function fmh6(...args: any[]): Pattern
declare function fmh7(...args: any[]): Pattern
declare function fmh8(...args: any[]): Pattern
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
declare function fmi(brightness?: any, ...more: any[]): Pattern
declare function fmi1(...args: any[]): Pattern
declare function fmi2(...args: any[]): Pattern
declare function fmi3(...args: any[]): Pattern
declare function fmi4(...args: any[]): Pattern
declare function fmi5(...args: any[]): Pattern
declare function fmi6(...args: any[]): Pattern
declare function fmi7(...args: any[]): Pattern
declare function fmi8(...args: any[]): Pattern
/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. fmrel8)
 * Synonyms: fmrel
 * @param time {number | Pattern} release time
 */
declare function fmrel(time?: any, ...more: any[]): Pattern
declare function fmrel1(...args: any[]): Pattern
declare function fmrel2(...args: any[]): Pattern
declare function fmrel3(...args: any[]): Pattern
declare function fmrel4(...args: any[]): Pattern
declare function fmrel5(...args: any[]): Pattern
declare function fmrel6(...args: any[]): Pattern
declare function fmrel7(...args: any[]): Pattern
declare function fmrel8(...args: any[]): Pattern
/**
 * Release time for the FM envelope: how much modulation is applied after the note is released
 * A number may be added afterwards to control the release of the envelope of
 * any of the 8 individual FMs (e.g. fmrel8)
 * Synonyms: fmrel
 * @param time {number | Pattern} release time
 */
declare function fmrelease(time?: any, ...more: any[]): Pattern
declare function fmrelease1(...args: any[]): Pattern
declare function fmrelease2(...args: any[]): Pattern
declare function fmrelease3(...args: any[]): Pattern
declare function fmrelease4(...args: any[]): Pattern
declare function fmrelease5(...args: any[]): Pattern
declare function fmrelease6(...args: any[]): Pattern
declare function fmrelease7(...args: any[]): Pattern
declare function fmrelease8(...args: any[]): Pattern
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
declare function fmsus(level?: any, ...more: any[]): Pattern
declare function fmsus1(...args: any[]): Pattern
declare function fmsus2(...args: any[]): Pattern
declare function fmsus3(...args: any[]): Pattern
declare function fmsus4(...args: any[]): Pattern
declare function fmsus5(...args: any[]): Pattern
declare function fmsus6(...args: any[]): Pattern
declare function fmsus7(...args: any[]): Pattern
declare function fmsus8(...args: any[]): Pattern
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
declare function fmsustain(level?: any, ...more: any[]): Pattern
declare function fmsustain1(...args: any[]): Pattern
declare function fmsustain2(...args: any[]): Pattern
declare function fmsustain3(...args: any[]): Pattern
declare function fmsustain4(...args: any[]): Pattern
declare function fmsustain5(...args: any[]): Pattern
declare function fmsustain6(...args: any[]): Pattern
declare function fmsustain7(...args: any[]): Pattern
declare function fmsustain8(...args: any[]): Pattern
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
declare function fmwave(wave?: any, ...more: any[]): Pattern
declare function fmwave1(...args: any[]): Pattern
declare function fmwave2(...args: any[]): Pattern
declare function fmwave3(...args: any[]): Pattern
declare function fmwave4(...args: any[]): Pattern
declare function fmwave5(...args: any[]): Pattern
declare function fmwave6(...args: any[]): Pattern
declare function fmwave7(...args: any[]): Pattern
declare function fmwave8(...args: any[]): Pattern
declare function focusSpan(...args: any[]): Pattern
declare function focusspan(...args: any[]): Pattern
/**
 * Wavefolding distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function fold(distortion?: any, volume?: any, ...more: any[]): Pattern
declare function fractionalArgs(...args: any[]): Pattern
declare function frameRate(...args: any[]): Pattern
declare function freeze(...args: any[]): Pattern
/**
 * Set frequency of sound.
 * @param frequency {number | Pattern} in Hz. the audible range is between 20 and 20000 Hz
 * @example
 * freq("220 110 440 110").s("superzow").osc()
 * @example
 * freq("110".mul.out(".5 1.5 .6 [2 3]")).s("superzow").osc()
 */
declare function freq(frequency?: any, ...more: any[]): Pattern
declare function freqToMidi(...args: any[]): Pattern
/**
 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
 * Returns a new pattern with values scaled to the unipolar range 0 .. 1
 */
declare function fromBipolar(...args: any[]): Pattern
declare function fshift(...args: any[]): Pattern
declare function fshiftnote(...args: any[]): Pattern
declare function fshiftphase(...args: any[]): Pattern
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
declare function ftype(type?: any, ...more: any[]): Pattern
declare function func(...args: any[]): Pattern
declare function fxr(...args: any[]): Pattern
/**
 * Controls the gain by an exponential amount.
 * @param amount {number | Pattern} gain.
 * @example
 * s("hh*8").gain(".4!2 1 .4!2 1 .4 1").fast(2)
 */
declare function gain(amount?: any, ...more: any[]): Pattern
declare function gainNode(...args: any[]): Pattern
/**
 * Does absolutely nothing, but with a given metrical 'steps'
 * @param steps {number}
 * @example
 * gap(3) // "~@3"
 */
declare function gap(steps?: any, ...more: any[]): Pattern
declare function gat(...args: any[]): Pattern
declare function gate(...args: any[]): Pattern
declare function getADSRValues(...args: any[]): Pattern
declare function getAccidentalsOffset(...args: any[]): Pattern
declare function getAnalyserById(...args: any[]): Pattern
declare function getAnalyzerData(...args: any[]): Pattern
declare function getAudioContext(...args: any[]): any
declare function getAudioContextCurrentTime(...args: any[]): Pattern
declare function getAudioDevices(...args: any[]): Pattern
declare function getCachedBuffer(...args: any[]): Pattern
declare function getCompressor(...args: any[]): Pattern
declare function getComputedPropertyValue(...args: any[]): Pattern
declare function getControlName(...args: any[]): Pattern
declare function getCps(...args: any[]): Pattern
declare function getCurrentKeyboardState(...args: any[]): Pattern
declare function getDefaultValue(...args: any[]): Pattern
declare function getDistortion(...args: any[]): Pattern
declare function getDistortionAlgorithm(...args: any[]): Pattern
declare function getDrawContext(...args: any[]): Pattern
declare function getDrawOptions(...args: any[]): Pattern
declare function getEnvelope(...args: any[]): Pattern
declare function getEventOffsetMs(...args: any[]): Pattern
declare function getFontBufferSource(...args: any[]): Pattern
/**
 *
 */
declare function getFreq(...args: any[]): Pattern
declare function getFrequency(...args: any[]): Pattern
declare function getFrequencyFromValue(...args: any[]): Pattern
declare function getIsStarted(...args: any[]): Pattern
declare function getLeafLocation(...args: any[]): Pattern
declare function getLeafLocations(...args: any[]): Pattern
declare function getLeaves(...args: any[]): Pattern
declare function getLfo(...args: any[]): Pattern
declare function getLoadedBuffer(...args: any[]): Pattern
declare function getOscillator(...args: any[]): Pattern
declare function getParamADSR(...args: any[]): Pattern
declare function getParamLfo(...args: any[]): Pattern
declare function getPattern(...args: any[]): Pattern
declare function getPerformanceTimeSeconds(...args: any[]): Pattern
declare function getPitchEnvelope(...args: any[]): Pattern
declare function getPlayableNoteValue(...args: any[]): Pattern
declare function getPunchcardPainter(...args: any[]): Pattern
declare function getRandsAtTime(...args: any[]): Pattern
declare function getSampleBuffer(...args: any[]): Pattern
declare function getSampleBufferSource(...args: any[]): Pattern
declare function getSampleInfo(...args: any[]): Pattern
declare function getScreenDetails(...args: any[]): Pattern
declare function getSound(...args: any[]): Pattern
declare function getSoundIndex(...args: any[]): Pattern
declare function getSuperdoughAudioController(...args: any[]): Pattern
declare function getTheme(...args: any[]): Pattern
declare function getTime(...args: any[]): Pattern
declare function getTrigger(...args: any[]): Pattern
declare function getTriggerFunc(...args: any[]): Pattern
declare function getVibratoOscillator(...args: any[]): Pattern
declare function getWorklet(...args: any[]): Pattern
declare function getZZFX(...args: any[]): Pattern
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
declare function grow(...args: any[]): Pattern
declare function gt(...args: any[]): Pattern
declare function gte(...args: any[]): Pattern
declare function h(...args: any[]): Pattern
/**
 * Hard-clipping distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function hard(distortion?: any, volume?: any, ...more: any[]): Pattern
declare function harmonic(...args: any[]): Pattern
declare function hash2code(...args: any[]): Pattern
declare function hbrick(...args: any[]): Pattern
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
declare function hcutoff(frequency?: any, ...more: any[]): Pattern
declare const highlightExtension: any
declare function highlightMiniLocations(...args: any[]): Pattern
declare function hold(...args: any[]): Pattern
declare function hours(...args: any[]): Pattern
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
declare function hp(frequency?: any, ...more: any[]): Pattern
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
declare function hpa(attack?: any, ...more: any[]): Pattern
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
declare function hpattack(attack?: any, ...more: any[]): Pattern
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
declare function hpd(decay?: any, ...more: any[]): Pattern
/**
 * DC offset of the LFO for the highpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function hpdc(dcoffset?: any, ...more: any[]): Pattern
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
declare function hpdecay(decay?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the highpass filter
 * @param depth {number | Pattern} depth of modulation
 */
declare function hpdepth(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the hipass filter, in hz
 * Synonyms: hpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
declare function hpdepthfreq(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the hipass filter, in hz
 * Synonyms: hpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).hpdepthfrequency("<200 500 100 0>")
 */
declare function hpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
declare function hpe(modulation?: any, ...more: any[]): Pattern
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
declare function hpenv(modulation?: any, ...more: any[]): Pattern
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
declare function hpf(frequency?: any, ...more: any[]): Pattern
/**
 * Controls the high-pass q-value.
 * Synonyms: hresonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 */
declare function hpq(q?: any, ...more: any[]): Pattern
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
declare function hpr(release?: any, ...more: any[]): Pattern
/**
 * Rate of the LFO for the highpass filter
 * @param rate {number | Pattern} rate in hertz
 */
declare function hprate(rate?: any, ...more: any[]): Pattern
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
declare function hprelease(release?: any, ...more: any[]): Pattern
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
declare function hps(sustain?: any, ...more: any[]): Pattern
/**
 * Shape of the LFO for the highpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function hpshape(shape?: any, ...more: any[]): Pattern
/**
 * Skew of the LFO for the highpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function hpskew(skew?: any, ...more: any[]): Pattern
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
declare function hpsustain(sustain?: any, ...more: any[]): Pattern
/**
 * Cycle-synced rate of the LFO for the highpass filter
 * @param rate {number | Pattern} rate in cycles
 */
declare function hpsync(rate?: any, ...more: any[]): Pattern
/**
 * Controls the high-pass q-value.
 * Synonyms: hresonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").hpf(2000).hpq("<0 10 20 30>")
 */
declare function hresonance(q?: any, ...more: any[]): Pattern
declare function hsl(...args: any[]): Pattern
declare function hsla(...args: any[]): Pattern
/**
 * Both speeds up the pattern (like 'fast') and the sample playback (like 'speed').
 * @example
 * s("bd sd:2").hurry("<1 2 4 3>").slow(1.5)
 */
declare function hurry(...args: any[]): Pattern
/**
 * Silences a pattern.
 * @example
 * stack(
 *   s("bd").hush(),
 *   s("hh*3")
 * )
 */
declare function hush(...args: any[]): any
/**
 *
 */
declare function id(...args: any[]): Pattern
declare function imag(...args: any[]): Pattern
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
declare function inhabit(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * The same as inhabit, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * Synonyms: pickmodSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function inhabitmod(pat?: any, xs?: any, ...more: any[]): Pattern
declare function initAudio(...args: any[]): Pattern
declare function initAudioOnFirstClick(...args: any[]): any
declare function initEditor(...args: any[]): Pattern
declare function initHydra(...args: any[]): Pattern
declare function initTheme(...args: any[]): Pattern
declare function injectStyle(...args: any[]): Pattern
declare function innerBind(...args: any[]): Pattern
/**
 * Carries out an operation 'inside' a cycle.
 * @example
 * "0 1 2 3 4 3 2 1".inside(4, rev).scale('C major').note()
 * // "0 1 2 3 4 3 2 1".slow(4).rev().fast(4).scale('C major').note()
 */
declare function inside(...args: any[]): Pattern
/**
 * Swaps 1s and 0s in a binary pattern.
 * Synonyms: inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
declare function inv(...args: any[]): Pattern
/**
 * Swaps 1s and 0s in a binary pattern.
 * Synonyms: inv
 * @example
 * s("bd").struct("1 0 0 1 0 0 1 0".lastOf(4, invert))
 */
declare function invert(...args: any[]): Pattern
/**
 * Sets the sample to use as an impulse response for the reverb.
 * Synonyms: ir
 * @param sample {string | Pattern} to use as an impulse response
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 */
declare function ir(sample?: any, ...more: any[]): Pattern
/**
 * A continuous pattern of random integers, between 0 and n-1.
 * @param n {number} max value (exclusive)
 * @example
 * // randomly select scale notes from 0 - 7 (= C to C)
 * n(irand(8)).struct("x x*2 x x*3").scale("C:minor")
 */
declare function irand(n?: any, ...more: any[]): Pattern
/**
 * Sets the beginning of the IR response sample
 * Synonyms: ir
 * @param begin {string | Pattern} between 0 and 1
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.65).irspeed("-2").irbegin("<0 .5 .75>/2").roomsize(.6)
 */
declare function irbegin(begin?: any, ...more: any[]): Pattern
/**
 * Sets the sample to use as an impulse response for the reverb.
 * Synonyms: ir
 * @param sample {string | Pattern} to use as an impulse response
 * @example
 * s("bd sd [~ bd] sd").room(.8).ir("<shaker_large:0 shaker_large:2>")
 */
declare function iresponse(sample?: any, ...more: any[]): Pattern
/**
 * Sets speed of the sample for the impulse response.
 * @param speed {string | Pattern}
 * @example
 * samples('github:switchangel/pad')
 * $: s("brk/2").fit().scrub(irand(16).div(16).seg(8)).ir("swpad:4").room(.2).irspeed("<2 1 .5>/2").irbegin(.5).roomsize(.5)
 */
declare function irspeed(speed?: any, ...more: any[]): Pattern
declare function isControlName(...args: any[]): Pattern
declare function isFlashEnabled(...args: any[]): Pattern
declare function isNote(...args: any[]): Pattern
declare function isNoteWithOctave(...args: any[]): Pattern
declare function isPattern(...args: any[]): Pattern
declare function isPatternHighlightingEnabled(...args: any[]): Pattern
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
declare function iter(...args: any[]): Pattern
/**
 * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
 * Synonyms: iterback
 * @example
 * note("0 1 2 3".scale('A minor')).iterBack(4)
 */
declare function iterBack(...args: any[]): Pattern
/**
 * Like iter, but plays the subdivisions in reverse order. Known as iter' in tidalcycles
 * Synonyms: iterback
 * @example
 * note("0 1 2 3".scale('A minor')).iterBack(4)
 */
declare function iterback(...args: any[]): Pattern
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
declare function jux(...args: any[]): Pattern
/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * Synonyms: juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
declare function juxBy(...args: any[]): Pattern
/**
 * Jux with adjustable stereo width. 0 = mono, 1 = full stereo.
 * Synonyms: juxby
 * @example
 * s("bd lt [~ ht] mt cp ~ bd hh").juxBy("<0 .5 1>/2", rev)
 */
declare function juxby(...args: any[]): Pattern
declare function kcutoff(...args: any[]): Pattern
declare function keep(...args: any[]): Pattern
declare function keepif(...args: any[]): Pattern
declare const keyAlias: any
/**
 * returns true when a key or array of keys is held
 * Key name reference
 * @example
 * keyDown("Control:j").pick([s("bd(5,8)"), s("cp(3,8)")])
 */
declare function keyDown(...args: any[]): Pattern
declare function krush(...args: any[]): Pattern
/**
 * Sets the displayed text for an event on the pianoroll
 * @param label {string} text to display
 */
declare function label(label?: any, ...more: any[]): Pattern
/**
 * Applies the given function every n cycles, starting from the last cycle.
 * @param n {number} how many cycles
 * @param func {function} function to apply
 * @example
 * note("c3 d3 e3 g3").lastOf(4, x=>x.rev())
 */
declare function lastOf(n?: any, func?: any, ...more: any[]): Pattern
/**
 * Nudge a pattern to start later in time. Equivalent of Tidal's ~> operator
 * @param cycles {number | Pattern} number of cycles to nudge right
 * @example
 * "bd ~".stack("hh ~".late(.1)).s()
 */
declare function late(cycles?: any, ...more: any[]): Pattern
declare function lbrick(...args: any[]): Pattern
/**
 * Multiplies the duration with the given number. Also cuts samples off at the end if they exceed the duration.
 * Synonyms: legato
 * @param factor {number | Pattern} = 0
 * @example
 * note("c a f e").s("piano").clip("<.5 1 2>")
 */
declare function legato(factor?: any, ...more: any[]): Pattern
/**
 * Emulation of a Leslie speaker: speakers rotating in a wooden amplified cabinet.
 * @param wet {number | Pattern} between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie("<0 .4 .6 1>").osc()
 */
declare function leslie(wet?: any, ...more: any[]): Pattern
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
declare function lfo(config?: any, id?: any, ...more: any[]): Pattern
/**
 * Selects the given fraction of the pattern and repeats that part to fill the remainder of the cycle.
 * @param fraction {number} fraction to select
 * @example
 * s("lt ht mt cp, [hh oh]*2").linger("<1 .5 .25 .125>")
 */
declare function linger(fraction?: any, ...more: any[]): Pattern
declare function listRange(...args: any[]): Pattern
declare function load(...args: any[]): Pattern
declare function loadBuffer(...args: any[]): Pattern
declare function loadSoundfont(...args: any[]): Pattern
declare function loadWorklets(...args: any[]): Pattern
/**
 * Specifies whether delaytime is calculated relative to cps.
 * @param enable {number | Pattern} When set to 1, delaytime is a direct multiple of a cycle.
 * @example
 * s("sd").delay().lock(1).osc()
 */
declare function lock(enable?: any, ...more: any[]): Pattern
declare const logKey: any
declare function logger(...args: any[]): Pattern
/**
 * Loops the sample.
 * Note that the tempo of the loop is not synced with the cycle tempo.
 * To change the loop region, use loopBegin / loopEnd.
 * @param on {number | Pattern} If 1, the sample is looped
 * @example
 * s("casio").loop(1)
 */
declare function loop(on?: any, ...more: any[]): Pattern
/**
 * Makes the sample fit the given number of cycles by changing the speed.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes").loopAt(2)
 */
declare function loopAt(...args: any[]): Pattern
/**
 * Makes the sample fit the given number of cycles and cps value, by
 * changing the speed. Please note that at some point cps will be
 * given by a global clock and this function will be
 * deprecated/removed.
 * @example
 * samples({ rhodes: 'https://cdn.freesound.org/previews/132/132051_316502-lq.mp3' })
 * s("rhodes").loopAtCps(4,1.5).cps(1.5)
 */
declare function loopAtCps(...args: any[]): Pattern
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
declare function loopBegin(time?: any, ...more: any[]): Pattern
/**
 * End the looping section at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and after loopBegin!
 * Synonyms: loope
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
declare function loopEnd(time?: any, ...more: any[]): Pattern
declare function loopat(...args: any[]): Pattern
declare function loopatcps(...args: any[]): Pattern
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
declare function loopb(time?: any, ...more: any[]): Pattern
/**
 * End the looping section at a specific point in the sample (inbetween begin and end).
 * Note that the loop point must be inbetween begin and end, and after loopBegin!
 * Synonyms: loope
 * @param time {number | Pattern} between 0 and 1, where 1 is the length of the sample
 * @example
 * s("space").loop(1)
 * .loopEnd("<1 .75 .5 .25>")._scope()
 */
declare function loope(time?: any, ...more: any[]): Pattern
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
declare function lp(frequency?: any, ...more: any[]): Pattern
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
declare function lpa(attack?: any, ...more: any[]): Pattern
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
declare function lpattack(attack?: any, ...more: any[]): Pattern
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
declare function lpd(decay?: any, ...more: any[]): Pattern
/**
 * DC offset of the LFO for the lowpass filter
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function lpdc(dcoffset?: any, ...more: any[]): Pattern
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
declare function lpdecay(decay?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the lowpass filter
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepth("<1 .5 1.8 0>")
 */
declare function lpdepth(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the lowpass filter, in HZ
 * Synonyms: lpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
declare function lpdepthfreq(depth?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the lowpass filter, in HZ
 * Synonyms: lpdepthfreq
 * @param depth {number | Pattern} depth of modulation
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpdepthfrequency("<200 500 100 0>")
 */
declare function lpdepthfrequency(depth?: any, ...more: any[]): Pattern
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
declare function lpe(modulation?: any, ...more: any[]): Pattern
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
declare function lpenv(modulation?: any, ...more: any[]): Pattern
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
declare function lpf(frequency?: any, ...more: any[]): Pattern
/**
 * Controls the low-pass q-value.
 * Synonyms: resonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 */
declare function lpq(q?: any, ...more: any[]): Pattern
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
declare function lpr(release?: any, ...more: any[]): Pattern
/**
 * Rate of the LFO for the lowpass filter
 * @param rate {number | Pattern} rate in hertz
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lprate("<4 8 2 1>")
 */
declare function lprate(rate?: any, ...more: any[]): Pattern
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
declare function lprelease(release?: any, ...more: any[]): Pattern
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
declare function lps(sustain?: any, ...more: any[]): Pattern
/**
 * Shape of the LFO for the lowpass filter
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function lpshape(shape?: any, ...more: any[]): Pattern
/**
 * Skew of the LFO for the lowpass filter
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function lpskew(skew?: any, ...more: any[]): Pattern
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
declare function lpsustain(sustain?: any, ...more: any[]): Pattern
/**
 * Cycle-synced rate of the LFO for the lowpass filter
 * @param rate {number | Pattern} rate in cycles
 * @example
 * note("<c c c# c c c4>*16").s("sawtooth").lpf(600).lpsync("<4 8 2 1>")
 */
declare function lpsync(rate?: any, ...more: any[]): Pattern
/**
 * Rate of modulation / rotation for leslie effect
 * @param rate {number | Pattern} 6.7 for fast, 0.7 for slow
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate("<1 2 4 8>").osc()
 */
declare function lrate(rate?: any, ...more: any[]): Pattern
/**
 * Physical size of the cabinet in meters. Be careful, it might be slightly larger than your computer. Affects the Doppler amount (pitch warble)
 * @param meters {number | Pattern} somewhere between 0 and 1
 * @example
 * n("0,4,7").s("supersquare").leslie(1).lrate(2).lsize("<.1 .5 1>").osc()
 */
declare function lsize(meters?: any, ...more: any[]): Pattern
declare function lt(...args: any[]): Pattern
declare function lte(...args: any[]): Pattern
declare function m(...args: any[]): Pattern
declare function mapArgs(...args: any[]): Pattern
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
declare function mask(...args: any[]): Pattern
declare const maxPolyphony: any
/**
 *
 */
declare function midi2note(...args: any[]): Pattern
declare function midiToFreq(...args: any[]): Pattern
/**
 * MIDI pitch bend: Sends a MIDI pitch bend message.
 * @param midibend {number | Pattern} MIDI pitch bend (-1 - 1)
 * @example
 * note("c4").midibend(sine.slow(4).range(-0.4,0.4)).midi()
 */
declare function midibend(midibend?: any, ...more: any[]): Pattern
/**
 * MIDI channel: Sets the MIDI channel for the event.
 * @param channel {number | Pattern} MIDI channel number (0-15)
 * @example
 * note("c4").midichan(1).midi()
 */
declare function midichan(channel?: any, ...more: any[]): Pattern
/**
 * MIDI command: Sends a MIDI command message.
 * @param command {number | Pattern} MIDI command
 * @example
 * midicmd("clock*48,<start stop>/2").midi()
 */
declare function midicmd(command?: any, ...more: any[]): Pattern
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
declare function midikeys(input?: any, ...more: any[]): Pattern
declare function midimap(...args: any[]): Pattern
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
declare function midimaps(...args: any[]): Pattern
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
declare function midin(input?: any, ...more: any[]): any
/**
 * MIDI port: Sets the MIDI port for the event.
 * @param port {number | Pattern} MIDI port
 * @example
 * note("c a f e").midiport("<0 1 2 3>").midi()
 */
declare function midiport(port?: any, ...more: any[]): Pattern
declare const midisoundMap: any
/**
 * MIDI key after touch: Sends a MIDI key after touch message.
 * @param miditouch {number | Pattern} MIDI key after touch (0-1)
 * @example
 * note("c4").miditouch(sine.slow(4).range(0,1)).midi()
 */
declare function miditouch(miditouch?: any, ...more: any[]): Pattern
declare function mini(...args: any[]): Pattern
declare function mini2ast(...args: any[]): Pattern
declare function miniAllStrings(...args: any[]): Pattern
declare function minify(...args: any[]): Pattern
declare function minutes(...args: any[]): Pattern
declare function mod(...args: any[]): Pattern
/**
 * Remove anchor note from the voicing. Useful for melody harmonization
 * @param modeName {string | Pattern} one of {below | above | duck | root}
 * @example
 * mode("<below above duck root>").chord("C").voicing()
 */
declare function mode(modeName?: any, ...more: any[]): Pattern
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
declare function morph(...args: any[]): Pattern
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
declare function moveXY(...args: any[]): Pattern
declare function mtranspose(...args: any[]): Pattern
/**
 * Multiplies each number by the given factor.
 * @example
 * "<1 1.5 [1.66, <2 2.33>]>*4".mul(150).freq()
 */
declare function mul(...args: any[]): Pattern
declare const multiChannelOrbits: any
/**
 * Selects the given index from the sample map.
 * Numbers too high will wrap around.
 * n can also be used to play midi numbers, but it is recommended to use note instead.
 * @param value {number | Pattern} sample index starting from 0
 * @example
 * s("bd sd [~ bd] sd,hh*6").n("<0 1>")
 */
declare function n(value?: any, ...more: any[]): Pattern
declare function nanFallback(...args: any[]): Pattern
declare function ne(...args: any[]): Pattern
declare function net(...args: any[]): Pattern
/**
 * Shorthand for .sometimesBy(0, fn) (never calls fn)
 * @example
 * s("hh*8").never(x=>x.speed("0.5"))
 */
declare function never(...args: any[]): Pattern
/**
 * Adds pink noise to the mix
 * @param wet {number | Pattern} wet amount
 * @example
 * sound("<white pink brown>/2")
 */
declare function noise(wet?: any, ...more: any[]): Pattern
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
declare function note(...args: any[]): Pattern
declare function noteToMidi(...args: any[]): Pattern
declare const nothing: Pattern
/**
 * MIDI NRPN non-registered parameter number: Sends a MIDI NRPN non-registered parameter number message.
 * @param nrpnn {number | Pattern} MIDI NRPN non-registered parameter number (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
declare function nrpnn(nrpnn?: any, ...more: any[]): Pattern
/**
 * MIDI NRPN non-registered parameter value: Sends a MIDI NRPN non-registered parameter value message.
 * @param nrpv {number | Pattern} MIDI NRPN non-registered parameter value (0-127)
 * @example
 * note("c4").nrpnn("1:8").nrpv("123").midichan(1).midi()
 */
declare function nrpv(nrpv?: any, ...more: any[]): Pattern
declare function nudge(...args: any[]): Pattern
declare function numeralArgs(...args: any[]): Pattern
declare function objectMap(...args: any[]): Pattern
/**
 * Sets the default octave of a synth.
 * Synonyms: oct
 * @param octave {number | Pattern} octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
declare function oct(octave?: any, ...more: any[]): Pattern
/**
 * Sets the default octave of a synth.
 * Synonyms: oct
 * @param octave {number | Pattern} octave number
 * @example
 * n("0,4,7").scale("F:minor").s('supersaw').octave("<0 1 2 3>")
 */
declare function octave(octave?: any, ...more: any[]): Pattern
declare function octaveR(...args: any[]): Pattern
/**
 * How many octaves are voicing steps spread apart, defaults to 1
 * @param count {number | Pattern} the number of octaves
 * @example
 * chord("<Am C D F Am E Am E>").octaves("<2 4>").voicing()
 */
declare function octaves(count?: any, ...more: any[]): Pattern
declare function octer(...args: any[]): Pattern
declare function octersub(...args: any[]): Pattern
declare function octersubsub(...args: any[]): Pattern
/**
 * Superimposes the function result on top of the original pattern, delayed by the given time.
 * @param time {Pattern | number} offset time
 * @param func {function} function to apply
 * @example
 * "c3 eb3 g3".off(1/8, x=>x.add(7)).note()
 */
declare function off(time?: any, func?: any, ...more: any[]): Pattern
/**
 * Sets how the voicing is offset from the anchored position
 * @param shift {number | Pattern} the amount to shift the voicing up or down
 * @example
 * chord("<Am C D F Am E Am E>").offset("<0 1 2 3 4 5>") // alter the voicing each time
 */
declare function offset(shift?: any, ...more: any[]): Pattern
/**
 * Shorthand for .sometimesBy(0.75, fn)
 * @example
 * s("hh*8").often(x=>x.speed("0.5"))
 */
declare function often(...args: any[]): Pattern
declare function onTriggerSample(...args: any[]): Pattern
declare function onTriggerSynth(...args: any[]): Pattern
declare function onceEnded(...args: any[]): Pattern
declare const ondevicemotion: any
declare const ondeviceorientation: any
declare const ondeviceorientationabsolute: any
declare const onpointerrawupdate: any
declare function or(...args: any[]): Pattern
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
declare function orbit(number?: any, ...more: any[]): Pattern
/**
 * The host to send open sound control messages to. Requires running the OSC bridge.
 * @param oschost {string | Pattern} e.g. 'localhost'
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
declare function oschost(oschost?: any, ...more: any[]): Pattern
/**
 * The port to send open sound control messages to. Requires running the OSC bridge.
 * @param oscport {number | Pattern} e.g. 57120
 * @example
 * note("c4").oschost('127.0.0.1').oscport(57120).osc();
 */
declare function oscport(oscport?: any, ...more: any[]): Pattern
declare function outerBind(...args: any[]): Pattern
/**
 * Carries out an operation 'outside' a cycle.
 * @example
 * "<[0 1] 2 [3 4] 5>".outside(4, rev).scale('C major').note()
 * // "<[0 1] 2 [3 4] 5>".fast(4).rev().slow(4).scale('C major').note()
 */
declare function outside(...args: any[]): Pattern
declare function overgain(...args: any[]): Pattern
declare function overshape(...args: any[]): Pattern
/**
 * Experimental
 * Speeds a pattern up or down, to fit to the given number of steps per cycle.
 * @example
 * sound("bd sd cp").pace(4)
 * // The same as sound("{bd sd cp}%4") or sound("<bd sd cp>*4")
 */
declare function pace(...args: any[]): Pattern
declare const packageName: any
declare function pairs(...args: any[]): Pattern
/**
 * Applies rev to a pattern every other cycle, so that the pattern alternates between forwards and backwards.
 * @example
 * note("c d e g").palindrome()
 */
declare function palindrome(...args: any[]): Pattern
/**
 * Sets position in stereo.
 * @param pan {number | Pattern} between 0 and 1, from left to right (assuming stereo), once round a circle (assuming multichannel)
 * @example
 * s("[bd hh]*2").pan("<.5 1 .5 0>")
 * @example
 * s("bd rim sd rim bd ~ cp rim").pan(sine.slow(2))
 */
declare function pan(pan?: any, ...more: any[]): Pattern
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
declare function panchor(anchor?: any, ...more: any[]): Pattern
declare function panorient(...args: any[]): Pattern
declare function panspan(...args: any[]): Pattern
declare function pansplay(...args: any[]): Pattern
declare function panwidth(...args: any[]): Pattern
/**
 * Turns a list of patterns into a single pattern which outputs list-values
 */
declare function parray(...args: any[]): Pattern
declare function parse(...args: any[]): Pattern
declare function parseBooleans(...args: any[]): Pattern
declare function parseFractional(...args: any[]): Pattern
declare function parseNumeral(...args: any[]): Pattern
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
declare function partials(magnitudes?: any, ...more: any[]): Pattern
/**
 * Attack time of pitch envelope.
 * Synonyms: patt
 * @param time {number | Pattern} time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 */
declare function patt(time?: any, ...more: any[]): Pattern
/**
 * Attack time of pitch envelope.
 * Synonyms: patt
 * @param time {number | Pattern} time in seconds
 * @example
 * note("c eb g bb").pattack("0 .1 .25 .5").slow(2)
 */
declare function pattack(time?: any, ...more: any[]): Pattern
declare function patternifyAST(...args: any[]): Pattern
/**
 * Curve of envelope. Defaults to linear. exponential is good for kicks
 * @param type {number | Pattern} 0 = linear, 1 = exponential
 * @example
 * note("g1*4")
 * .s("sine").pdec(.5)
 * .penv(32)
 * .pcurve("<0 1>")
 */
declare function pcurve(type?: any, ...more: any[]): Pattern
/**
 * Decay time of pitch envelope.
 * Synonyms: pdec
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 */
declare function pdec(time?: any, ...more: any[]): Pattern
/**
 * Decay time of pitch envelope.
 * Synonyms: pdec
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb>").pdecay("<0 .1 .25 .5>")
 */
declare function pdecay(time?: any, ...more: any[]): Pattern
/**
 * Amount of pitch envelope. Negative values will flip the envelope.
 * If you don't set other pitch envelope controls, pattack:.2 will be the default.
 * @param semitones {number | Pattern} change in semitones
 * @example
 * note("c")
 * .penv("<12 7 1 .5 0 -1 -7 -12>")
 */
declare function penv(semitones?: any, ...more: any[]): Pattern
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
declare function ph(speed?: any, ...more: any[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phasdp(depth?: any, ...more: any[]): Pattern
/**
 * Phaser audio effect that approximates popular guitar pedals.
 * Synonyms: ph
 * @param speed {number | Pattern} speed of modulation
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser("<1 2 4 8>")
 */
declare function phaser(speed?: any, ...more: any[]): Pattern
/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 * Synonyms: phc
 * @param centerfrequency {number | Pattern} in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 */
declare function phasercenter(centerfrequency?: any, ...more: any[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phaserdepth(depth?: any, ...more: any[]): Pattern
declare function phaserrate(...args: any[]): Pattern
/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 * Synonyms: phs
 * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 */
declare function phasersweep(phasersweep?: any, ...more: any[]): Pattern
/**
 * Rotates the harmonics of one of the core synths ('sine', 'tri', 'saw', 'user', ..) by a list of phases
 * @param phases {Array.<number> | Pattern} List of [0, 1) phases for partials. 0th entry is the fundamental phase (i.e. DC offset is skipped)
 * @example
 * // Phase cancellation
 * s("saw").seg(8).n(irand(12)).scale("G#1:minor")
 *   .partials(partials([1, 1, 1]))
 *   .superimpose(x => x.phases([0.5, 0.5, 0.5]))
 */
declare function phases(phases?: any, ...more: any[]): Pattern
/**
 * The center frequency of the phaser in HZ. Defaults to 1000
 * Synonyms: phc
 * @param centerfrequency {number | Pattern} in HZ
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasercenter("<800 2000 4000>")
 */
declare function phc(centerfrequency?: any, ...more: any[]): Pattern
/**
 * The amount the signal is affected by the phaser effect. Defaults to 0.75
 * Synonyms: phd, phasdp
 * @param depth {number | Pattern} number between 0 and 1
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phaserdepth("<0 .5 .75 1>")
 */
declare function phd(depth?: any, ...more: any[]): Pattern
/**
 * The frequency sweep range of the lfo for the phaser effect. Defaults to 2000
 * Synonyms: phs
 * @param phasersweep {number | Pattern} most useful values are between 0 and 4000
 * @example
 * n(run(8)).scale("D:pentatonic").s("sawtooth").release(0.5)
 * .phaser(2).phasersweep("<800 2000 4000>")
 */
declare function phs(phasersweep?: any, ...more: any[]): Pattern
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
declare function pianoroll(options?: any, cycles?: any, playhead?: any, vertical?: any, labels?: any, flipTime?: any, flipValues?: any, overscan?: any, hideNegative?: any, smear?: any, fold?: any, active?: any, inactive?: any, background?: any, playheadColor?: any, fill?: any, fillActive?: any, stroke?: any, strokeActive?: any, hideInactive?: any, colorizeInactive?: any, fontFamily?: any, minMidi?: any, maxMidi?: any, autorange?: any, ...more: any[]): Pattern
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
declare function pick(pat?: any, xs?: any, ...more: any[]): Pattern
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
declare function pickF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
/**
 * Similar to pick, but it applies an outerJoin instead of an innerJoin.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickOut(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * Similar to pick, but the choosen pattern is reset when its index is triggered.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickReset(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * Similar to pick, but the choosen pattern is restarted when its index is triggered.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickRestart(pat?: any, xs?: any, ...more: any[]): Pattern
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
declare function pickSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * The same as pick, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmod(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * The same as pickF, but if you pick a number greater than the size of the functions list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param lookup {Pattern} a pattern of indices
 * @param funcs {Array.<function()>} the array of functions from which to pull
 */
declare function pickmodF(pat?: any, lookup?: any, funcs?: any, ...more: any[]): Pattern
/**
 * The same as pickOut, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodOut(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * The same as pickReset, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodReset(pat?: any, xs?: any, ...more: any[]): Pattern
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
declare function pickmodRestart(pat?: any, xs?: any, ...more: any[]): Pattern
/**
 * The same as inhabit, but if you pick a number greater than the size of the list,
 * it wraps around, rather than sticking at the maximum value.
 * For example, if you pick the fifth pattern of a list of three, you'll get the
 * second one.
 * Synonyms: pickmodSqueeze
 * @param pat {Pattern}
 * @param xs {*}
 */
declare function pickmodSqueeze(pat?: any, xs?: any, ...more: any[]): Pattern
declare function pipe(...args: any[]): Pattern
declare function pitchJump(...args: any[]): Pattern
declare function pitchJumpTime(...args: any[]): Pattern
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
declare function pitchwheel(hapcircles?: any, circle?: any, edo?: any, root?: any, thickness?: any, hapRadius?: any, mode?: any, margin?: any, ...more: any[]): Pattern
declare function play(...args: any[]): Pattern
/**
 * The ply function repeats each event the given number of times.
 * @example
 * s("bd ~ sd cp").ply("<1 2 3>")
 */
declare function ply(...args: any[]): Pattern
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
declare function pm(...args: any[]): Pattern
declare function polyBind(...args: any[]): Pattern
declare function polyTouch(...args: any[]): Pattern
/**
 * Experimental
 * Aligns the steps of the patterns, creating polymeters. The patterns are repeated until they all fit the cycle. For example, in the below the first pattern is repeated twice, and the second is repeated three times, to fit the lowest common multiple of six steps.
 * Synonyms: pm
 * @example
 * // The same as note("{c eb g, c2 g2}%6")
 * polymeter("c eb g", "c2 g2").note()
 */
declare function polymeter(...args: any[]): Pattern
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
declare function polyrhythm(...args: any[]): Pattern
/**
 * Gain applied after all effects have been processed.
 * @example
 * s("bd sd [~ bd] sd,hh*8")
 * .compressor("-20:20:10:.002:.02").postgain(1.5)
 */
declare function postgain(...args: any[]): Pattern
declare function pow(...args: any[]): Pattern
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
declare function pr(...args: any[]): Pattern
/**
 * Release time of pitch envelope
 * Synonyms: prel
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 */
declare function prel(time?: any, ...more: any[]): Pattern
/**
 * Release time of pitch envelope
 * Synonyms: prel
 * @param time {number | Pattern} time in seconds
 * @example
 * note("<c eb g bb> ~")
 * .release(.5) // to hear the pitch release
 * .prelease("<0 .1 .25 .5>")
 */
declare function prelease(time?: any, ...more: any[]): Pattern
/**
 * Syncopates a rhythm, by shifting each event halfway into its timespan.
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").every(4, press)
 *      ).slow(2)
 */
declare function press(...args: any[]): Pattern
/**
 * Like press, but allows you to specify the amount by which each
 * event is shifted. pressBy(0.5) is the same as press, while
 * pressBy(1/3) shifts each event by a third of its timespan.
 * @example
 * stack(s("hh*4"),
 *       s("bd mt sd ht").pressBy("<0 0.5 0.25>")
 *      ).slow(2)
 */
declare function pressBy(...args: any[]): Pattern
declare function processSampleMap(...args: any[]): Pattern
/**
 * MIDI program number: Sends a MIDI program change message.
 * @param program {number | Pattern} MIDI program number (0-127)
 * @example
 * note("c4").progNum(10).midichan(1).midi()
 */
declare function progNum(program?: any, ...more: any[]): Pattern
declare function psus(...args: any[]): Pattern
/**
 *
 */
declare function psustain(...args: any[]): Pattern
/**
 * A discrete value that repeats once per cycle.
 * @example
 * pure('e4') // "e4"
 */
declare function pure(...args: any[]): Pattern
/**
 * Controls the pulsewidth of the pulse oscillator
 * @param pulsewidth {number | Pattern}
 * @example
 * note("{f a c e}%16").s("pulse").pw(".8:1:.2")
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0 .75 .5 1")
 */
declare function pw(pulsewidth?: any, ...more: any[]): Pattern
/**
 * Controls the lfo rate for the pulsewidth of the pulse oscillator
 * @param rate {number | Pattern}
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 */
declare function pwrate(rate?: any, ...more: any[]): Pattern
/**
 * Controls the lfo sweep for the pulsewidth of the pulse oscillator
 * @param sweep {number | Pattern}
 * @example
 * n(run(8)).scale("D:pentatonic").s("pulse").pw("0.5").pwrate("<5 .1 25>").pwsweep("<0.3 .8>")
 */
declare function pwsweep(sweep?: any, ...more: any[]): Pattern
declare function queryLocalFonts(...args: any[]): Pattern
declare function r(...args: any[]): Pattern
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
declare function randL(n?: any, ...more: any[]): Pattern
/**
 * Picks one of the elements at random each cycle.
 * Synonyms: randcat
 * @example
 * chooseCycles("bd", "hh", "sd").s().fast(8)
 * @example
 * s("bd | hh | sd").fast(8)
 */
declare function randcat(...args: any[]): Pattern
declare function randrun(...args: any[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1.
 * Returns a new pattern with values scaled to the given min/max range.
 * Most useful in combination with continuous patterns.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine.range(500,4000))
 */
declare function range(...args: any[]): Pattern
/**
 * Assumes a numerical pattern, containing bipolar values in the range -1 .. 1
 * Returns a new pattern with values scaled to the given min/max range.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine2.range2(500,4000))
 */
declare function range2(...args: any[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 .. 1
 * Returns a new pattern with values scaled to the given min/max range,
 * following an exponential curve.
 * @example
 * s("[bd sd]*2,hh*8")
 * .cutoff(sine.rangex(500,4000))
 */
declare function rangex(...args: any[]): Pattern
/**
 * Shorthand for .sometimesBy(0.25, fn)
 * @example
 * s("hh*8").rarely(x=>x.speed("0.5"))
 */
declare function rarely(...args: any[]): Pattern
/**
 * Allows dividing numbers via list notation using ":".
 * Returns a new pattern with just numbers.
 * @example
 * ratio("1, 5:4, 3:2").mul(110)
 * .freq().s("piano")
 */
declare function ratio(...args: any[]): Pattern
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
declare function rdim(frequency?: any, ...more: any[]): Pattern
declare function real(...args: any[]): Pattern
/**
 * exposes a custom value at query time. basically allows mutating state without evaluation
 */
declare function ref(...args: any[]): Pattern
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
declare function register(name?: any, func?: any, patternify?: any, ...more: any[]): Pattern
declare function registerControl(...args: any[]): Pattern
declare function registerMultiControl(...args: any[]): Pattern
declare function registerSampleSource(...args: any[]): Pattern
declare function registerSamplesPrefix(...args: any[]): Pattern
declare function registerSound(...args: any[]): any
declare function registerSoundfonts(...args: any[]): Pattern
declare function registerSynthSounds(...args: any[]): any
declare function registerVoicings(...args: any[]): Pattern
declare function registerWaveTable(...args: any[]): Pattern
declare function registerWidget(...args: any[]): Pattern
declare function registerWorklet(...args: any[]): Pattern
declare function registerZZFXSounds(...args: any[]): any
declare function reify(...args: any[]): Pattern
/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 * Synonyms: rel
 * @param time {number | Pattern} release time in seconds
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 */
declare function rel(time?: any, ...more: any[]): Pattern
/**
 * Amplitude envelope release time: The time it takes after the offset to go from sustain level to zero.
 * Synonyms: rel
 * @param time {number | Pattern} release time in seconds
 * @example
 * note("c3 e3 g3 c4").release("<0 .1 .4 .6 1>/2")
 */
declare function release(time?: any, ...more: any[]): Pattern
declare function releaseAudioNode(...args: any[]): Pattern
/**
 * Returns a new pattern, with haps containing undefined values removed from
 * query results.
 */
declare function removeUndefineds(...args: any[]): Pattern
declare function renderPatternAudio(...args: any[]): Pattern
/**
 * Repeats each cycle the given number of times.
 * @example
 * note(irand(12).add(34)).segment(4).repeatCycles(2).s("gm_acoustic_guitar_nylon")
 */
declare const repeatCycles: any
declare function repl(...args: any[]): Pattern
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
declare function replicate(...args: any[]): Pattern
declare function rescale(...args: any[]): Pattern
declare function resetDefaultValues(...args: any[]): Pattern
declare function resetDefaults(...args: any[]): Pattern
declare function resetGlobalEffects(...args: any[]): Pattern
declare function resetLoadedSounds(...args: any[]): Pattern
declare function resetSeenKeys(...args: any[]): Pattern
declare function resetVoicings(...args: any[]): Pattern
declare function reset_state(...args: any[]): Pattern
declare function reset_timelines(...args: any[]): Pattern
/**
 * Controls the low-pass q-value.
 * Synonyms: resonance
 * @param q {number | Pattern} resonance factor between 0 and 50
 * @example
 * s("bd sd [~ bd] sd,hh*8").lpf(2000).lpq("<0 10 20 30>")
 */
declare function resonance(q?: any, ...more: any[]): Pattern
/**
 * Reverse all cycles in a pattern. See also revv for reversing a whole pattern.
 * @example
 * note("c d e g").rev()
 */
declare function rev(...args: any[]): Pattern
declare function reverseBuffer(...args: any[]): Pattern
/**
 * Reverse a whole pattern. See also rev for reversing each cycle.
 * @example
 * // This is the same as `<[g e] [d c]>`. If `rev()` is used, you get
 * // the same as `<[d c] [g e]>`, where each cycle reverses, but the order of
 * // cycles stays the same.
 * note("<[c d] [e g]>").revv()
 */
declare function revv(...args: any[]): Pattern
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
declare function rfade(seconds?: any, ...more: any[]): Pattern
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
declare function rib(offset?: any, cycles?: any, ...more: any[]): Pattern
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
declare function ribbon(offset?: any, cycles?: any, ...more: any[]): Pattern
declare function ring(...args: any[]): Pattern
declare function ringdf(...args: any[]): Pattern
declare function ringf(...args: any[]): Pattern
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
declare function rlp(frequency?: any, ...more: any[]): Pattern
/**
 * Sets the level of reverb.
 * When using mininotation, you can also optionally add the 'size' parameter, separated by ':'.
 * @param level {number | Pattern} between 0 and 1
 * @example
 * s("bd sd [~ bd] sd").room("<0 .2 .4 .6 .8 1>")
 * @example
 * s("bd sd [~ bd] sd").room("<0.9:1 0.9:4>")
 */
declare function room(level?: any, ...more: any[]): Pattern
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
declare function roomdim(frequency?: any, ...more: any[]): Pattern
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
declare function roomfade(seconds?: any, ...more: any[]): Pattern
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
declare function roomlp(frequency?: any, ...more: any[]): Pattern
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
declare function roomsize(size?: any, ...more: any[]): Pattern
/**
 * Maps the chords of the incoming pattern to root notes in the given octave.
 * @param octave {octave} octave to use
 * @example
 * "<C^7 A7 Dm7 G7>".rootNotes(2).note()
 */
declare function rootNotes(octave?: any, ...more: any[]): Pattern
declare function rotate(...args: any[]): Pattern
/**
 * Assumes a numerical pattern. Returns a new pattern with all values rounded
 * to the nearest integer.
 * @example
 * n("0.5 1.5 2.5".round()).scale("C:major")
 */
declare function round(...args: any[]): Pattern
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
declare function rsize(size?: any, ...more: any[]): Pattern
/**
 * A discrete pattern of numbers from 0 to n-1
 * @example
 * n(run(4)).scale("C4:pentatonic")
 * // n("0 1 2 3").scale("C4:pentatonic")
 */
declare function run(...args: any[]): Pattern
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
declare function s(sound?: any, ...more: any[]): Pattern
declare function s_add(...args: any[]): Pattern
declare function s_alt(...args: any[]): Pattern
declare function s_cat(...args: any[]): Pattern
declare function s_contract(...args: any[]): Pattern
declare function s_expand(...args: any[]): Pattern
declare function s_extend(...args: any[]): Pattern
declare function s_polymeter(...args: any[]): Pattern
declare function s_sub(...args: any[]): Pattern
declare function s_taper(...args: any[]): Pattern
declare function s_taperlist(...args: any[]): Pattern
declare function s_tour(...args: any[]): Pattern
declare function s_zip(...args: any[]): Pattern
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
declare function samples(...args: any[]): any
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
declare function scale(scale?: any, ...more: any[]): Pattern
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
declare function scaleTrans(offset?: any, ...more: any[]): Pattern
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
declare function scaleTranspose(offset?: any, ...more: any[]): Pattern
declare function scheduleAtTime(...args: any[]): Pattern
declare function scram(...args: any[]): Pattern
/**
 * Slices a pattern into the given number of parts, then plays those parts at random. Similar to shuffle,
 * but parts might be played more than once, or not at all, per cycle.
 * @example
 * note("c d e f").sound("piano").scramble(4)
 * @example
 * seq("c d e f".scramble(4), "g").note().sound("piano")
 */
declare function scramble(...args: any[]): Pattern
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
declare function scrub(...args: any[]): Pattern
declare function seconds(...args: any[]): Pattern
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
declare function seed(n?: any, ...more: any[]): Pattern
/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * Synonyms: seg
 * @param segments {number} number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
declare function seg(segments?: any, ...more: any[]): Pattern
/**
 * Samples the pattern at a rate of n events per cycle. Useful for turning a continuous pattern into a discrete one.
 * Synonyms: seg
 * @param segments {number} number of segments per cycle
 * @example
 * note(saw.range(40,52).segment(24))
 */
declare function segment(segments?: any, ...more: any[]): Pattern
declare function semitone(...args: any[]): Pattern
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
declare function seq(...args: any[]): Pattern
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
declare function seqPLoop(...args: any[]): Pattern
/**
 * See fastcat
 */
declare function sequence(...args: any[]): Pattern
/**
 * Takes a list of patterns, and returns a pattern of lists.
 */
declare function sequenceP(...args: any[]): Pattern
declare function set(...args: any[]): Pattern
declare function setAudioContext(...args: any[]): Pattern
declare function setCpm(...args: any[]): any
declare function setCps(...args: any[]): any
declare function setCpsFunc(...args: any[]): Pattern
declare function setDefault(...args: any[]): Pattern
declare function setDefaultAudioContext(...args: any[]): Pattern
declare function setDefaultValue(...args: any[]): Pattern
declare function setDefaultValues(...args: any[]): Pattern
declare function setDefaultVoicings(...args: any[]): Pattern
declare const setFlash: any
/**
 * Apply a function to all gains provided in patterns. Can be used to rescale gain to be
 * quadratic, exponential, etc. rather than linear
 * @param function {function} to apply to all gain values
 * @example
 * setGainCurve((x) => x * x) // quadratic gain
 * s("bd*4").gain(0.5) // equivalent to 0.25 gain normally
 */
declare function setGainCurve(...args: any[]): Pattern
declare function setIsStarted(...args: any[]): Pattern
declare function setLogger(...args: any[]): Pattern
/**
 * Set the max polyphony. If notes are ringing out via release then they will
 * start to die out in first-in-first-out order once the max polyphony has been hit
 * @param Max {number} polyphony. Defaults to 128
 * @example
 * setMaxPolyphony(4)
 * n(irand(24).seg(8)).scale("C#3:minor").room(1).release(4).gain(0.5)
 */
declare function setMaxPolyphony(Max?: any, ...more: any[]): Pattern
declare const setMiniLocations: any
declare function setMultiChannelOrbits(...args: any[]): Pattern
declare function setPattern(...args: any[]): Pattern
declare const setSliderWidgets: any
declare function setSoundfontUrl(...args: any[]): Pattern
declare function setStringParser(...args: any[]): Pattern
declare function setSuperdoughAudioController(...args: any[]): Pattern
declare function setTheme(...args: any[]): Pattern
declare function setTime(...args: any[]): any
declare function setTriggerFunc(...args: any[]): Pattern
declare function setVersionDefaults(...args: any[]): Pattern
declare function setVoicingRange(...args: any[]): Pattern
declare function setWidget(...args: any[]): Pattern
/**
 * Changes the global tempo to the given cycles per minute
 * @param cpm {number} cycles per minute
 * @example
 * setcpm(140/4) // =140 bpm in 4/4
 * $: s("bd*4,[- sd]*2").bank('tr707')
 */
declare function setcpm(cpm?: any, ...more: any[]): any
declare function setcps(...args: any[]): any
declare const settings: any
/**
 * (Deprecated) Wave shaping distortion. WARNING: can suddenly get unpredictably loud.
 * Please use distort instead, which has a more predictable response curve
 * second option in optional array syntax (ex: ".9:.5") applies a postgain to the output
 * @param distortion {number | Pattern} between 0 and 1
 * @example
 * s("bd sd [~ bd] sd,hh*8").shape("<0 .2 .4 .6 .8>")
 */
declare function shape(distortion?: any, ...more: any[]): Pattern
declare function showDirectoryPicker(...args: any[]): Pattern
declare const showMiniLocations: any
declare function showOpenFilePicker(...args: any[]): Pattern
declare function showSaveFilePicker(...args: any[]): Pattern
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
declare function shrink(...args: any[]): Pattern
declare function shrinklist(...args: any[]): Pattern
/**
 * Slices a pattern into the given number of parts, then plays those parts in random order.
 * Each part will be played exactly once per cycle.
 * @example
 * note("c d e f").sound("piano").shuffle(4)
 * @example
 * seq("c d e f".shuffle(4), "g").note().sound("piano")
 */
declare function shuffle(...args: any[]): Pattern
declare function signal(...args: any[]): Pattern
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
declare function sinefold(distortion?: any, volume?: any, ...more: any[]): Pattern
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
declare function size(size?: any, ...more: any[]): Pattern
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
declare function slice(...args: any[]): Pattern
declare function slide(...args: any[]): Pattern
/**
 * Displays a slider widget to allow the user manipulate a value
 * @param value {number} Initial value
 * @param min {number} Minimum value - optional, defaults to 0
 * @param max {number} Maximum value - optional, defaults to 1
 * @param step {number} Step size - optional
 */
declare function slider(value?: any, min?: any, max?: any, step?: any, ...more: any[]): Pattern
declare const sliderPlugin: any
declare const sliderValues: any
declare function sliderWithID(...args: any[]): Pattern
/**
 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
 * Synonyms: sparsity
 * @param factor {number | Pattern} slow down factor
 * @example
 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
 */
declare function slow(factor?: any, ...more: any[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function slowChunk(...args: any[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle.
 * Synonyms: cat
 * @example
 * slowcat("e5", "b4", ["d5", "c5"])
 */
declare function slowcat(...args: any[]): Pattern
/**
 * Concatenation: combines a list of patterns, switching between them successively, one per cycle. Unlike slowcat, this version will skip cycles.
 * @param items {any} The items to concatenate
 */
declare function slowcatPrime(items?: any, ...more: any[]): Pattern
/**
 * Divides a pattern into a given number of parts, then cycles through those parts in turn, applying the given function to each part in turn (one part per cycle).
 * Synonyms: slowChunk, slowchunk
 * @example
 * "0 1 2 3".chunk(4, x=>x.add(7))
 * .scale("A:minor").note()
 */
declare function slowchunk(...args: any[]): Pattern
declare function smear(...args: any[]): Pattern
/**
 * Soft-clipping distortion
 * @param distortion {number | Pattern} amount of distortion to apply
 * @param volume {number | Pattern} linear postgain of the distortion
 */
declare function soft(distortion?: any, volume?: any, ...more: any[]): Pattern
declare function sol2note(...args: any[]): Pattern
/**
 * Shorthand for .someCyclesBy(0.5, fn)
 * @example
 * s("bd,hh*8").someCycles(x=>x.speed("0.5"))
 */
declare function someCycles(...args: any[]): Pattern
/**
 * Randomly applies the given function by the given probability on a cycle by cycle basis.
 * Similar to sometimesBy
 * @param probability {number | Pattern} a number between 0 and 1
 * @param function {function} the transformation to apply
 * @example
 * s("bd,hh*8").someCyclesBy(.3, x=>x.speed("0.5"))
 */
declare function someCyclesBy(probability?: any, ...more: any[]): Pattern
/**
 * Applies the given function with a 50% chance
 * @param function {function} the transformation to apply
 * @example
 * s("hh*8").sometimes(x=>x.speed("0.5"))
 */
declare function sometimes(...args: any[]): Pattern
/**
 * Randomly applies the given function by the given probability.
 * Similar to someCyclesBy
 * @param probability {number | Pattern} a number between 0 and 1
 * @param function {function} the transformation to apply
 * @example
 * s("hh*8").sometimesBy(.4, x=>x.speed("0.5"))
 */
declare function sometimesBy(probability?: any, ...more: any[]): Pattern
declare function songPtr(...args: any[]): Pattern
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
declare function sound(sound?: any, ...more: any[]): Pattern
/**
 * Register an alias for a sound.
 * @param original {string} The original sound name
 * @param alias {string} The alias to use for the sound
 */
declare function soundAlias(original?: any, alias?: any, ...more: any[]): any
declare const soundMap: any
declare const soundfontList: any
/**
 * Define a custom webaudio node to use as a sound source.
 * Synonyms: src
 * @param getSource {function}
 */
declare function source(getSource?: any, ...more: any[]): Pattern
/**
 * Slow down a pattern over the given number of cycles. Like the "/" operator in mini notation.
 * Synonyms: sparsity
 * @param factor {number | Pattern} slow down factor
 * @example
 * s("bd hh sd hh").slow(2) // s("[bd hh sd hh]/2")
 */
declare function sparsity(factor?: any, ...more: any[]): Pattern
declare function speak(...args: any[]): Pattern
/**
 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
 * @param speed {number | Pattern} inf to inf, negative numbers play the sample backwards.
 * @example
 * s("bd*6").speed("1 2 4 1 -2 -4")
 * @example
 * speed("1 1.5*2 [2 1.1]").s("piano").clip(1)
 */
declare function speed(speed?: any, ...more: any[]): Pattern
/**
 * Works the same as slice, but changes the playback speed of each slice to match the duration of its step.
 * @example
 * samples('github:tidalcycles/dirt-samples')
 * s("breaks165")
 * .splice(8,  "0 1 [2 3 0]@2 3 0@2 7")
 */
declare function splice(...args: any[]): Pattern
declare function splitAt(...args: any[]): Pattern
/**
 * Set the stereo pan spread for supported oscillators
 * @param spread {number | Pattern} between 0 and 1
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").spread("<0 .3 1>")
 */
declare function spread(spread?: any, ...more: any[]): Pattern
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
declare function squeeze(pat?: any, xs?: any, ...more: any[]): Pattern
declare function squeezeBind(...args: any[]): Pattern
/**
 * Made by Calum Gunn. Reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter. The SuperCollider manual defines Squiz as:
 * "A simplistic pitch-raising algorithm. It's not meant to sound natural; its sound is reminiscent of some weird mixture of filter, ring-modulator and pitch-shifter, depending on the input. The algorithm works by cutting the signal into fragments (delimited by upwards-going zero-crossings) and squeezing those fragments in the time domain (i.e. simply playing them back faster than they came in), leaving silences inbetween. All the parameters apart from memlen can be modulated."
 * @param squiz {number | Pattern} Try passing multiples of 2 to it - 2, 4, 8 etc.
 * @example
 * squiz("2 4/2 6 [8 16]").s("bd").osc()
 */
declare function squiz(squiz?: any, ...more: any[]): Pattern
/**
 * Define a custom webaudio node to use as a sound source.
 * Synonyms: src
 * @param getSource {function}
 */
declare function src(getSource?: any, ...more: any[]): Pattern
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
declare function stack(...args: any[]): Pattern
declare function stackBy(...args: any[]): Pattern
declare function stackCentre(...args: any[]): Pattern
declare function stackLeft(...args: any[]): Pattern
declare function stackRight(...args: any[]): Pattern
declare function startPresetNote(...args: any[]): Pattern
declare function steady(...args: any[]): Pattern
declare function stepBind(...args: any[]): Pattern
/**
 * Experimental
 * Concatenates patterns stepwise, according to an inferred 'steps per cycle'.
 * Similar to stepcat, but if an argument is a list, the whole pattern will alternate between the elements in the list.
 * @example
 * stepalt(["bd cp", "mt"], "bd").sound()
 * // The same as "bd cp bd mt bd".sound()
 */
declare function stepalt(...args: any[]): Pattern
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
declare function stepcat(...args: any[]): Pattern
declare function steps(...args: any[]): Pattern
declare function stepsPerOctave(...args: any[]): Pattern
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
declare function strans(offset?: any, ...more: any[]): Pattern
/**
 * Changes the speed of sample playback, i.e. a cheap way of changing pitch.
 * @param factor {number | Pattern} inf to inf, negative numbers play the sample backwards.
 * @example
 * s("gm_flute").stretch("1 2 .5")
 */
declare function stretch(factor?: any, ...more: any[]): Pattern
/**
 * Cuts each sample into the given number of parts, triggering progressive portions of each sample at each loop.
 * @example
 * s("numbers:0 numbers:1 numbers:2").striate(6).slow(3)
 */
declare function striate(...args: any[]): Pattern
declare function stringifyValues(...args: any[]): Pattern
/**
 * Applies the given structure to the pattern:
 * @example
 * note("c,eb,g")
 *   .struct("x ~ x ~ ~ x ~ x ~ ~ ~ x ~ x ~ ~")
 *   .slow(2)
 */
declare function struct(...args: any[]): Pattern
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
declare function stut(times?: any, feedback?: any, time?: any, ...more: any[]): Pattern
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
declare function stutWith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
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
declare function stutwith(times?: any, time?: any, func?: any, ...more: any[]): Pattern
/**
 * Like add, but the given numbers are subtracted.
 * @example
 * n("0 2 4".sub("<0 1 2 3>")).scale("C4:minor")
 * // See add for more information.
 */
declare function sub(...args: any[]): Pattern
declare function superdough(...args: any[]): Pattern
declare function superdoughTrigger(...args: any[]): Pattern
/**
 * Superimposes the result of the given function(s) on top of the original pattern:
 * @example
 * "<0 2 4 6 ~ 4 ~ 2 0!3 ~!5>*8"
 *   .superimpose(x=>x.add(2))
 *   .scale('C minor').note()
 */
declare function superimpose(...args: any[]): Pattern
/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 * Synonyms: sus
 * @param gain {number | Pattern} sustain level between 0 and 1
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 */
declare function sus(gain?: any, ...more: any[]): Pattern
/**
 * Amplitude envelope sustain level: The level which is reached after attack / decay, being sustained until the offset.
 * Synonyms: sus
 * @param gain {number | Pattern} sustain level between 0 and 1
 * @example
 * note("c3 e3 f3 g3").decay(.2).sustain("<0 .1 .4 .6 1>")
 */
declare function sustain(gain?: any, ...more: any[]): Pattern
declare function sustainpedal(...args: any[]): Pattern
/**
 * Shorthand for swingBy with 1/3:
 * @param subdivision {number}
 * @example
 * s("hh*8").swing(4)
 * // s("hh*8").swingBy(1/3, 4)
 */
declare function swing(subdivision?: any, ...more: any[]): Pattern
/**
 * The function swingBy x n breaks each cycle into n slices, and then delays events in the second half of each slice by the amount x, which is relative to the size of the (half) slice. So if x is 0 it does nothing, 0.5 delays for half the note duration, and 1 will wrap around to doing nothing again. The end result is a shuffle or swing-like rhythm
 * @param subdivision {number}
 * @param offset {number}
 * @example
 * s("hh*8").swingBy(1/3, 4)
 */
declare function swingBy(subdivision?: any, offset?: any, ...more: any[]): Pattern
/**
 * MIDI sysex: Sends a MIDI sysex message.
 * @param id {number | Pattern} Sysex ID
 * @param data {number | Pattern} Sysex data
 * @example
 * note("c4").sysex(["0x77", "0x01:0x02:0x03:0x04"]).midichan(1).midi()
 */
declare function sysex(id?: any, data?: any, ...more: any[]): Pattern
/**
 * MIDI sysex data: Sends a MIDI sysex message.
 * @param data {number | Pattern} Sysex data
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
declare function sysexdata(data?: any, ...more: any[]): Pattern
/**
 * MIDI sysex ID: Sends a MIDI sysex identifier message.
 * @param id {number | Pattern} Sysex ID
 * @example
 * note("c4").sysexid("0x77").sysexdata("0x01:0x02:0x03:0x04").midichan(1).midi()
 */
declare function sysexid(id?: any, ...more: any[]): Pattern
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
declare function sz(size?: any, ...more: any[]): Pattern
/**
 * Loads a collection of wavetables to use with s
 */
declare function tables(...args: any[]): Pattern
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
declare function take(...args: any[]): Pattern
declare function theme(...args: any[]): Pattern
declare function themeColors(...args: any[]): Pattern
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
declare function timeCat(...args: any[]): Pattern
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
declare function timecat(...args: any[]): Pattern
declare function timeline(...args: any[]): Pattern
/**
 * Assumes a numerical pattern, containing unipolar values in the range 0 ..
 *
 * Returns a new pattern with values scaled to the bipolar range -1 .. 1
 */
declare function toBipolar(...args: any[]): Pattern
declare function toggleBlockComment(...args: any[]): Pattern
declare function toggleBlockCommentByLine(...args: any[]): Pattern
declare function toggleComment(...args: any[]): Pattern
declare function toggleLineComment(...args: any[]): Pattern
declare function tokenizeNote(...args: any[]): Pattern
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
declare function tour(...args: any[]): Pattern
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
declare function trans(amount?: any, ...more: any[]): Pattern
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
declare function transient(attack?: any, sustain?: any, ...more: any[]): Pattern
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
declare function transpose(amount?: any, ...more: any[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: trem
 * @param speed {number | Pattern} modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 */
declare function trem(speed?: any, ...more: any[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: trem
 * @param speed {number | Pattern} modulation speed in HZ
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolo("<3 2 100> ").tremoloskew("<.5>")
 */
declare function tremolo(speed?: any, ...more: any[]): Pattern
/**
 * Depth of amplitude modulation
 * Synonyms: tremdepth
 * @param depth {number | Pattern}
 * @example
 * note("a1 a1 a#1 a1".fast(4)).s("pulse").tremsync(4).tremolodepth("<1 2 .7>")
 */
declare function tremolodepth(depth?: any, ...more: any[]): Pattern
/**
 * Alter the phase of the modulation waveform
 * Synonyms: tremphase
 * @param offset {number | Pattern} the offset in cycles of the modulation
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremolophase("<0 .25 .66>")
 */
declare function tremolophase(offset?: any, ...more: any[]): Pattern
/**
 * Shape of amplitude modulation
 * Synonyms: tremshape
 * @param shape {number | Pattern} tri | square | sine | saw | ramp
 * @example
 * note("{f g c d}%16").tremsync(4).tremoloshape("<sine tri square>").s("sawtooth")
 */
declare function tremoloshape(shape?: any, ...more: any[]): Pattern
/**
 * Alter the shape of the modulation waveform
 * Synonyms: tremskew
 * @param amount {number | Pattern} between 0 & 1, the shape of the waveform
 * @example
 * note("{f a c e}%16").s("sawtooth").tremsync(4).tremoloskew("<.5 0 1>")
 */
declare function tremoloskew(amount?: any, ...more: any[]): Pattern
/**
 * Modulate the amplitude of a sound with a continuous waveform
 * Synonyms: tremsync
 * @param cycles {number | Pattern} modulation speed in cycles
 * @example
 * note("d d d# d".fast(4)).s("supersaw").tremolosync("4").tremoloskew("<1 .5 0>")
 */
declare function tremolosync(cycles?: any, ...more: any[]): Pattern
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
declare function triode(...args: any[]): Pattern
declare function tsdelay(...args: any[]): Pattern
declare function uid(...args: any[]): Pattern
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
declare function undegrade(...args: any[]): Pattern
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
declare function undegradeBy(amount?: any, ...more: any[]): Pattern
declare function unicodeToBase64(...args: any[]): Pattern
declare function uniq(...args: any[]): Pattern
declare function uniqsort(...args: any[]): Pattern
declare function uniqsortr(...args: any[]): Pattern
/**
 * Set number of stacked voices for supported oscillators
 * @param numvoices {number | Pattern}
 * @example
 * note("d f a a# a d3").fast(2).s("supersaw").unison("<1 2 7>")
 */
declare function unison(numvoices?: any, ...more: any[]): Pattern
/**
 * Used in conjunction with speed, accepts values of "r" (rate, default behavior), "c" (cycles), or "s" (seconds). Using unit "c" means speed will be interpreted in units of cycles, e.g. speed "1" means samples will be stretched to fill a cycle. Using unit "s" means the playback speed will be adjusted so that the duration is the number of seconds specified by speed.
 * @param unit {number | string | Pattern} see description above
 * @example
 * speed("1 2 .5 3").s("bd").unit("c").osc()
 */
declare function unit(unit?: any, ...more: any[]): Pattern
declare function updateMiniLocations(...args: any[]): Pattern
declare function updateSliderWidgets(...args: any[]): Pattern
declare function updateWidgets(...args: any[]): Pattern
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
declare function useRNG(mod?: any, ...more: any[]): any
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
declare function v(frequency?: any, ...more: any[]): Pattern
declare function val(...args: any[]): Pattern
declare function valueToMidi(...args: any[]): Pattern
/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 * Synonyms: vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
declare function vel(...args: any[]): Pattern
/**
 * Sets the velocity from 0 to 1. Is multiplied together with gain.
 * Synonyms: vel
 * @example
 * s("hh*8")
 * .gain(".4!2 1 .4!2 1 .4 1")
 * .velocity(".4 1")
 */
declare function velocity(...args: any[]): Pattern
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
declare function vib(frequency?: any, ...more: any[]): Pattern
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
declare function vibmod(depth?: any, ...more: any[]): Pattern
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
declare function vibrato(frequency?: any, ...more: any[]): Pattern
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
declare function vmod(depth?: any, ...more: any[]): Pattern
declare function voice(...args: any[]): Pattern
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
declare function voicing(...args: any[]): Pattern
declare function voicingAlias(...args: any[]): Pattern
declare const voicingRegistry: any
/**
 * DEPRECATED: still works, but it is recommended you use .voicing instead (without s).
 * Turns chord symbols into voicings, using the smoothest voice leading possible.
 * Uses chord-voicings package.
 * @param dictionary {string} which voicing dictionary to use.
 * @example
 * stack("<C^7 A7 Dm7 G7>".voicings('lefthand'), "<C3 A2 D3 G2>").note()
 */
declare function voicings(dictionary?: any, ...more: any[]): Pattern
/**
 * Formant filter to make things sound like vowels.
 * @param vowel {string | Pattern} You can use a e i o u ae aa oe ue y uh un en an on, corresponding to [a] [e] [i] [o] [u] [æ] [ɑ] [ø] [y] [ɯ] [ʌ] [œ̃] [ɛ̃] [ɑ̃] [ɔ̃]. Aliases: aa = å = ɑ, oe = ø = ö, y = ı, ae = æ.
 * @example
 * note("[c2 <eb2 <g2 g1>>]*2").s('sawtooth')
 * .vowel("<a e i <o u>>")
 * @example
 * s("bd sd mt ht bd [~ cp] ht lt").vowel("[a|e|i|o|u]")
 */
declare function vowel(vowel?: any, ...more: any[]): Pattern
declare function w(...args: any[]): Pattern
/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 * Synonyms: wavetableWarp
 * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
declare function warp(amount?: any, ...more: any[]): Pattern
/**
 * Attack time of the wavetable oscillator's warp envelope
 * Synonyms: warpatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function warpatt(time?: any, ...more: any[]): Pattern
/**
 * Attack time of the wavetable oscillator's warp envelope
 * Synonyms: warpatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function warpattack(time?: any, ...more: any[]): Pattern
/**
 * DC offset of the LFO for the wavetable oscillator's warp
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function warpdc(dcoffset?: any, ...more: any[]): Pattern
/**
 * Decay time of the wavetable oscillator's warp envelope
 * Synonyms: warpdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function warpdec(time?: any, ...more: any[]): Pattern
/**
 * Decay time of the wavetable oscillator's warp envelope
 * Synonyms: warpdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function warpdecay(time?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the wavetable oscillator's warp
 * @param depth {number | Pattern} depth of modulation
 */
declare function warpdepth(depth?: any, ...more: any[]): Pattern
/**
 * Amount of envelope applied wavetable oscillator's position envelope
 * @param amount {number | Pattern} between 0 and 1
 */
declare function warpenv(amount?: any, ...more: any[]): Pattern
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
declare function warpmode(mode?: any, ...more: any[]): Pattern
/**
 * Rate of the LFO for the wavetable oscillator's warp
 * @param rate {number | Pattern} rate in hertz
 */
declare function warprate(rate?: any, ...more: any[]): Pattern
/**
 * Release time of the wavetable oscillator's warp envelope
 * Synonyms: warprel
 * @param time {number | Pattern} release time in seconds
 */
declare function warprel(time?: any, ...more: any[]): Pattern
/**
 * Release time of the wavetable oscillator's warp envelope
 * Synonyms: warprel
 * @param time {number | Pattern} release time in seconds
 */
declare function warprelease(time?: any, ...more: any[]): Pattern
/**
 * Shape of the LFO for the wavetable oscillator's warp
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function warpshape(shape?: any, ...more: any[]): Pattern
/**
 * Skew of the LFO for the wavetable oscillator's warp
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function warpskew(skew?: any, ...more: any[]): Pattern
/**
 * Sustain time of the wavetable oscillator's warp envelope
 * Synonyms: warpsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function warpsus(gain?: any, ...more: any[]): Pattern
/**
 * Sustain time of the wavetable oscillator's warp envelope
 * Synonyms: warpsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function warpsustain(gain?: any, ...more: any[]): Pattern
/**
 * cycle synced rate of the LFO for the wavetable warp position
 * @param rate {number | Pattern} rate in cycles
 */
declare function warpsync(rate?: any, ...more: any[]): Pattern
declare function waveformN(...args: any[]): Pattern
declare function waveloss(...args: any[]): Pattern
/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 * Synonyms: wavetablePhaseRand
 * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 */
declare function wavetablePhaseRand(amount?: any, ...more: any[]): Pattern
/**
 * Position in the wavetable of the wavetable oscillator
 * Synonyms: wavetablePosition
 * @param position {number | Pattern} Position in the wavetable from 0 to 1
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
declare function wavetablePosition(position?: any, ...more: any[]): Pattern
/**
 * Amount of warp (alteration of the waveform) to apply to the wavetable oscillator
 * Synonyms: wavetableWarp
 * @param amount {number | Pattern} Warp of the wavetable from 0 to 1
 * @example
 * s("basique").bank("wt_digital").seg(8).note("F1").warp("0 0.25 0.5 0.75 1")
 *   .warpmode("spin")
 */
declare function wavetableWarp(amount?: any, ...more: any[]): Pattern
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
declare function wavetableWarpMode(mode?: any, ...more: any[]): Pattern
/**
 * Chooses randomly from the given list of elements by giving a probability to each element
 * @param pairs {any} arrays of value and weight
 * @example
 * note("c2 g2!2 d2 f1").s(wchoose(["sine",10], ["triangle",1], ["bd:6",1]))
 */
declare function wchoose(pairs?: any, ...more: any[]): Pattern
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
declare function wchooseCycles(...args: any[]): Pattern
declare function webAudioTimeout(...args: any[]): Pattern
declare function webaudioOutput(...args: any[]): Pattern
declare function webaudioRepl(...args: any[]): Pattern
/**
 * Applies the given function whenever the given pattern is in a true state.
 * @param binary_pat {Pattern}
 * @param func {function}
 * @example
 * "c3 eb3 g3".when("<0 1>/2", x=>x.sub("5")).note()
 */
declare function when(binary_pat?: any, func?: any, ...more: any[]): Pattern
/**
 * Do something on a keypress, or array of keypresses
 * Key name reference
 * @example
 * s("bd(5,8)").whenKey("Control:j", x => x.segment(16).color("red")).whenKey("Control:i", x => x.fast(2).color("blue"))
 */
declare function whenKey(...args: any[]): Pattern
declare const widgetPlugin: any
/**
 * Modify a pattern by applying a function to the randomSeed control if present
 * @param func {function} Function from seed (or undefined) to seed (or undefined)
 * @param pat {Pattern} Pattern to update
 */
declare function withSeed(func?: any, pat?: any, ...more: any[]): Pattern
/**
 * Returns a new pattern, with the function applied to the value of
 * each hap. It has the alias fmap.
 * Synonyms: fmap
 * @param func {function} to to apply to the value
 * @example
 * "0 1 2".withValue(v => v + 10).log()
 */
declare function withValue(func?: any, ...more: any[]): Pattern
/**
 * Use within to apply a function to only a part of a pattern.
 * @param start {number} start within cycle (0 - 1)
 * @param end {number} end within cycle (0 - 1). Must be > start
 * @param func {function} function to be applied to the sub-pattern
 */
declare function within(start?: any, end?: any, func?: any, ...more: any[]): Pattern
/**
 * Creates a worklet effect. Typically derived by writing K(...) in the REPL which will parse
 * Kabelsalat code.
 * @param src {string} Source code of the worklet update function
 * @param inputs {number | Pattern} Worklet inputs
 */
declare function worklet(src?: any, inputs?: any, ...more: any[]): Pattern
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
declare function wrandcat(...args: any[]): Pattern
/**
 * Position in the wavetable of the wavetable oscillator
 * Synonyms: wavetablePosition
 * @param position {number | Pattern} Position in the wavetable from 0 to 1
 * @example
 * s("squelch").bank("wt_digital").seg(8).note("F1").wt("0 0.25 0.5 0.75 1")
 */
declare function wt(position?: any, ...more: any[]): Pattern
/**
 * Attack time of the wavetable oscillator's position envelope
 * Synonyms: wtatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function wtatt(time?: any, ...more: any[]): Pattern
/**
 * Attack time of the wavetable oscillator's position envelope
 * Synonyms: wtatt
 * @param time {number | Pattern} attack time in seconds
 */
declare function wtattack(time?: any, ...more: any[]): Pattern
/**
 * DC offset of the LFO for the wavetable oscillator's position
 * @param dcoffset {number | Pattern} dc offset. set to 0 for unipolar
 */
declare function wtdc(dcoffset?: any, ...more: any[]): Pattern
/**
 * Decay time of the wavetable oscillator's position envelope
 * Synonyms: wtdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function wtdec(time?: any, ...more: any[]): Pattern
/**
 * Decay time of the wavetable oscillator's position envelope
 * Synonyms: wtdec
 * @param time {number | Pattern} decay time in seconds
 */
declare function wtdecay(time?: any, ...more: any[]): Pattern
/**
 * Depth of the LFO for the wavetable oscillator's position
 * @param depth {number | Pattern} depth of modulation
 */
declare function wtdepth(depth?: any, ...more: any[]): Pattern
/**
 * Amount of envelope applied wavetable oscillator's position envelope
 * @param amount {number | Pattern} between 0 and 1
 */
declare function wtenv(amount?: any, ...more: any[]): Pattern
/**
 * Amount of randomness of the initial phase of the wavetable oscillator.
 * Synonyms: wavetablePhaseRand
 * @param amount {number | Pattern} Randomness of the initial phase. Between 0 (not random) and 1 (fully random)
 * @example
 * s("basique").bank("wt_digital").seg(16).wtphaserand("<0 1>")
 */
declare function wtphaserand(amount?: any, ...more: any[]): Pattern
/**
 * Rate of the LFO for the wavetable oscillator's position
 * @param rate {number | Pattern} rate in hertz
 */
declare function wtrate(rate?: any, ...more: any[]): Pattern
/**
 * Release time of the wavetable oscillator's position envelope
 * Synonyms: wtrel
 * @param time {number | Pattern} release time in seconds
 */
declare function wtrel(time?: any, ...more: any[]): Pattern
/**
 * Release time of the wavetable oscillator's position envelope
 * Synonyms: wtrel
 * @param time {number | Pattern} release time in seconds
 */
declare function wtrelease(time?: any, ...more: any[]): Pattern
/**
 * Shape of the LFO for the wavetable oscillator's position
 * @param shape {number | Pattern} Shape of the lfo (0, 1, 2, ..)
 */
declare function wtshape(shape?: any, ...more: any[]): Pattern
/**
 * Skew of the LFO for the wavetable oscillator's position
 * @param skew {number | Pattern} How much to bend the LFO shape
 */
declare function wtskew(skew?: any, ...more: any[]): Pattern
/**
 * Sustain time of the wavetable oscillator's position envelope
 * Synonyms: wtsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function wtsus(gain?: any, ...more: any[]): Pattern
/**
 * Sustain time of the wavetable oscillator's position envelope
 * Synonyms: wtsus
 * @param gain {number | Pattern} sustain level (0 to 1)
 */
declare function wtsustain(gain?: any, ...more: any[]): Pattern
/**
 * cycle synced rate of the LFO for the wavetable oscillator's position
 * @param rate {number | Pattern} rate in cycles
 */
declare function wtsync(rate?: any, ...more: any[]): Pattern
declare function x(...args: any[]): Pattern
/**
 * Cross-fades between left and right from 0 to 1:
 *
 * 0 = (full left, no right)
 * .5 = (both equal)
 * 1 = (no left, full right)
 * @example
 * xfade(s("bd*2"), "<0 .25 .5 .75 1>", s("hh*8"))
 */
declare function xfade(...args: any[]): Pattern
declare function xsdelay(...args: any[]): Pattern
declare function y(...args: any[]): Pattern
declare function zcrush(...args: any[]): Pattern
declare function zdelay(...args: any[]): Pattern
/**
 * Experimental
 * 'zips' together the steps of the provided patterns. This can create a long repetition, taking place over a single, dense cycle.
 * Using pace to set the number of steps per cycle is therefore usually recommended.
 * @example
 * zip("e f", "e f g", "g [f e] a f4 c").note()
 *    .sound("folkharp")
 *    .pace(8)
 */
declare function zip(...args: any[]): Pattern
declare function zipWith(...args: any[]): Pattern
declare function zmod(...args: any[]): Pattern
declare function znoise(...args: any[]): Pattern
/**
 * Plays a portion of a pattern, specified by the beginning and end of a time span. The new resulting pattern is played over the time period of the original pattern:
 * @example
 * s("bd*2 hh*3 [sd bd]*2 perc").zoom(0.25, 0.75)
 * // s("hh*3 [sd bd]*2") // equivalent
 */
declare function zoom(...args: any[]): Pattern
declare function zoomArc(...args: any[]): Pattern
declare function zoomIn(...args: any[]): Pattern
declare function zoomarc(...args: any[]): Pattern
declare function zrand(...args: any[]): Pattern
declare function zzfx(...args: any[]): Pattern
