function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const dk = new createUser('dk',25)
const ydy = new createUser('ydy',100)

dk.printMe()


/*

A new object is created, the new keyword initiates creation of new Javascript object.

A prototype is linked: the newly created object gets linked to the prototype property of constructor function. this means it has access to properties
and method definded on constructor's prototype

Then constructor is called: the constructor function is called with specified arguments and this is bound to newly created object


*/ 