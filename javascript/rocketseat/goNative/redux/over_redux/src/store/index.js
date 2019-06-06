import { createStore } from "redux";

const INITIAL_STATE = ["Fazer cafe", "estudar RN", "entender RN"];

//actions
// { type : 'descricao com letra maiuscula', payload: {}}
//Adicionar todo
//Marcar todo como completo

function reducer(state = INITIAL_STATE, action) {
  if (action.type === "ADD_TODO") {
    return [...state, action.text];
  }
  return state;
}

const store = createStore(reducer);

export default store;
