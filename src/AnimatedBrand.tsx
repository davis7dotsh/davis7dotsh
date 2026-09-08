import { useEffect, useRef, useState } from 'react';
import * as stylex from '@stylexjs/stylex';
import { colors, spacing, typography } from './design-tokens.stylex';

type Player = {
  goToAndStop(frame: number, isFrame: boolean): void;
  addEventListener(name: string, callback: () => void): void;
  destroy(): void;
};

declare global {
  interface Window {
    lottie?: { loadAnimation(options: Record<string, unknown>): Player };
  }
}

export function AnimatedBrand({ home, theme }: { home: boolean; theme: 'light' | 'dark' }) {
  const container = useRef<HTMLSpanElement>(null);
  const setTarget = useRef<((active: boolean) => void) | null>(null);
  const latestHome = useRef(home);
  latestHome.current = home;
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let player: Player | undefined;
    let raf = 0;
    let disposed = false;
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    let onMotionChange = () => {};
    async function mount() {
      const response = await fetch('/ben-davis-animation/ben-davis-hover.json', { signal: controller.signal });
      if (!response.ok) throw new Error('Unable to load brand animation');
      const data = await response.json();
      if (disposed || !container.current || !window.lottie) return;
      const end = data.op - 1;
      let frame = latestHome.current ? 0 : end;
      let target = frame;
      let previous = 0;
      player = window.lottie.loadAnimation({
        container: container.current, renderer: 'svg', loop: false, autoplay: false,
        animationData: data, rendererSettings: { preserveAspectRatio: 'xMinYMid meet' },
      });
      function tick(time: number) {
        const step = Math.min((time - previous) / 1000, 0.05) * (end / 0.5);
        previous = time;
        frame += Math.sign(target - frame) * Math.min(step, Math.abs(target - frame));
        player?.goToAndStop(frame, true);
        raf = frame !== target ? requestAnimationFrame(tick) : 0;
      }
      setTarget.current = active => {
        target = active ? end : 0;
        if (reduced.matches) {
          cancelAnimationFrame(raf);
          raf = 0;
          frame = target;
          player?.goToAndStop(frame, true);
        } else if (!raf && frame !== target) {
          previous = performance.now();
          raf = requestAnimationFrame(tick);
        }
      };
      onMotionChange = () => setTarget.current?.(!latestHome.current);
      reduced.addEventListener('change', onMotionChange);
      player.addEventListener('DOMLoaded', () => {
        if (disposed) return;
        const svg = container.current?.querySelector('svg');
        if (svg) Object.assign(svg.style, {
          position: 'absolute', width: `${1542 / 1422 * 100}%`,
          height: `${322 / 282 * 100}%`, left: `${-60 / 1422 * 100}%`,
          top: `${-20 / 282 * 100}%`, overflow: 'visible', pointerEvents: 'none',
        });
        player?.goToAndStop(frame, true);
        setReady(true);
        setTarget.current?.(!latestHome.current);
      });
    }
    void mount().catch(() => {});
    return () => {
      disposed = true;
      controller.abort();
      cancelAnimationFrame(raf);
      reduced.removeEventListener('change', onMotionChange);
      setTarget.current = null;
      player?.destroy();
    };
  }, []);

  useEffect(() => { setTarget.current?.(!home); }, [home]);

  return (
    <div {...stylex.props(styles.brand)}>
      <span aria-hidden="true" {...stylex.props(styles.measure)}>Ben Davis</span>
      {home && <h1 {...stylex.props(styles.accessible)}>Ben Davis</h1>}
      <a href="/" aria-label="Ben Davis home" {...stylex.props(styles.link)}>
        {!ready && (home ? <span>Ben Davis</span> : <span {...stylex.props(styles.fallback)} />)}
        <span ref={container} aria-hidden="true" {...stylex.props(styles.animation)}
          style={{ opacity: ready ? 1 : 0, filter: theme === 'light' ? 'invert(1)' : 'none' }} />
      </a>
    </div>
  );
}

const styles = stylex.create({
  brand: {
    position: 'relative', flexShrink: 0, minHeight: spacing.touchTarget,
    fontSize: typography.large, lineHeight: '40px', fontWeight: typography.weight,
    letterSpacing: '-.025em', color: colors.text,
  },
  measure: { visibility: 'hidden', whiteSpace: 'nowrap' },
  link: { position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', color: 'inherit' },
  animation: {
    position: 'absolute', left: 0, width: '100%', aspectRatio: '1422 / 282',
    pointerEvents: 'none',
  },
  fallback: {
    display: 'block', width: 72, height: 40, backgroundColor: colors.title,
    maskImage: 'url(/bendavis_black_brandmark.svg)', maskSize: 'contain',
    maskRepeat: 'no-repeat', maskPosition: 'left top',
  },
  accessible: {
    position: 'absolute', width: 1, height: 1, padding: 0, margin: -1,
    overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap', borderWidth: 0,
  },
});
