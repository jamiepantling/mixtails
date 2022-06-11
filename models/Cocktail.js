const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cocktailSchema = new Schema({
  name: String ,
  description: { type: String },
  instruction: { type: String },
  ingredients: [String],
  tags: [String],
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Cocktail", cocktailSchema);
