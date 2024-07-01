import React from 'react'
import Icon from '../../Atoms/Icon/Icon'
import Text from '../../Atoms/Text/Text'
import styles from './CardHeader.module.scss'

const CardHeader = ({ icon, title, showRightIcon }) => {
    return (
        <div className={`${styles.CardHeader}`}>
            <div>
                {/* Icon 바로 렌더링 */}
                <Icon name={icon} color='purple' />
                <Text variant='body1-bold'>{title}</Text>
            </div>
            {
                showRightIcon && <Icon name='arrow' color='gray' />
            }
        </div>
    )
}

export default CardHeader