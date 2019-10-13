const moongose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new moongose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

//add paginate plugin
ProductSchema.plugin(mongoosePaginate);

moongose.model("Product", ProductSchema);
