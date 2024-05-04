import { ButtonComponent } from '@/components/common/button/ButtonComponent.styles'
import { Input, Select, Textarea } from '@/components/common/input/input.style'
import { useAppSelector } from '@/hooks/redux-hooks'
import { getCategories } from '@/store/reducers/categories/categories.slice'
import {
	setProductDrawerIsOpen,
	setProductUpdateData,
} from '@/store/reducers/products/products.slice'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { ProductManageComponentForm } from './product-manage-component.style'

interface IFormikInitialValueType {
	title: string
	price: number | null
	description: string
	category: string
}

const ProductManageComponent = () => {
	const { categories } = useAppSelector(state => state.categories)
	const { productUpdateData, products, productDrawerIsOpen } = useAppSelector(
		state => state.products
	)
	const dispatch = useDispatch()

	const formik = useFormik({
		initialValues: {
			title: '',
			price: null,
			description: '',
			category: '',
		} as IFormikInitialValueType,
		onSubmit(formikValues) {
			if (!productUpdateData) {
				const newProduct = {
					...formikValues,
					id: v4(),
					category: categories.find(item => item.id === formikValues.category),
				}

				localStorage.setItem(
					'warehouse-products',
					JSON.stringify([newProduct, ...products])
				)
			} else {
				const newProduct = {
					...formikValues,
					id: productUpdateData.id,
					category: categories.find(item => item.id === formikValues.category),
				}
				localStorage.setItem(
					'warehouse-products',
					JSON.stringify(
						products.map(item => {
							if (item.id === productUpdateData.id) {
								return newProduct
							} else {
								return item
							}
						})
					)
				)
			}

			dispatch(setProductDrawerIsOpen())
			dispatch(setProductUpdateData())
			window.dispatchEvent(new Event('storage'))
		},
	})

	useEffect(() => {
		if (productUpdateData) {
			formik.setValues({
				title: productUpdateData?.title,
				category: productUpdateData?.category.id,
				description: productUpdateData.description,
				price: productUpdateData.price,
			})
		} else {
			formik.setValues({
				title: '',
				category: '',
				description: '',
				price: null,
			})
		}
	}, [productDrawerIsOpen])

	useEffect(() => {
		const categories = localStorage.getItem('warehouse-categories')
		if (!categories) return
		dispatch(getCategories(JSON.parse(categories)))
	}, [])

	return (
		<ProductManageComponentForm
			onSubmit={e => {
				e.preventDefault()
				formik.submitForm()
			}}
		>
			<Input
				placeholder='Product title:'
				onChange={e => {
					formik.setFieldValue('title', e.target.value)
				}}
				value={formik.values.title}
				required
			/>
			<Input
				type='number'
				onChange={e => {
					formik.setFieldValue('price', e.target.value)
				}}
				value={formik.values.price || ''}
				placeholder='Price:'
				required
			/>
			<Textarea
				onChange={e => {
					formik.setFieldValue('description', e.target.value)
				}}
				value={formik.values.description}
				placeholder='Description:'
				required
			/>
			<Select
				onChange={e => {
					formik.setFieldValue('category', e.target.value)
				}}
				value={formik.values.category}
				required
			>
				<option disabled value={''}>
					Choose category:
				</option>
				{categories.map(item => (
					<option value={item.id}>{item.name}</option>
				))}
			</Select>
			<ButtonComponent type='submit'>Submit</ButtonComponent>
		</ProductManageComponentForm>
	)
}

export default ProductManageComponent
