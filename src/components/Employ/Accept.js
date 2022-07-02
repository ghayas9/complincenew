import React, { useState } from 'react'
import axios from '../../Config/Config';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////


export default function AcceptInvitation() {

        ///////////////SET REDUX//////////////
        const dispatch = useDispatch()
        const action = bindActionCreators(actionCreator, dispatch)
        ///////////////SET REDUX//////////////

    const { token } = useParams()
    const [load,setload] = useState(false)
    const [IDP,setIDP]= useState(false)
    const [PP,setPP]= useState(false)

    const [image,setImage]=useState('')
    const [imagep,setImagep]=useState('')

  const sub = async(e)=>{
    e.preventDefault()
    
        try{
            setload(true)
          const res = await axios.post(`/join/${token}`,{IdCard:image,Profile:imagep})
          action.SuccessMessage({title:'success',txt:res.data.message})
          console.log(res);
          
        }catch(err){
          alert('error')
          console.log(err);
        } finally{
            setload(false)
        }
  }

  return (
    load?<Loading/>:
    <>
    
{
    IDP?<div className="container">
       <Camera
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        isMaxResolution = {true}
        onTakePhoto = {(e)=>{
            setImage(e) 
            setIDP(false)  
            setPP(false) 
        }}
    /></div>:
      PP?<div className="container">
      <Camera
        idealFacingMode = {FACING_MODES.USER}
        isMaxResolution = {true}
        onTakePhoto = {(e)=>{
            setImagep(e) 
            setIDP(false)  
            setPP(false) 
            }}
    /> </div>:
    <>
    <div className="container">
        {image!==''?<img src={image} alt="" style={{with:'100px',height:'100px'}} />:null}
        {imagep!==''?<img src={imagep} alt="" style={{with:'100px',height:'100px'}}/>:null}
    </div>
    
    <div className="container d-flex justify-content-center">
    <div className="container-r ">
            <div className="title">Join</div>
            <div className="content">
                <form action="#">
                    <div className="button">
                    <input type="submit" value="IDCARD PICTURE" onClick={(e)=>{
                        setIDP(true)
                    }}/>
                    </div>
                    <div className="button">
                    <input type="submit" value="YOUR PICTURE" onClick={(e)=>{
                         setPP(true)
                    }}/>
                    </div>
                    <div className="button" >
                    <input type="submit" value="Join" onClick={(e)=>{
                       sub(e)
                    }}/>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
}
</>
  )
}
