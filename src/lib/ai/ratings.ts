export type RatingEntry = {
	id: string;
	name: string;
	url: string;
	description: string;
	logoId: string;
	tags?: string[];
	recommended?: boolean;
	pros?: string[];
	cons?: string[];
};

export type RatingsSnapshot = {
	id: string;
	slug: string;
	label: string;
	asOf: string;
	subtitle: string;
	summary: string;
	models: RatingEntry[];
	harnesses: RatingEntry[];
	subs: RatingEntry[];
};

export type RatingsIndex = {
	title: string;
	latestSlug: string;
	snapshots: { id: string; slug: string; label: string; file: string }[];
};

export const tagColors: Record<string, string> = {
	default: 'text-blue-400/70 border-blue-400/20',
	intelligent: 'text-blue-400/70 border-blue-400/20',
	search: 'text-blue-400/70 border-blue-400/20',
	coding: 'text-emerald-400/70 border-emerald-400/20',
	editor: 'text-emerald-400/70 border-emerald-400/20',
	sdk: 'text-emerald-400/70 border-emerald-400/20',
	'computer use': 'text-rose-400/70 border-rose-400/20',
	'cloud agent': 'text-rose-400/70 border-rose-400/20',
	cli: 'text-rose-400/70 border-rose-400/20',
	subagents: 'text-rose-400/70 border-rose-400/20',
	ui: 'text-cyan-400/70 border-cyan-400/20',
	design: 'text-cyan-400/70 border-cyan-400/20',
	'google model': 'text-cyan-400/70 border-cyan-400/20',
	'desktop app': 'text-amber-400/70 border-amber-400/20',
	$200: 'text-violet-400/70 border-violet-400/20',
	$20: 'text-violet-400/70 border-violet-400/20',
	'claude only': 'text-amber-400/70 border-amber-400/20',
	'gpt only': 'text-cyan-400/70 border-cyan-400/20',
	'every model': 'text-emerald-400/70 border-emerald-400/20',
	opencode: 'text-neutral-400/70 border-neutral-400/20'
};
