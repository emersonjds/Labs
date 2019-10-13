const moongose = require("mongoose");

const Product = moongose.model("Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();
    return res.json(products);
  }
};
