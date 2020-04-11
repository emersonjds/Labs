import React, { Component } from "react";
import logo from "./logo.svg";
import ColumList from "./components/ColumList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
  };
  addTodo = () => console.log("return add ");
  updateTodo = () => console.log("return update");

  render() {
    const { tasks } = this.state;
    const columns = [
      {
        title: "Add Todo",
        tasks,
      },
      {
        title: "Done",
        tasks,
      },
    ];

    return (
      <div className="App">
        <h3>Todo React</h3>
        <div className="container-tasks">
          {/* TODO form adicionar task */}
          {columns.map((colum) => (
            <ColumList
              key={colum.title}
              columTitle={colum.title}
              tasks={colum.tasks}
              addTodo={this.addTodo}
              updateTodo={this.updateTodo}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
