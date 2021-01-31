import { combineReducers } from "redux";
import players from "./playersReducer";
import bench from "./benchReducer";
import teamName from "./teamNameReducer";
import manager from "./managerReducer";
import formation from "./formationReducer";

const rootReducer = combineReducers({
  players,
  bench,
  teamName,
  manager,
  formation,
});

export default rootReducer;
