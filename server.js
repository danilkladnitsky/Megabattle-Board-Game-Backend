const express = require('express');
const path = require("path");
const app = express();
const io = require('socket.io')();
let cors = require("cors")
app.use(express.static(path.join(__dirname,  "build")));
app.use(express.static("public"));
app.use(cors())


app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, "..", "build", "index.html"));
});
const port = 3000;
app.io = io;
require('./routes')(app, {});
const socket = require('./socket')(io, {})
app.listen(port, () => console.log('Express Server Now Running On localhost:3000'));
