import { fadeDownAnimate } from '@/components/page-components/categories-component/categories-component.styles'
import styled from 'styled-components'

const HomeCard = styled.div`
	background-color: ${props => props.theme.cardBgColor};
	border-radius: ${props => props.theme.cardBorderRadius};
	border: ${props => props.theme.border};
	padding: 25px;
	animation: ${fadeDownAnimate} 0.5s linear 1;
	z-index: 10;
`

export default HomeCard
