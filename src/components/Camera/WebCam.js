import React, {useRef, useCallback, useState} from 'react'
import Webcam from "react-webcam";
import './icn.css'

export default function WebCam({
    setImage,facingMode,offCam
}) {
    const [stcam,setStcm] = useState(facingMode)
    const webcamRef = useRef(null);
    const capture = useCallback(async()=>{
    const imageSrc = webcamRef.current.getScreenshot();
            
            setImage(imageSrc)
            offCam()    
      })

      const SWCAM = useCallback(async()=>{
              setStcm(pre=>pre==="user"?"environment":"user")    
          })


      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode:  stcam,
        
      };

  return (
    <div className='container-fluid cam'>
    
    <Webcam
    width={'100%'}
    height={'100%'}
      audio={false}
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      screenshotQuality={1}
      videoConstraints={videoConstraints}
    />
    
    <button onClick={capture} className='cam-icn btn'>
    <i class="fa-solid fa-camera"></i>
    </button>

    <button  onClick={SWCAM}  className='cam-switch'>
        <i class="fa-solid fa-camera-rotate"></i>
    </button>
  </div>
  )
}
