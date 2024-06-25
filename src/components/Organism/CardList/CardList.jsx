import React from 'react'
import styles from './CardList.module.scss'
import CardHeader from '../../Molecules/CardHeader/CardHeader'
import CardItem from '../../Molecules/CardItem/CardItem'

const CardList = ({ title, showRightIcon, items }) => {

    if(!items) {
        console.error(`cards ${items} not found`);
        return false;
    }

    return (
        <div className={`${styles.CardList}`}>
            <CardHeader title={title} showRightIcon={showRightIcon}/>
            <div>
                {
                    items.map((card, index) => (
                        <CardItem key={index} title={card.title} date={card.date} />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList