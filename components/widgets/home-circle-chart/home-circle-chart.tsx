import { HomeCard } from '@/components/common/home-card/home-card.styles'

import ChartColorInfo from '@/components/common/chart-color-info/chart-color-info'
import { Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { HomePieChartWrapper } from '../widgets.styles'

const data01 = [
	{ name: 'Incomes', value: 0, fill: '#20C997' },
	{ name: 'Expenses', value: 0, fill: '#EB5757' },
]

const HomeCircleChart = () => {
	return (
		<HomeCard>
			<ChartColorInfo />
			<HomePieChartWrapper>
				<ResponsiveContainer width='100%' height='100%'>
					<PieChart width={400} height={400}>
						<Pie
							dataKey='value'
							isAnimationActive={false}
							data={data01}
							cx='50%'
							cy='50%'
							outerRadius={80}
							fill='#8884d8'
							label
						/>
						<Tooltip />
					</PieChart>
				</ResponsiveContainer>
			</HomePieChartWrapper>
		</HomeCard>
	)
}

export default HomeCircleChart
