import React from 'react';
import './App.css';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import { Navbar } from './components/navbar/Navbar';
import { Player } from './components/player/Player';

const App : React.FC = () => {
  return (
    <div>
      <Navbar name={"name"}/>
      <Routes>
        <Route path="player" element={<Player player={{
          life: 100,
          items: []
        }}/>}/>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/leaderboard"} element={<LeaderBoard/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
