import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Checkbox.module.scss'

const Checkbox = ({
    label,
    checked,
    onChange
}) => {
    const [isChecked, setIsChecked] = useState(checked);

    const handleChecked = (e) => {
        const newValue = e.target.checked;
        setIsChecked(newValue);
        if (onChange) {
            onChange(newValue);
        }
    }

    return (
        <label>
            <input
                type ='checkbox'
                label = {label}
                checked = {isChecked}
                onChange = {handleChecked}
                data-testid='checkbox'
            />
            {label}
        </label>
    )
}

Checkbox.propTypes = {
    /** label를 등록합니다 */
    label: PropTypes.string,

    /** true/false를 지정합니다 */
    checked: PropTypes.bool,

    /** onChange 될 때를 나타냅니다  */
    onChange: PropTypes.func,
}

export default Checkbox