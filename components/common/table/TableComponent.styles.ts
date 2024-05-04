import styled from 'styled-components'

export const TableWrapper = styled.div`
	width: 100%;
	background-color: ${({ theme }) => theme.cardBgColor};
	border-radius: 16px;
	border: ${({ theme }) => theme.border};
	z-index: 10;
	min-height: 60vh;
	max-height: 60vh;
	overflow-y: auto;
`

export const Table = styled.table`
	width: 100%;
	background-color: ${({ theme }) => theme.cardBgColor};

	@media (max-width: 1000px) {
		display: block;
		overflow-x: auto;
		white-space: nowrap;
	}
`

export const Thead = styled.thead`
	position: sticky;
	width: 100%;
	top: 0;
	background-color: ${({ theme }) => theme.cardBgColor};
	backdrop-filter: blur(12px);
	border-bottom: ${({ theme }) => theme.border};
`

export const Tr = styled.tr`
	padding: 20px 30px;
	text-align: left;
	border-bottom: ${({ theme }) => theme.border};
`

export const Th = styled.th`
	padding: 20px 30px;
	text-align: left;
	color: ${({ theme }) => theme.textColor};
	&:last-child {
		text-align: right;
	}
`

export const Tbody = styled.tbody``

export const Td = styled.td`
	padding: 20px 30px;
	text-align: left;
	color: ${({ theme }) => theme.textColor};

	&:last-child {
		text-align: right;
	}
`
