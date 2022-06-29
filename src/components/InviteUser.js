import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from './axios';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

export default function InviteUser() {
  const nv = useNavigate()
  const [email,setemail]=useState('')
  const [name,setname]=useState('')

  ///////////////GET REDUX//////////////
  const state = useSelector((state)=>state.LogIn)
  ///////////////GET REDUX//////////////
  useEffect(()=>{
    if(!state){
      nv('/login')
    }
  },[state])

  const submitData = async()=>{
    const body ={email,name}
    try{
      const res = await axios.post('/compony/send',body)
      console.log(res.data);
      setemail('')
      setname('')
    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="container d-flex justify-content-center">
        <div className="card border-primary inv"
        style={{
          padding:'50px'
        }}
        >
          <h1>Invite New User</h1>
          <div className='mb-3 '>
            <label htmlFor="">Name</label>
          <input type="text " className="form-control" 
          style={{
            width:'100%'
          }}
          value={name}  onChange={(e)=>{
            setname(e.target.value)
          }} 
          />
          </div>
          <div className='mb-3 '>
            <label htmlFor="">Email</label>
          <input type="text " className="form-control" 
          style={{
            width:'100%'
          }}
          value={email}  onChange={(e)=>{
            setemail(e.target.value)
          }} 
          />
          </div>
          <button className='btn btn-primary' onClick={()=>{
            submitData()
          }}>send</button>
        </div>
    </div>

    
  )
}
