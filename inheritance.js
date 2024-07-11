class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{      // gives all functionalities of class User
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
        
    }

    addCourse(){
        console.log(`A new course is available ${this.username}`);
    }
}

const dk = new Teacher('dk','dk@gmail.com','2231');
dk.addCourse()


const dky = new User('kyy')
dky.logMe()

console.log(dk instanceof User);