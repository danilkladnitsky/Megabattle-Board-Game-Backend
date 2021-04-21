const secure = require('../secure')
module.exports = function(app) {
  app.get('/generateMasterToken', function(req, res) {
    if(req.query.username == "admin" && req.query.pwd == "megabattle")
    res.send(secure.generateMasterToken())
    else
    res.send({message: "auth failed"})
  });
}


