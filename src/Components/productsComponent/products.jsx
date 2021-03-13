import React from "react";
import '../../Styles/Content.scss'
import styles from './styles.module.scss'
import ProductsForm from "./productForm";
import ProductsTable from "./productsTable";

const Products = (props) => {
    return (
        <div className='content'>
            <h2>Продукты</h2>
            <div className={styles.productsWrap}>
               <ProductsForm products={props.products} />
               <div className={styles.productsList}>
                   <ProductsTable products={props.products} />
               </div>
            </div>
        </div>
    )
}

export default Products;