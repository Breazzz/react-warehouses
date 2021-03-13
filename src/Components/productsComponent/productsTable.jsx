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

export default function ProductsTable(props) {
    const [modalShow, setModalShow] = useState(false);

    const handleEdit = () => {
        setModalShow(true)
    }

    const handleDelete = () => {
        console.log('DELETE PRODUCT')
    }
    return (
        <>
            <ProductsEditModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                        {props.products.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.warehouse}</TableCell>
                                <TableCell align="center">{row.quantity}</TableCell>
                                <TableCell align="right"><EditOutlinedIcon className={styles.iconEdit} onClick={handleEdit} /></TableCell>
                                <TableCell align="right"><CloseOutlinedIcon className={styles.iconDelete} onClick={handleDelete} /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}