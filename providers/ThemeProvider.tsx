import { darkTheme, lightTheme } from '@/config/theme'
import { useAppSelector } from '@/hooks/redux-hooks'
import { ChildrenProps } from '@/types/common.types'
import { FC } from 'react'
import { ThemeProvider } from 'styled-components'

const CustomThemeProvider: FC<ChildrenProps> = ({ children }) => {
	const { theme } = useAppSelector(state => state.ui)
	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			{children}
		</ThemeProvider>
	)
}

export default CustomThemeProvider
