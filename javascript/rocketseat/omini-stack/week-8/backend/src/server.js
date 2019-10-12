const express = require("express");
const moongose = require("mongoose");

const routes = require("./routes");
const cors = require("cors");

const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server); //configuracao de socket io

const connectedUSers = {};

io.on("connection", socket => {
  const { user } = socket.handshake.query;
  console.log(user, socket.id);
  connectedUSers[user] = socked.id;
});

moongose.connect(
  "mongodb+srv://oministack8:oministack8@omstack8-awcfj.mongodb.net/oministack8?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

app.use((req, res, next) => {
  req.io = io;
  req.connectedUSers = connectedUSers;
  return next();
});
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
