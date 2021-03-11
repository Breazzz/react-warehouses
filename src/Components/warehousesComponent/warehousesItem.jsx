import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import WarehousesEditModal from "../Modals/warehousesEditModal";

const WarehousesItem = () => {
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
                    <PlaylistAddCheckIcon className={styles.icon}/><span>ТЦ Мармелад</span>
                </div>
                <div className={styles.body}>
                    <span>Продукты:</span>
                    <ul>
                        <li>Помидоры <span>18</span></li>
                        <li>Огурцы <span>23</span></li>
                        <li>Капуста <span>9</span></li>
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