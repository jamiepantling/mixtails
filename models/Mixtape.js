const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mixtapeSchema = new Schema({
  name: { type: String },
  cocktails: [{ type: Schema.Types.ObjectId, ref: "Cocktail" }],
  playlists: [{ type: String }],
  moods: [{ type: Schema.Types.ObjectId, ref: "Mood" }],
  createdBy: { type: Schema.Types.ObjectId, ref: "User" },
  shared: { type: Boolean },
});

module.exports = mongoose.model("Mixtape", mixtapeSchema);
