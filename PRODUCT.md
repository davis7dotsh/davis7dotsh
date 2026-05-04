# Product

## Register

brand

## Users

Three audiences arrive in roughly equal weight, so the home page has to satisfy all three within seconds without pandering to any one of them:

- **Devs and YouTubers** who clicked through from a video, a tweet, or a credit. They want a fast "who is this guy" read — what he builds, where he ships, why his opinions are worth tracking.
- **Recruiters, sponsors, and prospective collaborators** evaluating credibility. They want signal, not noise: the work, the affiliations, the seriousness of the operation.
- **Power users** hunting concrete artifacts — the karabiner config, the macOS setup, the font, the State of AI rankings. They came for utility and want the shortest path to the page they need.

The site is the public surface area of one person. Treat every visitor as smart, time-poor, and slightly suspicious of personal sites that try too hard.

## Product Purpose

A directory and reference for Ben Davis the person and the work — the things he ships, recommends, configures, and signs off on. It exists so that a single link can answer "who is this and what is he about?" with self-evident confidence, and so the configs and lists he'd otherwise re-explain on every YouTube comment and DM live somewhere durable. Success is when a stranger lands, scans for under five seconds, and either bookmarks the page they came for or comes away with an unmistakable sense of the person behind it.

## Brand Personality

**Quiet, precise, opinionated.** The voice is dry and lowercase by default — no exclamation points, no superlatives, no thank-you-for-coming. Copy reads like notes between competent friends: short sentences, technical when it needs to be, never over-explained. Confidence comes from restraint, not volume. The page should feel like a workshop someone keeps tidy, not a stage set up for visitors.

The closest reference points are paco.me and leerob.io: warm in copy, minimal in execution, technically sharp underneath. Personality lives in the small choices — what gets capitalized, what gets a footnote, what is conspicuously missing.

## Anti-references

The single strongest pattern to avoid: **the influencer landing page**. No selfie hero, no course funnel, no testimonial wall, no "as featured in" logo strip, no follower-count flex, no countdown timer to a launch, no email-capture popup, no "join 50,000 developers" claim. If it would look at home on a Substack growth-hacker's homepage, it does not belong here.

Adjacent patterns also out:

- Generic SaaS-template landing aesthetics (gradient text, hero metric cards, "trusted by" logo strips, vague "build faster, ship better" headers).
- Overdesigned portfolio tropes (parallax scrolljacking, video backgrounds, custom cursors, on-load splash animations).
- Default-flavored docs pages (Notion-look-alike, no point of view, no rhythm).

## Design Principles

1. **Restraint reads as confidence.** The visitor should feel that everything on screen was chosen, and nothing was added because the empty space made someone nervous. White (or ink) space is content.
2. **Self-evident over self-explanatory.** Labels are short. Pages don't introduce themselves. If a section needs a paragraph telling you what it is, the section is wrong, not the paragraph.
3. **One opinion per surface.** Each page commits to a single visual idea — a font, a list, a config, a ranking — and refuses to dilute it with secondary modules, related-content blocks, or footers that re-pitch the site.
4. **Lowercase by default, capitalized on purpose.** The voice runs lowercase in body and links; capitalization, when it appears, signals weight (proper nouns, the resource titles, headings). This is a tone signature, not a typo.
5. **Sharp edges on purpose.** The hard `border-radius: 0` rule is identity, not oversight. Anything pillish or soft-cornered fights the rest of the site and should be reworked rather than smoothed in.
6. **Utility pages earn their own register.** Sub-routes that serve a job (karabiner visualizer, font showcase, State of AI) can shift toward product-register density when the task demands it, but inherit the same voice and palette.

## Accessibility & Inclusion

- **Target: WCAG 2.2 AA across all pages**, dark and light themes. Body and muted text must hit AA contrast against every background variant in use; the blue accent is decorative and link-affordance only — never the sole carrier of meaning.
- **Respect `prefers-reduced-motion`.** The existing fade-in-up entrance and any future motion must collapse to instant or opacity-only when the OS asks. Never animate layout properties.
- **Keyboard-first.** Every interactive element (resource cards, theme toggle, social links, in-page filters) must be reachable in tab order with a visible focus ring. The current 1px blue outline at 3px offset is the baseline — preserve it.
- **No color-only state.** Hover, active, focus, and current-page states are also expressed through border, weight, or position — not just hue.
- **Type stays at or above 14px in body contexts**, with mono down-shifts allowed for code chips and field inputs only. Line length capped at 65–75ch for prose pages.
