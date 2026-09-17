import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from '../lib/useReducedMotion'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const [visible, setVisible] = useState(reduced)

  useEffect(() => {
    if (reduced) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [reduced])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'reveal-in' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
