import React from 'react'
import PropTypes from 'prop-types'
import styles from './Alert.module.scss'

const Alert = ({type, message}) => {
    return (
        <div className={`${styles.Alert} ${styles[type]}`}>
            {message}
        </div>
    )
}

Alert.propTypes = {
    /** Alert의 타입을 나타냅니다. */
    type: PropTypes.oneOf(['note', 'warning', 'error']),
    /** Alert에 표시될 필수 message입니다. */
    message: PropTypes.string.isRequired
}

export default Alert