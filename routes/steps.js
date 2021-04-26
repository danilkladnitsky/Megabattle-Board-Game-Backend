const io = require('socket.io')();
const api = require('../api/steps')
module.exports = function(app) {
  app.get('/players', function(req, res) {
    console.log("step was made")
    api._getSteps({}, res, app.io, "steps")
  });
}


