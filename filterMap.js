const coding = ['js', 'css','cpp','py','rb']

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values);


const  myNums = [1, 2, 3, 4, 5, 6, 7, 8]
const newNums = myNums.filter( (num) => num > 5)
console.log(newNums);

const  myNums1 = [1, 2, 3, 4, 5, 6, 7, 8]
const newNums1 = myNums1.filter( (num) => {
    return num > 5
})
console.log(newNums1);


const nums = [1,2,3,4,5,6,7,8,9]
myNums1.forEach( (num) => {
    if (num > 4) {
        newNums.push(num)
    }
})
console.log(nums);