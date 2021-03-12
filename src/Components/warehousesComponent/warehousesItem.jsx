import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import WarehousesEditModal from "../Modals/warehousesEditModal";

const WarehousesItem = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const handleEdit = () => {
        setModalShow(false)
    }
    return (
        <>
            <WarehousesEditModal
                show={modalShow}
                onHide={handleEdit}
            />
            <div className={styles.item}>
                <div className={styles.title}>
                    <PlaylistAddCheckIcon className={styles.icon}/><span>{props.name}</span>
                </div>
                <div className={styles.body}>
                    <span>Продукты:</span>
                    <ul>
                        {props.products.map(({name, count}, index) => {
                            return <li key={index}>{name} <span>{count}</span></li>
                        })}
                    </ul>
                </div>
                <div className={styles.bottom} onClick={() => setModalShow(true)}>
                    <EditOutlinedIcon className={styles.icon}/>Редактировать
                </div>
            </div>
        </>
    )
}

export default WarehousesItem;