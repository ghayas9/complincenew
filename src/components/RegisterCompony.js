import React, { useEffect } from 'react'


import { useNavigate } from 'react-router-dom';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////


export default function RegisterCompony() {
  const nv = useNavigate()
  ///////////////GET REDUX//////////////
  const state = useSelector((state)=>state.LogIn)
  ///////////////GET REDUX//////////////


  useEffect(()=>{
    if(!state){
      nv('/login')
    }
  },[state])
  return (
    <div className="container">
        <h1 style={{
            textAlign:'center'
        }}>Register Componies</h1>
        <table class="table table-striped">
        <thead>
    <tr>
      <th scope="col">Compony Name</th>
      <th scope="col">Email</th>
      <th scope="col">Created</th>
    </tr>
  </thead>
    <tbody>
        <tr>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
    </tbody>
        </table>
    </div>
  )
}
