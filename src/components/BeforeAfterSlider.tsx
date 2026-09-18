import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { assetUrl } from '../lib/assetUrl'

interface BeforeAfterSliderProps {
  /** Image revealed on the left side of the handle (color) */
  beforeSrc: string
  /** Image revealed on the right side of the handle (B&W) */
  afterSrc: string
  beforeLabel?: string
  afterLabel?: string
  /** Initial handle position 0–1 (default 0.55) */
  initialPosition?: number
  className?: string
}

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeLabel = 'Color',
  afterLabel = 'B&W',
  initialPosition = 0.55,
  className = '',
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)
  const [position, setPosition] = useState(initialPosition)
  const labelId = useId()

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const next = (clientX - rect.left) / rect.width
    setPosition(Math.min(1, Math.max(0, next)))
  }, [])

  useEffect(() => {
    function onPointerMove(e: PointerEvent) {
      if (!dragging.current) return
      updateFromClientX(e.clientX)
    }
    function onPointerUp() {
      dragging.current = false
    }
    window.addEventListener('pointermove', onPointerMove)
    window.addEventListener('pointerup', onPointerUp)
    window.addEventListener('pointercancel', onPointerUp)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerup', onPointerUp)
      window.removeEventListener('pointercancel', onPointerUp)
    }
  }, [updateFromClientX])

  function startDrag(e: React.PointerEvent) {
    e.preventDefault()
    dragging.current = true
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const pct = position * 100

  return (
    <div
      ref={containerRef}
      className={`relative w-full touch-none select-none overflow-hidden ${className}`}
      onPointerDown={startDrag}
      role="group"
      aria-labelledby={labelId}
    >
      <span id={labelId} className="sr-only">
        Before and after image comparison slider. Drag the handle to compare.
      </span>

      {/* After (B&W) — full base */}
      <img
        src={assetUrl(afterSrc)}
        alt=""
        draggable={false}
        className="block h-auto w-full"
      />

      {/* Before (color) — clipped from the right based on handle */}
      <img
        src={assetUrl(beforeSrc)}
        alt=""
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-left"
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded bg-black/55 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${pct}%` }}
        aria-hidden="true"
      >
        <button
          type="button"
          aria-label="Drag to compare color and black-and-white versions"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          role="slider"
          className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full border-2 border-white bg-[#00419f] text-white shadow-[0_4px_14px_rgba(0,0,0,0.25)]"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              e.preventDefault()
              setPosition((p) => Math.max(0, p - 0.05))
            }
            if (e.key === 'ArrowRight') {
              e.preventDefault()
              setPosition((p) => Math.min(1, p + 0.05))
            }
          }}
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
            <path
              d="M5 1L1 6L5 11M13 1L17 6L13 11"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
