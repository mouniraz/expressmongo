const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
  name: String,
  email:String
});

module.exports = mongoose.model("User", AppSchema);