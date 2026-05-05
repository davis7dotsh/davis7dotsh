---
name: davis7.sh
description: Ben Davis's personal site — a quiet workbench in dark or light, with monospace receipts and a single blue wire.
colors:
  ink: '#0b0d10'
  graphite: '#14171c'
  slate: '#1d2127'
  panel: '#232831'
  concrete: '#2a2f36'
  paper: '#f5f6f7'
  cloud: '#e5e7eb'
  text-muted: '#d0d5dd'
  text-subtle: '#a4acb8'
  accent-blue: '#2663eb'
  accent-blue-soft: '#bfdbfe'
  accent-blue-hover-light: '#1d4ed8'
  success: '#22c55e'
  warning: '#d97706'
  danger: '#dc2626'
  context-violet: '#8b5cf6'
  light-bg: '#fafaf8'
  light-bg-soft: '#f3f3ef'
  light-surface: '#ffffff'
  light-surface-elevated: '#f1f2f0'
  light-surface-hover: '#e7e7e1'
  light-text-muted: '#374151'
  light-text-subtle: '#555f57'
typography:
  display:
    fontFamily: 'Geist, system-ui, -apple-system, sans-serif'
    fontSize: '2.25rem'
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: '-0.02em'
  headline:
    fontFamily: 'Geist, system-ui, -apple-system, sans-serif'
    fontSize: '1.125rem'
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: '-0.005em'
  title:
    fontFamily: 'Geist, system-ui, -apple-system, sans-serif'
    fontSize: '1rem'
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 'normal'
  body:
    fontFamily: 'Geist, system-ui, -apple-system, sans-serif'
    fontSize: '1rem'
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: 'normal'
  label:
    fontFamily: 'Geist, system-ui, -apple-system, sans-serif'
    fontSize: '0.875rem'
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 'normal'
  mono:
    fontFamily: 'GeistMono, ui-monospace, SFMono-Regular, Menlo, monospace'
    fontSize: '0.75rem'
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 'normal'
rounded:
  flat: '0px'
spacing:
  xs: '4px'
  sm: '8px'
  md: '16px'
  lg: '24px'
  xl: '40px'
components:
  button:
    backgroundColor: '{colors.slate}'
    textColor: '{colors.paper}'
    typography: '{typography.label}'
    rounded: '{rounded.flat}'
    padding: '8px 16px'
  button-hover:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.paper}'
    rounded: '{rounded.flat}'
    padding: '8px 16px'
  icon-button:
    backgroundColor: '{colors.slate}'
    textColor: '{colors.text-muted}'
    rounded: '{rounded.flat}'
    size: '44px'
  resource-card:
    backgroundColor: '{colors.slate}'
    textColor: '{colors.paper}'
    rounded: '{rounded.flat}'
    padding: '16px'
  resource-card-hover:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.paper}'
    rounded: '{rounded.flat}'
    padding: '16px'
  field-input:
    backgroundColor: '{colors.slate}'
    textColor: '{colors.paper}'
    typography: '{typography.mono}'
    rounded: '{rounded.flat}'
    padding: '8px 12px'
  code-chip:
    backgroundColor: '{colors.panel}'
    textColor: '{colors.paper}'
    typography: '{typography.mono}'
    rounded: '{rounded.flat}'
    padding: '2px 6px'
  toast-success:
    backgroundColor: '{colors.success}'
    textColor: '{colors.success}'
    rounded: '{rounded.flat}'
    padding: '12px 16px'
  toast-error:
    backgroundColor: '{colors.danger}'
    textColor: '{colors.danger}'
    rounded: '{rounded.flat}'
    padding: '12px 16px'
  brand-link:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.paper}'
    rounded: '{rounded.flat}'
  content-sheet:
    backgroundColor: '{colors.ink}'
    textColor: '{colors.text-muted}'
    rounded: '{rounded.flat}'
    padding: '24px'
---

# Design System: davis7.sh

## 1. Overview

**Creative North Star: "The Quiet Workbench"**

A workbench someone keeps tidy. Surfaces are restrained, edges are sharp, and the only piece of color in the room is the wire that conducts a signal — the blue focus ring, the blue link hover. Nothing is on display that isn't being used. Voice is dry and lowercase by default. The site reads like notes between competent friends, not a presentation.

The whole system runs on a single move: a five-step monochrome ladder (ink → graphite → slate → panel → concrete in dark, paper-warm in light), 1px hairline borders to separate without decorating, and one variable typeface family (Geist + GeistMono) that does all the typographic work. Hierarchy lives in scale and weight, never in color. Decoration lives nowhere.

The system rejects every visual cliché of the influencer-personal-site: no gradient text, no metric hero cards, no rounded-everything pill aesthetic, no testimonial wall, no "as featured in" logo strip, no glass cards, no parallax. If a choice would feel at home on a Substack growth-hacker's homepage, it is wrong here.

**Key Characteristics:**

- Tonal layering, never shadows-as-decoration
- Hard `border-radius: 0` everywhere — this is identity, not oversight
- One typeface family (Geist), one mono companion (GeistMono), no third font
- Blue accent reserved for state and links — never a fill, never a flourish
- Lowercase body voice, capitalization saved for proper nouns and headings
- Dark by default, light theme is a true peer (not an afterthought)

## 2. Colors: The Workbench Palette

The palette is a five-step monochrome ladder plus one electrical wire. Every other color is a guardrail (success / warning / danger / context-violet) and shows up only when a state demands it.

### Primary

- **Accent Blue** (`#2663eb` → light-mode hover `#1d4ed8`): The wire. The single piece of saturated color in the system. Used for link hover, focus ring, and the social-icon hover halo. Never a fill, never a background, never a border accent on a non-interactive surface.
- **Accent Blue Soft** (`#bfdbfe`): Reserved for rare highlight or selection states where the strong blue would over-shout. Held back by default.

### Neutral — The Dark Ladder

- **Ink** (`#0b0d10`): Base background. The room. Body sits on this in dark mode.
- **Graphite** (`#14171c`): One step up — used for the gradient-into-corner effect on the body background.
- **Slate** (`#1d2127`): Default surface — buttons, cards, inputs, icon buttons in resting state.
- **Panel** (`#232831`): Elevated surface — surfaces on hover, code chips, the second tonal step inside content sheets.
- **Concrete** (`#2a2f36`): Top of the ladder — the explicit "interactive surface, hovered" state.

### Neutral — Text on Dark

- **Paper** (`#f5f6f7`): Primary text — headlines, resource titles, button labels, links.
- **Cloud** (`#e5e7eb`): Default body text on the root `<html>` element.
- **Text Muted** (`#d0d5dd`): Body paragraphs, prose color in articles.
- **Text Subtle** (`#a4acb8`): Secondary metadata, social link rest state, "back" link rest state, prose links — anything that should recede until pointed at.

### Neutral — The Light Sequence

The light theme is not an inversion. It is a parallel system tuned to ink-on-warm-cream rather than paper-on-cool-ink.

- **Light BG** (`#fafaf8`): Warm off-white room.
- **Light BG Soft** (`#f3f3ef`): The gradient corner.
- **Light Surface** (`#ffffff`): Pure white card / surface.
- **Light Surface Elevated** (`#f1f2f0`): One step warmer — hover, elevated surfaces.
- **Light Surface Hover** (`#e7e7e1`): Top of the warm-cream ladder.
- **Light Text** (`#0b0d10`): Mirrors ink for text — same value, opposite role.
- **Light Text Muted** (`#374151`): Primary body text.
- **Light Text Subtle** (`#555f57`): Recessed metadata, social rest state.

### State (held back unless required)

- **Success** (`#22c55e`): Toast-success only. Never used decoratively.
- **Warning** (`#d97706`): Reserved for genuine warnings.
- **Danger** (`#dc2626`): Toast-error and destructive confirmation only.
- **Context Violet** (`#8b5cf6`): Reserved for in-context tagging (e.g. AI-content provenance hints). Default to "do not use".

### Named Rules

**The Wire Rule.** Blue (`#2663eb` / light-hover `#1d4ed8`) is for links and focus rings. It is never a fill, never a background, never a border accent on a non-interactive element, never a hero color. If you need a decorative accent, you have misread the brief — restate the layout in pure neutrals first.

**The Five-Step Rule.** All depth in dark mode is conveyed by stepping up the ink → graphite → slate → panel → concrete ladder. Skipping a step produces visible banding; introducing a sixth tone produces visible noise. Stay on the ladder.

**The State-Color Quarantine.** Success, warning, danger, and context-violet may appear only on elements that exist _because of_ a state event (a toast, a destructive confirm, a tagged inline annotation). They are not part of the visual vocabulary at rest.

## 3. Typography

**Display Font:** Geist (variable 100–900) with system-ui / -apple-system / sans-serif fallback
**Body Font:** Geist (same family, lighter weights)
**Label / Mono Font:** GeistMono (variable 100–900) with ui-monospace / SFMono-Regular / Menlo fallback

**Character:** Two siblings doing complementary jobs. Geist is neutral, optical-feeling, slightly humanist — it carries voice without imposing one. GeistMono is the receipt: crisp, tabular, used for code, inputs, chips, and anything that should look like data rather than copy. The system runs entirely on this pair; introducing a third typeface is forbidden.

### Hierarchy

- **Display** (700, `text-4xl` ~36px, line-height 1.05, letter-spacing -0.02em): The single hero headline on the home page (`Ben Davis`). Used at most once per page.
- **Headline** (500, `text-lg` ~18px, line-height 1.3): Section headers like "You might be looking for". Quiet, never bold-bordering-shouty.
- **Title** (500, ~16px / `text-base`): Resource card titles, prose `<h2>`/`<h3>`. The "named-thing" weight.
- **Body** (400, ~16px, line-height 1.55, max-width 65ch): Default paragraph text in prose. Never wider than 65ch on prose surfaces.
- **Label** (500, ~14px / `text-sm`): Button text, link affordances, meta labels. Compact but not whispery.
- **Mono** (400, `text-xs` ~12px, GeistMono): Field inputs, code chips, terminal-flavored UI. Tracks normally — no condensed mono.

### Named Rules

**The Two-Family Rule.** Geist for prose and UI. GeistMono for inputs, code, and "data-feeling" UI. There is no third typeface. If a variant looks like it needs one, the variant is wrong.

**The Lowercase Voice Rule.** Body, link text, descriptive copy: lowercase. Capitalization signals weight — proper nouns, page titles (`State of AI`, `MacOS Setup`), and the `Ben Davis` mark itself. Sentence-case headers are wrong; full-caps headers are very wrong.

**The 65ch Cap.** Prose surfaces (`.prose`) cap line length at 65ch. Wider than that and the page starts to read like documentation, which is the wrong register for this site.

**The Hierarchy-by-Weight Rule.** Distinct levels come from weight + size, not from color. Headings are `paper` / `text` and so is body. The visitor's eye travels the page on type structure, not on a chromatic gradient.

## 4. Elevation

The system is **flat with tonal layering, not shadow-driven**. Depth is conveyed by stepping up the dark ladder (ink → graphite → slate → panel → concrete) rather than by drop shadows. Borders do the rest of the work — every elevated surface gets a `1px solid rgba(229, 231, 235, 0.12)` hairline, which strengthens to `0.22` opacity on hover. A faint inset highlight (`0 1px 0 rgba(255, 255, 255, 0.03) inset`) adds the illusion of a single-pixel bevel at the top of every surface, the way a real machined edge catches light.

There is exactly one heavy shadow in the entire system, and it is reserved for the `.content-sheet` container that wraps long-form prose pages: `0 24px 80px rgba(0, 0, 0, 0.32)`. Its job is to distinguish the editorial sheet from the page background. It does not appear anywhere else.

### Shadow Vocabulary

- **Inset Highlight** (`box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03) inset`): Default on `.surface`, `.button`, `.icon-button`, `.resource-card`. The single-pixel "milled edge" cue.
- **Sheet Drop** (`box-shadow: 0 1px 0 rgba(255, 255, 255, 0.03) inset, 0 24px 80px rgba(0, 0, 0, 0.32)`): Reserved for `.content-sheet`. One per page maximum.

### Named Rules

**The Tonal-First Rule.** Reach for the next ladder step before reaching for a shadow. If a hover state needs to feel "lifted", change the background from slate to panel and let the border opacity carry the rest.

**The One-Sheet Rule.** The heavy ambient shadow exists once per page, on the prose `.content-sheet`. Stacking it on cards, panels, or modals immediately reads as a 2014 SaaS landing page.

**The Hairline Doctrine.** Every elevated surface gets a 1px border, never thicker. Thicker borders convert into visual weight that competes with type, which is the only thing that should be drawing the eye.

## 5. Components

### Buttons (`.button`)

- **Shape:** Hard rectangular (`border-radius: 0` enforced globally).
- **Resting:** Background `slate` (`#1d2127` / light: `#ffffff`), 1px `rgba(229,231,235,0.22)` border, paper text, `gap-2` for icons + label, padding `8px 16px`, label typography (500, 14px).
- **Hover:** Background steps up to `panel` (`#232831` / light: `#f1f2f0`), border becomes the blue focus color, text stays paper. Subtle, not lifty.
- **Disabled:** Text drops to subtle, border drops to base. No background change.
- **Focus:** 1px blue outline at 3px offset — the same focus ring used everywhere.

### Icon Button (`.icon-button`)

- **Shape:** Square, `44x44` minimum (theme toggle is exactly 44px), no radius.
- **Resting:** 88%-mixed surface background (creates the subtle backdrop-blur compatibility), 1px hairline border, text-muted icon color.
- **Hover:** Lifts via `translateY(-1px)`, background → panel, border strengthens, icon color → paper.

### Resource Cards (`.resource-card`)

- **Shape:** Hard rectangle.
- **Background:** `slate` resting; `panel` on hover.
- **Border:** 1px `rgba(229, 231, 235, 0.12)` resting → `0.22` opacity on hover.
- **Padding:** `16px` (`p-4`).
- **Hover behavior:** `translateY(-1px)` — a one-pixel lift, never more. No scale, no shadow change.
- **Content:** Resource title (paper, font-medium) on top; subtitle (text-subtle, text-sm) below with `mt-1` gap. Single-purpose; no accessory icons.

### Inputs (`.field-input`)

- **Shape:** Hard rectangle, no radius.
- **Background:** `slate` (light: `#ffffff`).
- **Border:** 1px `rgba(229,231,235,0.12)` hairline.
- **Padding:** `8px 12px` (`px-3 py-2`).
- **Typography:** GeistMono `text-xs` — inputs read as data, not as copy.
- **Focus:** 1px blue outline at 3px offset.

### Code Chips (`.code-chip`)

- **Background:** `panel` mixed at 70% with transparent (creates lift against the surrounding paragraph).
- **Border:** 1px hairline.
- **Padding:** `2px 6px` (very tight, in-line).
- **Typography:** GeistMono, weight-medium, paper text.

### Brand Links (`.brand-link`, `.prose a`)

- **Resting:** Paper-colored text (no underline beyond the bottom hairline), `1px solid rgba(229, 231, 235, 0.22)` border-bottom that reads as a deliberate underline.
- **Hover:** Color → blue, border-bottom → blue, both transitioning over 160ms ease.
- **Focus:** Same blue outline at 3px offset.

### Back Link (`.back-link`)

- Inline-flex, text-sm, font-medium, color `text-subtle` resting → `text` on hover. No border, no underline. The voice equivalent of a typed-out arrow.

### Content Sheet (`.content-sheet`)

- The signature long-form container.
- **Background:** Two-stop linear gradient — `color-mix(in srgb, var(--color-ink) 82%, var(--color-surface))` to `color-mix(in srgb, var(--color-graphite) 74%, var(--color-ink))`, layered over flat ink.
- **Border:** 1px hairline.
- **Padding:** `clamp(1.25rem, 3vw, 2.5rem)` — fluid by viewport.
- **Shadow:** The single page-level sheet drop shadow.
- **Width:** When applied to `.prose`, capped at `min(92ch, 100%)`.

### Surface (`.surface`)

- Default elevated surface helper. `slate` background, hairline border, inset highlight. Used as a building block for any new component that doesn't have its own opinion yet.

### Toasts (`.toast` + `.toast-success` / `.toast-error`)

- **Position:** Fixed `bottom-8 right-8`, `z-50`.
- **Shape:** Hard rectangle, 1px border tinted to the state color, backdrop-blur applied.
- **Background:** State color mixed at 12% with the page bg — the color shows up as a tint, never a fill.
- **Text + border:** Take their state hue at full saturation (success / danger).
- **Heavy shadow** is allowed here because toasts are exception-state ephemera.

### Grid Pattern (`.grid-pattern`)

- The signature page background — 24px × 24px grid drawn from `rgba(255,255,255,0.05)` (light: `rgba(11,13,16,0.055)`) hairlines, masked to fade out at the bottom 25% of the viewport with a `linear-gradient` mask. Never apply elsewhere.

### Theme Toggle (signature component)

- A 44×44 icon button fixed at top-right (`top-4 right-4`, `z-50`), rendered with `lucide-svelte` Sun/Moon icons (18px). Identical hover behavior to other icon buttons. The theme persists to `localStorage` under key `theme-preference` and falls back to `prefers-color-scheme`.

## 6. Do's and Don'ts

### Do:

- **Do** keep `border-radius: 0` globally. Sharp edges are identity, not an oversight. The `*, *::before, *::after { border-radius: 0 !important; }` rule in `app.css` is non-negotiable.
- **Do** convey depth by stepping up the ink → graphite → slate → panel → concrete ladder. Reach for the next tone before reaching for a shadow.
- **Do** use blue only for interactive state — links, focus rings, hover signals. Treat it like a wire that conducts a signal: it appears where there is current.
- **Do** use Geist for prose and UI, GeistMono for inputs, code chips, and "data-feeling" UI. No third typeface.
- **Do** keep body copy lowercase by default. Capitalize proper nouns and titles only.
- **Do** cap prose line length at 65ch via the `.prose` selector.
- **Do** apply 1px hairline borders to elevated surfaces — `rgba(229,231,235,0.12)` resting, `0.22` on hover.
- **Do** use the `translateY(-1px)` lift for hover affordance — exactly one pixel, no more.
- **Do** maintain the dark + light parallel system. Light is not an inversion; it is a warm-cream peer with its own ladder.
- **Do** respect `prefers-reduced-motion`: collapse the `fade-in-up` entrance to opacity-only or skip it.
- **Do** keep focus rings at 1px blue with 3px offset on every interactive element.
- **Do** keep the heavy ambient shadow exclusive to `.content-sheet` — one sheet per prose page, maximum.

### Don't:

- **Don't** introduce rounded corners. No `rounded-md`, no `rounded-full`, no pill buttons. The site rejects pill-shaped UI on principle.
- **Don't** use blue as a fill, a background, a decorative accent, or a hero color. The Wire Rule is absolute.
- **Don't** stack the heavy ambient shadow on cards, panels, or modals. The instant the shadow appears in two places on the same page, it reads as a 2014 SaaS landing page.
- **Don't** introduce a third typeface. Geist + GeistMono is the entire system.
- **Don't** add gradient text (`background-clip: text`), gradient hero metric cards, "trusted by" logo strips, testimonial walls, or follower-count flexes. These are the influencer-landing-page anti-references PRODUCT.md explicitly forbids.
- **Don't** use parallax scrolljacking, video backgrounds, custom cursors, or splash animations. The system is restrained on purpose.
- **Don't** introduce a glass / frosted card aesthetic. Backdrop-blur is acceptable on the theme toggle and on toasts (where it serves blur-over-content) and nowhere else.
- **Don't** convey state with color alone — pair color with weight, border, position, or icon. Color blindness and high-contrast modes break otherwise.
- **Don't** widen prose past 65ch. The page begins to read like documentation, which is the wrong register.
- **Don't** introduce a side-stripe accent border (`border-left: 4px solid` on a callout or list item). Use full borders, leading numbers, or background tints.
- **Don't** use em dashes in copy. Use commas, colons, semicolons, periods, or parentheses. (Carry from PRODUCT.md voice.)
- **Don't** animate layout properties (width, height, margin, padding) for state changes. Only opacity and transform.
- **Don't** add a footer that re-pitches the site. The home page links are the directory; pages don't need to re-introduce the directory.
