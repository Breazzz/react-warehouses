import React from "react";
import Warehouses from "../Components/warehousesComponent/warehouses";

const WarehousesPage = (props) => {
    return (
        <Warehouses warehouses={props.warehouses} />
    )
}

export default WarehousesPage;