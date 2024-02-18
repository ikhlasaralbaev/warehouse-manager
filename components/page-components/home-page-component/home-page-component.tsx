'use client'

import { Container } from '@/components/common/container/container.styles'
import HomeCards from '@/components/widgets/home-cards/home-cards'
import { HomeWrapper } from './home.styles'

const HomePageComponent = () => {
	return (
		<HomeWrapper>
			<Container>
				<div className='home-title'>
					<h1>
						<b>Good morning, </b> ZeroDev!
					</h1>
					<p>Welcome Back</p>
				</div>

				<HomeCards />
			</Container>
		</HomeWrapper>
	)
}

export default HomePageComponent
