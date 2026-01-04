import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'

export default async function Actu() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('actu-ateliers')
  const { layout } = page || {}

  return (
    <main>
      {draft && <LivePreviewListener />}
      <h1>Actualités et ateliers</h1>
      <RenderBlocks blocks={layout} />
      <h2>Les ateliers : prendre le temps</h2>
      En plus des cours réguliers, je propose des ateliers ponctuels (souvent
      plus longs), pour explorer un thème en profondeur : respiration, mobilité
      du dos, hanches, gestion du stress, énergie de saison… C’est un format que
      j’adore : on peut aller plus loin, et surtout prendre son temps. CTA :
      Découvrir les prochains ateliers
    </main>
  )
}
