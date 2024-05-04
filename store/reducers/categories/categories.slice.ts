import { ICategoryType } from '@/types/categories.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IInitialStateType {
	categories: ICategoryType[]
	updatingCategory: ICategoryType | null
}

const initialState: IInitialStateType = {
	categories: [],
	updatingCategory: null,
}

export const categoriesSlice = createSlice({
	name: 'ui',
	initialState: initialState,
	reducers: {
		getCategories: (state, action: PayloadAction<ICategoryType[]>) => {
			state.categories = action.payload
		},
		setUpdatingCategory: (state, action) => {
			state.updatingCategory = action.payload
		},
		clearUpdatingCategory: state => {
			state.updatingCategory = null
		},
	},
})

export const { getCategories, setUpdatingCategory, clearUpdatingCategory } =
	categoriesSlice.actions
export default categoriesSlice
