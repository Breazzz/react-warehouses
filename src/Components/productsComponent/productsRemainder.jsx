import React, { useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { deleteProductsRemainder } from "../../Redux/actions/productsRemainder";
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import styles from './styles.module.scss'

export default function ProductsRemainder() {
    const dispatch = useDispatch();

    const productsRemainder = useSelector(state => state.remainder)

    const handleDelete = (name) => {
        dispatch(deleteProductsRemainder(name))
        toast.dark(`Товар "` + name + `" удалён`)
    }

    useEffect(() => {
        if(localStorage.getItem('productsRemainder')){
            localStorage.setItem('productsRemainder', JSON.stringify(productsRemainder))
        }
    }, [productsRemainder])

    return (
        <>
            <TableContainer component={Paper}>
                <Table className={styles.table + ' ' + styles.tableRemainder} aria-label="caption table">
                    <TableHead className={styles.tableHead}>
                        <TableRow className={styles.tableTitle}>
                            <TableCell>Наименование</TableCell>
                            <TableCell align="center">Кол-во</TableCell>
                            <TableCell align="right" />
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {productsRemainder.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right"><CloseOutlinedIcon className={styles.iconDelete} onClick={() => handleDelete(row.name)} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}