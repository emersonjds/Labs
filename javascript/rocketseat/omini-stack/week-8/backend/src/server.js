const express = require("express");

const server = express();

server.get("/", (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

server.listen(3333);
