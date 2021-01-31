import { combineReducers } from "redux";
import players from "./playersReducer";
import bench from "./benchReducer";
import teamName from "./teamNameReducer";
import manager from "./managerReducer";

const rootReducer = combineReducers({
  players,
  bench,
  teamName,
  manager,
});

export default rootReducer;
