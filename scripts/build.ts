import { cp, mkdir } from 'node:fs/promises';
import { createSitePlugins } from './bun-plugins';

export async function buildSite(production: boolean) {
  const outdir = production ? 'dist' : '.bun-dev';
  await mkdir(outdir, { recursive: true });
  const result = await Bun.build({
    entrypoints: ['./src/main.tsx'],
    outdir,
    target: 'browser',
    minify: production,
    naming: '[name].[ext]',
    plugins: [createSitePlugins(production, outdir)],
    define: { 'process.env.NODE_ENV': JSON.stringify(production ? 'production' : 'development') },
  });
  if (!result.success) throw new AggregateError(result.logs, 'Build failed');
  await cp('public', outdir, { recursive: true });
  const tokens = await Bun.file('src/design-tokens.stylex.ts').text();
  const palettes = [...tokens.matchAll(/background: '(#[a-f0-9]+)'/g)];
  if (palettes.length !== 2) throw new Error('Expected dark and light startup palettes');
  const startup = palettes.map((palette, index) => {
    const selector = index === 0 ? ':root' : ':root[data-theme="light"]';
    return `${selector} { --startup-background: ${palette[1]}; }`;
  });
  const html = (await Bun.file('index.html').text())
    .replace('/* theme-startup */', startup.join('\n'))
    .replace('/src/main.tsx', '/main.js')
    .replace('</head>', '  <link rel="stylesheet" href="/main.css" />\n  <link rel="stylesheet" href="/stylex.css" />\n</head>');
  await Bun.write(`${outdir}/index.html`, html);
  console.log(`Built ${result.outputs.length} assets and extracted StyleX CSS in ${outdir}/`);
}

if (import.meta.main) await buildSite(!process.argv.includes('--development'));
