import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './Workshop.scss'

export default async function WorshopPage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('ateliers')
  const { layoutWorkshops } = page || {}

  return (
    <main id='worshops'>
      {draft && <LivePreviewListener />}
      <h1>Ateliers</h1>
      <div className="container">
        <h2>Les ateliers : prendre le temps</h2>
        En plus des cours réguliers, je propose des ateliers ponctuels (souvent
        plus longs), pour explorer un thème en profondeur : respiration,
        mobilité du dos, hanches, gestion du stress, énergie de saison… C’est un
        format que j’adore : on peut aller plus loin, et surtout prendre son
        temps. CTA : Découvrir les prochains ateliers
        <div className="worshops-container">
          <RenderBlocks blocks={layoutWorkshops} />
        </div>
      </div>
    </main>
  )
}
