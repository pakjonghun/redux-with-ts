import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreator } from "../state";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreator, dispatch);
};
