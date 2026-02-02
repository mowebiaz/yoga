// src/collections/Media/hooks/cleanupOriginal.ts
import path from 'path'
import { del } from '@vercel/blob'
import type { CollectionAfterChangeHook } from 'payload'

export const cleanupOriginalBlob: CollectionAfterChangeHook = async ({
  doc,
  req,
}) => {
  const file = req?.file as
    | { originalname?: string; filename?: string; mimetype?: string }
    | undefined

  // Only clean up when a file has just been sent.
  if (!file?.originalname) return

  const finalFilename = doc?.filename as string | undefined
  if (!finalFilename || !finalFilename.toLowerCase().endsWith('.webp')) return

  const originalExt = path.extname(file.originalname).toLowerCase()
  if (!originalExt) return

  if (originalExt === '.webp') return

  // reconstruct the name of the source blob to be deleted.
  const base = finalFilename.replace(/\.webp$/i, '')
  const candidate = `${base}${originalExt}`

  try {
    await del(candidate)
  } catch {
    console.log(`Failed to delete ${candidate}`)
  }
}
