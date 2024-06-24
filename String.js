const name = "Dipesh"
const repoCount = 20

// console.log(name + repoCount);  OUTDATED WAY

console.log(`hello my name is ${name} and repo count is ${repoCount}`); //Interpolation method
console.log(name.length);
console.log(name.toUpperCase());

const newString = name.substring(0,4)
console.log(newString); 

const newString1 = name.slice(-4,4)
console.log(newString1);

const spaceString = "    dipesh     "
console.log(spaceString); 
console.log(spaceString.trim()); 


const url = "http://dipesh.com/dk20%kuamr"
console.log(url.replace('20%',"Moe"));
console.log(url.includes("sundar"));


console.log(url.split('/'));