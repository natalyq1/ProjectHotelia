import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/c-navbar/Navbar';
import Inicio from './pages/Inicio';
import Roomsearch from './pages/Roomsearch';
import User from './pages/userpages/User';
import FormUser from './pages/userpages/FormUser';
import Registro from './components/c-register/RegisterUser';

import Dash2 from './pages/Dash';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>
    <Routes>

      <Route path='/' element={<Roomsearch />}></Route>
      <Route path='/'element={<Navigate replace to={"/"} />}></Route>
      <Route path='/ProjectHotelia/' element={<Roomsearch />}></Route>

      <Route path='/habitaciones' element={<Roomsearch />}> </Route>
      <Route path='/habitaciones/'element={<Navigate replace to={"/"} />}></Route>

      <Route path='/habitaciones/reservas' element={<Dash2 />}></Route>
      <Route path='/habitaciones/reservas/misreservas'  element={<Navigate replace to={"/habitaciones/reservas"} />}></Route>
    
      <Route path='/habitaciones/reservas/perfil' element={<User />}></Route>
      <Route path='/newuser'  element={<FormUser />}></Route>
      <Route path='/register' element={<Registro />}></Route>
    </Routes  >
  </BrowserRouter>
);


{/*<Route path='/api' element={<Inicio/>}></Route>*/ }