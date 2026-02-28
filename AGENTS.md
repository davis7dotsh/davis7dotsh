## Cursor Cloud specific instructions

This is a single SvelteKit 2 + Svelte 5 personal website (`davis7.sh`). No external services, databases, or environment variables are needed.

### Service

| Service | Command | Port |
|---|---|---|
| SvelteKit Dev Server | `bun run dev` | 5173 |

### Commands

Standard commands are in `package.json`. The workspace rules (`.cursor/rules/global.mdc`) restrict project commands to:

- `bun check` — TypeScript/Svelte type checking
- `bun lint` — Prettier formatting check
- `bun format` — Auto-format with Prettier

### Notes

- Uses **bun** as the package manager (lockfile: `bun.lock`). Always use `bun` not npm/yarn/pnpm.
- `bun lint` may report pre-existing formatting issues in the repo; this is expected.
- The app uses experimental Svelte 5 features (runes, async, remote functions).
- Deployed to Vercel via `@sveltejs/adapter-vercel`; no Vercel account needed for local dev.
