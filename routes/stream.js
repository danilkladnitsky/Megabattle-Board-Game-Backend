module.exports = function(app) {
  let id = 1;
  app.get('/stream', function(req, res) {
    let cmd; 
    if(req.query.message != undefined && req.query.message != "")
      cmd = {message: req.query.message, time: "time", post_id: id};

      id++;

    app.io.emit("stream", cmd);
    res.send(cmd)
  });
}


