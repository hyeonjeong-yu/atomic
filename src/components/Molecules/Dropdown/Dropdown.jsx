import React, { useState } from 'react'
import styles from './Dropdown.module.scss'
import Button from '../../Atoms/Button/Button'

const Dropdown = ({
    title,
    children,
    isOpen,
    toggleDropdown
}) => {

    //isOpen 상태 관리
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    //     // 열려있을 때만 ul 요소 렌더링
    // }
    return (
        <div className={`${styles.Dropdown}`}>
            <Button type='button' onClick={toggleDropdown}>
                {title}
            </Button>
            {   
                isOpen && (
                    <ul className='dropdown-menu'>
                        {children}
                    </ul>
                )
            }
        </div>
    )
}

export default Dropdown