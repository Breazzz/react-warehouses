import { combineReducers } from 'redux'

import productsReducer from './products';
import warehousesReducer from './warehouses';
import productsRemainderReducer from './remainder';

const rootReducer = combineReducers({
    warehouses: warehousesReducer,
    products: productsReducer,
    remainder: productsRemainderReducer
})

export default rootReducer;