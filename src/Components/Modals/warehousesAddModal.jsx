import React from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../productsComponent/styles.module.scss";
import {TextField} from "@material-ui/core";

export default function WarehousesAddModal(props) {
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
                />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={props.onHide} variant="primary">Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
}