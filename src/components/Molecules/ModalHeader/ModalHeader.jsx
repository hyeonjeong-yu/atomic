import React from 'react'
import styles from './ModalHeader.module.scss'
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'
import { RiCloseFill } from "react-icons/ri";

const ModalHeader = ({
    title,
    description,
    onClose
}) => {
    return (
        <div className={`${styles.ModalHeader}`}>
            <div>
                <Text variant='title3-bold'>{title}</Text>
                <Button
                    type='button'
                    icon={RiCloseFill} 
                    variant='hide' 
                    size='small-icon'
                    onClick={onClose}
                />
            </div>
            <Text variant='body2-gray'>{description}</Text>
        </div>
    )
}

export default ModalHeader