import React from 'react'

const TableCell = ({
    value,
    isHeader
}) => {
    const Tag = isHeader? 'th' : 'td';

    return (
        <Tag>
            {value}
        </Tag>
    )
}

export default TableCell