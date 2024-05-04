import { IProductType } from '@/types/products.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialStateType {
	products: IProductType[]
	productDrawerIsOpen: boolean
	productUpdateData: IProductType | null
}

const initialState: IInitialStateType = {
	products: [],
	productDrawerIsOpen: false,
	productUpdateData: null,
}

export const productsSlice = createSlice({
	name: 'ui',
	initialState: initialState,
	reducers: {
		getProducts: (state, action: PayloadAction<IProductType[]>) => {
			state.products = action.payload
		},
		setProductDrawerIsOpen: state => {
			state.productDrawerIsOpen = !state.productDrawerIsOpen
		},
		setProductUpdateData: (
			state,
			action: PayloadAction<IProductType | undefined>
		) => {
			state.productUpdateData = action.payload || null
		},
	},
})

export const { getProducts, setProductDrawerIsOpen, setProductUpdateData } =
	productsSlice.actions
export default productsSlice
