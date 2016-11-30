var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get("/players", playerCtrl.read);
app.post('/players', playerCtrl.create);
// app.put('/players/:id', playerCtrl.update);
// app.delete('/players/:id', playerCtrl.delete);









//lets try mLab to host
app.listen(7000, function(){
  console.log("seeking the meaning of life on port 7000");
});
