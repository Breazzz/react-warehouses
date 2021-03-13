import React from "react";
import Products from "../Components/productsComponent/products";

const ProductsPage = (props) => {
    return (
        <Products products={props.products} />
    )
}

export default ProductsPage;