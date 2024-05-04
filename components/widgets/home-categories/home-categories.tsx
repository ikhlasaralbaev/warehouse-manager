'use client'

import { CardTitle, HomeCard } from '@/components/common'
import CategoryItem from '@/components/common/category-item/category-item'
import { FC } from 'react'
import { HomeCategoriesWrapper } from '../widgets.styles'

interface Props {}

const HomeCategories: FC<Props> = () => {
	return (
		<HomeCard>
			<CardTitle>Categories</CardTitle>
			<HomeCategoriesWrapper>
				<CategoryItem name='Home' total_price={4000} type='expense' />
				<CategoryItem name='Salary' total_price={2300} type='income' />
				<CategoryItem name='Home' total_price={4000} type='expense' />
				<CategoryItem name='Salary' total_price={2300} type='income' />
				<CategoryItem name='Home' total_price={4000} type='expense' />
				<CategoryItem name='Salary' total_price={2300} type='income' />
			</HomeCategoriesWrapper>
		</HomeCard>
	)
}

export default HomeCategories
