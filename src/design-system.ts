import * as stylex from '@stylexjs/stylex';
import { colors, spacing, typography } from './design-tokens.stylex';

export const documentStyles = stylex.create({
  defaults: {
    fontFamily: typography.family,
    fontSize: typography.small,
    fontWeight: typography.weight,
    '--anchor-offset': spacing.headerGap,
    '--font-small': typography.small,
    '--font-mono-size': typography.mono,
    '--font-medium': typography.medium,
    '--font-large': typography.large,
    '--font-weight': typography.weight,
    '--bg': colors.background,
    '--text': colors.text,
    '--resource-title': colors.title,
    '--selection-text': colors.selectionText,
    '--accent': colors.accent,
    '--muted': colors.muted,
    '--subtle': colors.subtle,
    '--surface': colors.surface,
    '--elevated': colors.elevated,
    '--border': colors.border,
    '--border-strong': colors.borderStrong,
    '--grid': colors.grid,
    '--link-hover': colors.linkHover,
    '--youtube-play-color': colors.youtubePlay,
    '--shadow': colors.shadow,
  },
});
