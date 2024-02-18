import styled from 'styled-components'

export const HeaderWrapperEl = styled.header`
	position: sticky;
	width: 80%;
	top: 20px;
	margin: 0 auto;
	background-color: ${props => props.theme.cardBgColor};
	border: ${props => props.theme.border};
	border-radius: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 22px 40px;
	backdrop-filter: blur(4px);
	justify-content: space-between;

	.header-logo {
		color: ${props => props.theme.textColor};
		font-size: 28px;
		font-weight: 600;
		text-decoration: none;
		transition: color 0.2s ease;

		&:hover {
			color: ${props => props.theme.primaryColor};
		}
	}

	.header-navigation {
		display: flex;
		align-items: center;
		gap: 20px;

		.header-menu {
			display: flex;
			gap: 14px;

			li {
				a {
					color: ${props => props.theme.secondaryTextColor};
					text-decoration: none;
					font-size: 16px;
					font-weight: 500;
					transition: color 0.2s ease;

					&:hover {
						color: ${props => props.theme.primaryColor};
					}
				}
			}
		}
	}
`
