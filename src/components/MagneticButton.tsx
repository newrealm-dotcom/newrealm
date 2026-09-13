import { useRef, type ReactNode, type ButtonHTMLAttributes } from 'react'
import { gsap } from '../lib/motion'
import { useReducedMotion } from '../lib/useReducedMotion'

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const RADIUS = 60
const PULL = 10

export function MagneticButton({ children, className = '', ...rest }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const reduced = useReducedMotion()

  const onMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = e.clientX - (rect.left + rect.width / 2)
    const dy = e.clientY - (rect.top + rect.height / 2)
    const dist = Math.hypot(dx, dy)
    if (dist > RADIUS) return
    gsap.to(el, { x: (dx / RADIUS) * PULL, y: (dy / RADIUS) * PULL, duration: 0.3, ease: 'power2.out' })
  }

  const onMouseLeave = () => {
    if (!ref.current) return
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' })
  }

  return (
    <button
      ref={ref}
      data-cursor="hover"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
      {...rest}
    >
      {children}
    </button>
  )
}
