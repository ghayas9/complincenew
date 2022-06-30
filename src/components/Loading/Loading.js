import React from 'react'
import './Loading.css'

export default function Loading() {
  return (
    <div style={{
        height:'100px',
        position:'relative'
    }}>
        <div class="loader" >
        <div class="inner one"></div>
        <div class="inner two"></div>
        <div class="inner three"></div>
        </div>
    </div>
  )
}
