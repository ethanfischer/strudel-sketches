// Local Strudel for live coding from an editor: node dev.mjs, then open http://localhost:8001/dev.html?file=pianoslice.js
// Each time the file changes on disk, the page plays the new code.
// /samples/ serves the WAV files in SAMPLES_DIR (default ~/Documents/Audacity4), so the page does not need the
// samples that you imported on strudel.cc.
import { createServer } from 'node:http'
import { readFile, readdir } from 'node:fs/promises'
import { join, extname, resolve, sep } from 'node:path'
import { homedir } from 'node:os'

const root = resolve(import.meta.dirname)
const samplesDir = resolve(process.env.SAMPLES_DIR ?? join(homedir(), 'Documents', 'Audacity4'))
const port = Number(process.env.PORT ?? 8001)
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.wav': 'audio/wav' }

// Only files inside dir, so ../ cannot read other files
function inside(dir, path) {
  const full = resolve(dir, '.' + path)
  if (full !== dir && !full.startsWith(dir + sep)) throw Object.assign(new Error('outside ' + dir), { code: 'ENOENT' })
  return full
}

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  try {
    if (path === '/samples.json') {
      // Same order as the import on strudel.cc (by name), so n() picks the same sample
      const wavs = (await readdir(samplesDir)).filter(f => extname(f).toLowerCase() === '.wav').sort()
      res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
      return res.end(JSON.stringify({ audacity4: wavs }))
    }
    const file = path.startsWith('/samples/') ? inside(samplesDir, path.slice('/samples'.length)) : inside(root, path)
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' })
    res.end(body)
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500).end(err.message)
  }
}).listen(port, () => console.log(`http://localhost:${port}/dev.html?file=pianoslice.js\nsamples from ${samplesDir}`))
