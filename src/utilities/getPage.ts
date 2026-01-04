import { draftMode } from 'next/headers'
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { cache } from 'react'


export const getPage = cache(async (slug: string) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    overrideAccess: draft,
    where: {
      slug: { equals: slug },
    },
    limit: 1,
    pagination: false,
  })

  return result.docs?.[0] || null
})
