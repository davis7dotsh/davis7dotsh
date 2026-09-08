import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { navigateList } from './navigation';
import * as stylex from '@stylexjs/stylex';
import { colors, lightColors, spacing, typography } from './design-tokens.stylex';
import { resources } from './content';
import { SocialFooter } from './SocialFooter';
import { AnimatedBrand } from './AnimatedBrand';
import { Subpage } from './Subpage';
import { subpagePaths } from './subpage-routes';

export function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname.replace(/\/$/, '') || '/');

  useEffect(() => {
    function syncLocation() {
      setPathname(window.location.pathname.replace(/\/$/, '') || '/');
    }
    function navigate(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!(link instanceof HTMLAnchorElement) || link.hasAttribute('download') || (link.target && link.target !== '_self')) return;
      const url = new URL(link.href);
      const route = url.pathname.replace(/\/$/, '') || '/';
      if (url.origin !== window.location.origin || (route !== '/' && !subpagePaths.some(path => path === route))) return;
      if (url.hash) return;
      event.preventDefault();
      if (url.href === window.location.href) return;
      window.history.pushState(null, '', url);
      syncLocation();
    }
    document.addEventListener('click', navigate);
    window.addEventListener('popstate', syncLocation);
    return () => {
      document.removeEventListener('click', navigate);
      window.removeEventListener('popstate', syncLocation);
    };
  }, []);

  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (pathname === '/') document.title = 'Ben Davis';
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;
    const heading = document.querySelector('h1');
    if (heading instanceof HTMLElement) {
      heading.tabIndex = -1;
      heading.focus({ preventScroll: true });
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  const [theme, setTheme] = useState<"light" | "dark">(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const syncTheme = () => {
      try {
        const stored = localStorage.getItem('theme-preference');
        setTheme(stored === 'light' || stored === 'dark' ? stored : media.matches ? 'dark' : 'light');
      } catch {
        setTheme(media.matches ? 'dark' : 'light');
      }
    };
    media.addEventListener('change', syncTheme);
    window.addEventListener('storage', syncTheme);
    return () => {
      media.removeEventListener('change', syncTheme);
      window.removeEventListener('storage', syncTheme);
    };
  }, []);

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
    const lightClasses = stylex.props(lightColors).className?.split(' ') ?? [];
    for (const className of lightClasses) {
      document.documentElement.classList.toggle(className, theme === 'light');
    }
  }, [theme]);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme-preference', next);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }

  return (
    <>
      <div {...stylex.props(styles.grid)} aria-hidden="true" />
      <div {...stylex.props(styles.page)}>
            <header {...stylex.props(styles.header)}>
              <AnimatedBrand home={pathname === '/'} theme={theme} />
          <button type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} {...stylex.props(styles.themeButton)}>
            <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" {...stylex.props(styles.themeIcon)}>
              {theme === 'dark' ? <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" />
                : <path d="M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z" />}
            </svg>
          </button>
            </header>
        {pathname !== '/' ? <Subpage key={pathname} pathname={pathname} /> : <main {...stylex.props(styles.main)}>
          <div {...stylex.props(styles.content)}>
            <div onKeyDown={navigateList} {...stylex.props(styles.resources)}>
              {resources.map(resource => (
                <a key={resource.href} href={resource.href}
                  {...(!resource.href.startsWith('/') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  {...stylex.props(styles.card)}>
                  <span {...stylex.props(styles.title)}>
                    {resource.title}
                    {!resource.href.startsWith('/') && <span aria-hidden="true">↗</span>}
                  </span>
                  <span {...stylex.props(styles.description)}>{resource.description}</span>
                </a>
              ))}
            </div>
          </div>
        </main>}
        <SocialFooter />
      </div>
    </>
  );
}

const styles = stylex.create({
  grid: {
    position: 'fixed', inset: 0, pointerEvents: 'none',
    backgroundImage: 'linear-gradient(to right, var(--grid) 1px, transparent 1px), linear-gradient(to bottom, var(--grid) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    maskImage: 'radial-gradient(ellipse at center, transparent 0%, transparent 35%, rgba(0,0,0,.5) 70%, black 100%)',
  },
  page: {
    position: 'relative', zIndex: 1, minHeight: '100vh', display: 'flex', flexDirection: 'column',
    paddingInline: spacing.pageInset,
    paddingBottom: spacing.pageInset,
    paddingTop: spacing.pageTop,
  },
  main: {
    width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'column', textAlign: 'left',
  },
  content: { width: '100%', maxWidth: spacing.contentWidth, marginInline: 'auto', paddingBottom: spacing.headerGap },
  header: { width: '100%', maxWidth: spacing.contentWidth, marginInline: 'auto', minHeight: spacing.touchTarget, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: spacing.controlGap, marginBottom: spacing.headerGap },
  resources: { display: 'flex', flexDirection: 'column', marginBlock: `calc(${spacing.entryGap} / -2)` },
  card: {
    display: 'block', textAlign: 'left', paddingBlock: `calc(${spacing.entryGap} / 2)`,
    color: { default: colors.accent, ':hover': { default: null, '@media (hover: hover)': colors.title }, ':focus-visible': colors.title },
  },
  title: { display: 'inline-flex', alignItems: 'center', gap: spacing.iconGap, color: colors.title, fontWeight: typography.weight, fontSize: typography.small, lineHeight: '24px' },
  description: { display: 'block', marginTop: spacing.textGap, color: 'inherit', fontSize: typography.small, lineHeight: '20px' },
  themeIcon: { transform: 'translateY(3px)' },
  themeButton: {
    display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexShrink: 0,
    width: spacing.touchTarget, height: spacing.touchTarget, padding: 0,
    backgroundColor: 'transparent', borderWidth: 0,
    color: { default: colors.social, ':hover': { default: null, '@media (hover: hover)': colors.title }, ':focus-visible': colors.title },
  },
});
