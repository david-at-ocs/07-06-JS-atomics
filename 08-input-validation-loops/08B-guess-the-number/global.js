var secretNumber = 55;
var numberGuess;

for (numberGuess = prompt("Guess the number"), numberGuess = parseInt(numberGuess); secretNumber != numberGuess;) {
    numberGuess = prompt("Guess again");
    numberGuess = parseInt(numberGuess);
}

alert("Good Job");


console.log(secretNumber);
console.log(numberGuess);

console.log(typeof secretNumber);
console.log(typeof numberGuess);