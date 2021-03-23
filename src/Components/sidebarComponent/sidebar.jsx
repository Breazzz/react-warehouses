import React from 'react'
import {NavLink} from "react-router-dom";
import StoreOutlinedIcon from '@material-ui/icons/StoreOutlined';
import WeekendOutlinedIcon from '@material-ui/icons/WeekendOutlined';
import styles from './styles.module.scss'


function Sidebar() {
    const checkActive = (match, location) => {
        if(!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }
    return (
        <div className={styles.sidebar}>
            <NavLink exact to="/" activeClassName={styles.active} isActive={checkActive}>
                <StoreOutlinedIcon className={styles.icon}/><span>Склады</span>
            </NavLink>
            <NavLink exact to="/products" activeClassName={styles.active}>
                <WeekendOutlinedIcon className={styles.icon}/><span>Продукты</span>
            </NavLink>
        </div>
    );
}

export default Sidebar;
