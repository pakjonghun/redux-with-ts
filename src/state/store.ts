import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
const combineReducer = createStore(rootReducer, {}, applyMiddleware(thunk));

export default combineReducer;
