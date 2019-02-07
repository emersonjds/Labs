import reducer, { Creators as TodosActions} '../todos';

describe('todos reducers', () => {
  it('should be able to add new Todo', () => {
    const state = reducer([], TodosActions.addTodo('Novo Todo'));
    expect(state[0].text).toBe('Novo Todo');
  });
});