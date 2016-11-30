var mongoose = require('mongoose');



var playerSchema = new mongoose.Schema({
  name: {type: String, required: true},//default: my creation?
  ip: {type: String, required: true},
  id: String,
  timestamp: Date
});


module.exports = mongoose.model("players", playerSchema);
