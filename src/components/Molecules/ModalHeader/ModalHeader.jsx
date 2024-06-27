import React from 'react'
import styles from './ModalHeader.module.scss'
import Text from '../../Atoms/Text/Text'
import Button from '../../Atoms/Button/Button'
import { RiCloseFill } from "react-icons/ri";

const ModalHeader = ({
    title,
    subtitle,
    onClose
}) => {

    // const onClose = () => {
    //     console.log('a');
    // }
    return (
        <div className={`${styles.ModalHeader}`}>
            <div>
                <Text>{title}</Text>
                <Button
                    type='button'
                    icon={RiCloseFill} 
                    variant='hide' 
                    size='toosmall' 
                    onClick={onClose}
                />
            </div>
            <Text>{subtitle}</Text>
        </div>
    )
}

export default ModalHeader