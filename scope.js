//GLobal Scope
let a = 300

//Block scope
if(true){let a = 10
const b = 20
console.log("inner: ",a);
}

console.log(a)

//Nested Scope
function one(){
    const username ='dipesh'

    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website);  CANT EXECUTE THIS
    two()
}
one()


if(true){
    const user='dipesh'
    if(user === 'dipesh'){
        const web = 'youtube'
        console.log(user+web)
    }
    //console.log(website);
}
//console.log(user);


//Example

function addOne(num){
    return num + 1;
}
console.log(addOne(5));
/////////////////////////////////
const addTwo = function(num){   //hoisting
    return num + 2;
}
console.log(addTwo(5));
