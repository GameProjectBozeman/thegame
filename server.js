var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var playerCtrl = require('./controllers/playerCtrl.js');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));


app.get("/players", playerCtrl.read);
app.post('/players', playerCtrl.create);
app.put('/players/:id', playerCtrl.update);
// app.delete('/players/:id', playerCtrl.delete);





mongoose.connect("mongodb://localhost:27017/geoDB");
mongoose.connection.once('open', function(){
  console.log("mongoose connected");
});

//lets try mLab to host
app.listen(4400, function(){
  console.log("seeking the meaning of life on port 4400");
});
