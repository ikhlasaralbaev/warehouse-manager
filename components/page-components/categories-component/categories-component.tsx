'use client'
import { TableComponent } from '@/components/common'
import CategoryManageComponent from '@/components/widgets/category-manage-component/category-manage-component'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import useCategoryTableData from '@/hooks/useCategoryTableData'
import { categoryTableColumn } from '@/shared/categories.data'
import { getCategories } from '@/store/reducers/categories/categories.slice'
import { useEffect } from 'react'
import {
	CategoriesComponentWrapper,
	CategoriesHeadWrapper,
} from './categories-component.styles'

const CategoriesComponent = () => {
	const { categories } = useAppSelector(state => state.categories)
	const tableData = useCategoryTableData({ categories })
	const dispatch = useAppDispatch()

	function fetchCategories() {
		const categories = localStorage.getItem('warehouse-categories')
		if (!categories) return
		dispatch(getCategories(JSON.parse(categories)))
	}

	useEffect(() => {
		fetchCategories()
	}, [])

	window.addEventListener('storage', () => {
		fetchCategories()
	})

	return (
		<CategoriesComponentWrapper>
			<CategoriesHeadWrapper>
				<h1>Categories</h1>
				<CategoryManageComponent />
			</CategoriesHeadWrapper>
			<TableComponent columns={categoryTableColumn} data={tableData} />
		</CategoriesComponentWrapper>
	)
}

export default CategoriesComponent
