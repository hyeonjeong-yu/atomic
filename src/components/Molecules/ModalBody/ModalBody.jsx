import React from 'react'
import styles from './ModalBody.module.scss'
import Text from '../../Atoms/Text/Text'

const ModalBody = ({
    contents
}) => {
    console.log(contents)
    return (
        <div className={`${styles.ModalBody}`}>
            <div className={`${styles.headerContent}`}>
                <Text>{contents.title}</Text>
                <Text>{contents.date}</Text>
            </div>
            <div className={`${styles.bodyContent}`}>
                <Text>{contents.details}</Text>
            </div>
        </div>
    )
}

export default ModalBody