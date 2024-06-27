import React from 'react'
import styles from './Modal.module.scss'
import Backdrop from '../../Atoms/Backdrop/Backdrop'
import ModalContainer from '../../Organism/ModalContainer/ModalContainer'

const Modal = ({
    modalType,
    title,
    description,
    contents,
    onClose,
}) => {
    return (
        <div className={`${styles.Modal}`}>
            <Backdrop onClick={onClose} />
            <ModalContainer
                modalType={modalType}
                title={title}
                description={description}
                contents={contents}
                onClose={onClose}
            />
        </div>
    )
}

export default Modal