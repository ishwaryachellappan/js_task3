exports.Password = function (name , password){
//conditional statements are used for checking the username and password given
    if(name == "Ishu" && password == "29112000"){
        return "success";
    }
    else{
        return "Not matched,please Try Again";
    }
}