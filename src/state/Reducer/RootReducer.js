import { combineReducers } from "redux";
import LogIn from "./LogIn";
import SuccessMessage from './SuccessMessage';
import ErrorMessage from "./ErrorMessage";
const Reducers = combineReducers({
    LogIn,SuccessMessage,ErrorMessage
});
export default  Reducers;