const secure = require('../secure')
module.exports = function(app) {
  app.get('/generateToken', function(req, res) {
    res.send(secure.generateAccessToken(req.query))
  });
}


