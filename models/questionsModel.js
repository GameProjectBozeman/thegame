var mongoose = require('mongoose');



var questionsSchema = new mongoose.Schema({
  {
      name: {type: String, required: true},
      questions: {
          capital: {type: String, required: true},
          landmarks: {type: String, required: true}
      },
      id: Number
  }



});


module.exports = mongoose.model("questions", questionsSchema);
