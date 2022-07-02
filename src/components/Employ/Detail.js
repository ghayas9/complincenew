import React ,{ useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './emp.css'

import { useNavigate } from 'react-router-dom';
///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
///////////////GET REDUX//////////////

import Loading from '../Loading/Loading';
import axios from 'axios';

export default function Detail() {
    const {id} = useParams()
    const [load,setload] = useState(false)
    const nv = useNavigate()
    ///////////////SET REDUX//////////////
    const dispatch = useDispatch()
    const action = bindActionCreators(actionCreator, dispatch)
    ///////////////SET REDUX//////////////
  
    ///////////////GET REDUX//////////////
    const state = useSelector((state) => state.LogIn)
    ///////////////GET REDUX//////////////
    const [user,setUser] = useState('')
    const getData =async()=>{
        try{
            setload(true)
            const res = await axios.get(`/employee/${id}`,{},{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                }
            })
            console.log(res);
            // setUser(res.data.Employee)

        }catch(err){
            console.log(err.response.statusText);
            // alert(err.respose.data.message)
            // nv('/')
        }finally{
            setload(false)
        }
        
    }
  
    useEffect(async() => {
      if (!state) {
        nv('/login')
      }else{
         await getData()
      }
    }, [state])
  return (
    load?<Loading/>:
<div class="container detail" >
    <div className="card" style={{
        padding:'10px'
    }}>
        <div className="card row bg-c-lite-green" style={{
            padding:'0px',
            margin:'0px',
            backgroundColor:'#9b59b6'
        }}>
        <div class="">
            <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image"/>
         </div>
        </div>
        <h5>User Info</h5>
        <div className="row p-0 m-0" >

            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-4">
                            <h5>Name</h5>
                        </div>
                        <div className="col-8">
                            <h5>GHAYAS</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        
    </div>
    )
}
