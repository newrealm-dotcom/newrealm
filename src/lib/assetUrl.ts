/** Prefix a public-asset path with the Vite base URL (needed on GitHub Pages). */
export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
