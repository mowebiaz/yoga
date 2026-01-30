import Image from 'next/image'
import Link from 'next/link'
import './Footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__identity">
          <div>
            <Image
              src={'/icons/logo-dark.svg'}
              alt="Logo Mel'Yoga"
              width={40}
              height={40}
            />
            <p className="footer__title">Mel'Yoga</p>
          </div>
          <p>Cours de Yoga à Grenoble</p>
        </div>
        <div className="footer__right">
          <div className="footer__pages">
            <p className="footer__title">Liens</p>
            <ul>
              <li>
                <Link href={'/cours'}>Cours</Link>
              </li>
              <li>
                <Link href={'/ateliers'}>Ateliers</Link>
              </li>
              <li>
                <Link href={'/a-propos'}>A propos</Link>
              </li>
              <li>
                <Link href={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer__contact">
            <p className="footer__title">Contact</p>
            <p>06 XX XX XX XX</p>
            <Link
              href={'/contact'}
              className='footer-link'
            >
              Me contacter
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__copyright">
          <p>© 2026 Mel'Yoga. Tous droits réservés</p>
          <p>
            Site réalisé par{' '}
            <a
              href={'https://morganeweb.com/'}
              target="_blank"
              rel="no-opener no-referrer"
              aria-label="Lien vers le site de MorganeWeb"
              className="footer-link"
            >
              MorganeWeb
            </a>
          </p>
        </div>
        <div className="footer__links">
          <a
            href={'/mentions-legales'}
            className="footer-link"
          >
            Mentions légales
          </a>
          <a
            href={'/politique-de-confidentialite'}
            className="footer-link"
          >
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  )
}
