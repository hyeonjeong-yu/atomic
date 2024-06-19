import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({
    label,
    name,
    checked,
    onChange
}) => {
    return (
        <label>
            <input
                type = 'radio'
                label = {label}
                name = {name}
                checked = {checked}
                onChange={onChange}
                data-testid='radio'
            />
            {label}
        </label>
    )
}

Radio.propTypes = {
    /** label를 등록합니다 */
    label: PropTypes.string,

    /** true/false를 지정합니다 */
    checked: PropTypes.bool,

    /** onChange 될 때를 나타냅니다  */
    onChange: PropTypes.func,
}

export default Radio