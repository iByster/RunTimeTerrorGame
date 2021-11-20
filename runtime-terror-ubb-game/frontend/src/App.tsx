import React from 'react';
import './App.css';
import { LeaderBoard } from './components/LeaderBoard/LeaderBoard';
import Register from './components/register/Register';
import {Outlet, Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";


const App : React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Login/>}/>
        <Route path={"/leaderboard"} element={<LeaderBoard/>}/>
        <Route path={"/register"} element={<Register/>}/>
      </Routes>
        <Outlet/>
    </div>
  );
}

export default App;
