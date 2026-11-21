-- Strudel key maps for the dev page (node dev.mjs). Your vimrc loads this file for the .js and .ts files in this folder.
-- <leader>mp saves and plays, like Ctrl+Enter. If no dev page is open for the file, it opens one in your browser.
-- <leader>mm stops all dev pages, like Ctrl+.
-- <leader><leader> saves and plays when the dev page for the file does not play, and stops it when it plays.
-- <leader>my copies the file as JavaScript (a .ts file without its types), with lib.ts in front, to paste into strudel.cc.
-- <leader>ml opens or closes a split with the log of the dev pages: console.log in the sketch, errors, play and stop.
-- <leader>mb lists the drum banks that have all the sounds of this paragraph. Move in the list, and the paragraph plays
-- with that bank. Enter keeps the bank, Esc or q puts back the bank that you had.
local root = vim.fs.dirname(debug.getinfo(1, 'S').source:sub(2))
local server = 'http://localhost:8001/'

local function fail(message)
  vim.schedule(function() vim.notify('Strudel: ' .. message, vim.log.levels.ERROR) end)
end

local connect_highlights -- below

local function send(command, file, on_404)
  connect_highlights()
  local url = server .. command .. (file and ('?file=' .. vim.uri_encode(file)) or '')
  vim.system({ 'curl', '-sS', '-o', '-', '-w', '\n%{http_code}', '-X', 'POST', url }, { text = true }, function(r)
    if r.code ~= 0 then return fail('the dev server does not run. Start it with node dev.mjs in ' .. root) end
    local body, status = r.stdout:match('^(.-)\n?(%d+)$')
    if status == '404' and on_404 then return on_404(vim.trim(body)) end
    if status ~= '200' then fail(command .. ' failed: ' .. vim.trim(body)) end
  end)
end

local function current_file()
  local path = vim.fs.normalize(vim.api.nvim_buf_get_name(0))
  return path:sub(#root + 2) -- the path from this folder, the same as ?file= in the page
end

local function save_and_send(command)
  vim.cmd.write()
  local file = current_file()
  send(command, file, function(reason)
    vim.system({ 'open', server .. 'dev.html?file=' .. vim.uri_encode(file) })
    vim.schedule(function() vim.notify('Strudel: ' .. reason .. '\nOpened a dev page for ' .. file .. '. Click it once to play.') end)
  end)
end

vim.keymap.set('n', '<leader>mp', function() save_and_send('play') end, { buffer = true, desc = 'Strudel: save and play' })
vim.keymap.set('n', '<leader><leader>', function() save_and_send('toggle') end, { buffer = true, desc = 'Strudel: save and play, or stop' })
vim.keymap.set('n', '<leader>mm', function() send('stop') end, { buffer = true, desc = 'Strudel: stop' })
vim.keymap.set('n', '<leader>my', function()
  vim.cmd.write()
  local file = current_file()
  -- The dev server sends lib.ts and the file without their types, the same code that the page runs
  vim.system({ 'curl', '-sS', '-o', '-', '-w', '\n%{http_code}', server .. vim.uri_encode(file) .. '?bundle' }, { text = true }, function(r)
    if r.code ~= 0 then return fail('the dev server does not run. Start it with node dev.mjs in ' .. root) end
    local body, status = r.stdout:match('^(.-)\n?(%d+)$')
    if status ~= '200' then return fail('copy failed: ' .. vim.trim(body)) end
    vim.schedule(function()
      vim.fn.setreg('+', body)
      vim.notify('Strudel: copied ' .. file .. ' as JavaScript')
    end)
  end)
end, { buffer = true, desc = 'Strudel: copy as JavaScript' })

-- The log split stays the same for all Strudel buffers (this file runs again for each buffer)
_G.strudel_log = _G.strudel_log or {}
vim.keymap.set('n', '<leader>ml', function()
  local log = _G.strudel_log
  if log.win and vim.api.nvim_win_is_valid(log.win) then
    vim.api.nvim_win_close(log.win, true)
    return
  end
  local code_win = vim.api.nvim_get_current_win()
  vim.cmd('botright 10split')
  -- A new curl when there is none, or when it stopped (for example after a restart of the dev server)
  if log.job and vim.fn.jobwait({ log.job }, 0)[1] == -1 and vim.api.nvim_buf_is_valid(log.buf) then
    vim.api.nvim_win_set_buf(0, log.buf)
  else
    log.buf = vim.api.nvim_create_buf(false, true)
    vim.api.nvim_win_set_buf(0, log.buf)
    log.job = vim.fn.jobstart({ 'curl', '-sSN', server .. 'log' }, { term = true })
  end
  log.win = vim.api.nvim_get_current_win()
  vim.cmd('normal! G') -- on the last line, so the split follows the new lines
  vim.api.nvim_set_current_win(code_win)
end, { buffer = true, desc = 'Strudel: open or close the log of the dev pages' })

-- Completion: only the longest name of each group of synonyms (release, not rel), sorted by name, not by length.
-- The groups come from the "Synonyms:" lines in the docs of strudel.d.ts. The short names still work in the code.
if not _G.strudel_short_names then
  local short, synonyms = {}, nil
  for line in io.lines(root .. '/strudel.d.ts') do
    local list = line:match('^%s*%* Synonyms: (.+)$')
    if list then synonyms = vim.split(list, ', ', { plain = true }) end
    local name = line:match('^%s*([%w_$]+)%(') or line:match('^declare %a+ ([%w_$]+)')
    if name and synonyms then
      local group = { name, unpack(synonyms) }
      local longest = name
      for _, n in ipairs(group) do if #n > #longest then longest = n end end
      for _, n in ipairs(group) do if n ~= longest then short[n] = true end end
      synonyms = nil
    end
  end
  _G.strudel_short_names = short
end
local cmp = require('cmp')
local compare = cmp.config.compare
cmp.setup.buffer({
  sources = { {
    name = 'nvim_lsp',
    entry_filter = function(entry) return not _G.strudel_short_names[entry:get_completion_item().label] end,
  } },
  sorting = { comparators = { compare.offset, compare.exact, compare.score, compare.recently_used, compare.kind,
    -- By name, without case. The _ names (_fast, the versions that do not take patterns) go last.
    function(a, b)
      local x, y = a:get_completion_item().label:lower(), b:get_completion_item().label:lower()
      local ux, uy = x:sub(1, 1) == '_', y:sub(1, 1) == '_'
      if ux ~= uy then return uy end
      if x ~= y then return x < y end
    end } },
})

-- Highlights (StrudelActive): the mini-notation that plays now, as the boxes in the browser editor. After each play, a
-- dev page sends the positions of the mini-notation, and then the positions that play now (GET /highlights). The
-- positions become extmarks, so they move when you edit. They are for the saved file: when the buffer has changes
-- that you did not save, there are no highlights until the next play.
local function set_highlight_color() vim.api.nvim_set_hl(0, 'StrudelActive', { default = true, link = 'IncSearch' }) end
set_highlight_color()
vim.api.nvim_create_autocmd('ColorScheme', { group = vim.api.nvim_create_augroup('strudel_highlights', {}), callback = set_highlight_color })

_G.strudel_highlights = _G.strudel_highlights or { marks = {} } -- file -> { buf, ids }
local highlights = _G.strudel_highlights
local ns_marks = vim.api.nvim_create_namespace('strudel_marks')
local ns_active = vim.api.nvim_create_namespace('strudel_active')

local function buffer_of(file)
  for _, buf in ipairs(vim.api.nvim_list_bufs()) do
    if vim.api.nvim_buf_is_loaded(buf) and vim.fs.normalize(vim.api.nvim_buf_get_name(buf)) == root .. '/' .. file then return buf end
  end
end

local function on_highlights(message)
  if message.locations then
    local old = highlights.marks[message.file]
    if old and vim.api.nvim_buf_is_valid(old.buf) then
      vim.api.nvim_buf_clear_namespace(old.buf, ns_marks, 0, -1)
      vim.api.nvim_buf_clear_namespace(old.buf, ns_active, 0, -1)
    end
    highlights.marks[message.file] = nil
    local buf = buffer_of(message.file)
    if not buf or vim.bo[buf].modified then return end
    local lines = vim.api.nvim_buf_get_lines(buf, 0, -1, false)
    local function col(row, utf16) return vim.str_byteindex(lines[row + 1], 'utf-16', utf16, false) end
    local ids = {}
    for i, l in ipairs(message.locations) do
      ids[i] = vim.api.nvim_buf_set_extmark(buf, ns_marks, l[1], col(l[1], l[2]), { end_row = l[3], end_col = col(l[3], l[4]) })
    end
    highlights.marks[message.file] = { buf = buf, ids = ids, page = message.page }
    return
  end
  local m = highlights.marks[message.file]
  if not m or not vim.api.nvim_buf_is_valid(m.buf) then return end
  -- The numbers are positions in the list of one page. Another page for the same file has its own list.
  if message.page ~= m.page then return end
  vim.api.nvim_buf_clear_namespace(m.buf, ns_active, 0, -1)
  for _, i in ipairs(message.active) do
    local row, c, details = unpack(vim.api.nvim_buf_get_extmark_by_id(m.buf, ns_marks, m.ids[i + 1], { details = true }))
    vim.api.nvim_buf_set_extmark(m.buf, ns_active, row, c, { end_row = details.end_row, end_col = details.end_col, hl_group = 'StrudelActive' })
  end
end

-- One stream for all Strudel buffers. A new one when there is none, for example after a restart of the dev server.
function connect_highlights()
  if highlights.job then return end
  local rest = ''
  highlights.job = vim.system({ 'curl', '-sSN', server .. 'highlights' }, {
    stdout = function(_, data)
      if not data then return end
      local lines = vim.split(rest .. data, '\n')
      rest = table.remove(lines)
      vim.schedule(function()
        for _, line in ipairs(lines) do on_highlights(vim.json.decode(line)) end
      end)
    end,
  }, function()
    highlights.job = nil
    vim.schedule(function()
      for _, m in pairs(highlights.marks) do
        if vim.api.nvim_buf_is_valid(m.buf) then vim.api.nvim_buf_clear_namespace(m.buf, ns_active, 0, -1) end
      end
    end)
  end)
end
connect_highlights()

-- <leader>mb: the drum banks that have all the sounds in the s("...") and sound("...") strings of this paragraph (the
-- lines between blank lines). The bank on the line of the cursor goes in the .bank("...") of the paragraph, or after
-- the s("...") call, and plays.
local banks = vim.json.decode(table.concat(vim.fn.readfile(root .. '/banks.json'), '\n'))

local function paragraph()
  local row = vim.api.nvim_win_get_cursor(0)[1]
  local count = vim.api.nvim_buf_line_count(0)
  local function blank(n) return not vim.fn.getline(n):match('%S') end
  local first, last = row, row
  while first > 1 and not blank(first - 1) do first = first - 1 end
  while last < count and not blank(last + 1) do last = last + 1 end
  return first, last
end

-- The sound names in the s("...") and sound("...") strings, without rests, numbers and :n
local function sounds_in(lines)
  local code = {}
  for _, l in ipairs(lines) do
    if not l:match('^%s*//') then table.insert(code, (l:gsub('%s+//.*$', ''))) end
  end
  code = table.concat(code, '\n')
  local found, list = {}, {}
  for _, name in ipairs({ 's', 'sound' }) do
    for _, mini in code:gmatch('%f[%w_]' .. name .. '%s*%(([\"`])(.-)%1') do
      for word in mini:gsub(':[%w%.]+', ''):gmatch('%a[%w_]*') do
        word = word:lower()
        if not found[word] then found[word] = true; table.insert(list, word) end
      end
    end
  end
  return list
end

-- The lines with .bank("name"): the .bank("...") changed, or a new one after the first s("...") call. nil when there is
-- no place for it.
local function with_bank(lines, name)
  local bank = '.bank("' .. name .. '")'
  local new = vim.list_extend({}, lines)
  for i, l in ipairs(lines) do
    local changed, n = l:gsub('%.bank%s*%(([\"`]).-%1%)', bank, 1)
    if n == 1 then new[i] = changed; return new end
  end
  for i, l in ipairs(lines) do
    local _, stop = l:find('%f[%w_]s%s*%(([\"`]).-%1%)')
    if not stop then _, stop = l:find('%f[%w_]sound%s*%(([\"`]).-%1%)') end
    if stop then new[i] = l:sub(1, stop) .. bank .. l:sub(stop + 1); return new end
  end
end

vim.keymap.set('n', '<leader>mb', function()
  local first, last = paragraph()
  local lines = vim.api.nvim_buf_get_lines(0, first - 1, last, false)
  local found = sounds_in(lines)
  if #found == 0 then return fail('no s("...") or sound("...") in this paragraph') end
  -- Sounds that no bank has (for example sawtooth or your samples) do not help to choose a bank
  local in_a_bank = {}
  for _, bank in pairs(banks) do for _, s in ipairs(bank.sounds) do in_a_bank[s] = true end end
  local wanted = vim.tbl_filter(function(s) return in_a_bank[s] end, found)
  local other = vim.tbl_filter(function(s) return not in_a_bank[s] end, found)
  if #wanted == 0 then return fail('no bank has any of: ' .. table.concat(found, ' ')) end

  local choices = {}
  for name, bank in pairs(banks) do
    local has = {}
    for _, s in ipairs(bank.sounds) do has[s] = true end
    local missing = vim.tbl_filter(function(s) return not has[s] end, wanted)
    if #missing < #wanted then table.insert(choices, { name = name, missing = missing }) end
  end
  if #choices == 0 then return fail('no bank has any of: ' .. table.concat(wanted, ' ')) end
  table.sort(choices, function(a, b)
    if #a.missing ~= #b.missing then return #a.missing < #b.missing end
    return a.name:lower() < b.name:lower()
  end)
  -- When some banks have all the sounds, show those, and after them only the banks that miss one sound
  if #choices[1].missing == 0 then
    choices = vim.tbl_filter(function(c) return #c.missing <= 1 end, choices)
  end

  if not with_bank(lines, choices[1].name) then return fail('no place for .bank("...") in this paragraph. Add it yourself') end

  -- Save the paragraph with these lines, and play it. All the banks that you try are one change for undo.
  local code_buf, file = vim.api.nvim_get_current_buf(), current_file()
  local changed, kept, told = false, false, false
  local function show(new_lines)
    vim.api.nvim_buf_call(code_buf, function()
      if changed then vim.cmd.undojoin() end
      vim.api.nvim_buf_set_lines(code_buf, first - 1, last, false, new_lines)
      vim.cmd('silent write')
    end)
    changed = true
    send('play', file, function()
      if not told then told = true; fail('no dev page is open for ' .. file .. '. Press <leader>mp first') end
    end)
  end

  local items, width = {}, 0
  local title = ' Banks for ' .. table.concat(wanted, ' ')
    .. (#other == 0 and '' or (' (no bank has ' .. table.concat(other, ' ') .. ')')) .. ' '
  for i, c in ipairs(choices) do
    items[i] = c.name .. (#c.missing == 0 and '' or ('  (no ' .. table.concat(c.missing, ' ') .. ')'))
    width = math.max(width, vim.fn.strdisplaywidth(items[i]))
  end
  width = math.min(math.max(width, vim.fn.strdisplaywidth(title)), vim.o.columns - 4)
  local height = math.min(#items, vim.o.lines - 6)
  local list = vim.api.nvim_create_buf(false, true)
  vim.api.nvim_buf_set_lines(list, 0, -1, false, items)
  vim.bo[list].modifiable = false
  vim.bo[list].bufhidden = 'wipe'
  local win = vim.api.nvim_open_win(list, true, {
    relative = 'editor', style = 'minimal', border = 'rounded', title = title, title_pos = 'center',
    width = width, height = height, row = math.floor((vim.o.lines - height) / 2) - 1, col = math.floor((vim.o.columns - width) / 2),
  })
  vim.wo[win].cursorline = true

  -- The list starts on the bank of the paragraph (its name or an alias), when the list has it
  -- On that line, the paragraph stays as you wrote it (for example .bank("r8"), not .bank("RolandR8")).
  local current = (table.concat(lines, '\n'):match('%.bank%s*%(["`](.-)["`]%)') or ''):lower()
  local current_row
  for i, c in ipairs(choices) do
    local names = vim.tbl_map(string.lower, { c.name, unpack(banks[c.name].aliases) })
    if vim.tbl_contains(names, current) then current_row = i; vim.api.nvim_win_set_cursor(win, { i, 0 }) end
  end
  local shown
  local function show_cursor_line()
    local row = vim.api.nvim_win_get_cursor(win)[1]
    if row == shown then return end
    shown = row
    show(row == current_row and lines or with_bank(lines, choices[row].name))
  end
  show_cursor_line()
  vim.api.nvim_create_autocmd('CursorMoved', { buffer = list, callback = show_cursor_line })
  vim.api.nvim_create_autocmd('WinClosed', { pattern = tostring(win), once = true, callback = function()
    if not kept then show(lines) end
  end })
  local function close() vim.api.nvim_win_close(win, true) end
  vim.keymap.set('n', '<CR>', function() kept = true; close() end, { buffer = list })
  vim.keymap.set('n', '<Esc>', close, { buffer = list })
  vim.keymap.set('n', 'q', close, { buffer = list })
end, { buffer = true, desc = 'Strudel: play the paragraph with each drum bank that has its sounds' })
