import React from 'react'
import { useTable } from 'react-table'
import TableCell from '../../Atoms/TableCell/TableCell'

const Table = ({
    columns,
    data
}) => {
    const {
        getTableProps,
        headerGroups,
        getTableBodyProps,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    return (
        <table {...getTableProps()}>
            <thead>
                { headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                        {headerGroup.headers.map(column => (
                            <TableCell key={column.id}
                                    value={column.render('Header')}
                                    isHeader={true}
                            />
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps}>
                { rows.map(row => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()} key={row.id}>
                            { row.cells.map(cell => (
                                <TableCell key={cell.id}
                                        value={cell.render('Cell')}
                                        isHeader={false}
                                />
                            ))}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table