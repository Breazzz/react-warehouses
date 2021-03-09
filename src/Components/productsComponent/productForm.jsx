import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import {Button, FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';

const ProductsForm = () => {
    const [warehouses, setWarehouses] = React.useState('');

    const handleChange = (event) => {
        setWarehouses(event.target.value);
    };
    return (
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
                    value={warehouses}
                    onChange={handleChange}
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
            <Button variant="outlined" color="primary" className={styles.buttonAdd}>
                Добавить<AddCircleOutlineOutlinedIcon className={styles.btnIcon} />
            </Button>
        </form>
    )
}

export default ProductsForm;