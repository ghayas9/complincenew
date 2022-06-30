import React ,{useState} from 'react'
import { Button,Modal } from 'react-bootstrap';

import axios from '../../Config/Config'
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function SendInvitation(p) {

    const state = useSelector((state)=>state.LogIn)

    ///////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    ///////////////SET REDUX//////////////

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const submitData = async(e)=>{
        e.preventDefault()
        const body ={email,name}
        try{
          const res = await axios.post('/company/send',body,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.token}`
            },
            
          })
          action.SuccessMessage({title:'success',txt:res.data.message})
          console.log(res.data);
          setEmail('')
          setName('')
        }catch(err){
          console.log(err);
        }
      }
  return (
     <div className="model_box">
     <Modal
       show={p.show}
       onHide={p.handleClose}
       backdrop="static"
       keyboard={false}
     >
       <Modal.Header closeButton>
         <Modal.Title>Invite New User</Modal.Title>
       </Modal.Header>
           <Modal.Body>
           <form>
               <div className="form-group">
                   <input type="email" 
                   className="form-control" 
                   placeholder="Enter Name" 
                   value={name}  onChange = {(e)=>{
                       setName(e.target.value)
                   }}/>
               </div>
               <div className="form-group mt-3">
                   <input type="email" className="form-control"  
                   placeholder="Enter Email" 
                   value={email} onChange={(e)=>{
                       setEmail(e.target.value)
                   }}
                   />
               </div>
                 <button type="submit" class="btn btn-success mt-4" onClick={(e)=>{
                    submitData(e)
                 }}>Send Invitation</button>
               </form>
           </Modal.Body>

       <Modal.Footer>
         <Button variant="secondary" onClick={p.handleClose}>
           Close
         </Button>
         
       </Modal.Footer>
     </Modal>
 
      </div> 
  )
}
