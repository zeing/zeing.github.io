# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev         # dev server with Turbopack
bun run build   # production build
bun run lint    # oxlint .
bun run format  # oxfmt .
```

Pre-commit hook runs `lint` + `format` automatically via husky. Uses bun as package manager (`bun.lock` is the lockfile).

## Architecture

Next.js 16 **App Router**, TypeScript. No tests.

**Import paths**: `tsconfig.json` sets `baseUrl: "."` — imports resolve from repo root (e.g. `import Hero from 'components/hero'`).

**App structure**:
- `app/layout.tsx` — root layout: HTML shell, metadata, GA4 scripts, FontAwesome, `next/font/google` (Prompt)
- `app/page.tsx` — landing (`/`)
- `app/social/page.tsx` — social page (`/social`)
- `app/not-found.tsx` — 404
- `app/analytics.tsx` — `'use client'` component, tracks GA4 page views via `usePathname`

**Hero component** (`components/hero.tsx`): `'use client'`. Fullscreen video background (`react-video-cover` + `/videos/background.mp4`), animated typing via `typed.js`, optional `showNavbar` prop for top nav, optional `goTo` prop for scroll-down chevron.

**Styling**: Tailwind CSS v4 in `styles/globals.css`. Font family uses CSS variable `--font-prompt` set by `next/font/google` in layout — referenced in `tailwind.config.js` as `var(--font-prompt)`.

**Icons**: FontAwesome loaded via `next/script` (`strategy="afterInteractive"`) in layout — classes like `fab fa-github` work client-side only. All `<i>` icons have `aria-hidden="true"` to prevent hydration mismatch.

**Analytics**: GA4 (`G-SWWT8QB292`) loaded via `next/script` in layout. `app/analytics.tsx` tracks route changes.

**Types**: `types/react-video-cover.d.ts` declares module types for `react-video-cover` (no upstream types).

**Lint/Format**: oxlint + oxfmt. Config in `.oxlintrc.json`. `nextjs/no-img-element` disabled — intentional `<img>` usage for profile/error images.

**Deploy**: `bun run deploy` builds, copies CNAME, pushes to `gh-pages` branch. Vercel hosting uses bun via `vercel.json` (`"bunVersion": "1.x"`) + `packageManager` field in `package.json`.
