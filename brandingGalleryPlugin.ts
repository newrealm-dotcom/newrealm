import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

const VIRTUAL_ID = 'virtual:branding-gallery'
const RESOLVED_ID = `\0${VIRTUAL_ID}`
const IMAGE_EXT = /\.(webp|jpe?g|png|gif|avif)$/i

export interface BrandingGalleryImageMeta {
  src: string
  alt: string
  width: number
  height: number
}

function altFromFilename(filename: string): string {
  const base = filename.replace(/\.[^.]+$/, '')
  const spaced = base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!spaced) return 'Branding work sample'
  return `${spaced.charAt(0).toUpperCase()}${spaced.slice(1)} branding work`
}

function publicSrc(filename: string): string {
  return `/branding/${filename.split('/').map(encodeURIComponent).join('/')}`
}

/** Minimal dimension probe for common formats (no extra dependency). */
function readImageSize(filePath: string): { width: number; height: number } {
  const fallback = { width: 1000, height: 1000 }
  try {
    const buf = fs.readFileSync(filePath)
    if (buf.length < 24) return fallback

    // WebP
    if (buf.toString('ascii', 0, 4) === 'RIFF' && buf.toString('ascii', 8, 12) === 'WEBP') {
      const chunk = buf.toString('ascii', 12, 16)
      if (chunk === 'VP8X' && buf.length >= 30) {
        return {
          width: 1 + buf.readUIntLE(24, 3),
          height: 1 + buf.readUIntLE(27, 3),
        }
      }
      if (chunk === 'VP8 ' && buf.length >= 30) {
        return {
          width: buf.readUInt16LE(26) & 0x3fff,
          height: buf.readUInt16LE(28) & 0x3fff,
        }
      }
      if (chunk === 'VP8L' && buf.length >= 25) {
        const bits = buf.readUInt32LE(21)
        return {
          width: (bits & 0x3fff) + 1,
          height: ((bits >> 14) & 0x3fff) + 1,
        }
      }
    }

    // PNG
    if (
      buf[0] === 0x89 &&
      buf.toString('ascii', 1, 4) === 'PNG' &&
      buf.length >= 24
    ) {
      return {
        width: buf.readUInt32BE(16),
        height: buf.readUInt32BE(20),
      }
    }

    // JPEG — scan for SOF0/SOF2
    if (buf[0] === 0xff && buf[1] === 0xd8) {
      let offset = 2
      while (offset < buf.length - 9) {
        if (buf[offset] !== 0xff) break
        const marker = buf[offset + 1]
        const size = buf.readUInt16BE(offset + 2)
        if (marker === 0xc0 || marker === 0xc2) {
          return {
            height: buf.readUInt16BE(offset + 5),
            width: buf.readUInt16BE(offset + 7),
          }
        }
        offset += 2 + size
      }
    }
  } catch {
    // fall through
  }
  return fallback
}

function scanBrandingDir(brandingDir: string): BrandingGalleryImageMeta[] {
  if (!fs.existsSync(brandingDir)) return []

  return fs
    .readdirSync(brandingDir)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith('.'))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((filename) => {
      const size = readImageSize(path.join(brandingDir, filename))
      return {
        src: publicSrc(filename),
        alt: altFromFilename(filename),
        width: size.width,
        height: size.height,
      }
    })
}

function buildModuleSource(brandingDir: string): string {
  const images = scanBrandingDir(brandingDir)
  return `export const brandingGalleryImages = ${JSON.stringify(images, null, 2)}\n`
}

/**
 * Virtual module that always mirrors files currently in public/branding.
 * Drop a new image in that folder → it appears in the masonry gallery.
 */
export function brandingGalleryPlugin(rootDir: string): Plugin {
  const brandingDir = path.resolve(rootDir, 'public/branding')

  return {
    name: 'branding-gallery',
    resolveId(id) {
      if (id === VIRTUAL_ID) return RESOLVED_ID
    },
    load(id) {
      if (id === RESOLVED_ID) return buildModuleSource(brandingDir)
    },
    configureServer(server) {
      if (!fs.existsSync(brandingDir)) {
        fs.mkdirSync(brandingDir, { recursive: true })
      }
      server.watcher.add(brandingDir)

      const refresh = (file: string) => {
        if (!file.startsWith(brandingDir)) return
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID)
        if (mod) {
          server.moduleGraph.invalidateModule(mod)
        }
        server.ws.send({ type: 'full-reload', path: '*' })
      }

      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
      server.watcher.on('change', refresh)
    },
  }
}
