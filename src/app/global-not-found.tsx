// Import global styles and fonts
import type { Metadata } from 'next'
import { Fraunces, Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import './global-not-found.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'La page que vous recherchez n’existe pas.',
}

export default function GlobalNotFound() {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${fraunces.variable}`}>
        <main>
          <Image
            src={'/images/about-me.webp'}
            alt="404"
            width={250}
            height={250}
          />
          <h1>404</h1>
          <p>Cette page n&apos;existe pas</p>
          <p>
            Retourner à l&apos;<Link href="/">accueil</Link>
          </p>
        </main>
      </body>
    </html>
  )
}
