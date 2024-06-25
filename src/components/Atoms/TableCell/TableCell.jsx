import React from 'react'

const TableCell = ({
    children,
    isHeader
}) => {
    const Tag = isHeader? 'th' : 'td';

    return (
        <Tag>
            {children}
        </Tag>
    )
}

export default TableCell