//printing the welcome statement
console.log("Departments in cypher source");



//declaring object student
var student = { department:"Machine learning", department1: "Networking", department2: "Gaming" };

//for in loop is used
for (var item in student) {
//printing all the items declared inside the student class
   console.log(student[item]);
}