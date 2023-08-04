import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import './App.css';
import Bondlogin from "./components/Bondlogin"
import HomePage from "./components/HomePage";

function App() {
  const [token, setToken] = useState();

  if (!token){
    return <Bondlogin setToken={setToken} />
  }
  return <HomePage />;
};


export default App;
