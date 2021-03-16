import React, {useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../productsComponent/styles.module.scss";
import {TextField} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {deleteWarehouses} from "../../Redux/actions/warehouses";
import {changeWarehouses} from "../../Redux/actions/warehouses";
import {toast} from "react-toastify";

export default function WarehousesEditModal(props) {
    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouses)
    const [value, setValue] = useState('')
    const deleteWarehouse = () => {
        dispatch(deleteWarehouses(props))
        toast.dark(`Склад "` + props.name + `" удалён`)
        props.onHide()
    }
    const changeWarehouse = () => {
        if (value.length > 0) {
            dispatch(changeWarehouses(props))
            props.onHide()
            toast.success(`Склад "` + props.name + `" переименован на "` + value + `"`)
        } else {
            toast.error('Заполните новое имя')
        }
    }
    useEffect(() => {
        if(localStorage.getItem('warehouses')){
            localStorage.setItem('warehouses', JSON.stringify(warehouses))
        }
    }, [warehouses])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className="modal-title-name">{props.name}</span> <span className="modal-title-subtitle">(изменить или удалить склад)</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextField
                id="standard-basic"
                label="Новое имя"
                type='text'
                value={value}
                variant="outlined"
                className={styles.inputNameWarehouses}
                onChange={e => setValue(e.target.value)}
            />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={deleteWarehouse} variant="danger">Удалить</Button>
                <Button onClick={changeWarehouse} variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}