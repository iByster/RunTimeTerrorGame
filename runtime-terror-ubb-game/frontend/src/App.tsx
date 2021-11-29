import React, { useState } from 'react';
import './App.css';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import { Navbar } from './components/navbar/Navbar';
import { Level } from './components/Level/Level';
import { AuthContextProvider } from './providers/AuthProvider/AuthProvider';
import { Home } from './components/Home/Home';
import { Player } from './components/player/Player';



const App : React.FC = () => {
  return (
    <AuthContextProvider>
      <Navbar name={'woowowow'}/>
      <Routes>
        <Route path={"/player"} element={<Player player={{life:100,items:[]}}/>}/>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/leaderboard"} element={<LeaderBoard/>}/>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/levels"} element={<Level/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </AuthContextProvider>
  );
}

export default App;
