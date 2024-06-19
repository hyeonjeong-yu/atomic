import React from 'react'
import Button from '../../Atoms/Button/Button'
import Icon from '../../Atoms/Icon/Icon'

// Button > Icon
const IconButton = () => {
    return (
        <Button size='medium' color='primary' label='Like'>
            <Icon iconType='Heart' color='white'/>
        </Button>
    )
}

export default IconButton