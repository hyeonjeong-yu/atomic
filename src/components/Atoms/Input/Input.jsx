import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames';
import styles from './Input.module.scss'
import { IconContext } from 'react-icons';
import { LuGavel } from 'react-icons/lu';

const Input = ({
    type,
    value,
    label,
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

    // debugging
    // console.log('label:', label);
    // console.log('icon:', Icon);

    const inputClassNames = classNames(
        styles.Input,
        {
            [styles.InputWithLabel]: label && !Icon,
            [styles.InputWithIcon]: Icon && !label,
            [styles.InputWithIconLabel]: label && Icon,

        }
    )

    return (
        <div className = {inputClassNames}>
            {
                label && (
                    <label htmlFor={id} className={`${styles.label}`}>
                        {label}
                    </label>
                )
            }
            <div className={`${styles.inputwrapper}`}>
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
                    className = {`${styles.input}`}
                    id = {id}
                    name = {name}
                    required = {required}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    data-testid = 'input'
                />
            </div>
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
    label: PropTypes.string,
    icon: PropTypes.object,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool
}

export default Input