'use client'

import { ThemeToggler } from '@/components/common'
import { navMenuData } from '@/shared/nav-menu.data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { HeaderWrapperEl } from './header.styles'

const Header = () => {
	const pathname = usePathname()

	return (
		<HeaderWrapperEl>
			<Link className='header-logo' href='/'>
				<h1>ZeroDev</h1>
			</Link>

			<nav className='header-navigation'>
				<ul className='header-menu'>
					{navMenuData.map(item => (
						<li>
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
		</HeaderWrapperEl>
	)
}

export default Header
