export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
})

export const addProducts = (name) => ({
    type: 'ADD_PRODUCTS',
    payload: name
})

export const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    payload: id
})