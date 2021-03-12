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

const products = [
    {
        name: 'Ремень ГРМ',
        warehouse: 'ТЦ Мармелад',
        quantity: 32
    },
    {
        name: 'Диски на акцент',
        warehouse: 'Радуга',
        quantity: 7
    },
    {
        name: 'Приборная панель',
        warehouse: 'Центр. рынок',
        quantity: 15
    }
];

export default function ProductsTable() {
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
                        {products.map((row) => (
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