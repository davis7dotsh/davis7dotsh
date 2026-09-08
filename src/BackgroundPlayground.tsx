import { useLayoutEffect, useState, type KeyboardEvent } from 'react';
import * as stylex from '@stylexjs/stylex';
import {
  DEFAULT_BACKGROUND_ID,
  applyPlaygroundBackground,
  backgroundGroups,
  findBackgroundSwatch,
  readStoredBackgroundId,
  storeBackgroundId,
} from './background-options';

export function BackgroundPlayground({ onPreviewHex }: { onPreviewHex?: (hex: string | null) => void }) {
  const [selectedId, setSelectedId] = useState(readStoredBackgroundId);

  useLayoutEffect(() => {
    applyPlaygroundBackground(findBackgroundSwatch(selectedId)?.hex ?? null);
  }, [selectedId]);

  const selected = findBackgroundSwatch(selectedId);
  const label = selected ? `${selected.name} ${selected.hex}` : 'Default';

  function select(id: string) {
    setSelectedId(id);
    storeBackgroundId(id);
    onPreviewHex?.(findBackgroundSwatch(id)?.hex ?? null);
  }

  return (
    <nav aria-label="Background playground" {...stylex.props(styles.nav)}>
      <div {...stylex.props(styles.meta)}>
        <span {...stylex.props(styles.kicker)}>Bg</span>
        <span {...stylex.props(styles.current)}>{label}</span>
      </div>
      <div onKeyDown={navigateSwatches} {...stylex.props(styles.groups)}>
        <div {...stylex.props(styles.group)}>
          <span {...stylex.props(styles.groupName)}>Default</span>
          <div {...stylex.props(styles.swatches)}>
            <button
              type="button"
              aria-label="Default theme background"
              aria-pressed={selectedId === DEFAULT_BACKGROUND_ID}
              title="Default"
              onClick={() => select(DEFAULT_BACKGROUND_ID)}
              {...stylex.props(styles.swatch, selectedId === DEFAULT_BACKGROUND_ID && styles.swatchSelected, styles.defaultSwatch)}
            />
          </div>
        </div>
        {backgroundGroups.map((group) => (
          <div key={group.name} {...stylex.props(styles.group)}>
            <span {...stylex.props(styles.groupName)}>{group.name}</span>
            <div {...stylex.props(styles.swatches)}>
              {group.swatches.map((swatch) => (
                <button
                  key={swatch.id}
                  type="button"
                  aria-label={`${swatch.name} ${swatch.hex}`}
                  aria-pressed={selectedId === swatch.id}
                  title={`${swatch.name} ${swatch.hex}`}
                  onClick={() => select(swatch.id)}
                  style={{ backgroundColor: swatch.hex }}
                  {...stylex.props(styles.swatch, selectedId === swatch.id && styles.swatchSelected)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
}

function navigateSwatches(event: KeyboardEvent<HTMLElement>) {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const keys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'];
  if (!keys.includes(event.key)) return;
  const buttons = Array.from(event.currentTarget.querySelectorAll<HTMLButtonElement>('button'));
  const index = buttons.indexOf(event.target as HTMLButtonElement);
  if (index < 0) return;
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1
    : Math.max(0, Math.min(buttons.length - 1, index + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1)));
  event.preventDefault();
  buttons[next]?.focus();
}

const styles = stylex.create({
  nav: {
    position: 'fixed',
    zIndex: 20,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px 18px',
    paddingBlock: '8px',
    paddingInline: '16px',
    backgroundColor: '#0b0d10',
    color: '#f5f6f7',
    borderTopWidth: 1,
    borderTopStyle: 'solid',
    borderTopColor: '#ffffff22',
  },
  meta: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: '8px',
    minWidth: '160px',
    flexShrink: 0,
  },
  kicker: {
    fontSize: '13px',
    lineHeight: '16px',
    color: '#7c8490',
  },
  current: {
    fontSize: '13px',
    lineHeight: '20px',
    color: '#fff',
    whiteSpace: 'nowrap',
  },
  groups: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '10px 18px',
    minHeight: '44px',
    flexGrow: 1,
  },
  group: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '8px',
    flexShrink: 0,
  },
  groupName: {
    fontSize: '13px',
    lineHeight: '16px',
    color: '#7c8490',
  },
  swatches: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  swatch: {
    width: '18px',
    height: '18px',
    padding: 0,
    flexShrink: 0,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff33',
    backgroundColor: 'transparent',
    color: 'transparent',
  },
  swatchSelected: {
    boxShadow: '0 0 0 2px #fff',
    borderColor: '#0b0d10',
  },
  defaultSwatch: {
    backgroundImage: 'linear-gradient(135deg, #141a21 50%, #f0f2ef 50%)',
  },
});
