import { useEffect, useState } from 'react'
import { assetUrl } from '../lib/assetUrl'

interface HeroImageFaderProps {
  images: string[]
  /** Milliseconds each slide is fully visible before fading to the next. */
  intervalMs?: number
  /** Crossfade / blur dissolve length in milliseconds. */
  transitionMs?: number
}

/**
 * Crossfades stacked hero images with a blur dissolve, looping forever.
 */
export function HeroImageFader({
  images,
  intervalMs = 5000,
  transitionMs = 1000,
}: HeroImageFaderProps) {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState<number | null>(null)

  useEffect(() => {
    if (images.length < 2) return

    const id = window.setInterval(() => {
      setActive((i) => {
        setPrev(i)
        return (i + 1) % images.length
      })
    }, intervalMs)

    return () => window.clearInterval(id)
  }, [images.length, intervalMs])

  useEffect(() => {
    if (prev === null) return
    const id = window.setTimeout(() => setPrev(null), transitionMs)
    return () => window.clearTimeout(id)
  }, [prev, transitionMs])

  if (images.length === 0) return null

  return (
    <div className="relative w-full lg:h-[650px]">
      <img
        src={assetUrl(images[0])}
        alt=""
        aria-hidden
        className="invisible h-auto w-full object-contain lg:hidden"
      />
      {images.map((src, i) => {
        const isActive = i === active
        const isOutgoing = i === prev
        const visible = isActive || isOutgoing
        return (
          <img
            key={src}
            src={assetUrl(src)}
            alt=""
            className={`absolute inset-0 h-full w-full object-contain ${
              isActive ? 'z-[2]' : isOutgoing ? 'z-[1]' : 'z-0'
            }`}
            style={{
              opacity: isActive ? 1 : isOutgoing ? 0 : 0,
              filter: isActive ? 'blur(0px)' : 'blur(18px)',
              transition: `opacity ${transitionMs}ms ease-in-out, filter ${transitionMs}ms ease-in-out`,
              pointerEvents: visible ? 'auto' : 'none',
            }}
          />
        )
      })}
    </div>
  )
}
