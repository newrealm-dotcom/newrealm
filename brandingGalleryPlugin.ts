import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

const IMAGE_EXT = /\.(webp|jpe?g|png|gif|avif)$/i

export interface PublicGalleryImageMeta {
  src: string
  alt: string
  width: number
  height: number
}

interface GalleryFolderConfig {
  /** Folder under public/, e.g. "branding" */
  folder: string
  /** Virtual module id, e.g. "virtual:branding-gallery" */
  virtualId: string
  /** Exported const name in the virtual module */
  exportName: string
  /** Suffix used in generated alt text */
  altSuffix: string
}

const GALLERY_FOLDERS: GalleryFolderConfig[] = [
  {
    folder: 'branding',
    virtualId: 'virtual:branding-gallery',
    exportName: 'brandingGalleryImages',
    altSuffix: 'branding work',
  },
  {
    folder: 'characters',
    virtualId: 'virtual:characters-gallery',
    exportName: 'charactersGalleryImages',
    altSuffix: 'character design work',
  },
  {
    folder: 'packaging',
    virtualId: 'virtual:packaging-gallery',
    exportName: 'packagingGalleryImages',
    altSuffix: 'packaging design work',
  },
]

function altFromFilename(filename: string, altSuffix: string): string {
  const base = filename.replace(/\.[^.]+$/, '')
  const spaced = base.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!spaced) return altSuffix.charAt(0).toUpperCase() + altSuffix.slice(1)
  return `${spaced.charAt(0).toUpperCase()}${spaced.slice(1)} ${altSuffix}`
}

function publicSrc(folder: string, filename: string): string {
  return `/${folder}/${filename.split('/').map(encodeURIComponent).join('/')}`
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
    if (buf[0] === 0x89 && buf.toString('ascii', 1, 4) === 'PNG' && buf.length >= 24) {
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

function scanPublicFolder(
  dir: string,
  folder: string,
  altSuffix: string,
): PublicGalleryImageMeta[] {
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((name) => IMAGE_EXT.test(name) && !name.startsWith('.'))
    .sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }))
    .map((filename) => {
      const size = readImageSize(path.join(dir, filename))
      return {
        src: publicSrc(folder, filename),
        alt: altFromFilename(filename, altSuffix),
        width: size.width,
        height: size.height,
      }
    })
}

/**
 * Virtual modules that mirror image files in public/{branding,characters,packaging}.
 * Drop a new image in those folders → it appears in the matching masonry gallery.
 */
export function publicGalleryPlugin(rootDir: string): Plugin {
  const folders = GALLERY_FOLDERS.map((config) => ({
    ...config,
    dir: path.resolve(rootDir, 'public', config.folder),
    resolvedId: `\0${config.virtualId}`,
  }))

  const byResolved = new Map(folders.map((f) => [f.resolvedId, f]))
  const byVirtual = new Map(folders.map((f) => [f.virtualId, f]))

  return {
    name: 'public-gallery',
    resolveId(id) {
      const match = byVirtual.get(id)
      return match ? match.resolvedId : undefined
    },
    load(id) {
      const match = byResolved.get(id)
      if (!match) return undefined
      const images = scanPublicFolder(match.dir, match.folder, match.altSuffix)
      return `export const ${match.exportName} = ${JSON.stringify(images, null, 2)}\n`
    },
    configureServer(server) {
      for (const folder of folders) {
        if (!fs.existsSync(folder.dir)) {
          fs.mkdirSync(folder.dir, { recursive: true })
        }
        server.watcher.add(folder.dir)
      }

      const refresh = (file: string) => {
        const match = folders.find((folder) => file.startsWith(folder.dir))
        if (!match) return
        const mod = server.moduleGraph.getModuleById(match.resolvedId)
        if (mod) server.moduleGraph.invalidateModule(mod)
        server.ws.send({ type: 'full-reload', path: '*' })
      }

      server.watcher.on('add', refresh)
      server.watcher.on('unlink', refresh)
      server.watcher.on('change', refresh)
    },
  }
}

/** @deprecated Use publicGalleryPlugin — kept name for existing vite.config imports. */
export const brandingGalleryPlugin = publicGalleryPlugin
