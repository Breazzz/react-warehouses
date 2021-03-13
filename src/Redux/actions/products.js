export const setProducts = (items) => ({
    type: 'SET_PRODUCTS',
    payload: items
})

export const addProducts = (name) => ({
    type: 'ADD_PRODUCTS',
    payload: name
})

export const deleteProducts = (id) => ({
    type: 'DELETE_PRODUCTS',
    payload: id
})