import { styled } from 'styled-components'
export const ThemeTogglerWrapperEl = styled.button`
	display: flex;
	cursor: pointer;
	border-radius: 4px;
	border: none;
	outline: none;
	font-size: 24px;
	background-color: transparent;
	color: ${props => props.theme.primaryColor};

	&:active {
		transform: scale(0.95);
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.primaryColor};
	}
`
