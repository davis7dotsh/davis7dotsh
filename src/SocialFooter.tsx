import * as stylex from '@stylexjs/stylex';
import { colors, spacing, typography } from './design-tokens.stylex';
import { icons } from './icons';
import { navigateList } from './navigation';

const socialMarks = {
  youtube: { name: 'YouTube', width: 23, height: 23 },
  x: { name: 'X', width: 19, height: 19.5 },
  substack: { name: 'Substack', width: 17, height: 19.5 },
  twitch: { name: 'Twitch', width: 17, height: 17.8 },
  github: { name: 'GitHub', width: 19, height: 18.6 },
  discord: { name: 'Discord', width: 20, height: 15.5 },
} as const;

const primarySocials = [
  { platform: 'youtube', label: 'Ben Davis', href: 'https://www.youtube.com/@bmdavis419' },
  { platform: 'youtube', label: 'Nerd Snipe', href: 'https://www.youtube.com/@nerd-snipe' },
  { platform: 'x', label: 'Ben Davis', href: 'https://x.com/davis7' },
  { platform: 'substack', label: 'Ben Davis', href: 'https://substack.com/@davis7' },
  { platform: 'twitch', label: 'Ben Davis', href: 'https://www.twitch.tv/bmdavis419' },
  { platform: 'github', label: 'Ben Davis', href: 'https://github.com/bmdavis419' },
  { platform: 'discord', label: 'Discord', href: 'https://discord.gg/q2eARhxwMV' },
] as const;

export function SocialFooter() {
  return (
          <footer {...stylex.props(styles.socialFooter)}>
            <nav aria-label="Social" {...stylex.props(styles.primaryNav)}>
              <ul onKeyDown={navigateList} {...stylex.props(styles.primaryList)}>
                {primarySocials.map((social, index) => (
                  <li key={`${social.label}-${index}`} {...stylex.props(styles.primaryItem)}>
                    <a href={social.href} target="_blank" rel="noopener noreferrer"
                      aria-label={`${social.label} on ${socialMarks[social.platform].name}`}
                      {...stylex.props(styles.primaryLink)}>
                      <span {...stylex.props(styles.socialIcon)} aria-hidden="true">
                        <svg viewBox={icons[social.platform].viewBox}
                          width={socialMarks[social.platform].width} height={socialMarks[social.platform].height}
                          fill="currentColor" focusable="false"
                          {...stylex.props(social.platform === 'twitch' && styles.twitchOpticalCenter)}>
                          <path d={icons[social.platform].paths.map(path => path.d).join(' ')}
                            fillRule={social.platform === 'youtube' ? 'evenodd' : 'nonzero'} />
                        </svg>
                      </span>
                      {social.label}
                      <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
  );
}

const styles = stylex.create({
  socialFooter: { marginTop: 'auto', marginInline: 'auto', paddingTop: spacing.headerGap, width: '100%', maxWidth: spacing.contentWidth },
  primaryNav: { width: '100%' },
  primaryList: {
    display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', columnGap: 0, rowGap: 0,
    margin: 0, padding: 0, listStyleType: 'none', whiteSpace: 'nowrap',
  },
  primaryItem: { flexGrow: 1 },
  primaryLink: {
    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: spacing.iconGap, paddingBlock: spacing.controlPadding, paddingInline: spacing.controlPadding, minHeight: spacing.touchTarget, fontSize: typography.small, lineHeight: '24px',
    color: { default: colors.social, ':hover': { default: null, '@media (hover: hover)': colors.title }, ':focus-visible': colors.title },
    textDecorationLine: 'none',
  },
  twitchOpticalCenter: { transform: 'translate(-0.3px, 0.5px)' },
  socialIcon: { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 22, height: 24, flexShrink: 0 },
});
