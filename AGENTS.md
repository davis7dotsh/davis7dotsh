# AGENTS.md

## Cursor Cloud specific instructions

This is a SvelteKit personal portfolio site (Svelte 5 + Tailwind CSS v4 + TypeScript). No database, Docker, or external services are needed.

**Dev commands** (see `package.json` scripts and `.cursor/rules/global.mdc`):
- `bun dev` — start Vite dev server (default port 5173)
- `bun check` — svelte-kit sync + svelte-check
- `bun lint` — prettier --check
- `bun run build` — production build (uses Vercel adapter)

**Caveats:**
- Bun is the required package manager/runtime (lockfile is `bun.lock`). Do not use npm/yarn/pnpm.
- The project uses experimental SvelteKit features (`remoteFunctions` and async Svelte) configured in `svelte.config.js`.
- `bun lint` currently reports a pre-existing formatting issue in `src/app.html`; this is not a regression.
- No `.env` or secrets are required for local development.
