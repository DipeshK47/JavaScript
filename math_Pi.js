const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
 */

const dk = {
    name: 'dipesh',
    score: 250,
    isAvailable: true,

    HireMe: function(){
        console.log('HIRED NONE');
    }
}
console.log(Object.getOwnPropertyDescriptor(dk, 'name'));

/*
{
  value: 'dipesh',
  writable: true,
  enumerable: true,
  configurable: true
}
 */

Object.defineProperty(dk,'name',{     //gives access to update properties of Objects
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(dk,'name'));
/*
{
  value: 'dipesh',
  writable: false,
  enumerable: false,
  configurable: true
}
 */

for (let [key,value] of Object.entries(dk)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);
    }
}