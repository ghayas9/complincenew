import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate ,Link} from 'react-router-dom';


///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function NavBar() {
  
  ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator,dispatch)
  ///////////////SET REDUX//////////////
  
  const nv = useNavigate()
  const state = useSelector((state)=>state.LogIn)
  return (
  <nav className="navbar navbar-dark navbar-expand-md m-2 mb-4 sticky-top" style={{background:'gray'}}>
  <Link to={'/'} className="navbar-brand m-0"><h4 >AML</h4></Link>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div id="navb" className="navbar-collapse collapse hide">

    <ul className="nav navbar-nav ml-auto">
        {state?null:<Link to={'/register'} className='nav-item m-1 btn btn-primary  '>Register </Link>}
        {state?null:<Link to={'/login'} className='nav-item m-1 btn btn-primary ' >Login</Link>}
        {!state?null:<button className='nav-item m-1 btn btn-danger ' onClick={()=>{
            action.LogOut()
            nv('/login')
          }}>LogOut</button>}
    </ul>
  </div>
</nav>
  )
}