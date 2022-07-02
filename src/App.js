import React from 'react'
import './App.css';

// import Registration from './components/Registration';
import Register from './components/Register/Register';
import LogIn from './components/LogIn/LogIn'
import Home from './components/Home/Home'
import AcceptInvitation from './components/Employ/Accept';
import Detail from './components/Employ/Detail';



import Nav from './components/Nav';
// import RegisterCompony from './components/RegisterCompony';
import InviteUser from './components/InviteUser';
// import ComponyEmployies from './components/ComponyEmployies';
import Employ from './components/Employ';
import Employ1 from './components/Employ1';
import SuccessMessage from './components/SuccessMessage';
// import Home from './components/Home'

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////


import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

    ///////////////GET REDUX//////////////
    const success = useSelector((success) => success.SuccessMessage)
    ///////////////GET REDUX//////////////

  return (
    <div className='container-fluid'>
    
    <BrowserRouter>
    <Nav/>
    {success?<SuccessMessage title={success.title} txt={success.txt} />:null}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/acceptInvitation/:token" element={<AcceptInvitation />}/>
      <Route path="/employee/:id" element={<Detail/>}/>



      {/* <Route path="/home" element={<Home/>}/> */}


      
      <Route path="/invite" element={<InviteUser/>}/>
      <Route path="/new" element={<Employ/>}/>
      <Route path="/new1" element={<Employ1/>}/>
    <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
    </Routes>
    
    </BrowserRouter>
    </div>

  )
}
