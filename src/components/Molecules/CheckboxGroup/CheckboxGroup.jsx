// 여러 개의 Checkbox를 관리하고,
// 전체선택, 해제 기능

import React, { useState } from 'react'
import Checkbox from '../../Atoms/Checkbox/Checkbox'

const CheckboxGroup = ({options, onChange}) => {

    const [checkedItems, setCheckedItems] = useState({})
    return (
        <div>
            <Checkbox label='전체선택' />
            {
                
            }
        </div>
    )
}

export default CheckboxGroup