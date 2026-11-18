//"Acid Poly" @by Pink Chaos

// ============================================================
//  SETUP
// ============================================================
const ACCENT = '#00FFD6'
const NEG = '#FF4FD8'
const GOLD = '#FFD479'

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
      spiderMed:  [78, 0, 200, 1],  // WPM where the spider goes from low to medium
      spiderHigh: [100, 0, 200, 1], // WPM where it goes from medium to high
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
const CHOIR_GRACE_S   = 1.5   // a dip below the band shorter than this pauses the hold, not resets it
const BEST_FADE       = 1     // WPM per second that best falls while you type below it
const LOOKAHEAD_WORDS = 50    // words to keep queued
// Monkeytype's English quotes (GPL-3.0), pinned to one commit
const QUOTES_URL = 'https://cdn.jsdelivr.net/gh/monkeytypegame/monkeytype@20b9530d720f04a4710853534c6f885d3cfe0d4c/frontend/static/quotes/english.json'

stopGame()
startGame()


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

// Spider — the melody changes with your WPM (limits: spiderMed / spiderHigh sliders)
var low = "<- 7 7 - 7 7>*12"
var medium = "<9 8 7 7 8 9>*12"
var high = "<12 9 8 7 9 11>*12"
var melody = ref(() => window.game.spiderLevel).pick([low, medium, high])

$: note(melody)
  .scale(KEY)
  .s("square")
  .fmh(ui.spiderFmh)      // harmonicity: whole numbers = in tune, between = clangy
  .electric(energy)
  //.sometimesBy(.15, x => x.ply(2))
  //.off(1/24, x => x.transpose(12).gain(.5).pan(cosine.fast(3)))
  //.delay(.5)
  //.delayfeedback(slider(0, 0, .95))  // web density; capped below 1 to avoid runaway
  .room(.7).rsize(2)
  .postgain(ui.spider)
  .o(6)
  .color("#00FFD6")._punchcard()

// ============================================================
//  BASS
// ============================================================

$: note("<0>*12").scale(KEY).trans("<-24>/2")
  .detune(rand)
  .s("supersaw")
  .acidenv(energy.range(.05, .2))
  .o(4)
  .postgain(ui.bass)
  .color("magenta")._punchcard()

// ============================================================
//  PAD
// ============================================================

$: n("<[0, 4, 9]>")   // triad on degree 1 — follows KEY
  .mask(ref(() => window.game?.choir ? 1 : 0))   // only while you hold your best WPM
  //.mask(1)   // for testing
  .scale(KEY)
  .s("gm_choir_aahs")
  .n(6)
  //.hpf(1000)
  .lpf(600)
  .attack(.5)
  .release(1)
  .sustain(1)
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
    spiderLevel: 0,                          // 0 low, 1 medium, 2 high
    held: 0, outSince: null, choir: false,   // seconds held in the band; when you left it
    lastTick: Date.now(),
    bpm: minBpm, cpm: Math.round(minBpm) / 4,
    view: null,
  }
  setControl('energy', 0)
  window.keyControl.set(KEY_OK)
  setCpm(g.cpm)

  // The quotes load once per page (cached by URL). After a failure, a re-run tries again.
  window.quoteLists ??= {}
  window.quoteLists[QUOTES_URL] ??= fetchOk(QUOTES_URL).then(r => r.json())
    .then(j => j.quotes.filter(usable).map(q => ({ words: typeable(q.text), source: q.source })))
  window.quoteLists[QUOTES_URL].then(
    list => { g.quotes = list; refill(g); render(g) },
    err => { delete window.quoteLists[QUOTES_URL]; g.status = 'quotes did not load (' + err.message + '), re-run to retry'; render(g) })

  g.view = typingPanel(g)
  render(g)
  g.timer = setInterval(() => tick(g), 100)
}

function stopGame() {
  clearInterval(window.game?.timer)
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
  if (e.key !== 'Backspace' && e.key.length !== 1) return          // Tab, arrows, Shift…
  e.preventDefault()
  e.stopPropagation()

  const word = g.words[g.wi]
  if (word == null) return   // no text yet
  const target = word + ' '   // the space that ends a word is part of it

  if (clearWord) {
    let ok = 0
    while (ok < g.typed.length && g.typed[ok] === target[ok]) ok++
    g.hits.length = Math.max(0, g.hits.length - ok)
    g.typed = ''
  } else if (e.key === 'Backspace') {
    if (g.typed && target.startsWith(g.typed)) g.hits.pop()   // the removed letter was correct
    g.typed = g.typed.slice(0, -1)
  } else if (g.typed.length < target.length + 10) {
    g.startedAt ??= Date.now()
    g.typed += e.key
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
  const { fullWpm, minBpm, maxBpm, spiderMed, spiderHigh } = window.controlState

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

  steer('energy', g.energyWpm / fullWpm, 0, 1, .2)
  const pace = clamp(g.wpm / fullWpm, 0, 1)

  // Tempo glides toward the target; setCpm only when the rounded BPM changes
  g.bpm += (minBpm + (maxBpm - minBpm) * pace - g.bpm) * .1
  const cpm = Math.round(g.bpm) / 4
  if (cpm !== g.cpm) {
    g.cpm = cpm
    setCpm(cpm)
  }

  // Spider melody follows the same WPM as the stats line, so it does not flip on every pause
  g.spiderLevel = g.wpm >= spiderHigh ? 2 : g.wpm >= spiderMed ? 1 : 0

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
    style: { position: 'relative', display: 'flex', flexWrap: 'wrap', alignContent: 'flex-start', opacity: .3 },
  })
  const hint = el('div', {
    textContent: 'click to type',
    style: {
      position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: ACCENT, font: '16px monospace',
    },
  })
  const box = el('div', {
    tabIndex: 0,
    onkeydown: e => onKey(g, e),
    onfocus: () => { text.style.opacity = 1; hint.style.display = 'none' },
    onblur: () => { text.style.opacity = .3; hint.style.display = 'flex' },
    style: {
      position: 'relative', marginTop: '10px', font: '24px monospace', lineHeight: 1.6,
      height: '4.8em', overflow: 'hidden', outline: 'none', cursor: 'text',   // exactly 3 lines
    },
  }, [text, hint])
  const source = el('div', { style: { marginTop: '6px', minHeight: '1.3em', opacity: .5 } })

  document.body.appendChild(el('div', {
    id: 'type-panel',
    style: panelStyle({
      position: 'fixed', top: '10px', left: '50%', transform: 'translateX(-50%)',
      width: 'min(820px, 92vw)', zIndex: 9999, background: '#000',   // opaque: grey text must stay readable
    }),
  }, [
    el('div', { style: { display: 'flex', gap: '12px', marginBottom: '8px' } }, [
      el('span', { textContent: 'TYPE', style: { color: ACCENT, fontWeight: 'bold' } }),
      stats,
      status,
    ]),
    energyMeter.node,
    choirMeter.node,
    box,
    source,
  ]))

  return { text, stats, status, source, energy: energyMeter, choir: choirMeter }
}

// Rebuild the visible words. Finished = white, upcoming = grey, wrong = pink.
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
      let ch = want, color = '#666'
      if (got != null && got === want) color = '#fff'
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
//  UI — control panel + helpers.
// ============================================================

function controlPanel({ key = {}, sliders = {} } = {}) {
  const ui = {}
  const inputs = {}
  const defaults = {}
  window.controlInputs = inputs   // lets data sources move the sliders

  ;['key-picker', 'key-btn', 'control-panel', 'bsky-feed', 'coinbase-feed', 'strudel-dock', 'type-panel']
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

  dock().appendChild(el('div', {
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

// Tiny DOM helper: el('div', { id, style: {...}, ...props }, [children])
function el(tag, { style = {}, ...props } = {}, children = []) {
  const node = document.createElement(tag)
  Object.assign(node, props)
  Object.assign(node.style, style)
  node.append(...children)
  return node
}
