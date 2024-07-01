import React from 'react'
import { useState } from 'react'
import Icon from '../../Atoms/Icon/Icon'
import Input from '../../Atoms/Input/Input'
import styles from './InputWithIcon.module.scss'

const InputWithIcon = ({
    iconName = 'search',
    type ='text',
    placeholder ='placeholder'
}) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className={`${styles.InputWithIcon}`}>
            <Icon name={iconName} className={`${inputValue ? styles.iconActive: ''}`} />
            <Input type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputWithIcon