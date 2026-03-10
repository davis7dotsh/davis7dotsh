# AGENTS.md

## Cursor Cloud specific instructions

This is a single SvelteKit personal website (no monorepo, no database, no external services).

### Running the app

- `bun run dev` starts the Vite dev server on port 5173.
- The site is mostly prerendered; the `/sv` route uses SvelteKit experimental remote functions (server-side `command`).

### Available checks (see `package.json` scripts)

- `bun check` — runs `svelte-kit sync && svelte-check` (type checking)
- `bun lint` — runs `prettier --check .` (note: there is a pre-existing formatting issue in `src/app.html`)
- `bun format` — referenced in `.cursor/rules/global.mdc` as the format command (runs `prettier --write .`)

### Gotchas

- Bun must be installed (`curl -fsSL https://bun.sh/install | bash`); it is not pre-installed on the VM.
- The project uses Tailwind CSS v4 (via `@tailwindcss/vite` plugin), Svelte 5 runes, and experimental async Svelte — check `svelte.config.js` for compiler options.
- `@typescript/native-preview` is a dependency; it installs fine with `bun install`.
