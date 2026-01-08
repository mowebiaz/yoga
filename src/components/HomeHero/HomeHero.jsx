import Image from 'next/image'
import Link from 'next/link'
import './HomeHero.scss'

export const HomeHero = () => {
  return (
    <div className="home-hero">
      <div className="home-hero__image">
        <Image
          src="/images/yoga-grenoble.webp"
          alt="yoga en extérieur, ambiance douce et lumineuse"
          fill
          priority
          sizes='100vw'
        />
      </div>
      <div className="home-hero__content">
        <h1 className="home-hero__title">Cours de yoga à Grenoble</h1>
        <p className='home-hero__tagline'>pour respirer, bouger, et te sentir bien</p>
        <div className="home-hero__cta">
          <Link
            className="btn btn--primary"
            href="/cours"
          >
            Voir les cours
          </Link>
          <Link
            className="btn btn--secondary"
            href="/contact"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </div>
  )
}
