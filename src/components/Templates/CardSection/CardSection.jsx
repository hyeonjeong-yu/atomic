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
                        title={section.title}
                        items={section.lists}
                    />
                ))
            }
        </div>
    )
}

export default CardSection