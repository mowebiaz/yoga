import { draftMode } from 'next/headers'
import Image from 'next/image'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './About.scss'

export default async function About() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('a-propos')
  const { layoutAbout } = page || {}
  return (
    <main id="about">
      {draft && <LivePreviewListener />}

      <h1>Qui suis-je ?</h1>
      <RenderBlocks blocks={layoutAbout} />
      <div className="container">
        <p>
          Je m’appelle Mélanie, et j’enseigne le yoga dans Grenoble et sa
          region. Mon intention : vous aider à vous sentir mieux dans votre
          corps, à respirer plus librement, et à retrouver un peu d’espace… même
          quand le quotidien va vite. Je propose des cours réguliers dans
          différents lieux, et des ateliers thématiques pour prendre le temps
          d’approfondir (respiration, mobilité, stress, saisons…).
        </p>
        <div className="image-container">
          <Image
            src={'/images/about-me.webp'}
            alt="professeur de yoga"
            fill
          />
        </div>

        <h2>Mon histoire</h2>
        <p>
          J’ai découvert le yoga à un moment où j’avais besoin de ralentir. Au
          début, je cherchais surtout à bouger et à me détendre. Et puis, au fil
          des pratiques, j’ai compris que c’était bien plus que ça : un
          rendez-vous avec soi, une façon simple de revenir au corps, à la
          respiration… et au présent. Ce qui m’a touchée, c’est cette idée que
          le yoga ne demande pas d’être “souple” ou “fort·e”. Il demande surtout
          d’être curieux·se, et de venir comme on est. C’est exactement ce que
          j’essaie de transmettre : une pratique bienveillante, progressive, où
          chacun·e trouve sa place.
        </p>
        <p className="text-italic">
          Je crois à une pratique régulière, même petite, plutôt qu’à une
          pratique parfaite.
        </p>

        <h2>Mon parcours</h2>
        <p>
          Je me suis formée auprès de [école / professeur / lignée], avec une
          formation de [XXX heures]. Je continue à me former régulièrement,
          parce que j’aime apprendre, affiner, et enrichir ma transmission.
        </p>

        <h2>Ma façon d’enseigner</h2>
        <p>
          Dans mes cours, je guide une pratique douce mais vivante : on prend le
          temps d’installer des bases solides, d’explorer, de respirer, de
          relâcher. J’aime proposer :
          <br />
          🌿 des variations (pour que chacun·e adapte à son corps), 🌿 un
          mélange de mouvement + respiration + retour au calme, 🌿 une attention
          à l’alignement, sans rigidité ni performance, 🌿 une ambiance simple,
          chaleureuse, où on se sent en sécurité.
        </p>
        <p className="text-italic">
          Mon objectif n’est pas de “réussir des postures”, mais de repartir en
          se sentant plus présent·e, plus léger·e, plus ancré·e.
        </p>

        <h2>Quelques mots plus personnels</h2>
        <p>
          Quand je ne suis pas sur le tapis, j’aime [balades / montagne /
          lectures / cuisine / musique / nature]. Et ce que je préfère dans mon
          métier, c’est ce moment où quelqu’un me dit : “Je me sens mieux. J’ai
          respiré. J’ai relâché.”
        </p>
      </div>
    </main>
  )
}
