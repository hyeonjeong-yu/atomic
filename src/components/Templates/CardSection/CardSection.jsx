import React from 'react'
import CardList from '../../Organism/CardList/CardList'
import styles from './CardSection.module.scss'

const CardSection = ({
    sections
}) => {
    return (
        <div className={`${styles.CardSection}`}>
            {
                sections.map((section, index) => (
                    <CardList
                        key={index}
                        icon={section.icon}
                        title={section.title}
                        size={section.size}
                        items={section.contents}
                    />
                ))
            }
        </div>
    )
}

export default CardSection