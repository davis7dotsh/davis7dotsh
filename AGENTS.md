# Agents

## Design Context

This project carries strategic and visual design context in two files at the repository root:

- **PRODUCT.md** — register, users, brand personality, anti-references, design principles, accessibility posture. Strategic. Read this before making any UX/UI decision.
- **DESIGN.md** — the visual system (colors, typography, elevation, components, do's and don'ts) in [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/). Tokens are normative.

**Register:** `brand` (personal site / portfolio surface; sub-routes like `/karabiner`, `/font`, `/ai` may shift toward product-register density per task).

**Quick anchors from PRODUCT.md:**

1. Restraint reads as confidence — empty space is content
2. Self-evident over self-explanatory — pages don't introduce themselves
3. One opinion per surface — each page commits to a single visual idea
4. Lowercase by default, capitalized on purpose
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
