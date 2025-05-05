const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Quina és la teva edat? ', (edat) => {
    if (edat >= 18) {
      console.log('Ets major d\'edat.');
    } else {
      console.log('Ets menor d\'edat.');
    }
    readline.close();
  });