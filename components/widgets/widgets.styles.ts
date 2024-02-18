import styled from 'styled-components'

export const HomeLineChartWrapper = styled.div`
	height: 200px;
	width: 100%;
`

export const HomePieChartWrapper = styled.div`
	height: 250px;
	width: 100%;
`

export const TotalBalanceCard = styled.div`
	span {
		color: ${({ theme }) => theme.secondaryTextColor};
		font-size: 11px;
	}
`
