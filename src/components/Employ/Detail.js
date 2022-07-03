import React ,{ useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import './emp.css'

import { host } from '../../Config/constaints';

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
import axios from '../../Config/Config';

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
    const [user,setUser] = useState({})
    const [detail,setdetail]=useState({})
    const getData =async()=>{
        try{
            setload(true)
            const res = await axios({
                method:'get',
                url:'/company/employee/'+id,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${state.token}`
                } 
              })
            setUser(res.data.Employee)
            setdetail(res.data.Employee.verifyData.result);
        }catch(err){
            console.log(err);
            // alert(err.respose.data.message)
            nv('/')
        }finally{
            setload(false)
        }
        
    }
  
    useEffect(() => {
      if (!state) {
        nv('/login')
      }else{
         getData()
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
        <div className="">
            <img src={host+user.Profile} alt="User-Profile-Image" style={{height:'150px',width:'150px',objectFit:'cover',borderRadius:'100%'}}/>
         </div>
        </div>
        <h5>User Info</h5>
        <div className="row p-0 m-0" >
            
            {
                Object.keys(detail).map(key => {
                    console.log(key, detail[key]);
                    return <div className="col-lg-6 ">
                            <div className="card p-2 m-1">
                                <div className="row">
                                    <div className="col-5">
                                        <h5>{key}</h5>
                                    </div>
                                    <div className="col-7">
                                        <h5>{detail[key]}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                  })
            }
            <div className="col-lg-6 ">
                <div className="card p-2 m-1">
                    <div className="row">
                        <div className="col-5">
                            <h5>email</h5>
                        </div>
                        <div className="col-7">
                            <h5>{user.email}</h5>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
        
    </div>
    )
}
