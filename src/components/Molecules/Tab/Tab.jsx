import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Tab.module.scss'

const Tab = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index) => {
        setActiveTab(index);
    }

    return (
        <div>
            {
                tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`${index === activeTab ? styles.active : ''}`}
                        onClick={() => handleTabClick(index)}
                    >
                        {tab.label}
                    </button>
                ))
            }
            <div>
                { tabs[activeTab].content }
            </div>
        </div>
    )
}

export default Tab