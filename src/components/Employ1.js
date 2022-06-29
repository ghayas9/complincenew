// import React from 'react'

// export default function Employ1() {
//   return (
//     <div>Employ1</div>
//   )
// }
import Camera, { FACING_MODES, IMAGE_TYPES } from 'react-html5-camera-photo';
import React, { useEffect } from 'react';
// import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function App (props) {

    useEffect(async()=>{
        if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
            console.log("Let's get this party started")
          }
          navigator.mediaDevices.getUserMedia({video: true})
          await navigator.mediaDevices.enumerateDevices();
    })
  function handleTakePhoto (dataUri) {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <Camera
    // idealFacingMode = {FACING_MODES.ENVIRONMENT}
        idealFacingMode = {FACING_MODES.USER}
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
  );
}

export default App;