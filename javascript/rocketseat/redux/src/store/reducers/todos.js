const INITIAL_STATE = [
  { id: 1, text: "fazer café" },
  { id: 2, text: "estudar" },
  { id: 3, text: "curso AI" },
  { id: 4, text: "curso GraphQL" },
  { id: 5, text: "curso Python" },
  { id: 6, text: "curso GraphQL" },
  { id: 7, text: "curso GraphQL" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: Math.random(),
          text: action.payload.text
        }
      ];
    default:
      return state;
  }
}
