const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = () => {
  const conn = net.createConnection({ 
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  conn.on("connect", (data) => {
    console.log("Successfully connected to server");
  });
  
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
  
}

// console.log('Connecting ...');
// connect();

module.exports = {connect};