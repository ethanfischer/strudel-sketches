// node make-types.mjs <version> <docs.json> <names.json> <sounds.json> <strudel.d.ts>
// Writes strudel.d.ts: the Strudel names with their docs, and the sound and bank names, for completion in the editor.
import { readFileSync, writeFileSync } from 'node:fs'
const [version, docsFile, namesFile, soundsFile, outFile] = process.argv.slice(2)
const docs = JSON.parse(readFileSync(docsFile, 'utf8')).filter(d => !d.undocumented && d.name)
const { globals, methods } = JSON.parse(readFileSync(namesFile, 'utf8'))
const soundList = JSON.parse(readFileSync(soundsFile, 'utf8'))
const sounds = soundList.map(([name]) => name).sort()
// A bank is the prefix of bank_sound sample names that has drum sounds, for example rolandtr808 (rolandtr808_bd)
const drums = new Set(['bd', 'sd', 'hh', 'oh', 'cp', 'rim', 'lt', 'mt', 'ht', 'cr', 'rd', 'cb', 'sh', 'tb', 'perc', 'misc', 'fx'])
const banks = [...new Set(soundList.filter(([n, type]) => type === 'sample' && n.includes('_'))
  .map(([n]) => [n.slice(0, n.lastIndexOf('_')), n.slice(n.lastIndexOf('_') + 1)])
  .filter(([bank, sound]) => bank && bank !== 'gm' && drums.has(sound)).map(([bank]) => bank))].sort()

const reserved = new Set('break case catch class const continue debugger default delete do else enum export extends false finally for function if import in instanceof new null return super switch this throw true try typeof var void while with yield let static implements interface package private protected public await arguments eval'.split(' '))
const ok = n => /^[A-Za-z_$][\w$]*$/.test(n) && !reserved.has(n)
const notPattern = new Set(['samples', 'setcps', 'setcpm', 'setCps', 'setCpm', 'hush', 'initAudioOnFirstClick', 'getAudioContext', 'aliasBank', 'soundAlias', 'registerSound', 'registerSynthSounds', 'registerZZFXSounds', 'evalScope', 'loadCsound', 'loadOrc', 'midin', 'useRNG', 'setTime'])

// Docs for each name and its synonyms
const doc = new Map()
for (const d of docs) for (const n of [d.name, ...(d.synonyms ?? [])]) if (!doc.has(n)) doc.set(n, d)

const text = html => (html ?? '').replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim()
const safe = s => s.replace(/\*\//g, '*\\/')
function comment(d, indent) {
  if (!d) return ''
  const lines = [...text(d.description).split('\n')]
  if (d.synonyms?.length) lines.push(`Synonyms: ${d.synonyms.join(', ')}`)
  for (const p of d.params ?? []) lines.push(`@param ${p.name} ${p.type ? `{${p.type.names.join(' | ')}} ` : ''}${text(p.description)}`)
  for (const e of d.examples ?? []) lines.push('@example', ...e.split('\n'))
  return `${indent}/**\n${lines.map(l => `${indent} * ${safe(l)}`.trimEnd()).join('\n')}\n${indent} */\n`
}
// A parameter that the docs call a function gets a pattern, so (x => x.fast(2)) knows that x is a Pattern.
// All other parameters are any: Strudel takes numbers, strings, arrays and patterns almost everywhere.
// These take a function of a value, not of a pattern
const valueFns = new Set(['fmap', 'withValue', 'withHap', 'withHaps', 'filterValues', 'filterHaps', 'withHapSpan', 'withHapTime'])
function params(d, name) {
  if (name === 'signal') return 'func: (time: number) => any'
  // The editor completes the sound names in s("...") and .sound("...")
  if (name === 's' || name === 'sound') return 'sound?: Sound | Pattern, ...more: any[]'
  if (name === 'bank') return 'bank?: Bank | Pattern, ...more: any[]'
  // register(name, (arg1, ..., pat) => pattern) makes a pattern method; the pattern is the last argument
  if (name === 'register') return 'name: string, func: (...args: any[]) => Pattern, ...more: any[]'
  const fnType = valueFns.has(name) ? '(value: any, ...args: any[]) => any' : '(pat: Pattern, ...args: any[]) => any'
  const seen = new Set()
  const ps = (d?.params ?? []).filter(p => /^[A-Za-z_$][\w$]*$/.test(p.name)).map(p => {
    let n = reserved.has(p.name) ? p.name + '_' : p.name
    while (seen.has(n)) n += '_'
    seen.add(n)
    const fn = p.type?.names.some(t => /^function/i.test(t))
    return `${n}?: ${fn ? fnType : 'any'}`
  })
  // Arguments that the docs do not name: a function among them gets a pattern too, as in jux(rev)
  const rest = valueFns.has(name) ? '...more: any[]' : '...more: Arg[]'
  return [...ps, rest].join(', ')
}

let out = `// Strudel names for editor completion and hover docs. Made from @strudel/repl ${version}: the names that it defines
// at run time (also setcpm, hush and the others that the REPL adds when it runs code), and its docs. jsconfig.json adds this file to the .js files here. Do not edit by hand.

// An argument with no docs: a pattern function, or any value
type Arg = ((pat: Pattern, ...args: any[]) => any) | string | number | boolean | object | null | undefined

// The sounds that Strudel has, for completion in s("...") and .sound("..."). MySound (sounds.d.ts) has your samples.
// (string & {}) allows all other strings too, for example mini-notation such as "bd hh".
type Sound = StrudelSound | MySound | (string & {})
type StrudelSound =
${sounds.map(n => `  | ${JSON.stringify(n)}`).join('\n')}

// The drum machine banks, for completion in .bank("...")
type Bank = StrudelBank | (string & {})
type StrudelBank =
${banks.map(n => `  | ${JSON.stringify(n)}`).join('\n')}

interface Pattern {
`
const methodNames = methods.filter(ok).filter(n => n !== 'constructor').sort()
for (const n of methodNames) out += comment(doc.get(n), '  ') + `  ${n}(${params(doc.get(n), n)}): Pattern\n`
out += `}

// In Strudel, "..." is a pattern in mini-notation, so a string has the pattern methods too
interface String {
${methodNames.filter(n => !['length', 'toString', 'valueOf'].includes(n)).map(n => `  ${n}(${params(doc.get(n), n)}): Pattern`).join('\n')}
}

`
for (const n of Object.keys(globals).filter(ok).sort()) {
  const kind = globals[n]
  const ret = n === 'register' ? '(...args: any[]) => Pattern' : notPattern.has(n) ? 'any' : 'Pattern'
  if (kind === 'function') out += comment(doc.get(n), '') + `declare function ${n}(${params(doc.get(n), n)}): ${ret}\n`
  else if (kind === 'pattern') out += comment(doc.get(n), '') + `declare const ${n}: Pattern\n`
  else out += comment(doc.get(n), '') + `declare const ${n}: any\n`
}
writeFileSync(outFile, out)
console.log(outFile, out.length, 'bytes,', methodNames.length, 'methods,', Object.keys(globals).filter(ok).length, 'globals,', [...doc.keys()].length, 'with docs')
