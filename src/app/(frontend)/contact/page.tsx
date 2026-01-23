import { FaSquareInstagram } from 'react-icons/fa6'
import { IoCall } from 'react-icons/io5'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { RenderBlocks } from '@/blocks/RenderBlocks'
import { ContactForm } from '@/components/ContactForm/ContactForm'
import { LivePreviewListener } from '@/components/LivePreviewListener/LivePreviewListener'
import { getPage } from '@/utilities/getPage'
import './Contact.scss'

export default async function ContactPage() {
  const { isEnabled: draft } = await draftMode()
  const page = await getPage('contact')
  const { layoutContact } = page || {}
  return (
    <main
      id="contact"
      className="container"
    >
      {draft && <LivePreviewListener />}
      <h1>Contact</h1>
      <RenderBlocks blocks={layoutContact} />
      <p>
        Une question, envie d’essayer, besoin d’être guidé·e vers le bon cours ?{' '}
        <br />
        Appelez-moi : je vous réponds avec plaisir et je vous aide à choisir la
        séance la plus adaptée.
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
        Si je suis en cours, laissez-moi un message avec votre prénom, la salle
        (ou la ville) et le créneau souhaité: je vous rappelle dès que possible.
      </p>
      <ContactForm />
      <div className="insta">
        <FaSquareInstagram
          size={25}
          color="#532755"
        />
        <p>
          Vous pouvez aussi me retrouver sur {' '}
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
  )
}
