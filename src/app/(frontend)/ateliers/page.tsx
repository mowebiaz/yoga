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
    <main id="worshops">
      {draft && <LivePreviewListener />}
      <h1>Ateliers et retraites</h1>
      <div className="container">
        <p className="text-accent">
          Envie de prendre un peu plus de temps pour toi ?
        </p>
        <p>
          Tout au long de l’année, je propose des rendez-vous ponctuels pour
          approfondir la pratique, explorer un thème, ou simplement souffler.
          Que ce soit sur une demi-journée ou sur plusieurs jours, l’idée reste
          la même :{' '}
          <span className="text-accent">
            créer un espace accueillant, sans pression
          </span>
          , où tu peux bouger, respirer, te déposer… et repartir plus légère.
        </p>

        <h2>Ateliers thématiques</h2>
        <p>
          Les ateliers sont des moments un peu “hors du quotidien”, souvent plus
          longs qu’un cours classique. On prend le temps d’explorer une
          intention (mobilité, respiration, détente profonde, énergie, ancrage…)
          avec une pratique progressive et accessible.
        </p>
        <p>
          Selon le thème, on pourra alterner : mouvement et postures, exercices
          de respiration, relaxation guidée / méditation, parfois un temps
          d’échange
        </p>
        <p>
          <span className="text-accent">
            Pas besoin d’être souple ni niveau avancé:
          </span>
        {' '}je propose toujours des
          options pour adapter. L’important, c’est de venir comme tu es.
        </p>
        <h2>Retraites</h2>
        <p>
          Les retraites, c’est une parenthèse plus longue. Quelques jours pour
          ralentir, sortir du rythme habituel, et revenir à l’essentiel : le
          corps, le souffle, le repos. On y pratique généralement chaque jour
          (souvent matin + fin de journée), avec du temps libre pour marcher,
          lire, dormir, ne rien faire, intégrer en douceur, profiter du lieu et
          du calme.
        </p>
        <p>
          L’ambiance que je cherche :{' '}
          <span className="text-accent">
            simple, chaleureuse, et sans performance
          </span>
          . Tu viens pour te faire du bien, pas pour “réussir” quelque chose.
        </p>

        <h2>Evènements à venir</h2>
        <div className="worshops-container">
          <RenderBlocks blocks={layoutWorkshops} />
        </div>
      </div>
    </main>
  )
}
