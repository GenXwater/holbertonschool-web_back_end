function displayMessage(message) {
  process.stdout.write(`${message}\n`);
}

function exitProgramme() {
  console.log('This important software is now closing');
  process.exit();
}

function inputName() {
  process.stdin.setEncoding('utf8'); // l'entrée est traitée en tant que chaîne de caractères
  process.stdin.on('data', (chunk) => {
    const name = chunk.trim(); // trim supprime les espaces superflus
    console.log(`Your name is: ${name}`);
    exitProgramme();
  });
}

displayMessage('Welcome to Holberton School, what is your name?');
inputName();
