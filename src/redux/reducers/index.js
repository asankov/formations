import { combineReducers } from "redux";
import players from "./playersReducer";
import bench from "./benchReducer";
import teamName from "./teamNameReducer";
import manager from "./managerReducer";
import formation from "./formationReducer";
import countries from "./countriesReducer";

const rootReducer = combineReducers({
  players,
  bench,
  teamName,
  manager,
  formation,
  countries
});

export default rootReducer;
