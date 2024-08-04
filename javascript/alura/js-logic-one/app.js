alert("Welcome to secret number game");

let secretNumber = 40;

let otherNumber = prompt("Choose a number between 0 and 30");

if (otherNumber == secretNumber) {
  alert(`You got it the right number ${secretNumber}`);
} else {
  if (otherNumber > secretNumber) {
    alert("You wrong the answer, the number is lower");
  } else {
    alert("You wrong the answer, the number is higher");
  }
}

