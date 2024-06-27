import React from 'react'
import styles from './ModalFooter.module.scss'
import Button from '../../Atoms/Button/Button'

const ModalFooter = ({ onClose }) => {
    const handleConfirm = () => {
        console.log('확인 버튼 클릭시 수행 작업');
    }
    return (
        <div className={`${styles.ModalFooter}`}>
            <div>
                <Button onClick={onClose}>취소</Button>
                <Button onClick={handleConfirm}>확인</Button>
            </div>
        </div>
    )
}

export default ModalFooter