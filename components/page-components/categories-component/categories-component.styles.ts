import styled, { keyframes } from 'styled-components'

export const fadeDownAnimate = keyframes`
	from {
		opacity: 0;
		transform: translateY(-30px);
	}

	to {
		opacity: 1;
		transform: none;
	}
`

export const CategoriesComponentWrapper = styled.div`
	width: 80%;
	margin: 0 auto;
	position: relative;
	top: 80px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	animation: ${fadeDownAnimate} 0.5s linear 1;
`

export const CategoriesHeadWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.cardBgColor};
	border-radius: 16px;
	border: ${({ theme }) => theme.border};
	padding: 20px 30px;
	h1 {
		font-size: clamp(1.375rem, 1.2914rem + 0.3822vw, 1.75rem);
		font-weight: 600;
		text-decoration: none;
		color: ${({ theme }) => theme.textColor};
	}
`
