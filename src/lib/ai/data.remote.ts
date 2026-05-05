import { prerender } from '$app/server';
import { z } from 'zod';
import { getIndex, getSnapshot } from './data';

export const getAiIndex = prerender(() => getIndex());

export const getAiUpdate = prerender(z.string(), (slug) => getSnapshot(slug), {
	inputs: () => getIndex().snapshots.map((snapshot) => snapshot.slug)
});
