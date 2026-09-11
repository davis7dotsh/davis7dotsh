# Site rules

Keep content and tone close to the official Davis7 pages. Improve layout, clarity, and interaction without adding promotional copy, marketing calls to action, or product claims.

Read README.md before editing. Do not write tests or start local servers. Preserve existing user changes.

## Background

Use the static theme-colored background and subtle grid. Do not add a background renderer. Respect reduced-motion preferences for the header animation.

## Layout

Use the same 1000px container and shared outer padding on every route. Keep page content left-aligned without nested page insets. Internal pages use the supplied SVG logo as the home link instead of Back text; keep the Ben Davis heading on the homepage. Use shared spacing tokens for header, section, and content gaps. The homepage is the spacing reference. `spacing` in `src/design-tokens.stylex.ts` owns responsive page insets/top padding and the 32px header, 40px section, 20px block, 4px related-text, and 6px icon gaps. Use the shared control spacing and 44px minimum target tokens. Apply outer padding once in App; give each gap one owner and avoid stacked margins. Preserve the homepage spacing when normalizing internal routes. See README Spacing rules.

## Typography and navigation

- Use shared StyleX design tokens for typography and homepage colors across all pages. Font sizes are 17px (body, small text, labels, and non-monospace metadata), 23px (middle-sized text), and 37px (large headings), including responsive layouts. All monospace text uses the shared 16px `mono` token, including code and monospace metadata.
- All text uses font weight 400. No bold, semibold, or medium weights, including headings, controls, and semantic bold elements.
- Resource and section titles are 17px and white in the dark theme. Capture this color in shared StyleX tokens. Keep contrasting dark titles in the light theme.
- Subheadings and descriptions below those titles preserve the original accent (`--accent: var(--subtle)`, #a4acb8 in dark mode and #555f57 in light mode). Do not substitute the saturated link-hover blue #2663eb.
- Main page headings use 37px. Apply these rules to the homepage and all local subpages.
- Internal pages use local paths and no arrow. External destinations show a right-side ↗. The fork includes the full linked site, not just the homepage.
