import React from "react";
import If from "../../utils/If";

const ColumList = ({ tasks, columTitle, addTodo, updateTodo }) => {
  const currentTasks = tasks.filter((task) => task.status === columTitle);

  return (
    <>
      <h3>{columTitle}</h3>
      <If test={columTitle === "To Do"}>
        <form onSubmit={(e) => addTodo(e)}>
          <input type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </If>
      <ul>
        <br />
        {currentTasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              onChange={(e) => updateTodo(task, e.target)}
              checked={columTitle === "Done"}
            ></input>
            <span>{task.description}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColumList;
