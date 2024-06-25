import React from 'react'
import Icon from '../../Atoms/Icon/Icon'
import Text from '../../Atoms/Text/Text'
import styles from './CardHeader.module.scss'

const CardHeader = () => {
    return (
        <div className={`${styles.CardHeader}`}>
            <div>
                <Icon name='notice' />
                <Text>공지사항</Text>
            </div>
            <Icon name='arrow' />
        </div>
    )
}

export default CardHeader