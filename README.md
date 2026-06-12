# Ri Abba — Portfolio

Personal portfolio for **Ri Abba**, fullstack developer. Showcases 10 production
products: AI SaaS, multi-tenant CRMs, native iOS/Android apps, marketing sites,
and indie games built with React Native + Unity.

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
- Replace `hello@riabba.dev` in `src/components/Contact.tsx` with your real
  email (used both for the `mailto:` and the "copy email" button).

## Deploy

### Vercel (recommended)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Vercel auto-detects Next.js. Click **Deploy**. No env vars needed.
4. (Optional) Add custom domain in **Settings → Domains**, e.g.
   `riabba.dev`. Update `metadataBase` in `src/app/layout.tsx` and
   `EMAIL` in `src/components/Contact.tsx`.

### Anywhere else

Standard `next build` + `next start` works on any Node 20+ host.

## License

MIT — feel free to fork.
