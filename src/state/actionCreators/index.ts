import { Type } from "./../actions/index";
import { Dispatch } from "redux";
import { action } from "../actionTypes";
import axios from "axios";

type item = {
  package: {
    name: string;
    scope: string;
    version: string;
    description: string;
    keywords: string[];
  };
};

type result = {
  objects: item[];
};

export const search = (term: string) => {
  return async (dispatch: Dispatch<action>) => {
    dispatch({ type: Type.SEARCH_REQUEST });

    try {
      const { data } = await axios.get<result>(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );
      const results = data.objects.map((item) => item.package.name);
      dispatch({ type: Type.SEARCH_SUCCESS, payload: results });
    } catch (err) {
      dispatch({
        type: Type.SEARCH_FAIL,
        payload: "error",
      });
    }
  };
};
