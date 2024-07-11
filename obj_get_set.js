const User = {
    _email: 'dk@gmail.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const dk = Object.create(User)
console.log(dk.email);