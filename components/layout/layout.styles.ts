import styled from 'styled-components'

export const MainLayoutWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${props => props.theme.bgColor};
	transition: background-color 0.2s ease;
	position: relative;

	.top-img {
		position: absolute;
		top: 0;
		right: 0;
		width: 370px;
		height: 370px;
	}

	.bottom-img {
		position: absolute;
		bottom: 0;
		left: 0;
		width: 370px;
		height: 370px;
	}
`
