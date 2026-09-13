import { useEffect, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshTransmissionMaterial, Environment, Lightformer } from '@react-three/drei'
import type { Mesh } from 'three'
import { gsap } from '../lib/motion'
import { sceneState } from './sceneState'

interface CoreProps {
  reduced: boolean
}

export function Core({ reduced }: CoreProps) {
  const meshRef = useRef<Mesh>(null)
  const groupRotation = useRef({ x: 0, y: 0 })
  const { camera } = useThree()

  useEffect(() => {
    const mesh = meshRef.current
    if (!mesh) return

    if (reduced) {
      mesh.scale.setScalar(1)
      sceneState.opacity = 1
      return
    }

    mesh.scale.setScalar(0.001)
    const state = { s: 0.001 }
    gsap.to(state, {
      s: 1,
      duration: 1.6,
      ease: 'expo.out',
      delay: 0.3,
      onUpdate: () => mesh.scale.setScalar(state.s),
    })
    gsap.to(sceneState, { opacity: 1, duration: 1.4, delay: 0.3, ease: 'power2.out' })
  }, [reduced])

  useFrame((state, delta) => {
    const mesh = meshRef.current
    if (!mesh) return

    const aspect = state.size.width / state.size.height
    const portrait = aspect < 0.85
    const camZTarget = sceneState.camZ * (portrait ? 1.8 : 1)
    const xTarget = portrait ? 0.15 : 0.9

    camera.position.z += (camZTarget - camera.position.z) * 0.04
    camera.lookAt(0, 0, 0)
    mesh.position.x += (xTarget - mesh.position.x) * 0.05

    if (!reduced) {
      mesh.rotation.y += delta * sceneState.rotationSpeed
      mesh.rotation.x += delta * sceneState.rotationSpeed * 0.35

      const targetX = state.pointer.y * 0.25
      const targetY = state.pointer.x * 0.4
      groupRotation.current.x += (targetX - groupRotation.current.x) * 0.03
      groupRotation.current.y += (targetY - groupRotation.current.y) * 0.03
      mesh.rotation.x += groupRotation.current.x * delta
      mesh.rotation.y += groupRotation.current.y * delta
    }

    const mat = mesh.material as { roughness?: number; opacity?: number }
    if (mat && typeof mat.roughness === 'number') {
      mat.roughness += (sceneState.roughness - mat.roughness) * 0.05
    }
    if (mat) {
      mat.opacity = sceneState.opacity
    }
  })

  return (
    <>
      <mesh ref={meshRef} position={[0.9, 0, 0]}>
        <icosahedronGeometry args={[1.15, 0]} />
        <MeshTransmissionMaterial
          transmission={1}
          thickness={1.2}
          roughness={0.06}
          ior={1.4}
          chromaticAberration={0.04}
          anisotropy={0.3}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.05}
          color="#EDEBE6"
          transparent
          opacity={0}
        />
      </mesh>
      <ambientLight intensity={0.3} />
      <directionalLight position={[3, 4, 5]} intensity={0.7} color="#EDEBE6" />
      <pointLight position={[-4, 1, 2]} intensity={4} color="#7C5CFF" />
      <pointLight position={[4, -1, 2]} intensity={4} color="#4CE0D2" />
      <Environment resolution={128}>
        <group>
          <Lightformer form="rect" intensity={1.4} color="#7C5CFF" position={[-4, 2, -2]} scale={[4, 6, 1]} />
          <Lightformer form="rect" intensity={1.4} color="#4CE0D2" position={[4, -2, -2]} scale={[4, 6, 1]} />
          <Lightformer form="ring" intensity={0.4} color="#EDEBE6" position={[0, 3, 4]} scale={3} />
        </group>
      </Environment>
    </>
  )
}
