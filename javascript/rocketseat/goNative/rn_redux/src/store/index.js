import { createStore } from "redux";

//reducer
const INITAL_STATE = [
  {
    id: 1,
    text: "fazer cafe",
    completed: false
  },
  {
    id: 2,
    text: "estudar rn",
    completed: true
  },
  {
    id: 3,
    text: "inscrever nos hackas",
    completed: false
  }
];

// Actions
// Adicionar um todo
// Marcar como completo

function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.text,
          completed: false
        }
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
