import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { deleteWarehouses } from "../../Redux/actions/warehouses";
import { deleteProduct } from "../../Redux/actions/products";
import { addProductsRemainder } from "../../Redux/actions/productsRemainder";
import 'bootstrap/dist/css/bootstrap.min.css';
import newStyles from "../warehousesComponent/styles.module.scss"

export default function WarehousesEditModal(props) {
    const dispatch = useDispatch();
    const warehouses = useSelector(state => state.warehouses)
    const products = useSelector(state => state.products)
    const deleteWarehouse = () => {
        dispatch(deleteWarehouses(props))
        toast.dark(`Склад "` + props.name + `" удалён`)
        props.onHide()
    }
    const changeWarehouse = () => {
        props.onHide()
    }
    
    const handleDeleteProduct = (name, quantity) => {
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
    
    useEffect(() => {
        if(localStorage.getItem('warehouses')){
            localStorage.setItem('warehouses', JSON.stringify(warehouses))
        }
    }, [warehouses])

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <span className="modal-title-name">{props.name}</span> <span className="modal-title-subtitle">(изменить или удалить склад)</span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className={newStyles.modalList}>
                <ul>
                    {props.products.length ? props.products.map(({name, quantity}, index) => {
                        return <li key={index}>{name} <span>{quantity}</span> <CloseOutlinedIcon className={newStyles.iconDelete} onClick={() => handleDeleteProduct(name, quantity)} /></li>
                    }) : <span className={newStyles.empty}>Ждет поступления</span>}
                </ul>
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide} variant="secondary">Закрыть</Button>
                <Button onClick={deleteWarehouse} variant="danger">Удалить</Button>
                <Button onClick={changeWarehouse} variant="primary">Сохранить</Button>
            </Modal.Footer>
        </Modal>
    );
}