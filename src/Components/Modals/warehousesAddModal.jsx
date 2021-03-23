import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {useDispatch, useSelector } from "react-redux";
import { TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { addWarehouses } from "../../Redux/actions/warehouses";
import warehouses from "../../Redux/reducers/warehouses";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../productsComponent/styles.module.scss";

export default function WarehousesAddModal(props) {
    const dispatch = useDispatch()
    const warehouses = useSelector(state => state.warehouses)
    const [name, setName] = useState('');
    const newWarehouse = {
        name: name,
        products: []
    }
    const handleAdd = () => {
        if (name.length > 0) {
            dispatch(addWarehouses(newWarehouse))
            toast.success('Склад успешно добавлен')
            setName('')
            props.onHide()
            warehouses.push(newWarehouse)
            localStorage.getItem('warehouses') && localStorage.setItem('warehouses', JSON.stringify(warehouses))
        } else {
            toast.error('Введите имя склада!');
        }
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавление склада
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TextField
                    id="standard-basic"
                    label="Наименование склада"
                    type='text'
                    variant="outlined"
                    className={styles.inputNameWarehouses}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={handleAdd} variant="primary">Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}