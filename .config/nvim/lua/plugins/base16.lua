return {

  {
    "uZer/pywal16.nvim",
  },

  {
    "RRethy/base16-nvim",
    config = function()
      local pywal16_core = require("pywal16.core")
      local colors = pywal16_core.get_colors()

      require("base16-colorscheme").setup({
        base00 = colors.color0,
        base01 = colors.color1,
        base02 = colors.color2,
        base03 = colors.color3,
        base04 = colors.color4,
        base05 = colors.colors5,
        base06 = colors.color6,
        base07 = colors.color7,
        base08 = colors.color8,
        base09 = colors.color9,
        base0A = colors.color10,
        base0B = colors.color11,
        base0C = colors.color12,
        base0D = colors.color13,
        base0E = colors.color14,
        base0F = colors.color15,
      })
    end,
  },
}
