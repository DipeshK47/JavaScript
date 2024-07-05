//Symbol
const mySym = Symbol('key1')

// Onject Litersls
const JsUser = {
    name: 'Dipesh',
    "Full Name": 'Dipesh Kumar',
    age: 18,                    //Object
    Location: 'Delhi',
    mail: "random@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Mondays","Sunday"],
    [mySym]: 'mykey'     
} 

console.log(JsUser.name);
console.log(JsUser['name']); //another method to call object
console.log(JsUser['Full Name']);
console.log(JsUser[mySym]); 


JsUser.greeting = function(){
    console.log("Hello User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello User, ${this.name}`); 
}
console.log(JsUser.greetingTwo());

JsUser.mail = 'random233@gmail.com';  //change email value
Object.freeze(JsUser);  //object freezed no more changes can be made now.
JsUser.mail = 'randoMM233@gmail.com'; //wont be made
//console.log(JsUser);