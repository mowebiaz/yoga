import { draftMode } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { HomeHero } from '@/components/HomeHero/HomeHero'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { ReviewCard } from '@/components/ReviewCard/ReviewCard'
import { reviews } from '@/data/reviews'
import { getPage } from '@/utilities/getPage'
import './page.scss'

export default async function HomePage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('accueil')
  const { layoutHome } = page || {}

  return (
    <main id="home">
      {draft && <LivePreviewListener />}

      <HomeHero />

      <div className="container">
        <RenderBlocks blocks={layoutHome} />
      </div>

      <p className="container">
        Tu cours partout, tu passes beaucoup de temps dans ta tête, et ton corps
        te le rappelle (tensions, fatigue, raideur…) ?<br /> Ici, l’idée est
        simple : te proposer un yoga accessible, dans une ambiance chaleureuse,
        pour revenir au corps, respirer, et retrouver un peu d’espace. Les
        séances sont progressives, avec des options à chaque étape. Tu n’as pas
        besoin d’être souple, ni &quot;déjà à l’aise&quot; : tu viens comme tu
        es, et on construit la pratique ensemble, semaine après semaine.
        Débutant·e bienvenu·e, corps raide accepté, mental en vrac aussi 😉
      </p>

      <div className="container">
        <h2>Un yoga simple, complet, et surtout accessible</h2>
        <div className="content-with-image right">
          <div className="image-container">
            <Image
              src={'/images/yoga-accessible.webp'}
              alt="Un cours de yoga pour une pratique adaptable"
              fill
              sizes={'(max-width: 768px) 100vw, 30vw'}
            />
          </div>
          <div>
            <p>
              Dans mes cours, on prend le temps. On bouge pour délier, on
              renforce en profondeur, on respire pour calmer le système nerveux,
              et on termine avec un vrai retour au calme. Ce n’est pas un cours
              “performance”, et ce n’est pas non plus un moment figé : c’est une
              pratique vivante, qui s’adapte à ton énergie du jour. Je guide
              avec des consignes claires, et je propose toujours des variantes.
              L’objectif, c’est que tu te sentes en confiance, et que tu
              ressortes de la séance avec cette sensation :{' '}
              <span className="text-italic">ok, là… je respire mieux</span>. A
              la clé:
            </p>
            <ul>
              <li>plus de mobilité (dos, épaules, hanches)</li>
              <li>une force plus stable (sans brutalité)</li>
              <li>un mental un peu plus calme</li>
              <li>et un rendez-vous régulier avec toi-même</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Les cours à Grenoble : horaires, lieux et tarifs</h2>
        <div className="content-with-image left">
          <div>
            <p>
              Je propose des cours réguliers à Grenoble, dans des lieux où on se
              sent bien : de l’espace, une ambiance douce, et un cadre qui aide
              à décrocher. Que tu viennes pour te remettre en mouvement, pour
              relâcher des tensions, ou juste pour t’offrir une pause… tu
              trouveras un format adapté.
            </p>
            <p>Sur la page dédiée, tu peux consulter :</p>
            <ul>
              <li>le planning à jour (jours / heures)</li>
              <li>les lieux et infos pratiques</li>
              <li>les tarifs (séance à l’unité, cartes, etc.)</li>
            </ul>
            <Link
              href="/ateliers"
              className="btn btn--primary"
            >
              Voir tous les cours
            </Link>
          </div>
          <div className="image-container ">
            <Image
              src={'/images/cours-collectifs-de-yoga.webp'}
              alt="Salle de yoga à Grenoble"
              fill
              sizes={'(max-width: 768px) 100vw, 30vw'}
              className="bottom"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Pour qui sont ces cours ?</h2>
        <p>
          Tu es au bon endroit si tu veux pratiquer dans un cadre bienveillant,
          sans te comparer, et avec le droit d’être débutant·e (même si tu as
          déjà fait du yoga il y a longtemps).
        </p>
        <p>Beaucoup de personnes viennent parce qu’elles se sentent :</p>
        <ul>
          <li>stressées, dispersées, “toujours en tension”</li>
          <li>raides ou fatiguées, avec un corps qui manque de mobilité</li>
          <li>en reprise sportive, ou avec besoin de douceur</li>
          <li>simplement en recherche d’un moment régulier pour souffler</li>
        </ul>
        <p>
          Et si tu te dis{' '}
          <span className="text-italic">je suis trop raide</span>,{' '}
          <span className="text-italic">je n’ai pas le niveau</span>,{' '}
          <span className="text-italic">je ne vais pas suivre</span>, … c’est
          souvent précisément pour ça que ça fait du bien de venir. On avance
          progressivement, et tu n’as rien à prouver.
        </p>
      </div>

      <div className="container">
        <h2>Ateliers thématiques et événements ponctuels</h2>
        <div className="content-with-image left">
          <div>
            <p>
              En plus des cours hebdomadaires, j’organise parfois des{' '}
              <span className="text-accent">ateliers</span> : un format un peu
              plus long, pour explorer une thématique en profondeur, prendre le
              temps, et repartir avec des repères concrets. Selon les périodes,
              ça peut être: mobilité (hanches, dos, épaules), respiration &
              apaisement, yoga du soir / détente profonde, routines simples à
              refaire chez soi...
            </p>
            <p>
              Et ponctuellement, je propose aussi des{' '}
              <span className="text-accent">retraites</span> : quelques jours
              pour décrocher du rythme du quotidien, pratiquer plus en
              profondeur, et s’offrir une vraie parenthèse (yoga, respiration,
              temps calme…). Les prochaines dates et informations sont annoncées
              au fur et à mesure, lorsqu’une retraite est programmée.
            </p>

            <Link
              href="/ateliers"
              className="btn btn--primary"
            >
              Voir les ateliers
            </Link>
          </div>
          <div className="image-container">
            <Image
              src={'/images/atelier-yoga.webp'}
              alt="Atelier de yoga à Grenoble"
              fill
              sizes={'(max-width: 768px) 100vw, 30vw'}
            />
          </div>
        </div>
      </div>

      <div className="container">
        <h2>
          Je suis Mélanie, et je t’accompagne avec une approche simple et
          bienveillante
        </h2>
        <p>
          J’ai créé ces cours avec une idée : proposer un yoga qui aide vraiment
          au quotidien. Pas besoin d’être souple, ni d’avoir une pratique
          parfaite. Juste l’envie de revenir au corps, de respirer un peu mieux,
          et d’apprendre à bouger avec plus de conscience. Je guide avec
          précision et douceur, je prends le temps d’expliquer, et je fais en
          sorte que chacun·e puisse trouver sa place, quel que soit son niveau.
        </p>

        <Link
          href="/a-propos"
          className="btn btn--primary"
        >
          En savoir plus sur moi
        </Link>
      </div>

      <div className="container">
        <h2>Ils en parlent mieux que moi</h2>
        <div className="reviews">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <h2>Tu veux essayer ?</h2>
        <p>
          Si tu hésites, écris-moi : je peux te dire quel cours te correspond le
          mieux, et te répondre sur le niveau, le matériel, ou la tenue. Et si
          tu préfères : tu peux aussi réserver une première séance et voir
          comment tu te sens. Le plus dur, souvent, c’est juste de venir la
          première fois.
        </p>
        <Link
          href="/contact"
          className="btn btn--primary"
        >
          Me contacter
        </Link>
      </div>
    </main>
  )
}
