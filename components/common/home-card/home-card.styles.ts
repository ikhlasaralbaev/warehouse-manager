import styled, { keyframes } from 'styled-components'
const fadeDownAnimate = keyframes`
	from {
		opacity: 0;
		transform: translateY(-30px);
	}

	to {
		opacity: 1;
		transform: none;
	}
`

const HomeCard = styled.div`
	background-color: ${props => props.theme.cardBgColor};
	border-radius: ${props => props.theme.cardBorderRadius};
	border: ${props => props.theme.border};
	padding: 25px;
	animation: ${fadeDownAnimate} 0.5s linear 1;
`

export default HomeCard
