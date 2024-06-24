import React from 'react'
import styles from './Dropdown.module.scss'
import Button from '../../Atoms/Button/Button'

const Dropdown = ({
    title,
    children,
    isOpen,
    toggleDropdown
}) => {
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