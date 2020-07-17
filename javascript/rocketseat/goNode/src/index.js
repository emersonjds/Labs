const express = require("express");
const uniquid = require("uniqid");
const cors = require('cors')

const app = express();
app.use(cors());
//isso habilita o Express a entender padroes JSON sendo passado atraves das rotas
app.use(express.json());


const projects = [];

//Middlewares

function loggedRequest(req, res, next) {
  const { method, url } = req;
  console.log(`[${method.toUpperCase()}] ${url}`);
  next();
}

app.use(loggedRequest);

app.get("/", (req, res) => {
  return res.json(projects);
});

app.get("/projects", (req, res) => {
  //create filter
  const { title } = req.params;

  const results = title
    ? projects.filter((project) => project.title.includes(title))
    : projects;

  return res.json(results);
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
    data: project,
  });
});

app.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title, owner } = req.body;

  //find by index on Array
  const projectIndex = projects.findIndex((project) => project.id === id);

  // case not found
  if (projectIndex < 0) {
    return res.status(401).json({
      error: "Not Found",
    });
  }

  // create a new project with changed data passa from param
  const project = {
    id,
    title,
    owner,
  };

  // changed data on array by position of project
  projects[projectIndex] = project;

  return res.json({
    message: "Data changed",
    data: project,
  });
});

app.delete("/projects/:id", loggedRequest, (req, res) => {
  const { id } = req.params;

  const projectIndex = projects.findIndex((project) => project.id === id);

  if (projectIndex < 0) {
    return res.status(401).json({
      error: "Not Found",
    });
  }

  // remove data from array passing the index and how many positions will remove
  projects.splice(projectIndex, 1);

  // when use delete method, we return status 204 and clear response
  return res.status(204).send();
});

//Always created an application in node it's necessary to say where the application will be listening
app.listen(3000, () => {
  console.log("🚀 back-end rodando");
});