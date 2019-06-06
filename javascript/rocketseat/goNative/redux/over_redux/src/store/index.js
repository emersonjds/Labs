import { createStore } from "redux";

function reducer() {
  return ["Fazer cafe", "estudar RN"];
}

const store = createStore(reducer);

export default store;
