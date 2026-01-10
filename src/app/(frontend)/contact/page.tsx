import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'

export default async function ContactPage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('contact')
  const { layoutContact } = page || {}
  return (
    <main>
      {draft && <LivePreviewListener />}

      <h1>Contact</h1>
      <RenderBlocks blocks={layoutContact} />
    </main>
  )
}
