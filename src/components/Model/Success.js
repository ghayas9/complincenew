import React ,{useEffect} from 'react'
import {Modal } from 'react-bootstrap';
import './both.css'

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function Success() {

  const success = useSelector((success)=>success.SuccessMessage)

  ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator, dispatch)
  ///////////////SET REDUX//////////////


  useEffect(()=>{
    setTimeout(()=>{
      action.SuccessMessageTimeOut()
    },4000)
  })
  return (
    <div className="model_box">
     <Modal
       show={success}
       backdrop="static"
       keyboard={false}
     >
      <Modal.Body>
        <div className="heade">
          <h2 style={{textAlign:'center'}}>{success?success.title:null}</h2>
          <h6 style={{textAlign:'center'}}>{success?success.txt:null}</h6>
        </div>
      <div class="swal2-icon swal2-success swal2-animate-success-icon" >
      <div class="swal2-success-circular-line-left" ></div>
            <span class="swal2-success-line-tip"></span>
            <span class="swal2-success-line-long"></span>
        <div class="swal2-success-ring"></div> 
        <div class="swal2-success-fix" ></div>
        <div class="swal2-success-circular-line-right" ></div>
      </div>
      </Modal.Body>
     </Modal>
 
      </div>
  )
}
