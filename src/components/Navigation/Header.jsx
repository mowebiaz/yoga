'use client'

import { useState } from 'react'
import { useMotionValueEvent, useScroll } from 'motion/react'
import { NavDesktop } from './NavDesktop/NavDesktop'
import { NavMobile } from './NavMobile/NavMobile'
import './Header.scss'

export const Header = () => {
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 0)
  })

  return (
    <header className={isScrolled ? 'scrolled' : ''}>
      <NavDesktop />
      <NavMobile />
    </header>
  )
}
