var secretNumber = 55

var numberGuess = prompt("Guess the number");
numberGuess = parseInt(numberGuess)

if (secretNumber == numberGuess) {
    alert("Good Job");
} else {
    alert("sorry, the correct answer is " + secretNumber);
}


console.log(secretNumber);
console.log(numberGuess);

console.log(typeof secretNumber);
console.log(typeof numberGuess);