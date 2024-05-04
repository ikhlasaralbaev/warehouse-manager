'use client'

import { FC } from 'react'
import { useTable } from 'react-table'
import {
	Table,
	TableWrapper,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
} from './TableComponent.styles'

interface Props {
	columns: any
	data: any[]
}

const TableComponent: FC<Props> = ({ columns, data }) => {
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({
			columns,
			data,
		})

	return (
		<TableWrapper>
			<Table {...getTableProps()}>
				<Thead>
					{headerGroups.map(headerGroup => (
						<Tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
							{headerGroup.headers.map(column => (
								<Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row)
						return (
							<Tr {...row.getRowProps()} key={row.id}>
								{row.cells.map(cell => {
									return (
										<Td {...cell.getCellProps()} key={cell.value}>
											{cell.render('Cell')}
										</Td>
									)
								})}
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</TableWrapper>
	)
}

export default TableComponent
