import React from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../productsComponent/styles.module.scss";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

export default function ProductsEditModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ремень ГРМ
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form noValidate autoComplete="off" className={styles.productForm}>
                    <TextField
                        id="standard-basic"
                        label="Название"
                        type='text'
                        variant="outlined"
                        className={styles.inputName}
                    />
                    <FormControl variant="outlined" className={styles.inputSelect}>
                        <InputLabel id="demo-simple-select-outlined-label">Склад</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                        >
                            <MenuItem value={10}>ТЦ Мармелад</MenuItem>
                            <MenuItem value={20}>Радуга</MenuItem>
                            <MenuItem value={30}>Центр. рынок</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        id="standard-basic"
                        label="Кол-во"
                        type='number'
                        variant="outlined"
                        className={styles.inputNumber}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={props.onHide} variant="danger">Удалить</Button>
                <Button onClick={props.onHide} variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}