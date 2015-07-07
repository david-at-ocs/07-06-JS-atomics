var password = "kraftwerk"

var passwordTry;

for (passwordTry = prompt("Please enter your password"); password != passwordTry;) {
    passwordTry = prompt("Try again");
}

alert("Access granted")

passwordTry = prompt("Please enter your password")
while (passwordTry != password) {
  passwordTry = prompt("Try again")
}

alert("Access granted")