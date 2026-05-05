import { building, dev } from '$app/environment';

const defaultWidths = [640, 828, 1200, 1920];
const defaultQuality = 90;

function shouldOptimize(src: string) {
	return !dev && !building && !src.endsWith('.svg');
}

export function vercelImageUrl(src: string, width = 1200, quality = defaultQuality) {
	if (!shouldOptimize(src)) return src;

	const params = new URLSearchParams({
		url: src,
		w: String(width),
		q: String(quality)
	});

	return `/_vercel/image?${params.toString()}`;
}

export function vercelSrcset(src: string, widths = defaultWidths, quality = defaultQuality) {
	if (!shouldOptimize(src)) return undefined;

	return widths
		.slice()
		.sort((a, b) => a - b)
		.map((width) => `${vercelImageUrl(src, width, quality)} ${width}w`)
		.join(', ');
}
