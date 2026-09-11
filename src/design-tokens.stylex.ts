import * as stylex from '@stylexjs/stylex';

export const typography = stylex.defineVars({
  small: '17px',
  mono: '16px',
  medium: '23px',
  large: '37px',
  weight: '400',
  family: 'Geist, system-ui, sans-serif',
});

export const spacing = stylex.defineVars({
  contentWidth: '1000px',
  pageInset: { default: '20px', '@media (min-width: 640px)': '40px' },
  pageTop: { default: '60px', '@media (min-width: 640px)': '120px' },
  controlGap: '16px',
  controlPadding: '10px',
  compactGap: '8px',
  touchTarget: '44px',
  headerGap: '32px',
  blockGap: '20px',
  entryGap: '40px',
  textGap: '4px',
  iconGap: '6px',
});

export const colors = stylex.defineVars({
  background: '#0a0a0a',
  text: '#f5f6f7',
  title: '#fff',
  selectionText: '#0b0d10',
  accent: '#a4acb8',
  muted: '#d0d5dd',
  subtle: '#a4acb8',
  social: '#7c8490',
  surface: '#1d2127',
  elevated: '#232831',
  border: '#e5e7eb33',
  borderStrong: '#e5e7eb52',
  grid: '#ffffff05',
  linkHover: '#fff',
  youtubePlay: '#0b0d10',
  shadow: '0 0 0 1px #00000033, 0 2px 4px #00000026, inset 0 1px 0 #ffffff0a',
});

export const lightColors = stylex.createTheme(colors, {
  background: '#f0f2ef',
  text: '#0b0d10',
  title: '#0b0d10',
  selectionText: '#fff',
  accent: '#555f57',
  muted: '#374151',
  subtle: '#555f57',
  social: '#4b535d',
  surface: '#fff',
  elevated: '#f1f2f0',
  border: '#0b0d1029',
  borderStrong: '#0b0d1047',
  grid: '#0b0d1006',
  linkHover: '#0b0d10',
  youtubePlay: '#fff',
  shadow: '0 0 0 1px #ffffff99, 0 2px 4px #0b0d1014, inset 0 1px 0 #ffffffb8',
});
