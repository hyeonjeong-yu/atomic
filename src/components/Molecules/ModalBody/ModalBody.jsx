import React from 'react'
import styles from './ModalBody.module.scss'

const ModalBody = ({
    contents
}) => {
    return (
        <div className={`${styles.ModalBody}`}>
            <p>{contents}</p>
        </div>
    )
}

export default ModalBody