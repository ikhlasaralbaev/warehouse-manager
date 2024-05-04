import { DarkBottomOverlay, DarkTopOverlay } from '@/public/images'
import { ChildrenProps } from '@/types/common.types'
import Image from 'next/image'
import Header from './header/header'
import { MainLayoutWrapper } from './layout.styles'

const MainLayout = ({ children }: ChildrenProps) => {
	return (
		<MainLayoutWrapper>
			<Image
				src={DarkTopOverlay}
				width={370}
				height={370}
				alt='Overlay photo'
				className='top-img'
			/>
			<Image
				src={DarkBottomOverlay}
				width={370}
				height={370}
				alt='Overlay photo'
				className='bottom-img'
			/>
			<Header />
			{children}
		</MainLayoutWrapper>
	)
}

export default MainLayout
