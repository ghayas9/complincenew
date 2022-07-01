import React, { useState } from 'react'
import axios from '../../Config/Config';
import { useParams } from 'react-router-dom'

import Camera, { FACING_MODES } from 'react-html5-camera-photo';

export default function AcceptInvitation() {
    const { token } = useParams()

    const [IDP,setIDP]= useState(false)
  const [PP,setPP]= useState(false)

  const [image,setImage]=useState('')
  const [imagep,setImagep]=useState('')

  const CaptureIdCard = (imageSrc)=>{
        setImage(imageSrc) 
        setIDP(false)  
        setPP(false) 
  }
  const CapturePP = (imageSrc)=>{
        setImagep(imageSrc) 
        setPP(false) 
        setIDP(false)  
  }

  const sub = async(e)=>{
    e.preventDefault()
    
        try{
          const res = await axios.post('/join',{IdCard:image,Profile:imagep,token})
          alert('add')
          console.log(res);
          
        }catch(err){
          alert('error')
          console.log(err);
        } 
  }

  return (
 <div className="container">
{image!==''?<img src={image} alt="" style={{with:'100px',height:'100px'}} />:null}
{imagep!==''?<img src={imagep} alt="" style={{with:'100px',height:'100px'}}/>:null}
{
    IDP?
       <Camera
        idealFacingMode = {FACING_MODES.ENVIRONMENT}
        onTakePhoto = {(e)=>{
        setImage(e) 
        setIDP(false)  
        setPP(false) 
        }}
    />:
      PP?
      <Camera
        idealFacingMode = {FACING_MODES.USER}
        onTakePhoto = {(e)=>{
            setImagep(e) 
            setIDP(false)  
            setPP(false) 
            }}
    />:
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
}
</div>
  )
}
