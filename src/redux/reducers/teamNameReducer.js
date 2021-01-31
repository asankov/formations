import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const teamNameReducer = (state = initialState.teamName, action) => {
  if (action.type === SUBMIT_TEAM) {
    return action.teamName;
  }
  return state;
};

export default teamNameReducer;
