import React from 'react'
import styles from './ModalContainer.module.scss'
import ModalHeader from '../../Molecules/ModalHeader/ModalHeader'
import ModalBody from '../../Molecules/ModalBody/ModalBody'
import ModalFooter from '../../Molecules/ModalFooter/ModalFooter'

const ModalContainer = ({
    type, //default, confirm
    title,
    subtitle,
    contents,
    onClose,
    onCancel,
    onConfirm
}) => {
    return (
        <div className={`${styles.ModalContainer}`}>
            <ModalHeader title={title} subtitle={subtitle} onClose={onClose} />
            { contents
                && <ModalBody contents={contents} />
            }
            { type === 'confirm'
                && <ModalFooter onCancel={onCancel} onConfirm={onConfirm}/>
            }
        </div>
    )
}

export default ModalContainer