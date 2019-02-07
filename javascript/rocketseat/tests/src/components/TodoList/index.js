import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as TodosActions } from "../../store/ducks/todos";

const TodoList = ({ todos, addTodo, removeTodo }) => (
  <Fragment>
    <ul>
      {todos.map(todo => (
        <li onClick={() => removeTodo(todo.id)} key={todo.id}>
          {todo.text}
        </li>
      ))}
    </ul>
    <button type="button" onClick={addTodo("Novo Todo")}>
      Add todo
    </button>
  </Fragment>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(TodosActions, dispatch);

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
