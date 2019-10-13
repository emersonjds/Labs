const express = require("express");
const cors = require("cors");
const moongose = require("mongoose");
const requireDir = require("require-dir");

//iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//iniciando o DB
moongose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(3333);
