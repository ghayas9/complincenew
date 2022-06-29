import React, { useState ,useRef, useCallback} from 'react'
import Webcam from "react-webcam";
import axios from './axios';


export default function Employ() {
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

  const sub = async()=>{
    
        try{
          const res = await axios.post('/new',{IdCard:image,Profile:imagep})
          alert('add')
          console.log(res);
          
        }catch(err){
          alert('error')
          console.log(err);
        } 
  }
  const videoConstraints = {
    facingMode: "user"
  };
  return (
    <div className="container-fluid ">
       {IDP?<div>
          <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          height = {100 + '%'}
          width = {100 + '%'}
          videoConstraints={{
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
        height = {100 + '%'}
          width = {100 + '%'}
        videoConstraints={

          {
          facingMode: "user"
        }}
        
        />
        <button className='btn btn-primary mb-3'onClick={(e)=>{
          e.preventDefault();
          CapturePP();
          setPP(false)
        }}>Take</button>
      </div>:
        
        
        <div>{image!=''?<img src={image} alt="" style={{with:'100px',height:'100px'}} />:null}
        {imagep!=''?<img src={imagep} alt="" style={{with:'100px',height:'100px'}}/>:null}
      <div className='d-flex justify-content-center '>
        
        <div className="card inv" style={{padding:'25px'}}>
        <h1>hi GHAYAS</h1>
          <button className='btn btn-primary mb-3' onClick={()=>{

            setIDP(true)
          }}>Take IDCARD PICTURE</button>
          <button className='btn btn-primary mb-3' onClick={()=>{
            setPP(true)
          }}>Take YOUR PICTURE</button>
          <button className='btn btn-primary mb-3' onClick={()=>{
            sub()
          }}>SUBMIT</button>
        </div>
      </div></div>
        
        }
        {/* <Webcam/> */}
    </div>
  )
}



