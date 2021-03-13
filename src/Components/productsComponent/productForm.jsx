import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const ProductsForm = () => {
    const products = useSelector(state => state.products)
    const [name, setName] = useState('');
    const [warehouse, setWarehouse] = useState('')
    const [quantity, setQuantity] = useState('')

    const handleAddProduct = () => {
        if (name.length > 0 && warehouse.length > 0 && quantity.length > 0) {
            products.push(
                {
                    name: name,
                    warehouse: warehouse,
                    quantity: quantity
                }
            )
            setName('');
            setWarehouse('');
            setQuantity('');
            toast.success('Продукт успешно добавлен')
        } else {
            toast.error('Заполните все поля')
        }
    }

    return (
        <form noValidate autoComplete="off" className={styles.productForm}>
            <TextField
                id="standard-basic"
                label="Название"
                type='text'
                variant="outlined"
                className={styles.inputName}
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <FormControl variant="outlined" className={styles.inputSelect}>
                <InputLabel id="demo-simple-select-outlined-label">Склад</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={warehouse}
                    onChange={(e) => setWarehouse(e.target.value)}
                    label="Age"
                >
                    <MenuItem value={'ТЦ Мармелад'}>ТЦ Мармелад</MenuItem>
                    <MenuItem value={'Радуга'}>Радуга</MenuItem>
                    <MenuItem value={'Центр. рынок'}>Центр. рынок</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="standard-basic"
                label="Кол-во"
                type='number'
                variant="outlined"
                className={styles.inputNumber}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
            />
            <Button variant="outlined" color="primary" className={styles.buttonAdd} onClick={handleAddProduct}>
                Добавить<AddCircleOutlineOutlinedIcon className={styles.btnIcon} />
            </Button>
        </form>
    )
}

export default ProductsForm;