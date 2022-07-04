import React from 'react'
import './App.css';

import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn'
import Home from './components/Home/Home'
import AcceptInvitation from './components/Employ/Accept';
import Detail from './components/Employ/Detail';
import Error from './components/Model/Error';
import Success from './components/Model/Success';
import NavBar from './components/NavBar/NavBar';

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div className='container-fluid'>
    <BrowserRouter>
    <NavBar/>
    <Error/>
    <Success/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/acceptInvitation/:token" element={<AcceptInvitation />}/>
      <Route path="/employee/:id" element={<Detail/>}/>

      {/* <Route path="/home" element={<Home/>}/> */}
    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
    
    </BrowserRouter>
    </div>

  )
}
