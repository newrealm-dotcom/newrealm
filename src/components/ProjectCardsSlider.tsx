import { useEffect, useRef, useState, type ReactNode } from 'react'

interface ProjectCardsSliderProps {
  children: ReactNode
  /** How many cards visible on desktop. Defaults to 2. */
  desktopColumns?: 2 | 3
}

export function ProjectCardsSlider({ children, desktopColumns = 2 }: ProjectCardsSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  const updateNav = () => {
    const el = scrollerRef.current
    if (!el) return
    setCanPrev(el.scrollLeft > 2)
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 2)
  }

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return

    updateNav()
    el.addEventListener('scroll', updateNav, { passive: true })
    const ro = new ResizeObserver(updateNav)
    ro.observe(el)

    const onWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) return
      const next = el.scrollLeft + event.deltaY
      if (next <= 0 && el.scrollLeft <= 0) return
      if (next >= max && el.scrollLeft >= max - 1) return
      event.preventDefault()
      el.scrollLeft += event.deltaY
    }
    el.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      el.removeEventListener('scroll', updateNav)
      el.removeEventListener('wheel', onWheel)
      ro.disconnect()
    }
  }, [])

  const scrollPage = (direction: -1 | 1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth, behavior: 'smooth' })
  }

  const desktopColsClass =
    desktopColumns === 3
      ? 'md:auto-cols-[calc((100%-3rem)/3)]'
      : 'md:auto-cols-[calc((100%-1.5rem)/2)]'

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="Previous projects"
        disabled={!canPrev}
        onClick={() => scrollPage(-1)}
        className="absolute top-1/2 left-0 z-20 inline-flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M11 4L6 9l5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next projects"
        disabled={!canNext}
        onClick={() => scrollPage(1)}
        className="absolute top-1/2 right-0 z-20 inline-flex h-10 w-10 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[var(--color-line-strong)] bg-[var(--color-paper)] text-[var(--color-ink)] shadow-sm transition-opacity disabled:cursor-not-allowed disabled:opacity-30"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path
            d="M7 4l5 5-5 5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div
        ref={scrollerRef}
        className={`grid snap-x snap-mandatory auto-cols-[100%] grid-flow-col gap-6 overflow-x-auto overscroll-x-contain pb-2 [scrollbar-width:thin] ${desktopColsClass}`}
      >
        {children}
      </div>
    </div>
  )
}
