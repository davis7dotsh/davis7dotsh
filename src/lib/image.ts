import { dev } from '$app/environment';
import { imageWidths } from './image-widths';

const defaultQuality = 90;

function shouldOptimize(src: string) {
	return !dev && !src.endsWith('.svg');
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

export function vercelSrcset(src: string, quality = defaultQuality) {
	if (!shouldOptimize(src)) return undefined;

	return imageWidths.map((width) => `${vercelImageUrl(src, width, quality)} ${width}w`).join(', ');
}
