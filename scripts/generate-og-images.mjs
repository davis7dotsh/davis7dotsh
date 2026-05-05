import { execFile } from 'node:child_process';
import { mkdir, stat, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { promisify } from 'node:util';

const execFileAsync = promisify(execFile);
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'static', 'og');
const tempDir = path.join(root, '.tmp', 'og-render');
const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';

const specs = [
	{
		slug: 'home',
		source: 'home-bg.png',
		title: 'Ben Davis',
		kicker: 'davis7.sh',
		description: "developer, youtuber, and theo's manager. based in sf",
		receipt: ['developer', 'youtuber', "theo's manager", 'sf'],
		artifact: 'directory'
	},
	{
		slug: 'sponsors',
		source: 'sponsors-bg.png',
		title: 'Sponsors',
		kicker: 'davis7.sh/sponsors',
		description: 'the companies backing my work and videos.',
		receipt: ['Agentuity', 'Daytona', 'Railway', 'Greptile', 'Upstash', 'WorkOS'],
		artifact: 'ledger'
	},
	{
		slug: 'ai-may-5-2026',
		source: 'ai-bg.png',
		title: 'State of AI Rankings',
		kicker: 'may 5, 2026',
		description: "models, harnesses, and subscriptions i'm using.",
		receipt: ['models', 'harnesses', 'subscriptions', 'snapshot'],
		artifact: 'ranking'
	},
	{
		slug: 'ai-march-25-2026',
		source: 'ai-bg.png',
		title: 'State of AI Rankings',
		kicker: 'march 25, 2026',
		description: "models, harnesses, and subscriptions i'm using.",
		receipt: ['models', 'harnesses', 'subscriptions', 'snapshot'],
		artifact: 'ranking'
	},
	{
		slug: 'macos',
		source: 'macos-bg.png',
		title: 'MacOS Power User Setup',
		kicker: 'davis7.sh/macos',
		description: 'karabiner, raycast, rectangle, and small config commands.',
		receipt: ['hyper + space', 'raycast', 'rectangle', 'ghostty', 'tmux'],
		artifact: 'setup'
	},
	{
		slug: 'karabiner',
		source: 'karabiner-bg.png',
		title: 'Karabiner Config',
		kicker: 'davis7.sh/karabiner',
		description: 'hyper key config and keybinding visualizer.',
		receipt: ['caps lock -> hyper', 'hyper + hjkl', 'cmd shortcuts', 'json'],
		artifact: 'keymap'
	},
	{
		slug: 'font',
		source: 'font-bg.png',
		title: 'Berkeley Mono',
		kicker: 'davis7.sh/font',
		description: 'the font, theme, and icon setup i use.',
		receipt: ['cursor', 'terminal', 'github dark default', 'vscode icons'],
		artifact: 'type'
	},
	{
		slug: 'sveltekit',
		source: 'sveltekit-bg.png',
		title: 'SvelteKit Setup',
		kicker: 'davis7.sh/sv',
		description: 'a small prompt generator for project setup.',
		receipt: ['adapter', 'rules', 'packages', 'theme', 'copy prompts'],
		artifact: 'checklist'
	}
];

function fileUrl(...parts) {
	return pathToFileURL(path.join(...parts)).toString();
}

function pageHtml(spec) {
	const source = fileUrl(outDir, 'source', spec.source);
	const geist = fileUrl(root, 'static', 'Geist[wght].ttf');
	const mono = fileUrl(root, 'static', 'GeistMono[wght].ttf');

	return `<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<style>
			@font-face {
				font-family: Geist;
				src: url("${geist}") format("truetype");
				font-weight: 100 900;
			}

			@font-face {
				font-family: GeistMono;
				src: url("${mono}") format("truetype");
				font-weight: 100 900;
			}

			* {
				box-sizing: border-box;
			}

			html,
			body {
				width: 1200px;
				height: 630px;
				margin: 0;
				overflow: hidden;
				background: #0b0d10;
				color: #f5f6f7;
				font-family: Geist, system-ui, sans-serif;
			}

			.card {
				position: relative;
				width: 1200px;
				height: 630px;
				overflow: hidden;
				background:
					linear-gradient(90deg, rgba(11, 13, 16, 0.98), rgba(11, 13, 16, 0.76) 48%, rgba(11, 13, 16, 0.5)),
					url("${source}") center / cover no-repeat;
			}

			.card::before {
				content: "";
				position: absolute;
				inset: 0;
				background-image:
					linear-gradient(rgba(245, 246, 247, 0.035) 1px, transparent 1px),
					linear-gradient(90deg, rgba(245, 246, 247, 0.035) 1px, transparent 1px);
				background-size: 24px 24px;
				mask-image: linear-gradient(135deg, transparent 0%, rgba(0, 0, 0, 0.2) 48%, black 100%);
			}

			.frame {
				position: absolute;
				inset: 48px;
				border: 1px solid rgba(229, 231, 235, 0.13);
			}

			.content {
				position: relative;
				z-index: 2;
				display: grid;
				grid-template-columns: 1fr 280px;
				gap: 72px;
				height: 100%;
				padding: 72px 80px;
			}

			.main {
				align-self: end;
				padding-bottom: 10px;
			}

			.kicker,
			.domain,
			.artifact,
			.receipt {
				font-family: GeistMono, ui-monospace, monospace;
			}

			.kicker {
				margin: 0 0 28px;
				color: #a4acb8;
				font-size: 18px;
				line-height: 1;
			}

			h1 {
				max-width: 760px;
				margin: 0;
				color: #f5f6f7;
				font-size: 68px;
				font-weight: 720;
				line-height: 0.98;
				letter-spacing: -0.02em;
			}

			.description {
				max-width: 690px;
				margin: 28px 0 0;
				color: #d0d5dd;
				font-size: 25px;
				line-height: 1.36;
				letter-spacing: 0;
			}

			.side {
				align-self: stretch;
				display: flex;
				flex-direction: column;
				gap: 184px;
				border-left: 1px solid rgba(229, 231, 235, 0.12);
				padding-left: 28px;
			}

			.artifact {
				width: max-content;
				margin: 0;
				border: 1px solid rgba(229, 231, 235, 0.16);
				background: rgba(29, 33, 39, 0.72);
				padding: 10px 12px;
				color: #d0d5dd;
				font-size: 15px;
			}

			.receipt {
				display: grid;
				gap: 12px;
				color: #a4acb8;
				font-size: 15px;
				line-height: 1.3;
			}

			.receipt span {
				display: block;
				border-bottom: 1px solid rgba(229, 231, 235, 0.12);
				padding-bottom: 12px;
			}

			.receipt span:last-child {
				border-bottom: 0;
				padding-bottom: 0;
			}

			.domain {
				position: absolute;
				top: 72px;
				left: 80px;
				color: #a4acb8;
				font-size: 15px;
			}

			.wire {
				position: absolute;
				right: 80px;
				bottom: 72px;
				width: 176px;
				height: 1px;
				background: #2663eb;
				opacity: 0.75;
			}
		</style>
	</head>
	<body>
		<div class="card">
			<div class="frame"></div>
			<div class="content">
				<div class="main">
					<p class="kicker">${spec.kicker}</p>
					<h1>${spec.title}</h1>
					<p class="description">${spec.description}</p>
				</div>
				<aside class="side">
					<p class="artifact">${spec.artifact}</p>
					<div class="receipt">
						${spec.receipt.map((line) => `<span>${line}</span>`).join('')}
					</div>
				</aside>
			</div>
			<div class="wire"></div>
		</div>
	</body>
</html>`;
}

await mkdir(outDir, { recursive: true });
await mkdir(tempDir, { recursive: true });

for (const spec of specs) {
	const htmlPath = path.join(tempDir, `${spec.slug}.html`);
	const outPath = path.join(outDir, `${spec.slug}.png`);

	await writeFile(htmlPath, pageHtml(spec));
	try {
		await execFileAsync(
			chromePath,
			[
				'--headless=new',
				'--disable-background-networking',
				'--disable-gpu',
				'--hide-scrollbars',
				'--force-device-scale-factor=1',
				'--run-all-compositor-stages-before-draw',
				'--virtual-time-budget=1000',
				'--window-size=1200,630',
				`--user-data-dir=${path.join(tempDir, `chrome-${spec.slug}`)}`,
				`--screenshot=${outPath}`,
				pathToFileURL(htmlPath).toString()
			],
			{ timeout: 8000 }
		);
	} catch (error) {
		await stat(outPath);
		if (error.killed) console.warn(`chrome timeout after writing ${path.relative(root, outPath)}`);
		else throw error;
	}

	console.log(`wrote ${path.relative(root, outPath)}`);
}
