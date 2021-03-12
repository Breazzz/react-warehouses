import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import WarehousesItem from "./warehousesItem";
import WarehousesItemAdd from "./warehousesItemAdd";

const warehouses = [
    {
        name: 'ТЦ Мармелад',
        products: [
            {
                name: 'Сникерс',
                count: 23
            },
            {
                name: 'Баунти',
                count: 8
            },
            {
                name: 'Натс',
                count: 19
            },
        ]
    },
    {
        name: 'Центр. рынок',
        products: [
            {
                name: 'Помидоры',
                count: 6
            },
            {
                name: 'Огурцы',
                count: 1
            },
            {
                name: 'Хлеб',
                count: 13
            },
            {
                name: 'Фунчоза',
                count: 23
            },
        ]
    },
    {
        name: 'Радуга',
        products: [
            {
                name: 'Бензонасос на акцент',
                count: 1
            },
            {
                name: 'Стартер',
                count: 9
            },
        ]
    },
]

const Warehouses = () => {
    return (
        <div className='content'>
            <h2>Склады</h2>
            <div className={styles.warehousesWrap}>
                <WarehousesItemAdd />
                {warehouses.map(({name, products}, index) => {
                    return <WarehousesItem name={name} products={products} key={index} />
                })}
            </div>
        </div>
    )
}

export default Warehouses;