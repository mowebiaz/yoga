import { cache } from 'react'
import { draftMode, headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import config from '@/payload.config'

const queryActuPage = cache(async () => {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'pages',
    overrideAccess: Boolean(user),
    draft: Boolean(user),
    where: {
      slug: { equals: 'actu-ateliers' },
    },
    limit: 1,
    pagination: false,
  })

  return result.docs?.[0] || null
})


export default async function Actu() {
  const { isEnabled: draft } = await draftMode()
  const page = await queryActuPage()
  const { layout } = page || {}

  return (
    <main>
      {draft && <LivePreviewListener />}

      <h1>Actualités et ateliers</h1>
      <RenderBlocks blocks={layout} />
    </main>
  )
}