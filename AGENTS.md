# Agents

- use pnpm for the package manager and to run scripts
- make sure to use modern up to date svelte patterns and features

this is my personal website. focus on having it be fast, responsive, concise, and very simple.

## Design Context

This project carries strategic and visual design context in two files at the repository root:

- **PRODUCT.md** — register, users, brand personality, anti-references, design principles, accessibility posture. Strategic. Read this before making any UX/UI decision.
- **DESIGN.md** — the visual system (colors, typography, elevation, components, do's and don'ts) in [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/). Tokens are normative.

**Register:** `brand` (personal site / portfolio surface; sub-routes like `/karabiner`, `/font`, `/ai` may shift toward product-register density per task).

**Quick anchors from PRODUCT.md:**

1. Restraint reads as confidence — empty space is content
2. Self-evident over self-explanatory — pages don't introduce themselves
3. One opinion per surface — each page commits to a single visual idea
4. Normal sentence/title case with proper punctuation, never shouty (no forced ALL-CAPS)
5. Sharp edges on purpose — `border-radius: 0` is identity
6. Utility pages earn their own register

**Quick anchors from DESIGN.md:**

- Creative North Star: _The Quiet Workbench_
- Five-step dark ladder: ink → graphite → slate → panel → concrete
- One typeface family: Geist + GeistMono. No third font.
- The Wire Rule: blue (`#2663eb`) is for links and focus rings only — never a fill
- Tonal layering, never shadow-as-decoration; one heavy shadow per page max (`.content-sheet`)
- Light theme is a parallel warm-cream system, not an inversion

When in doubt, read both files end-to-end before proposing changes.

## Cursor Cloud specific instructions

Static SvelteKit site (Svelte 5, Vite, Tailwind v4), no backend/database/secrets. Scripts live in `package.json`; use `pnpm`.

- Dev server: `pnpm dev` serves on `http://localhost:5173`. `/ai` returns a 307 redirect to a default slug; all other routes (`/`, `/karabiner`, `/home-server`, `/sponsors`, `/macos`, `/font`, `/sv`) return 200.
- Lint: `pnpm lint` runs Prettier `--check` plus the custom design guardrail in `scripts/check-design.mjs` (enforces DESIGN.md invariants: no `rounded-*`, no raw Tailwind palette colors, no heavy shadows, etc.). `pnpm format` auto-fixes formatting.
- Type/Svelte check: `pnpm check` (runs `svelte-kit sync` then `svelte-check`).
- Build: `pnpm build` uses `@sveltejs/adapter-vercel`; it outputs to `.vercel`/`.svelte-kit` and needs no env vars.
- `.npmrc` sets `engine-strict=true`; keep the toolchain aligned with `packageManager` (pnpm) and Node 22.
