import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import HomePage from "./components/HomePage"
import Bondlogin from "./components/Bondlogin"
import Summary from './components/Summary';


function App() {
  const [token, setToken] = useState();

  if(!token) {
    return <Bondlogin setToken={setToken} />
  }
  return(
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route path="">
            <HomePage />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

};


export default App;
