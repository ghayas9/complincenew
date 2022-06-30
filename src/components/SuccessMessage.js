import React ,{useEffect} from 'react'
///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function SuccessMessage(p) {
      ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator, dispatch)
  ///////////////SET REDUX//////////////

 useEffect(()=>{
    setTimeout(() => {
        action.SuccessMessageTimeOut()
      }, 3000)
 })

  return (
    <div id="success_tic" className="modal show" role="dialog">
    <div className="modal-dialog">
      <div className="modal-content">
          <div className="page-body">
              <div className="head">  
                  <h1 style={{marginTop:'5px'}}>{p.title}</h1>
                  <h4>{p.txt}</h4>
              </div>
              <h1 style={{textAlign:'center'}} >
                  <div className="checkmark-circle">
                      <div className="background"></div>
                      <div class="checkmark draw"></div>
                  </div>
              </h1>
  
          </div>
      </div>
      </div>
    </div>
  )
}
