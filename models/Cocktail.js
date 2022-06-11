const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
  name: {type: String},
  qty: {type: Number}
})

const cocktailSchema = new Schema({
  name: String ,
  description: { type: String },
  instruction: { type: String },
  ingredients: [IngredientSchema],
  tags: [String],
  image: {type: String},
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Cocktail", cocktailSchema);
