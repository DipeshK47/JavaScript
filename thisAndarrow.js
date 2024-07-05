const user = {
    username: 'Dipesh',
    price: '999',
    welcomeMsg: function(){
        console.log(`${this.username}, Welcome to Website`);
        //console.log(this);
    }
}
user.welcomeMsg()
user.username = 'Sam'
user.welcomeMsg()

console.log(this)
