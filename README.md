<!-- living-code-readme:1 -->
<div align="center">

<a href="https://living-code.dev"><img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/brand/favicon.svg" width="64" height="64" alt="Living Code [lc] mark"></a>

# 📝 Living Code for Neovim

**Calm slate. Living color.**<br>Living Code for Neovim. Four color flavors, Tree-sitter and LSP highlights, and lualine integration.

<img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/00a692.svg" width="14" height="14" alt="teal #00a692"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/52d7c1.svg" width="14" height="14" alt="mint #52d7c1"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/9ae0dd.svg" width="14" height="14" alt="aqua #9ae0dd"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/80b6d3.svg" width="14" height="14" alt="steel #80b6d3"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/8acb83.svg" width="14" height="14" alt="moss #8acb83"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/f0be6d.svg" width="14" height="14" alt="amber #f0be6d"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/e18c5f.svg" width="14" height="14" alt="copper #e18c5f"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/e96560.svg" width="14" height="14" alt="flare #e96560"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/bf91cd.svg" width="14" height="14" alt="orchid #bf91cd"> <img src="https://raw.githubusercontent.com/living-code-theme/core/main/assets/swatches/ddaec3.svg" width="14" height="14" alt="rose #ddaec3">

<a href="https://neovim.io"><img src="https://img.shields.io/badge/Neovim-colorscheme-00a692?style=flat-square&logo=neovim&logoColor=e2e9ee&labelColor=05080b" alt="Neovim colorscheme"></a>
<a href="https://github.com/living-code-theme/nvim/actions/workflows/check.yml"><img src="https://img.shields.io/github/actions/workflow/status/living-code-theme/nvim/check.yml?branch=main&style=flat-square&label=check&logo=githubactions&logoColor=e2e9ee&labelColor=05080b&color=00a692" alt="Check status"></a>
<a href="LICENSE"><img src="https://img.shields.io/badge/license-MIT-00a692?style=flat-square&labelColor=05080b" alt="MIT license"></a>
<a href="https://living-code.dev"><img src="https://img.shields.io/badge/living--code.dev-all%20ports-00a692?style=flat-square&labelColor=05080b" alt="living-code.dev"></a>

<a href="images/night.png"><img src="https://img.shields.io/badge/Night-dark-00a692?style=flat-square&labelColor=05080b" alt="Night flavor"></a>
<a href="images/frost.png"><img src="https://img.shields.io/badge/Frost-soft-43a997?style=flat-square&labelColor=0a1016" alt="Frost flavor"></a>
<a href="images/paper.png"><img src="https://img.shields.io/badge/Paper-light-187d6e?style=flat-square&labelColor=f4f7f9" alt="Paper flavor"></a>
<a href="images/signal.png"><img src="https://img.shields.io/badge/Signal-one%20accent-00a692?style=flat-square&labelColor=05080b" alt="Signal flavor"></a>

[Installation](#installation) · [Flavors](#flavors) · [Configuration](#configuration) · [All ports](https://github.com/living-code-theme)

</div>

## Previews

<table data-lc-flavors>
<tr>
<td width="50%" valign="top">
<strong>Night</strong><br><sub>Dark · full palette</sub><br><br>
<a href="images/night.png"><img src="images/night.png" alt="Neovim running Living Code Night" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Frost</strong><br><sub>Dark · softer chroma</sub><br><br>
<a href="images/frost.png"><img src="images/frost.png" alt="Neovim running Living Code Frost" width="640"></a>
</td>
</tr>
<tr>
<td width="50%" valign="top">
<strong>Paper</strong><br><sub>Light · near-white slate</sub><br><br>
<a href="images/paper.png"><img src="images/paper.png" alt="Neovim running Living Code Paper" width="640"></a>
</td>
<td width="50%" valign="top">
<strong>Signal</strong><br><sub>Dark · teal accent</sub><br><br>
<a href="images/signal.png"><img src="images/signal.png" alt="Neovim running Living Code Signal" width="640"></a>
</td>
</tr>
</table>

Select any preview to view the image at full size.

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

## Flavors

Expand a flavor for its full-size preview and activation instructions.

<details data-lc-flavor="night">
<summary><strong>Night</strong> · Dark · full palette</summary>

<p><a href="images/night.png"><img src="images/night.png" alt="Neovim running Living Code Night" width="1280"></a></p>

Activate this flavor directly:

```vim
:colorscheme living-code-night
```

Or set `flavor = "night"` in `require("living-code").setup()` before loading `living-code`.

</details>

<details data-lc-flavor="frost">
<summary><strong>Frost</strong> · Dark · softer chroma</summary>

<p><a href="images/frost.png"><img src="images/frost.png" alt="Neovim running Living Code Frost" width="1280"></a></p>

Activate this flavor directly:

```vim
:colorscheme living-code-frost
```

Or set `flavor = "frost"` in `require("living-code").setup()` before loading `living-code`.

</details>

<details data-lc-flavor="paper">
<summary><strong>Paper</strong> · Light · near-white slate</summary>

<p><a href="images/paper.png"><img src="images/paper.png" alt="Neovim running Living Code Paper" width="1280"></a></p>

Activate this flavor directly:

```vim
:colorscheme living-code-paper
```

Or set `flavor = "paper"` in `require("living-code").setup()` before loading `living-code`.

</details>

<details data-lc-flavor="signal">
<summary><strong>Signal</strong> · Dark · teal accent</summary>

<p><a href="images/signal.png"><img src="images/signal.png" alt="Neovim running Living Code Signal" width="1280"></a></p>

Activate this flavor directly:

```vim
:colorscheme living-code-signal
```

Or set `flavor = "signal"` in `require("living-code").setup()` before loading `living-code`.

</details>

## Configuration

Call setup before loading the colorscheme. All options are optional:

```lua
require("living-code").setup({
  flavor = "night",
  light_flavor = "paper",
  transparent = false,
  italic_comments = true,
  dim_inactive = false,
  on_highlights = nil,
})
vim.cmd.colorscheme("living-code")
```

With `background=light`, the default colorscheme selects `light_flavor`. A flavor-specific colorscheme always loads that flavor. For lualine, use `theme = "living-code"`.

## Compatibility

Uses Neovim's Lua highlight API and true color. Includes Tree-sitter, LSP semantic tokens, diagnostics, gitsigns, telescope, nvim-cmp / blink.cmp, which-key, mini.* and lualine highlights. Plugin integrations are optional; install the plugins you use separately.

## Contributing

Found a problem? [Open an issue](https://github.com/living-code-theme/nvim/issues/new/choose) with the app version, the flavor and a screenshot. Want Living Code somewhere else? [Request a port](https://github.com/living-code-theme/core/issues/new?template=port-request.yml).

Pull requests are welcome. Keep this README, `port.json` and `images/` in sync, and use real screenshots of the app, never mockups.

<div align="center">

<sub>🦎 <b>One chameleon, many habitats.</b> Part of <a href="https://github.com/living-code-theme">Living Code</a>.</sub>

</div>

## License

[MIT](LICENSE) © Elliot Luque
