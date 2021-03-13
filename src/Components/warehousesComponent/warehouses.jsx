import React, {useEffect} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import WarehousesItem from "./warehousesItem";
import WarehousesItemAdd from "./warehousesItemAdd";

const Warehouses = (props) => {
    return (
        <div className='content'>
            <h2>Склады</h2>
            <div className={styles.warehousesWrap}>
                <WarehousesItemAdd warehouses={props.warehouses} />
                {props.warehouses.map(({name, products}, index) => {
                    return <WarehousesItem name={name} products={products} key={index} />
                })}
            </div>
        </div>
    )
}

export default Warehouses;