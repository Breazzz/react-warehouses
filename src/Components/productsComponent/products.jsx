import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import ProductsForm from "./productForm";
import ProductsTable from "./productsTable";

const Products = () => {
    return (
        <div className='content'>
            <h2>Продукты</h2>
            <div className={styles.productsWrap}>
               <ProductsForm />
               <div className={styles.productsList}>
                   <ProductsTable />
               </div>
            </div>
        </div>
    )
}

export default Products;