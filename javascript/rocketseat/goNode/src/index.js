const express = require("express");
const uniquid = require("uniqid");

const app = express();

//isso habilita o Express a entender padroes JSON sendo passado atraves das rotas
app.use(express.json());

const projects = [];

app.get("/", (req, res) => {
  return res.json(projects);
});

app.get("/projects", (req, res) => {
  // const query = req.query;
  // console.log(query);

  return res.json(projects);
});

app.post("/projects", (req, res) => {
  const { name, owner } = req.body;

  const project = {
    id: uniquid(),
    name,
    owner,
  };

  projects.push(project);

  return res.json({
    message: "project created",
  });
});

app.put("/projects/:id", (req, res) => {
  const data = req.params;

  console.log(data);

  return res.json([
    "Projeto 4",
    "Projeto 2",
    "Projeto 3",
    "Novo Projeto Adicionado",
  ]);
});

app.delete("/projects/:id", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

//Always created an application in node it's necessary to say where the application will be listening
app.listen(3000, () => {
  console.log("🚀 back-end rodando");
});
