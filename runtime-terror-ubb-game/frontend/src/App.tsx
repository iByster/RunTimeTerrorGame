import React from 'react';
import './App.css';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
