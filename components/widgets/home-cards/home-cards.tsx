import HomeCategories from '../home-categories/home-categories'
import HomeCircleChart from '../home-circle-chart/home-circle-chart'
import HomeLineChart from '../home-line-chart/home-line-chart'
import HomeTotalInfo from '../home-total-info/home-total-info'
import { HomeCardsWrapper } from './home-cards.styles'

const HomeCards = () => {
	return (
		<HomeCardsWrapper>
			<HomeLineChart />
			<HomeCircleChart />
			<HomeCategories />
			<div>
				<HomeTotalInfo />
			</div>
		</HomeCardsWrapper>
	)
}

export default HomeCards
