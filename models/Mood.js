const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moodSchema = new Schema({
    content: {type: String}
})

module.exports = mongoose.model('Mood', moodSchema)