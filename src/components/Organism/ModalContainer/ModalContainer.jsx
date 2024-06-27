import React from 'react'
import styles from './ModalContainer.module.scss'
import ModalHeader from '../../Molecules/ModalHeader/ModalHeader'
import ModalBody from '../../Molecules/ModalBody/ModalBody'
import ModalFooter from '../../Molecules/ModalFooter/ModalFooter'

const ModalContainer = ({
    modalType,
    title,
    subtitle,
    onClose,
    contents,
}) => {
    return (
        <div className={`${styles.ModalContainer}`}>
            <ModalHeader
                title={title}
                subtitle={subtitle}
                onClose={onClose}
            />
            { modalType === 'default' && contents && <ModalBody contents={contents} /> }
            { modalType === 'confirm' && <ModalFooter onClose={onClose}/> }
        </div>
    )
}

export default ModalContainer