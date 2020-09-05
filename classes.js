//creating a class

class Welcome {

  //constructor is created
  constructor(cyso) {
    this.welcomename = cyso;
  }
}
mywelcome = new Welcome;

const readline = require('readline');

//getting input through readline() method

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Hey buddy!your name please..? ', (answer) => {
  //  Log the answer in a database
  console.log(`welcome ${answer}! cypher source is glad to connect with you!`);

  rl.close();

});

//priniting the output through constructor in  console.log()

console.log( mywelcome.name);
