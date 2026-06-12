/**
 * Static export config for GitHub Pages.
 *
 * Repo: https://github.com/denizri17-design/portfolio
 * Live: https://denizri17-design.github.io/portfolio/
 *
 * - `output: "export"` makes `next build` emit a fully static `out/` dir.
 * - `basePath` / `assetPrefix` are required when the site is served from a
 *   sub-path (`/portfolio/`) instead of the root of the domain.
 * - `images.unoptimized` is required: the static export has no Next.js image
 *   optimizer at runtime. The WebP files in /public/projects are already
 *   compressed by sharp.
 * - `trailingSlash` keeps Pages happy with sub-routes / direct asset URLs.
 *
 * The `NEXT_PUBLIC_BASE_PATH` env override lets you preview the production
 * build locally (`pnpm build && pnpm exec serve out/`) without the sub-path,
 * and lets us point at a custom domain later by setting it to "" in CI.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "raw.githubusercontent.com" },
    ],
  },
};

export default nextConfig;
