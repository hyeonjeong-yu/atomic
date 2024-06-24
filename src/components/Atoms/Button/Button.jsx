import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

const buttonType = ['submit', 'button'];
const colorType = ['primary', 'secondary'];
const variantType = ['default', 'dashed', 'disabled', 'error'];

const Button = ({
    //initialize
    type,
    color,
    variant = 'default',
    size= 'medium',
    label,
    children,
    onClick
}) => {
    return (
        <button
            type={type}
            className={`${styles.Button} ${styles[color]} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
        >
            {label}
            {children}
        </button>
    )
}

// props의 타입 지정 (문자열, 필수)
Button.propTypes = {
    type: PropTypes.oneOf(buttonType).isRequired,
    color: PropTypes.oneOf(colorType),
    variant: PropTypes.oneOf(variantType),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string,
    // 자식 요소를 받을 수 있음 ex)icon
    children: PropTypes.node,
    onClick: PropTypes.func
}

export default Button