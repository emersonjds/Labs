import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as TodosActions } from '../../store/ducks/todos';

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          {todo.text}
          {' '}
          <button className="remove" type="button" onClick={() => removeTodo(todo.id)} />
        </li>
      ))}
    </ul>
    <button type="button" onClick={addTodo('Novo Todo')}>
      Add todo
    </button>
  </Fragment>
);

TodoList.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => bindActionCreators(TodosActions, dispatch);

const mapStateToProps = state => ({
  todos: state.todos,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
