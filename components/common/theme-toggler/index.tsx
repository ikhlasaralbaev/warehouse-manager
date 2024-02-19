import { useAppSelector } from '@/hooks/redux-hooks'
import { changeThemeMode } from '@/store/reducers/ui/ui.slice'
import { BiMoon, BiSun } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { ThemeTogglerWrapperEl } from './theme-toggler.styles'

const ThemeToggler = () => {
	const dispatch = useDispatch()
	const { theme } = useAppSelector(state => state.ui)

	return (
		<ThemeTogglerWrapperEl
			title='Change theme mode'
			onClick={() => dispatch(changeThemeMode())}
		>
			{theme === 'light' ? <BiMoon /> : <BiSun />}
		</ThemeTogglerWrapperEl>
	)
}

export default ThemeToggler
