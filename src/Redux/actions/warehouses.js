export const setWarehouses = (items) => ({
    type: 'SET_WAREHOUSES',
    payload: items
})

export const addWarehouses = (name) => ({
    type: 'ADD_WAREHOUSES',
    payload: name
})

export const deleteWarehouses = (id) => ({
    type: 'DELETE_WAREHOUSES',
    payload: id
})