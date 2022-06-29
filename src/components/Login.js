import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from './Loader'

import { useNavigate } from 'react-router-dom';
///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

export default function () {

  const nv = useNavigate()

  ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator,dispatch)
  ///////////////SET REDUX//////////////

  ///////////////GET REDUX//////////////
  const state = useSelector((state)=>state.LogIn)
  ///////////////GET REDUX//////////////

  useEffect(()=>{
    if(state){
      nv('/')
    }
  },[state])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [load, setLoad] = useState(false)

  const submitData = async () => {
    const body = { email, password }
    try {
      setLoad(true)
      const x = await axios.post('http://localhost:9000/compony/login', body)
      action.LogIn(x.data)
    } catch (err) {
      console.log('err',err.response.data);
    } finally {
      setLoad(false)
    }

  }
  return (
    load ? <Loader /> :
      <div className="container lgform">
        <div className='card' style={{
          padding:'50px'
        }}>
          <h1>Compony Login</h1>
          <div className="mb-3">
            <label
              className="form-label">Email</label>
            <input type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>

          <div className="mb-3">
            <label
              className="form-label">Password</label>
            <input type="password"
              className="form-control"
              id="exampleInputPassword1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>
          <div className="mb-3 " style={{
            textAlign: 'center'
          }}>
            <a href="">forgot password</a>
          </div>
          <button type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              submitData()
            }}
          >Login</button>
        </div>
      </div>

  )
}
