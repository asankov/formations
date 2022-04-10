import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const countriesReducer = (state = initialState.countries, action) => {
  if (action.type == types.LOAD_COUNTRIES) {
    return action.countries;
  }
  return state;
};

export default countriesReducer;
