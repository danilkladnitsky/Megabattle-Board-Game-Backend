const secure = require('../secure')
//Routes
const players = require('./players')
const steps = require('./steps')
const generateToken = require('./generateToken')

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    const nonSecurePaths = ['/generateToken'];
    if (nonSecurePaths.includes(req.path)) return next();
    const authHeader = req.headers.authorization
    const token = authHeader && authHeader.split(' ')[1]
    secure.authenticateToken({token: token}, res.send).then(function(result) {
      if (result.status)
      next();
    else
      res.send(result.message)
    })
  });

  players(app)
  steps(app)
  generateToken(app)

};