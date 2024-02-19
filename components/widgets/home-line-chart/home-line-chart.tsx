import { HomeCard } from '@/components/common'
import ChartColorInfo from '@/components/common/chart-color-info/chart-color-info'
import { FC } from 'react'
import { Line, LineChart, ResponsiveContainer } from 'recharts'
import { HomeLineChartWrapper } from '../widgets.styles'

const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
	},
	{
		name: 'Page B',
		uv: 3000,
		pv: 1398,
	},
	{
		name: 'Page C',
		uv: 2000,
		pv: 9800,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
	},
	{
		name: 'Page E',
		uv: 1890,
		pv: 4800,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: 3800,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
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
