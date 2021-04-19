
const port = 8000;

module.exports = function(io){
  io.on('connection', (client) => {
    //Connect status
    console.log(`connected [${client.handshake.address}]`);
    client.emit("timer", "hello");
    client.on('disconnect', function () {
      console.log(`disconnected [${client.handshake.address}]`);
   });
  
   
  });
  
  io.listen(port);
  console.log('Socket listening on port ', port);
 
 }
