import { combineReducers } from "redux";

import todos from "./todos";

// objeto dos reducers, caso haja mais reducers basta passar o mesmo para o combineReducers
export default combineReducers({
  todos
});
