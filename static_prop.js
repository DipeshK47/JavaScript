class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){   //provokes access 
        return `123`
    }
}

const dk = new User('dk')   
//console.log(dk.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}
const dky = new Teacher('pinki','pink@mail.com')
console.log(dky.createId())