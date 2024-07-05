// IF STATEMENT

const temp = 41
if (temp < 50){
    console.log("less than 50");
} else {
console.log("Temp is greater than 50");
}
console.log('Executed');


const score = 200
if (score > 100){
    const power = 'fly'
    console.log(`User power: ${power}`);
}

const userLoggedIn = true
const debitcard = true
const loggedInform = false
const loggedfrommail = true
if (userLoggedIn && debitcard) { 
    console.log('Allowed to buy');
}
if (loggedInform || loggedfrommail) {
    console.log("Used logged in");
}