import reducer, { Creators as TodosActions } from '../todos';

describe('todos reducers', () => {
  it('should be able to add new Todo', () => {
    const state = reducer([], TodosActions.addTodo('Novo Todo'));
    expect(state[0].text).toBe('Novo Todo');
  });

  it('should be able to remove a Todo', () => {
    const state = reducer([{ id: 0, text: 'algum todo' }], TodosActions.removeTodo(0));
    expect(state).toHaveLength(0);
  });
});
