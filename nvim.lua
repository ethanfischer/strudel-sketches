-- Strudel key maps for the dev page (node dev.mjs). Your vimrc loads this file for the .js files in this folder.
-- <leader>mm saves and plays, like Ctrl+Enter. <leader>mp stops, like Ctrl+.
local function send(command)
  vim.system({ 'curl', '-sS', '--fail-with-body', '-X', 'POST', 'http://localhost:8001/' .. command }, { text = true }, function(r)
    if r.code ~= 0 then
      local why = vim.trim(r.stdout ~= '' and r.stdout or r.stderr)
      vim.schedule(function() vim.notify('Strudel ' .. command .. ' failed: ' .. why, vim.log.levels.ERROR) end)
    end
  end)
end

vim.keymap.set('n', '<leader>mm', function()
  vim.cmd.write()
  send('play')
end, { buffer = true, desc = 'Strudel: save and play' })
vim.keymap.set('n', '<leader>mp', function() send('stop') end, { buffer = true, desc = 'Strudel: stop' })
