import styled from 'styled-components'

export const HomeLineChartWrapper = styled.div`
	height: 250px;
	width: 100%;
`

export const HomePieChartWrapper = styled.div`
	height: 250px;
	width: 100%;
	margin: 10px 0;
`

export const TotalBalanceCard = styled.div`
	display: flex;
	flex-direction: column;
	span {
		color: ${({ theme }) => theme.textColor};
		opacity: 0.7;
		font-size: 11px;
		margin-bottom: 3px;
	}

	h1 {
		color: ${({ theme }) => theme.textColor};
		font-size: 30px;
		font-weight: 700;
		margin-bottom: 2px;
		line-height: 40px;
	}

	b {
		color: ${({ theme }) => theme.greenColor};
		font-weight: 700;
		font-size: 14px;
	}
`

export const HomeCategoriesWrapper = styled.ul`
	max-height: 200px;
	overflow-y: auto;

	&::-webkit-scrollbar {
		display: none;
	}
`
