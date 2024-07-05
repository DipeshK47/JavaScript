const user = {
    username: 'Dipesh',
    price: '999',
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to Website`);
        //console.log(this);
    }
}
user.welcomeMsg()
user.username = 'Sam'
user.welcomeMsg()
console.log(this)


// function chai(){
//     let username = 'dk'
//     console.log(this.username);
// }
// chai()

const hello = () => {   // Arrow function
    let username = 'dipkesh'
    console.log(this.username);
}
hello()

const addTwo = (num1,num2) => {
    return num1 + num2          //Explicit return
}
console.log(addTwo(3,4))

//IMPLICIT RETURN ARROW
const addwo = (num1,num2) =>  num1 + num2
console.log(addwo(3,4))

const addo = (num1,num2) =>  ({username: 'Dipesh'}) //Object 
console.log(addo(3,4))