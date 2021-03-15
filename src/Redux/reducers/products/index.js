const productsArr = [
    {
        name: 'Ремень ГРМ',
        warehouse: 'ТЦ Мармелад',
        quantity: 32
    },
    {
        name: 'Диски на акцент',
        warehouse: 'Радуга',
        quantity: 4
    },
    {
        name: 'Приборная панель',
        warehouse: 'Центр. рынок',
        quantity: 15
    },
    {
        name: 'Пахучка в машину',
        warehouse: 'ТЦ Мармелад',
        quantity: 41
    },
    {
        name: 'Оплётка на руль',
        warehouse: 'ТЦ Мармелад',
        quantity: 5
    },
    {
        name: 'Масло MOBIL 5w40',
        warehouse: 'Центр. рынок',
        quantity: 15
    },
    {
        name: 'ГРМ Gates 8597-15479',
        warehouse: 'Центр. рынок',
        quantity: 2
    },
    {
        name: 'Пружинка натяжителя',
        warehouse: 'Центр. рынок',
        quantity: 32
    },
    {
        name: 'Летняя резина',
        warehouse: 'Радуга',
        quantity: 1
    },
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
            return state.filter(product => product.name !== action.payload.name)
        default:
            return state
    }
}