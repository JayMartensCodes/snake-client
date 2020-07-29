const { connect } = require('./client');
const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(data) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  data();
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on('keypress', (str, key) => {
    if (key.sequence === '\u0003') {
      process.exit();
    }
  });
};

console.log('Connecting ...');
connect();
setupInput(handleUserInput);