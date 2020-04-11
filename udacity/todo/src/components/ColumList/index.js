import React from "react";
import If from "../../utils/If";

const ColumList = ({ tasks, columTitle, addTodo, updateTodo }) => {
  let tarefas = [
    {
      id: Math.random(),
      name: "Emerson",
      status: "Add Todo",
    },
  ];
  return (
    <>
      <h3>{columTitle}</h3>
      <ul>
        <br />
        {tarefas.map((task) => (
          <If test={task.status === columTitle}>
            <form onSubmit={addTodo}>
              <input type="text" />
              <button>Add Todo</button>
            </form>
            <li>
              {task.name}
              <input type="checkbox"></input>
            </li>
          </If>
        ))}
      </ul>
    </>
  );
};

export default ColumList;
