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

export default function Error() {
 

    const error = useSelector((error)=>error.ErrorMessage)

    ///////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    ///////////////SET REDUX//////////////


    useEffect(()=>{
      setTimeout(()=>{
        action.ErrorMessageTimeOut()
      },4000)
    })
  return (
    <div className="model_box">
     <Modal
       show={error}
       
       backdrop="static"
       keyboard={false}
     >
      <Modal.Body>
        <div className="heade">
          <h2 style={{textAlign:'center'}}>{error?error.title:null}</h2>
          <h6 style={{textAlign:'center'}}>{error?error.txt:null}</h6>
        </div>
        <div className="swal2-icon swal2-error swal2-animate-error-icon" style={{display:'flex'}}>
          <span className="swal2-x-mark"><span className="swal2-x-mark-line-left">
              </span>
                <span className="swal2-x-mark-line-right"></span>
              </span>
          </div>
      </Modal.Body>
     </Modal>
 
      </div> 
  )
}
