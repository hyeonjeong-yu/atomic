import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';

import { Exit, Heart, Pencil } from './svg';

const iconComponents = { Exit, Heart, Pencil };

const Icon = ({
    iconType, color
}) => {
        const IconComponent = iconComponents[iconType];

    // 오류 처리
    if(!IconComponent) {
        console.error(`Icon ${iconType} not found`);
        return false;
    }

    return (
        // <IconComponent data-testid='icon' className={`${styles[color]}`}/>
        <IconComponent data-testid='icon' style={{fill: color}}/>
    )
}

Icon.propTypes = {
    iconType: PropTypes.oneOf(['Exit', 'Heart', 'Pencil']).isRequired,
    color: PropTypes.string
}

export default Icon

