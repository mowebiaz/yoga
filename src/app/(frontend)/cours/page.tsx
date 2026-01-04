import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'

export default async function Cours() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('cours')
  const { layout } = page || {}

  return (
    <main>
      {draft && <LivePreviewListener />}
      <h1>Cours et lieux</h1>
      <RenderBlocks blocks={layout} />
      <h2>Pour qui ? </h2>
      <p>
        Je travaille avec des personnes très différentes, et c’est ça que j’aime
        : le yoga s’adapte. Mes cours sont faits pour vous si :
        <br />
        vous avez besoin de décompresser et d’apaiser le mental, vous voulez
        reprendre une activité en douceur, vous vous sentez parfois tendu·e,
        fatigué·e, stressé·e, vous cherchez un moment à vous, sans pression,
        sans jugement.
        <br />
        Et si vous débutez : parfait. Je guide pas à pas.
      </p>
      <h2>Ce que vous trouverez dans un cours</h2> Chaque séance est différente,
      mais on retrouve souvent : un temps d’arrivée (respiration / ancrage) une
      montée en mouvement progressive une séquence de postures avec options un
      retour au calme une relaxation finale (oui, la vraie ✨) (Phrase
      rassurante courte) Vous n’avez rien à “prouver”. Juste à venir pratiquer.
    </main>
  )
}
