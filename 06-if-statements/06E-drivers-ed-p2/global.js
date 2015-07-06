var userAge = prompt("What's your age:");

userAge = parseInt(userAge)

if (userAge >= 25) {
  console.log("You can rent a car.");
} else if (userAge >= 21 ) {
  console.log("please don't drink and drive");
} else if (userAge >= 16 ) {
  console.log("You're eligible for a driver's license");
} else if (userAge >= 0 ) {
  console.log("You can't drive yet, but you'll be able to in a few years");
} else if (userAge < 0 ) {
  console.log("You haven't been born yet");
} else if (isNaN(userAge)) {
  console.log("Sorry, but that's not a number");
}

console.log(typeof userAge);
console.log(userAge);
