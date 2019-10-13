const express = require("express");

const routes = express.Router();
const ProductControler = require("./controllers/ProductController");

//primeira rota
routes.get("/products", ProductControler.index);

module.exports = routes;
