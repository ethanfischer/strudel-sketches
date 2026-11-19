//"Acid Poly" @by Pink Chaos

// ============================================================
//  SETUP
// ============================================================
const ACCENT = '#00FFD6'
const NEG = '#FF4FD8'
const GOLD = '#FFD479'
// index.html sets siteMode. The site hides the panels for tuning: CONTROLS, stats, meters and source.
const SITE = window.siteMode === true

setGainCurve(x => Math.pow(x, 2))

register('o', (orbit, pat) => pat.orbit(orbit))

register('acidenv', (x, pat) => pat.lpf(200).lpenv(x * 12).lps(.4).lpd(.12))

// amt 0 = clean, 1 = full electric
register('electric', (amt, pat) => pat
  .fm(perlin.mul(amt).range(0, 6))
  .vib(14).vibmod(.25 * amt)
  .crush(perlin.slow(4).mul(amt).range(10, 4))
  .pan(sine.fast(3)))

// ============================================================
//  CONTROLS  — everything here shows up in the UI panel
//  Format: name: [default, min, max, step?]   (single quotes only!)
// ============================================================

const ui = controlPanel({
  key: { root: 'e', mode: 'minor' },
  sliders: {
    SOUND: {
      energy:    [0, 0, 1],
      duckDepth: [1, 0, 1],
      spiderFmh: [1, 1, 6, .01],
    },
    MIX: {
      kick:   [.8, 0, 1],
      spider: [.2, 0, 1],
      bass:   [.75, 0, 1],
      pad:    [.35, 0, 1],
    },
    // Tune these while you play: ctrl+enter starts a new session
    GAME: {
      fullWpm: [100, 20, 200, 1],   // WPM for energy 1 and maxBpm
      minBpm:  [80, 40, 160, 1],    // tempo at 0 WPM
      maxBpm:  [110, 40, 200, 1],   // tempo at fullWpm
      // In the first WPM_WINDOW_S only. Then the spider follows your best; high comes only from the hold.
      spiderMed:  [78, 0, 200, 1],  // WPM where the spider goes from low to medium
    },
  },
})

const { KEY, energy } = ui

// ============================================================
//  GAME  — type quotes; your typing drives the music
// ============================================================

const KEY_OK   = 'e:minor'    // no typo
const KEY_TYPO = 'c:dorian'   // a typo is not fixed yet

const WPM_WINDOW_S    = 10    // rolling WPM window: stats, choir and tempo
const ENERGY_WINDOW_S = 3     // shorter window for energy, so it follows your speed fast
const CHOIR_HOLD_S    = 15    // hold your best this long to bring in the choir
const CHOIR_BAND      = .8    // "your best" = 80% or more of best
const SPIDER_MED_BAND = .6    // spider medium from 60% of best
const SPIDER_HIGH_HOLD_S = 8  // spider high after you hold your best this long; the choir comes at CHOIR_HOLD_S
const SPIDER_STEP_DOWN_S = 4  // on the way down, the spider stays at each level this long
const CHOIR_GRACE_S   = 1.5   // a dip below the band shorter than this pauses the hold, not resets it
const CHOIR_FADE_IN_S = 4     // the choir gets louder over this time when it starts
const BEST_FADE       = 1     // WPM per second that best falls while you type below it
const LOOKAHEAD_WORDS = 50    // words to keep queued
// Monkeytype's English quotes (GPL-3.0), pinned to one commit
const QUOTES_URL = 'https://cdn.jsdelivr.net/gh/monkeytypegame/monkeytype@20b9530d720f04a4710853534c6f885d3cfe0d4c/frontend/static/quotes/english.json'
// Only quotes from these sources: cyberpunk, AI games and dystopias (about 130 quotes). Matched on the source name.
const QUOTE_SOURCES = /mr\. robot|the matrix|deus ex|blade runner|serial experiments|black mirror|westworld|terminator|ghost in the shell|^hackers$|system shock|total recall|tron:|detroit: become|portal|half-life|metal gear|ready player|evangelion|^1984|orwell|fahrenheit 451|brave new world/i

// Fire: energy sets the size of the flame; the choir turns it blue
const FIRE_W = 40, FIRE_H = 18     // the flame grid, in characters
const FIRE_C = 20, FIRE_HALF = 9   // center column (the | of the kindling), half width of the base
const FIRE_HEAD = 4                // rows above the flame where only sparks go
const FIRE_UNDER_TEXT = 3          // rows of flame between the kindling and the text, which lies over the fire
const FIRE_FRAME_MS = 60
// The fire follows the energy, but climbs slowly: FIRE_RISE_S from cold to roaring. It dies down faster.
// The music still follows the energy at once; the fire, the text colors and the train follow the fire.
const FIRE_RISE_S = 20
const FIRE_FALL_S = 4
const FIRE_RAMP = ' .:-=+*#%@'     // cool → hot
// Sticks that lean together over two logs. The | is at column FIRE_C.
const KINDLING = [
  '               \\\\  \\|/  //',
  '              \\\\\\\\ \\|/ ////',
  '             ((==\\\\=|=//==))',
  '            (____)(___)(____)',
]
// [heat or energy, [r, g, b]]
const FIRE_STOPS  = [[0, [60, 6, 0]], [.2, [130, 20, 0]], [.35, [200, 45, 0]], [.5, [255, 110, 10]], [.7, [255, 212, 121]], [.9, [255, 246, 220]]]
const CHOIR_STOPS = [[0, [0, 10, 70]], [.2, [0, 35, 150]], [.35, [20, 80, 230]], [.5, [40, 145, 255]], [.7, [120, 210, 255]], [.9, [225, 245, 255]]]
const FIRE_CORE   = [175, 225, 255]   // the core moves toward this while you hold your best
const FIRE_EMBER  = [255, 35, 25]     // sparks and logs while the choir plays
// The text heats up with energy (white, gold, orange) and turns blue with the choir. Upcoming text stays darker.
const TEXT_DONE   = [[0, [255, 255, 255]], [.5, [255, 212, 121]], [1, [255, 140, 40]]]
const TEXT_NEXT   = [[0, [102, 102, 102]], [.5, [135, 100, 70]], [1, [165, 80, 40]]]
const TEXT_CHOIR  = { done: [130, 205, 255], next: [70, 110, 180] }

// The train crosses a city at night. The hotter the fire, the faster it goes; cold, it stands still.
const TRAIN_ROWS  = 12     // 0-3 sky and smoke, 4-8 train, 9 track, 10-11 ground
const TRAIN_SPEED = 270    // track columns per second at energy 1 (the speed is TRAIN_SPEED * energy^1.4)
const TRAIN_FRAME_MS = 30  // faster than the fire, so the city slides instead of jumping
// A heavy train: the fire sets the speed it goes toward, and the speed changes only this fast
const TRAIN_ACCEL = 7.5    // columns/s per second: 0 to full speed in about 36 s
const TRAIN_BRAKE = 10.5   // columns/s per second: full speed to a stop in about 26 s
const TRAIN_LOCO  = [
  ' _______     _        ',
  '|  ___  |___| |____   ',
  '| |###| |         |\\  ',   // ### is the firebox: it glows in the fire's color
  '|_|___|_|_________|_\\_',
  '  (O)(O)   (o)(o)  o  ',   // the wheels: o and O turn into spokes
]
const TRAIN_CAR   = [
  '              ',
  ' ____________ ',
  '|  []  []  []|',
  '|____________|',
  '  (o)    (o)  ',
]
// Neon signs on the near buildings, and their colors
const TRAIN_SIGNS = ['NOODLES', 'HOTEL', 'BAR', '24H', 'CHROME', 'SYNTH', 'DATA', 'RAMEN', 'CLINIC', 'OPEN', 'ARCADE', 'NO SIGNAL']
// The city colors go from Ember (cold fire) to Furnace (hot fire): the hotter the fire, the redder the city.
// Gruvbox colors; neon[3] and light change at once at TRAIN_ACCENT_AT, because orange to aqua blends to mud.
const TRAIN_EMBER = {
  far: [58, 40, 36], near: [90, 51, 40], rain: [78, 58, 50], pylon: [124, 111, 100], leg: [80, 73, 69],
  neon: [[251, 73, 52], [254, 128, 25], [250, 189, 47], [214, 93, 14]], light: [254, 128, 25], antenna: [251, 73, 52],
  track: [214, 93, 14], cars: [[251, 73, 52], [250, 189, 47]], body: [189, 174, 147], win: [250, 189, 47], wheel: [235, 219, 178],
}
const TRAIN_FURNACE = {
  far: [60, 34, 32], near: [94, 42, 36], rain: [74, 48, 44], pylon: [124, 95, 88], leg: [80, 73, 69],
  neon: [[251, 73, 52], [204, 36, 29], [254, 128, 25], [142, 192, 124]], light: [142, 192, 124], antenna: [251, 73, 52],
  track: [204, 36, 29], cars: [[251, 73, 52], [254, 128, 25]], body: [201, 185, 154], win: [254, 128, 25], wheel: [235, 219, 178],
}
const TRAIN_ACCENT_AT = .6

stopGame()
startGame()
if (!SITE) hideKey()


// ============================================================
//  DRUMS
// ============================================================

$: s("bd:4!4")
  .duck("3:4:5:6:7:8")
  .duckdepth(ui.duckDepth)      // how hard the kick pumps everything
  .duckattack(.12)
  .postgain(ui.kick)
  //.color("yellow")._scope()

_$: s("[- hh]*4")
  .gain(ui.hats)
  .delay(.4)
  .room(.1)
  //.o(5)

_$: s("[- cp]*2")
  .postgain(ui.clap)
  .delay(.4)
  .room(.2).rsize(2)
  //.electric(.5)
  //.o(8)

_$: s("[- oh]*4")
  .gain(ui.ride)
  .room(0.2)
  .delay(0.25)

// ============================================================
//  LEADS
// ============================================================

_$: note("<5 4 0 9 7>*16")
  .late(.01)
  .scale(KEY)
  .s("sawtooth")
  .acidenv(energy.mul(.4))
  .room(.6).rsize(.8)
  .o(3)
  .postgain(ui.lead1)
  //.color("cyan")._punchcard()

// Spider — the melody climbs as you hold your best (see spiderLevel in tick())
var low = "<- 7 7 - 7 7>*12"
var medium = "<9 8 7 7 8 9>*12"
var high = "<12 9 8 7 9 11>*12"
var melody = ref(() => window.game.spiderLevel).pick([low, medium, high])

$: note(melody)
  .scale(KEY)
  .s("square")
  .fmh(ui.spiderFmh)      // harmonicity: whole numbers = in tune, between = clangy
  .electric(energy)
  .lpf(2000)
  .sometimesBy(.5, x => x.ply("[2 1!11]")
    .decay(.075)
    .sustain("[0 .6!11]")
    .lpf("2500 2000!11"))
     //.off(1/24, x => x.transpose(12).gain(.5).pan(cosine.fast(3)))
  //.delay(.5)
  //.delayfeedback(slider(0, 0, .95))  // web density; capped below 1 to avoid runaway
  .room(.7).rsize(2)
  .postgain(ui.spider)
  //.o(6)
  .color("#00FFD6")._punchcard()

// ============================================================
//  BASS
// ============================================================

$: note("<0>*12")
  .scale(KEY).trans("<-24>/2")
  .detune(rand)
  .s("supersaw")
  .acidenv(energy.range(.05, .2))
  .o(4)
  .postgain(ui.bass)
  .color("magenta")._punchcard()

// ============================================================
//  PAD
// ============================================================

// A new chord every half cycle (one step). Each chord lasts two steps, and its attack and release
// are one step each, so one chord fades in while the one before fades out: no restart is heard.
const choirStep = ref(() => 30 / window.game.cpm)   // seconds in half a cycle
$: n("[0, 4, 9]*2")   // triad on degree 1 — follows KEY
  .mask(ref(() => window.game?.choir ? 1 : 0))   // only while you hold your best WPM
  //.mask(1)   // for testing
  .scale(KEY)
  .s("gm_choir_aahs")
  .n(6)
  //.hpf(1000)
  .lpf(600)
  .clip(2)
  .attack(choirStep)
  .release(choirStep)
  .sustain(1)
  // Fades in over CHOIR_FADE_IN_S. Up to 3 chords sound at once, so .6 keeps about the old level.
  .gain(ref(() => window.game.choirLevel * .6))
  //.room(0.7)
  //.rsize(4)
  .postgain(ui.pad)
  //.postgain(.5) //testing
  //.color("orange")._punchcard()

// ============================================================
//  3 OSC SYNTH
// ============================================================

const chaos3Osc = pat =>
  stack(
    pat.s("sawtooth"),
    pat.s("sawtooth").add(7),
    pat.s("triangle").sub(12),
    pat.s("noise").hpf(4000).lpf(9000).gain(0.08)
  )
    .lpf(1200)
    .attack(0.02).decay(0.5).sustain(0.8).release(1.0)
    .shape(0.25)
    .room(0.5)
    .rsize(3)
    .postgain("<.1 .2 .25 .3 .3 .25 .2>/8")

_$: chaos3Osc(
    note("<[5 [4@3.5 0@4.5] 9 4]!3 [5 [4@3.5 0@4.5] 9@2]>/4"))
  .scale(KEY)
  //.color("#978EFF")._punchcard()


// ============================================================
//  GAME ENGINE — quotes in; WPM, typos and choir out. No music below this line.
//  Single quotes throughout: Strudel turns "double quotes" into patterns.
// ============================================================

function startGame() {
  const minBpm = window.controlState.minBpm
  // With the panels hidden, the music keeps the state of the last session, so you hear what you are changing
  const frozen = uiHidden() ? window.game : null

  // A new session on every evaluate
  const g = window.game = {
    timer: null,
    quotes: null,                  // [{ words, source }], when the quotes have loaded
    words: [], wi: 0, typed: '',   // the text, the active word, what you typed of it
    typo: false,                   // a wrong letter is not fixed yet
    // Word counts since the start. The scroll removes words from the start of `words`, so wi cannot be used.
    total: 0, done: 0,             // words added to the text, words finished
    passages: [],                  // { endAt, source } for each quote in the text that is not finished
    lastSource: '',                // source of the last quote you finished
    status: '',
    hits: [],                      // times of correct keystrokes, for rolling WPM
    keys: 0, wrong: 0, startedAt: null,
    wpm: 0, energyWpm: 0, best: 0,
    spiderLevel: 0, spiderDownSince: null,   // 0 low, 1 medium, 2 high; since when the target is lower
    held: 0, outSince: null, choir: false,   // seconds held in the band; when you left it
    choirLevel: 0,                           // 0..1, fades in when the choir starts
    choirChords: [], nextChord: null,        // the choir chords as we expect them: { at, gain, step }
    lastTick: Date.now(),
    bpm: minBpm, cpm: Math.round(minBpm) / 4,
    fireTimer: null,
    trainTimer: null,
    flame: 0,                                  // 0..1, the energy the fire shows (FIRE_RISE_S)
    heat: new Float32Array(FIRE_W * FIRE_H),   // 0..1 per cell, row by row from the top
    sparks: [],                                // { x, y, life }
    trainX: 0,                                 // how far the train has gone, in track columns
    trainV: 0,                                 // its speed, in columns per second
    trainT: 0,                                 // seconds of train frames, for the rain
    puffs: [],                                 // train smoke: { x, y, age }
    blue: 0,                                   // 0 = normal fire, 1 = choir fire; eases between them
    colors: new Map(),                         // flame color cache
    view: null,
  }
  if (frozen) {
    for (const k of ['bpm', 'cpm', 'spiderLevel', 'held', 'choir', 'choirLevel', 'trainV', 'flame']) g[k] = frozen[k]
  } else {
    setControl('energy', 0)
  }
  window.keyControl.set(KEY_OK)
  setCpm(g.cpm)

  // The quotes load once per page (cached by URL). After a failure, a re-run tries again.
  window.quoteLists ??= {}
  window.quoteLists[QUOTES_URL] ??= fetchOk(QUOTES_URL).then(r => r.json())
    .then(j => j.quotes.filter(usable).map(q => ({ words: typeable(q.text), source: q.source })))
  window.quoteLists[QUOTES_URL].then(
    // The theme filter is here, not in the cached list, so a change to QUOTE_SOURCES applies on the next run
    list => { g.quotes = list.filter(q => QUOTE_SOURCES.test(q.source.trim())); refill(g); render(g) },
    err => { delete window.quoteLists[QUOTES_URL]; g.status = 'quotes did not load (' + err.message + '), re-run to retry'; render(g) })

  g.view = typingPanel(g)
  fireFrame(g)   // sets the text colors before the first render
  render(g)
  g.timer = setInterval(() => tick(g), 100)
  g.fireTimer = setInterval(() => fireFrame(g), FIRE_FRAME_MS)
  g.trainTimer = setInterval(() => trainFrame(g), TRAIN_FRAME_MS)
}

function stopGame() {
  clearInterval(window.game?.timer)
  clearInterval(window.game?.fireTimer)
  clearInterval(window.game?.trainTimer)
  // An older version of this file may still run in this tab: its Bluesky feed (window.game.ws),
  // and window.bsky with a mood timer that changes the key and AI-mention code that changes energy.
  window.game?.ws?.close()
  window.bsky?.ws?.close()
  clearInterval(window.bsky?.timer)
  clearInterval(window.bsky?.renderTimer)
  window.bsky = null
}

// Skip a quote if typeable() would leave a hole in it: digits ("about 8 hours" would become "about hours"),
// & = +, a word too long for one line, or a dropped token such as e.g. or and/or
function usable(q) {
  return !/[\d&=+]|[a-z]{21,}/i.test(q.text) && !hasHole(q.text)
}

// Quote text → words you can type: lowercase a-z and apostrophes, no links or @handles
function typeable(text) {
  return text.toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')   // café → cafe
    .replace(/[’‘ʼ]/g, '\'')
    .split(/\s+/)
    .filter(t => !isLinkLike(t))
    .join(' ')
    .replace(/[-–—]/g, ' ')
    .replace(/[^a-z' ]/g, '')
    .split(' ')
    .map(w => w.replace(/^'+|'+$/g, ''))
    .filter(w => w && w.length <= 20)   // a longer word does not fit on one line
}

// Links, @handles and dotted tokens such as u.s. or e.g. (t is lowercase)
function isLinkLike(t) {
  return /[\/@]|www\.|[a-z]\.[a-z]/.test(t)
}

// True if typeable() would drop a token between two words and leave a hole in the sentence.
// A link or @handle at the start or end is fine.
function hasHole(text) {
  const kinds = text.toLowerCase().split(/\s+/).map(t => isLinkLike(t) ? 'drop' : /[a-z]/.test(t) ? 'word' : 'other')
  return kinds.slice(kinds.indexOf('word'), kinds.lastIndexOf('word') + 1).includes('drop')
}

function fetchOk(url) {
  return fetch(url).then(r => { if (!r.ok) throw new Error('HTTP ' + r.status + ' ' + url); return r })
}

function onKey(g, e) {
  if (e.key === 'Escape') { e.currentTarget.blur(); return }
  const clearWord = e.key === 'Backspace' && (e.ctrlKey || e.altKey)
  if (!clearWord && (e.ctrlKey || e.metaKey || e.altKey)) return   // leave Strudel shortcuts alone
  if (e.key !== 'Backspace' && e.key.length !== 1) return          // Tab, arrows, Shift… and Android's 'Unidentified' (onInput)
  e.preventDefault()   // also stops the key going into the textarea, so onInput does not see it
  e.stopPropagation()
  typeKey(g, e.key, clearWord)
}

// A phone keyboard can skip keydown (Android sends 'Unidentified') or put in a whole word at once
// (a prediction). That text comes here; we type it one letter at a time and empty the textarea.
function onInput(g, e) {
  const input = e.currentTarget
  if (e.inputType === 'deleteContentBackward') typeKey(g, 'Backspace', false)
  else for (const ch of (e.data ?? input.value).replace(/\n/g, '')) typeKey(g, ch, false)   // Enter is not a key of the game
  input.value = ''
}

function typeKey(g, key, clearWord) {
  const word = g.words[g.wi]
  if (word == null) return   // no text yet
  const target = word + ' '   // the space that ends a word is part of it

  if (clearWord) {
    let ok = 0
    while (ok < g.typed.length && g.typed[ok] === target[ok]) ok++
    g.hits.length = Math.max(0, g.hits.length - ok)
    g.typed = ''
  } else if (key === 'Backspace') {
    if (g.typed && target.startsWith(g.typed)) g.hits.pop()   // the removed letter was correct
    g.typed = g.typed.slice(0, -1)
  } else if (g.typed.length < target.length + 10) {
    g.startedAt ??= Date.now()
    g.typed += key
    g.keys++
    if (target.startsWith(g.typed)) g.hits.push(Date.now())
    else g.wrong++
    if (g.typed === target) {
      g.wi++
      g.done++
      g.typed = ''
      if (g.done === g.passages[0].endAt) g.lastSource = g.passages.shift().source
      refill(g)
    }
  }

  const next = g.words[g.wi]
  g.typo = next != null && !(next + ' ').startsWith(g.typed)
  window.keyControl.set(g.typo ? KEY_TYPO : KEY_OK)
  if (g.typo) {   // a typo stops the choir now, not at the next tick
    g.held = 0
    g.choir = false
  }
  render(g)
}

function tick(g) {
  const now = Date.now()
  // Panels hidden: the music holds where it is (energy, tempo, spider, choir) until you show them again
  if (uiHidden()) {
    g.lastTick = now
    return
  }
  const { fullWpm, minBpm, maxBpm, spiderMed } = window.controlState

  // Rolling WPM: correct characters / 5 over the whole window, so it ramps up from 0
  const wpmOver = s => g.hits.filter(t => now - t <= s * 1000).length / 5 / (s / 60)
  while (g.hits.length && now - g.hits[0] > Math.max(WPM_WINDOW_S, ENERGY_WINDOW_S) * 1000) g.hits.shift()
  g.wpm = wpmOver(WPM_WINDOW_S)
  g.energyWpm = wpmOver(ENERGY_WINDOW_S)

  // Choir: hold near your best for CHOIR_HOLD_S. Wait one full window first,
  // so the ramp-up at the start does not count.
  const dt = (now - g.lastTick) / 1000
  g.lastTick = now
  const warm = g.startedAt != null && now - g.startedAt >= WPM_WINDOW_S * 1000
  // Best fades while you type below it, so an old burst stops blocking the choir
  if (warm) g.best = Math.max(g.wpm, g.best - BEST_FADE * dt)
  const inBand = warm && g.wpm > 0 && g.wpm >= g.best * CHOIR_BAND
  if (inBand) {
    g.held = Math.min(g.held + dt, CHOIR_HOLD_S)
    g.outSince = null
  } else {
    g.outSince ??= now
    if (now - g.outSince > CHOIR_GRACE_S * 1000) g.held = 0
  }
  if (g.typo) g.held = 0   // the hold starts again only after you fix the typo
  g.choir = g.held >= CHOIR_HOLD_S
  // Each new choir chord takes this level at its start
  g.choirLevel = g.choir ? Math.min(1, g.choirLevel + dt / CHOIR_FADE_IN_S) : 0
  // The fire follows the choir chords (choirHeard). We do not know where Strudel is in its half cycle,
  // so we expect the first chord half a step after the choir starts (up to half a step off), then one each step.
  if (g.choir) {
    const step = 30 / g.cpm
    g.nextChord ??= now + step * 500
    while (g.nextChord <= now) {
      g.choirChords.push({ at: g.nextChord, gain: g.choirLevel, step })
      g.nextChord += step * 1000
    }
  } else {
    g.nextChord = null
    g.choirChords = []
  }

  steer('energy', g.energyWpm / fullWpm, 0, 1, .2)
  const pace = clamp(g.wpm / fullWpm, 0, 1)

  // Tempo glides toward the target; setCpm only when the rounded BPM changes
  g.bpm += (minBpm + (maxBpm - minBpm) * pace - g.bpm) * .1
  const cpm = Math.round(g.bpm) / 4
  if (cpm !== g.cpm) {
    g.cpm = cpm
    setCpm(cpm)
  }

  // Spider melody follows your best and the choir hold: medium near your best, high after
  // SPIDER_HIGH_HOLD_S of hold, then the choir. The blue flame always comes with the high spider.
  // In the first window you have no best yet, so it goes only to medium, at spiderMed.
  // It uses the same WPM as the stats line, so it does not flip on every pause.
  const spiderTarget = !warm ? (g.wpm >= spiderMed ? 1 : 0)
    : g.choir || g.held >= SPIDER_HIGH_HOLD_S ? 2
    : g.wpm > 0 && g.wpm >= g.best * SPIDER_MED_BAND ? 1 : 0
  // It climbs at once, but cools down slowly: one level at a time, after the target has been lower
  // for SPIDER_STEP_DOWN_S. So a typo or a stop does not drop it straight to low.
  if (spiderTarget >= g.spiderLevel) {
    g.spiderLevel = spiderTarget
    g.spiderDownSince = null
  } else {
    g.spiderDownSince ??= now
    if (now - g.spiderDownSince >= SPIDER_STEP_DOWN_S * 1000) {
      g.spiderLevel--
      g.spiderDownSince = now
    }
  }

  if (refill(g)) render(g)

  const v = g.view
  const acc = g.keys ? Math.round(100 * (g.keys - g.wrong) / g.keys) : 100
  v.stats.textContent = Math.round(g.wpm) + ' wpm · best ' + Math.round(g.best) + ' · ' + acc + '% acc · '
    + Math.round(g.bpm) + ' bpm · ' + window.keyControl.get().replace(':', ' ')
  v.status.textContent = g.status
  v.source.textContent = g.lastSource && '— ' + g.lastSource
  const energy = window.controlState.energy
  v.energy.set(energy, energy.toFixed(2), GOLD)
  // Pink while you are below the band and the grace time runs
  v.choir.set(g.held / CHOIR_HOLD_S, g.choir ? 'ON' : Math.floor(g.held) + '/' + CHOIR_HOLD_S + 's',
    g.outSince == null ? ACCENT : NEG)
}

// Append random quotes while the text is running low. Returns true if it did.
function refill(g) {
  let added = false
  while (g.quotes && g.words.length - g.wi < LOOKAHEAD_WORDS) {
    const q = g.quotes[Math.floor(Math.random() * g.quotes.length)]
    g.words.push(...q.words)
    g.total += q.words.length
    g.passages.push({ endAt: g.total, source: q.source })
    added = true
  }
  return added
}

function typingPanel(g) {
  const stats = el('span', { style: { opacity: .85 } })
  const status = el('span', { style: { color: NEG } })
  const energyMeter = meter('energy')
  const choirMeter = meter('choir')
  const text = el('div', {
    style: {
      position: 'relative', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', opacity: .3,
      justifyContent: 'center',   // each line is centered over the fire
      textShadow: '0 0 3px #000, 0 0 6px #000, 0 0 10px #000',   // cuts the text out of the flames behind it
    },
  })
  const phone = matchMedia('(pointer: coarse)').matches
  const hint = el('div', {
    textContent: phone ? 'tap to type' : 'click to type',
    style: {
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: ACCENT, font: '16px monospace',
    },
  })
  // 32px on the site; smaller on strudel.cc, so the panel covers less of the code. It also stops at the
  // window: all its rows fit in the height, and its columns (0.6em each) fit in the panel width.
  // On the site the height is the part of the page you can see (--screen-h, followViewport), which is
  // smaller while a phone keyboard is open. On a phone there, the spark rows (FIRE_HEAD) may go off the
  // top, so the fire is bigger and the text can be at the center (followViewport).
  // The train (trainFrame). On the site it is a band at the top of the screen; on a phone the flame can climb
  // behind it, on a desktop the fire fits under it. On strudel.cc it is in the panel, over the fire.
  const trainFont = SITE ? (phone ? 10 : 14) : 11
  const trainPx = SITE ? innerWidth - 16 : Math.min(820, innerWidth * .92) - 28
  const trainCols = Math.floor(trainPx / (trainFont * .6)) - 1
  const train = el('pre', { style: { margin: '0 auto', width: 'max-content', font: trainFont + 'px/1 monospace', userSelect: 'none' } })
  const trainBand = SITE ? document.body.appendChild(el('div', {
    id: 'train-band',
    style: { position: 'fixed', left: 0, right: 0, top: '24px', zIndex: 9998, pointerEvents: 'none' },
  }, [train])) : null
  const bandH = SITE && !phone ? TRAIN_ROWS * trainFont + 32 : 0   // the room the fire leaves for the band

  const fireRows = FIRE_HEAD + FIRE_H + KINDLING.length
  const offTop = SITE && phone ? FIRE_HEAD : 0
  const fireSize = 'min(' + (SITE ? 32 : 18) + 'px, calc((var(--screen-h, 100vh) - ' + ((offTop ? 40 : 80) + bandH) + 'px) / '
    + (fireRows - offTop) + '), calc(92vw / ' + FIRE_W * .6 + '))'
  const fire = el('pre', {
    style: {
      margin: '0 auto', width: 'max-content', fontFamily: 'monospace', fontSize: fireSize, lineHeight: 1,
      userSelect: 'none',
    },
  })
  // The text box lies over the fire, FIRE_UNDER_TEXT rows above the kindling: a small flame shows
  // under the text, and a big one climbs up behind it
  // A textarea takes the keys, because a phone opens its keyboard only for a text field. It is invisible:
  // the text shows what you type. On the site it is #type-input in index.html, over the whole page, and the
  // tap on it opens the keyboard and starts the game. On strudel.cc it lies over the text box.
  const input = SITE ? document.getElementById('type-input') : textInput()
  Object.assign(input, {   // properties, so a new run replaces the handlers of the last one
    onkeydown: e => onKey(g, e),
    oninput: e => onInput(g, e),
    onfocus: () => { text.style.opacity = 1; hint.style.display = 'none' },
    onblur: () => { text.style.opacity = .3; hint.style.display = 'flex' },
  })
  const box = el('div', {
    style: {
      position: 'absolute', left: 0, right: 0, bottom: 'calc(' + (KINDLING.length + FIRE_UNDER_TEXT) + ' * ' + fireSize + ')',
      font: 'min(24px, 5.2vw) monospace', lineHeight: 1.6,   // 20px on a phone: about 29 letters a line
      height: '4.8em', overflow: 'hidden', cursor: 'text',   // exactly 3 lines
      // A dark band dims the fire behind the text to about 30%, with soft top and bottom edges
      background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,.7) 15%, rgba(0,0,0,.7) 85%, rgba(0,0,0,0))',
    },
  }, SITE ? [text, hint] : [text, hint, input])
  const stage = el('div', { style: { position: 'relative' } }, [fire, box])
  const source = el('div', { style: { marginTop: '6px', minHeight: '1.3em', opacity: .5 } })

  // On the site, the panel is the game screen: centered, with no border. The nodes it leaves out are
  // still built, so tick() updates them as on strudel.cc. Taps go through it to #type-input.
  const width = 'min(820px, 92vw)'
  const panel = document.body.appendChild(el('div', {
    id: 'type-panel',
    style: SITE
      ? { position: 'fixed', left: '50%', transform: 'translateX(-50%)', width, zIndex: 9999,
          color: '#fff', font: '13px monospace', pointerEvents: 'none' }
      : panelStyle({
          position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)',
          width, zIndex: 9999, background: '#000',   // opaque: grey text must stay readable
        }),
  }, [
    // The status stays on the site, so an error still shows
    el('div', { style: { display: 'flex', gap: '12px', marginBottom: '8px' } }, SITE ? [status] : [
      el('span', { textContent: 'TYPE', style: { color: ACCENT, fontWeight: 'bold' } }),
      stats,
      status,
    ]),
    ...(SITE ? [] : [energyMeter.node, choirMeter.node, train]),
    stage,
    ...(SITE ? [] : [source]),
  ]))
  if (SITE) followViewport(panel, box, fire, offTop, trainBand, bandH)
  if (document.activeElement === input) input.onfocus()   // on the site, the tap that started the game

  return { text, fire, stats, status, source, energy: energyMeter, choir: choirMeter,
    // The locomotive stands at 62% of the width; enough cars follow it to go off the left edge
    train: { node: train, cols: trainCols, locoAt: Math.round(trainCols * .62), cars: Math.ceil(trainCols * .62 / 15) + 1 } }
}

function textInput() {
  const input = el('textarea', {
    ariaLabel: 'type here', spellcheck: false,
    // 16px: iOS zooms in on a text field with a smaller font
    style: { position: 'absolute', inset: 0, width: '100%', height: '100%', boxSizing: 'border-box', margin: 0,
      padding: 0, border: 0, opacity: 0, resize: 'none', cursor: 'text', fontSize: '16px' },
  })
  // A phone must not change what you type
  ;['autocomplete', 'autocorrect', 'autocapitalize'].forEach(a => input.setAttribute(a, 'off'))
  return input
}

// A phone keyboard covers the bottom of the page, but 100vh stays the same. So the panel follows the
// visual viewport, the part you can see: --screen-h gives the fire that height, and the text box goes to
// its center. The panel must not go off the bottom; at the top, only offTop rows of the fire may go off.
// The train band stays at the top of what you see; on a desktop the panel stays under it (bandH).
function followViewport(panel, box, fire, offTop, trainBand, bandH) {
  const vv = window.visualViewport
  const fit = () => {
    panel.style.setProperty('--screen-h', vv.height + 'px')
    trainBand.style.top = vv.offsetTop + 24 + 'px'
    const h = vv.height - bandH
    const boxMid = box.getBoundingClientRect().top - panel.getBoundingClientRect().top + box.offsetHeight / 2
    const maxOff = offTop * parseFloat(getComputedStyle(fire).fontSize)
    const top = Math.min(h - panel.offsetHeight, Math.max(-maxOff, h / 2 - boxMid))
    panel.style.top = vv.offsetTop + bandH + top + 'px'
  }
  vv.onresize = vv.onscroll = fit   // properties, so a new run replaces the old handlers
  fit()
}

// Rebuild the visible words. Finished and upcoming colors follow the fire (tintText); wrong = pink.
function render(g) {
  const v = g.view
  if (!g.words.length) {   // no text while the quotes load; nothing if they failed (the status shows why)
    v.text.replaceChildren(el('span', { textContent: g.status ? '' : 'loading quotes…', style: { color: '#666' } }))
    return
  }
  v.text.replaceChildren(...g.words.slice(0, g.wi + 60).map((word, i) => {
    const target = word + ' '
    const typed = i < g.wi ? target : i === g.wi ? g.typed : ''
    const letters = []
    for (let j = 0; j < Math.max(target.length, typed.length); j++) {
      const want = target[j], got = typed[j]
      let ch = want, color = 'var(--next)'
      if (got != null && got === want) color = 'var(--done)'
      else if (got != null) {
        color = NEG
        ch = got === ' ' ? '_' : got   // show what you typed; a typed space shows as _
      }
      letters.push(el('span', { textContent: ch, style: { color } }))
    }
    if (i === g.wi) {
      const at = letters[typed.length]
      if (at) at.style.boxShadow = 'inset 2px 0 ' + ACCENT
      else letters[letters.length - 1].style.boxShadow = 'inset -2px 0 ' + ACCENT
    }
    return el('span', { style: { whiteSpace: 'pre' } }, letters)
  }))

  // Scroll like monkeytype: when the active word reaches line 3, drop line 1
  const lh = parseFloat(getComputedStyle(v.text).lineHeight)
  const line = node => Math.round(node.offsetTop / lh)
  const active = v.text.children[g.wi]
  if (active && line(active) >= 2) {
    const n = [...v.text.children].filter(c => line(c) === 0).length
    g.words.splice(0, n)
    g.wi -= n
    render(g)
  }
}


// ============================================================
//  FIRE — ASCII fire above the text. A heat grid: each row takes the heat of the row below it,
//  moves ±1 column, and cools. Energy makes the base hotter and the cooling slower, so the flame grows.
// ============================================================

function fireFrame(g) {
  const target = window.controlState.energy, dt = FIRE_FRAME_MS / 1000
  g.flame = target > g.flame ? Math.min(target, g.flame + dt / FIRE_RISE_S) : Math.max(target, g.flame - dt / FIRE_FALL_S)
  const energy = g.flame
  const lit = g.startedAt != null   // the kindling catches on your first key
  const heat = g.heat
  // Turns blue as loud as the choir is, and back to normal in about half a second
  g.blue = g.choir ? choirHeard(g) : g.blue * .75
  const cooling = .44 - .32 * energy

  for (let x = 0; x < FIRE_W; x++) {
    const d = Math.abs(x - FIRE_C) / FIRE_HALF
    const shape = d >= 1 ? 0 : 1 - d * d   // hotter in the middle, so the flame tapers
    heat[(FIRE_H - 1) * FIRE_W + x] = !lit || !shape ? 0
      : energy < .03 ? (Math.random() < .3 * shape ? .22 + .1 * Math.random() : .04)   // embers
      : shape * (Math.random() < .5 + .5 * energy ? .6 + .4 * energy : .3)
  }
  for (let y = 0; y < FIRE_H - 1; y++) for (let x = 0; x < FIRE_W; x++) {
    const below = heat[(y + 1) * FIRE_W + clamp(x + Math.floor(Math.random() * 3) - 1, 0, FIRE_W - 1)]
    heat[y * FIRE_W + x] = Math.max(0, below - cooling * Math.random())
  }

  // Sparks rise from the top of the flame while the choir plays
  if (g.choir) {
    const top = flameTop(heat)
    for (let i = 0; i < 2; i++) if (Math.random() < .7) g.sparks.push({
      x: FIRE_C + Math.round((Math.random() * 2 - 1) * FIRE_HALF * .7),
      y: top + Math.floor(Math.random() * 3),
      life: 6 + Math.floor(Math.random() * 7),
    })
  }
  g.sparks = g.sparks.filter(p => {
    p.y--
    p.x += Math.floor(Math.random() * 3) - 1
    p.life--
    return p.life > 0 && p.y >= -FIRE_HEAD && p.x >= 0 && p.x < FIRE_W
  })

  renderFire(g, energy, lit)
  tintText(g, lit ? energy : 0)
}

// How loud the choir is now, 0..1, with the same envelope as the PAD: each chord fades in over one step,
// holds until two steps, then fades out over one step. Two chords at full gain are full.
function choirHeard(g) {
  const now = Date.now()
  g.choirChords = g.choirChords.filter(c => now - c.at < 3 * c.step * 1000)
  let sum = 0
  for (const c of g.choirChords) {
    const age = (now - c.at) / 1000 / c.step
    sum += c.gain * (age < 0 ? 0 : age < 1 ? age : age < 2 ? 1 : 3 - age)
  }
  return Math.min(1, sum / 2)
}

// Highest row near the center with a hot cell
function flameTop(heat) {
  for (let y = 0; y < FIRE_H; y++) {
    for (let x = FIRE_C - FIRE_HALF; x <= FIRE_C + FIRE_HALF; x++) if (heat[y * FIRE_W + x] > .35) return y
  }
  return FIRE_H - 1
}

// The fire is rows of colored runs. Its text has only our own characters, so innerHTML is safe.
function renderFire(g, energy, lit) {
  const hold = g.held / CHOIR_HOLD_S
  const rows = []
  for (let y = -FIRE_HEAD; y < FIRE_H; y++) {
    const row = []
    for (let x = 0; x < FIRE_W; x++) {
      const h = y < 0 ? 0 : g.heat[y * FIRE_W + x]
      const i = Math.min(FIRE_RAMP.length - 1, Math.floor(h * FIRE_RAMP.length))
      row.push(i ? [FIRE_RAMP[i], heatColor(g, h, hold)] : [' ', null])
    }
    rows.push(row)
  }
  const ember = rgb(FIRE_EMBER)
  for (const p of g.sparks) rows[p.y + FIRE_HEAD][p.x] = [p.life > 4 ? '*' : '\'', ember]

  const glow = lit ? Math.max(.15, Math.min(1, energy * 1.4)) : 0
  KINDLING.forEach((line, k) => {
    const color = woodColor(k, glow, g.blue)
    rows.push([...line.padEnd(FIRE_W)].map(ch => [ch, ch === ' ' ? null : color]))
  })
  g.view.fire.innerHTML = rows.map(colorRuns).join('\n')
}

// One span for each run of the same color. The style has no quotes (rgb() has no spaces),
// because Strudel turns "double quotes" into patterns.
function colorRuns(row) {
  let out = '', color = null, run = ''
  const flush = () => {
    if (run) out += color ? '<span style=color:' + color + '>' + run + '</span>' : run
    run = ''
  }
  for (const [ch, c] of row) {
    if (c !== color) { flush(); color = c }
    run += ch
  }
  flush()
  return out
}

// hold (0..1) moves the core toward white-blue; g.blue turns the whole flame blue
function heatColor(g, h, hold) {
  h = Math.round(h * 20) / 20
  hold = Math.round(hold * 10) / 10
  const blue = Math.round(g.blue * 10) / 10
  const key = h + ':' + hold + ':' + blue
  if (!g.colors.has(key)) {
    let c = ramp(FIRE_STOPS, h)
    if (h > .6) c = mix(c, FIRE_CORE, hold * Math.min(1, (h - .6) / .3))
    g.colors.set(key, rgb(mix(c, ramp(CHOIR_STOPS, h), blue)))
  }
  return g.colors.get(key)
}

// The logs glow a little in embers and more as the flame grows. With the choir they glow bright red.
function woodColor(row, glow, blue) {
  const wood = row < 2 ? [138, 90, 50] : [110, 68, 36]
  const k = glow * (row < 2 ? .35 : .55) * (.85 + .15 * Math.random())
  return rgb(mix(mix(wood, [230, 90, 20], k), FIRE_EMBER, blue * (row < 2 ? .6 : .9)))
}

// render() colors the text with these variables
function tintText(g, energy) {
  g.view.text.style.setProperty('--done', rgb(mix(ramp(TEXT_DONE, energy), TEXT_CHOIR.done, g.blue)))
  g.view.text.style.setProperty('--next', rgb(mix(ramp(TEXT_NEXT, energy), TEXT_CHOIR.next, g.blue)))
}


// ============================================================
//  TRAIN — ASCII train through a city at night, in the rain. The city scrolls past at the train's speed,
//  in layers: far towers slow, near towers with neon signs at .6, pylons and track at full, street lights faster.
//  At speed, the lights blur into streaks. Its heat is the fire's (g.flame), from your first key.
// ============================================================

function trainFrame(g) {
  const heat = g.startedAt != null ? g.flame : 0
  const dt = TRAIN_FRAME_MS / 1000
  const target = TRAIN_SPEED * Math.pow(heat, 1.4)
  g.trainV = target > g.trainV ? Math.min(target, g.trainV + TRAIN_ACCEL * dt) : Math.max(target, g.trainV - TRAIN_BRAKE * dt)
  const v = g.trainV
  const { cars, locoAt } = g.view.train
  const start = locoAt - cars * 15   // the first car is off the left edge
  g.trainX += v * dt
  g.trainT += dt
  // Smoke leaves the stack more often when the fire is hot, and the wind of the train blows it back
  if (heat > .03 && Math.random() < .1 + .6 * heat) g.puffs.push({ x: start + cars * 15 + 13, y: 3, age: 0 })
  for (const p of g.puffs) {
    p.age += dt
    p.y -= dt * (1 + heat)
    p.x -= dt * (v * .7 + 1.5)
  }
  g.puffs = g.puffs.filter(p => p.y > -.5 && p.x > -2 && p.age < 3)
  renderTrain(g, heat, start)
}

function trainColors(heat) {
  const k = clamp(heat, 0, 1), hot = heat >= TRAIN_ACCENT_AT
  const p = {}
  for (const key in TRAIN_EMBER) {
    const a = TRAIN_EMBER[key], b = TRAIN_FURNACE[key]
    p[key] = typeof a[0] === 'number' ? rgb(mix(a, b, k)) : a.map((c, i) => rgb(mix(c, b[i], k)))
  }
  p.neon[3] = rgb((hot ? TRAIN_FURNACE : TRAIN_EMBER).neon[3])
  p.light = rgb((hot ? TRAIN_FURNACE : TRAIN_EMBER).light)
  return p
}

function renderTrain(g, heat, start) {
  const { cols, cars, node } = g.view.train
  const x = g.trainX, v = g.trainV
  const P = trainColors(heat)
  const rows = Array.from({ length: TRAIN_ROWS }, () => Array.from({ length: cols }, () => [' ', null]))
  const put = (r, c, s, color) => [...s].forEach((ch, i) => {
    if (ch !== ' ' && r >= 0 && r < TRAIN_ROWS && c + i >= 0 && c + i < cols)
      rows[r][c + i] = [ch, typeof color === 'function' ? color(ch) : color]
  })
  const erase = (r, c) => { if (r >= 0 && r < TRAIN_ROWS && c >= 0 && c < cols) rows[r][c] = [' ', null] }
  // The same city every time, from the column in the world
  const rnd = (a, b) => { const v = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453; return v - Math.floor(v) }
  const mod = (a, n) => ((a % n) + n) % n
  const blink = (i, ms) => Math.floor(Date.now() / ms + rnd(i, 99) * 10) % 2 === 0
  // A light in a fast layer leaves a streak to its right, longer the faster the layer moves
  const streak = (r, c, color, f) => {
    const n = Math.min(8, Math.floor(v * f / 25))
    for (let k = 1; k <= n; k++) put(r, c + k, '-', color.replace('rgb(', 'rgba(').replace(')', k < n / 2 ? ',.6)' : ',.33)'))
  }

  // Towers: one every `stride` columns of the layer, `wMin`..`wMax` wide, roof on row `topMin`..`topMax`,
  // down to row 8. Lit windows on every other row and column.
  const skyline = (f, salt, stride, wMin, wMax, topMin, topMax, wall, near) => {
    const o = Math.floor(x * f)
    for (let c = 0; c < cols; c++) {
      const wc = c + o, i = Math.floor(wc / stride), off = wc - i * stride
      const w = wMin + Math.floor(rnd(i, salt) * (wMax - wMin + 1))
      if (off >= w) continue
      const top = topMin + Math.floor(rnd(i, salt + 1) * (topMax - topMin + 1))
      for (let r = top; r <= 8; r++) {
        if (near) erase(r, c)   // a near tower hides the far ones behind it
        if (r === top) put(r, c, '_', wall)
        else if (off === 0 || off === w - 1) put(r, c, '|', wall)
        else if (off % 2 && (r - top) % 2 === 0 && rnd(wc, r + salt) < .35) {
          const color = P.neon[Math.floor(rnd(wc, r + salt + 1) * 4)]
          put(r, c, near ? ':' : '.', near ? color : color.replace('rgb(', 'rgba(').replace(')', ',.55)'))   // far: dimmer
          streak(r, c, color, f)
        }
      }
      // An antenna with a red light on some tall towers
      if (!near && top <= topMin + 1 && off === Math.floor(w / 2) && rnd(i, salt + 2) < .5) {
        put(top - 1, c, '|', wall)
        if (blink(i, 700)) put(top - 2, c, '*', P.antenna)
      }
      // A neon sign on some near towers, on the row under the roof; some flicker
      if (near && rnd(i, salt + 3) < .6) {
        const word = TRAIN_SIGNS[Math.floor(rnd(i, salt + 4) * TRAIN_SIGNS.length)]
        const at = off - Math.floor((w - word.length) / 2)
        if (w >= word.length + 2 && at >= 0 && at < word.length && (rnd(i, salt + 5) < .8 || blink(i, 160))) {
          const color = P.neon[Math.floor(rnd(i, salt + 6) * 4)]
          put(top + 1, c, word[at], color)
          streak(top + 1, c, color, f)
        }
      }
    }
  }
  skyline(.1, 10, 11, 4, 9, 0, 5, P.far, false)
  skyline(.6, 20, 19, 9, 15, 3, 5, P.near, true)

  // Rain: some columns of the world have a drop that falls; it moves with the city at track speed
  for (let c = 0; c < cols; c++) {
    const wc = c + Math.floor(x)
    if (rnd(wc, 7) > .1) continue
    const r = mod(Math.floor(g.trainT * 14 + rnd(wc, 8) * 40), 30)
    if (r < TRAIN_ROWS) put(r, c, '/', P.rain)
  }
  // Pylons that hold the wires over the track
  const po = Math.floor(x)
  for (let c = 0; c < cols; c++) if (!mod(c + po, 24)) {
    put(4, c - 1, '-+-', P.pylon)
    for (let r = 5; r <= 8; r++) put(r, c, '|', P.pylon)
    if (blink(c + po, 500)) put(4, c, '+', P.light)
    streak(4, c + 1, P.pylon, 1)
  }

  for (const p of g.puffs) {
    put(Math.round(p.y), Math.round(p.x), p.age < .4 ? '@' : p.age < 1 ? 'O' : p.age < 1.8 ? 'o' : '.',
      p.age < 1 ? '#b5b5b5' : '#6a6a6a')
  }

  // The wheels turn with the distance; the firebox glows with the fire
  const spoke = '|/-\\'[mod(Math.floor(x / 1.2), 4)]
  const firebox = rgb(ramp(FIRE_STOPS, heat))
  const paint = ch => ch === '#' ? firebox : ch === '[' || ch === ']' ? P.win : P.body
  const draw = (art, c) => art.forEach((line, i) =>
    i === 4 ? put(8, c, line.replace(/[oO]/g, spoke), P.wheel) : put(4 + i, c, line, paint))
  for (let k = 0; k < cars; k++) {
    draw(TRAIN_CAR, start + k * 15)
    put(7, start + k * 15 + 14, '=', P.body)
  }
  draw(TRAIN_LOCO, start + cars * 15)

  // The track is up on legs over the street. In the street below, the lights of cars go past faster.
  for (let c = 0; c < cols; c++) {
    put(9, c, mod(c + po, 4) ? '=' : '+', P.track)
    if (!mod(c + po, 12)) put(10, c, '||', P.leg)
    const sc = c + Math.floor(x * 1.6)
    if (rnd(sc, 11) < .05) put(11, c, rnd(sc, 12) < .5 ? '-' : '=', P.cars[rnd(sc, 13) < .5 ? 0 : 1])
  }
  node.innerHTML = rows.map(colorRuns).join('\n')
}

// ============================================================
//  UI — control panel + helpers.
// ============================================================

function controlPanel({ key = {}, sliders = {} } = {}) {
  const ui = {}
  const inputs = {}
  const defaults = {}
  window.controlInputs = inputs   // lets data sources move the sliders

  ;['key-picker', 'key-btn', 'control-panel', 'bsky-feed', 'coinbase-feed', 'strudel-dock', 'type-panel', 'train-band']
    .forEach(id => document.getElementById(id)?.remove())

  // --- key/mode ---
  const keyPart = keySection(key)
  ui.KEY = keyPart.pattern

  // --- slider groups ---
  window.controlState ??= {}
  const groups = Object.entries(sliders).map(([group, defs]) => {
    const rows = Object.entries(defs).map(([name, [value, min, max, step]]) => {
      defaults[name] = value
      window.controlState[name] ??= value
      ui[name] = ref(() => window.controlState[name])
      return sliderRow(name, min, max, step ?? (max - min) / 100, inputs)
    })
    return section(group, rows)
  })

  // --- buttons ---
  const copyBtn = button('copy values', () => {
    navigator.clipboard.writeText(configText(sliders))
    copyBtn.textContent = 'copied!'
    setTimeout(() => { copyBtn.textContent = 'copy values' }, 1200)
  })
  const resetBtn = button('reset', () => {
    Object.entries(defaults).forEach(([name, v]) => {
      window.controlState[name] = v
      inputs[name].set(v)
    })
  })

  // --- assemble ---
  const body = el('div', { style: { display: 'flex', flexDirection: 'column', gap: '12px' } }, [
    keyPart.node,
    ...groups,
    el('div', { style: { display: 'flex', gap: '8px' } }, [copyBtn, resetBtn]),
  ])

  const header = el('div', {
    textContent: '▾ CONTROLS',
    style: { color: ACCENT, fontWeight: 'bold', cursor: 'pointer', marginBottom: '8px', userSelect: 'none' },
    onclick: () => {
      const open = body.style.display !== 'none'
      body.style.display = open ? 'none' : 'flex'
      header.textContent = (open ? '▸' : '▾') + ' CONTROLS'
    },
  })

  if (!SITE) dock().appendChild(el('div', {
    id: 'control-panel',
    style: panelStyle({ maxHeight: '55vh', overflowY: 'auto' }),
  }, [header, body]))

  return ui
}

function keySection({ root = 'e', mode = 'minor' } = {}) {
  const MODES = ['e:minor', 'c:dorian']

  window.keyState ??= {
    mode: Math.max(0, MODES.indexOf(mode)),
  }
  // saved index may be from an older, longer list
  window.keyState.mode = Math.min(window.keyState.mode ?? 0, MODES.length - 1)
  const current = () => MODES[window.keyState.mode]

  const label = el('span', { style: { color: ACCENT } })
  const update = () => { label.textContent = ' ' + current().replace(':', ' ') }
  update()

  // Lets code read or change the key (radio buttons + label follow). set returns true if it changed.
  window.keyControl = {
    get: current,
    set: name => {
      const i = MODES.indexOf(name)
      if (i < 0 || i === window.keyState.mode) return false
      window.keyState.mode = i
      const radio = document.querySelectorAll('input[name=strudel-mode]')[i]
      if (radio) radio.checked = true
      update()
      return true
    },
  }

  const node = el('div', {}, [
    el('div', { style: { opacity: .6, marginBottom: '4px' } }, ['KEY', label]),
    el('div', { style: { display: 'flex', gap: '18px' } }, [
      radioGroup(MODES, 'mode', 1, update),
    ]),
  ])

  return { node, pattern: ref(current) }
}

function radioGroup(options, stateKey, cols, onPick) {
  const items = options.map((opt, i) =>
    el('label', { style: { cursor: 'pointer', padding: '1px 0', whiteSpace: 'nowrap' } }, [
      el('input', {
        type: 'radio',
        name: 'strudel-' + stateKey,
        checked: i === window.keyState[stateKey],
        onchange: () => { window.keyState[stateKey] = i; onPick() },
        style: { accentColor: ACCENT },
      }),
      ' ' + opt,
    ]))
  return el('div', {
    style: { display: 'grid', gridTemplateColumns: 'repeat(' + cols + ', auto)', columnGap: '10px' },
  }, items)
}

function sliderRow(name, min, max, step, inputs) {
  const fmt = v => (+v).toFixed(step < 1 ? 2 : 0)
  const valueLabel = el('span', {
    textContent: fmt(window.controlState[name]),
    style: { width: '36px', textAlign: 'right', color: ACCENT },
  })
  const input = el('input', {
    type: 'range', min, max, step,
    value: window.controlState[name],
    oninput: e => {
      window.controlState[name] = parseFloat(e.target.value)
      valueLabel.textContent = fmt(e.target.value)
    },
    style: { width: '120px', accentColor: ACCENT },
  })
  inputs[name] = { set: v => { input.value = v; valueLabel.textContent = fmt(v) } }

  return el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, [
    el('span', { textContent: name, style: { width: '80px', opacity: .85 } }),
    input,
    valueLabel,
  ])
}

// Horizontal bar: set(fraction 0..1, label text, color)
function meter(label) {
  const fill = el('div', { style: { height: '100%', width: '50%', background: ACCENT, transition: 'width .4s' } })
  const value = el('span', { style: { width: '36px', textAlign: 'right', color: ACCENT } })
  const node = el('div', { style: { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '3px' } }, [
    el('span', { textContent: label, style: { width: '80px', opacity: .85 } }),
    el('div', { style: { flex: 1, height: '8px', background: '#333', borderRadius: '4px', overflow: 'hidden' } }, [fill]),
    value,
  ])
  return {
    node,
    set: (frac, text, color = ACCENT) => {
      fill.style.width = (clamp(frac, 0, 1) * 100) + '%'
      fill.style.background = color
      value.textContent = text
      value.style.color = color
    },
  }
}

function section(title, children) {
  return el('div', {}, [
    el('div', { textContent: title, style: { opacity: .6, marginBottom: '4px' } }),
    ...children,
  ])
}

function button(text, onclick) {
  return el('button', {
    textContent: text, onclick,
    style: {
      background: 'transparent', color: ACCENT, border: '1px solid ' + ACCENT,
      borderRadius: '4px', padding: '3px 8px', font: '12px monospace', cursor: 'pointer',
    },
  })
}

// Bottom-right column that holds the feed and the control panel
function dock() {
  return document.getElementById('strudel-dock') ?? document.body.appendChild(el('div', {
    id: 'strudel-dock',
    style: {
      position: 'fixed', bottom: '10px', right: '10px', zIndex: 9999, width: '330px',
      display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '95vh',
    },
  }))
}

// Ctrl+Shift+H hides and shows the panels, so you can see the code. A style tag hides them, so they stay
// hidden when ctrl+enter builds them again. While they are hidden, the music is frozen (tick, startGame).
function uiHidden() {
  return document.getElementById('ui-hidden') != null
}

function hideKey() {
  window.removeEventListener('keydown', window.hideUiKey, true)   // the listener from the last run
  window.hideUiKey = e => {
    if (!(e.ctrlKey && e.shiftKey && e.code === 'KeyH')) return
    e.preventDefault()
    e.stopPropagation()   // the editor must not see it
    const hidden = document.getElementById('ui-hidden')
    if (hidden) hidden.remove()
    else document.head.appendChild(el('style', { id: 'ui-hidden', textContent: '#strudel-dock, #type-panel { display: none !important }' }))
  }
  window.addEventListener('keydown', window.hideUiKey, true)   // capture: before the editor
}

function panelStyle(extra = {}) {
  return {
    padding: '10px 14px', background: 'rgba(0,0,0,.85)', color: '#fff',
    border: '1px solid ' + ACCENT, borderRadius: '6px', font: '13px monospace',
    boxSizing: 'border-box', ...extra,
  }
}

// Builds a paste-able `sliders: {...}` block from the current values
function configText(sliders) {
  const groups = Object.entries(sliders).map(([group, defs]) => {
    const lines = Object.entries(defs).map(([name, arr]) => {
      const vals = [+window.controlState[name].toFixed(3), ...arr.slice(1)]
      return '      ' + name + ': [' + vals.join(', ') + '],'
    })
    return '    ' + group + ': {\n' + lines.join('\n') + '\n    },'
  })
  return '  sliders: {\n' + groups.join('\n') + '\n  },'
}

// Move a slider from code (updates the music and the UI)
function setControl(name, v) {
  window.controlState[name] = v
  window.controlInputs?.[name]?.set(v)
}

// Ease a control toward a target, clamped to a range
function steer(name, target, min = 0, max = 1, amount = .2) {
  const t = clamp(target, min, max)
  const now = window.controlState[name]
  setControl(name, now + (t - now) * amount)
}

function clamp(x, lo, hi) { return Math.min(hi, Math.max(lo, x)) }

// Colors as [r, g, b]: mix two by k (0..1), pick from [[at, color]] stops, write as CSS
function mix(a, b, k) { return a.map((v, i) => v + (b[i] - v) * k) }
function ramp(stops, x) {
  for (let i = 1; i < stops.length; i++) if (x <= stops[i][0]) {
    const [x0, a] = stops[i - 1], [x1, b] = stops[i]
    return mix(a, b, (x - x0) / (x1 - x0))
  }
  return stops[stops.length - 1][1]
}
function rgb(c) { return 'rgb(' + c.map(Math.round).join(',') + ')' }

// Tiny DOM helper: el('div', { id, style: {...}, ...props }, [children])
function el(tag, { style = {}, ...props } = {}, children = []) {
  const node = document.createElement(tag)
  Object.assign(node, props)
  Object.assign(node.style, style)
  node.append(...children)
  return node
}
