let randomNum = (parseInt(Math.random()*100 + 1))

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true;

if(playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        
        validateGuess(guess)
    })
}

function validateGuess(guess) {
//check if its a valid value b/w 1-100
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if( guess < 1){
        alert('Please enter a valid number')
    }
    else if( guess > 100){
        alert('Please enter a valid number')
    } else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`GAME OVER. Random number was ${randomNum}`)
            endGame()
        } else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
// check if random value is equal to Guess and display msg u have won game, if not tell user if value is high or low 
    if(guess === randomNum){
        displayMessage(" WON GAME")
        endGame()
    } else if(guess < randomNum){
        displayMessage("Number is too low")
    } else if(guess > randomNum){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess) {
// cleans value, update Previous Guess and remaining guesses
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
// display msg if value is low or high
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = 'newGame'>START NEW GAME</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNum = (parseInt(Math.random()*100 + 1))
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)

        playGame = true
    })
}
