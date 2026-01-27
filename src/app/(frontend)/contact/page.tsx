import { FaSquareInstagram } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { draftMode } from 'next/headers'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { JsonLd } from '@/components/JsonLd/JsonLd'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './Contact.scss'

export const metadata = {
  title: `Contact & réservation | Mel'Yoga | Yoga Grenoble`,
  description:
    'Réserver un cours, poser une question ou s’inscrire à un atelier : contactez la professeure par téléphone (prioritaire) ou via le formulaire. Cours à Grenoble et alentours.',
  metadataBase: new URL('https://yoga.morganeweb.com'),
  alternates: { canonical: '/contact' },
  openGraph: {
    type: 'website',
    siteName: "Mel'Yoga",
    locale: 'fr_FR',
    url: '/contact',
    title: `Contact & réservation | Mel'Yoga`,
    description:
      'Réserver un cours ou s’inscrire à un atelier : contact par téléphone (prioritaire) ou via le formulaire.',
    images: [
      {
        url: '/og/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact et réservation — yoga Grenoble',
      },
    ],
  },
}

const contactJsonLd = {
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
      '@id': `https://yoga.morganeweb.com/#teacher`,
      name: 'Mélanie Yoga',
      jobTitle: 'Professeure de yoga',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'Réservation / informations',
          //telephone: PHONE || undefined,
          //email: EMAIL || undefined,
          availableLanguage: ['fr'],
        },
      ],
    },
    {
      '@type': 'ContactPage',
      '@id': `https://yoga.morganeweb.com/contact/#webpage`,
      url: `https://yoga.morganeweb.com/contact/`,
      name: `Contact & réservation — Mélanie Yoga`,
      description:
        'Contactez la professeure pour réserver un cours, poser une question ou vous inscrire à un atelier.',
      isPartOf: { '@id': `https://yoga.morganeweb.com/#website` },
      mainEntity: { '@id': `https://yoga.morganeweb.com/#teacher` },
    },
  ],
}

export default async function ContactPage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('contact')
  const { layoutContact } = page || {}
  return (
    <>
      <JsonLd schema={contactJsonLd} />
      <main
        id="contact"
        className="container"
      >
        {draft && <LivePreviewListener />}
        <h1>Contact</h1>
        <RenderBlocks blocks={layoutContact} />
        <p>
          Une question, envie d’essayer, besoin d’être guidé·e vers le bon cours
          ? <br />
          Appelez-moi : je vous réponds avec plaisir et je vous aide à choisir
          la séance la plus adaptée.
        </p>
        <h2>Réservation par téléphone</h2>
        <div className="phone">
          <IoCall
            size={25}
            color="#532755"
          />
          <p>06 XX XX XX XX</p>
        </div>
        <p>
          Si je suis en cours, laissez-moi un message avec votre prénom, la
          salle (ou la ville) et le créneau souhaité: je vous rappelle dès que
          possible.
        </p>
        <ContactForm />
        <div className="insta">
          <FaSquareInstagram
            size={25}
            color="#532755"
          />
          <p>
            Vous pouvez aussi me retrouver sur{' '}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="link"
            >
              Instagram
            </a>
            , où je partage les actualités des cours, les ateliers et quelques
            inspirations yoga.
          </p>
        </div>
      </main>
    </>
  )
}
