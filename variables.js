const accountId = 13433
let accountemail = "account@gmail.com"
var accountpassword = "password"
accountcity = "Delhi"

// accountId = 2 
let accountState;
accountemail = "test@gmail.com"
accountpassword = "password234"
accountcity = "Leh"

/*
Prefer not to use "var" cuz of issue in block scope and function scope
*/

console.log(accountId);
console.table([accountId, accountemail, accountpassword, accountcity,accountState]);