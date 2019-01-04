const INITIAL_STATE = [{ id: 1, text: "Fazer café" }];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Math.random().toFixed(1, 100), text: action.payload.text }
      ];
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}
