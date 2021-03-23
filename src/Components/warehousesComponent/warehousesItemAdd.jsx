import React, { useState } from "react";
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import WarehousesAddModal from "../Modals/warehousesAddModal";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'

const WarehousesItemAdd = () => {
    const [modalShow, setModalShow] = useState(false);
    return (
        <>
            <div className={styles.itemAdd} onClick={() => setModalShow(true)}>
                <span>Создать склад</span>
                <AddCircleRoundedIcon className={styles.itemIcon} />
            </div>
            <WarehousesAddModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}

export default WarehousesItemAdd;