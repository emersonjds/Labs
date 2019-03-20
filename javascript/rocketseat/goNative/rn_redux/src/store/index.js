import { createStore } from "redux";

//Reducer
function reducer() {
  return ["Fazer café", "Estudar Native", "cozinhar"];
}

const store = createStore(reducer);

export default store;
