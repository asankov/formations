import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const formationReducer = (state = initialState.formation, action) => {
  if (action.type === SUBMIT_TEAM) {
    return action.formation;
  }
  return state;
};

export default formationReducer;
