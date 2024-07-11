// Object Literal

const user = {
    username: 'dipesh',
    loginCount: 10,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details")
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}

console.log(user.username)
console.log(user.getUserDetails())


// const promiseOne = new Promise()  HERE, 'new' function is a constructor function

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username} `)
    }
    return this
} 

const userOne = new User('Dk', 12, true)
const userTwo = new User('DYk', 11, false)
console.log(userOne.construtor)
console.log(userTwo)