export const setProductsRemainder = (items) => ({
    type: 'SET_PRODUCTS_REMAINDER',
    payload: items
})

export const addProductsRemainder = (name) => ({
    type: 'ADD_PRODUCTS_REMAINDER',
    payload: name
})

export const deleteProductsRemainder = (id) => ({
    type: 'DELETE_PRODUCT_REMAINDER',
    payload: id
})