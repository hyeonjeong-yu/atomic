import React from 'react'
import styles from './Modal.module.scss'
import Backdrop from '../../Atoms/Backdrop/Backdrop'
import ModalContainer from '../../Organism/ModalContainer/ModalContainer'

const Modal = ({
    modalType,
    title,
    subtitle,
    contents,
    onClose,
}) => {
    return (
        <div className={`${styles.Modal}`}>
            <Backdrop onClick={onClose} />
            <ModalContainer
                modalType={modalType}
                title={title}
                subtitle={subtitle}
                contents={contents}
                onClose={onClose}
            />
        </div>
    )
}

export default Modal