import React, { useState, useEffect } from "react";
import Header from "./Header";
import "./App.css";
import api from "./services/api";

export default function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get("/projects").then((response) => {
      console.log(response);
      setProjects(response.data);
    });
  }, []);

  async function handleAddProject() {
    //neste momento em que um novo array foi chamado, uma nova estrutura esta sendo criada nao alterando a anterior
    // setProjects([...projects, `Novo projeto ${new Date().getTime()}`]);
    const response = await api.post("/projects", {
      name: `Novo projeto ${new Date().getTime()}`,
      owner: "Emerson Silva",
    });

    const project = response.data;
    setProjects([...projects, project.data]);
  }

  return (
    <>
      <Header title="Emerson"></Header>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.name} - {project.owner}{" "}
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddProject}>
        Adicionar Projeto
      </button>
    </>
  );
}
