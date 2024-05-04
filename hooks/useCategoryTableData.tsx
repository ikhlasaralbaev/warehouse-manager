import { ButtonComponent } from '@/components/common/button/ButtonComponent.styles'
import { Flex } from '@/components/common/flex/flex'
import { setUpdatingCategory } from '@/store/reducers/categories/categories.slice'
import { ICategoryType } from '@/types/categories.types'
import { useDispatch } from 'react-redux'

interface Props {
	categories: ICategoryType[]
}

const useCategoryTableData = ({ categories }: Props) => {
	const dispatch = useDispatch()

	function deleteCategory(id: string) {
		const isConfirm = confirm('Do you want delete this category?')

		if (!isConfirm) return

		localStorage.setItem(
			'warehouse-categories',
			JSON.stringify(categories.filter((item: ICategoryType) => item.id !== id))
		)
		window?.dispatchEvent(new Event('storage'))
	}

	function updateCategory(item: ICategoryType) {
		dispatch(setUpdatingCategory(item))
	}

	return categories.map(item => ({
		name: item.name,
		action: (
			<Flex gap='12px' justifyContent='flex-end'>
				<ButtonComponent
					onClick={() => {
						updateCategory(item)
					}}
				>
					Update
				</ButtonComponent>
				<ButtonComponent onClick={() => deleteCategory(item.id)}>
					Delete
				</ButtonComponent>
			</Flex>
		),
	}))
}

export default useCategoryTableData
