import { PayloadRequest } from 'payload'

/* const collectionPrefixMap: Partial<Record<CollectionSlug, string>> = {
  posts: '/blog',
  // pour pages, on va gérer au cas par cas
  pages: '',
} */

type Props = {
  collection: 'posts' | 'pages'
  slug: string
  req: PayloadRequest
}

export const generatePreviewPath = ({ collection, slug }: Props) => {
  if (!slug) return null

  let path: string

  if (collection === 'posts') {
    path = `/blog/${slug}`
  } else if (collection === 'pages') {
    // 👉 mapping entre les slugs Payload et les vraies routes Next
    switch (slug) {
      case 'accueil':
        path = '/'
        break
      case 'cours':
        path = '/cours'
        break
      case 'actu-ateliers':
        path = '/actu-ateliers'
        break
      case 'a-propos':
        path = '/a-propos'
        break
      case 'contact':
        path = '/contact'
        break
      default:
        // fallback, si un jour tu as une route /[slug]
        path = `/${slug}`
    }
  } else {
    return null
  }

  const encodedParams = new URLSearchParams({
    slug,
    collection,
    path,
    previewSecret: process.env.PREVIEW_SECRET || '',
  })

  const url = `/api/preview?${encodedParams.toString()}`

  return url
}
