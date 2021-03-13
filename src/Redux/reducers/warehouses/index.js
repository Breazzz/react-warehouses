const initialState = [
    {
        name: 'ТЦ Мармелад',
        id: 1,
        products: [
            {
                name: 'Сникерс',
                count: 23
            },
            {
                name: 'Баунти',
                count: 8
            },
            {
                name: 'Натс',
                count: 19
            },
        ]
    },
    {
        name: 'Центр. рынок',
        id: 2,
        products: [
            {
                name: 'Помидоры',
                count: 6
            },
            {
                name: 'Огурцы',
                count: 1
            },
            {
                name: 'Хлеб',
                count: 13
            },
            {
                name: 'Фунчоза',
                count: 23
            },
        ]
    },
    {
        name: 'Радуга',
        id: 3,
        products: [
            {
                name: 'Бензонасос на акцент',
                count: 1
            },
            {
                name: 'Стартер',
                count: 9
            },
        ]
    },
]

export default function warehouses(state = initialState, action){
    switch (action.type) {
        case 'SET_WAREHOUSES':
            return {
                ...state,
                items: action.payload,
            }
        case 'ADD_WAREHOUSES':
            return state.push(action.value)
        case 'DELETE_WAREHOUSES':
            return state.filter(warehouse => warehouse.id !== action.value.id)
        default:
            return state
    }
}