import { resolve, sep } from 'node:path';
import { watch } from 'node:fs';
import { buildSite } from './scripts/build';
import { subpagePaths } from './src/subpage-routes';

const production = process.argv.includes('--production');
const root = resolve(production ? 'dist' : '.bun-dev');
if (!production) await buildSite(false);
const options = {
  hostname: process.env.HOST ?? '127.0.0.1',
  port: Number(process.env.PORT ?? 5173),
  development: false,
  async fetch(request: Request) {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    const route = pathname.replace(/\/$/, '') || '/';
    const isPage = route === '/' || subpagePaths.some(path => path === route);
    const path = resolve(root, `.${isPage ? '/index.html' : pathname}`);
    if (!path.startsWith(root + sep)) return new Response('Forbidden', { status: 403 });
    const file = Bun.file(path);
    return await file.exists() ? new Response(file, { headers: production ? {} : { 'Cache-Control': 'no-store' } }) : new Response('Not found', { status: 404 });
  },
};
let server: ReturnType<typeof Bun.serve>;
for (;;) {
  try {
    server = Bun.serve(options);
    break;
  } catch (error) {
    if (
      process.env.PORT !== undefined || production ||
      !(error instanceof Error) || !('code' in error) ||
      error.code !== 'EADDRINUSE' || options.port >= 65535
    ) throw error;
    options.port += 1;
  }
}
console.log(`${production ? 'Preview' : 'Development'}: ${server.url}`);

if (!production) {
  let rebuilding = false;
  let pending = false;
  let timer: ReturnType<typeof setTimeout>;
  const rebuild = async () => {
    pending = true;
    if (rebuilding) return;
    rebuilding = true;
    try {
      while (pending) {
        pending = false;
        try {
          await buildSite(false);
          console.log('Updated. Refresh the browser to load changes.');
        } catch (error) {
          console.error(error);
        }
      }
    } finally {
      rebuilding = false;
    }
  };
  for (const path of ['src', 'public', 'index.html']) {
    watch(path, { recursive: path !== 'index.html' }, () => {
      clearTimeout(timer);
      timer = setTimeout(() => { void rebuild(); }, 75);
    });
  }
}
