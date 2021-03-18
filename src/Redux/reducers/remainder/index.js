const productsRemainderArr = [
    {
        name: 'Дворники',
        quantity: 42
    },
    {
        name: 'Задние фары',
        quantity: 2
    },
];

if(!localStorage.getItem('productsRemainder')){
    localStorage.setItem('productsRemainder', JSON.stringify(productsRemainderArr))
}

const initialState = JSON.parse(localStorage.getItem('productsRemainder'))

export default function productsRemainder(state = initialState, action){
    switch (action.type) {
        case 'SET_PRODUCTS_REMAINDER':
            return {
                ...state,
                items: action.payload,
            }
        case 'ADD_PRODUCTS_REMAINDER':
            return [...state, action.payload]
        case 'DELETE_PRODUCT_REMAINDER':
            return state.filter(product => product.name !== action.payload)
        default:
            return state
    }
}