'use client'

import { ButtonComponent } from '@/components/common/button/ButtonComponent.styles'
import { Flex } from '@/components/common/flex/flex'
import { Input } from '@/components/common/input/input.style'
import { useAppSelector } from '@/hooks/redux-hooks'
import { clearUpdatingCategory } from '@/store/reducers/categories/categories.slice'
import { ICategoryType } from '@/types/categories.types'
import { FC, FormEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'

const CategoryManageComponent: FC = () => {
	const { updatingCategory, categories } = useAppSelector(
		state => state.categories
	)
	const [categoryName, setCategoryName] = useState('')
	const dispatch = useDispatch()

	useEffect(() => {
		if (updatingCategory) {
			setCategoryName(updatingCategory.name)
		} else {
			setCategoryName('')
		}
	}, [updatingCategory])

	function onSubmit(e: FormEvent) {
		e.preventDefault()

		if (updatingCategory) {
			updateProduct()
		} else {
			addProduct()
		}
	}

	function addProduct() {
		const category = {
			id: v4(),
			name: categoryName,
		}

		if (categories) {
			localStorage.setItem(
				'warehouse-categories',
				JSON.stringify([category, ...categories])
			)
		} else {
			localStorage.setItem('warehouse-categories', JSON.stringify([category]))
		}

		setCategoryName('')

		window?.dispatchEvent(new Event('storage'))
	}

	function updateProduct() {
		localStorage.setItem(
			'warehouse-categories',
			JSON.stringify(
				categories.map((item: ICategoryType) => {
					if (item.id === updatingCategory?.id) {
						return {
							...item,
							name: categoryName,
						}
					} else {
						return item
					}
				})
			)
		)

		dispatch(clearUpdatingCategory())

		window?.dispatchEvent(new Event('storage'))
	}

	return (
		<form onSubmit={onSubmit}>
			<Flex gap='12px'>
				<Input
					value={categoryName}
					onChange={e => setCategoryName(e.target.value)}
					placeholder='Enter new category:'
					required
				/>
				<ButtonComponent type='submit'>
					{updatingCategory ? 'Update' : 'Add'}
				</ButtonComponent>
			</Flex>
		</form>
	)
}

export default CategoryManageComponent
