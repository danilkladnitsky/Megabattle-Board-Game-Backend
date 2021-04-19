const port = 4000;
const express = require('express');
const app = express();
let cors = require("cors")
app.use(cors())
var bodyParser = require('body-parser'); 
const io = require('socket.io')();

app.listen(port, () => console.log('Express Server Now Running On localhost:4000'));