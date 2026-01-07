'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navLinks } from '../navLinks'
import './NavDesktop.scss'

export const NavDesktop = () => {
  const pathname = usePathname()

  return (
    <nav className="nav-desktop">
      <div className="logo-container">
        <Link
          href="/"
          aria-label="Accueil"
        >
          <Image
            src="/icons/favicon-dark.svg"
            alt=""
            width={50}
            height={50}
            priority
            aria-hidden="true"
          />
        </Link>
      </div>

      <ul>
        {navLinks.map((link) => (
          <li
            key={link.href}
            className={pathname === link.href ? 'active' : ''}
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
