import React, { Component } from "react";
import ColumList from "./components/ColumList";
import "./App.css";

class App extends Component {
  state = {
    tasks: [],
  };
  addTodo = (e) => {
    e.preventDefault();
    let { tasks } = this.state;
    const value = e.target.querySelector("input").value;
    console.log(value);
    const newTask = {
      id: tasks.length + 1,
      description: value,
      status: "To Do",
    };
    tasks = tasks.concat(newTask);
    this.setState({
      tasks,
    });
  };
  updateTodo = () => console.log("return update");

  render() {
    const { tasks } = this.state;
    const columns = [
      {
        title: "To Do",
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

        {/* TODO form adicionar task */}
        {columns.map((colum) => (
          <ColumList
            key={colum.title}
            columTitle={colum.title}
            tasks={tasks}
            addTodo={this.addTodo}
            updateTodo={this.updateTodo}
          />
        ))}
      </div>
    );
  }
}

export default App;
