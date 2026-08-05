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

type SnapshotData = {
	id: string;
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

function object(value: unknown, label: string): Record<string, unknown> {
	if (typeof value !== 'object' || value === null || Array.isArray(value)) {
		throw new Error(`${label} must be an object`);
	}
	return value as Record<string, unknown>;
}

function string(record: Record<string, unknown>, key: string, label: string) {
	const value = record[key];
	if (typeof value !== 'string') throw new Error(`${label}.${key} must be a string`);
	return value;
}

function optionalBoolean(record: Record<string, unknown>, key: string, label: string) {
	const value = record[key];
	if (value === undefined) return undefined;
	if (typeof value !== 'boolean') throw new Error(`${label}.${key} must be a boolean`);
	return value;
}

function optionalStrings(record: Record<string, unknown>, key: string, label: string) {
	const value = record[key];
	if (value === undefined) return undefined;
	if (!Array.isArray(value) || value.some((item) => typeof item !== 'string')) {
		throw new Error(`${label}.${key} must be an array of strings`);
	}
	return value;
}

function entry(value: unknown, label: string): RatingEntry {
	const record = object(value, label);
	const url = string(record, 'url', label);
	const protocol = new URL(url).protocol;
	if (protocol !== 'http:' && protocol !== 'https:') {
		throw new Error(`${label}.url must use HTTP or HTTPS`);
	}

	return {
		id: string(record, 'id', label),
		name: string(record, 'name', label),
		url,
		description: string(record, 'description', label),
		logoId: string(record, 'logoId', label),
		tags: optionalStrings(record, 'tags', label),
		recommended: optionalBoolean(record, 'recommended', label),
		pros: optionalStrings(record, 'pros', label),
		cons: optionalStrings(record, 'cons', label)
	};
}

function entries(record: Record<string, unknown>, key: string, label: string) {
	const value = record[key];
	if (!Array.isArray(value)) throw new Error(`${label}.${key} must be an array`);
	return value.map((item, index) => entry(item, `${label}.${key}[${index}]`));
}

export function parseRatingsSnapshot(value: unknown): SnapshotData {
	const label = 'AI snapshot';
	const record = object(value, label);
	const asOf = string(record, 'asOf', label);
	if (!/^\d{4}-\d{2}-\d{2}$/.test(asOf)) throw new Error(`${label}.asOf must be an ISO date`);

	return {
		id: string(record, 'id', label),
		label: string(record, 'label', label),
		asOf,
		subtitle: string(record, 'subtitle', label),
		summary: string(record, 'summary', label),
		models: entries(record, 'models', label),
		harnesses: entries(record, 'harnesses', label),
		subs: entries(record, 'subs', label)
	};
}
