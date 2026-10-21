// This port owns its application mappings. Inputs come only from the pinned local palette.


const neovim = {
files: (f) => {
    const lua = (o) => Object.entries(o).map(([k, v]) => `    ["${k}"] = "${v}",`).join("\n");
    return [
      {
        path: `lua/living-code/palettes/${f.id}.lua`,
        content: `return {\n  name = "${f.name}",\n  light = ${f.light},\n  colors = {\n${lua(Object.fromEntries(Object.keys(f.colors).map((n) => [n, f.c(n)])))}\n  },\n  roles = {\n${lua(Object.fromEntries(Object.keys(f.roles).map((k) => [k, f.r(k)])))}\n  },\n  ansi = {\n${[...f.ansi.normal, ...f.ansi.bright].map((c) => `    "${c}",`).join("\n")}\n  },\n  blend = {\n    added = "${f.mix("bg", "added", 0.14)}",\n    removed = "${f.mix("bg", "removed", 0.14)}",\n    modified = "${f.mix("bg", "modified", 0.12)}",\n    error = "${f.mix("bg", "error", 0.12)}",\n    warning = "${f.mix("bg", "warning", 0.12)}",\n    info = "${f.mix("bg", "info", 0.12)}",\n    hint = "${f.mix("bg", "hint", 0.12)}",\n    accent = "${f.mix("bg", "accent", 0.18)}",\n  },\n}\n`,
      },
      { path: `colors/${f.slug}.lua`, content: `require("living-code").load("${f.id}")\n` },
    ];
  },
all: () => [{ path: "colors/living-code.lua", content: `require("living-code").load()\n` }]
};

export function generate(flavors) {
  return [...flavors.flatMap(f => neovim.files(f)), ...(neovim.all?.(flavors) ?? [])].filter(f => !["LICENSE", "README.md", "package.json", "extension.toml"].includes(f.path.split("/").at(-1)));
}
