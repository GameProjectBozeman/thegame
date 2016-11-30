var playerModel = require("./../models/playerModel.js");


module.exports = {

  read: function(req, res){
    PlayerModel.find(req.query)
      .populate('players')
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
  // update: function(req, res){
  //   GalaxiesModel.findByIdAndUpdate(req.params.id, req.body, function(err, result){
  //     if(err){
  //       res.send(err);
  //     }else{
  //       res.send(result);
  //     }
  //   });
  // },
  // delete: function(req, res){
  //   GalaxiesModel.findByIdAndRemove(req.params.id, req.body, function(err, result){
  //     if(err){
  //       res.send(err);
  //     }else{
  //       res.send(result);
  //     }
  //
  //   });
    //








}
