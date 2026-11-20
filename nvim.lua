-- Strudel key maps for the dev page (node dev.mjs). Your vimrc loads this file for the .js and .ts files in this folder.
-- <leader>mm saves and plays, like Ctrl+Enter. If no dev page is open for the file, it opens one in your browser.
-- <leader>mp stops all dev pages, like Ctrl+.
-- <leader>my copies the file as JavaScript (a .ts file without its types), with lib.ts in front, to paste into strudel.cc.
-- <leader>ml opens or closes a split with the log of the dev pages: console.log in the sketch, errors, play and stop.
local root = vim.fs.dirname(debug.getinfo(1, 'S').source:sub(2))
local server = 'http://localhost:8001/'

local function fail(message)
  vim.schedule(function() vim.notify('Strudel: ' .. message, vim.log.levels.ERROR) end)
end

local function send(command, file, on_404)
  local url = server .. command .. (file and ('?file=' .. vim.uri_encode(file)) or '')
  vim.system({ 'curl', '-sS', '-o', '-', '-w', '\n%{http_code}', '-X', 'POST', url }, { text = true }, function(r)
    if r.code ~= 0 then return fail('the dev server does not run. Start it with node dev.mjs in ' .. root) end
    local body, status = r.stdout:match('^(.-)\n?(%d+)$')
    if status == '404' and on_404 then return on_404() end
    if status ~= '200' then fail(command .. ' failed: ' .. vim.trim(body)) end
  end)
end

local function current_file()
  local path = vim.fs.normalize(vim.api.nvim_buf_get_name(0))
  return path:sub(#root + 2) -- the path from this folder, the same as ?file= in the page
end

vim.keymap.set('n', '<leader>mp', function()
  vim.cmd.write()
  local file = current_file()
  send('play', file, function()
    vim.system({ 'open', server .. 'dev.html?file=' .. vim.uri_encode(file) })
    vim.schedule(function() vim.notify('Strudel: opened the dev page for ' .. file .. '. Click it once to play.') end)
  end)
end, { buffer = true, desc = 'Strudel: save and play' })
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
