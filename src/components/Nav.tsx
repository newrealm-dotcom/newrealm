import { useEffect, useState } from 'react'
import { MagneticButton } from './MagneticButton'

const LINKS = [
  { href: '#capabilities', label: 'Services' },
  { href: '#work', label: 'Portfolio' },
]

export function Nav() {
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
        solid ? 'bg-[var(--color-void)]/80 backdrop-blur-md border-b border-[var(--color-line)]' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex items-center gap-2" data-cursor="hover">
          <svg width="22" height="22" viewBox="0 0 64 64" fill="none" aria-hidden="true">
            <path d="M32 6 L54 22 L46 50 L18 50 L10 22 Z" stroke="url(#nav-g)" strokeWidth="2.4" fill="none" />
            <defs>
              <linearGradient id="nav-g" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#7C5CFF" />
                <stop offset="1" stopColor="#4CE0D2" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-[family-name:var(--font-display)] text-sm font-medium tracking-tight text-[var(--color-bone)]">
            New Realm Graphics
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                data-cursor="hover"
                className="text-sm text-[var(--color-bone-dim)] transition-colors hover:text-[var(--color-bone)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <MagneticButton
          onClick={scrollToContact}
          className="rounded-full border border-[var(--color-line)] px-5 py-2 text-sm font-medium text-[var(--color-bone)] transition-colors hover:border-[var(--color-ion-cyan)]"
        >
          Get a Quote
        </MagneticButton>
      </nav>
    </header>
  )
}
