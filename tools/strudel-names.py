# python strudel-names.py <version> <names.json> <sounds.json>   (a Python with Playwright, and Google Chrome)
# Loads @strudel/repl <version> in a page with nothing else, and writes what it defines at run time:
# names.json: the global names (function, pattern or other) and the Pattern methods
# sounds.json: the built-in sounds ([name, type], for example ["gm_piano", "soundfont"])
import asyncio, json, sys
from playwright.async_api import async_playwright

version, names_file, sounds_file = sys.argv[1:]

# The REPL adds these to the scope only when it runs code, so the page does not have them yet
REPL_SCOPE = ['all', 'each', 'hush', 'cpm', 'setCps', 'setcps', 'setCpm', 'setcpm']

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(channel='chrome', headless=True)
        page = await browser.new_page()
        page.set_default_timeout(60000)
        # Two pages that Playwright serves itself, on an https origin, so the browser defines the same names as on
        # localhost or strudel.cc: one empty (the names of the browser), and one with only Strudel
        empty = '<!doctype html><title>names</title>'
        strudel = empty + ('<script src="https://unpkg.com/@strudel/repl@' + version + '"></script>'
                           '<strudel-editor id="repl"></strudel-editor>')
        await page.route('https://strudel-names.test/**', lambda route: route.fulfill(
            content_type='text/html', body=strudel if route.request.url.endswith('/strudel') else empty))
        await page.goto('https://strudel-names.test/empty')
        native = await page.evaluate('Object.getOwnPropertyNames(globalThis)')
        await page.goto('https://strudel-names.test/strudel')
        await page.evaluate('document.getElementById("repl").editor.prebaked.then(() => 1)')
        await page.wait_for_timeout(3000)  # the sample maps load after prebake
        names = await page.evaluate('''(native) => {
          const globals = {}
          for (const k of Object.getOwnPropertyNames(globalThis)) {
            if (native.includes(k)) continue
            const v = globalThis[k]
            globals[k] = v && typeof v.queryArc === 'function' ? 'pattern' : typeof v
          }
          const methods = Object.getOwnPropertyNames(Pattern.prototype)
            .filter(k => { try { return typeof Pattern.prototype[k] === 'function' } catch { return false } })
          return { globals, methods }
        }''', native)
        for n in REPL_SCOPE:
            names['globals'].setdefault(n, 'function')
        sounds = await page.evaluate('''() => {
          const m = soundMap.get()
          return Object.keys(m).map(k => [k, m[k].data?.type ?? '?'])
        }''')
        await browser.close()
    json.dump(names, open(names_file, 'w'))
    json.dump(sounds, open(sounds_file, 'w'))
    print(f"{names_file}: {len(names['globals'])} globals, {len(names['methods'])} methods; {sounds_file}: {len(sounds)} sounds")

asyncio.run(main())
