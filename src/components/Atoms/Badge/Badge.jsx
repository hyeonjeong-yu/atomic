import React from 'react'
import PropTypes from 'prop-types'
import styles from './Badge.module.scss'

const Badge = ({
    status,
    message
}) => {
    return (
        <div
            className={`${styles.Badge} ${styles[status]}`}
        >
            {message}
        </div>
    )
}

Badge.propTypes = {
    /** 상태값을 나타냅니다. */
    status: PropTypes.oneOf(['pending', 'approved', 'rejected']).isRequired,
    /** 상태에 포함될 메세지입니다. */
    message: PropTypes.oneOf(['대기', '승인', '반려'])
};
export default Badge