'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Divide as Hamburger } from 'hamburger-react'
import { AnimatePresence, motion } from 'motion/react'
import { navLinks } from '../navLinks'
import './NavMobile.scss'
import Image from 'next/image'

export const NavMobile = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    const prevPaddingRight = document.body.style.paddingRight

    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      if (scrollbarWidth > 0)
        document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPaddingRight
    }

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPaddingRight
    }
  }, [isOpen])

  return (
    <nav className="nav-mobile">
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
      <Hamburger
        color="#f9f0e9"
        toggle={setIsOpen}
        toggled={isOpen}
        distance="sm"
        rounded
        hideOutline={false}
        label="Menu"
      />

      {isOpen && (
        <AnimatePresence>
          <motion.div
            className="nav-mobile__container"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { ease: 'easeInOut', duration: 0.2 },
            }}
            exit={{ opacity: 0 }}
          >
            <ul>
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      )}
    </nav>
  )
}
