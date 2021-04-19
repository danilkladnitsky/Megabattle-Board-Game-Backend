const express = require('express');
const app = express();
const io = require('socket.io')();
let cors = require("cors")
app.use(cors())
const port = 4000;
app.io = io;
require('./routes')(app, {});
const socket = require('./socket')(io, {})
app.listen(port, () => console.log('Express Server Now Running On localhost:4000'));
