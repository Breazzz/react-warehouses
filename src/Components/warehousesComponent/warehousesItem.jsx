import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import WarehousesEditModal from "../Modals/warehousesEditModal";
import {useSelector} from "react-redux";

const WarehousesItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const handleEdit = () => {
        setModalShow(false)
    }
    const products = useSelector(item => item.products)
    const filteredProducts = products.filter(elem => elem.warehouse === props.name);
    return (
        <>
            <WarehousesEditModal
                show={modalShow}
                onHide={handleEdit}
                name={props.name}
                products={filteredProducts}
            />
            <div className={styles.item}>
                <div className={styles.title}>
                    <PlaylistAddCheckIcon className={styles.icon}/><span>{props.name}</span>
                </div>
                {filteredProducts.length ? (
                    <div className={styles.body}>
                        <span>Товары:</span>
                        <ul>
                            {filteredProducts.map(({name, quantity}, index) => {
                                return <li key={index}>{name} <span>{quantity}</span></li>
                            })}
                        </ul>
                    </div>
                ) : (
                    <div className={styles.body}>
                        <span className={styles.empty}>Товаров нет</span>
                    </div>
                )}
                <div className={styles.bottom} onClick={() => setModalShow(true)}>
                    <EditOutlinedIcon className={styles.icon}/>Редактировать
                </div>
            </div>
        </>
    )
}

export default WarehousesItem;