import { AdminBar } from '@/components/Admin/AdminBar/AdminBar'
import { Footer } from '@/components/Footer/Footer'
import { JsonLd } from '@/components/JsonLd/JsonLd'
import { Header } from '@/components/Navigation/Header'
import { fraunces, inter } from '@/styles/fonts'
import '@/styles/scss/globals.scss'

export const metadata = {
  metadataBase: new URL('https://yoga.morganeweb.com'),
  title: { default: "Mel'Yoga", template: "%s | Mel'Yoga" },
  description:
    'Cours de yoga à Grenoble et alentours : séances collectives et individuelles, ateliers ponctuels, pratique accessible à tous niveaux. Réservation par téléphone.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
      noimageindex: true,
    },
  },
  icons: [
    {
      rel: 'icon',
      url: '/icons/favicon-light.svg',
      media: '(prefers-color-scheme: light)',
    },
    {
      rel: 'icon',
      url: '/icons/favicon-dark.svg',
      media: '(prefers-color-scheme: dark)',
    },
  ],
  openGraph: {
    title: "Mel'Yoga",
    description:
      'Cours de yoga à Grenoble et alentours : séances collectives et individuelles, ateliers ponctuels, pratique accessible à tous niveaux. Réservation par téléphone.',
    images: [
      {
        url: '/images/opengraph/mel-yoga.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://yoga.morganeweb.com',
  },
}

const layoutJsonLd = {
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
      '@type': 'Organization',
      '@id': `https://yoga.morganeweb.com/#org`,
      name: "Mel'Yoga",
      url: 'https://yoga.morganeweb.com',
      // sameAs: ['https://instagram.com/...'],
    },
    {
      '@type': 'Person',
      '@id': `https://yoga.morganeweb.com/#teacher`,
      name: 'Mélanie Yoga',
      jobTitle: 'Professeure de yoga',
      worksFor: { '@id': `https://yoga.morganeweb.com/#org` },
      // telephone: '+33...',
      // email: '...',
      // sameAs: ['https://instagram.com/...'],
    },
    {
      '@type': 'Service',
      '@id': `https://yoga.morganeweb.com/#service-yoga`,
      name: 'Cours de yoga',
      provider: { '@id': `https://yoga.morganeweb.com/#teacher` },
      areaServed: 'Grenoble et alentours',
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: `https://yoga.morganeweb.com/contact`,
        // telephone: '+33...' (si tu veux)
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${fraunces.variable} ${inter.variable}`}>
        <JsonLd schema={layoutJsonLd} />
        <AdminBar />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
