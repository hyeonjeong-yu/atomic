import React from 'react'
import styles from './CardList.module.scss'
import CardHeader from '../../Molecules/CardHeader/CardHeader'
import CardItem from '../../Molecules/CardItem/CardItem'

const CardList = ({
    icon,
    title,
    size,
    showRightIcon,
    items,
    onItemClick
}) => {

    if(!items) {
        console.error(`cards ${items} not found`);
        return false;
    }

    return (
        <div className={`${styles.CardList} ${styles[size]}`}>
            <CardHeader
                icon={icon}
                title={title}
                showRightIcon={showRightIcon}
            />
            <div>
                {
                    items.map((item, index) => (
                        <CardItem
                            key={index}
                            headerTitle={title}
                            title={item.title}
                            date={item.date}
                            details={item.details}
                            onClick={onItemClick}
                        />
                    ))
                    // type을 prop 받아서, list>item 으로 구성할건지
                    // 다른 ui를 구성할건지 분기 처리
                    // header는 동일하기 때문에, 하단 영역만 변경 
                }
            
            </div>
        </div>
    )
}

export default CardList