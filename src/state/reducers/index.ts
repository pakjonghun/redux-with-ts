import { combineReducers } from "redux";
import reducer from "./repositoryReducer";
const finalReducer = combineReducers({ repository: reducer });
export type finalReducerType = ReturnType<typeof finalReducer>;
export default finalReducer;
