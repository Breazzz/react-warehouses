import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "../productsComponent/styles.module.scss";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import {toast} from "react-toastify";

export default function ProductsEditModal(props) {
    const [name, setName] = useState('');
    const [warehouse, setWarehouse] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleSaveProduct = () => {
        if (name.length > 0 && warehouse > 0 && quantity.length > 0) {
            setName('');
            setWarehouse('');
            setQuantity('');
            toast.success('Успешно сохранено')
            props.onHide();
        } else {
            toast.error('Заполните все поля')
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
                    {props.productTitle}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form noValidate autoComplete="off" className={styles.productForm}>
                    <TextField
                        id="standard-basic"
                        label="Название"
                        type='text'
                        variant="outlined"
                        className={styles.inputNameModal}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <FormControl variant="outlined" className={styles.inputSelectModal}>
                        <InputLabel id="demo-simple-select-outlined-label">Склад</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Age"
                            value={warehouse}
                            onChange={(e) => setWarehouse(e.target.value)}
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
                        className={styles.inputNumberModal}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={handleSaveProduct} variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}