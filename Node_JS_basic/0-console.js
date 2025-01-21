const displayMessage = message => {
  process.stdout.write(message + "\n"); // la même chose que console.log, mais en plus casse-couille.
}

module.exports = displayMessage;

