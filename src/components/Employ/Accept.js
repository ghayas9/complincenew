import React, { useState } from 'react'
import axios from '../../Config/Config';
import { useParams } from 'react-router-dom'
import Loading from '../Loading/Loading';

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

///////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
import { useEffect } from 'react';
import WebCam from '../Camera/WebCam';
///////////////SET REDUX//////////////


export default function AcceptInvitation() {
      useEffect(()=>{
        console.log(FACING_MODES.USER );
      })
        ///////////////SET REDUX//////////////
        const dispatch = useDispatch()
        const action = bindActionCreators(actionCreator, dispatch)
        ///////////////SET REDUX//////////////

    const { token } = useParams()
    const [load,setload] = useState(false)
    const [IDP,setIDP]= useState(false)
    const [PP,setPP]= useState(false)
    const offCam = ()=>{
      setIDP(false)
      setPP(false)
    }

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
        console.log(err.response.data.message);
        action.ErrorMessage({title:'Error',txt:err.response.data.message})
        } finally{
            setload(false)
        }
  }

  return (
    load?<Loading/>:
    <>
{
    IDP?
    <WebCam setImage={setImage} facingMode={'environment'} offCam={offCam}/>
    :
    PP?
    <WebCam setImage={setImagep} facingMode={'user'} offCam={offCam}/>:
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
