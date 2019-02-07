export const Types = {
  ADD: "todos/ADD",
  REMOVE: "todos/REMOVE"
};

export const Creators = {
  addTodo: text => ({
    type: Types.ADD,
    payload: { text }
  }),
  removeTodo: id => ({
    type: Types.REMOVE,
    payload: { id }
  })
};
