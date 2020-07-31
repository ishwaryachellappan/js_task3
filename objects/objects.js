function cyphersource(name,name1,name2){ 
    this.name = name; 
    this.name1 = name1; 
    this.name2 = name2; 
} 
console.log('Departments in Cypher sorce');
//new keyword to create an object 
let departments  = new cyphersource('Machinelearning','Networking','Gaming'); 
//property accessors 
console.log(departments.name); 
console.log(departments.name1); 
console.log(departments.name2);