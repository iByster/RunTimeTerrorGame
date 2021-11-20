import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Level} from "./components/Level/Level";
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import { Navbar } from './components/navbar/Navbar';



const App : React.FC = () => {
  return (
    <div>
      <Navbar name={"name"}/>
      <Routes>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/leaderboard"} element={<LeaderBoard/>}/>
        <Route path={"/levels"} element={<Level/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
