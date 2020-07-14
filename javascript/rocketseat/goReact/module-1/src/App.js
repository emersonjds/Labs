import React, { useState } from "react";
import Header from "./Header";

export default function App() {
  const projects = useState(["projeto 1", "projeto 2"]);

  function handleAddProject() {
    projects.push(`Novo projeto ${new Date.now()}`);
  }

  return (
    <>
      <Header title="Emerson"></Header>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
