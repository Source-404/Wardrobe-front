import updateList from "./addRemove";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  updateList: updateList,
});

export default rootReducer;
