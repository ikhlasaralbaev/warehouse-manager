import { HomeCard } from '@/components/common'
import { TotalBalanceCard } from '../widgets.styles'

const HomeTotalInfo = () => {
	return (
		<HomeCard>
			<TotalBalanceCard>
				<span>Total Balance</span>
				<h1>$7,540.00</h1>
				<b>+8.00%</b>
			</TotalBalanceCard>
		</HomeCard>
	)
}

export default HomeTotalInfo
