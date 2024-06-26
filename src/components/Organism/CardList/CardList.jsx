import React from 'react'
import styles from './CardList.module.scss'
import CardHeader from '../../Molecules/CardHeader/CardHeader'
import CardItem from '../../Molecules/CardItem/CardItem'

const CardList = ({ icon, title, size, showRightIcon, items }) => {

    if(!items) {
        console.error(`cards ${items} not found`);
        return false;
    }

    return (
        <div className={`${styles.CardList} ${styles[size]}`}>
            <CardHeader icon={icon} title={title} showRightIcon={showRightIcon}/>
            <div>
                {
                    items.map((item, index) => (
                        <CardItem
                            key={index}
                            title={item.title}
                            date={item.date}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default CardList