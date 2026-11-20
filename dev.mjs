// Local Strudel for live coding from an editor: node dev.mjs, then open http://localhost:8001/dev.html?file=pianoslice.js
// Each time the file changes on disk, the page plays the new code.
// The dev page runs lib.ts before each sketch. A .ts file is sent without its types, so Strudel can run it. The types become spaces, so the line and column
// numbers in errors stay correct.
// POST /play?file= and POST /stop do what Ctrl+Enter and Ctrl+. do in the page (see nvim.lua).
// /samples/ serves SAMPLES_DIR (default ../strudel-samples, a clone of github.com/ethanfischer/strudel-samples),
// so a new sample plays before you push it. /samples/strudel.json is built from the folder for each request, so a new
// file plays before you commit it.
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { join, extname, resolve, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { stripTypeScriptTypes } from 'node:module'

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

// The open pages and the file of each, which get play and stop from /events?file=
const pages = new Map()

createServer(async (req, res) => {
  const path = decodeURIComponent(new URL(req.url, 'http://x').pathname)
  try {
    const file = new URL(req.url, 'http://x').searchParams.get('file')
    if (path === '/events') {
      res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-store' })
      res.write(': connected\n\n')
      pages.set(res, file)
      return req.on('close', () => pages.delete(res))
    }
    // POST /play?file=x plays x in the pages open for x. 404 when there is none, so the editor can open one.
    // POST /stop stops all pages.
    if (req.method === 'POST' && (path === '/play' || path === '/stop')) {
      const command = path.slice(1)
      if (command === 'play' && !file) return res.writeHead(400).end('play needs ?file=\n')
      const to = [...pages].filter(([, f]) => command === 'stop' || f === file).map(([page]) => page)
      if (to.length === 0) return res.writeHead(404).end(command === 'play' ? `No dev page is open for ${file}\n` : 'No dev page is open\n')
      for (const page of to) page.write(`data: ${command}\n\n`)
      return res.writeHead(200).end(`${command} sent to ${to.length} page(s)\n`)
    }
    if (path === '/samples/strudel.json') {
      res.writeHead(200, { 'content-type': 'application/json', 'cache-control': 'no-store' })
      return res.end(JSON.stringify(sampleMap(samplesDir)))
    }
    const served = path.startsWith('/samples/') ? inside(samplesDir, path.slice('/samples'.length)) : inside(root, path)
    let body = await readFile(served)
    let type = types[extname(served)] ?? 'application/octet-stream'
    if (extname(served) === '.ts' && served.startsWith(root + sep)) {
      body = stripTypeScriptTypes(body.toString())
      type = 'text/javascript'
    }
    // ?bundle: lib.ts in front of the sketch, so the copy has the helpers on strudel.cc
    if (new URL(req.url, 'http://x').searchParams.has('bundle')) {
      body = stripTypeScriptTypes(await readFile(join(root, 'lib.ts'), 'utf8')) + '\n' + body
    }
    res.writeHead(200, { 'content-type': type, 'cache-control': 'no-store' })
    res.end(body)
  } catch (err) {
    res.writeHead(err.code === 'ENOENT' ? 404 : 500).end(err.message)
  }
}).listen(port, () => console.log(`http://localhost:${port}/dev.html?file=pianoslice.js\nsamples from ${samplesDir}`))
