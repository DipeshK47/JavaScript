const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network call,
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise comsumed')
})

///// 

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task - 2')
    },1000)
    resolve()
}).then(function(){
    console.log('Async 2 resolved')
})

//////

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){

    },1000)
    resolve({username: 'Dipesh', email:'dipesh@gmail.com' })
})

promiseThree.then(function(user){
    console.log(user)
})

/////

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        //let error = false
        if (!error){
            resolve({username: 'Dk', password:'123'})
        } else{
            reject('ERROR 404')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username
}).then((username) => {                  //chaining of then statement
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(() => console.log('finally promise is either resolved or rejected'))

//////

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        //let error = false
        if (!error){
            resolve({username: 'Js', password:'123'})
        } else{
            reject('JS ERROR 404')
        }
    },1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


//////////////////

// async function getAllUsers(){
//     try {
//     const response = await fetch('https://api.github.com/users/DipeshK47')
//     const data = await response.json()
//     console.log(data)
//     } catch(error){
//         console.log('E:',error)
//     }
// }
// getAllUsers()

//OTHER WAY 

fetch('https://api.github.com/users/DipeshK47')
.then((resposne) => {
    return resposne.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))