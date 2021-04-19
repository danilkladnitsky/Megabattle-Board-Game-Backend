const io = require('socket.io')();
const api = require('../api/players')
module.exports = function(app) {
  app.get('/players', function(req, res) {
    api._getPlayers({}, res, app.io, "players")
  });
}


