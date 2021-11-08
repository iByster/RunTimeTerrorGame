import React from 'react';
import './App.css';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Routes>
        {/*  Pagina principala va fi cea de login*/}
        <Route path={"/"} element={<Register/>}/>
        <Route path={"/login"} element={<Login/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
