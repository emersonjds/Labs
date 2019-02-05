import React, { Component } from "react";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  render() {
    return (
      <ul>
        {this.state.todos.map(todo => {
          // eslint-disable-next-line no-unused-expressions
          <li key={todo.id}> {todo.text} </li>;
        })}
      </ul>
    );
  }
}
