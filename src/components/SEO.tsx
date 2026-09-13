import { useEffect } from 'react'

const SITE_URL = 'https://newrealm.com'
const SITE_NAME = 'New Realm Graphics'

interface SEOProps {
  title: string
  description: string
  path: string
  image?: string
  jsonLd?: object | object[]
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', 'canonical')
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Manages per-route <title>/meta/canonical/JSON-LD. No SSR in this SPA build,
 * so crawlers that don't execute JS won't see these — prerendering is a
 * documented follow-up for full AEO/AI-crawler coverage (see README). */
export function SEO({ title, description, path, image, jsonLd }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`
    const url = `${SITE_URL}${path}`
    const imageUrl = image ? `${SITE_URL}${image}` : `${SITE_URL}/og-cover.svg`

    document.title = fullTitle
    setMeta('name', 'description', description)
    setCanonical(url)

    setMeta('property', 'og:type', path === '/' ? 'website' : 'article')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    const scripts: HTMLScriptElement[] = []
    if (jsonLd) {
      const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      for (const entry of entries) {
        const script = document.createElement('script')
        script.type = 'application/ld+json'
        script.text = JSON.stringify(entry)
        document.head.appendChild(script)
        scripts.push(script)
      }
    }

    return () => {
      scripts.forEach((s) => s.remove())
    }
  }, [title, description, path, image, jsonLd])

  return null
}

export { SITE_URL, SITE_NAME }
