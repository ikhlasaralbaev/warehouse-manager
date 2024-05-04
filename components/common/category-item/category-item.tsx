import { IncomeExpenseType } from '@/types/common.types'
import classNames from 'classnames'
import { FC } from 'react'
import { CategoryItemWrapper } from './category-item.styles'
interface Props {
	name: string
	total_price: number
	type: IncomeExpenseType
}

const CategoryItem: FC<Props> = ({ name, total_price, type }) => {
	return (
		<CategoryItemWrapper>
			<div className='left-side'>
				<h2>{name}</h2>
				<span>{type}</span>
			</div>

			<h1 className={classNames('amount', type)}>${total_price}</h1>
		</CategoryItemWrapper>
	)
}

export default CategoryItem
