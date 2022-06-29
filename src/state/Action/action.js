import { LogInC, LogOutC } from "../Constants/Constant"

export const LogIn = (data) =>{
    return (dispatch) =>{
        dispatch({
            type:LogInC,
            payload:data
        })
    }
}

export const LogOut = ()=>{
    return (dispatch)=>{
        dispatch({
            type:LogOutC
        })
    }
}