import React from 'react'
import styles from './CardList.module.scss'
import CardHeader from '../../Molecules/CardHeader/CardHeader'
import CardItem from '../../Molecules/CardItem/CardItem'

const CardList = ({ cards }) => {

    if(!cards) {
        console.error(`cards ${cards} not found`);
        return false;
    }

    return (
        <div className={`${styles.CardList}`}>
            <CardHeader />
            <div>
                {
                    cards.map((card, index) => (
                        <CardItem key={index} title={card.title} date={card.date} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList