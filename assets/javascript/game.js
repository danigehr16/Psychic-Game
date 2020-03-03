var alphabet = "abcdefghijklmnopqrstuvwxyz"

function isAnAlphabet(key) {
    if (alphabet.includes(key)) {
        return true;

    }
        else {
            return false;
    }
}
document.onkeyup(function(event) {
    console.log(event.key)
    console.log(isAnAlphabet(event.key))

})

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var guessedLetters = [];
var letterToGuess = null;


var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)]

//variable for count
//variable for computer choice
//wins/ losses
//users guesses

//generate a computer guess

//gather users guess

//evalaute users guess

//store users guessedLetters

//count wins lossses
