import React from 'react'
import Text from '../../Atoms/Text/Text'
import styles from './CardItem.module.scss'

const CardItem = ({
    headerTitle,
    title,
    date,
    details,
    onClick,
}) => {
    return (
        <div
            className={`${styles.CardItem}`}
            // headerTitle, title, date, details 전달
            onClick={() => onClick({headerTitle, title, date, details})}
        > 
            <Text variant='body2'>{title}</Text>
            <Text variant='body3-gray'>{date}</Text>
        </div>
    )
}

export default CardItem