import { createStore } from "redux";

INITIAL_STATE = ["Fazer café", "Estudar Native", "cozinhar"];

//Reducer
function reducer({ state = INITIAL_STATE, action }) {
  console.log(action);
  return state;
}

//Actions
//Adicionar um todo
//Marcar como completo

const store = createStore(reducer);

export default store;
