import React, { useEffect } from 'react'


import { useNavigate } from 'react-router-dom';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////


export default function ComponyEmployies() {
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
        <div className="d-flex justify-content-between">
        <h1>Employies</h1>
        <button className='btn btn-primary border border-primary rounded-pill px-5 ' onClick={()=>{
            nv('/invite')
        }}>invite</button>
        </div>
        <table class="table table-striped">
        <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Join</th>
    </tr>
  </thead>
    <tbody>
        <tr>


        <td>

        <span>
            <img style={{
                width:'40px',
                height:'40px',
                borderRadius:'100%'
            }} src="https://media.istockphoto.com/photos/millennial-male-team-leader-organize-virtual-workshop-with-employees-picture-id1300972574?b=1&k=20&m=1300972574&s=170667a&w=0&h=2nBGC7tr0kWIU8zRQ3dMg-C5JLo9H2sNUuDjQ5mlYfo=" alt="" />
        </span>
        <span className='mx-2'>GHAYAS</span>
        </td>
            <td>123445</td>
            <td>ghayas@gmail.com</td>
            <td>12/12/2012</td>
        </tr>
    
    </tbody>
        </table>
    </div>
  )
}
