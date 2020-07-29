const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
let connectObject = connect();
setupInput(connectObject);