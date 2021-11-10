import React from 'react';
import './App.css';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import { Navbar } from './components/navbar/Navbar';


function App() {
  return (
    <div>
      <Navbar name={"name"}/>
      <Routes>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
