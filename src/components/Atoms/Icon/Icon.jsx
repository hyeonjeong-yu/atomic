import React from 'react';
import PropTypes from 'prop-types';
import styles from './Icon.module.scss';
import { RiMegaphoneFill } from "react-icons/ri";
import { IoIosArrowForward } from "react-icons/io";

import { Exit, Heart, Pencil } from './svg';

const iconComponents = { Exit, Heart, Pencil };

const Icon = ({
    iconType,
    color,
    name
}) => {
    // svg파일로 저장해놓은 것
    // const IconComponent = iconComponents[iconType];

    // react-icons prop으로 받은 것
    const iconList = {
        notice: RiMegaphoneFill,
        arrow: IoIosArrowForward,
    }
    const IconComponent = iconList[name];

    if(!IconComponent) {
        console.error(`Icon not found`);
        return false;
    }

    return (
        <IconComponent data-testid='icon' className={`${styles[color]}`}/>
    )
}

// Icon.propTypes = {
//     iconType: PropTypes.oneOf(['Exit', 'Heart', 'Pencil']),
//     color: PropTypes.string
// }

export default Icon

