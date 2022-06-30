import { LogInC, LogOutC, SuccessMessageC } from "../Constants/Constant"

export const LogIn = (data) => {
    return (dispatch) => {
        dispatch({
            type: LogInC,
            payload: data
        })
    }
}

export const LogOut = () => {
    return (dispatch) => {
        dispatch({
            type: LogOutC
        })
    }
}

export const SuccessMessage = (data) => {
    return (dispatch) => {
        dispatch({
            type: SuccessMessageC,
            payload: data
        })
    }
}
export const SuccessMessageTimeOut = () => {
    return (dispatch) => {
        dispatch({
            type: 'SuccessMessageT',
        })
    }
}