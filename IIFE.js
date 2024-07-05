//Immediately Invoked Function Expressions (IIFE)

(function hello(){   //NAMED IIFE
    console.log(`DB CONNECTED`)
})();

//remove pollution by global scope

( (name) => {    //SIMPLE/UNNAMED IIFE
    console.log(`DB CONNECTED ${name}`);
} )('dipesh');

