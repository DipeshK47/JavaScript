const score = 400
console.log(score);
//////////////////////////////////////////////////
const balance = new Number(100)
console.log(balance);
//////////////////////////////////////////////////
console.log(balance.toString());
//////////////////////////////////////////////////
console.log(balance.toFixed(2));
//////////////////////////////////////////////////
const num2 = 23.453
console.log(num2.toPrecision(3));
//////////////////////////////////////////////////
const num3 = 1000000
console.log(num3.toLocaleString('en-IN'));

//////////////////////////////////////////////////MATHS///////////////////////////////////////////

console.log(Math);
console.log(Math.abs(-4));   // negative to positive values
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.6));
console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 30
console.log(Math.floor(Math.random() * (max - min + 1) + min));  //IMPORTANT
