const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.json({
    message: "Node running",
  });
});

app.get("/projects", (req, res) => {
  return res.json(["Projeto 1", "Projeto 2", "Projeto 3"]);
});

app.post("/projects", (req, res) => {
  return res.json([
    "Projeto 1",
    "Projeto 2",
    "Projeto 3",
    "Novo Projeto Adicionado",
  ]);
});

app.put("/projects/:id", (req, res) => {
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
