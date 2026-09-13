import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import { Core } from './Core'
import { useReducedMotion } from '../lib/useReducedMotion'

export function Scene() {
  const reduced = useReducedMotion()
  const [dpr, setDpr] = useState(1.5)

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ contain: 'strict' }}
    >
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 5], fov: 42 }}
      >
        <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} />
        <Suspense fallback={null}>
          <Core reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  )
}
