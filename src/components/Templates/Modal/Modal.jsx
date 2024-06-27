import React from 'react'
import styles from './Modal.module.scss'
import Backdrop from '../../Atoms/Backdrop/Backdrop'
import ModalContainer from '../../Organism/ModalContainer/ModalContainer'

const Modal = ({
    type,
    title,
    subtitle,
    contents,
    actions,
    onClose,
    onCancel,
    onConfirm
}) => {

    // 조건부로 렌더링
    // confirm 은 body가 없음
    // 일반은 footer(button)이 없음
    return (
        <div className={`${styles.Modal}`}>
            <Backdrop onClick={onClose} />
            <ModalContainer
                type={type}
                title={title}
                subtitle={subtitle}
                contents={contents}
                actions={actions}
                onClose={onClose}
                onCancel={onCancel}
                onConfirm={onConfirm}
            />
        </div>
    )
}

export default Modal