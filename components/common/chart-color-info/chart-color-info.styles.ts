import styled from 'styled-components'

export const ChartColorInfoWrapper = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;

	.color-item {
		display: flex;
		gap: 4px;
		align-items: center;

		.color {
			width: 11px;
			height: 11px;
			border-radius: 50%;
		}

		span {
			color: ${props => props.theme.textColor};
			font-size: 12px;
			font-weight: medium;
		}
	}
`
