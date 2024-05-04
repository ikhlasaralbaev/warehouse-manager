import { useEffect, useState } from 'react'
import { ThemeToggler } from '@/components/common'
import { navMenuData } from '@/shared/nav-menu.data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HamburgerMenuWrapper, HeaderWrapperEl } from './header.styles'
import Hamburger from 'hamburger-react'

const HeaderHamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <HamburgerMenuWrapper>
      <Hamburger toggled={isOpen} direction="left" toggle={toggleMenu} />
      {isOpen && (
        <nav className="header-hamburger-navigation">
          <ul className="header-hamburger-menu">
            {navMenuData.map((item) => (
              <li key={item.path}>
                <Link className={pathname === item.path ? 'active' : ''} href={item.path}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <ThemeToggler />
        </nav>
      )}
    </HamburgerMenuWrapper>
  )
}

export default HeaderHamburgerMenu
