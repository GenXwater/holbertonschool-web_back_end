// use of a displayMessage arrow function for console output
const displayMessage = message => {
  process.stdout.write(message + "\n");  
};

module.exports = displayMessage;