import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'

export default async function Home() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('accueil')
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
          laborum. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Quos, itaque unde amet soluta nisi maxime. Quos, odio, commodi velit
          unde, libero natus suscipit quae dignissimos sed laudantium ad neque
          repellendus. Eveniet architecto tempore aliquam commodi esse
          voluptates cupiditate obcaecati quae rem maxime eius laboriosam
          voluptas consequatur laborum. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Quos, itaque unde amet soluta nisi maxime. Quos,
          odio, commodi velit unde, libero natus suscipit quae dignissimos sed
          laudantium ad neque repellendus. Eveniet architecto tempore aliquam
          commodi esse voluptates cupiditate obcaecati quae rem maxime eius
          laboriosam voluptas consequatur laborum.
        </p>
      </section>
    </main>
  )
}
