import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react';

const Radio = ({
    label,
    name,
    checked,
    onChange
}) => {
    const [isChecked, setIsChecked] = useState('');

    const handleChecked = (e) => {
        const newValue = e.target.checked;
        setIsChecked(newValue);
    }

    return (
        <label>
            <input
                type = 'radio'
                label = {label}
                name = {name}
                checked = {checked}
                onChange={onChange}
                value={label}
            />
            {label}
        </label>
    )
}

Radio.propTypes = {
    /** label를 등록합니다 */
    label: PropTypes.string.isRequired,

    /** true/false를 지정합니다 */
    checked: PropTypes.bool.isRequired,

    /** onChange 될 때를 나타냅니다  */
    onChange: PropTypes.func,
}

export default Radio