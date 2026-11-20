// node extract-docs.mjs <@strudel/repl bundle> <docs.json>
// The Strudel docs (the JSDoc of each function) are in the bundle as const docs=JSON.parse(`...`). strudel.cc uses them
// for its own completion; make-types.mjs uses them for the hover docs in strudel.d.ts.
import { readFileSync, writeFileSync } from 'node:fs'

const [bundleFile, outFile] = process.argv.slice(2)
const src = readFileSync(bundleFile, 'utf8')
const marker = 'const docs=JSON.parse('
if (!src.includes(marker + '`')) throw new Error(`${bundleFile} has no ${marker}\`: the bundle changed, so this script must change too`)
const start = src.indexOf(marker) + marker.length
let end = start + 1
for (;;) { // the first backtick that no backslash escapes
  end = src.indexOf('`', end)
  let n = 0; while (src[end - 1 - n] === '\\') n++
  if (n % 2 === 0) break
  end++
}
const text = (0, eval)(src.slice(start, end + 1)) // the template literal, with its escapes resolved
const docs = JSON.parse(text)
writeFileSync(outFile, JSON.stringify(docs))
console.log(`${outFile}: ${docs.length} docs`)
