import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import WarehousesAddModal from "../Modals/warehousesAddModal";

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