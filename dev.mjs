// Local Strudel for live coding from an editor: node dev.mjs, then open http://localhost:8001/dev.html?file=pianoslice.js
// Each time the file changes on disk, the page plays the new code.
// POST /play and POST /stop do what Ctrl+Enter and Ctrl+. do in the page (see nvim.lua).
// /samples/ serves SAMPLES_DIR (default ../strudel-samples, a clone of github.com/ethanfischer/strudel-samples),
// so a new sample plays before you push it. /samples/strudel.json is built from the folder for each request, so a new
// file plays before you commit it.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname)
const samplesDir = resolve(process.env.SAMPLES_DIR ?? join(root, '..', 'strudel-samples'))
const { sampleMap } = await import(pathToFileURL(join(samplesDir, 'build.mjs')))
const port = Number(process.env.PORT ?? 8001)
const types = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.json': 'application/json', '.wav': 'audio/wav', '.mp3': 'audio/mpeg', '.ogg': 'audio/ogg', '.flac': 'audio/flac' }

// Only files inside dir, so ../ cannot read other files
function inside(dir, path) {
  const full = resolve(dir, '.' + path)
  if (full !== dir && !full.startsWith(dir + sep)) throw Object.assign(new Error('outside ' + dir), { code: 'ENOENT' })
  return full
}

// The open pages, which get play and stop from /events
const pages = new Set()

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  try {
    if (path === '/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store' })
      res.write(': connected\n\n')
      pages.add(res)
      return req.on('close', () => pages.delete(res))
    }
    if (req.method === 'POST' && (path === '/play' || path === '/stop')) {
      if (pages.size === 0) return res.writeHead(503).end('No dev page is open\n')
      for (const page of pages) page.write(`data: ${path.slice(1)}\n\n`)
      return res.writeHead(200).end(`${path.slice(1)} sent to ${pages.size} page(s)\n`)
    }
    if (path === '/samples/strudel.json') {
      res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
      return res.end(JSON.stringify(sampleMap(samplesDir)))
    }
    const file = path.startsWith('/samples/') ? inside(samplesDir, path.slice('/samples'.length)) : inside(root, path)
    const body = await readFile(file)
    res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream', 'cache-control': 'no-store' })
    res.end(body)
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500).end(err.message)
  }
}).listen(port, () => console.log(`http://localhost:${port}/dev.html?file=pianoslice.js\nsamples from ${samplesDir}`))
