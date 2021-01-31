import { SUBMIT_TEAM } from "../actions/actionTypes";
import initialState from "./initialState";

const formationReducer = (state = initialState.formation, action) => {
  if (action.type === SUBMIT_TEAM) {
    const players = [...action.players];
    const playersInFormation = {
      gk: players[0],
      def: [players[3], players[2], players[1], players[4]],
      mid: [players[6], players[5], players[7]],
      att: [players[8], players[10], players[9]],
    };
    return playersInFormation;
  }
  return state;
};

export default formationReducer;
