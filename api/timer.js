module.exports = function(app) {
  app.get('/timer', function(req, res) {
    let cmd; 
    if(req.query.action == "start")
      cmd = {timer: "start"};
    else if(req.query.action == "stop")
      cmd = {timer: "stop"};
    else if(req.query.action == "reset")
      cmd = {timer: "reset"};

    app.io.emit("timer", cmd);
    res.send(cmd)
  });
}


