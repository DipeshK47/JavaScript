const tinderUser = new Object();    //ways to create object by SINGELTON.
//const tinderUser = {}  NON-SINGELTON

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);


const regularUser = {
    email: 'sum@example.com',
    fullname: {
        userfullname: {
            firstname: 'sam',
            lastname: 'kumar'           //Object nesting. Object in Object
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

//MERGING TWO OBJECTS
const obj1 ={
    1: 'a',
    2: 'b',
}

const obj2 = {
    3: 'c',
    4: 'd',
}

///const obj3 = Object.assign({},obj1,obj2)   //Using assign operator
const obj3 = {...obj1, ...obj2}  //Using spread operator
console.log(obj3);


const user = [
    {
        id:1,
        mail:'h@gamil.com'
    },
    {
    id:2,
    mail:'h@gamil.com'
    },
    {
    id:3,
    mail:'h@gamil.com'
    },
]

user[1].mail

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Object Destructuring and JSON API

const course = {
    coursename: 'ML',
    price: '999',
    teacher: 'dipesh'
}
const {teacher: tea} = course
console.log(tea)   //destructuring



