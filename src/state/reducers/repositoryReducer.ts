import { action } from "../actionTypes/index";
import { Type } from "../actions/index";

export type repositoryState = {
  loading: boolean;
  error: string | null;
  data: Array<string>;
};

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: repositoryState = initialState,
  action: action
): repositoryState => {
  switch (action.type) {
    case Type.SEARCH_REQUEST:
      return {
        loading: true,
        error: null,
        data: [],
      };
    case Type.SEARCH_SUCCESS:
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    case Type.SEARCH_FAIL:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
