import React from 'react'
import './App.css';
import Registration from './components/Registration';
import LogIn from './components/Login';
import Nav from './components/Nav';
// import RegisterCompony from './components/RegisterCompony';
import InviteUser from './components/InviteUser';
import ComponyEmployies from './components/ComponyEmployies';
import Employ from './components/Employ';
import Employ1 from './components/Employ1';


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className='container-fluid'>
    
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<ComponyEmployies/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Registration/>}/>
      <Route path="/invite" element={<InviteUser/>}/>
      <Route path="/new" element={<Employ/>}/>
      <Route path="/new1" element={<Employ1/>}/>
    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
    
    </BrowserRouter>
    </div>

  )
}
