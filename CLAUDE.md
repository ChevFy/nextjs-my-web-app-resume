# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion. Bilingual (en/th).

## Commands

```bash
pnpm dev      # dev server at localhost:3000
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint
```

Package manager is **pnpm**. No test suite.

## Architecture

### i18n via path + middleware
- Locales: `en` (default), `th`. Live in URL as `/en/...`, `/th/...`.
- `middleware.ts` rewrites locale-less paths (e.g. `/project`) to default locale (`/en/project`). URL bar stays clean (rewrite, not redirect).
- All pages live under `app/[locale]/`. `locale` comes from `params` — a **Promise** in Next 16, must `await params` before use.

### Dictionaries (translation text)
- Text content lives in `dictionaries/en.json` and `dictionaries/th.json`, NOT hardcoded in components.
- `getDictionary(locale)` is exported from **`app/[locale]/layout.tsx`** (unusual location — not a separate util). Import it from there.
- Pattern in a page:
  ```tsx
  const { locale } = await params;
  const dataText = await getDictionary(locale as "th" | "en");
  ```
- Pass `dataText` down to components as a prop. Adding UI text = add the key to BOTH json files.

### Routes (all under `app/[locale]/`)
- `page.tsx` — home (profile, achievements, experience, tech stack)
- `project/page.tsx` — two-tab view: side projects (`dataText.projects[]`) and 42 school projects (`dataText.school42Projects[]`)
- `services/page.tsx` — lists cards from `dataText.services[]`
- `services/[service]/page.tsx` — detail page; slug comes from `service.slug` in JSON, or auto-generated from `service.title` if absent
- `contact/page.tsx`
- `(blog)/study-prompt/page.tsx` — route group; `(blog)` adds no URL segment

### Components
All shared UI lives in `app/[locale]/components/`. Pages are async Server Components; components that use Framer Motion are `"use client"`.

### experience-data.ts
`components/experience-data.ts` splits data between TypeScript and dictionaries:
- Non-translated fields (company names, hardcoded years, image paths) are hardcoded in the TS file.
- Translated fields (descriptions, roles text, `present` label) come from `dataText` by **array index** — the array order in JSON must stay in sync with the item order in the TS functions.
- Adding a new experience or education entry requires updating both the TS file and both JSON arrays at the same index.

### Conventions
- Import alias `@/*` → project root (tsconfig paths).
- Images via `next/image`. Remote hosts allowlisted in `next.config.ts`: `skillicons.dev`, `api.iconify.design`. Add new remote hosts there or build fails.
- Language switch UI: `components/switcher.tsx`.
- `globals.css` lives at `app/[locale]/globals.css` and is imported from `layout.tsx`.

## Gotchas
- `params` is a Promise (Next 16) — always await.
- New translated string missing from one json = undefined at runtime, no build error. Keep both JSON files in sync.
- New external image domain needs an entry in `next.config.ts` `remotePatterns`.
- `experience-data.ts` items reference JSON arrays by index — inserting or reordering items in JSON without matching changes in the TS file silently maps wrong text.
- Service detail URLs use the `slug` field from JSON. If `slug` is absent, it's auto-generated from `title` — keep slugs explicit and stable to avoid broken links.
