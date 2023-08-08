import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import Homepage from "./components/Homepage";
import { Allbonds } from './components/Allbonds';
import { Bondsmaturity } from './components/Bondsmaturity';
import { Aactivebonds, Activebonds } from './components/Activebonds';

const App = () => {
  return <Activebonds/>;
};

export default App;
