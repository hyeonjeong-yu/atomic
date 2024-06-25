import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.scss'

const Text = ({variant, children}) => {
    return (
        <span className={`${styles.Text} ${styles[variant]}`}>{children}</span>
    )
}

Text.propTypes = {
    variant: PropTypes.string,
}
export default Text