import { cache } from 'react'
import { draftMode, headers as getHeaders } from 'next/headers'
import { getPayload } from 'payload'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import config from '@/payload.config'

const queryHomePage = cache(async () => {
  const headers = await getHeaders()
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers })

  const result = await payload.find({
    collection: 'pages',
    overrideAccess: Boolean(user),
    draft: Boolean(user),
    where: {
      slug: { equals: 'accueil' },
    },
    limit: 1,
    pagination: false,
  })

  return result.docs?.[0] || null
})

export default async function Home() {
  const { isEnabled: draft } = await draftMode()
  const page = await queryHomePage()
  const { layout } = page || {}

  return (
    <main>
      {draft && <LivePreviewListener />}

      <h1>Votre cours de Yoga à Grenoble</h1>

      <RenderBlocks blocks={layout} />

      <section className="container">
        <h2>Bla bla bla</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, itaque
          unde amet soluta nisi maxime. Quos, odio, commodi velit unde, libero
          natus suscipit quae dignissimos sed laudantium ad neque repellendus.
          Eveniet architecto tempore aliquam commodi esse voluptates cupiditate
          obcaecati quae rem maxime eius laboriosam voluptas consequatur
          laborum.
        </p>
      </section>

      <section className="container">
        <h2>Bla bla bla</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, itaque
          unde amet soluta nisi maxime. Quos, odio, commodi velit unde, libero
          natus suscipit quae dignissimos sed laudantium ad neque repellendus.
          Eveniet architecto tempore aliquam commodi esse voluptates cupiditate
          obcaecati quae rem maxime eius laboriosam voluptas consequatur
          laborum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, itaque
          unde amet soluta nisi maxime. Quos, odio, commodi velit unde, libero
          natus suscipit quae dignissimos sed laudantium ad neque repellendus.
          Eveniet architecto tempore aliquam commodi esse voluptates cupiditate
          obcaecati quae rem maxime eius laboriosam voluptas consequatur
          laborum.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, itaque
          unde amet soluta nisi maxime. Quos, odio, commodi velit unde, libero
          natus suscipit quae dignissimos sed laudantium ad neque repellendus.
          Eveniet architecto tempore aliquam commodi esse voluptates cupiditate
          obcaecati quae rem maxime eius laboriosam voluptas consequatur
          laborum.
        </p>
      </section>

    </main>
  )
}
