let myName2 = 'dipesh'
let myName = 'dipesh    '

console.log(myName2.length)
//console.log(myName.trim().length)


let myHeros = ['thor','spiderman']

let heroPower = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function(){
        console.log(`Spider powers is ${this.spiderman}` )
    }
}

heroPower.getSpiderPower()

// Inheritance

const user = {
    name: 'dk',
    email: 'dk@google.com'
}

const Teacher = {
    makeVideo: true
}

const TeachSupport ={
    isAvailable: false
}

const TASupport = {
    makeAssg: 'Js Assg',
    fullTime: true,
    __Proto__: TeachSupport
}

Teacher.__Proto__ = user

// Modern systax
Object.setPrototypeOf(TeachSupport, Teacher)


////

let anotherUser = 'Dk   '
String.prototype.trueLength = function(){
   // console.log(`${this.name}`)
   //console.log(`${this}`)
    console.log(`True lenght is : ${this.trim().length}`)
}
anotherUser.trueLength()
'dk'.trueLength()
'kumar'.trueLength()