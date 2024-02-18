import styled from 'styled-components'

export const HomeCard = styled.div`
	background-color: ${props => props.theme.cardBgColor};
	border-radius: ${props => props.theme.cardBorderRadius};
	border: ${props => props.theme.border};
	padding: 25px;
`
