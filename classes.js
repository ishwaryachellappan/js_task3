process.stdin.resume();
process.stdin.setEncoding('utf8');
// getting input through readline method
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
//creating classes named CySo
class CySo {
    
    getValue(getusername){
        this.username = getusername;
        console.log("Welcome " + this.username +"! Cypher Source is proud to connect with you.");
    }
    
}

var userdetails = new CySo();
var username;



readline.question("Hey buddy! What's your name?", (name) => {
    console.log("\n"); 
    this.username = name;
    userdetails.getValue(this.username)
    
});