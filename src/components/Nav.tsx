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
        <a href="#top" className="flex items-center" data-cursor="hover">
          <span className="rounded-md bg-white px-2 py-1">
            <img src="/nrg-logo.svg" alt="New Realm Graphics" className="h-7 w-auto md:h-8" />
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
