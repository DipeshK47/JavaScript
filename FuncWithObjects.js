function calcCartPrice(...num1){   /// ... operator know as REST operator as well as SPREAD operator based on use case, HERE REST operator
    return num1
}
console.log(calcCartPrice(2,3,4));


const user = {
    name: 'dipesh',
    price: '1000'
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}
handleObject(user)


function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
handleObject({
    username: 'dk',
    prices: '999'
})


const myNewArray = [100,200,3000]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));


function returnSecondValue(getArray){
    return getArray[1]
}    
console.log(returnSecondValue([100,5000,23023]));    //directly
