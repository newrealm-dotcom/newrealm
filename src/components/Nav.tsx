import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { SERVICES } from '../data/services'
import { assetUrl } from '../lib/assetUrl'

const PRIMARY_LINKS = [
  { to: '/work', label: 'Work' },
  { to: '/about', label: 'About' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
]

export function Nav() {
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const servicesRef = useRef<HTMLLIElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const [headerHeight, setHeaderHeight] = useState(113)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setServicesOpen(false)
        setMobileOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    function measure() {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `nav-link text-sm ${isActive ? 'active' : 'text-[var(--color-ink-dim)]'}`

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-sm"
    >
      <nav className="relative mx-auto grid max-w-[var(--container-wide)] grid-cols-[1fr_auto_1fr] items-center px-6 py-3 md:px-10">
        <ul className="hidden items-center gap-8 justify-self-start md:col-start-1 md:flex">
          <li ref={servicesRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className={`nav-link text-sm ${
                servicesOpen ? 'active' : 'text-[var(--color-ink-dim)]'
              }`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 mt-3 w-[560px] border border-[var(--color-line)] bg-[var(--color-paper)] p-2 shadow-[0_16px_40px_rgba(22,20,15,0.12)]">
                <div className="grid grid-cols-2 gap-1">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm text-[var(--color-ink-dim)] transition-colors hover:bg-[var(--color-paper-2)] hover:text-[var(--color-ink)]"
                    >
                      {s.navLabel}
                    </Link>
                  ))}
                </div>
                <div className="mt-1 border-t border-[var(--color-line)] p-2">
                  <Link
                    to="/services"
                    onClick={() => setServicesOpen(false)}
                    className="link-underline block px-2 py-2 text-sm font-medium text-[var(--color-ink)]"
                  >
                    View all services →
                  </Link>
                </div>
              </div>
            )}
          </li>

          {PRIMARY_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/"
          className="group relative col-span-3 flex items-center justify-self-center md:col-span-1 md:col-start-2"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src={assetUrl('nrg-logo.webp')}
            alt="New Realm Graphics"
            className="h-[167px] w-auto transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={assetUrl('nrg-logo-hover.png')}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[167px] w-auto -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </Link>

        <div className="hidden justify-self-end md:col-start-3 md:block">
          <Link to="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="absolute right-6 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-0.5 w-6 origin-center bg-[var(--color-ink)] transition-transform duration-200 ${
              mobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-[var(--color-ink)] transition-opacity duration-200 ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`h-0.5 w-6 origin-center bg-[var(--color-ink)] transition-transform duration-200 ${
              mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </nav>

      {mobileOpen &&
        createPortal(
          <div
            className="fixed inset-x-0 bottom-0 z-40 overflow-y-auto bg-[var(--color-paper)] px-6 py-8 md:hidden"
            style={{ top: headerHeight }}
          >
            <p className="eyebrow mb-4">Services</p>
            <ul className="mb-8 space-y-1">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2.5 text-base text-[var(--color-ink-dim)]"
                  >
                    {s.navLabel}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1 border-t border-[var(--color-line)] pt-6">
              {PRIMARY_LINKS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={() => setMobileOpen(false)} className="block py-2.5 text-lg text-[var(--color-ink)]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="btn btn-primary mt-8 w-full">
              Start a Project
            </Link>
          </div>,
          document.body,
        )}
    </header>
  )
}
