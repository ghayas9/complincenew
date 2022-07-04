import { ErrorMessageC, ErrorMessageT, LogInC, LogOutC, SuccessMessageC, SuccessMessageT } from "../Constants/Constant"

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
            type: SuccessMessageT,
        })
    }
}

export const ErrorMessage = (data) => {
    return (dispatch) => {
        dispatch({
            type: ErrorMessageC,
            payload: data
        })
    }
}
export const ErrorMessageTimeOut = () => {
    return (dispatch) => {
        dispatch({
            type: ErrorMessageT,
        })
    }
}