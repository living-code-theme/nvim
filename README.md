# Living Code for Neovim

Calm slate. Living color. Four flavors: Night, Frost, Paper and Signal.

## Installation

Install with your plugin manager. For lazy.nvim:

```lua
{
  "living-code-theme/nvim",
  priority = 1000,
  config = function()
    require("living-code").setup({
      flavor = "night",
      transparent = false,
      italic_comments = true,
    })
    vim.cmd.colorscheme("living-code")
  end,
}
```

Or pick a flavor directly: `:colorscheme living-code-signal`. Covers Tree-sitter, LSP semantic tokens, diagnostics, gitsigns, telescope, nvim-cmp / blink.cmp, which-key, mini.*, lualine (`theme = "living-code"`).

## Screenshots

### Night

![Neovim running Living Code Night](images/night.png)

### Frost

![Neovim running Living Code Frost](images/frost.png)

### Paper

![Neovim running Living Code Paper](images/paper.png)

### Signal

![Neovim running Living Code Signal](images/signal.png)

## License

[MIT](LICENSE) © Elliot Luque
