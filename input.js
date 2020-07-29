const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
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
    }
  });
};

module.exports = { setupInput };