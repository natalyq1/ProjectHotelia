import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/c-navbar/Navbar';
import Inicio from './pages/Inicio';
import Roomsearch from './pages/Roomsearch';

import Dash2 from './pages/Dash';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Navigate,Route, Routes } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>
    <Routes>
    
    <Route path='/' element={<Roomsearch/>}></Route>
    
    <Route path='/habitaciones' element={<Navigate replace to={"/"}/>}></Route>
    <Route path='/habitaciones/' element={<Roomsearch/>}></Route>
    
    <Route path='/habitaciones/reservas' element={<Dash2/>}></Route>
    <Route path='/habitaciones/reservas/misreservas' activeKey="active" element={<Dash2/>}></Route>
  </Routes  >
  </BrowserRouter>
);


