
let connection;

// Allows us to crtl+c out of play.js in node
const handleUserInput = function(key) {
  
  // if (key === '\u0003') {
  //   process.exit();
  // } 

  switch (key) {
    case '\u0003':
      process.exit();
      break;
    case 'w':
      console.log("up");
      process.stdout.write(connection.write("Move: up"));
      break;
    case 'a':
      console.log("left");
      process.stdout.write(connection.write("Move: left"));
      break;
    case 's':
      console.log("down");
      process.stdout.write(connection.write("Move: down"));
      break;
    case 'd':
      console.log("right"); 
      process.stdout.write(connection.write("Move: right"));
     
  }
}
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

// setupInput();

module.exports = {setupInput};