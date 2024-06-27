import React from 'react'
import styles from './ModalHeader.module.scss'
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'

const ModalHeader = ({
    title,
    onClose
}) => {
    return (
        <div className={`${styles.ModalHeader}`}>
            <div>
                <Text>{title}</Text>
                <Text>전달전달드립니다.</Text>
            </div>
            <Button icon='arrow' onClick={onClose} />
        </div>
    )
}

export default ModalHeader