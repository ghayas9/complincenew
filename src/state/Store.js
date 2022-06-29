import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducer/RootReducer";

const store = createStore(Reducers, {}, applyMiddleware(thunk))

export default store