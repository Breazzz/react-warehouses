const warehousesArr = [
    {
        name: 'ТЦ Мармелад',
        products: []
    },
    {
        name: 'Центр. рынок',
        products: []
    },
    {
        name: 'Радуга',
        products: []
    }
]

if(!localStorage.getItem('warehouses')){
    localStorage.setItem('warehouses', JSON.stringify(warehousesArr))
}

const initialState = JSON.parse(localStorage.getItem('warehouses'))


export default function warehouses(state = initialState, action){
    switch (action.type) {
        case 'SET_WAREHOUSES':
            return {
                ...state,
                items: action.payload,
            }
        case 'ADD_WAREHOUSES':
            // return state.push(action.payload) // Мутирование
            return [...state, action.payload] // Новое состояние
        case 'DELETE_WAREHOUSES':
            return state.filter(warehouse => warehouse.name !== action.payload.name)
        case 'CHANGE_WAREHOUSES':
            return state
        default:
            return state
    }
}