import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { IconContext } from 'react-icons';

const buttonType = ['submit', 'button'];
const variantType = ['primary', 'secondary'];
const stateType = ['default', 'hover', 'disabled', 'error'];
// const sizeType = ['small-icon', 'small', 'medium', 'large'];

const Button = ({
    //initialize
    type,
    variant,
    state,
    size,
    label,
    children,
    icon: Icon,
    iconSrc,
    disabled,
    onClick
}) => {
    return (
        <button
            type = {type}
            className = {`${styles.Button}
                        ${styles[state]}
                        ${styles[variant]}
                        ${styles[size]}
                        ${disabled ? 'disabled' : ''}
                        `}
            onClick = {onClick}
        >   
            { Icon && (
                <IconContext.Provider value = {{ className: 'react-icons'}}>
                    <Icon />
                </IconContext.Provider>
            )}
            { iconSrc && (
                <img src={iconSrc}/>
            )}
            {label || children}
        </button>
    )
}

// props의 타입 지정 (문자열, 필수)
Button.propTypes = {
    type: PropTypes.oneOf(buttonType).isRequired,
    variant: PropTypes.oneOf(variantType),
    state: PropTypes.oneOf(stateType),
    size: PropTypes.string,
    label: PropTypes.string, 
    children: PropTypes.node, 
    icon: PropTypes.object,
    iconSrc: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button