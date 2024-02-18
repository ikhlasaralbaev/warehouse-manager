import { ChartColorInfoWrapper } from './chart-color-info.styles'
import ChartColorItem from './chart-color-item'

const ChartColorInfo = () => {
	return (
		<ChartColorInfoWrapper>
			<ChartColorItem color='#20C997' label='Incomes' />
			<ChartColorItem color='#EB5757' label='Expenses' />
		</ChartColorInfoWrapper>
	)
}

export default ChartColorInfo
