class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    CapsUsername(){
        return `${this.username.toUpperCase()}`
    }
}
const dk = new User('dk','dk@fmail.com','123')
console.log(dk.encryptPassword())
console.log(dk.CapsUsername())


// behind the scenes

function User2(username,email, password) {
    this.username = username
    this.email = email
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const dky = new User('dy','dy@gmail.c','1234')

console.log(dky.encryptPassword())
console.log(dky.changeUsername())