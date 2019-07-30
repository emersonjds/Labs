const INITIAL_STATE = [
  { id: 1, text: 'Fazer cafe', completed: false },
  { id: 2, text: 'react-native', completed: false },
  { id: 3, text: 'React', completed: true },
];

// eslint-disable-next-line no-unused-vars
export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {
        id: Math.random(),
        text: action.payload.text,
        completed: false,
      }];
    case 'MARK_AS_COMPLETED':
      return state.map(todo => (todo.id === action.payload.id
        ? { ...todo, completed: !todo.completed }
        : todo));
    default:
      return state;
  }
}
