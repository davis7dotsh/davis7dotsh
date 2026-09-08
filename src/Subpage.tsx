import * as stylex from '@stylexjs/stylex';
import { colors, spacing, typography } from './design-tokens.stylex';
import { useEffect, useRef } from 'react';
import { referencePages } from './subpages/reference';
import { referenceStyle } from './subpages/reference-style';

const adjustments = `
.reference-page[data-page="/karabiner"] ul.space-y-2:has(> li.border-b) {display:flex;flex-direction:column;gap:0}
.reference-page[data-page="/karabiner"] ul.space-y-2 > li.border-b {display:flex;align-items:center;min-height:${spacing.touchTarget};padding-block:${spacing.controlPadding};margin-block:0;line-height:24px}
.reference-page :is(a[href],button,.sponsor-cta) {color:${colors.title}!important}

.reference-page .key-group:not(.key-group-static) rect {fill:color-mix(in srgb, ${colors.title} 18%, ${colors.surface});stroke:${colors.subtle};stroke-width:1.5px}
.reference-page .key-group[aria-pressed="true"] rect {stroke:${colors.title};stroke-width:3px}

.reference-page {
  position:relative; width:100%; max-width:${spacing.contentWidth}; margin:0 auto; padding:0; text-align:left; background:none;
  font-family:${typography.family}; font-size:${typography.small}; line-height:1.6; color-scheme:inherit!important;
  --color-text:${colors.text}!important; --color-text-muted:${colors.muted}!important;
  --color-text-subtle:${colors.subtle}!important; --color-bg:${colors.background}!important;
  --color-surface:${colors.surface}!important; --color-surface-elevated:${colors.elevated}!important;
  --color-border:${colors.border}!important; --color-border-strong:${colors.borderStrong}!important;
  --text-xs:${typography.small}!important; --text-sm:${typography.small}!important;
}
.reference-page h1 {font-size:${typography.large}!important;color:${colors.title}}
.reference-page main[class] {width:100%;max-width:none;margin:0;padding:0;text-align:left}
.reference-page main :is(.content-sheet,.server-sheet) {width:100%;max-width:none;margin:0;padding:0;border:0;background:none;box-shadow:none}
.reference-page :is(main,article,section,.surface,.content-sheet,.server-sheet) {background:none;box-shadow:none}
.reference-page main > .pb-16 {padding-bottom:0}
.reference-page h1 {margin:0;line-height:40px;letter-spacing:-.025em}
.reference-page :is(main > div > header,.server-sheet > header) {margin:0 0 ${spacing.headerGap}}
.reference-page :is(main > div > header,.server-sheet > header) > div {margin:0;gap:${spacing.textGap}}
.reference-page .back-link {display:inline-block;margin:0 0 ${spacing.headerGap};line-height:24px}
/* Target captured content structures, not all bordered elements or SVG keys. */
.reference-page main > div > .grid:has(> .sponsor-card) {gap:${spacing.entryGap}}
.reference-page .sponsor-card .sponsor-cta {margin-top:${spacing.blockGap}}
.reference-page .config-dialog-inner > .mb-4 {margin-bottom:${spacing.blockGap};gap:${spacing.controlGap}}
.reference-page .config-dialog-inner > .surface {padding:${spacing.blockGap}}
.reference-page .server-sheet .setup-diagram figcaption {gap:${spacing.blockGap}}
.reference-page .content-sheet.flex {gap:${spacing.headerGap}}
.reference-page .content-sheet.flex > .back-link {margin:0}
.reference-page .prose > h1 {margin-bottom:${spacing.headerGap}}
.reference-page .prose :is(p,ul,pre) {margin-block:0 ${spacing.blockGap}}
.reference-page .prose :is(h2,h3) {margin-block:${spacing.entryGap} ${spacing.textGap}}
.reference-page main > div > .text-center {text-align:left;align-items:flex-start;margin:0 0 ${spacing.entryGap};gap:${spacing.textGap}}
.reference-page main > div > .font-intro {gap:${spacing.blockGap}}
.reference-page .dispatch-head {padding:0 0 ${spacing.entryGap}}
.reference-page .meta {margin:0 0 ${spacing.headerGap}}
.reference-page .meta .back-link {margin:0}
.reference-page .hero-sub {margin-top:${spacing.textGap}}
.reference-page .byline {margin:${spacing.blockGap} 0}
.reference-page .disclaimer {margin:0 0 ${spacing.blockGap}}
.reference-page .section {padding-block:${spacing.entryGap}}
.reference-page .section-label {margin-bottom:${spacing.textGap}}
.reference-page .dispatch .item {padding-inline:0}
.reference-page .dispatch .item-rank {position:static;display:block;width:auto;margin-bottom:${spacing.textGap};line-height:24px}
.reference-page main .sponsor-card {padding:${spacing.blockGap}}
.reference-page main a.sponsor-card[href]::after {content:none}
.reference-page .sponsor-card .sponsor-cta {display:flex;align-items:center;gap:${spacing.iconGap}}
.reference-page .sponsor-card .sponsor-cta::after {content:"↗"}
.reference-page .sponsor-card .resource-subtitle {margin-top:${spacing.textGap}}
.reference-page .sponsor-card .logo-frame {margin-bottom:${spacing.blockGap}}
.reference-page main > .surface {padding:${spacing.blockGap}}
.reference-page main > .overflow-x-auto {padding-inline:0}
.reference-page .tldr {margin-bottom:${spacing.blockGap}}
.reference-page .dispatch-foot {text-align:left;margin-top:${spacing.entryGap};padding-top:${spacing.blockGap}}
.reference-page .intro {margin-bottom:${spacing.entryGap}}
.reference-page .intro .affiliate-disclaimer {margin-top:${spacing.blockGap}}
.reference-page .setup + .setup {margin-top:${spacing.entryGap};padding-top:${spacing.entryGap}}
/* Bordered text panels share an inset; full-bleed media stays unpadded. */
.reference-page .server-sheet :is(.setup-heading,.setup-diagram figcaption) {padding:${spacing.blockGap}}
.reference-page .server-sheet .setup-heading {align-self:start}
.reference-page .setup-note {margin-top:${spacing.textGap}}
.reference-page :is(.setup-total,.receipt) {margin-top:${spacing.entryGap}}
.reference-page [role="status"]:empty {display:none}
.reference-page, .reference-page *, .reference-page *::before, .reference-page *::after {font-weight:${typography.weight}!important}
.reference-page :is(h2,h3,h4,h5,h6,.section-label,.resource-title,.item-name,.product-name) {font-size:${typography.small}!important;color:${colors.title}!important}
.reference-page :is(.resource-subtitle,.setup-note,.hero-sub,.item-desc),
.reference-page[data-page="/sponsors"] header .muted-text {color:${colors.accent}!important}
.reference-page img {max-width:100%;height:auto}
.reference-page :is(img.border,.logo-frame,.resource-card,.button,.icon-button,.field-input,.code-chip,.prose pre,.prose code,.setup-intro,.setup-diagram,.product-grid,dialog) {box-shadow:${colors.shadow};background-clip:padding-box}
.reference-page .home-link-list .resource-card {box-shadow:none}
.reference-page pre {overflow:auto;max-width:100%;font-size:${typography.mono};white-space:pre-wrap;overflow-wrap:anywhere}
.reference-page :is(.meta,.item-tag,.byline,.disclaimer,.previous,.setup-index,.setup-note,.setup-total,.product-price,.affiliate-disclaimer,figcaption,.text-xs,.text-sm) {font-size:${typography.small}!important}
.reference-page .social-link {color:${colors.title}!important;transition:none!important}
.reference-page .social-link:focus-visible {color:${colors.title}!important}
@media (hover:hover) and (pointer:fine) {.reference-page .social-link:hover {color:${colors.title}!important}.reference-page .key-group:hover rect {stroke:${colors.linkHover};stroke-width:2px}}
.reference-page a[href^="http"]:not(.social-link)::after {content:' ↗';font-size:${typography.small}}
.reference-page main .server-sheet a[href]::after {content:none}
.reference-page .key-group:focus-visible rect {stroke:${colors.linkHover};stroke-width:2px}
.reference-page :is(a,button,input,select,textarea,[tabindex]):focus-visible {outline:none!important;box-shadow:0 0 0 3px ${colors.linkHover}!important}
@media (forced-colors:active) {.reference-page :is(a,button,input,select,textarea,[tabindex]):focus-visible {outline:2px solid Highlight!important;outline-offset:3px;box-shadow:none!important}.reference-page .key-group:focus-visible rect {stroke:Highlight!important}}
.reference-page > a > img,
.reference-page .item-logo img:is([src$="/openai_dark.svg"],[src$="/codex_dark.svg"],[src$="/cursor_dark.svg"],[src$="/pi_dark.svg"],[src$="/t3-light.svg"]) {filter:brightness(0) invert(1)}
html[data-theme="light"] .reference-page > a > img,
html[data-theme="light"] .reference-page .item-logo img:is([src$="/openai_dark.svg"],[src$="/codex_dark.svg"],[src$="/cursor_dark.svg"],[src$="/pi_dark.svg"],[src$="/t3-light.svg"]) {filter:brightness(0)}
.reference-page .copy-control {position:relative;display:inline-flex;flex-wrap:wrap;align-items:center;gap:${spacing.textGap};max-width:100%}
.reference-page .prose .relative:has(> pre.code-snippet) {background:${colors.surface};border:1px solid ${colors.border};box-shadow:${colors.shadow};margin-bottom:${spacing.blockGap}}
.reference-page .copy-control-positioned {position:absolute;top:${spacing.compactGap};right:${spacing.compactGap};z-index:1;display:flex;justify-content:flex-end;max-width:calc(100% - 2 * ${spacing.compactGap});padding:0;margin:0}
.reference-page .copy-control-positioned > button {order:2}
.reference-page .copy-control-positioned > .copy-feedback {order:1}
.reference-page .prose pre.code-snippet {padding:${spacing.blockGap};margin:0;background:transparent;border:0;box-shadow:none;white-space:pre;overflow-wrap:normal;overflow-x:auto}
.reference-page .prose pre.code-snippet code {padding:0;border:0;background:transparent;box-shadow:none;white-space:inherit;overflow-wrap:normal}
.reference-page .copy-control > button {position:static;flex-shrink:0}
.reference-page .copy-feedback {color:${colors.text};font-size:${typography.small};overflow-wrap:anywhere}
.reference-page,.reference-page *,.reference-page *::before,.reference-page *::after {animation:none!important;transition:none!important}
.reference-page [data-key-description] {min-height:100px;color:${colors.text}}
.reference-page [data-key-description] h2 {font-size:${typography.medium}!important}
.reference-page dialog.config-dialog {position:fixed;inset:0 0 0 auto;color:${colors.text};background:${colors.surface};width:min(850px,100vw);height:100dvh;max-width:100vw;max-height:100dvh;margin:0;padding:0;overflow:hidden;border:0;border-left:1px solid ${colors.borderStrong}}
.reference-page .config-dialog .config-dialog-inner {display:flex;flex-direction:column;box-sizing:border-box;height:100%;max-height:100%;padding:${spacing.blockGap};overflow:hidden}
.reference-page .config-dialog-inner > .mb-4 {flex-shrink:0}
.reference-page .config-dialog-inner > .surface {min-height:0;overflow:auto}
.reference-page .config-dialog button[data-action="close"] {flex-shrink:0}
.reference-page .config-dialog #karabiner-config-title {font-size:${typography.medium}!important}
.reference-page dialog::backdrop {background:color-mix(in srgb, ${colors.background} 70%, transparent)}
.reference-page button {min-height:${spacing.touchTarget};min-width:${spacing.touchTarget};font-size:${typography.small}}
.reference-page .svg-container svg {width:24px;height:24px}
.reference-page [role="status"] {font-size:${typography.small}}
.reference-page.reference-page :is(pre,code,kbd,samp,.font-mono,.field-input,.config-code,.affiliate-disclaimer,.setup-index,.setup-total,.diagram-label,.product-price,.receipt-list dd,.meta,.hero-sub,.previous,.tldr,.empty,.item-rank,.item-tags,.item-tag,.item-rec-tail,.item-notes,.dispatch-foot) {font-size:${typography.mono}!important}
@media(max-width:640px) {.reference-page h1 {font-size:${typography.large}}.reference-page svg.keyboard-svg {min-width:800px}.reference-page .overflow-x-auto {overflow-x:auto}}
`;

/** Public reference snapshots with local navigation and React-owned interactions. */
export function Subpage({ pathname }: { pathname: string }) {
  const root = useRef<HTMLDivElement>(null);
  const page = referencePages[pathname.replace(/\/$/, '')];
  const html = page?.html.replace(/<a class="back-link[^"]*" href="\/">[^<]*<\/a>\s*(<span aria-hidden="true">·<\/span>\s*)?/g, '');

  useEffect(() => {
    if (!page || !root.current) return;
    document.title = page.title;
    const element = root.current;
    let disposed = false;
    const copyControls = new Map<HTMLButtonElement, { feedback: HTMLSpanElement; timer?: number }>();
    element.querySelectorAll<HTMLButtonElement>('button[data-action="copy"]').forEach((button) => {
      const feedback = document.createElement('span');
      feedback.className = 'copy-feedback';
      feedback.setAttribute('role', 'status');
      feedback.setAttribute('aria-live', 'polite');
      const wrapper = document.createElement('span');
      wrapper.className = 'copy-control';
      if (button.classList.contains('absolute')) wrapper.classList.add('copy-control-positioned');
      button.before(wrapper);
      wrapper.append(button, feedback);
      copyControls.set(button, { feedback });
    });
    const keys = Array.from(element.querySelectorAll<SVGElement>('[data-key]'));
    const originalTabIndexes = keys.map((key) => key.getAttribute('tabindex'));
    keys.forEach((key) => key.setAttribute('tabindex', key.dataset.key === 'Caps' ? '0' : '-1'));
    function describe(event: Event) {
      const key = (event.target as Element).closest<SVGElement>('[data-key]');
      const title = element.querySelector('[data-key-description] h2');
      const description = element.querySelector('[data-key-description] p');
      if (!key || !title || !description) return;
      title.textContent = key.dataset.key ?? 'Hover or focus a key';
      description.textContent = key.dataset.description?.replace(/^[^:]+:\s*/, '') ?? 'No custom binding.';
      keys.forEach((item) => {
        item.setAttribute('tabindex', item === key ? '0' : '-1');
        item.setAttribute('aria-pressed', String(item === key));
      });
      if (event.type === 'focusin') key.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
    }
    function navigateKeys(event: KeyboardEvent) {
      const key = (event.target as Element).closest<SVGElement>('[data-key]');
      if (key && (event.key === 'Enter' || event.key === ' ')) {
        event.preventDefault();
        describe(event);
        return;
      }
      if (!key || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'Home' || event.key === 'End') {
        keys[event.key === 'Home' ? 0 : keys.length - 1]?.focus();
        return;
      }
      const current = key.getBoundingClientRect();
      const horizontal = event.key === 'ArrowLeft' || event.key === 'ArrowRight';
      const direction = event.key === 'ArrowLeft' || event.key === 'ArrowUp' ? -1 : 1;
      const candidates = keys.filter((item) => item !== key).map((item) => {
        const rect = item.getBoundingClientRect();
        const dx = rect.x + rect.width / 2 - current.x - current.width / 2;
        const dy = rect.y + rect.height / 2 - current.y - current.height / 2;
        return { item, primary: (horizontal ? dx : dy) * direction, cross: Math.abs(horizontal ? dy : dx) };
      }).filter(({ primary }) => primary > 1).sort((a, b) => (a.primary + a.cross * 4) - (b.primary + b.cross * 4));
      candidates[0]?.item.focus();
    }
    async function activate(event: Event) {
      const dialog = element.querySelector('dialog');
      if (dialog?.open && event.target === dialog && event instanceof MouseEvent) {
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
        return;
      }
      const button = (event.target as Element).closest<HTMLButtonElement>('button[data-action]');
      if (!button) return;
      if (button.dataset.action === 'config') dialog?.showModal();
      if (button.dataset.action === 'close') dialog?.close();
      if (button.dataset.action === 'copy') {
        const control = copyControls.get(button);
        if (!control || button.disabled) return;
        let container: Element | null = button.parentElement;
        while (container && !container.querySelector('pre')) container = container.parentElement;
        const text = container?.querySelector('pre')?.textContent;
        if (!text) return;
        window.clearTimeout(control.timer);
        control.feedback.textContent = '';
        button.disabled = true;
        button.setAttribute('aria-busy', 'true');
        let message = '✓ Copied to clipboard.';
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          message = 'Copy failed. Select and copy the configuration text.';
        }
        if (disposed) return;
        button.disabled = false;
        button.removeAttribute('aria-busy');
        control.feedback.textContent = message;
        control.timer = window.setTimeout(() => { control.feedback.textContent = ''; }, 5000);
      }
    }
    element.addEventListener('click', activate);
    element.addEventListener('click', describe);
    element.addEventListener('mouseover', describe);
    element.addEventListener('focusin', describe);
    element.addEventListener('keydown', navigateKeys);
    return () => {
      disposed = true;
      keys.forEach((key, index) => {
        const original = originalTabIndexes[index];
        if (original === null || original === undefined) key.removeAttribute('tabindex');
        else key.setAttribute('tabindex', original);
      });
      copyControls.forEach(({ feedback, timer }, button) => {
        window.clearTimeout(timer);
        button.disabled = false;
        button.removeAttribute('aria-busy');
        const wrapper = feedback.parentElement;
        wrapper?.before(button);
        wrapper?.remove();
      });
      element.removeEventListener('click', activate);
      element.removeEventListener('click', describe);
      element.removeEventListener('mouseover', describe);
      element.removeEventListener('focusin', describe);
      element.removeEventListener('keydown', navigateKeys);
    };
  }, [page]);

  if (!page) return <main><h1 {...stylex.props(styles.heading)}>Page not found</h1><a href="/">Back home</a></main>;
  return <div className="reference-page" data-page={pathname}>
    <style>{referenceStyle + adjustments}</style>
    <div ref={root} dangerouslySetInnerHTML={{ __html: html ?? '' }} />
  </div>;
}

const styles = stylex.create({
  heading: { fontSize: typography.large, fontWeight: typography.weight, color: colors.title },
});
