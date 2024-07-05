// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const str = "hello world"
for (const greet of str) {
    console.log(`Each char is ${greet}`);
}

// Maps

const map =new Map()
map.set('foo', 'bar')
map.set('USA', 'United States')
console.log(map);

// for of loop on Maps
for (const key of map) {
    console.log(key);
}
for (const [key,value] of map) {
    console.log(key, ':-', value);
}


// for of loop on Maps on Object

// const myObject = {
//     'game1': 'NFS',
//     'game2': 'GTA'
// }
//                                               //Object is not iterable, can be done by other way
// for (const [key,value] of myObject) {
//     console.log(key, ':-', value);
// }



//for in
const lang = {
    js: 'javascript',
    cpp: 'c++',
    py: 'python',
    rb: 'ruby'
}
for (const key in lang) {
    console.log(`${key} shortcut is for ${lang[key]}`);
}


const program = ['js', 'cpp', 'py', 'rb']
for (const key in program) {
    console.log(program[key]);
}


const map1 =new Map()   //map is not iterable
map1.set('foo', 'bar')
map1.set('USA', 'United States')
for (const key in map1) {
    console.log(key);
}



const coding = ['js', 'cpp', 'py', 'rb']
coding.forEach(function (item) {
    console.log(item);
})

//another variation of forEach

function printMe(item){
    console.log(item);
}
coding.forEach(printMe);