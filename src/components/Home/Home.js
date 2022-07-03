import {useState} from 'react';
import { Button} from 'react-bootstrap';
import axios from '../../Config/Config';
import Loading from '../Loading/Loading';

import React, { useEffect } from 'react'


import { Link, useNavigate } from 'react-router-dom';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

import SendInvitation from './SendInvitation';
import { host } from '../../Config/constaints';
 
function Home() {

    const nv = useNavigate()
    ///////////////GET REDUX//////////////
    const state = useSelector((state)=>state.LogIn)
    ///////////////GET REDUX//////////////
    ///////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    ///////////////SET REDUX//////////////
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [user,setUser]=useState([])
    const [load,setload] = useState(false)
    const getUser = async()=>{
        try{
              setload(true)
              const x = await axios({
                method:'get',
                url:'/company/employees',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                } 
              })
              const data = await x.data.Employees
            setUser(data)
        }catch(err){
            console.log(err);
        }finally{
            setload(false)
        }
        
    }

    const DeleteUser =async(id)=>{
       try{
        const x =  await axios({
            method:'delete',
            url:'/company/employees/'+id,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${state.token}`
            } 
          })
          action.SuccessMessage({title:'success',txt:x.data.message})
          getUser()
       }catch(err){
        console.log(err.response.data.message);
        alert(err.response.data.message);
       }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async()=>{
        if(!state){
          nv('/login')
        }else{
            await getUser()
            console.log(state.token);
        }
      },[])
  return (
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row ">
          <div className="col-md-4 mb-3 text-gred" style={{color:"green"}}><h2><b>All Employees</b></h2></div>
           <div class="col-md-4 mb-3 text-gred">
              <div className="search">
                <form className="form-inline">
                 <input className="form-control mr-sm-2" type="search" placeholder="Employ" aria-label="Search"/>
                </form>
              </div>    
              </div>  
              <div class="col-md-4 mb-3 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Invite
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Join</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>    
                       {
                        load?<Loading/>:
                        
                        user.map((e,i)=>{
                            return (<tr>
                            <td>{i+1}</td>
                            <td><img src={host+e.Profile} alt="" style={{
                                width:'50px',
                                height:'50px'
                            }}/></td>
                            <td>{e.email}</td>
                            <td>{e.updatedAt}</td>
                            <td>
                                <Link to={'/employee/'+e._id} className='btn btn-secondary ml-1' onClick={()=>{
                                }}><i className="material-icons" style={{color:'#10ab80'}}>&#xE417;</i></Link>
                                <button className='btn btn-secondary ml-1' onClick={async()=>{
                                    DeleteUser(e._id)
                                }}><i className="material-icons" style={{color:'red'}}>&#xE872;</i> 
                               </button>
                                
                            </td>
                        </tr>)
                        })
                       }
                    </tbody>
                </table>
                {user.length<1?<h6>Not Found Now</h6>:null}
            </div>   
        </div>  

        <SendInvitation
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
        />
      </div>    
      </div>  
  );
}
 
export default Home;