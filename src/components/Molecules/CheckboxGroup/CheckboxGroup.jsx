// 여러 개의 Checkbox를 관리하고,
// 전체선택, 해제 기능

import React, { useState } from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'
import { bool } from 'prop-types'

const CheckboxGroup = ({options, onChange}) => {

    const [checkedItems, setCheckedItems] = useState({})

    // All checkbox control
    const handelAllcheck = () => {
        const allChecked = Object.values(checkedItems).every((isChecked) => isChecked);

        const newCheckedItems = {};
        options.forEach((option) => {
            newCheckedItems[option.value] = !allChecked;
        });

        // status update
        setCheckedItems(newCheckedItems);
        onChange(newCheckedItems);
    }

    // checkbox control
    const handleChange = (value) => {
        const newCheckedItems = {
            ...checkedItems,
            [value]: !checkedItems[value],
        };

        // status update
        setCheckedItems(newCheckedItems);
        onChange(newCheckedItems);
    }
    return (
        <div>
            <Checkbox
                label='전체 선택/해제'
                checked={Object.values(checkedItems).every((isChecked) => isChecked)}
                onChange={handelAllcheck}
            />

            {
                // options 배열의 각 요소를 순회하고 Checkbox를 렌더링
                options && options.length > 0 && options.map((option) => {
                    return (
                        <Checkbox
                            key = {option.value}
                            label={option.label}
                            value={option.value}
                            // 선택되었으면 T, 안되었으면 F
                            checked={checkedItems[option.value] || false}
                            // checked={false}
                            onChange={() => handleChange(option.value)}
                        />
                    )
                })
            }
        </div>
    )
}

CheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string.isRequired
        })
    ),
    onChange: PropTypes.func.isRequired
  };

export default CheckboxGroup