import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ProductsEditModal from "../Modals/productsEditModal";
import {deleteProduct} from "../../Redux/actions/products";
import {addProductsRemainder} from "../../Redux/actions/productsRemainder";
import styles from './styles.module.scss'

export default function ProductsTable() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products)
    const [productTitle, setProductTitle] = useState('');
    const [quantity, setQuantity] = useState(0)

    const [modalShow, setModalShow] = useState(false);
    const warehouses = useSelector(state => state.warehouses)

    const handleEdit = (name) => {
        setModalShow(true)
        setProductTitle(name.name)
        setQuantity(name.quantity)
    }

    const handleDelete = (name, quantity) => {
        dispatch(deleteProduct(name))
        const productRemainder = {
            name: name,
            quantity: quantity
        }
        dispatch(addProductsRemainder(productRemainder))
        toast.dark(`Товар "` + name + `" удалён`)
    }

    useEffect(() => {
        if(localStorage.getItem('products')){
            localStorage.setItem('products', JSON.stringify(products))
        }
    }, [products])

    return (
        <>
            <ProductsEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                productTitle={productTitle}
                quantity={quantity}
            />
            <TableContainer component={Paper}>
                <Table className={styles.table} aria-label="caption table">
                    <TableHead className={styles.tableHead}>
                        <TableRow className={styles.tableTitle}>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="center">Склад</TableCell>
                            <TableCell align="center">Кол-во</TableCell>
                            <TableCell align="right" />
                            <TableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{warehouses.map(item => item.name === row.warehouse && row.warehouse)}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right"><EditOutlinedIcon className={styles.iconEdit} onClick={() => handleEdit(row)} /></TableCell>
                                <TableCell align="right"><CloseOutlinedIcon className={styles.iconDelete} onClick={() => handleDelete(row.name, row.quantity)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}