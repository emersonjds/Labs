export const addTodo = () => ({
  type: 'ADD_NEW_TODO',
  payload: {
    text: 'Adicionar novo todo',
  },
});

export const markAsCompleted = id => ({
  type: 'MARK_AS_COMPLETED',
  payload: {id},
});
