import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Homepage from "./components/Homepage";
import { Bondsmaturity } from './components/Bondsmaturity';
import {  Activebonds } from './components/Activebonds';
import { Allbonds } from './components/Allbonds';
import { Mybonds } from './components/Mybonds';
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Homepage}/>
        <Route path="/my-bonds" exact component={Mybonds}/>
        <Route path="/all-bonds" exact component={Allbonds}/>
        <Route path="/active-bonds" exact component={Activebonds}/>
        <Route path="/bonds-maturity" exact component={Bondsmaturity}/>

      </Switch>
    </Router>
  )
};

export default App;
