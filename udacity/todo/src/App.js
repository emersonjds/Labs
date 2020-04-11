import React, { Component } from "react";
import ColumList from "./components/ColumList";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    const tasks = JSON.parse(
      window.localStorage.getItem("toDoListTasks") || "[]"
    );
    this.state = { tasks };
  }

  updateLocalStorageTasks = (tasks) => {
    const stringified = JSON.stringify(tasks);
    window.localStorage.setItem("toDoListTasks", stringified);
  };

  updateAndSave = (tasks) => {
    this.updateLocalStorageTasks(tasks);
    this.setState({ tasks });
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
    this.updateAndSave(tasks);
  };

  updateTodo = (task, target) => {
    let { tasks } = this.state;
    tasks = tasks
      .filter((t) => t.id !== task.id)
      .concat({
        ...task,
        status: target.checked ? "Done" : "To Do",
      });
  };

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
