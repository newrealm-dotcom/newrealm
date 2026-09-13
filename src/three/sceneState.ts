export interface RealmPreset {
  opacity: number
  camZ: number
  roughness: number
  rotationSpeed: number
}

export const REALM_PRESETS: Record<string, RealmPreset> = {
  hero: { opacity: 0.9, camZ: 7.5, roughness: 0.06, rotationSpeed: 0.14 },
  manifesto: { opacity: 0.22, camZ: 10, roughness: 0.4, rotationSpeed: 0.06 },
  hidden: { opacity: 0, camZ: 12, roughness: 0.6, rotationSpeed: 0.02 },
  cta: { opacity: 0.85, camZ: 6.8, roughness: 0.04, rotationSpeed: 0.16 },
}

export const sceneState = {
  opacity: 0,
  camZ: REALM_PRESETS.hero.camZ,
  roughness: REALM_PRESETS.hero.roughness,
  rotationSpeed: REALM_PRESETS.hero.rotationSpeed,
  entered: false,
}
