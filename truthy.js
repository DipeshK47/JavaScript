const userEmail = 'dk@gmail.com';

if (userEmail) {
    console.log('Got user email');
} else{
    console.log('Dont have user email');
}

const userEmail1 = '';
if (userEmail1) {
    console.log('Got user email');
} else{
    console.log('Dont have user email');
}

//falsy values: false, 0, -0, BigInt, "", null, undefined, NaN

//Truthy values: "0", 'false', " ", [], {}, function(){}


if(userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
console.log(val1);


// Terniary Operator
// condition ? True : false

const price = 100
price <= 80 ? console.log("less than 80") : console.log('more than 80');