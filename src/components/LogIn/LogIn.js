import React, { useEffect, useState } from 'react'
import axios from '../../Config/Config'


import Loading from '../Loading/Loading';

import { useNavigate } from 'react-router-dom';
///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

export default function LogIn() {

    const nv = useNavigate()
    ///////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    ///////////////SET REDUX//////////////
  
    ///////////////GET REDUX//////////////
    const state = useSelector((state) => state.LogIn)
    ///////////////GET REDUX//////////////
  
    useEffect(() => {
      if (state) {
        nv('/')
      }
    }, [state])
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [load, setLoad] = useState(false)
  
    const submitData = async (e) => {
      e.preventDefault()
      const body = { email, password }
      try {
        setLoad(true)
        const x = await axios.post('/company/login', body)
        action.SuccessMessage({title:'success',txt:'LogIned'})
        action.LogIn(x.data)
      } catch (err) {
        console.log(err.response.data.message);
        alert(err.response.data.message);
      } finally {
        setLoad(false)
      }
  
    }
    
 
  return (
    load ? <Loading /> :
    <div className="container d-flex justify-content-center">
    <div className="container-r ">
 <div className="title">LogIn</div>
 <div className="content">
   <form action="#">
     <div className="user-details">
       <div className="input-box">
         <span className="details">Email</span>
         <input type="text" placeholder="Enter Company Email" value={email}  onChange={(e)=>{
          setEmail(e.target.value)
         }} required/>
       </div>

       <div className="input-box">
         <span class="details">Password</span>
         <input type="password" placeholder="Enter  password"  value={password}  onChange={(e)=>{
          setPassword(e.target.value)
         }} required/>
       </div>
     </div>
     
     <div className="button">
       <input type="submit" value="LogIn" onClick={(e)=>{
        submitData(e)
       }}/>
     </div>
   </form>
 </div>
</div>
  </div>

  )
}
