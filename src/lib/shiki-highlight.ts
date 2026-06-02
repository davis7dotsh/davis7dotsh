import json from '@shikijs/langs/json';
import githubDark from '@shikijs/themes/github-dark';
import githubLight from '@shikijs/themes/github-light';
import { createHighlighterCore } from 'shiki/core';
import { createJavaScriptRegexEngine } from 'shiki/engine/javascript';

type JsonTheme = 'github-dark' | 'github-light';

let highlighterPromise: ReturnType<typeof createHighlighterCore> | null = null;

function getHighlighter() {
	highlighterPromise ??= createHighlighterCore({
		themes: [githubDark, githubLight],
		langs: [json],
		engine: createJavaScriptRegexEngine()
	});
	return highlighterPromise;
}

export async function highlightJson(code: string, theme: JsonTheme) {
	const highlighter = await getHighlighter();
	return highlighter.codeToHtml(code, { lang: 'json', theme });
}