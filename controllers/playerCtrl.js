var mongoose = require('mongoose');
var PlayerModel = require("./../models/playerModel.js");


module.exports = {

  read: function(req, res){
    PlayerModel.find(req.query)
      .exec(function(err, result){
        if(err){
          res.send(err);
        }else{
          res.send(result);
        }
      });
  },
  create: function(req, res){
    var Player = new PlayerModel(req.body);
    Player.save(function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  update: function(req, res){
    PlayerModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
      if(err){
        res.send(err);
      }else{
        res.send(result);
      }
    });
  },
  // delete: function(req, res){
  //   PlayerModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
  //     if(err){
  //       res.send(err);
  //     }else{
  //       res.send(result);
  //     }
  //
  //   });









}
