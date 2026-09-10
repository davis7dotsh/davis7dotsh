import assert from 'node:assert/strict';
import test from 'node:test';
import { preferredLocale, withLocale } from '../src/lib/i18n/config.ts';

test('matches regional browser languages and respects quality weights', () => {
	assert.equal(preferredLocale('es-MX,es;q=0.9,en;q=0.8'), 'es');
	assert.equal(preferredLocale('en;q=0.5,ja-JP;q=0.9'), 'ja');
	assert.equal(preferredLocale('it-IT,fr-CA;q=0.8,de;q=0.7'), 'fr');
	assert.equal(preferredLocale('de;q=0,fr;q=0.7'), 'fr');
	assert.equal(preferredLocale('ja;q=invalid,es;q=2,en;q=0.8'), 'en');
});

test('falls back to English for missing or unsupported browser languages', () => {
	assert.equal(preferredLocale(null), 'en');
	assert.equal(preferredLocale('zh-CN,ko;q=0.8'), 'en');
	assert.equal(preferredLocale('*'), 'en');
});

test('keeps explicit language paths, query strings, fragments, and external URLs usable', () => {
	assert.equal(withLocale('/macos?demo=1#configs', 'ja'), '/ja/macos?demo=1#configs');
	assert.equal(withLocale('/ja/macos', 'en'), '/en/macos');
	assert.equal(withLocale('/', 'en'), '/en');
	assert.equal(withLocale('/fr', 'fr'), '/fr');
	assert.equal(withLocale('https://example.com', 'de'), 'https://example.com');
	assert.equal(withLocale('//example.com', 'de'), '//example.com');
});
