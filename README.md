# type til ya die

A typing game where your speed drives the music.

Play it at **https://ethanfischer.github.io/type-til-ya-die/**

## How to play

1. Tap or click the page. The music starts, and on a phone the keyboard opens.
2. Type the text. Your first key lights the kindling. When you type faster, the fire grows, the text gets hotter, the tempo goes up and the lead melody changes.
3. When you stop, the fire dies down to embers. Type again and it catches again.
4. A typo changes the key until you fix it.
5. Hold your best speed and the core of the flame turns white-blue. After 15 seconds the choir comes in: the flame turns blue and red embers rise. A typo stops the choir.

Keys: Backspace deletes a letter, Ctrl+Backspace (Option+Backspace on Mac) clears the word, Esc leaves the text box.

On strudel.cc, the game also shows your WPM, the energy and choir meters, the source of each quote, and the CONTROLS panel, which sets the mix and the game limits. Ctrl+Shift+H hides and shows these panels. While they are hidden, the music holds its state, also through Ctrl+Enter, so you can change the code and hear the part you are working on.

You can play on a desktop or on a phone (portrait). On an iPhone, turn off silent mode, or you hear nothing.

## Run it locally

```sh
python3 -m http.server
```

Then open http://localhost:8000.

`acidpoly.js` is a [Strudel](https://strudel.cc) program. You can also paste it into strudel.cc and press Ctrl+Enter.

## Credits and licenses

- **This game**: [AGPL-3.0](LICENSE).
- **[Strudel](https://codeberg.org/uzu/strudel)** (`@strudel/repl`): AGPL-3.0. Because the game runs on Strudel, the whole site is AGPL-3.0 and its source is this repository.
- **Quotes**: from [Monkeytype](https://github.com/monkeytypegame/monkeytype) (`frontend/static/quotes/english.json`), GPL-3.0. Each quote is a short excerpt of another person's work: a book, film or song. The game shows the source after each quote.
- **Samples**: drums from [uzu-drumkit](https://github.com/tidalcycles/uzu-drumkit), and the sample banks in [dough-samples](https://github.com/felixroos/dough-samples). See their READMEs for the credits of each sample.
- **Choir**: General MIDI soundfont from [webaudiofont](https://github.com/surikov/webaudiofont), through `@strudel/soundfonts`.
