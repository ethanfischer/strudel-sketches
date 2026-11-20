-- Strudel key maps for the dev page (node dev.mjs). Your vimrc loads this file for the .js files in this folder.
-- <leader>mm saves and plays, like Ctrl+Enter. If no dev page is open for the file, it opens one in your browser.
-- <leader>mp stops all dev pages, like Ctrl+.
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

vim.keymap.set('n', '<leader>mm', function()
  vim.cmd.write()
  local path = vim.fs.normalize(vim.api.nvim_buf_get_name(0))
  local file = path:sub(#root + 2) -- the path from this folder, the same as ?file= in the page
  send('play', file, function()
    vim.system({ 'open', server .. 'dev.html?file=' .. vim.uri_encode(file) })
    vim.schedule(function() vim.notify('Strudel: opened the dev page for ' .. file .. '. Click it once to play.') end)
  end)
end, { buffer = true, desc = 'Strudel: save and play' })
vim.keymap.set('n', '<leader>mp', function() send('stop') end, { buffer = true, desc = 'Strudel: stop' })
