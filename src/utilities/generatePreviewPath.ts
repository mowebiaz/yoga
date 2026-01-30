import { PayloadRequest } from 'payload'

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
    switch (slug) {
      case 'accueil':
        path = '/'
        break
      case 'cours':
        path = '/cours'
        break
      case 'ateliers':
        path = '/ateliers'
        break
      case 'a-propos':
        path = '/a-propos'
        break
      case 'contact':
        path = '/contact'
        break
      default:
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
