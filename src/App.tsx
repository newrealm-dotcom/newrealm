import { lazy, Suspense, useState } from 'react'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Cursor } from './components/Cursor'
import { Loader } from './components/Loader'
import { ScrollChoreography } from './three/ScrollChoreography'

const Scene = lazy(() => import('./three/Scene').then((m) => ({ default: m.Scene })))
import { Hero } from './sections/Hero'
import { Manifesto } from './sections/Manifesto'
import { Capabilities } from './sections/Capabilities'
import { Proof } from './sections/Proof'
import { CTA } from './sections/CTA'
import { useSmoothScroll } from './lib/useSmoothScroll'
import { ScrollTrigger } from './lib/motion'

function App() {
  const [loaded, setLoaded] = useState(false)
  useSmoothScroll()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:rounded-md focus:bg-[var(--color-bone)] focus:px-4 focus:py-2 focus:text-[var(--color-void)]"
      >
        Skip to content
      </a>

      <Loader
        onDone={() => {
          setLoaded(true)
          requestAnimationFrame(() => ScrollTrigger.refresh())
        }}
      />

      <div className="film-grain" />
      <Cursor />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      {loaded && <ScrollChoreography />}

      <Nav />

      <main id="main" className="relative z-10">
        <Hero />
        <Manifesto />
        <Capabilities />
        <Proof />
        <CTA />
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}

export default App
