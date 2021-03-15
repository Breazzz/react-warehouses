import React, {useState} from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {addProducts} from "../../Redux/actions/products";

const ProductsForm = () => {
    const [name, setName] = useState('');
    const warehouses = useSelector(state => state.warehouses)
    const [warehouse, setWarehouse] = useState('')
    const [quantity, setQuantity] = useState('')
    const dispatch = useDispatch();
    const products = useSelector(state => state.products)
    const newProduct = {
        name: name,
        warehouse: warehouse,
        quantity: +quantity
    }

    const handleAddProduct = () => {
        if (name.length > 0 && warehouse.length > 0 && quantity > 0) {
            dispatch(addProducts(newProduct))
            setName('');
            setWarehouse('');
            setQuantity('');
            toast.success('Продукт успешно добавлен')
            products.push(newProduct)
            localStorage.getItem('products') && localStorage.setItem('products', JSON.stringify(products))
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
                    {warehouses.map(({name}, index) => (
                        <MenuItem value={name} key={index}>{name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                id="standard-basic"
                label="Кол-во"
                type='number'
                variant="outlined"
                onInput = {(e) =>{
                    e.target.value = Math.max(0, parseInt(e.target.value) ).toString().slice(0,2)
                }}
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