export type BackgroundSwatch = {
  id: string;
  name: string;
  hex: string;
};

export type BackgroundGroup = {
  name: string;
  swatches: readonly BackgroundSwatch[];
};

export const DEFAULT_BACKGROUND_ID = 'default';

export const backgroundGroups = [
  {
    name: 'Ink',
    swatches: [
      { id: 'ink-current', name: 'Current', hex: '#141a21' },
      { id: 'ink-12171d', name: 'Ink 2', hex: '#12171d' },
      { id: 'ink-10151a', name: 'Ink 3', hex: '#10151a' },
      { id: 'ink-0e1318', name: 'Ink 4', hex: '#0e1318' },
      { id: 'ink-161d25', name: 'Ink 5', hex: '#161d25' },
      { id: 'ink-1a222b', name: 'Ink 6', hex: '#1a222b' },
      { id: 'ink-1c252f', name: 'Ink 7', hex: '#1c252f' },
      { id: 'ink-0b0d10', name: 'Near black', hex: '#0b0d10' },
    ],
  },
  {
    name: 'Cool',
    swatches: [
      { id: 'cool-111820', name: 'Slate', hex: '#111820' },
      { id: 'cool-0e1620', name: 'Deep slate', hex: '#0e1620' },
      { id: 'cool-13202c', name: 'Steel', hex: '#13202c' },
      { id: 'cool-152433', name: 'Blue steel', hex: '#152433' },
      { id: 'cool-0c1924', name: 'Harbor', hex: '#0c1924' },
      { id: 'cool-102030', name: 'Marine', hex: '#102030' },
      { id: 'cool-163044', name: 'Pacific', hex: '#163044' },
      { id: 'cool-0f2438', name: 'Navy ink', hex: '#0f2438' },
    ],
  },
  {
    name: 'Warm',
    swatches: [
      { id: 'warm-161410', name: 'Walnut', hex: '#161410' },
      { id: 'warm-1a1712', name: 'Umber', hex: '#1a1712' },
      { id: 'warm-1c1814', name: 'Coffee', hex: '#1c1814' },
      { id: 'warm-211c16', name: 'Bark', hex: '#211c16' },
      { id: 'warm-191612', name: 'Smoke', hex: '#191612' },
      { id: 'warm-241e18', name: 'Cocoa', hex: '#241e18' },
      { id: 'warm-1b1610', name: 'Sepia', hex: '#1b1610' },
      { id: 'warm-201a14', name: 'Tan ink', hex: '#201a14' },
    ],
  },
  {
    name: 'Olive',
    swatches: [
      { id: 'olive-131816', name: 'Moss', hex: '#131816' },
      { id: 'olive-151a17', name: 'Pine', hex: '#151a17' },
      { id: 'olive-171c19', name: 'Sage ink', hex: '#171c19' },
      { id: 'olive-1a211c', name: 'Leaf', hex: '#1a211c' },
      { id: 'olive-121714', name: 'Forest', hex: '#121714' },
      { id: 'olive-141c18', name: 'Cedar', hex: '#141c18' },
      { id: 'olive-1b241e', name: 'Fern', hex: '#1b241e' },
      { id: 'olive-0f1612', name: 'Deep moss', hex: '#0f1612' },
    ],
  },
  {
    name: 'Night',
    swatches: [
      { id: 'night-0a0a0a', name: 'True black', hex: '#0a0a0a' },
      { id: 'night-111111', name: 'Char 1', hex: '#111111' },
      { id: 'night-181818', name: 'Char 2', hex: '#181818' },
      { id: 'night-1c1c1c', name: 'Char 3', hex: '#1c1c1c' },
      { id: 'night-0c1220', name: 'Midnight', hex: '#0c1220' },
      { id: 'night-101628', name: 'Indigo night', hex: '#101628' },
      { id: 'night-16141c', name: 'Plum', hex: '#16141c' },
      { id: 'night-1a1622', name: 'Eggplant', hex: '#1a1622' },
    ],
  },
  {
    name: 'Tint',
    swatches: [
      { id: 'tint-141c22', name: 'Teal ink', hex: '#141c22' },
      { id: 'tint-122018', name: 'Deep green', hex: '#122018' },
      { id: 'tint-1a1420', name: 'Violet ink', hex: '#1a1420' },
      { id: 'tint-221810', name: 'Rust ink', hex: '#221810' },
      { id: 'tint-102018', name: 'Bottle', hex: '#102018' },
      { id: 'tint-181420', name: 'Grape', hex: '#181420' },
      { id: 'tint-1a1c14', name: 'Olive gold', hex: '#1a1c14' },
      { id: 'tint-101820', name: 'Blueblack', hex: '#101820' },
    ],
  },
  {
    name: 'Paper',
    swatches: [
      { id: 'paper-current', name: 'Current paper', hex: '#f0f2ef' },
      { id: 'paper-f5f3ef', name: 'Warm cream', hex: '#f5f3ef' },
      { id: 'paper-f7f4ee', name: 'Ivory', hex: '#f7f4ee' },
      { id: 'paper-eeebe4', name: 'Sand', hex: '#eeebe4' },
      { id: 'paper-f4f1ea', name: 'Bone', hex: '#f4f1ea' },
      { id: 'paper-f6f6f4', name: 'Porcelain', hex: '#f6f6f4' },
      { id: 'paper-e7ebe8', name: 'Sage paper', hex: '#e7ebe8' },
      { id: 'paper-e9edf0', name: 'Cool paper', hex: '#e9edf0' },
      { id: 'paper-f8f5f0', name: 'Linen', hex: '#f8f5f0' },
      { id: 'paper-eceae4', name: 'Stone', hex: '#eceae4' },
      { id: 'paper-fffef8', name: 'Near white', hex: '#fffef8' },
      { id: 'paper-e8e4dc', name: 'Khaki paper', hex: '#e8e4dc' },
    ],
  },
] as const satisfies readonly BackgroundGroup[];

export const allBackgroundSwatches: readonly BackgroundSwatch[] = backgroundGroups.flatMap(
  (group) => [...group.swatches],
);

export function findBackgroundSwatch(id: string) {
  return allBackgroundSwatches.find((swatch) => swatch.id === id);
}

export const PLAYGROUND_STORAGE_KEY = 'bg-playground';

export function applyPlaygroundBackground(hex: string | null) {
  const root = document.documentElement;
  if (!hex) {
    root.style.removeProperty('--bg-playground');
    return;
  }
  root.style.setProperty('--bg-playground', hex);
}

export function readStoredBackgroundId() {
  try {
    return localStorage.getItem(PLAYGROUND_STORAGE_KEY) ?? DEFAULT_BACKGROUND_ID;
  } catch {
    return DEFAULT_BACKGROUND_ID;
  }
}

export function isLightHex(hex: string) {
  const value = Number.parseInt(hex.slice(1), 16);
  const r = (value >> 16) & 255;
  const g = (value >> 8) & 255;
  const b = value & 255;
  return 0.2126 * r + 0.7152 * g + 0.0722 * b > 150;
}

export function storeBackgroundId(id: string) {
  try {
    if (id === DEFAULT_BACKGROUND_ID) localStorage.removeItem(PLAYGROUND_STORAGE_KEY);
    else localStorage.setItem(PLAYGROUND_STORAGE_KEY, id);
  } catch {
    // The picker still works when browser storage is unavailable.
  }
}
