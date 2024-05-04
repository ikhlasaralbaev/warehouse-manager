import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type ThemeModeTypes = 'light' | 'dark'

interface IInitialStateType {
	theme: 'light' | 'dark'
}

const initialState: IInitialStateType = {
	theme:
		(localStorage.getItem('warehouse-theme-mode') as ThemeModeTypes) || 'dark',
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState: initialState,
	reducers: {
		changeThemeMode: (
			state,
			action: PayloadAction<ThemeModeTypes | undefined>
		) => {
			state.theme = action.payload || state.theme === 'dark' ? 'light' : 'dark'
		},
	},
})

export const { changeThemeMode } = uiSlice.actions
export default uiSlice
