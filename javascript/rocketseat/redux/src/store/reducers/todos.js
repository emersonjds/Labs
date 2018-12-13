const INITIAL_STATE = [
  { id: 1, text: "fazer café" },
  { id: 2, text: "estudar" },
  { id: 3, text: "curso AI" }
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
