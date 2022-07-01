import React, { useState ,useRef, useCallback} from 'react'
import Webcam from "react-webcam";
import axios from '../../Config/Config';
import { useParams } from 'react-router-dom'

export default function AcceptInvitation() {
    const { token } = useParams()

    const [IDP,setIDP]= useState(false)
  const [PP,setPP]= useState(false)

  const [image,setImage]=useState('')
  const [imagep,setImagep]=useState('')
  const webcamRef = useRef(null)

  const CaptureIdCard = useCallback(async()=>{
    const imageSrc = webcamRef.current.getScreenshot();
        setImage(imageSrc)
          
  })
  const CapturePP = useCallback(async()=>{
    const imageSrc = webcamRef.current.getScreenshot();
        setImagep(imageSrc) 
  })

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
    IDP?<div>
        <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          width: 300,
          height: 720,
          facingMode: {
            exact: 'environment'
          }
        }}
        />
        <button className='btn btn-primary mb-3'onClick={(e)=>{
          e.preventDefault();
          CaptureIdCard();
          setIDP(false)
        }}>Take</button>
      </div>:
      PP?<div>
      <Webcam
      ref={webcamRef}
      audio={false}
      screenshotFormat="image/jpeg"
      width = {100 + '%'}
      videoConstraints={

        {
        facingMode: "user"
      }
    }

      
      />
      <button className='btn btn-primary mb-3'onClick={(e)=>{
        e.preventDefault();
        CapturePP();
        setPP(false)
      }}>Take</button>
    </div>:
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
