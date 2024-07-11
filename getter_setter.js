class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}dkyo`
    }

    set password(value){
        this._password = value;
    }
}

const dk = new User('dk@gmail.com','abc')
console.log(dk.password);
console.log(dk.email);