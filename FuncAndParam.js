function sayMyName(){
    console.log("D");
    console.log("i");
    console.log("p");
    console.log("e");
    console.log("s");
    console.log("h");
}
sayMyName()

                     
function addTwoNums(num1,num2){     // num1, num2 are parameter.
    console.log(num1+num2)
}
addTwoNums(100,2)  //Argument


function addTwoNumbers(num1,num2){   //Another way
    let result = num1+num2
    return result
}
const result = addTwoNumbers(3,2)
console.log("Result:",result)


function addNumbers(num1,num2){  //Another way
    return num1+num2
}
const result2 = addNumbers(3,9)
console.log("Result2:",result2)


function loginUserMsg(username){
    if(username === undefined){         //if(!username) => same thing
        console.log("Pls enter username");
        return 
    }
    return `${username} just logged in`
}
console.log(loginUserMsg("hitesh"))
console.log(loginUserMsg())


