const YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--color-line)] px-6 py-12 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-[family-name:var(--font-display)] text-sm text-[var(--color-bone)]">
            New Realm Graphics
          </p>
          <p className="mt-1 text-xs text-[var(--color-bone-dim)]">
            © {YEAR} New Realm Graphics. All rights reserved.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[var(--color-bone-dim)]">
          <a href="#capabilities" data-cursor="hover" className="hover:text-[var(--color-bone)]">
            Capabilities
          </a>
          <a href="#process" data-cursor="hover" className="hover:text-[var(--color-bone)]">
            Process
          </a>
          <a href="#work" data-cursor="hover" className="hover:text-[var(--color-bone)]">
            Work
          </a>
          <a href="#contact" data-cursor="hover" className="hover:text-[var(--color-bone)]">
            Contact
          </a>
        </nav>

        <a
          href="#top"
          data-cursor="hover"
          className="text-sm text-[var(--color-bone-dim)] transition-colors hover:text-[var(--color-bone)]"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
