import {useState} from 'react';
import { Button} from 'react-bootstrap';

import React, { useEffect } from 'react'


import { useNavigate } from 'react-router-dom';
//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

import SendInvitation from './SendInvitation';
 
function Home() {

    const nv = useNavigate()
    ///////////////GET REDUX//////////////
    const state = useSelector((state)=>state.LogIn)
    ///////////////GET REDUX//////////////
 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(()=>{
        if(!state){
          nv('/login')
        }else{
            console.log('get Data');
            console.log(state.token);
        }
      },[state])
  return (
       <div class="container ">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div className="row ">
          <div className="col-md-4 mb-3 text-gred" style={{color:"green"}}><h2><b>All Employies</b></h2></div>
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
                            <th>ID</th>
                            <th>Image</th>
                            <th>Email</th>
                            <th>Join</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>    
                        <tr>
                            <td>1</td>
                            <td>Image</td>
                            <td>Name</td>
                            <td>01/01/0101</td>
                            <td>
                                <button className='btn btn-secondary ml-1'><i className="material-icons" style={{color:'#10ab80'}}>&#xE417;</i></button>
                                <button className='btn btn-secondary ml-1'><i className="material-icons" style={{color:'red'}}>&#xE872;</i> 
                               </button>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
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