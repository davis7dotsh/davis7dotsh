# davis7.sh

Personal site built with SvelteKit.

## Local development

```sh
pnpm install
pnpm dev --host localhost --port 5173
```

Unprefixed page URLs such as `/` or `/macos` redirect on the server using the browser’s `Accept-Language` header. Regional languages and preference weights are supported, with English as the fallback. Redirects are not cached.

Explicit locale paths always win over browser preferences, for example `/ja/macos` or `/en/sponsors`. Internal links and the AI archive redirect preserve that explicit language. There is no language dropdown. Query strings are preserved; browsers retain fragments across the redirect.

Only explicit language pages are prerendered. Unprefixed pages stay server-routed so the deployed site can negotiate each request; assets, downloads, and unlisted Executor pages are excluded.

Supported locale paths:

| Language             | Path     |
| -------------------- | -------- |
| English              | `/en`    |
| Spanish              | `/es`    |
| French               | `/fr`    |
| German               | `/de`    |
| Japanese             | `/ja`    |
| Hindi                | `/hi`    |
| Brazilian Portuguese | `/pt-BR` |
| Dutch                | `/nl`    |
| Polish               | `/pl`    |
| Indonesian           | `/id`    |
| Swedish              | `/sv-SE` |
| Italian              | `/it`    |
| Russian              | `/ru`    |
| Thai                 | `/th`    |
| Vietnamese           | `/vi`    |

Browser negotiation tries an exact locale first, then a supported variant of the same language. Portuguese preferences fall back to Brazilian Portuguese. Swedish uses `/sv-SE` to avoid colliding with the existing `/sv` page. It uses language preferences, never the visitor’s country; for example, `en-IN` still selects English. The locale list in `src/lib/i18n/config.ts` also drives prerendering, alternate links, and the sitemap.

## General Translation

The official `gtx-cli` translates the JSON catalogs for this SvelteKit app. Generated translations are stored locally and prerendered with the site; visitors do not need API access.

One-time credential setup (writes the git-ignored `.env.local`):

```sh
pnpm exec gtx-cli auth --key-type production
```

After editing copy:

```sh
pnpm i18n:translate
```

This extracts source strings, uses the GT project in `gt.config.json`, downloads all target languages configured in `gt.config.json`, and checks catalog completeness and placeholders. Add UI copy with `tr('English text')`. Dynamic text needs a matching entry in the English catalog; the extractor also collects descriptive object fields and the AI snapshot data. Run `pnpm i18n:extract` to update source strings without calling GT.

Commit the updated catalogs and `gt-lock.json` alongside your copy changes. Unchanged messages reuse existing translations; new or changed messages are translated by GT. Builds serve the checked-in catalogs and do not generate translations.

No GitHub translation automation is configured by this integration. GT’s optional [Locadex automation](https://generaltranslation.com/en-US/docs/platform/locadex/guides/configuring-automations) can generate translations and open or update a separate PR. For this app it needs to run `pnpm install --frozen-lockfile && pnpm i18n:extract` before processing and `pnpm i18n:check` afterward. Its PR trigger runs on opening, reopening, or marking a PR ready; later commits require a `/locadex` comment to run again. A push-to-branch trigger is also available.

Keep complete sentences together. `RichText` lets GT reorder numbered inline elements while keeping the original links and attributes in code. Translation text is escaped by Svelte; it is never inserted as raw HTML. Commands, copied configurations, URLs, and product identifiers stay unchanged.

`GT_API_KEY` is used only by the CLI. Never expose it through public environment variables or commit `.env.local`. The site itself builds and runs from the downloaded catalogs without that key.

GT CLI 2.20.3 can emit a CDN-disabled warning after a successful local download even with `publish: false`. This demo serves local files and does not require CDN publishing. The catalog check confirms that every translation downloaded.

## Verification

```sh
pnpm check
node --experimental-strip-types --test scripts/locale-redirect.test.ts
pnpm i18n:check
pnpm lint
pnpm build
```

No deploy or push is part of these commands.
