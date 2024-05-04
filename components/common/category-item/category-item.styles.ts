import styled from 'styled-components'

export const CategoryItemWrapper = styled.li`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 20px;

	.left-side {
		h2 {
			font-size: 22px;
			color: ${props => props.theme.textColor};
			font-weight: 500;
		}

		span {
			color: ${props => props.theme.secondaryTextColor};
			font-size: 18px;
		}
	}

	.amount {
		font-size: 22px;
		font-weight: bold;

		&.expense {
			color: ${props => props.theme.redColor};
		}

		&.income {
			color: ${props => props.theme.greenColor};
		}
	}
`
