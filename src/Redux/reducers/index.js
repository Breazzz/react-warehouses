import { combineReducers } from 'redux'

import productsReducer from './products';
import warehousesReducer from './warehouses';

const rootReducer = combineReducers({
    warehouses: warehousesReducer,
    products: productsReducer
})

export default rootReducer;