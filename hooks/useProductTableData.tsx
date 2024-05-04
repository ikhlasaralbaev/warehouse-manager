import { ButtonComponent } from '@/components/common/button/ButtonComponent.styles'
import { Flex } from '@/components/common/flex/flex'
import {
	setProductDrawerIsOpen,
	setProductUpdateData,
} from '@/store/reducers/products/products.slice'
import { IProductTableDataType, IProductType } from '@/types/products.types'
import { useDispatch } from 'react-redux'

interface Props {
	products: IProductType[]
}

const useProductTableData = ({ products }: Props): IProductTableDataType[] => {
	const dispatch = useDispatch()

	function updateProduct(id: string) {
		dispatch(setProductDrawerIsOpen())
		dispatch(setProductUpdateData(products.find(item => item.id === id)))
	}

	return products.map(({ title, price, description, category, id }) => ({
		title,
		price,
		description,
		category: category.name,
		action: (
			<Flex gap='12px' justifyContent='flex-end'>
				<ButtonComponent onClick={() => updateProduct(id)}>
					Update
				</ButtonComponent>
				<ButtonComponent>Delete</ButtonComponent>
			</Flex>
		),
	}))
}

export default useProductTableData
