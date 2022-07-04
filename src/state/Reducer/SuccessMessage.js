import { SuccessMessageC, SuccessMessageT } from "../Constants/Constant"
const init = null
const SuccessMessage = (state = init , action) =>{
    if(action.type===SuccessMessageC){
        return action.payload
    }
    else if(action.type===SuccessMessageT){
        return null
    }
    else{ 
        return null
    }
}

export default SuccessMessage