const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const mixtapeSchema = new Schema({
    name: {type: String},
    drinks: [{ type: Schema.Types.ObjectId, ref: 'Cocktail' }],
    songs: String,
    moods: [String],
    createdBy: {type: Schema.Types.ObjectId, ref: 'User'},
    shared: {type: Boolean}
})

module.exports = mongoose.model('Mixtape', mixtapeSchema)