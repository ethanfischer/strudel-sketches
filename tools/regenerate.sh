#!/bin/sh
# Writes strudel.d.ts and banks.json again, for the @strudel/repl version in dev.html. Run it after a version change.
# Needs node, Google Chrome, and a Python with Playwright: PYTHON=/path/to/python tools/regenerate.sh
set -e
cd "$(dirname "$0")/.."
version=$(grep -o '@strudel/repl@[0-9.]*' dev.html | head -1 | cut -d@ -f3)
[ -n "$version" ] || { echo 'dev.html has no @strudel/repl@<version>' >&2; exit 1; }
tmp=$(mktemp -d)
curl -sSfL "https://unpkg.com/@strudel/repl@$version" -o "$tmp/repl.js"
# The bank aliases that Strudel loads in prebake (aliasBank(`${l}/tidal-drum-machines-alias.json`) in the bundle)
curl -sSfL https://raw.githubusercontent.com/todepond/samples/main/tidal-drum-machines-alias.json -o "$tmp/alias.json"
node tools/extract-docs.mjs "$tmp/repl.js" "$tmp/docs.json"
"${PYTHON:-python3}" tools/strudel-names.py "$version" "$tmp/names.json" "$tmp/sounds.json"
node tools/make-types.mjs "$version" "$tmp/docs.json" "$tmp/names.json" "$tmp/sounds.json" strudel.d.ts
python3 tools/make-banks.py "$tmp/sounds.json" "$tmp/alias.json" banks.json
rm -r "$tmp"
