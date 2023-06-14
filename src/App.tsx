import React from 'react';
import './App.css';
import {Header} from "./Features/Header/header";
import {Routing} from "./Features/Routes/routes";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routing/>
    </div>
  );
}

export default App;
