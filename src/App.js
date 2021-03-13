import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./Components/sidebarComponent/sidebar";
import Routes from "./Components/Basic/Routes";
import Header from "./Components/headerComponent/header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer} from "react-toastify";

const warehouses = [
    {
        name: 'ТЦ Мармелад',
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

const products = [
    {
        name: 'Ремень ГРМ',
        warehouse: 'ТЦ Мармелад',
        quantity: 32
    },
    {
        name: 'Диски на акцент',
        warehouse: 'Радуга',
        quantity: 7
    },
    {
        name: 'Приборная панель',
        warehouse: 'Центр. рынок',
        quantity: 15
    }
];

function App() {
    return (
        <BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={3000}
            />
            <div className="App">
                <Header/>
                <div className="Main">
                    <Sidebar/>
                    <Routes warehouses={warehouses} products={products}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
