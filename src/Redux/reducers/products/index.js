const initialState = [
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

export default function products(state = initialState, action){
    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                items: action.payload,
            }
        case 'ADD_PRODUCT':
            return state.push(action.value)
        case 'DELETE_PRODUCT':
            return state.filter(product => product.id !== action.value.id)
        default:
            return state
    }
}