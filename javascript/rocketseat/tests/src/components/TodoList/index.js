import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.setState({ todos: JSON.parse(todos) });
    }
  }

  saveTodo = () => {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "Novo todo" }]
    });
    this.saveTodo();
  };

  removeTodo = id => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
    this.saveTodo();
  };

  render() {
    return (
      <Fragment>
        <ul>
          {this.state.todos.map(todo => (
            <li onClick={() => this.removeTodo(todo.id)} key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
        <button type="button" onClick={this.addTodo}>
          Add todo
        </button>
      </Fragment>
    );
  }
}
