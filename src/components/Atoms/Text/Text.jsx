import React from 'react'
import PropTypes from 'prop-types'
import styles from './Text.module.scss';

const Text = ({
    text,
    color
}) => {
    return (
        <span className={`${styles.Text} ${styles[color]}`}>
            {text}
        </span>
    )
}

Text.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['default', 'primary', 'white']),
}

export default Text