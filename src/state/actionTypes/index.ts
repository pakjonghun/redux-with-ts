import { Type } from "./../actions/index";
type searchReqest = {
  type: Type.SEARCH_REQUEST;
};

type searchSuccess = {
  type: Type.SEARCH_SUCCESS;
  payload: Array<string>;
};

type searchFail = {
  type: Type.SEARCH_FAIL;
  payload: string;
};

export type action = searchReqest | searchSuccess | searchFail;
