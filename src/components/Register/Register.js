import React, { useState } from 'react'
import axios from '../../Config/Config'

import Loading from '../Loading/Loading';


///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

export default function Register() {

    const [load,setLoad] = useState(false)
    

      ///////////////SET REDUX//////////////
  const dispatch = useDispatch()
  const action = bindActionCreators(actionCreator, dispatch)
  ///////////////SET REDUX//////////////

    const submitData = async(e)=>{
        e.preventDefault()
        const Url = '/company/register'
        const data = {name,email,password,contact}

        try{
            //Loading
            setLoad(true)
            const res = await axios.post(Url,data)
            console.log(res);
            action.SuccessMessage({title:'success',txt:res.data.message})
        }catch(err){
          console.log(err.response.data.message);
          alert(err.response.data.message);
        }finally{
            setLoad(false)
            //Loading
        }
    }
    const [name,setName] = useState('')
    const [password,setpassword] = useState('')
    const [email,setemail] = useState('')
    const [contact,setcontact] = useState('')



    return (
      load?Loading:
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
                <input type="submit" value="Register" onClick={(e)=>{
                    submitData(e)
                }}/>
              </div>
            </form>
          </div>
        </div>
       </div>
    )
}
