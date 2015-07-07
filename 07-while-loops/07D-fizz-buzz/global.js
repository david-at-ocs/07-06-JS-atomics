var start = parseInt(prompt("Enter the starting value: "));
var end = parseInt(prompt("Enter the end value: "));

if (start < end) {
  while (start <= end) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log("FizzBuzz!");
    }
    else if (start % 5 === 0) {
      console.log("Buzz!");
    }
    else if (start % 3 === 0) {
      console.log("Fizz!");
    }
    else {
      console.log(start);
    }
    start++;
  }
}
else if (start > end) {
  while (start >= end) {
    if (start % 3 === 0 && start % 5 === 0) {
      console.log("FizzBuzz!");
    }
    else if (start % 5 === 0) {
      console.log("Buzz!");
    }
    else if (start % 3 === 0) {
      console.log("Fizz!");
    }
    else {
      console.log(start);
    }
    start--;
  }
}
else {
  alert("Error!")
}