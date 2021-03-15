import React, {useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './styles.module.scss'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import ProductsEditModal from "../Modals/productsEditModal";
import {toast} from "react-toastify";
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct} from "../../Redux/actions/products";

export default function ProductsTable() {
    const dispatch = useDispatch();

    const products = useSelector(state => state.products)
    const [productTitle, setProductTitle] = useState('');

    const [modalShow, setModalShow] = useState(false);

    const handleEdit = (name) => {
        setModalShow(true)
        setProductTitle(name)
    }

    const handleDelete = (name) => {
        dispatch(deleteProduct(name))
        toast.dark(`Товар "` + name + `" удалён`)
    }

    return (
        <>
            <ProductsEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                productTitle={productTitle}
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
                                <TableCell align="center">{row.warehouse}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right"><EditOutlinedIcon className={styles.iconEdit} onClick={() => handleEdit(row.name)} /></TableCell>
                                <TableCell align="right"><CloseOutlinedIcon className={styles.iconDelete} onClick={() => handleDelete(row.name)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}