const API_players = require('../api/players')
const API_steps = require('../api/steps')
module.exports =  function(io){
  setInterval(function(){
    API_players._getPlayers({}, null, io, "players")
  }, 3000);

  setInterval(function(){
    API_steps._getSteps({}, null, io, "steps")
  }, 5000);
  
}