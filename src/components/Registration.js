import React, { useState } from 'react'


export default function Registration() {


  const [name,setName] = useState('')
  const [password,setpassword] = useState('')
  const [email,setemail] = useState('')
  const [contact,setcontact] = useState('')
  return (
    <div className="container d-flex justify-content-center">
       <div className="container-r ">
        <div className="title">Registration</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Name</span>
                <input type="text" placeholder="Enter Company Name"  value={name} onChange={(e)=>{
                  setName(e.target.value)
                }}/>
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter Company Email" value={email} onChange={(e)=>{
                  setemail(e.target.value)
                }}/>
              </div>
              <div className="input-box">
                <span className="details">Contact</span>
                <input type="text" placeholder="Enter Company Number" value={contact} onChange={(e)=>{
                  setcontact(e.target.value)
                }}/>
              </div>
              <div className="input-box">
                <span class="details">Password</span>
                <input type="text" placeholder="Enter  password" value={password} onChange={(e)=>{
                  setpassword(e.target.value)
                }}/>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register"/>
            </div>
          </form>
        </div>
      </div>
     </div>
  )
}
