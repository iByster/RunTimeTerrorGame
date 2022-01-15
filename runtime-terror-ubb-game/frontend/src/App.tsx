import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { GameOne } from './components/GameOne/GameOne';
import Home from './components/Home/Home';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Level from './components/Level/Level';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { AuthContextProvider } from './providers/AuthProvider/AuthProvider';
import { NotFound } from './router/NotFound';
import PrivateRoute from './router/PrivateRoute';
import Game from "./components/game/Game";
import { GameContainer } from './components/GameContainer/GameContainer';

const App: React.FC = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path={'/login'} element={<Login />} />
        <Route
          path={'/leaderboard'}
          element={<PrivateRoute component={LeaderBoard} />}
        />
        <Route path={'/levels'} element={<PrivateRoute component={Level} />} />
        <Route path={'/'} element={<PrivateRoute component={Home} />} />
        <Route path={'/test'} element={<PrivateRoute component={GameOne} />} />
        <Route path={'/register'} element={<Register />} />
        <Route path={"/game/:levelId"} element={<GameContainer/>}/>
      </Routes>
      <Outlet />
    </AuthContextProvider>
  );
};

export default App;
