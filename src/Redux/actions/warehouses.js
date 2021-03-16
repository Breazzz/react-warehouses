export const setWarehouses = (items) => ({
    type: 'SET_WAREHOUSES',
    payload: items
})

export const addWarehouses = (name) => ({
    type: 'ADD_WAREHOUSES',
    payload: name
})

export const changeWarehouses = (value) => ({
    type: 'CHANGE_WAREHOUSES',
    payload: value
})

export const deleteWarehouses = (name) => ({
    type: 'DELETE_WAREHOUSES',
    payload: name
})