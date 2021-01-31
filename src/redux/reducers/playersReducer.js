import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const playersReducer = (state = initialState.players, action) => {
  if (action.type === SUBMIT_TEAM) {
    return action.players;
  }
  return state;
};

export default playersReducer;
