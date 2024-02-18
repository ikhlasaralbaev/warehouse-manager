import { configureStore } from '@reduxjs/toolkit'
import uiSlice from './reducers/ui/ui.slice'

export const store = configureStore({
	reducer: {
		ui: uiSlice.reducer,
	},
	devTools: process.env.NODE_ENV === 'development',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
