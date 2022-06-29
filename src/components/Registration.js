import React, { useState } from 'react'


export default function Registration() {


  const [name,setName] = useState('')
  const [password,setpassword] = useState('')
  const [email,setemail] = useState('')
  const [contact,setcontact] = useState('')
  return (
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5">

            <h2 style={{fontWeight:'bolder'}}>Registration Compony</h2>

            <h5>Register new Compony</h5>
          </div>
          <div className="col-12"></div>
          
          <div className="col-md-4 mb-5">
          <label htmlFor="">Compony Name</label>
          <br />
            <input type="text" value={name} onChange={(e)=>{
              setName(e.target.value)
            }}/>
          </div>
          <div className="col-md-4 mb-5">
          <label htmlFor="">Compony Email</label>
          <br />
          <input type="text" value={email} onChange={(e)=>{
              setemail(e.target.value)
            }}/>
          </div>
          <div className="col-md-4 mb-5">
            
          </div>
          <div className="col-md-4 mb-3">
          <label htmlFor="">Compony Contact</label>
          <br />
          <input type="text" value={contact} onChange={(e)=>{
              setcontact(e.target.value)
            }}/>
          </div>
          <div className="col-md-4 mb-3">
          <label htmlFor="">Password</label>
          <br />
          <input type="password" value={password} onChange={(e)=>{
              setpassword(e.target.value)
            }}/>
          </div>
          <div className="col-md-4 mb-3">
            
          </div>
          <div className="col-md-4 mb-3">
            <button className='btn btn-primary' style={{
              width:'60%'
            }}>Cancel</button>
          </div>
          <div className="col-md-4 mb-3">
          <button className='btn btn-primary'>Register</button>
          </div>
          <div className="col-md-4 mb-3">
            
          </div>
        </div>
      </div>
  )
}
