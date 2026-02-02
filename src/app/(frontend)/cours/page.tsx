import { draftMode } from 'next/headers'
import Link from 'next/link'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { JsonLd } from '@/components/JsonLd/JsonLd'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './Cours.scss'

export const metadata = {
  title: `Cours de yoga à Grenoble et alentours | Mel'Yoga`,
  description:
    'Cours de yoga pour adultes et enfants à Grenoble et alentours : séances accessibles, progression en douceur, en présentiel dans différentes salles. Réservation par téléphone.',
  metadataBase: new URL('https://yoga.morganeweb.com'),
  alternates: {
    canonical: '/cours',
  },
  openGraph: {
    type: 'website',
    siteName: "Mel'Yoga",
    locale: 'fr_FR',
    url: '/cours',
    title: `Cours de yoga à Grenoble et alentours | Mel'Yoga`,
    description:
      'Cours de yoga pour adultes et enfants à Grenoble et alentours : séances accessibles, progression en douceur, en présentiel dans différentes salles. Réservation par téléphone.',
    images: [
      {
        url: '/images/opengraph/cours-yoga-grenoble.jpg',
        width: 1200,
        height: 630,
        alt: 'Cours de yoga à Grenoble et alentours',
      },
    ],
  },
}

const coursJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `https://yoga.morganeweb.com/#website`,
      url: 'https://yoga.morganeweb.com',
      name: "Mel'Yoga",
      inLanguage: 'fr-FR',
    },
    {
      '@type': 'Person',
      '@id': 'https://yoga.morganeweb.com/#teacher',
      name: 'Mélanie Yoga',
      jobTitle: 'Professeure de yoga',
    },
    {
      '@type': 'CollectionPage',
      '@id': `https://yoga.morganeweb.com/cours/#webpage`,
      url: 'https://yoga.morganeweb.com/cours/',
      name: `Cours de yoga à Grenoble et alentours`,
      description:
        'Cours de yoga pour adultes et enfants à Grenoble et alentours, en présentiel dans différentes salles. Réservation par téléphone.',
      isPartOf: { '@id': `https://yoga.morganeweb.com/#website` },
      about: { '@id': `https://yoga.morganeweb.com/#teacher` },
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Course',
              '@id': `https://yoga.morganeweb.com/cours/#adultes`,
              name: 'Cours adultes',
              description:
                'Séances accessibles, progression en douceur, respiration et mobilité.',
              provider: { '@id': `https://yoga.morganeweb.com/#teacher` },
              url: 'https://yoga.morganeweb.com/cours/#adultes',
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Course',
              '@id': `https://yoga.morganeweb.com/cours/#enfants`,
              name: 'Cours enfants',
              description:
                'Yoga ludique et adapté, respiration, concentration et mouvement.',
              provider: { '@id': `https://yoga.morganeweb.com/#teacher` },
              url: 'https://yoga.morganeweb.com/cours/#enfants',
            },
          },
        ],
      },
    },
  ],
}

export default async function CoursesPage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('cours')
  const { layoutAdultCourse, layoutChildrenCourse } = page || {}

  return (
    <>
      <JsonLd schema={coursJsonLd} />
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
        </div>

        <div className="container">
          <h2>À quoi ressemble un cours&#8239;?</h2>
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
        </div>

        <div className="container">
          <h2>Infos pratiques</h2>
          <h3>Inscriptions</h3>
          <p>Les inscriptions se font au trimestre ou à l&apos;année.</p>
          <h3>Période</h3>
          <p>
            Les cours réguliers ont lieu sur l’année scolaire (septembre →
            juin). Pas de cours pendant les vacances scolaires (sauf ateliers
            ponctuels indiqués dans la page{' '}
            <Link
              href="/ateliers"
              className="link"
            >
              Ateliers
            </Link>
            ).
          </p>
          <h3>Tarifs</h3>
          <ul>
            <li>pour un seul trimestre: 143 € le trimestre.</li>
            <li>
              Pour une année scolaire: 381 €. Peut être réglé en trois chèques
              de 127€, à fournir lors du premier cours de septembre. Au
              démarrage de chaque trimestre, un chèque sera encaissé.
            </li>
            <li>Cours d’essai possible en début d&apos;année: 10€</li>
          </ul>
          <h3>Matériel</h3>
          <p>
            Venez avec une tenue confortable. Si vous avez un tapis, prenez-le
            (sinon nous avons des tapis à disposition). Prévoyez d’arriver au
            moins 5 minutes avant le début du cours pour vous installer
            tranquillement.
          </p>
        </div>

        <div className="container">
          <h2>Cours adultes</h2>
          <p>
            Ici, vous trouverez des cours pensés pour vous accompagner dans
            votre quotidien : relâcher les tensions, retrouver de la mobilité,
            renforcer en douceur, apprendre à respirer… Chaque cours a sa
            couleur : certains sont plus toniques, d’autres plus doux. Vous
            pouvez choisir selon vos besoins.
          </p>
          <p>
            Si vous hésitez entre deux créneaux,{' '}
            <Link
              href="/contact"
              className="link"
            >
              contactez-moi
            </Link>
            : Je vous aide à choisir celui qui correspond le mieux à votre
            rythme et à vos envies.
          </p>

          <div className="courses-container">
            <RenderBlocks blocks={layoutAdultCourse} />
          </div>
        </div>

        <div className="container">
          <h2>Cours enfants</h2>
          <p>
            Des cours ludiques et structurés, pour bouger, se concentrer et se
            détendre… tout en s’amusant 😊. On y retrouve : jeux de respiration,
            postures adaptées, petites explorations de l’équilibre et un temps
            calme en fin de séance.
          </p>
          <div className="courses-container">
            <RenderBlocks blocks={layoutChildrenCourse} />
          </div>
        </div>
      </main>
    </>
  )
}
