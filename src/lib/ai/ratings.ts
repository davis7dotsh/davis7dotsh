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
