# CLAUDE.md

Personal portfolio site. Next.js 16 App Router, React 19, TypeScript, Tailwind CSS 4, Framer Motion. Bilingual (en/th).

## Commands

```bash
pnpm dev      # dev server at localhost:3000
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # eslint
```

Package manager is **pnpm** (see `pnpm-lock.yaml`, `pnpm-workspace.yaml`). No test suite.

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
- Pass `dataText` down to components as a prop; components read fields off it (e.g. `dataText.firstName`, `dataText.services[]`).
- Adding UI text = add the key to BOTH json files, then read `dataText.<key>`.

### Routes (all under `app/[locale]/`)
- `page.tsx` — home (profile, experience, tech stack)
- `project/page.tsx`, `services/page.tsx`, `services/[service]/page.tsx`, `contact/page.tsx`
- `(blog)/study-prompt/page.tsx` — route group, no URL segment
- `components/` — shared UI (navbar, footer, cards, switcher, techstack, experience). `experience-data.ts` holds static experience data.

### Conventions
- Pages are async Server Components. `"use client"` components use Framer Motion for animation.
- Import alias `@/*` → project root (tsconfig paths).
- Images via `next/image`. Remote hosts allowlisted in `next.config.ts`: `skillicons.dev`, `api.iconify.design`. Add new remote hosts there or build fails.
- Language switch UI: `components/switcher.tsx`.

## Gotchas
- `params` is a Promise (Next 16) — always await.
- New translated string missing from one json = undefined at runtime, no build error. Keep both files in sync.
- New external image domain needs an entry in `next.config.ts` `remotePatterns`.
