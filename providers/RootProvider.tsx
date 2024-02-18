'use client'
import MainLayout from '@/components/layout/main-layout'
import { store } from '@/store'
import { ChildrenProps } from '@/types/common.types'
import { Provider } from 'react-redux'
import CustomThemeProvider from './ThemeProvider'

const RootProvider = ({ children }: ChildrenProps) => {
	return (
		<Provider store={store}>
			<CustomThemeProvider>
				<MainLayout>{children}</MainLayout>
			</CustomThemeProvider>
		</Provider>
	)
}

export default RootProvider
