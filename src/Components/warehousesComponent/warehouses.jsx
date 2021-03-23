import React from "react";
import { useSelector } from "react-redux";
import WarehousesItem from "./warehousesItem";
import WarehousesItemAdd from "./warehousesItemAdd";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'

const Warehouses = () => {
    const warehouses = useSelector(state => state.warehouses)

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