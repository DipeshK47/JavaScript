let score = "33"  //string as its in "" format

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)  //convered string score into number
console.log(typeof valueInNumber);
console.log(valueInNumber);

console.log('***************')

let score1 = "33abc"  //string as its in "" format

console.log(typeof score1);
console.log(typeof (score1));

let valueInNumber1 = Number(score1)  //convered string score into number
console.log(typeof valueInNumber1);
console.log(valueInNumber1);

console.log('***************')

let score2 = "true"  //string as its in "" format

console.log(typeof score2);
console.log(typeof (score2));

let valueInNumber2 = Number(score2)  //convered string score into number
console.log(typeof valueInNumber2);
console.log(valueInNumber2);


// "33" -> 33
// "33abc" -> NaN
// true -> 1; false -> 0
// "" -> false
// "dipesh" -> true

console.log('*******///********')
let isLogedIn = false

let booleanIsLoggedIn = Boolean(isLogedIn)
console.log( booleanIsLoggedIn);


console.log('*******///********')

let someNumber = 33
let stringNumber = String(someNumber)

console.log(typeof stringNumber);