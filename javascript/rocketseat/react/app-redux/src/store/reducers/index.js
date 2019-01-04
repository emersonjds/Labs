//junta todos os reducer em um unico reducer
import { combineReducers } from "redux";
import todos from "./todos";

export default combineReducers({
  todos
});
