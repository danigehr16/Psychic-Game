var alphabet = "abcdefghijklmnopqrstuvwxyz"

var wins = 0;
var losses = 0;
var guesses = 9;
var guessesRemain = 9;
var guessedLetters = [];

var computerGuess = alphabet[Math.floor(Math.random() * computerChoices.length)];

function updateGuessesLeft() {
    document.querySelector('#guessLeft').innerHTML = "Guesses Left; " + updateGuessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.alphabet[Math.floor(Math.random() * this.computerChoices.length)];

};

function updateGuessesSoFar() {
    document.querySelector('#let').innerHTML = "Your Guesses so far:" + guessedLetters.join(', ');
};

var reset = function () {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];
    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = alphabet.includes(userGuess);
    var checkDouble = guessedLetters.includes(userGuess);

    if (checkDouble === true) {
        console.log("double letter");
        alert("Nope you can't use the same letter twice, try again!");
        return false;

    }
     else if (check === false) {
  
    alert("that is not a letter, please select a letter!");
    return false;}
    
    else if (check === true) {
    guessesLeft--;
    guessedLetters.push(userGuess);
    updateGuessesLeft();
    updateGuessesSoFar();

    if (guesesLeft > 0) {
        if (userGuess == letterToGuess)
            wins++;
        // yay.play();
        document.querySelector('#wins').innerHTML = "wins: " + wins;
        userGuess = userGuess.toUpperCase();

    }
} else if (guessesLeft == 0) {
    losses++;
    // Boo.play();
    document.querySelector('#losses').innerHTML = "Losses: " + losses;
    reset();
}
}


