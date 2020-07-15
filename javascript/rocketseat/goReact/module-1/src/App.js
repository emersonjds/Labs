import React, { useState } from "react";
import Header from "./Header";
import "./App.css";

export default function App() {
  const [projects, setProjects] = useState(["projeto 1", "projeto 2"]);

  function handleAddProject() {
    //neste momento em que um novo array foi chamado, uma nova estrutura esta sendo criada nao alterando a anterior
    setProjects([...projects, `Novo projeto ${new Date().getTime()}`]);
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
