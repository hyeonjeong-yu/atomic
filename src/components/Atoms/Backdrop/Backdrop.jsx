import React from 'react'
import styles from './Backdrop.module.scss'

export const Backdrop = ({onClick}) => {
    return (
        <div className={`${styles.Backdrop}`} onClick={onClick}></div>
    )
}
