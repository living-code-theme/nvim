// Port-owned role-contract tests, exercising generated files and real grammars.
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import test from 'node:test';
import {resolveAll} from '../scripts/palette.mjs';
import {generate} from '../src/generate.mjs';
import {CAPTURE_UI,captureRole,NVIM_GROUPS,NVIM_EMPTY} from './contract.mjs';

const root = new URL("../", import.meta.url);

const read = (path) => readFileSync(new URL(path, root), "utf8");

const captures = JSON.parse(read("test/fixtures/captures.json"));

const flavors = resolveAll();

function nvimTable() {
  const lua = read("lua/living-code/highlights.lua");
  const table = {};
  for (const m of lua.matchAll(/^\s*(\["[^"]+"\]|[A-Za-z][\w]*)\s*=\s*\{([^}]*)\}/gm)) {
    const name = m[1].replace(/^\["|"\]$/g, "");
    const body = m[2];
    const fg = body.match(/\bfg\s*=\s*([rc])(?:\.(\w+)|\["(\w+)"\])/);
    // `bg = bg` and `bg = bg_alt` are the locals that honour the transparent option: the bg and bgAlt roles.
    const local = body.match(/\bbg\s*=\s*(bg_alt|bg)\b/)?.[1];
    const bg = body.match(/\bbg\s*=\s*([rc])(?:\.(\w+)|\["(\w+)"\])/) ?? (local && [null, "r", local === "bg" ? "bg" : "bgAlt"]);
    const link = body.match(/\blink\s*=\s*"([^"]+)"/);
    const ref = (x) => x && { kind: x[1], name: x[2] ?? x[3] };
    table[name] = { fg: ref(fg), bg: ref(bg), link: link?.[1], empty: !body.trim() };
  }
  return table;
}

const nvim = nvimTable();

function nvimColor(f, group, key = "fg") {
  for (let g = group, seen = 0; g && seen < 20; seen++) {
    const e = Object.hasOwn(nvim, g) ? nvim[g] : undefined;
    if (e?.link) { g = e.link; continue; }
    if (e) {
      const ref = e[key];
      if (!ref) return undefined;
      if (ref.kind === "r" && !(ref.name in f.roles)) throw new Error(`${g} names r.${ref.name}, which is not a role`);
      return ref.kind === "r" ? f.r(ref.name) : f.c(ref.name);
    }
    g = g.includes(".") ? g.slice(0, g.lastIndexOf(".")) : null;
  }
  return undefined;
}

const norm = (hex) => hex?.toLowerCase().slice(0, 7);

const EDITOR_UI = {neovim: (f) => ({ bg: nvimColor(f, "Normal", "bg"), fg: nvimColor(f, "Normal"), cursor: nvimColor(f, "Cursor", "bg"), selection: nvimColor(f, "Visual", "bg"), lineNumber: nvimColor(f, "LineNr"), lineNumberActive: nvimColor(f, "CursorLineNr"), lineHighlight: nvimColor(f, "CursorLine", "bg") })};

test("every capture an editor uses has a role in the contract", () => {
  for (const engine of ["nvim"]) {
    const ui = new Set(CAPTURE_UI[engine]);
    const undecided = captures[engine].filter((n) => !ui.has(n) && captureRole(engine, n) === undefined);
    assert.deepEqual(undecided, [], `${engine}: decide these captures' roles in scripts/roles.mjs`);
  }
});

test("Neovim colors every tree-sitter capture, legacy group and LSP group with its role", () => {
  const failures = [];
  for (const f of flavors) {
    for (const name of captures.nvim) {
      const role = captureRole("nvim", name);
      if (!role) continue;
      // Notes, todos and errors in comments are drawn as a badge: the role is the background.
      const key = /^comment\.(error|warning|todo|note)$/.test(name) ? "bg" : "fg";
      const got = nvimColor(f, `@${name}`, key);
      if (norm(got) !== norm(f.r(role))) failures.push(`nvim ${f.id} @${name}: ${role} is ${f.r(role)}, got ${got}`);
    }
    for (const [group, role] of Object.entries(NVIM_GROUPS)) {
      const got = nvimColor(f, group);
      if (norm(got) !== norm(f.r(role))) failures.push(`nvim ${f.id} ${group}: ${role} is ${f.r(role)}, got ${got}`);
    }
  }
  for (const group of NVIM_EMPTY) assert.ok(nvim[group]?.empty, `${group} must stay empty so tree-sitter's color shows`);
  assert.deepEqual(failures, []);
});

test("every editor draws its editing surface with the same roles", async () => {
  const failures = [];
  for (const f of flavors) {
    for (const [port, load] of Object.entries(EDITOR_UI)) {
      const got = await load(f);
      for (const [role, color] of Object.entries(got)) {
        if (norm(color) !== norm(f.r(role))) failures.push(`${port} ${f.id} ${role}: ${f.r(role)}, got ${color}`);
      }
    }
  }
  assert.deepEqual(failures, []);
});
