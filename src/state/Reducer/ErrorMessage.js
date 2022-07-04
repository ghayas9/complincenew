import { ErrorMessageC, ErrorMessageT} from "../Constants/Constant"
const init = false
const ErrorMessage = (state = init , action) =>{
    if(action.type===ErrorMessageC){
        return action.payload
    }
    else if(action.type===ErrorMessageT){
        return null
    }
    else{ 
        return null
    }
}

export default ErrorMessage