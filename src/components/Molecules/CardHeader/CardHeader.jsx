import React from 'react'
import Icon from '../../Atoms/Icon/Icon'
import Text from '../../Atoms/Text/Text'
import styles from './CardHeader.module.scss'

const CardHeader = ({ title, showRightIcon }) => {
    return (
        <div className={`${styles.CardHeader}`}>
            <div>
                <Icon name='notice' color='purple' />
                <Text variant='body3-bold'>{title}</Text>
            </div>
            {
                showRightIcon && <Icon name='arrow' color='gray' />
            }
        </div>
    )
}

export default CardHeader