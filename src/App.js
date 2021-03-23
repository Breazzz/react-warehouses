import React from 'react'
import {ToastContainer} from "react-toastify";
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./Components/sidebarComponent/sidebar";
import Routes from "./Components/Basic/Routes";
import Header from "./Components/headerComponent/header";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <BrowserRouter basename="/react-warehouses">
            <ToastContainer
                position="top-right"
                autoClose={3000}
            />
            <div className="App">
                <Header/>
                <div className="Main">
                    <Sidebar/>
                    <Routes />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
