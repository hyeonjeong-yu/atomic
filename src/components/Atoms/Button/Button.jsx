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
    onClick = () => {},
}) => {
    return (
        <button
            type={type}
            className={`${styles.Button} ${styles[color]} ${styles[variant]} ${styles[size]}`}
        >
            {label}
            {children}
        </button>
    )
}

// props의 타입 지정 (문자열, 필수)
Button.propTypes = {
    type: PropTypes.oneOf(buttonType),
    color: PropTypes.oneOf(colorType),
    variant: PropTypes.oneOf(variantType),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    children: PropTypes.node
    // 자식 요소를 받을 수 있음 ex)icon
    // onClick: PropTypes.func,
}

export default Button