const express = require("express");
const moongose = require("mongoose");
const routes = require("./routes");

const server = express();

moongose.connect(
  "mongodb+srv://oministack8:oministack8@omstack8-awcfj.mongodb.net/oministack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
server.use(express.json());
server.use(routes);

server.listen(3333);
