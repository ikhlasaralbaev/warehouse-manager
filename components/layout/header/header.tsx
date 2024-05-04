'use client'

import { ThemeToggler } from '@/components/common'
import { navMenuData } from '@/shared/nav-menu.data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HeaderHamburgerMenu from './header-hamburger-menu'
import { HeaderWrapperEl } from './header.styles'

const Header = () => {
	const pathname = usePathname()

	return (
		<HeaderWrapperEl>
			<Link className='header-logo' href='/'>
				<h1>Warehouse</h1>
			</Link>

			<nav className='header-navigation'>
				<ul className='header-menu'>
					{navMenuData.map(item => (
						<li key={item.path}>
							<Link
								className={pathname === item.path ? 'active' : ''}
								href={item.path}
							>
								{item.label}
							</Link>
						</li>
					))}
				</ul>

				<ThemeToggler />
			</nav>
			<HeaderHamburgerMenu />
		</HeaderWrapperEl>
	)
}

export default Header
