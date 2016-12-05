var mongoose = require('mongoose');



var playerSchema = new mongoose.Schema({
  name: {type: String, required: true},//
  // ip: {type: String, required: true},
  // id: String,
  // timestamp: Date,
  avatar: {type: String, required: true, default: "http://www.atelier-eme.it/wp-content/uploads/2016/03/avatar-default.png"},
  points: {type: Number, default: 0}
});


module.exports = mongoose.model("players", playerSchema);
