import { combineReducers } from "redux";
import LogIn from "./LogIn";
import SuccessMessage from './SuccessMessage';
const Reducers = combineReducers({
    LogIn,SuccessMessage
});
export default  Reducers;