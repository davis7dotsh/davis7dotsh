import { z } from 'zod';

const externalUrlSchema = z.url().refine((value) => {
	const protocol = new URL(value).protocol;
	return protocol === 'http:' || protocol === 'https:';
}, 'URL must use HTTP or HTTPS');

export const ratingEntrySchema = z.object({
	id: z.string(),
	name: z.string(),
	url: externalUrlSchema,
	description: z.string(),
	logoId: z.string(),
	tags: z.array(z.string()).optional(),
	recommended: z.boolean().optional(),
	pros: z.array(z.string()).optional(),
	cons: z.array(z.string()).optional()
});

export const ratingsSnapshotSchema = z.object({
	id: z.string(),
	label: z.string(),
	asOf: z.iso.date(),
	subtitle: z.string(),
	summary: z.string(),
	models: z.array(ratingEntrySchema),
	harnesses: z.array(ratingEntrySchema),
	subs: z.array(ratingEntrySchema)
});

export type RatingEntry = z.infer<typeof ratingEntrySchema>;
export type RatingsSnapshot = z.infer<typeof ratingsSnapshotSchema> & { slug: string };

export type RatingsIndex = {
	title: string;
	latestSlug: string;
	snapshots: { id: string; slug: string; label: string; file: string }[];
};
