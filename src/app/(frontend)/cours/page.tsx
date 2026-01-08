import { draftMode } from 'next/headers'
import Link from 'next/link'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './Cours.scss'

export default async function Cours() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('cours')
  const { layoutCoursAdulte, layoutCoursEnfant } = page || {}

  return (
    <main id="cours">
      {draft && <LivePreviewListener />}
      <h1>Mes cours réguliers</h1>
      <div className="container">
        <p>
          Que vous veniez pour bouger, souffler, vous assouplir ou simplement
          prendre un temps pour vous, vous êtes au bon endroit. Mes cours sont
          accessibles à tous niveaux : je propose toujours des options plus
          douces et des variations plus toniques selon votre énergie du jour.
          L’idée : progresser à votre rythme, dans une ambiance simple et
          bienveillante.
        </p>
        <h2>À quoi ressemble un cours ?</h2>
        Un cours dure en général 1h15. Chaque séance est différente, mais on
        retrouve souvent :
        <ul>
          <li>un temps d’arrivée (respiration / ancrage)</li>
          <li>une montée en mouvement progressive</li>
          <li>une séquence de postures avec options</li>
          <li>un retour au calme</li>
          <li>une relaxation finale (oui, la vraie ✨)</li>
        </ul>
        <p>Vous n’avez rien à prouver. Juste à venir pratiquer.</p>
        <h2>Infos pratiques</h2>
        <p>
          <span className="text-accent">Période:</span> les cours réguliers ont
          lieu sur l’année scolaire (septembre → juin). Pas de cours pendant les
          vacances scolaires (sauf ateliers ponctuels indiqués dans la page{' '}
          <Link href="/actu-ateliers">Actu &Ateliers</Link>).
        </p>
        <p>
          <span className="text-accent">Matériel:</span> venez avec une tenue
          confortable. Si vous avez un tapis, prenez-le (sinon nous avons des
          tapis à disposition). Prévoyez d’arriver au moins 5 minutes avant le
          début du cours pour vous installer tranquillement.
        </p>
        <p>
          <span className="text-accent">Inscriptions:</span> Les inscriptions se
          font au trimestre ou à l&apos;année (avec une réduction de 10%).
        </p>
        <h2>Cours adultes</h2>
        <p>
          Ici, vous trouverez des cours pensés pour vous accompagner dans votre
          quotidien : relâcher les tensions, retrouver de la mobilité, renforcer
          en douceur, apprendre à respirer… Chaque cours a sa couleur : certains
          sont plus toniques, d’autres plus doux. Vous pouvez choisir selon vos
          besoins.
        </p>
        <RenderBlocks blocks={layoutCoursAdulte} />
        <p>
          Si vous hésitez entre deux créneaux,{' '}
          <Link href="/contact">contactez-moi</Link>: Je vous aide à choisir
          celui qui correspond le mieux à votre rythme et à vos envies.
        </p>
        <h2>Cours enfants</h2>
        <p>
          Des cours ludiques et structurés, pour bouger, se concentrer et se
          détendre… tout en s’amusant 😊. On y retrouve : jeux de respiration,
          postures adaptées, petites explorations de l’équilibre et un temps
          calme en fin de séance.
        </p>
        <RenderBlocks blocks={layoutCoursEnfant} />
      </div>
    </main>
  )
}
