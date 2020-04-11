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
          <li key={task.columTitle}>
            {task.description}
            <input type="checkbox"></input>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ColumList;
