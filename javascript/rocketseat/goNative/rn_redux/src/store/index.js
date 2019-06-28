import { createStore } from "redux";

//reducer
const INITAL_STATE = ["fazer cafe", "estudar rn", "teste"];

// Actions
// Adicionar um todo
// Marcar como completo

function reducer(state = INITAL_STATE, action) {
  console.log(action);
  if (action.type === "ADD_TODO") {
    return [...state, action.text];
  }
  return state;
}

const store = createStore(reducer);

export default store;
