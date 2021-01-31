import { SUBMIT_TEAM } from "./actionTypes";

export const submitTeam = ({
  players,
  formation,
  bench,
  teamName,
  manager,
}) => dispatch => {
  dispatch({ type: SUBMIT_TEAM, players, formation, bench, teamName, manager });
};
