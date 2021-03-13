import React from "react";
import {Route, Switch} from "react-router-dom";
import ProductsPage from "../../Pages/ProductsPage";
import WarehousesPage from "../../Pages/WarehousesPage";

const Routes = (props) => {
    return (
        <Switch>
            <Route path="/products">
                <ProductsPage products={props.products} />
            </Route>
            <Route path="/">
                <WarehousesPage warehouses={props.warehouses} />
            </Route>
        </Switch>
    )
}

export default Routes;