var firstNum = prompt("Please enter a number");
var secondNum = prompt("Please enter a number");
var thirdNum = prompt("Please enter a number");
var firstInc = firstNum
var firstInc = ++firstInc;
var secondSub = secondNum
var secondSub = --secondSub;

firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);
thirdNum = parseInt(thirdNum);



alert(firstNum + " + " + secondNum + " + " + thirdNum + " = " + (firstNum + secondNum + thirdNum));
alert(firstNum + " - " + secondNum + " - " + thirdNum + " = " + (firstNum - secondNum - thirdNum));
alert(firstNum + " * " + secondNum + " * " + thirdNum + " = " + (firstNum * secondNum * thirdNum));
alert(firstNum + " / " + secondNum + " " + (firstNum / secondNum));
alert(firstNum + "++" + " = " + firstInc);
alert(secondNum + "--" + " = " + secondSub);

console.log(typeof firstNum);
console.log(typeof secondNum);
console.log(typeof thirdNum);