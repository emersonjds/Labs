export const Types = {
  ADD: 'todos/ADD',
  REMOVE: 'todos/REMOVE',
};

const INITIAL_STATE = [];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      return [...state, { id: Math.random(), text: action.payload.text }];
    case Types.REMOVE:
      return state.filter(todo => todo.id !== action.payload.id);
    default:
      return state;
  }
}

export const Creators = {
  addTodo: text => ({
    type: Types.ADD,
    payload: { text },
  }),
  removeTodo: id => ({
    type: Types.REMOVE,
    payload: { id },
  }),
};
