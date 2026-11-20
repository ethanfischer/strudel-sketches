# python3 make-banks.py <sounds.json> <tidal-drum-machines-alias.json> <banks.json>
# Writes banks.json (for <leader>mb in nvim.lua): the sounds of each drum bank, with the short aliases (tr808) joined to
# the full names (RolandTR808).
import json, sys, collections
sounds_file, alias_file, out_file = sys.argv[1:]
s = json.load(open(sounds_file))
alias = json.load(open(alias_file))  # full name -> short name, for example RolandTR808 -> TR808
drums = {'bd','sd','hh','oh','cp','rim','lt','mt','ht','cr','rd','cb','sh','tb','perc','misc','fx'}
banks = collections.defaultdict(set)
for n, t in s:
    if t == 'sample' and '_' in n:
        b, x = n.rsplit('_', 1)
        if b and b != 'gm': banks[b].add(x)
banks = {b: xs for b, xs in banks.items() if xs & drums}
spelling = {full.lower(): full for full in alias}  # the names in the Strudel docs spelling
short = {short.lower(): full.lower() for full, short in alias.items()}
out = {}
for b in sorted(banks):
    if b in short and short[b] in banks:
        continue  # an alias: it is listed with its full name
    out[spelling.get(b, b)] = {'sounds': sorted(banks[b]),
                              'aliases': sorted(alias[spelling[b]].lower() for _ in [0] if b in spelling)}
json.dump(out, open(out_file, 'w'), indent=1)
print(len(banks), 'banks ->', len(out), 'without aliases')
