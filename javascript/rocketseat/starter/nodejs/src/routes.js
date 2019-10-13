const express = require("express");

const routes = express.Router();
const ProductControler = require("./controllers/ProductController");

//primeira rota
routes.get("/products", ProductControler.index);
routes.get("/product/:id", ProductControler.show);
routes.post("/product", ProductControler.store);
routes.put("/product/:id", ProductControler.update);
routes.delete("/product/:id", ProductControler.destroy);

module.exports = routes;
