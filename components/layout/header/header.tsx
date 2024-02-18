'use client'

import ThemeToggler from '@/components/common/theme-toggler'
import Link from 'next/link'
import { HeaderWrapperEl } from './header.styles'

const Header = () => {
	return (
		<HeaderWrapperEl>
			<Link className='header-logo' href='/'>
				<h1>ZeroDev</h1>
			</Link>

			<nav className='header-navigation'>
				<ul className='header-menu'>
					<li>
						<Link href='/'>Home</Link>
					</li>
					<li>
						<Link href='/incomes'>Incomes</Link>
					</li>
					<li>
						<Link href='/expenses'>Expenses</Link>
					</li>
				</ul>

				<ThemeToggler />
			</nav>
		</HeaderWrapperEl>
	)
}

export default Header
