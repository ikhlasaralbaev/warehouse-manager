import ChartColorInfo from '@/components/common/chart-color-info/chart-color-info'
import { HomeCard } from '@/components/common/home-card/home-card.styles'
import { FC } from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import { HomeLineChartWrapper } from '../widgets.styles'

const data = [
	{
		name: 'Page A',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page B',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page C',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page D',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page E',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page F',
		uv: 0,
		pv: 0,
	},
	{
		name: 'Page G',
		uv: 0,
		pv: 0,
	},
]

const HomeLineChart: FC = () => {
	return (
		<HomeCard>
			<ChartColorInfo />
			<HomeLineChartWrapper>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart data={data}>
						<Line
							type='monotone'
							dataKey='uv'
							stroke='#20C997'
							strokeWidth={2}
						/>
						<Line
							type='monotone'
							dataKey='pv'
							stroke='#E74C3C'
							strokeWidth={2}
						/>
					</LineChart>
				</ResponsiveContainer>
			</HomeLineChartWrapper>
		</HomeCard>
	)
}

export default HomeLineChart
