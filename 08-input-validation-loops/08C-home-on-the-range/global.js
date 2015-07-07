var guess;
for (guess = prompt("Enter a number between 1 and 8"), guess = parseInt(guess); guess < 9 && guess > 0;) {
    guess = prompt("Keep going");
    guess = parseInt(guess);
}

alert("Good Job");

