import React from 'react'
import PropTypes from 'prop-types'
import styles from './Badge.module.scss'

const Badge = ({
    status,
    color
}) => {
    return (
        <div
            className={`${styles.Badge} ${styles[color]}`}
        >
            {status}
        </div>
    )
}

Badge.propTypes = {
    /** 상태값을 나타냅니다. */
    status: PropTypes.string.isRequired,
    /** 상태값에 따라 색상이 변경됩니다. */
    color: PropTypes.string,
};
export default Badge