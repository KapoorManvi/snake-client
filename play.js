const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
console.log(connect);
connect();

const handleUserInput = function(key) {
  console.log("key: ", key);
  if (key === '\u0003') {
    process.exit();
  }
}
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

setupInput();
