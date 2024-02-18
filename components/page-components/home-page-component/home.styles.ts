import styled from 'styled-components'

export const HomeWrapper = styled.div`
	width: 100%;
	margin: 100px 0;

	.home-title {
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin-bottom: 60px;
		h1 {
			font-size: 40px;
			color: ${props => props.theme.textColor};
			display: flex;
			font-weight: 400;
			text-align: center;
			display: flex;
			gap: 10px;
			justify-content: center;
			margin-bottom: 10px;

			b {
				font-weight: 700;
			}
		}

		p {
			font-size: 30px;
			color: ${props => props.theme.textColor};
			font-weight: 400;
			text-align: center;
		}
	}
`
