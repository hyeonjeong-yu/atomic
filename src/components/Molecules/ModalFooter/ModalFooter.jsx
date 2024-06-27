import React from 'react'
import styles from './ModalFooter.module.scss'
import Button from '../../Atoms/Button/Button'

const ModalFooter = ({ onCancel, onConfirm }) => {
    return (
        <div className={`${styles.ModalFooter}`}>
            <div>
                <Button onClick={onCancel}>취소</Button>
                <Button onClick={onConfirm}>확인</Button>
            </div>
        </div>
    )
}

export default ModalFooter