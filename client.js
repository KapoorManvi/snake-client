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
  
  conn.on("connect", () => {
    console.log("Successfully connected to server");
    conn.write("Name: MK");  
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
  
}

module.exports = {connect};