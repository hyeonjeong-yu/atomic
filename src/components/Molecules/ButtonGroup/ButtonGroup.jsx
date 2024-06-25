import React from 'react'
import PropTypes from 'prop-types';
import Button from '../../Atoms/Button/Button';

const ButtonGroup = ({buttons}) => {
    return (
        <div>
            {
                buttons.map((button, index) => (
                    <Button key={index} {...button} />
                ))
            }
        </div>
    )
}

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['submit', 'button']).isRequired,
        color: PropTypes.oneOf(['primary', 'secondary']),
        variant: PropTypes.oneOf(['default', 'dashed', 'disabled', 'error']),
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        label: PropTypes.string,
        children: PropTypes.node,
        icon: PropTypes.elementType,
        iconSrc: PropTypes.string,
        disabled: PropTypes.bool,
        onClick: PropTypes.func.isRequired,
        })
    ).isRequired,
};

export default ButtonGroup