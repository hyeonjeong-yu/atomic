import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'
import { IconContext } from 'react-icons';

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
    icon: Icon,
    iconSrc,
    disabled,
    onClick
}) => {
    return (
        <button
            type = {type}
            className = {`${styles.Button}
                        ${styles[color]}
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
                <img src={iconSrc} className='svg-icons'/>
            )}
            {label || children}
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
    children: PropTypes.node, 
    icon: PropTypes.object,
    iconSrc: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button