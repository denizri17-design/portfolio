/**
 * Prefix a public-folder asset path with the configured `basePath`.
 *
 * Required because `next/image` does NOT auto-apply `basePath` when
 * `images.unoptimized` is true (which we need for `output: "export"`).
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/portfolio";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  if (/^https?:\/\//.test(path)) return path;
  return `${BASE_PATH}${path}`;
}
