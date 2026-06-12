# Ri Abba — Portfolio

[![Deploy to GitHub Pages](https://github.com/denizri17-design/portfolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/denizri17-design/portfolio/actions/workflows/deploy.yml)

🌐 **Live:** [denizri17-design.github.io/portfolio/](https://denizri17-design.github.io/portfolio/)

Personal portfolio for **Ri Abba**, fullstack developer. Showcases 10 production
products: AI SaaS, multi-tenant CRMs, native iOS/Android apps, marketing sites,
and indie games built with React Native + Unity.

## Featured projects (linked on the site)

| Project | Type | Live |
|---|---|---|
| **NextStep** — AI Career Copilot | AI SaaS | [github.com/denizri17-design/nextstep](https://github.com/denizri17-design/nextstep) |
| **Skallix CRM** — Multi-tenant roofing CRM | CRM / SaaS | [skallix.com](https://skallix.com) |
| **Skallix Doorknocking** — Field-rep mobile app | Mobile (iOS+Android) | [Repo](https://github.com/denizri17-design/skallix-doorknocking-mobile) |
| **DLG Platform** — Laravel CRM | CRM | [Repo](https://github.com/denizri17-design/dlgplatform) |
| **Public Adjuster SaaS** | SaaS / CRM | [Repo](https://github.com/denizri17-design/public-adjuster) |
| **M&V Auto Body** — Site + Staff CRM | Web + CRM | [mivbodyshop.com](https://www.mivbodyshop.com) |
| **Abbari Studio** — Indie game studio site | Marketing | [abbari-website.vercel.app](https://abbari-website.vercel.app) |
| **Linko** — One-line path puzzle | Game (iOS) | [App Store](https://apps.apple.com/us/app/linko-one-line-path/id6774304399) |
| **Bricko** — Indie mobile game | Game (iOS) | [App Store](https://apps.apple.com/app/id6768135258) |
| **Skallix Mobile** — Companion app | Mobile | [Repo](https://github.com/denizri17-design/skallix_mobile) |

> Built to a "wow" bar: dark theme, animated grid + blob backdrop, glassy
> floating navbar, gradient typography, spotlight project cards with real
> screenshots (live websites + phone mockups), filterable work grid, marquee
> stack. Single-page, fully responsive, ~165 KB first-load JS, ~615 KB images.

---

## Stack

- **Next.js 15** (App Router, Turbopack) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme`, no `tailwind.config.js`)
- **Framer Motion** for hero, scroll-in, marquee, hover spotlights
- **Lucide React** for icons
- `next/image` + WebP for project screenshots (10× compression vs PNG)

## Local dev

```bash
pnpm install        # or: npm install
pnpm dev            # http://localhost:3000
pnpm build && pnpm start
```

Node **20+** required (Next.js 15).

## Edit your content

- Hero copy, about, stack labels, contact strings → `src/lib/i18n/dict.ts`
- The 10 projects (descriptions, stack, links, gradient covers, icons, image
  paths) → `src/data/projects.ts`
- Project screenshots → drop a `.webp` into `public/projects/` and reference
  it from the matching project entry. Phone screenshots set `imageFit:
  "contain"` to render inside a phone bezel; web screenshots use the default
  `"cover"`.
- Brand colors and font tokens → `@theme` block at the top of
  `src/app/globals.css`
- Replace `info@abbaristudio.com` in `src/components/Contact.tsx` with your real
  email (used both for the `mailto:` and the "copy email" button).

## Deploy

### GitHub Pages (current)

This repo deploys to GitHub Pages automatically on every push to `main` via
`.github/workflows/deploy.yml`. Live at
[denizri17-design.github.io/portfolio/](https://denizri17-design.github.io/portfolio/).

How it works:
1. The workflow installs deps with pnpm.
2. `actions/configure-pages` computes the sub-path (`/portfolio`).
3. We pass it to `NEXT_PUBLIC_BASE_PATH`, then run `next build` which
   produces `out/` with `output: "export"` + `basePath`.
4. A `.nojekyll` file is added (so GitHub Pages serves `_next/*` as-is).
5. The `out/` dir is uploaded as a Pages artifact and deployed.

First-time setup (only needed once): repo → **Settings → Pages → Build and
deployment → Source = GitHub Actions**.

### Vercel (alternative, if you want a custom domain)

1. Push to GitHub, then [vercel.com/new](https://vercel.com/new) → import.
2. In project settings, set env `NEXT_PUBLIC_BASE_PATH=""` to drop the
   sub-path.
3. Add your domain in **Settings → Domains**.

### Anywhere else

`pnpm build` produces a static `out/` directory. Drop it on Netlify,
Cloudflare Pages, S3 + CloudFront, or `python3 -m http.server` for a quick
local preview.

## License

MIT — feel free to fork.
