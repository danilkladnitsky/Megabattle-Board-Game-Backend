module.exports = function(app) {
  app.get('/cubic', function(req, res) {
    let cmd; 
    if(req.query.value != undefined && req.query.value != "")
      cmd = {value: req.query.value};

    app.io.emit("cubic", cmd);
    res.send(cmd)
  });
}


