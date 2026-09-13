import { useEffect, useRef, type ElementType } from 'react'
import { gsap, ScrollTrigger, EASE } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

interface KineticTextProps {
  text: string
  as?: ElementType
  className?: string
  delay?: number
  start?: string
}

export function KineticText({
  text,
  as: Tag = 'span',
  className = '',
  delay = 0,
  start = 'top 85%',
}: KineticTextProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const words = el.querySelectorAll<HTMLElement>('.kinetic-word > span')
    if (reduced) {
      gsap.set(words, { yPercent: 0, opacity: 1 })
      return
    }

    gsap.set(words, { yPercent: 110, opacity: 0 })

    const trigger = ScrollTrigger.create({
      trigger: el,
      start,
      once: true,
      onEnter: () => {
        gsap.to(words, {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: EASE.out,
          stagger: 0.06,
          delay,
        })
      },
    })

    return () => trigger.kill()
  }, [reduced, delay, start])

  const words = text.split(' ')

  return (
    // @ts-expect-error dynamic tag ref typing
    <Tag ref={ref} className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          className="kinetic-word inline-block overflow-hidden align-bottom"
          aria-hidden="true"
        >
          <span className="inline-block will-change-transform">{word}</span>
          {i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </Tag>
  )
}
