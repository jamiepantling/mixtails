const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String, required: true},
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    trim: true,
    minLength: 3,
    required: true
  },
  bio: {
    type: String,
  },
  admin: {
    type: Boolean,
    default: false
  } ,
  favcocktails: [{ type: Schema.Types.ObjectId, ref: 'Cocktail'}],
  favmixes: [{ type: Schema.Types.ObjectId, ref: 'Mixtape'}]
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

module.exports = mongoose.model('User', userSchema);