var side1 = prompt("Please enter a positive number for side 1:");
var side2 = prompt("Please enter a positive number for side 2:");
var side3 = prompt("Please enter a positive number for side 3:");

side1 = parseInt(side1);
side2 = parseInt(side2);
side3 = parseInt(side3);

console.log("side 1: " + side1);
console.log("side 2: " + side2);
console.log("side 3: " + side3);

if ((side1 + side2) < side3) {
  console.log(side1 + " + " + side2 + " < " + side3);
  alert("This is not a valid triangle.");
  
} else if ((side1 + side3) < side2) {
  console.log(side1 + " + " + side3 + " < " + side2);
  alert("This is not a valid triangle.");
  
} else if ((side2 + side3) < side1) {
  console.log(side2 + " + " + side3 + " < " + side1);
  alert("This is not a valid triangle.");
  
} else {
  alert("This is a triangle")
}
