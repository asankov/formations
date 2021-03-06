import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const benchReducer = (state = initialState.bench, action) => {
  if (action.type === SUBMIT_TEAM) {
    return action.bench;
  }
  return state;
};

export default benchReducer;
