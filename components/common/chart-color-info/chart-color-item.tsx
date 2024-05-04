import { FC } from 'react'

interface Props {
	color: string
	label: string
}

const ChartColorItem: FC<Props> = ({ color, label }) => {
	return (
		<div className='color-item'>
			<div className='color' style={{ background: color }}></div>
			<span>{label}</span>
		</div>
	)
}

export default ChartColorItem
