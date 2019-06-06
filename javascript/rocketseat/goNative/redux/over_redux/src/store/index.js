import { createStore } from "redux";

const INITIAL_STATE = [
  { id: 1, text: "Fazer cafe", completed: false },
  { id: 2, text: "Estudar RN", completed: true },
  { id: 3, text: "React", completed: false }
];

//actions
// { type : 'descricao com letra maiuscula', payload: {}}
//Adicionar todo
//Marcar todo como completo

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random(), text: "Add Todo", completed: false }
      ];
    case "MARK_AS_COMPLETED":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
