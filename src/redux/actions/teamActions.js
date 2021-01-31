import { SUBMIT_TEAM } from "./actionTypes";

export const submitTeam = ({
  players,
  bench,
  teamName,
  manager,
}) => dispatch => {
  dispatch({ type: SUBMIT_TEAM, players, bench, teamName, manager });
};
