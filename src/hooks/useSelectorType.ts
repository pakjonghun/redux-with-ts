import { finalReducerType } from "./../state/reducers/index";
// import { repositoryState } from "../state/reducers/repositoryReducer";
import { useSelector as _useSelector, TypedUseSelectorHook } from "react-redux";

export const useSelectorTyped: TypedUseSelectorHook<finalReducerType> =
  _useSelector;
