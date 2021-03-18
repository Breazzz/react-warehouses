import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import ProductsForm from "./productForm";
import ProductsTable from "./productsTable";
import ProductsRemainder from "./productsRemainder";
import {useSelector} from "react-redux";

const Products = () => {
    const remainder = useSelector(state => state.remainder)
    return (
        <div className='content'>
            <h2>Продукты</h2>
            <div className={styles.productsWrap}>
               <ProductsForm />
               <div className={styles.productsList}>
                   <ProductsTable />
               </div>
                {remainder.length > 0 &&
                <>
                    <h2 className={styles.remainderTitle}>Остатки:</h2>
                    <ProductsRemainder />
                </>
                }
            </div>
        </div>
    )
}

export default Products;