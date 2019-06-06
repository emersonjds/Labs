import { createStore } from "redux";

const INITIAL_STATE = ["Fazer cafe", "estudar RN", "entender RN"];

function reducer(state = INITIAL_STATE, action) {
  return state;
}

const store = createStore(reducer);

export default store;
