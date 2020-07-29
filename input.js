const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
let connection;
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
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on('keypress', (str, key) => {
    if (key.sequence === '\u0003') {
      process.exit();
    } else if (key.name === 'w') {
      connection.write('Move: up');
    } else if (key.name === 's') {
      connection.write('Move: down');
    } else if (key.name === 'a') {
      connection.write('Move: left');
    } else if (key.name === 'd') {
      connection.write('Move: right');
    } else if (key.name === 'e') {
      connection.write('Say: ez');
    }
  });
};

module.exports = { setupInput };