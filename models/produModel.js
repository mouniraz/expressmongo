const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  nom: String,
  description:String,
  prix:Number
});

module.exports = mongoose.model("ProductSchema", ProductSchema);