import { configureStore } from '@reduxjs/toolkit'
import categoriesSlice from './reducers/categories/categories.slice'
import productsSlice from './reducers/products/products.slice'
import uiSlice from './reducers/ui/ui.slice'

export const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
		products: productsSlice.reducer,
		categories: categoriesSlice.reducer,
	},
	devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
