import React from 'react'
import {BrowserRouter} from "react-router-dom";
import Sidebar from "./Components/sidebarComponent/sidebar";
import Routes from "./Components/Basic/Routes";
import Header from "./Components/headerComponent/header";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <div className="Main">
              <Sidebar />
              <Routes />
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
