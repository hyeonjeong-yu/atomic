import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.scss'
import { IconContext } from 'react-icons';

const Input = ({
    type,
    value,
    onChange,
    placeholder,
    icon: Icon,
    id,
    name,
    required
}) => {

    // Focus 관리
    const [isFocused, setIsFocused] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleFocus = (e) => {
        setIsFocused(true);
    }
    const handleBlur = (e) => {
        setIsFocused(false);
    }

    return (
        <div className = {`${styles.Input}`}>
            {
                Icon && (
                    // 입력이 발생하거나 포커스를 벗어나면 iconHidden
                    <div className={`${styles.icon} ${isFocused || inputValue ? styles.iconHidden : styles.iconVisible}`}>
                        <IconContext.Provider value = {{ className: 'react-icons'}}>
                            <Icon />
                        </IconContext.Provider> 
                    </div>
                )
            }
            <input 
                type = {type}
                value = {value}
                onChange = {onChange}
                placeholder = {isFocused ? '' : placeholder}
                // icon의 유무로 style 다르게 설정
                className = {`${Icon ? styles.inputWithIcon : styles.inputWithoutIcon}`}
                id = {id}
                name = {name}
                required = {required}
                onFocus={handleFocus}
                onBlur={handleBlur}
                data-testid = 'input'
            />
        </div>
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
    icon: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool
}

export default Input