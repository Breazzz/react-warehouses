const productsArr = [
    {
        id: 1,
        name: 'Ремень ГРМ',
        warehouse: 'ТЦ Мармелад',
        quantity: 32
    },
    {
        id: 2,
        name: 'Диски на акцент',
        warehouse: 'Радуга',
        quantity: 7
    },
    {
        id: 3,
        name: 'Приборная панель',
        warehouse: 'Центр. рынок',
        quantity: 15
    }
];

if(!localStorage.getItem('products')){
    localStorage.setItem('products', JSON.stringify(productsArr))
}

const initialState = JSON.parse(localStorage.getItem('products'))

export default function products(state = initialState, action){
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
            }
        case 'ADD_PRODUCTS':
            return [...state, action.payload]
        case 'DELETE_PRODUCT':
            return state.filter(product => product.id !== action.value.id)
        default:
            return state
    }
}