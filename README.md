# strudel-sketches

My [Strudel](https://strudel.cc) sketches, and a local page to play them from an editor. The game [type til ya die](https://github.com/ethanfischer/type-til-ya-die) is in its own repo.

## Play a sketch

```sh
node dev.mjs
```

Open http://localhost:8001/dev.html?file=pianoslice.js and click the page. Each time you save the file, the page plays the new code.

The samples come from [strudel-samples](https://github.com/ethanfischer/strudel-samples). Clone it next to this repo, so the page also plays samples that you did not push yet. Set `SAMPLES_DIR` to use another folder. Reload the page after you add a sample.

You can also paste a sketch into strudel.cc and press Ctrl+Enter.

## Shared helpers

`lib.ts` has helpers for all sketches, for example `eachCycle` (calls a function once per cycle, so a counter in it works) and `pat.oneOf(f, g)` (one of the changes, at random, for each cycle). The dev page runs it before each sketch, and a change to it plays the sketch again. To use a sketch on strudel.cc, copy it with `<leader>my` (or open `http://localhost:8001/<file>?bundle`): the copy has `lib.ts` in front.

## nvim

`<leader>mm` saves and plays the file, like Ctrl+Enter. If no dev page is open for the file, it opens one in your browser. `<leader>mp` stops all dev pages, like Ctrl+. `<leader>my` copies the file as JavaScript, to paste into strudel.cc (`nvim.lua`). To turn this on, add this line to your vimrc:

```vim
autocmd BufRead,BufNewFile */Music/strudel/*.js,*/Music/strudel/*.ts luafile ~/Music/strudel/nvim.lua
```

## Completion and types

`strudel.d.ts` has the Strudel names and their docs, and `tsconfig.json` adds it to the files here. An editor with a TypeScript language server then completes `note(`, `.fast(` and the others and shows their docs. In nvim, use `typescript-language-server` with TypeScript 6: `npm i -g typescript-language-server`, and set its `tsserver.path` to a TypeScript 6 install. The server in TypeScript 7 (`tsc --lsp`) also works, but it does not have all the quick fixes yet.

Inside `s("...")` and `.sound("...")`, the editor also completes the sound names: the Strudel sounds, and your samples from `sounds.d.ts`, which `dev.mjs` writes when it starts and when the page loads the samples. Inside `.bank("...")`, it completes the drum machine banks.

- `.js` sketches: completion and docs only.
- `.ts` sketches: also strict type checking, for example `function second(p: Pattern)`. The dev server removes the types before Strudel runs the code, so the line and column numbers in errors stay correct. To use a `.ts` sketch on strudel.cc, copy it as JavaScript with `<leader>my`.

## License

[AGPL-3.0](LICENSE), the same as Strudel.
