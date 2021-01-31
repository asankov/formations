import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const managerReducer = (state = initialState.manager, action) => {
  if (action.type === SUBMIT_TEAM) {
    return action.manager;
  }
  return state;
};

export default managerReducer;
