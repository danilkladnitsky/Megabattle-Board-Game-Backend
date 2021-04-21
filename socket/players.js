const API_players = require('../api/players')
module.exports =  function(io){
  setInterval(function(){
    API_players._getPlayers({}, null, io, "players")
  }, 3000);
  
}