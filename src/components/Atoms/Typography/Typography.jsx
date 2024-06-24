import React from 'react'
import PropTypes from 'prop-types'
import styles from './Typography.module.scss'

const Typography = ({variant}) => {
    return (
        <div className={`${styles.Typography} ${styles[variant]}`}>Typography</div>
    )
}

Typography.propTypes = {
    variant: PropTypes.string,
}
export default Typography