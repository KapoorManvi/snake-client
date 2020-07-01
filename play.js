const net = require('net');

/**
 * Establishes connection with the game server
 */
const { connect } = require('./client');
console.log('Connecting ...');
const { setupInput } = require('./input');

console.log(connect);
connect();

setupInput();



