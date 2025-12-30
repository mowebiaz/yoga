'use client'

import { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'motion/react'
import { NavDesktop } from './NavDesktop/NavDesktop'
import './Header.scss'

export const Header = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <nav>
        <p className="logo-container">Logo</p>
        <NavDesktop />
      </nav>
    </header>
  )
}
