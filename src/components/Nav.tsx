import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link, NavLink } from 'react-router-dom'
import { SERVICES } from '../data/services'

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

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm transition-colors ${isActive ? 'text-[var(--color-ink)] font-medium' : 'text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]'}`

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/95 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-[var(--container-wide)] items-center justify-between px-6 py-4 md:px-10">
        <Link to="/" className="flex items-center" onClick={() => setMobileOpen(false)}>
          <img src="/nrg-logo.svg" alt="New Realm Graphics" className="h-8 w-auto md:h-9" />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li ref={servicesRef} className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className={`flex items-center gap-1.5 text-sm transition-colors ${
                servicesOpen ? 'text-[var(--color-ink)]' : 'text-[var(--color-ink-dim)] hover:text-[var(--color-ink)]'
              }`}
            >
              Services
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 border border-[var(--color-line)] bg-[var(--color-paper)] p-2 shadow-[0_16px_40px_rgba(22,20,15,0.12)]">
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

        <div className="hidden md:block">
          <Link to="/contact" className="btn btn-primary">
            Start a Project
          </Link>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-[var(--color-ink)] transition-transform ${mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''}`} />
          <span className={`h-px w-6 bg-[var(--color-ink)] transition-transform ${mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
        </button>
      </nav>

      {mobileOpen &&
        createPortal(
          <div className="fixed inset-x-0 top-[65px] bottom-0 z-40 overflow-y-auto bg-[var(--color-paper)] px-6 py-8 md:hidden">
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
