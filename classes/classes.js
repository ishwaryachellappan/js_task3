const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question('Hey buddy! your name please.. ?', name => {

//if conditionals are used to check which type you are login in  

   console.log(" welcome " + name + "! cyphersource is glad to welcome you");

  readline.close();
});
