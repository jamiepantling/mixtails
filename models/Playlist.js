const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playlistSchema = new Schema({
  links: [{ type: String }],
});

module.exports = mongoose.model("Playlist", playlistSchema);
