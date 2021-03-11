import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import WarehousesItem from "./warehousesItem";
import WarehousesItemAdd from "./warehousesItemAdd";

const Warehouses = () => {
    return (
        <div className='content'>
            <h2>Склады</h2>
            <div className={styles.warehousesWrap}>
                <WarehousesItemAdd />
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