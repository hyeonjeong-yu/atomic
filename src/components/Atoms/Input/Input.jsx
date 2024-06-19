import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'

const Input = ({
    type,
    value,
    onChange,
    placeholder,
    className,
    id,
    name,
    required
}) => {

    const handle = (e) => {
        console.log(e.target.value);
    }

    return (
        <input 
            type = {type}
            value = {value}
            onChange = {onChange}
            placeholder = {placeholder}
            className = {`${styles.Input}`}
            id = {id}
            name = {name}
            required = {required}
            data-testid = 'input'
        />
    )
}

Input.propTypes = {
    type: PropTypes.oneOf([
        'text',
        'password', 
        'number',
        'email',
        'radio',
        'file',
        'search',
        'hidden',
        'reset',
        'submit'
    ]),
    value: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool
}

export default Input