var mongoose = require('mongoose');



var playerSchema = new mongoose.Schema({
  name: {type: String, required: true},//
  // ip: {type: String, required: true},
  // id: String,
  // timestamp: Date,
  avatar: {type: String, required: true, default: "http://previews.123rf.com/images/coffgirl/coffgirl1207/coffgirl120700005/14631460-Bunny-eating-a-carrot-Stock-Vector-rabbit-cartoon-bunny.jpg"},
  points: {type: Number, default: 0}
});


module.exports = mongoose.model("players", playerSchema);
