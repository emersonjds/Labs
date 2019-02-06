import React, { Component, Fragment } from "react";

export default class TodoList extends Component {
  state = {
    todos: []
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), text: "Novo todo"}]
    })
  }

  removeTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id) });
  }
  
  render() {
    return (
      <Fragment>
        <ul>
          {this.state.todos.map(todo => {
            // eslint-disable-next-line no-unused-expressions
            <li 
              onClick={() => this.removeTodo(todo.id)}
              key={todo.id}  
            >{todo.text} 
            </li>;
          })}
        </ul>
        <button type="button" onClick={this.addTodo}>Add todo</button>
      </Fragment>
    );
  }
}
