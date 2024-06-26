import React from 'react'
import Text from '../../Atoms/Text/Text'
import styles from './CardItem.module.scss'

const CardItem = ({
    title,
    date
}) => {
    return (
        <div className={`${styles.CardItem}`}>
            <Text variant='body4'>{title}</Text>
            <Text variant='body5'>{date}</Text>
        </div>
    )
}

export default CardItem