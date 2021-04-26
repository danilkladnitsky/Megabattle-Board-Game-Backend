module.exports = function(app) {
  let id = 1;
  app.get('/stream', function(req, res) {
    let cmd; 
    if(req.query.message != undefined && req.query.message != "")
      cmd = {message: req.query.message, time: "time", post_id: id};

      id++;
      console.log("message was sent: " + req.query.message)
    app.io.emit("stream", cmd);
    res.send(cmd)
  });
  app.get('/topic', function(req, res) {
    let cmd; 
    if(req.query.message != undefined && req.query.message != "")
      cmd = {message: req.query.message};
      console.log("topic was sent: " + req.query.message)
    app.io.emit("topic", cmd);
    res.send(cmd)
  });
}
 

