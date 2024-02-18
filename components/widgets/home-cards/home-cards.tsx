import HomeCircleChart from '../home-circle-chart/home-circle-chart'
import HomeLineChart from '../home-line-chart/home-line-chart'
import HomeTotalInfo from '../home-total-info/home-total-info'
import HomeTransactions from '../home-transactions/home-transactions'
import { HomeCardsWrapper } from './home-cards.styles'

const HomeCards = () => {
	return (
		<HomeCardsWrapper>
			<HomeLineChart />
			<HomeCircleChart />
			<HomeTransactions />
			<HomeTotalInfo />
		</HomeCardsWrapper>
	)
}

export default HomeCards
