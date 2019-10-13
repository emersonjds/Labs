const express = require("express");
const moongose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();

//iniciando o DB
moongose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3333);
