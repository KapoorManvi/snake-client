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
    
    let count = 0;
    let moveUp = setInterval(() => {
      process.stdout.write(conn.write("Move: up"));
      count++;
      if (count > 5) {
        clearInterval (moveUp);
      }
    }, 300);
    
  
    // setTimeout(() => {
    //   process.stdout.write(conn.write("Move: up"));
    // }, 400);

    // setTimeout(() => {
    //   process.stdout.write(conn.write("Move: up"));
    // }, 700);

   
    // conn.write("Move: up"); 
   
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
  
}

module.exports = {connect};