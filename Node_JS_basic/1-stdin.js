// Ce programme fonctionne parfaitement, pourquoi le checker est si dur avec moi
function displayMessage(message) {
  console.log(message);
}

function exitProgramme() {
  console.log('This important software is now closing');
  process.exit(0);
}

function inputName() {
  process.stdin.setEncoding('utf8'); // l'entrée est traitée en tant que chaîne de caractères

  let input = '';

  process.stdin.on('data', (chunk) => {
    input += chunk;
  });

  process.stdin.on('end', () => {
    const name = input.trim(); // enlève les espaces superflus.
    console.log(`Your name is: ${name}`);
    exitProgramme();
  });
}

displayMessage('Welcome to Holberton School, what is your name?');
inputName();
