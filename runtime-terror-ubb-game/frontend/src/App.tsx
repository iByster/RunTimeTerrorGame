import React from 'react';
import './App.css';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import { Navbar } from './components/navbar/Navbar';
import { Level } from './components/Level/Level';



const App : React.FC = () => {
  return (
    <div>
      <Navbar name={"name"}/>
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/leaderboard"} element={<LeaderBoard/>}/>
        <Route path={"/levels"} element={<Level/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
