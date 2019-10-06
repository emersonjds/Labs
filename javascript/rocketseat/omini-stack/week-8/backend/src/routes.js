const express = require("express");
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");
const DeslikeController = require("./controllers/DeslikeController");

const routes = express.Router();

// routes.get("/", (req, res) => {
//   return res.json({ message: `Hello ${req.query.name}` });
// });

routes.get("/devs", DevController.index);
routes.post("/devs", DevController.store);
routes.post("/devs/:devId/deslikes", DeslikeController.store);
routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes;
