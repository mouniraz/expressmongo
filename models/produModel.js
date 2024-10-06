const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  nom: String,
  description:String,
  prix:double
});

module.exports = mongoose.model("ProductSchema", ProductSchema);