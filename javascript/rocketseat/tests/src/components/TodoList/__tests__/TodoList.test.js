import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import createMockStore from 'redux-mock-store';
import TodoList from '../TodoList';
import { Creators as TodoActions } from '../../../store/ducks/todos';

const INITIAL_STATE = {
  todos: [{ id: 0, text: 'Lavar a louça' }, { id: 1, text: 'Pythom' }, { id: 2, text: 'React' }],
};

const mockStore = createMockStore();
const store = mockStore(INITIAL_STATE);

describe('Todolist component', () => {
  it('should render three tags <li>', () => {
    const wrapper = shallow(<TodoList />, { context: { store } });
    expect(wrapper.dive().find('li')).toHaveLength(3);
  });

  it('should be able to add new todo', () => {
    const wrapper = shallow(<TodoList />, { context: { store } });
    wrapper
      .dive()
      .find('button')
      .simulate('click');
    expect(store.getActions()).toContainEqual(TodoActions.addTodo('Novo Todo'));
  });

  it('should be able to remove todo', () => {
    const wrapper = shallow(<TodoList />, { context: { store } });
    wrapper
      .dive()
      .find('li')
      .first()
      .simulate('click');
    expect(store.getActions()).toContainEqual(TodoActions.removeTodo(INITIAL_STATE.todos[0].id));
  });
});
