'use client'
import { TableComponent } from '@/components/common'
import { ButtonComponent } from '@/components/common/button/ButtonComponent.styles'
import Drawer from '@/components/common/drawer/drawer'
import ProductManageComponent from '@/components/widgets/product-manage-component/product-manage-component'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import useProductTableData from '@/hooks/useProductTableData'
import { productsTableColumns } from '@/shared/products.data'
import {
	getProducts,
	setProductDrawerIsOpen,
} from '@/store/reducers/products/products.slice'
import { useEffect } from 'react'
import {
	ProductsComponentWrapper,
	ProductsHeadWrapper,
} from './products-component.styles'

const ProductsComponent = () => {
	const { products, productDrawerIsOpen } = useAppSelector(
		state => state.products
	)
	const tableData = useProductTableData({ products })
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (typeof window === 'undefined') return
		const products = localStorage.getItem('warehouse-products')

		if (!products) return

		dispatch(getProducts(JSON.parse(products)))
	}, [localStorage])

	window?.addEventListener('storage', () => {
		const products = localStorage.getItem('warehouse-products')

		if (!products) return

		dispatch(getProducts(JSON.parse(products)))
	})

	function toggleProductDrawer() {
		dispatch(setProductDrawerIsOpen())
	}

	return (
		<>
			<ProductsComponentWrapper>
				<ProductsHeadWrapper>
					<h1>Products</h1>
					<ButtonComponent
						onClick={() => {
							toggleProductDrawer()
						}}
					>
						Add product
					</ButtonComponent>
				</ProductsHeadWrapper>

				<TableComponent columns={productsTableColumns} data={tableData} />
			</ProductsComponentWrapper>
			<Drawer
				title='Create new product'
				isOpen={productDrawerIsOpen}
				onClose={() => {
					toggleProductDrawer()
				}}
			>
				<ProductManageComponent />
			</Drawer>
		</>
	)
}

export default ProductsComponent
