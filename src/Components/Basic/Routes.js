import React from "react";
import {Route, Switch} from "react-router-dom";
import ProductsPage from "../../Pages/ProductsPage";
import WarehousesPage from "../../Pages/WarehousesPage";

const Routes = () => {
    return (
        <Switch>
            <Route path="/products">
                <ProductsPage />
            </Route>
            <Route path="/">
                <WarehousesPage />
            </Route>
        </Switch>
    )
}

export default Routes;