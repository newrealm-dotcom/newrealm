import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { assetUrl } from '../lib/assetUrl'
import { useReducedMotion } from '../lib/useReducedMotion'

const YEAR = new Date().getFullYear()

export function Footer() {
  const footerRef = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [bearIn, setBearIn] = useState(reduced)

  useEffect(() => {
    if (reduced) return
    const el = footerRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBearIn(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <footer
      ref={footerRef}
      className="relative border-t border-[var(--color-line-strong)] bg-[var(--color-ink)] text-[var(--color-paper)]"
    >
      <div className="relative z-10 mx-auto max-w-[var(--container-wide)] px-6 pt-16 md:px-10">
        {/* Equal-gap columns on desktop; right padding clears the bear */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 pb-14 md:grid-cols-2 md:gap-x-8 lg:grid-cols-[minmax(0,1fr)_max-content_minmax(0,0.85fr)_minmax(0,1.35fr)] lg:gap-x-10 lg:pr-[min(40vw,340px)] xl:gap-x-12">
          <div className="col-span-2 md:col-span-1">
            <img src={assetUrl('nrg-logo-white.png')} alt="New Realm Graphics" className="h-32 w-auto" />
            <p className="mt-4 max-w-xs text-sm text-[var(--color-paper)]/60">
              A Fort Lauderdale, FL design studio with 20+ years of experience across branding, website design and
              development, print, packaging, and digital marketing.
            </p>
          </div>

          <div className="min-w-0">
            <p className="footer-heading mb-4">Services</p>
            <ul className="space-y-2.5 text-sm text-[var(--color-paper)]/70">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4 lg:whitespace-nowrap"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0">
            <p className="footer-heading mb-4">Company</p>
            <ul className="space-y-2.5 text-sm text-[var(--color-paper)]/70">
              <li>
                <Link to="/work" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  About
                </Link>
              </li>
              <li>
                <Link to="/insights" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Insights
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[var(--color-paper)] hover:underline hover:underline-offset-4">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-2 min-w-0 lg:col-span-1">
            <p className="footer-heading mb-4">Start a Project</p>
            <div className="mb-4 space-y-3 text-sm text-[var(--color-paper)]/70">
              <p>Tell us what you're building. We'll take it from there.</p>
                <p>
                  Every great project starts with a simple conversation.{' '}
                  <Link
                    to="/contact"
                    className="text-[var(--color-paper)] hover:underline hover:underline-offset-4"
                  >
                    Fill out the form
                  </Link>{' '}
                  with as much or as little detail as you have, and here's what happens next. First, we review your
                  project and come back within one business day. Then we set up a quick discovery call to understand your
                  business, audience, and goals. Finally, you receive a clear proposal with scope, timeline, and
                  investment, so there are no surprises.
                </p>
            </div>
            <Link
              to="/contact"
              className="btn btn-secondary border-[var(--color-paper)]/30 text-[var(--color-paper)] hover:border-[var(--color-paper)]"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>

      {/* Full-bleed legal bar — edge-to-edge, flush to bottom, covers the bear */}
      <div className="relative z-20 m-0 w-full border-t border-[var(--color-paper)]/10 bg-[var(--color-ink)] p-0">
        <div className="mx-auto flex max-w-[var(--container-wide)] flex-col gap-4 px-6 py-6 text-xs text-[var(--color-paper)]/50 md:flex-row md:items-center md:justify-between md:px-10">
          <p>Fort Lauderdale, FL — © {YEAR} New Realm Graphics. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-[var(--color-paper)]/80 hover:underline hover:underline-offset-4">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[var(--color-paper)]/80 hover:underline hover:underline-offset-4">
              Terms
            </Link>
          </div>
        </div>
      </div>

      {/* Clips bear at the footer bar; opens 8rem upward so the ear can sit in the blue */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 top-[-8rem] z-0 hidden overflow-hidden lg:block"
      >
        <img
          src={assetUrl('/footer-bear.png')}
          alt=""
          className={`absolute bottom-0 right-0 w-[min(70vw,533px)] origin-bottom-right select-none ${
            bearIn ? 'translate-y-[calc(-3rem+200px)] opacity-100' : 'translate-y-full opacity-0'
          } ${reduced ? '' : 'transition-[transform,opacity] duration-1000 ease-out'}`}
        />
      </div>
    </footer>
  )
}
