import React from 'react';
import Header from './header/Header';
import {HashRouter} from "react-router-dom";
import Routes from "./routes/Routes";
import './App.css';

function App() {

  return (
    <div className="App">

        <HashRouter>
          <Header/>
          <Routes/>
        </HashRouter>
    </div>
  );
}

export default App;
