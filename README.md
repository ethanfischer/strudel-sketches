# strudel-sketches

My [Strudel](https://strudel.cc) sketches, and a local page to play them from an editor. The game [type til ya die](https://github.com/ethanfischer/type-til-ya-die) is in its own repo.

## Play a sketch

```sh
node dev.mjs
```

Open http://localhost:8001/dev.html?file=pianoslice.js and click the page. Each time you save the file, the page plays the new code.

The samples come from [strudel-samples](https://github.com/ethanfischer/strudel-samples). Clone it next to this repo, so the page also plays samples that you did not push yet. Set `SAMPLES_DIR` to use another folder. Reload the page after you add a sample.

You can also paste a sketch into strudel.cc and press Ctrl+Enter.

## nvim

`<leader>mm` saves and plays the file, like Ctrl+Enter. If no dev page is open for the file, it opens one in your browser. `<leader>mp` stops all dev pages, like Ctrl+. (`nvim.lua`). To turn this on, add this line to your vimrc:

```vim
autocmd BufRead,BufNewFile */Music/strudel/*.js luafile ~/Music/strudel/nvim.lua
```

## Completion

`strudel.d.ts` has the Strudel names and their docs, and `jsconfig.json` adds it to the `.js` files here. An editor with a TypeScript language server then completes `note(`, `.fast(` and the others and shows their docs. In nvim, use the language server in TypeScript 7: `npm i -g typescript`, then `tsc --lsp --stdio`.

## License

[AGPL-3.0](LICENSE), the same as Strudel.
