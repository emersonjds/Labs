const moongose = require("mongoose");

const Product = moongose.model("Product");

module.exports = {
  async index(req, res) {
    //first param in paginate to use bd queries , like where, join ...., second param limit and current page
    const { page = 1 } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async update(req, res) {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    return res.json(product);
  },

  async destroy(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    return res.send("Produto deletado com sucesso");
  }
};
