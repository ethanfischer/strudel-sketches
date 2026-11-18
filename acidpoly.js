//"Acid Poly" @by Pink Chaos

// ============================================================
//  SETUP
// ============================================================
const ACCENT = '#00FFD6'
const NEG = '#FF4FD8'
const AI_COLOR = '#FFD479'

setCpm(110/4)
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
      duckDepth: [0.473, 0, 1],
      spiderFmh: [1, 1, 6, .01],
    },
    MIX: {
      kick:   [.8, 0, 1],
      spider: [.2, 0, 1],
      bass:   [.75, 0, 1],
      pad:    [.35, 0, 1],
      chop:   [.6, 0, 1],
    },
  },
})

const { KEY, energy } = ui

// ============================================================
//  DATA SOURCES
// ============================================================

const BLUESKY_ON = true   // false = no feed, key is fully manual

const KEY_HAPPY  = 'e:minor'
const KEY_GLOOMY = 'c:dorian'

// What counts as an AI mention: "AI", "A.I.", "#ai", "LLM(s)", "slop" (any case)
const AI_RE = /\bA\.?I'?s?\b|#ai\b|\bLLMs?\b|\bslop\b/i
const AI_COOLDOWN_MS = 0   // minimum gap between chops; 0 = as often as the 16th-note grid allows
const AI_BUMP  = .1    // energy added per post that mentions AI
const AI_DECAY = .01   // energy removed per post that doesn't
window.chopArmed = false

stopBluesky()
if (BLUESKY_ON) startBluesky()


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

// Spider
$: note("<12 9 8 7 9 11>*12")
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
//  SAMPLES
// ============================================================

// Veggie Chop — plays on the next 16th note after a Bluesky post mentions AI
// (muted: change _$ back to $ to bring it back)
_$: s("audacity4*16")
  .n(3)
  .speed(1.1)
  .mask(ref(() => window.chopArmed ? 1 : 0))
  .onTrigger(() => { window.chopArmed = false }, false)   // disarm once it's played
  .postgain(ui.chop)
  .color("yellow")._punchcard()

// ============================================================
//  PAD
// ============================================================

$: n("<[0,2, 4]>")   // triad on degree 1 — follows KEY
  .scale(KEY)
  .transpose(0)
  .s("gm_choir_aahs")
  .hpf(1000)
  //.lpf(energy.range(600, 1600))
  .attack(.5)
  .release(1)
  .sustain(1)
  //.room(0.7)
  //.rsize(4)
  .postgain(ui.pad)
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
//  BLUESKY — mood → key, AI mentions → energy (+ Veggie Chop when unmuted). No music below this line.
//  Single quotes throughout: Strudel turns "double quotes" into patterns.
// ============================================================

function startBluesky() {
  const url = 'wss://jetstream.us-east.bsky.network/xrpc/network.bsky.jetstream.subscribeEvents'
    + '?kinds=commit&collections=app.bsky.feed.post'

  const b = window.bsky = {
    ws: new WebSocket(url),
    drive: true,          // toggled by the "drive" checkbox
    scores: [],           // sentiment of the last 200 English posts, -1..1
    count: 0, rate: 0,    // English posts per second
    aiCount: 0, aiRate: 0, // AI mentions per second
    latest: null,         // most recent emotional post, for the feed
    mood: 0,              // -1 gloomier than usual … +1 happier than usual
    baseValence: null,
  }
  const analyze = sentimentAnalyzer()
  setControl('energy', 0)   // start from silence-ish on every evaluate

  b.ws.onmessage = e => {
    const p = JSON.parse(e.data).payload
    if (p?.operation !== 'create' || p.collection !== 'app.bsky.feed.post') return
    const text = p.record?.text
    if (!text || !p.record?.langs?.includes('en')) return   // word lists are English-only

    b.count++
    const s = analyze(text)
    b.scores.push(s)
    if (b.scores.length > 200) b.scores.shift()

    const ai = AI_RE.test(text)

    // AI mention → energy up a lot; any other post → energy down a little
    if (b.drive) setControl('energy', clamp(window.controlState.energy + (ai ? AI_BUMP : -AI_DECAY), 0, 1))

    if (ai) {
      b.aiCount++
      armChop()
      b.latest = { text, s, ai: true }
    } else if (s !== 0) {
      b.latest = { text, s }
    }
  }
  b.ws.onerror = () => console.log('bluesky: connection error')

  b.feed = feedPanel(b)

  b.timer = setInterval(() => {
    b.rate = b.count
    b.count = 0
    b.aiRate = b.aiCount
    b.aiCount = 0

    if (b.scores.length >= 30) {
      // which way are the emotional posts leaning, vs. the last ~minute?
      const emotional = b.scores.filter(s => s !== 0)
      const valence = emotional.length ? avg(emotional) : 0
      b.baseValence = ema(b.baseValence, valence, .02)
      b.mood = clamp((valence - b.baseValence) * 5, -1, 1)

      // Key follows mood instantly: negative → gloomy key, positive → happy key
      if (b.drive && b.mood !== 0) window.keyControl?.set(b.mood < 0 ? KEY_GLOOMY : KEY_HAPPY)
    }
    b.feed.update()
  }, 1000)
}

function stopBluesky() {
  window.bsky?.ws?.close()
  clearInterval(window.bsky?.timer)
  clearInterval(window.bsky?.renderTimer)
  window.bsky = null
}

// Returns text => score in -1..1. Tries the AFINN lexicon (~3,300 words),
// falls back to a small built-in list if the import fails.
function sentimentAnalyzer() {
  const WORDS = {
    love: 3, loved: 3, great: 3, amazing: 4, awesome: 4, happy: 3, beautiful: 3,
    good: 2, nice: 2, fun: 2, excited: 3, thanks: 2, thank: 2, best: 3, cute: 2,
    yay: 3, wonderful: 4, proud: 2, hope: 1, win: 2, lol: 1, glad: 3, joy: 3,
    hate: -3, awful: -3, terrible: -3, sad: -2, angry: -3, worst: -3, bad: -2,
    sucks: -3, disgusting: -3, scared: -2, afraid: -2, cry: -2, crying: -2,
    tired: -1, sick: -2, broken: -2, lost: -2, dead: -2, horrible: -3, ugh: -2,
  }

  if (!window.sentimentLib) {
    import('https://esm.sh/sentiment@5')
      .then(m => { window.sentimentLib = new m.default(); console.log('sentiment: AFINN lexicon loaded') })
      .catch(() => console.log('sentiment: import failed, using built-in word list'))
  }

  return text => {
    const raw = window.sentimentLib
      ? window.sentimentLib.analyze(text).score
      : (text.toLowerCase().match(/[a-z']+/g) ?? []).reduce((sum, w) => sum + (WORDS[w] ?? 0), 0)
    return clamp(raw / 5, -1, 1)
  }
}

function feedPanel(b) {
  const stats = el('span', { style: { opacity: .6 } })
  const drive = el('input', {
    type: 'checkbox', checked: b.drive,
    onchange: e => { b.drive = e.target.checked },
    style: { accentColor: ACCENT },
  })
  const mood = meter('mood')
  const energyMeter = meter('energy')
  const lines = el('div', {
    style: { display: 'flex', flexDirection: 'column', gap: '2px', height: '140px', overflow: 'hidden', marginTop: '8px' },
  })

  dock().prepend(el('div', { id: 'bsky-feed', style: panelStyle() }, [
    el('div', { style: { display: 'flex', justifyContent: 'space-between', marginBottom: '8px' } }, [
      el('span', { textContent: 'BLUESKY', style: { color: ACCENT, fontWeight: 'bold' } }),
      stats,
      el('label', { style: { cursor: 'pointer' } }, [drive, ' drive']),
    ]),
    mood.node,
    energyMeter.node,
    lines,
  ]))

  // Show one post every 400ms — the raw stream is far too fast to read
  let shown = null
  b.renderTimer = setInterval(() => {
    const post = b.latest
    if (!post || post === shown) return
    shown = post
    lines.prepend(el('div', {
      // textContent (not innerHTML) so post text can't inject markup
      textContent: (post.ai ? 'AI ' : '') + (post.s > 0 ? '+' : '') + post.s.toFixed(2) + '  ' + post.text.replace(/\s+/g, ' '),
      style: {
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        color: sentColor(post.s),
        // AI mentions: whole line highlighted in yellow
        ...(post.ai && { background: AI_COLOR, color: '#000', borderRadius: '3px', padding: '0 4px', fontWeight: 'bold' }),
      },
    }))
    while (lines.children.length > 9) lines.lastChild.remove()
  }, 400)

  return {
    update: () => {
      stats.textContent = b.rate + ' posts/s · ' + b.aiRate + ' AI/s'
      mood.set((b.mood + 1) / 2, (b.mood > 0 ? '+' : '') + b.mood.toFixed(2), sentColor(b.mood))
      energyMeter.set(window.controlState.energy, window.controlState.energy.toFixed(2), AI_COLOR)
    },
  }
}

// Queue one Veggie Chop (the pattern plays it on the next 16th and disarms)
function armChop() {
  if (Date.now() - (window.chopLast ?? 0) < AI_COOLDOWN_MS) return
  window.chopArmed = true
  window.chopLast = Date.now()
}

function sentColor(s) {
  return s > 0 ? ACCENT : s < 0 ? NEG : '#888'
}


// ============================================================
//  UI — control panel + helpers.
// ============================================================

function controlPanel({ key = {}, sliders = {} } = {}) {
  const ui = {}
  const inputs = {}
  const defaults = {}
  window.controlInputs = inputs   // lets data sources move the sliders

  ;['key-picker', 'key-btn', 'control-panel', 'bsky-feed', 'coinbase-feed', 'strudel-dock']
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

  // Lets code change the key (radio buttons + label follow). Returns true if it changed.
  window.keyControl = {
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
  const fmt = v => (+v).toFixed(2)
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

function avg(xs) { return xs.reduce((a, b) => a + b, 0) / xs.length }
function clamp(x, lo, hi) { return Math.min(hi, Math.max(lo, x)) }
function ema(prev, x, k) { return prev == null ? x : prev + (x - prev) * k }

// Tiny DOM helper: el('div', { id, style: {...}, ...props }, [children])
function el(tag, { style = {}, ...props } = {}, children = []) {
  const node = document.createElement(tag)
  Object.assign(node, props)
  Object.assign(node.style, style)
  node.append(...children)
  return node
}
