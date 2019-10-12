const express = require("express");
const moongose = require("mongoose");
const cors = require("cors");

const routes = require("./routes");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server); //configuracao de socket io

const connectedUSers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;
  connectedUSers[user] = socket.id;
});

moongose.connect(
  "mongodb+srv://oministack8:phiberoptiks2@omstack8-awcfj.mongodb.net/oministack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

//midlleware
app.use((req, res, next) => {
  try {
    req.io = io;
    req.connectedUSers = connectedUSers;
    next();
  } catch (error) {
    next(error);
  }
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
