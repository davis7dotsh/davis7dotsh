import type { KeyboardEvent } from 'react';

export function navigateList(event: KeyboardEvent<HTMLElement>) {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
  const keys = ['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'];
  if (!keys.includes(event.key)) return;
  const links = Array.from(event.currentTarget.querySelectorAll<HTMLAnchorElement>('a[href]'));
  const index = links.indexOf(event.target as HTMLAnchorElement);
  if (index < 0) return;
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? links.length - 1
    : Math.max(0, Math.min(links.length - 1, index + (event.key === 'ArrowDown' || event.key === 'ArrowRight' ? 1 : -1)));
  event.preventDefault();
  links[next]?.focus();
}

