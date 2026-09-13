import { useEffect, useRef, type ReactNode } from 'react'
import { gsap, ScrollTrigger, EASE } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  start?: string
}

export function Reveal({ children, className = '', delay = 0, y = 32, start = 'top 88%' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduced) {
      gsap.set(el, { opacity: 1, y: 0 })
      return
    }

    gsap.set(el, { opacity: 0, y })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: EASE.out, delay })
      },
    })

    return () => trigger.kill()
  }, [reduced, delay, y, start])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
