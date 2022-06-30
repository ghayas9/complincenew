import { LogInC, LogOutC } from "../Constants/Constant";
const jwt = require('jsonwebtoken')

const JwtKey = 'A7001005B96967A01A38B02659DA49D3553C9496B90C100ADAEFC78F8749C6F6'

const init = null
const LogIn = (state = init , action) =>{
    if(action.type===LogInC){
        localStorage.setItem('token', action.payload.token);
        jwt.verify(action.payload.token,JwtKey,(err,data)=>{
            if(err){
                state = null
            }else{
                state = {}
                state.data = data
                state.token =action.payload.token
            }
        })
        return state
    }
    else if(action.type===LogOutC){
        localStorage.removeItem('token')
        return null
    }
    else{
       if(!state){
        const token = localStorage.getItem('token')
            if(token){
                jwt.verify(token,JwtKey,(err,data)=>{
                    if(err){
                        state = null
                    }else{
                        state = {}
                        state.data = data
                        state.token =token
                    }
            })
            }else{
                return state
            }
       }
        return state
    }
}

export default LogIn