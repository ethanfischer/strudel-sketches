Personal project with no stakes

README.md explains the parts: the dev page, the nvim keys, `lib.ts`, the types.

## Strudel gotchas

- A broken pattern usually plays silence with no error, for example `note("bd")` (a sound in `note`) or `.choose(pat, pat)`. A change is done when the notes are right, not when no error shows.
- Code outside a pattern runs once per evaluation. Strudel then asks the pattern for its notes many times per cycle, and the display asks for cycles out of order. State that must change once per cycle goes in `eachCycle` (`lib.ts`).
- `register(name, ...)` and `Pattern.prototype.name = ...` silently replace a built-in with the same name. Look the name up in `strudel.d.ts` first.
- `lib.ts` uses 'single quotes': on strudel.cc, "double quotes" are mini-notation.

## Check a sketch

1. The dev server runs on port 8001. Start it as `nohup node dev.mjs > /tmp/strudel-dev.log 2>&1 < /dev/null & disown`, so that stopping a test does not stop the server.
2. In headless Chrome (Playwright, `channel='chrome'`, `--autoplay-policy=no-user-gesture-required`), open `http://localhost:8001/dev.html?file=<sketch>` and click `#start`.
3. Read the notes of each cycle `c`: `document.getElementById("repl").editor.repl.state.pattern.queryArc(c, c + 1).filter(h => h.hasOnset())`, and compare them with what the sketch should play.

A Python with Playwright: `/Users/work/Repos/ICS/InContext.Vision/.local/envs/playwright/bin/python`.

## Generated files

`strudel.d.ts` and `banks.json` come from `tools/regenerate.sh`. Run it after the `@strudel/repl` version in `dev.html` changes, and change the scripts in `tools/`, not the generated files. `dev.mjs` writes `sounds.d.ts`.
