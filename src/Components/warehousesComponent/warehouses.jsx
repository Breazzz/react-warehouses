import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import WarehousesItem from "./warehousesItem";

const Warehouses = () => {
    return (
        <div className='content'>
            <h2>Склады</h2>
            <div className={styles.warehousesWrap}>
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
                <WarehousesItem />
            </div>
        </div>
    )
}

export default Warehouses;