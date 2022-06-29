import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function Nav() {

  ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator,dispatch)
  ///////////////SET REDUX//////////////
  
  const nv = useNavigate()
  const state = useSelector((state)=>state.LogIn)
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#"><h5 style={{
        color:'blue'
      }}>Compny Name</h5></a>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        
      </div>
      <div className="form-inline my-2 m-lg-0">
          {state?null:<button className='btn border border-primary rounded-pill mx-3'onClick={()=>{
            nv('/register')
          }}>Register</button>}
          {state?null:<button className='btn btn-primary border border-primary rounded-pill px-4'onClick={()=>{
            
            nv('/login')
          }} >Login</button>}
          {!state?null:<button className='btn btn-danger border border-danger rounded-pill px-4 mx-3' onClick={()=>{
            action.LogOut()
            nv('/login')
          }}>LogOut</button>}
          
          
      </div>
  </nav>
    </div>
  )
}
