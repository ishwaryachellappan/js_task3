//creating a class

class Welcome {
  constructor(cyso) {
    this.welcomename = cyso;
  }
}

mywelcome = new Welcome(" ");
const readline = require('readline');

//getting input through readline() method

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hey buddy!your name please..? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`welcome ${answer}! cypher source is glad to connect with you!`);

  rl.close();

});

//priniting the output through console.log()

console.log( mywelcome.welcomename);