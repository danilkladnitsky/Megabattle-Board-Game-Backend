const io = require('socket.io')();
const api = require('../api/steps')
module.exports = function(app) {
  app.get('/players', function(req, res) {
    api._getSteps({}, res, app.io, "steps")
  });
}


