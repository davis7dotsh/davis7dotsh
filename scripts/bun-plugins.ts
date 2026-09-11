import type { BunPlugin } from 'bun';
import { createStylexBunPlugin } from '@stylexjs/unplugin/bun';
export function createSitePlugins(production: boolean, outdir: string): BunPlugin {
  const stylexPlugin = createStylexBunPlugin({
    dev: !production,
    runtimeInjection: false,
    bunDevCssOutput: `${process.cwd()}/${outdir}/stylex.css`,
  });
  return { name: 'site-plugins', async setup(build) {
    // Root-relative public assets are served unchanged, not imported as modules.
    build.onResolve({ filter: /^\// }, async ({ path }) => {
      const publicPath = path.startsWith(`${process.cwd()}/`)
        ? path.slice(process.cwd().length) : path;
      if (await Bun.file(`${process.cwd()}/public${publicPath}`).exists()) {
        return { path: publicPath, external: true };
      }
    });
    // The StyleX Bun adapter writes the same CSS file after every load. Its
    // lastCss cache can skip the final write, so concurrent loads can leave a
    // truncated file. Serialize its transforms and writes, not other loaders.
    let stylexLoads = Promise.resolve();
    const stylexBuild: Parameters<BunPlugin['setup']>[0] = {
      ...build,
      onLoad(options, callback) {
        return build.onLoad(options, (args) => {
          const result = stylexLoads.then(() => callback(args));
          stylexLoads = result.then(() => {}, () => {});
          return result;
        });
      },
    };
    await stylexPlugin.setup(stylexBuild);
  } };
}
